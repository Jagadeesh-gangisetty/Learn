import React, { useState } from 'react';
export default function Video({presentVideoId}){
  const [videos, setVideos] = useState([
    'QFaFIcGhPoM',
    '9hb_0TZ_MVI',
    '9VIiLJL0H4Y'
  ]);
  return (
    <>
    <div >
    <iframe width={920} height={600}   src={`https://www.youtube.com/embed/${presentVideoId}`}  allowFullScreen></iframe>
    </div>
    </>
  );
  
}


