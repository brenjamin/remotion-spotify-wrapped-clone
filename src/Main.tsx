import {Sequence} from 'remotion';
import {Scene2} from './Scene2';
import {Scene3} from './Scene3';

export const Main: React.FC<{
	topSongName: string;
	topSongArtistName: string;
}> = ({topSongName, topSongArtistName}) => {
	return (
		<>
			<Sequence from={0} durationInFrames={210}>
				<Scene2></Scene2>
			</Sequence>
			<Sequence from={210} durationInFrames={150}>
				<Scene3
					topSongName={topSongName}
					topSongArtistName={topSongArtistName}
				></Scene3>
			</Sequence>
		</>
	);
};
