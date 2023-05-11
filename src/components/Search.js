import React from 'react'

function Search({setName}) {
  return (
    <>
      <div class="form-group d-flex justify-content-center mb-5">
          <input type="email" class="form-control w-50" placeholder="Enter email" onChange={(e)=>setName(e.target.value)}/>
        </div>
    </>
  )
}

export default Search