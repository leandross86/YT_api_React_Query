import React from 'react'

const DisplayList = ({data}) => {
  return (
    <div>
      <div className="row">
        {data.items.map((item, index) => (
          <div key={index}>
            <div className="col s4">
              <div className="card medium">
                <div className="card-image">
                  <img src={item.snippet.thumbnails.high.url} alt=""/>
                </div>
                <div className="card-content">
                  <p>{item.snippet.title}</p>
                </div>
                <div className="card-action">
                  <a href={`https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`}>Assista o vídeo</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DisplayList
