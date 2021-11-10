import React, {useState,useEffect} from 'react'
import './DropDown.css'

export const Dropdown = (props) => {
	const{
		deviseItem,
		selectedDevise,
		onChangeCurrency,
	}=props
	return (
		<select className='DropDown' value={selectedDevise} onChange={onChangeCurrency}>
			{deviseItem.map((option)=>(
				<option key={option} value={option}>{option}</option>
			))}
		</select>
	)
}
