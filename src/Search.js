import React, { useState } from 'react'
import { useGlobalContext } from './context'

const Search = () => {
  // const [item,setItem]=useState("")
  const {query,setQuery,isError}=useGlobalContext();
  const handleQuery=(event)=>{
    setQuery(event.target.value)
  }
  return(
  <>
<section className="search-section">
  
<h2>Search Your Favourite Movie</h2>
<form action="#" onSubmit={(e)=>e.preventDefault}>
  <div>
    <input type="text" placeholder="Search Here"

      value={query}
      onChange={handleQuery}
    />
   
  </div>
</form>
<div className='card-error'>
<p>{isError.show && isError.msg}</p>
</div>
</section>;
   </>
);
};

export default Search
