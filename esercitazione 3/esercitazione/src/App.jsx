// import { Header } from "./Header"
// import { Image } from "./Image"
// import { Footer } from "./Footer"
// import { Counter } from "./Counter"
// import { MyForm } from "./MyForm"
// import { Visibility } from "./Visibility"
// import { GeolocationViewer } from "./GeolocationViewer"
// import { MouseClick } from "./MouseClick"
// import { Clock } from "./Clock"
// import { UncontrolledForm } from "./UncontrolledForm"
// import { List } from "./List"
// import { TodoList } from "./TodoList"
// import { Saluto } from "./Saluto"
// import { Comparatore } from "./Comparatore"
import { Container } from "./Container"
import { LanguageContext } from "./LanguageContext"
import { useState } from "react"
import { DataFetch } from "./FetchUse"

export function App(){
 
  const [language,setLanguage]= useState('en')

  function handleSetLanguage(language){setLanguage(language) }

 return(
  <div>
    <button className="button" onClick={()=>handleSetLanguage('it')}>IT</button>

    <button className="button" onClick={()=>handleSetLanguage('en')}>EN</button> 
 
<LanguageContext.Provider value={language}>
       <Container title={ <h1>Questi sono i miei esercizi</h1>}>
          <div  >
            <DataFetch />
                {/* <Header /> 
                  <Image src="https://upload.wikimedia.org/wikipedia/commons/9/96/Google_web_search.png" />
                  <Footer/>
                  <Clock/>
                  <Counter />
                  <MyForm/> */}
           </div>
         
           <div>
                {/* <Visibility />
                <GeolocationViewer />
                <MouseClick/> 
                <UncontrolledForm/>
                <List colors={[{id:1,name:"Blue"},{id:2,name:"red"},  {id:3,name:"green"}, {id:4,name:"orange"}, ]}/>
                <TodoList/>
                 <Saluto/>
                <Comparatore/> */}
            </div>
        </Container> 
  </LanguageContext.Provider>

   </div> 
 )

}