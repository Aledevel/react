import { Header } from "./Header"
import { Image } from "./Image"
import { Footer } from "./Footer"
import { Counter } from "./Counter"
import { MyForm } from "./MyForm"
import { Visibility } from "./Visibility"
import { GeolocationViewer } from "./GeolocationViewer"
import { MouseClick } from "./MouseClick"
import { Clock } from "./Clock"
import { UncontrolledForm } from "./UncontrolledForm"
import { List } from "./List"
import { TodoList } from "./TodoList"
import { Saluto } from "./Saluto"
import { Comparatore } from "./Comparatore"

export function App(){
    return(
        <div >
          <div  >
                <Header /> 
                  <Image src="https://upload.wikimedia.org/wikipedia/commons/9/96/Google_web_search.png" />
                  <Footer/>
                  <Clock/>
                  <Counter />
                  <MyForm/>
           </div>
           <div>
                <Visibility />
                <GeolocationViewer />
                <MouseClick/> 
                <UncontrolledForm/>
                <List colors={[{id:1,name:"Blue"},{id:2,name:"red"},  {id:3,name:"green"}, {id:4,name:"orange"}, ]}/>
                <TodoList/>
                 <Saluto/>
                <Comparatore/>
          </div>
        // </div>
    )
}