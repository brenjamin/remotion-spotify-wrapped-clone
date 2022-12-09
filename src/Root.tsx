import {Composition} from 'remotion';
import {Gradient} from './Gradient';
import {Scene3} from './Scene3';
import {Scene2} from './Scene2';

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="Gradient"
				component={Gradient}
				width={720}
				height={1280}
				durationInFrames={120}
				fps={30}
			></Composition>
			<Composition
				id="Scene3"
				component={Scene3}
				width={720}
				height={1280}
				durationInFrames={150}
				fps={30}
				defaultProps={{
					topSongName: 'Go Flex',
					topSongArtistName: 'Post Malone',
				}}
			></Composition>
			<Composition
				id="Scene2"
				component={Scene2}
				width={720}
				height={1280}
				durationInFrames={150}
				fps={30}
				defaultProps={{
					topSongName: 'Go Flex',
					topSongArtistName: 'Post Malone',
				}}
			></Composition>
		</>
	);
};
