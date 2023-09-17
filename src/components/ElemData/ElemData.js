import './ElemData.css';

function ElemData({headerElem, dataApiParam}) {


	return (
		<li className="list-elem">
			<h3 className="elem-header">{headerElem}</h3>
			<p className="elem-content">{dataApiParam}</p>
		</li>
	)
}

export default ElemData;