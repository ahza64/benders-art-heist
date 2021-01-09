import React, { useState, useEffect } from 'react';


function App() {


  const [search, setSearch] = useState('enter here');

  function updateSearch(e) {
    console.log("updateSearch", e.target.value);
    setSearch(e.target.value);
    console.log(search);
  }

  useEffect(() => {
    setSearch(search)
    console.log("useEffect search", search);
  });

  return (
    <div>
      <input type="text" onChange={e => updateSearch(e)} value={search}/>

    </div>
  );

}

export default App;
