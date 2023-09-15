import { useState } from 'react';

import { VideoContainer } from './components/VideoContainer/VideoContainer';
import { MediaContainer } from './components/MediaContainer/MediaContainer';

import { videoList as initialVideoList } from './constants/videoList';
import { mediaList as initialMediaList } from './constants/mediaList';

import './styles/app.css';

export const App = () => {
  const [videoList, setVideoList] = useState(initialVideoList);
  const [mediaList, setMediaList] = useState(initialMediaList);

  return (
    <>
      <VideoContainer list={videoList} />;
      <MediaContainer list={mediaList} />;
    </>
  );
};
