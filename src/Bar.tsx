import {useCurrentFrame, interpolate, useVideoConfig, spring} from 'remotion';
import styled from 'styled-components';

const BAR_HEIGHT = 160;

type BarProps = {color: string; endWidth: number};

type Props = BarProps & {rank: number; genre: string};

const Row = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	color: white;
	font-size: 28px;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-weight: bold;
	line-height: 1.6;
	gap: 40px;
	text-shadow: 0 0 6px rgba(0, 0, 0, 0.4);
`;

export const BarContainer = styled.div<BarProps>`
	height: ${BAR_HEIGHT}px;
	width: ${(props) => props.endWidth + 170}px;
	background-color: ${(props) => props.color};
	border-radius: ${BAR_HEIGHT / 2}px;
	margin-top: 10px;
	margin-bottom: 10px;
	box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.3);
`;

const TOTAL_RANKS = 5;

export const Bar: React.FC<Props> = ({endWidth, color, genre, rank}) => {
	const frame = useCurrentFrame();
	const {fps, width} = useVideoConfig();
	const opacity = interpolate(
		frame - (TOTAL_RANKS - rank) * 3 - 10,
		[0, 12],
		[0, 1]
	);
	const animatedWidthProgress = spring({
		frame: frame - 60 - rank * 3,
		fps,
		config: {damping: 200},
	});

	const animatedWidth = interpolate(
		animatedWidthProgress,
		[0, 1],
		[BAR_HEIGHT, endWidth + 100]
	);

	const left = interpolate(
		animatedWidthProgress,
		[0, 1],
		[width / 2 - BAR_HEIGHT / 2, -80]
	);

	const labelProgress = spring({
		frame: frame - 90 - rank * 20,
		fps,
		config: {damping: 200, mass: 0.6},
	});

	return (
		<Row style={{width: 2000}}>
			<BarContainer
				endWidth={endWidth}
				color={color}
				style={{opacity, width: animatedWidth, marginLeft: left}}
			></BarContainer>
			<div
				style={{
					opacity: labelProgress,
					transform: `translateY(${interpolate(
						labelProgress,
						[0, 1],
						[40, 0]
					)}px)`,
				}}
			>
				<div>
					#{rank}
					<br />
					{genre}
				</div>
			</div>
		</Row>
	);
};
