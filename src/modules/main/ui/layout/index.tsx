import React from "react";
import { ConnectorContext } from "../../contexts/ConnectorContext";
import { useWeb3ReactConn } from "../../hooks/useWeb3ReactConn";
import MainComponentsFooter from "../components/footer";
import MainComponentsHeader from "../components/header";
import UILiveBackground from '~/modules/shared-ui/live-background';
import styles from './styles.module.scss';

type MainLayoutProps = {
    children?: React.ReactNode;
}

const MainLayout = (props: MainLayoutProps) => {
    const web3Conn = useWeb3ReactConn();
    return (
        <ConnectorContext.Provider value={web3Conn}>
            <div className={styles['main-wrapper']}>
                <UILiveBackground/>
                <MainComponentsHeader className={styles['main-layout-header']}/>
                <main className={styles["main-layout-content"]}>
                    {props.children}
                </main>
            </div>
            <MainComponentsFooter/>
        </ConnectorContext.Provider>
    )
}

export default MainLayout