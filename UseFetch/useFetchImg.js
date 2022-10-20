import { useEffect, useState } from "react";


export const useFetchImg = (counter) => {

    const [state, setState] = useState({
        data2:null,
        isLoading2:true,

    })

    const getFetch = async() => {

        setState({
            ...state,
            isLoading2: true,
        })

        const resp2 = await fetch(`https://www.breakingbadapi.com/api/characters/${counter}`);
        const data2 = await resp2.json();   
        const { img, name } = !!data2 && data2[0]


        // console.log(data);
        setState({
            img,
            name,
            isLoading2: false,
        })
    }

    useEffect(() => {
        getFetch()
    }, [`https://www.breakingbadapi.com/api/characters/${counter}`])
    
    // return state; Equivalente
    return {
        data2:       state.data2,
        isLoading2:  state.isLoading2,
        hasError2:   state.hasError2,
        img: state.img,
        name: state.name,
        

    }

}
