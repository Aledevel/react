import { useState, useEffect } from "react";


export function Clock(){
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
        <div>
            <h2>l'ora attuale è {date.toLocaleTimeString()}</h2>
        </div>
    )
}