import {
	AbsoluteFill,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const ScalingFace: React.FC<{image: string}> = ({image}) => {
	const frame = useCurrentFrame();

	const progress = interpolate(frame, [0, 120], [0, 1]);
	const scale = interpolate(progress, [0, 1], [1.2, 1.3]);
	const translateX = interpolate(progress, [0, 1], [0, 30]);

	return (
		<AbsoluteFill style={{overflow: 'hidden'}}>
			<img
				src={image}
				style={{
					position: 'absolute',
					height: '100%',
					width: '100%',
					objectFit: 'cover',
					objectPosition: 'center center',
					transform: `scale(${scale}) translateX(${translateX}px)`,
				}}
			/>
		</AbsoluteFill>
	);
};
