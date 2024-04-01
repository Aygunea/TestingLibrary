import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('')
  const [items, setItems] = useState([])

  const handlesubmit = (e) => {
    e.preventDefault()
    if (value.trim() !== '') {
      setItems([...items, value.trim()])
      setValue('')

    }
  }
  const handleChange = (e) => {
    setValue(e.target.value)
  }
  return (
    <div className="App">
      <form action="#" onClick={handlesubmit}>
        <input type="text" value={value} onChange={handleChange} data-testid='todo_input' />
        <button type='submit'>ADD</button>
      </form>
      <ul>
        <li>Test Todo</li>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
