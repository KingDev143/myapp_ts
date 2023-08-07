import{useEffect,useState} from 'react'
import axios from 'axios'
import "../Styles/get.css"
import {useNavigate} from 'react-router-dom'

 type  User ={
    Mobile:string,
    id:string,
    name:string
    email:string
}


const Getuser=()=>{
    let navigate=useNavigate();
   const[data,setdata]= useState<User[]>()

useEffect(()=>{
                    const url="http://localhost:4000/Person";
                axios.get(url)
                .then((res)=>{
                    setdata(res.data);
                });
               
            },[]);
            const homeclick=()=>{
                navigate('/')
          } 
    return(
        <div className='mainget'>
            <h1>User details</h1>
             <table>
                   <thead>
                            <tr>
                                <th>ID.No</th>  
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile NUmber</th>
                            </tr>
                    </thead>
                    <tbody> 
                        {data && data.map((e)=>{
                            return (<tr>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.email}</td>
                                <td>{e.Mobile}</td>
                                </tr>)
                        })}
             </tbody>
             </table>
             <button onClick={homeclick}>Back</button>
      
        </div>
    )
}
export default Getuser;


