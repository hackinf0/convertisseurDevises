import React from 'react'

export default function Affichage(props) {
	const scaleNames={
		m:'Montant',
		c:'Converti'
	}
	const{
		montant,
		scale
	}=props
	const scaleName= scaleNames[scale]

	return (
		<div >
			<div style={{backgroundColor:'#0071eb',width:'200px',height:'50px',borderRadius:'6px',display:'flex',justifyContent:'center',alignItems:'center'}}>
			{scaleName} : {montant}
			</div><br/>
		</div>
		
	)
}
