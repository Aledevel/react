import { useState, useEffect } from "react";


export function Clock(){
    const [date,setDate] = useState(new Date())

    useEffect(()=>{
        console.log('setting the clock')
        const intervalID= setInterval(()=>{
            setDate(new Date())
        },1000)

        return ()=>{
            console.log('clearing clock')
            clearInterval(intervalID)
        }
    }, [])
    return(
        <div>
            <p>l'ora attuale è {date.toLocaleTimeString()}</p>
        </div>
    )
}