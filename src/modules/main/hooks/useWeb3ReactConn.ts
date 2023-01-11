import { useCallback, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { InjectedConnector } from '@web3-react/injected-connector';
import accountIdService from '../domain/services/AccountIdService';

export const useWeb3ReactConn = () => {
    const injectedConnector = new InjectedConnector({supportedChainIds: [1,3,4,5,42]})
    const { account, activate, deactivate } = useWeb3React<Web3Provider>()
    const onConnect = useCallback(() => {
        activate(injectedConnector);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const onDisconnect = () => {
        deactivate();
        accountIdService.removeAccountId();
    }
    useEffect(() => {
        if (account) {
            accountIdService.setAccountId(account);
        }
    },[account]);

    useEffect(()=> {
        const savedAccountId = accountIdService.getAccountId();
        if (savedAccountId){
            onConnect();
        }
    },[onConnect])

    return { account, onConnect, onDisconnect };
}