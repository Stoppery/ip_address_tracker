import React, { useState, useEffect } from 'react';

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
      timezone: '',
      lat: 55.751244,
      lng: 37.618423
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
    <div>
      <Form formDataToParent={formDataToParent}/>
      <ListData dataApi={dataApi}/>
      <Map lat={dataApi.location.lat} long={dataApi.location.lng}/>
    </div>
  );
}

export default App;
