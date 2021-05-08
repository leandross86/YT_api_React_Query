import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools' 

import 'materialize-css/dist/css/materialize.min.css'
import Playlist from './components/Playlist';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="center">
        <h1>Playlist Youtube</h1>
        <Playlist />
      </div>
      <ReactQueryDevtools initialIsOpen={false} position={'bottom-right'} />
    </QueryClientProvider>
  );
}

export default App;
