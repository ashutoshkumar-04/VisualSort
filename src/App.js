import React  from 'react';
import logo from './logo.svg';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';
import './App.css';
import Customers from './Customers'
function App(){
  return(
    <div  className="App">
  <SortingVisualizer></SortingVisualizer>
    </div>
  );
}
export default App;
