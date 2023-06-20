import Results from './Results';
import Score from './Score';
import Attribution from './Attribution';

const Wrapper = () => {
	return (
		<div className='wrapper'>
			<Score />
			<Results />
			{/* <Attribution /> */}
		</div>
	);
};

export default Wrapper;
