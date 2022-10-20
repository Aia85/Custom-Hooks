import { useState } from "react"


export const useForm = (Formularioinicial = {}) => {

    const [formState, setformState] = useState(Formularioinicial)

    const onInputChange = ({target}) => {
        const {name, value} = target
        setformState({
            ...formState,
            [name]: value
        })
    }

    const onResetForm = () => {        
        setformState(Formularioinicial)
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }

}
