import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Users() {

    const[users,setUsers]=useState([])

    useEffect(()=>{
          axios.get("http://localhost:3001")
          .then(result=>setUsers(result.data))
          .catch(err=>console.log(err))
    },[])


  return (
    <div className='container'>
         <div className='row'>
            <div className='col col-md-12'>
               <div className='card my-4'>
                <div className='card-header text-center'>
                       <h4>All The Users</h4>
                       <Link to='/create' className='btn btn-primary-success'>Add Users</Link>
                </div>
                <div className='card-body'>
                <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>

    {
        users.map((user)=>{
          return  <tr>
            <th scope="row">{user.name}</th>
            <td>{user.email}</td>
            <td>{user.age}</td>
            <td>
                <Link to='/update' className='btn btn-success'>Update</Link>
                <button className='btn btn-danger'>Delete</button>
            </td>
          </tr>
        })
    }
   
    
  </tbody>
</table>


                </div> 
               </div>
            </div>
         </div>
    </div>
  )
}
