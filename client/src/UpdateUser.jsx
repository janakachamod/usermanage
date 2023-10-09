import React from 'react'

export default function UpdateUser() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col col-md-12'>
                    <div className='card my-3' >
                       <div className='card-header text-center'>
                        <h4>Update Users</h4>
                       </div>
                       <div className='card-body '>
                        <form>
                             <div class="form-group">
                               <label for="">Name</label>
                               <input type="text" name="name" id="email" class="form-control" placeholder="Enter Your Name" aria-describedby="helpId"/>
                            </div>
    
                            <div class="form-group">
                               <label for="">Email</label>
                               <input type="email" name="email" id="email" class="form-control" placeholder="Enter Your Email" aria-describedby="helpId"/>
                            </div>
    
                            <div class="form-group">
                               <label for="">age</label>
                               <input type="number" name="age" id="age" class="form-control" placeholder="Enter Your Age" aria-describedby="helpId"/>
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
