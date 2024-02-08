export function MouseClick(){
    function handleClick(event){

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