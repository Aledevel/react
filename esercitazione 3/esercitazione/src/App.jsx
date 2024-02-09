import { Header } from "./Header"
import { Image } from "./Image"
import { Footer } from "./Footer"
import { Counter } from "./Counter"
import { Visibility } from "./Visibility"

export function App(){
    return(
        <div>
          <Header/> 
           <Image src="https://upload.wikimedia.org/wikipedia/commons/9/96/Google_web_search.png"  />
           <Footer/>
           <Counter />
          <Visibility />
        </div>
    )
}