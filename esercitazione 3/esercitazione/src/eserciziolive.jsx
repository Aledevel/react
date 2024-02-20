// import { useEffect, useState } from "react"

// export function EsercizioLive(){

//     const [inputValue,setInputValue]=useState()



//     function handleInputChange(event){
//         const value = event.target.value
//     setInputValue(value)
//     };
    
//     useEffect(()=>
//         const fetchUserData = async () => {
//             try {
//               const call = await fetch(`https://jsonplaceholder.typicode.com/users/${value}`)  
//               const response = await call.json()
//               console.log(response)
    
//             } catch (error) {
//                 console.log(error)
//                   }      
//                 }
//                 },[setInputValue])
    
//     return(
//         <div>
//             <input type="text" onChange={(e)=>handleInputChange(e)} />
//             <button onClick={FetchCall}>Chiamata</button>

//         </div>
//     )
// }

export const UserProfile = () => {
    const [user, setUser] = useState(null);
    const [idValue, setIdValue] = useState(null);
  
    const handleIdChange = (event) => {
      setIdValue(event.target.value);
    };
  
    useEffect(() => {
      // Fetch user data based on the user ID
      const fetchUserData = async () => {
        try {
          const response = await fetch( `https://jsonplaceholder.typicode.com/users/${idValue}` );
          const userData = await response.json();
          setUser(userData);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };
  
      // Fetch user data when the user ID changes
      fetchUserData();
    }, [idValue]); // Dependency on the userId variable
  
    return (
      <div>
        <h2>User Profile</h2>
        <input
          type="number"
          name="id"
          value={idValue}
          onChange={handleIdChange}
        />
        {user ? (
          <div>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            {/* Display other user details as needed */}
          </div>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
    );
  };
  