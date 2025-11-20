import React, { useState } from 'react';
import './composants/IsotopeGrid.css';
import Filters from './composants/Filters';
import TabCard from './composants/TabCard';


function App() {
  const [activeFilter, setActiveFilter] = useState('*');

  const handleFilterClick = (filterValue) => {
    setActiveFilter(filterValue);
  };

  return (
    <div className="isotope-container">
      <div className="isotope-header">
        <h1>Portfolio Gallery</h1>
        <p>Filtrez par catégorie pour explorer mes projets</p>
      </div>
      <Filters activeFilter={activeFilter} onFilterClick={handleFilterClick} />
      <TabCard activeFilter={activeFilter}/>
    </div>
  );

}


export default App;
