import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/assets/css/index.css';
import { RouterList } from './routes/RouterList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'react-redux';

// KITA  SUDAH MENGGUNAKN WADAH YANG KITA PUNYA 
import store from './redux/store/store';


// kunci loker
const queryMovie = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
{/* KITA PASANG WADAH KE DALAM INJECTOR NYA  */}
  <Provider store={store}>
    <QueryClientProvider client={queryMovie}>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_OAUTH_GOGGLE_ID}>
        <ToastContainer />
        <RouterList />
      </GoogleOAuthProvider>
    </QueryClientProvider>
    </Provider>
 


  </React.StrictMode>
);


