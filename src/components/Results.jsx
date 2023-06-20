// import { useEffect, useState } from 'react';
import ResultItem from './ResultItem';
import ContinueButton from './ContinueButton';

import data from '../data.json';

export default function Summary() {
	return (
		<section className='results'>
			<h2 className='results-heading'>Summary</h2>
			<div className='results-container'>
				{data.map((result, i) => (
					<ResultItem key={i} result={result} />
				))}
			</div>
			<ContinueButton />
		</section>
	);
}
