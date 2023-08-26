import React from 'react'

const Login = () => {
  return (
    <div>
        <form>
        <div class="mb-3 col-4">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Registered Mail" />
</div>
<div class="mb-3 col-4">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <input type="password" class="form-control" id="exampleFormControlInput2" placeholder="Enter Password" />
  
</div>
<div className='mb-3 col-4'>
    <button className='btn btn-success'>Login</button>
</div>
</form>
    </div>
  )
}

export default Login;