import React from 'react'
import YouTube from 'react-youtube';

const ShowVideos = ({Videos}) => {
  return (
    <div className="Videos">
      <h2>{Videos.name}</h2>
      {Videos.videos.map( (video,index) => {
        return(
          <div key={index}>
            <h3>{video.name}</h3>
            <YouTube className="YoutubeVideos" videoId={video.acessKey} />
            {// eslint-disable-next-line react/jsx-no-target-blank
            <a href={`https://www.youtube.com/watch?v=${video.acessKey}`} target="_blank">Clique aqui e assista diretamente no youtube</a>
            }
          </div>
        );
      })}
    </div>
  )
}

export default ShowVideos
