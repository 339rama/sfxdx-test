import React from 'react';
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import MainLayout from './modules/main/ui/layout';
import '~/styles/index.scss';

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider)
  library.pollingInterval = 12000
  return library
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <MainLayout/>
    </Web3ReactProvider>
  );
}

export default App;
