import { useState } from 'react';
import { VideoList } from 'components/VideoList/VideoList';
import { Player } from 'components/Player/Player';

import videos from '../../videos.json';

import { Container } from './App.styled';

export const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <Container>
      <h1>Selected video: {selectedVideo}</h1>
      <VideoList videos={videos} onSelect={setSelectedVideo} />
      <Player url={selectedVideo} />
    </Container>
  );
}
