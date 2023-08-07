import {useNavigate} from 'react-router-dom'
import "../Styles/Home.css";

const Homepage=()=>{
    let navigate = useNavigate();
 
    const savedata=()=>{
    navigate("/post")
   }
   const getdata=()=>{
    navigate("/get")
   }
    const updatedata=()=>{
       navigate("/put")
   } 
   const deletefunction=()=>{
  
    navigate("/deletedata")
   }
  
  
    return(
        <div className='homediv'>
                  <div className='subhomediv'>
                   <h1>HOME PAGE</h1>
                    <button onClick={savedata}>SaveUser</button>
                    <button onClick={getdata}>GetUser</button>
                    <button onClick={updatedata}>UpdateUser</button>
                    <button onClick={deletefunction}>DeleteUser</button>
                  
                  </div>
            </div>
    )

}
export default Homepage;