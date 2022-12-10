import styled from 'styled-components';
import {
	AbsoluteFill,
	useCurrentFrame,
	useVideoConfig,
	spring,
	interpolate,
} from 'remotion';
import {Bar} from './Bar';

const BAR_HEIGHT = 150;

const TITLE_OFFSET = 150;
const FONT_SIZE = 50;

const Title = styled.div`
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	color: white;
	font-size: ${FONT_SIZE}px;
	font-weight: 600;
	text-align: center;
	position: absolute;
	top: ${TITLE_OFFSET}px;
	width: 100%;
	text-shadow: 0 0 6px rgba(0, 0, 0, 0.4);
	padding-left: 20px;
	padding-right: 20px;
	line-height: 1;
`;

export const Scene2: React.FC = () => {
	const frame = useCurrentFrame();

	const {width, height, fps} = useVideoConfig();
	const moveUp = spring({
		frame,
		fps,
		config: {
			damping: 200,
		},
	});
	const translateY = interpolate(
		moveUp,
		[0, 1],
		[height / 2 - TITLE_OFFSET - FONT_SIZE, 0]
	);
	return (
		<AbsoluteFill style={{backgroundColor: '#d4148e'}}>
			<AbsoluteFill style={{transform: `translateY(${translateY}px)`}}>
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
		</AbsoluteFill>
	);
};
