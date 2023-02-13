import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import VideosCard from '../components/VideosCard';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', keyword], () => {
    youtube.search(keyword);
  });
  return (
    <>
      <div>Videos{keyword ? `, Params : ${keyword}` : `🔥`}</div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Somthing is wrong🥲</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideosCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
