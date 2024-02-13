import { Header } from "./Header"
import { Image } from "./Image"
// import { Footer } from "./Footer"
// import { Counter } from "./Counter"
// import { Visibility } from "./Visibility"
// import { GeolocationViewer } from "./GeolocationViewer"
// import { MouseClick } from "./MouseClick"
import { Clock } from "./Clock"
// import { UncontrolledForm } from "./UncontrolledForm"
import { List } from "./List"
export function App(){
    return(
        <div>
          <Header/> 
           <Image src="https://upload.wikimedia.org/wikipedia/commons/9/96/Google_web_search.png"  />
           {/* <Footer/> */}
           <Clock/>
           {/* <Counter />
          <Visibility />
          <GeolocationViewer />
          <MouseClick/> */}
          {/* <UncontrolledForm/> */}
          <List colors={[
            {id:1,name:"Blue"},
            {id:2,name:"red"},
            {id:3,name:"green"},
            {id:4,name:"orange"},
          ]}/>
        </div>
    )
}