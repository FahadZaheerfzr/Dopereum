import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import WebRouter from './routes';
import ConnectionModal from './components/modals/walletModal';
import { DAppProvider } from '@usedapp/core';
import {ModalProvider } from 'react-simple-modal-provider';
import { networkConfig } from './config/networks';

function App() {
  return (
    <DAppProvider config={networkConfig}>
      <ModalProvider value = {[ConnectionModal]}>
        <div className='app'>
          <Router>
            <WebRouter />
          </Router>
        </div>
      </ModalProvider>
    </DAppProvider>
  );
}

export default App;
