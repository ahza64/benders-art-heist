import React, { useState, useEffect } from 'react';

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const setter = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(setter);
    }
  }, [value, delay]);
  return debouncedValue;
}

function App() {
  const [search, setSearch] = useState('');
  const debouncedValue = useDebounce(search, 700);
  function updateSearch(e) {
    setSearch(e.target.value);
  }

  useEffect(() => {
    console.log("debounced value", debouncedValue);
  }, [debouncedValue]);
  
  return (
    <div>
      <input type="text" onChange={e => updateSearch(e)} value={search}/>

    </div>
  );

}

export default App;
