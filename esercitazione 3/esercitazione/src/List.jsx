export function List({colors}){
    

    return(
        <ul className="List">
            {colors.map((color) => <li key={color.id}>{color.name}</li>)}
        </ul>
    )


}