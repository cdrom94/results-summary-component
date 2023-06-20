export default function ResultItem({ result }) {
	return (
		<div className={`result result-${result.category.toLowerCase()}`}>
			<span className='result-category'>
				<img
					className='result-category-icon'
					src={`${process.env.PUBLIC_URL}${result.icon}`}
					alt={`${result.category.toLowerCase()} result category icon`}
				/>
				<span className='result-category-text'>{result.category}</span>
			</span>
			<span className='result-score'>
				{result.score} <span className='result-score-hundred'> / 100</span>
			</span>
		</div>
	);
}
