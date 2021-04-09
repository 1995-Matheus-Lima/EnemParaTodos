import React from 'react'
import YouTube from 'react-youtube';

const ShowVideos = ({Videos}) => {
  return (
    <div className="Videos">
      <h2>{Videos.nome}</h2>
      {Videos.videos.map( (video,index) => {
        return(
          <div key={index}>
            <h3>{video.nome}</h3>
            <YouTube className="YoutubeVideos" videoId={video.acessoKey} />
            {// eslint-disable-next-line react/jsx-no-target-blank
            <a href={video.href} target="_blank">Clique aqui e assista diretamente no youtube</a>
            }
          </div>
        );
      })}
    </div>
  )
}

export default ShowVideos
