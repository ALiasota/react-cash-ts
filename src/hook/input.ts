import { ChangeEvent, useState } from "react";

interface InputReturn {
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const useInput = (initialValue: string): InputReturn => {
    const [value, setValue] = useState('');
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    return {
        value,
        onChange
    }
}