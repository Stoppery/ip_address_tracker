import React, { useState } from 'react';
import './Form.css';
import arrow from '../../style/img/icon-arrow.svg';




function Form({formDataToParent}) {

	const [ipData, setIpData] = useState('');

	async function sendData(event) {
		event.preventDefault();
		const API_KEY = process.env.REACT_APP_API_KEY;
		const link = 'https://geo.ipify.org/api/v2/country,city?apiKey=' + API_KEY;
		let ipAdress = '&ipAddress=' + ipData;

		let response = await fetch(link+ipAdress);
		let tmpResult = await response.json();

		
		formDataToParent(tmpResult);
	}

	return (
		<form className='react-form' onSubmit={sendData}>
			<input 
				className='input-ip' 
				placeholder='Search for any IP adress or domain' 
				value={ipData} 
				onChange={e => setIpData(e.target.value)}/>
			<button className="form-button" type="submit"> 
				<img src={arrow} alt="Submit solution"/>
			</button>
		</form>
	);
}

export default Form;