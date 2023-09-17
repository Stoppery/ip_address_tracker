import React, { useState, useEffect } from 'react';

import Tittle from './components/Tittle/Tittle';
import Form from './components/Form/Form';
import ListData from './components/ListData/ListData';
import Map from './components/Map/Map';

import './App.css';




function App() {
  const [dataApi, setDataApi] = useState({
    ip: '',
    location: {
      city: '',
      postalCode: '',
      timezone: ''
    },
    isp: ''
  });

  const formDataToParent = (formData) => {
    setDataApi(formData);
  }

  useEffect(() => {
    console.log(dataApi);
  }, [dataApi]);

  return (
    <div className='react-container'>
      <div className='hader-tittle-form'>
        <Tittle />
        <Form formDataToParent={formDataToParent}/>
      </div>
      <ListData dataApi={dataApi}/>
      <Map dataApi={dataApi}/>
    </div>
  );
}

export default App;
