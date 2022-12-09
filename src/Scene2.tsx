import styled from 'styled-components';
import {AbsoluteFill, useVideoConfig} from 'remotion';
import {Bar} from './Bar';

const BAR_HEIGHT = 150;

const Title = styled.div`
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	color: white;
	font-size: 50px;
	font-weight: 600;
	text-align: center;
	position: absolute;
	top: 150px;
	width: 100%;
	text-shadow: 0 0 6px rgba(0, 0, 0, 0.4);
	padding-left: 20px;
	padding-right: 20px;
`;

export const Scene2: React.FC = () => {
	const {width} = useVideoConfig();
	return (
		<AbsoluteFill style={{backgroundColor: '#d4148e'}}>
			<Title>Your top genres were</Title>
			<div style={{height: '290px'}}></div>
			<Bar color="#b2fef5" endWidth={width / 2} rank={1} genre="Rock" />
			<Bar
				color="#d5f772"
				endWidth={width / 2 - 40}
				rank={2}
				genre="Classical Performance"
			/>
			<Bar color="#4e00f9" endWidth={width / 2 - 100} rank={3} genre="Pop" />
			<Bar
				color="#1e1416"
				endWidth={width / 2 - 160}
				rank={4}
				genre="Classical"
			/>
			<Bar
				color="#fefefe"
				endWidth={width / 2 - 220}
				rank={5}
				genre="Pop Rap"
			/>
		</AbsoluteFill>
	);
};
