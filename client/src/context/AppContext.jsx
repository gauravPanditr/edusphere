import { createContext } from "react";


export const AppContext=createContext();

const value ={

}

export const AppContextProvider=(props)=>{
   return (
    <AppContext.Provider value={value}>
{ props.children}
    </AppContext.Provider>
   )
}

