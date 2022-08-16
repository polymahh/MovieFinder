import { createContext, useContext, useState } from "react";

export  const titleContext = createContext()


export const TitleProvider = ({children}) =>{

    const [title,setTitle] = useState('batman')

    const handleTitle = (t)=>{
        setTitle(t)
    }

    return(
        <titleContext.Provider value={{title,handleTitle}}>
            {children}
        </titleContext.Provider>
    )
}

export const useTitleContext = ()=> useContext(titleContext)