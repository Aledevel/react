import { useState, useEffect, useContext } from "react";
import { LanguageContext } from "./LanguageContext";



export function Clock(){
    const language = useContext(LanguageContext)
    const [date,setDate] = useState(new Date())
    useEffect(()=>{
        console.log('setting the clock')
        const intervalID= setInterval(()=>{  setDate(new Date())},1000)

        return ()=>{
            console.log('clearing clock')
            clearInterval(intervalID)
        }
    }, [])

    return(
        <div className="clock">
            <h2>{language ==="en"? "The Local hour is :":"l'ora attuale è "}{date.toLocaleTimeString()}</h2>
        </div>
    )
}