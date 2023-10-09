import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CreateUser() {

    const[name,setname]=useState()
    const[email,setEmail]=useState()
    const[age,setAge]=useState()
    const navigate=useNavigate()

    const Submit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3001/createuser",{name,email,age})
        .then(result=>{
            console.log(result)
            navigate('/')
        })
        .catch(err=>console.log(err))
    }
  return (
    <div className='container'>
        <div className='row'>
            <div className='col col-md-12'>
                <div className='card my-3' >
                   <div className='card-header text-center'>
                    <h4>Add Users</h4>
                   </div>
                   <div className='card-body '>
                    <form onSubmit={Submit}>
                         <div class="form-group">
                           <label for="">Name</label>
                           <input type="text" name="name" id="email" class="form-control" onChange={(e)=>setname(e.target.value)} placeholder="Enter Your Name" aria-describedby="helpId"/>
                        </div>

                        <div class="form-group">
                           <label for="">Email</label>
                           <input type="text" name="email" id="email" class="form-control" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Your Email" aria-describedby="helpId"/>
                        </div>

                        <div class="form-group">
                           <label for="">age</label>
                           <input type="text" name="age" id="age" class="form-control" onChange={(e)=>setAge(e.target.value)} placeholder="Enter Your Age" aria-describedby="helpId"/>
                        </div>

                        <button className='btn btn-success my-3 text-center' type='submit'>Submit</button>
                        </form>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}
