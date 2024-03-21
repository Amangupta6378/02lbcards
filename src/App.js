import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import data from './components/Data'
import Tours from './components/Tours';
function App() {
  const [tours, setTours] = useState(data)

  function removeTour(id){
    const newTour = tours.filter((tours) => tours.id !== id)
    setTours(newTour)
  }

  

  
  if(tours.length == 0){
    return (
      <div>
        <h4>No Tours Left</h4>
        <button onClick={()=> setTours(data)}>Refresh</button>
      </div>
    )
  }
  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;
