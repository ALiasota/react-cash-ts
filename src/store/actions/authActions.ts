
import { AppDispatch } from '..';
import axios from "../../axios";
import { authSlice } from '../slices/authSlice';

interface IAuthResponse {
    access: string
    refresh: string
}

export interface IAuth {
    username: string
    password: string
}

export const register = (data: IAuth) => {
    return async (dispatch: AppDispatch) => {
      try {
        const response = await axios.post<IAuthResponse>(`auth/register`, data)
        dispatch(authSlice.actions.loginSuccess({
          access: response.data.access,
          username: data.username
        }))
      } catch (e) {
        console.log('Error register', e)
      }
    }
  }
  
  export const login = (data: IAuth) => {
    return async (dispatch: AppDispatch) => {
      try {
        const response = await axios.post<IAuthResponse>(`auth/login`, data)
        dispatch(authSlice.actions.loginSuccess({
          access: response.data.access,
          username: data.username
        }))
      } catch (e) {
        console.log('Error Login', e)
      }
    }
  }