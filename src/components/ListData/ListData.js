import ElemData from "../ElemData/ElemData";

import './ListData.css';

function ListData({dataApi}) {


	return (
		<div className="list-container">
			<ul className="list-data">
				<ElemData headerElem={"IP ADRESS"} dataApiParam={dataApi.ip}/>
				<ElemData headerElem={"LOCATION"} dataApiParam={dataApi.location.city + " " + dataApi.location.postalCode}/>
				<ElemData headerElem={"TIMEZONE"} dataApiParam={dataApi.location.timezone ? "UTC " + dataApi.location.timezone : ""}/>
				<ElemData headerElem={"ISP"} dataApiParam={dataApi.isp}/>
			</ul>
		</div>
	)
}

export default ListData;