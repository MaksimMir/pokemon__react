import { useEffect, useState } from "react";

export const useDebounse = (value, delay) => {
    const [ debounsedValue, setDebounsedValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounsedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler)
        }
    }, [value]);
    return debounsedValue;
}
