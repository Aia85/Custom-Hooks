import React, { useReducer, useEffect } from "react"
import { todoReducer } from "./todoReducer";

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar la piedra del alma',
        done: false,
    },
    // {
    //     id: new Date().getTime() * 3,
    //     description: 'Recolectar la piedra de poder',
    //     done: false,
    // },
]

const init = () => {
    //intenta ver que hay en el localStorage, si no hay nada muestra un arreglo vacío.
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {

 // const [todos, setTodo] = useState(initialState)
    //El init lo usamos para precargar datos
    const [todos, dispatch] = useReducer(todoReducer, initialState,init)


    //Guarda en el localStorage todas las modificaciones que hagamos sea agregar o eliminar items.
    useEffect(() => {
        // console.log(todos);
        localStorage.setItem('todos',JSON.stringify(todos))
    }, [todos])
    


    const onAddTodo = (todo) => {
        // setTodo([newTodo, ...todos])
        //El type es el nombre del todoReducer
        const action= {
            type: '[TODO] add todo',
            payload: todo
        }
        dispatch(action)
    }
    
    const onRemoveTodo = (id) => {  
        console.log({id}); 
        dispatch({   
            type: '[TODO] remove todo',
            payload: id
        })
    }

    const onDone = (id) => {  
        console.log({id}); 
        dispatch({   
            type: '[TODO] done todo',
            payload: id
        })
    }

    const cleanCategory = () => {
        // setTodo(initialState)
       const clean = {
            type: '[TODO] reset todo',
       
       }
        dispatch(clean)
    }

    // const handleNewTodo = ( todo ) => {
    //     console.log({todo});
    // }

    const todosCount = todos.length;

    const pendingTodosCount= todos.filter(todo => !todo.done).length


    return {
        todos,
        cleanCategory,
        onDone,
        onAddTodo,
        onRemoveTodo,
        todosCount,
        pendingTodosCount

    }
}
