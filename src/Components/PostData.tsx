import {useState} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import "../Styles/post.css"

type  User ={
    Mobile:string,
    id:string,
    name:string,
    email:string
}

const Adduser=()=>{
     let navigate=useNavigate();
    const[userdata,setdata]=useState<User>({
        id:'',
        name:'',
        Mobile:'',
        email:'',
        
     });
  
const setNewData = (parameter:string, newvalue:string)=>{
                                          setdata((prestate)=>({...prestate,[parameter]:newvalue}));
                                                  }

const adduserdetails =()=>{
                                const url="http://localhost:4000/Person";
                                axios.post(url,userdata)
                                .then(res=>alert("Data Inserted Successfully !! "))
                         }
const homeclick=()=>{
                        navigate('/')
                    }                

    return(
        <div className='postmain'>
         <div className='subpost'>
            <h1>AddUser</h1>
            <form onSubmit={adduserdetails}>
                <input placeholder="Enter id" value={userdata.id} onChange={(e)=>{setNewData("id",e.target.value)}} required />
                <input placeholder="Enter name" value={userdata.name} onChange={(e)=>{setNewData("name",e.target.value)}} required/>
                <input placeholder="Enter Email" value={userdata.email} onChange={(e)=>{setNewData("email",e.target.value)}} required/>
                <input placeholder="Enter Mobile Number" value={userdata.Mobile} onChange={(e)=>{setNewData("Mobile",e.target.value)}} required/>
                <input type="button" value="Back" onClick={homeclick}/>
                <input type="submit" />
              
            </form>
           
         </div>
        </div>
    )

}
export default Adduser;