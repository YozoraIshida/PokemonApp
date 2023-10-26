import React from 'react';
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import './Btn.css';

const Btn = ({ handlePrevPage, handleNextPage }) => {
	return (
		<div className='btn'>
			<button className='prev' onClick={handlePrevPage}>
				<i className='leftIcon'>
					<AiFillCaretLeft/>
				</i>
				PREV
			</button>
			<button className='next' onClick={handleNextPage}>
				NEXT
				<i className='rightIcon'>
					<AiFillCaretRight/>
				</i>
			</button>
		</div>
	);
};

export default Btn;