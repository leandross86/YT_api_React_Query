import React, { useState } from 'react';
import { useQuery } from 'react-query';

import { apiPlaylist } from '../services'
import DisplayList from './DisplayList';

const Playlist = () => {
  const [pageToken, setPageToken] = useState()
  const { data, isLoading, error,  } = useQuery(['playlist', pageToken], apiPlaylist(pageToken))

  return (
    <div className='container'>
      <h3>FalaDev</h3>
      {error && <div>Algo saiu errado... </div>}
      {isLoading ? (
        <div>
          Aguardando Playlist...
        </div>
      ) : (
        <>
          <button
            className="btn"
            onClick={() => setPageToken(data.prevPageToken)}
            disabled={!data.prevPageToken}
          >
            Página Anterior
          </button>
          <button
            className="btn"
            onClick={() => setPageToken(data.nextPageToken)}
            disabled={!data.nextPageToken}
          >
            Próxima Página
          </button>
          <DisplayList data={data}/>
          </>
      )}
    </div>
  )
}

export default Playlist

