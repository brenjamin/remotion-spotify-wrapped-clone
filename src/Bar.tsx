import styled from 'styled-components';

const BAR_HEIGHT = 160;

type Props = {color: string; endWidth: number; rank: number; genre: string};

export const BarContainer = styled.div<Props>`
	height: ${BAR_HEIGHT}px;
	width: ${(props) => props.endWidth + 140}px;
	background-color: ${(props) => props.color};
	border-radius: ${BAR_HEIGHT / 2}px;
	margin-top: 10px;
	margin-bottom: 10px;
	margin-left: -90px;
	box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.3);
`;

export const Bar: React.FC<Props> = ({endWidth, color}) => {
	return <BarContainer endWidth={endWidth} color={color}></BarContainer>;
};
