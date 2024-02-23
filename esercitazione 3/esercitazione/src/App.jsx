// import { Header } from "./Header"
// import { Image } from "./Image"
// import { Footer } from "./Footer"
// import { Counter } from "./Counter"
import { MyForm } from "./MyForm"
// import { Visibility } from "./Visibility"
// import { GeolocationViewer } from "./GeolocationViewer"
// import { MouseClick } from "./MouseClick"
 import { Clock } from "./Clock"
// import { UncontrolledForm } from "./UncontrolledForm"
// import { List } from "./List"
 import { TodoList } from "./TodoList"
// import { Saluto } from "./Saluto"
 import { Route, Routes } from "react-router-dom"
import { Comparatore } from "./Comparatore"
import { Container } from "./Container"
import { DataFetch } from "./FetchUse"
// import { LanguageContext } from "./LanguageContext"
// import { useState } from "react"


export function App(){
 
  // const [language,setLanguage]= useState('en')

  // function handleSetLanguage(language){setLanguage(language) }

 return(
  <div>
    <Container>
   <Routes> 
      <Route path="/" element={<Comparatore/>}/>
      <Route path="Login" element={<MyForm/>}/>
      {/* <Route path="Fetch" element={<FetchHook/>}/> */}
      <Route path="ToDo" element={<TodoList/>}/>
      <Route path="Clock" element={<Clock/>}/>
      <Route path="users/:username " element={<DataFetch/>}/>
   </Routes>
   </Container>
   </div> 
 )

}