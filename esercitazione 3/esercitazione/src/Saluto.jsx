export function Saluto(){
    const date = new Date().getHours()
  let actualHour=""
    if (date<=12){
        actualHour="goodmornig"
   }else if (date >12 && date<18){
    actualHour="Good Afternoon"
   }else if (date>18){
    actualHour="good Evening"
   }
    
    return(
         
        <h1>{actualHour}</h1>
    )
}