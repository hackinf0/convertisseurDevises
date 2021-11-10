import React from 'react'
import './InputDevise.css'

const DeviseInput = (props) => {

	const{
		montant,
		onChange
	}=props

	function HandleChange(e){
		onChange(e)
	}

	return (
 		<div className='DeviseInput' >
			Montant: 
			<input className='InputDevise' type='number' placeholder='Entrez un montant ' value={montant} onChange={HandleChange}/>
		</div>
	)
}

export default DeviseInput
