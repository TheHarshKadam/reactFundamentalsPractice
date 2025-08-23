import { createContext, useContext, useState } from "react";

const LocalizationContext = createContext();
export const useLocalization = ()=>{
    return useContext(LocalizationContext)
}
export function LocalizationProvider({children}){
    const [local, setLocal] = useState('en')
    const localizedString = {
        en:{
            greeting: 'Hello User!',
            welcome: 'Welcome to my app'
        },
        es:{
            greeting: 'Hola mundo!!',
            welcome: 'Bienvenido a mi aplicacion'
        }
    };
    const translate = (key)=>{
        return localizedString[local][key]
    }
    return(
        <LocalizationContext.Provider value = {{setLocal, local, translate}}>
            {children}
        </LocalizationContext.Provider>
    )
}