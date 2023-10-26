import { useEffect, useState } from 'react';
import './Card.css';

const Card = ({ pokemon }) => {
	const [pokemonName, setPokemonName] = useState([]);
	const [pokemonImg, setPokemonImg] = useState(false);
	const [buttonName, setButtonName] = useState(false);

	useEffect(() => {
		loadPokemonName(pokemonNameDetail);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[]);

	let pokemonNameDetail = pokemon.species.url;

	const loadPokemonName = async (data) => {
		let response = await fetch(data);
		let result = await response.json();
		let jaName = result.names.find(name => name.language.name === "ja").name;
		setPokemonName(jaName);
	};

	const toggleImg = () => {
		setPokemonImg(!pokemonImg);
	};

	const toggleName = () => {
		setButtonName(!buttonName);
	};

	return (
	<div className="card">
		<button className="imgChangeBtn" onClick={() => {
			toggleImg();
			toggleName();
		}}>
			{buttonName ? "またね！" : "声をかける！"}
		</button>

		<div className="cardImg">
			<img src={pokemonImg ? pokemon.sprites.front_default : pokemon.sprites.back_default} alt="pokemon-img" />
		</div>
		<h3 className="cardName">{pokemonName}</h3>
		<div className="cardTypes">
			<div>― タイプ ―</div>
			{pokemon.types.map((type) => {
				return (
					<div key={type.type.name}>
						<span className="typeName">{type.type.name}</span>
					</div>
				);
			})}
		</div>
		<div className="cardInfo">
			<div className="cardData">
				<p className="title">重さ：{pokemon.weight / 10}kg</p>
			</div>
			<div className="cardData">
				<p className="title">高さ：{pokemon.height / 10}m</p>
			</div>
			<div className="cardData">
				<p className="title">特性：{pokemon.abilities[0].ability.name}</p>
			</div>
		</div>
	</div>
	);
};

export default Card;