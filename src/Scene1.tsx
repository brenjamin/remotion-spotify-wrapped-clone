import {AbsoluteFill, useVideoConfig, Sequence} from 'remotion';
import {Gradient} from './Gradient';
import {FourFaces} from './FourFaces';
import rilokiley from './img/rilo-kiley.jpeg';
import postmalone from './img/post-malone.jpeg';
import hanszimmer from './img/hans-zimmer.jpeg';
import theshins from './img/the-shins.jpeg';
import {GradientCircle} from './GradientCircle';
import {Wrapped} from './Wrapped';

export const Scene1: React.FC = () => {
	const {height} = useVideoConfig();
	return (
		<AbsoluteFill>
			<Gradient height={height}></Gradient>
			<FourFaces image={rilokiley} />
			<Sequence from={30} durationInFrames={Infinity}>
				<FourFaces image={postmalone} />
			</Sequence>
			<Sequence from={60} durationInFrames={Infinity}>
				<FourFaces image={hanszimmer} />
			</Sequence>
			<Sequence from={90} durationInFrames={Infinity}>
				<FourFaces image={theshins} />
			</Sequence>
			<Sequence from={120} durationInFrames={Infinity}>
				<GradientCircle />
			</Sequence>
			<Sequence from={160} durationInFrames={Infinity}>
				<Wrapped />
			</Sequence>
		</AbsoluteFill>
	);
};
