import React, {useState,useEffect} from 'react'
import Affichage from './Affichage'
import './CardConverter.css'
import DeviseInput from './DeviseInput.js'
import { Dropdown } from './Dropdown'

const CardConverter = () => {
	const [deviseItem, setDeviseItem] = useState([])
	const [fromDeviseItem, setFromDeviseItem] = useState()
	const [toDeviseItem, setToDeviseItem] = useState()
	const [conversionDevise, setConversionDevise] = useState()
	const [montant, setMontant] = useState(10)
	const [montantDevise, setMontantDevise] = useState(true)
	const API_URL="http://api.exchangeratesapi.io/v1/latest?access_key=e1af139e3b352c1cb8fff897152c22ef&format=1"


	useEffect(() => {
		fetch(API_URL)
		.then(res =>{
			if (res.ok) {
				res.json().then(data=>{
					const firstDevise= Object.keys(data.rates)[0]
					setDeviseItem([...Object.keys(data.rates),data.base])
					setFromDeviseItem(data.base)
					setToDeviseItem(firstDevise)
					setConversionDevise(data.rates[firstDevise])
				})
			}
		})
	}, [])
	useEffect(() => {
		if (fromDeviseItem!=null && toDeviseItem!=null) {
			fetch(`${API_URL}? base =${fromDeviseItem}&Symbols=${toDeviseItem}`)
			.then(res=>res.json()
			.then(data=>setConversionDevise(data.rates[toDeviseItem])
		))
		}
	}, [fromDeviseItem,toDeviseItem])
	function onChange(e){
		setMontant(e.target.value)
	}
	let toMontant, fromMontant
	
	if (montantDevise) {
		fromMontant=montant
		toMontant= montant * conversionDevise
	}else{
		fromMontant=montant
		toMontant= montant / conversionDevise
	}

	return (
		<div style={{justifyContent: 'center',display:'flex',height:'800px',paddingTop:'7%'}} >
			<div className='MainCard'> 
				<div className='cardTitle'>
					<div className='title' >Convertisseur de devises</div>
				</div>
				<div className='row'>
						<DeviseInput montant={montant} onChange={onChange} />
						<Dropdown deviseItem={deviseItem} selectedDevise={fromDeviseItem} 
							onChangeCurrency={e=>setFromDeviseItem(e.target.value)} montant={fromMontant} />
						<Dropdown deviseItem={deviseItem} selectedDevise={toDeviseItem} 
							onChangeCurrency={e=>setToDeviseItem(e.target.value)} montant={toMontant} />
				</div>
				<div className='Affichage'>
					<Affichage scale='m' montant={fromMontant}/>
					<Affichage scale='c' montant={toMontant}/>
				</div>
			</div>

		</div>
	)
}

export default CardConverter
