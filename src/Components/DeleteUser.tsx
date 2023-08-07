import {useState} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import "../Styles/delete.css"

type  User ={
    id:string,
 }
const Removeuser=()=>{
    let navigate=useNavigate();
    const[userdata,setdata]=useState<User>({
        id:''
     });
     const setNewData = (id_:string, newvalue:string)=>{
        setdata(prestate=>({...prestate,[id_]:newvalue}));}
     const deleteuser =(e:any)=>{
            e.preventDefault(); 
            const url=`http://localhost:4000/Person/${userdata.id}`;
                axios.delete(url)
                .then(res=>alert("Data Deleted Successfully !! "))
                         }
      const homeclick=()=>{
           navigate('/')
                      }                
    return(
        <div className='deletediv'>
            <div className='deletesubdiv'>
                    <h1>DeleteUser</h1>
                    <form onSubmit={deleteuser}>
                            <input placeholder='Enter id' value={userdata.id} onChange={(e)=>{setNewData("id",e.target.value)}} required />
                            <input type="button" value="Back" onClick={homeclick} />
                            <input type="submit" />
                </form>
            </div>
        </div>
    )
}
export default Removeuser;