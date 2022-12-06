import styled from 'styled-components';
import {
	AbsoluteFill,
	spring,
	useCurrentFrame,
	useVideoConfig,
	interpolate,
} from 'remotion';
import {Gradient} from './Gradient';
import {withTheme} from 'styled-components';

import {Album, COVER_SIZE} from './Album';

const CIRCLE_SIZE = 500;

const Circle = styled.div`
	width: ${CIRCLE_SIZE}px;
	height: ${CIRCLE_SIZE}px;
	border-radius: ${CIRCLE_SIZE / 2}px;
	background-color: white;
	overflow: hidden;
	position: absolute;
`;

const Title = styled.div`
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	color: white;
	font-size: 50px;
	font-weight: 600;
	text-align: center;
	position: absolute;
	top: 300px;
	width: 100%;
	text-shadow: 0 0 6px rgba(0, 0, 0, 0.4);
	padding-left: 20px;
	padding-right: 20px;
`;

export const Scene3: React.FC<{
	topSongName: string;
	topSongArtistName: string;
}> = ({topSongName, topSongArtistName}) => {
	const frame = useCurrentFrame();
	const {width, height, fps} = useVideoConfig();
	const progress = spring({
		frame,
		fps,
		config: {damping: 200},
	});

	const UPSTART = 60;

	const scale = interpolate(progress, [0, 1], [4, 1]);

	const coverOpacity = interpolate(progress, [0.5, 1], [0, 1]);
	const coverScale = interpolate(progress, [0.6, 1], [0.7, 1]);

	const upAnimation = spring({
		frame: frame - UPSTART,
		fps,
		config: {
			damping: 200,
		},
	});

	const contentTranslation = interpolate(upAnimation, [0, 1], [0, -100]);

	const textOpacity = () => {
		if (frame < UPSTART) {
			return interpolate(progress, [0.9, 1], [0, 1]);
		}
		return interpolate(upAnimation, [0, 1], [1, 0]);
	};

	const bottomTextOpacity = spring({
		frame: frame - UPSTART - 15,
		fps,
		config: {
			mass: 0.45,
		},
	});

	const artistTextOpacity = spring({
		frame: frame - UPSTART - 43,
		fps,
		config: {
			mass: 0.45,
		},
	});

	return (
		<>
			<AbsoluteFill style={{backgroundColor: '#4e00f9'}}>
				<AbsoluteFill
					style={{transform: `translateY(${contentTranslation}px)`}}
				>
					<Title style={{top: 1030, fontSize: 25, opacity: artistTextOpacity}}>
						{topSongArtistName}
					</Title>
					<Title style={{opacity: textOpacity()}}>
						One song helped you get
						<br />
						through it all.
					</Title>
					<Title style={{top: 1100, fontSize: 45, opacity: bottomTextOpacity}}>
						Your top song of the year is
						<br />
						{topSongName}
					</Title>
					<Circle
						style={{
							opacity: progress,
							left: width / 2 - CIRCLE_SIZE / 2,
							top: height / 2 - CIRCLE_SIZE / 2 + 100,
							transform: `scale(${scale})`,
						}}
					>
						<Gradient height={500} />
					</Circle>
					<div
						style={{
							left: width / 2 - COVER_SIZE / 2,
							top: height / 2 - COVER_SIZE / 2 + 100,
							position: 'absolute',
							opacity: coverOpacity,
							transform: `scale(${coverScale})`,
						}}
					>
						<Album />
					</div>
				</AbsoluteFill>
			</AbsoluteFill>
		</>
	);
};
