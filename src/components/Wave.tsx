import { FC } from 'react';

import { useCanvasContext } from '../hooks/useCanvas';
import useResponsiveSize from '../hooks/useResponsiveSize';
import WaveObj from '../utils/wave';

const Wave: FC = () => {
  const { context } = useCanvasContext();
  const { width } = useResponsiveSize();
  const height = 600;
  let frequency = 0.013;
  const waves = {
    frontWave: new WaveObj([0.0211, 0.028, 0.015], 'rgb(159, 79, 254, 0.1)'),
    backWave: new WaveObj([0.0122, 0.018, 0.005], 'rgb(159, 79, 254, 0.1)'),
    MiddleWave: new WaveObj([0.0009, 0.0009, 0.001], 'rgb(159, 79, 254,0.1)'),
    ThirdWave: new WaveObj([0.0122, 0.018, 0.005], 'rgba(159, 79, 254,0.1)'),
  };

  const render = () => {
    context?.clearRect(0, 0, width, height);
    Object.entries(waves).forEach(([, wave]) => {
      wave.draw(context!, width, height, frequency);
    });
    frequency += 0.013;
    requestAnimationFrame(render);
  };
  if (context) render();
  return null;
};

export default Wave;
