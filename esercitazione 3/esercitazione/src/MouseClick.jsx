export function MouseClick(){
    function handleClick(event){
        event.preventDefault()
        console.log(event.currentTarget.src)
        console.log(event.currentTarget.name)

    }
    return(
        <div>
            <button name="one" onClick={handleClick}>
                <img  height={26} width={34} src="#"></img>
                e cliccami!</button>
        </div>
    )
}