import React, { ChangeEvent, FormEvent, useState, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hook/redux";
import { IAuth, login } from "../store/actions/authActions";

export function AuthPage() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [form, setForm] = useState<IAuth>({
      password: '',
      username: ''
    });
    
    const submitHandler = (e: FormEvent) => {
        e.preventDefault();
    };

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setForm(prev => ({...prev, [event.target.name]: event.target.value}))
      };

    const isFormValid = () => {
        return form.password.trim().length && form.username.trim().length
      }

    const loginHandler = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (isFormValid()) {
          await dispatch(login(form))
          navigate('/')
        } else {
          alert('Form is invalid!')
        }
      }
      
    return(
        <form
        className="container mx-auto mt-8 p-4 flex justify-center"
        onSubmit={submitHandler}
      >
        <div>
          <div>
            <label htmlFor="username" className="mr-2">Username</label>
            <input type="text" id="username" className="border" name="username" onChange={changeHandler} />
          </div>
  
          <div className="mb-4">
            <label htmlFor="password" className="mr-2">Password</label>
            <input
              type="password"
              id="password"
              className="border"
              name="password" onChange={changeHandler} />
          </div>
  
          <button
            type="submit"
            className="border py-2 px-4 mr-4"
          >
            Register
          </button>
  
          <button
            type="button"
            className="border py-2 px-4"
            onClick={loginHandler}
          >
            Login
          </button>
        </div>
      </form> 
    )
}