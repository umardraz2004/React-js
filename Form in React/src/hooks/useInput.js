import { useState } from "react";

export function useInput( defaultValue, ValidationFn) {
    const [enteredValue, setEnteredValue] = useState(defaultValue);
    const [isEdit, setIsEdit] = useState(false);

    const valueIsValid = ValidationFn(enteredValue)

    function handleInputChange(event) {
        setEnteredValue(event.target.value);
        setIsEdit(false);
    }

    function handleInputBlur() {
        setIsEdit(true);
    }

    return {
        value: enteredValue,
        // isEdit,
        handleInputChange,
        handleInputBlur,
        hasError: isEdit && !valueIsValid
    };
}