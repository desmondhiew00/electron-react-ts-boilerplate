/* eslint-disable @typescript-eslint/ban-ts-ignore */
/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect, useState } from 'react';
import { desktopCapturer } from 'electron';

const ScreenPreview = () => {
  const handleStream = (stream: MediaStream) => {
    const video = document.querySelector('video');
    if (!video) return;
    video.srcObject = stream;
    video.onloadedmetadata = () => video.play();
  };

  const getScreen = async () => {
    const sources = await desktopCapturer.getSources({
      types: ['window', 'screen']
    });
    console.log('Get Screen: ', { sources });
    sources.map(async source => {
      if (source.name !== 'Entire Screen') return;
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: false,
          video: {
            // @ts-ignore
            mandatory: {
              chromeMediaSource: 'desktop',
              chromeMediaSourceId: source.id,
              minWidth: 1280,
              maxWidth: 1280,
              minHeight: 720,
              maxHeight: 720
            }
          }
        });
        handleStream(stream);
      } catch (e) {
        console.log('Error: ', e);
      }
    });
  };

  useEffect(() => {
    getScreen();
  }, []);

  return (
    <>
      <h1>Screen Preview</h1>
      <Counter />
      <video style={{ width: 800, height: 600 }} />
    </>
  );
};

let counterInterval: NodeJS.Timeout;
const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    clearInterval(counterInterval);
    counterInterval = setInterval(() => {
      setCount(count + 1);
    }, 1000);
  });

  return <h1>{count}</h1>;
};

export default ScreenPreview;
