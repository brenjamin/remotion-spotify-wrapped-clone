import styled from 'styled-components';
import stoney from './img/stoney.png';

export const COVER_SIZE = 400;

const Cover = styled.div`
	width: ${COVER_SIZE}px;
	height: ${COVER_SIZE}px;
	box-shadow: 0 0 4px rgba(0, 0, 0, 0.7);
`;

export const Album: React.FC = () => {
	return (
		<Cover>
			<img
				src={stoney}
				style={{height: `${COVER_SIZE}px`, width: `${COVER_SIZE}px`}}
			/>
		</Cover>
	);
};
