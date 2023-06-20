const Score = () => {
	return (
		<section className='score-summary'>
			<h1>Your Result</h1>
			<div className='score-summary-circle'>
				<p className='score-summary-circle-score'>76</p>
				<p className='score-summary-circle-hundred'>of 100</p>
			</div>
			<p className='score-summary-rating'>Great</p>
			<p className='score-summary-text'>
				Your performance exceed 65% of the people conducting the test here!
			</p>
		</section>
	);
};

export default Score;
