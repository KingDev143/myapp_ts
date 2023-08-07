import axios from 'axios'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import "../Styles/put.css"

type  User ={
    Mobile:string,
    id:string,
    name:string,
    email:string
}

const Updateuser=()=>{
    let navigate=useNavigate();
    const[userdata,setdata]=useState<User>({
        id:'',
        name:'',
        Mobile:'',
        email:''
     });
     const setNewData = (id_:string, newvalue:string)=>{
        setdata(prestate=>({...prestate,[id_]:newvalue}));}
        
const updateuserdetails =(e:any)=>{
       e.preventDefault();
    console.log(userdata.id);
    
    const url=`http://localhost:4000/Person/${userdata.id}`;
        axios.put(url,userdata)
        .then(res=>alert("Data Updated Successfully !! "))
                 }
                 const homeclick=()=>{
                    navigate('/')
              } 
 return(
    <div className='putmain'>
           <div className='subdiv'>
                <h1>UpdateUser</h1><hr />
                    <form onSubmit={updateuserdetails}>
                                <input placeholder="Enter id" value={userdata.id} onChange={(e)=>{setNewData("id",e.target.value)}} required />
                                <input placeholder="Enter name" value={userdata.name} onChange={(e)=>{setNewData("name",e.target.value)}} required/>
                                <input placeholder="Enter Email" value={userdata.email} onChange={(e)=>{setNewData("email",e.target.value)}} required/>
                                <input placeholder="Enter Mobile Number" value={userdata.Mobile} onChange={(e)=>{setNewData("Mobile",e.target.value)}} required/>
                                <input type="button" value="Back" onClick={homeclick} />
                                <input type="submit" />
                    </form>
           </div>
    </div>
 )
}
export default Updateuser;