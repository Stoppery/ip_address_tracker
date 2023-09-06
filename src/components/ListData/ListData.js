import ElemData from "../ElemData/ElemData";

function ListData({dataApi}) {


	return (
		<ul className="list-data">
			<ElemData headerElem={"IP ADRESS"} dataApiParam={dataApi.ip}/>
			<ElemData headerElem={"LOCATION"} dataApiParam={dataApi.location.city + " " + dataApi.location.postalCode}/>
			<ElemData headerElem={"TIMEZONE"} dataApiParam={dataApi.location.timezone ? "UTC " + dataApi.location.timezone : ""}/>
			<ElemData headerElem={"ISP"} dataApiParam={dataApi.isp}/>
		</ul>
	)
}

export default ListData;