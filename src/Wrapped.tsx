import styled from 'styled-components';
import {
	AbsoluteFill,
	useCurrentFrame,
	useVideoConfig,
	spring,
	interpolate,
} from 'remotion';

const Container = styled.div`
	padding: 80px 60px;
	display: flex;
	flex: 1;
`;

const Title = styled.div`
	color: #d21c8c;
	font-size: 90px;
	font-weight: bold;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	line-height: 1;
	text-align: center;
`;

export const Wrapped: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const progress = spring({frame, fps, config: {damping: 200}});

	const titleProgress = spring({
		frame: frame - 15,
		fps,
		config: {damping: 200},
	});

	const scale = interpolate(progress, [0, 1], [0.7, 1]);
	return (
		<Container>
			<div style={{flex: 1, position: 'relative'}}>
				<AbsoluteFill
					style={{
						backgroundColor: '#b2fef5',
						boxShadow: '0 0 14px rgba(0,0,0,0.4)',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						transform: `scale(${scale})`,
						opacity: progress,
					}}
				>
					<Title style={{opacity: titleProgress}}>
						2022
						<br />
						Wrapped
					</Title>
				</AbsoluteFill>
			</div>
		</Container>
	);
};
