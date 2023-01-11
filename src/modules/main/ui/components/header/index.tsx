import React from 'react';
import cn from 'classnames';
import AppHeader from '~/modules/layout/ui/header';
import AppLogo from '~/modules/shared-ui/logo';
import MainComponentsConnectButton from '../connect-button';
import styles from './styles.module.scss';

const MainComponentsHeader = (props: {className?:string}) => {
    return (
        <AppHeader className={cn(styles['header'], props.className)}>
            <AppLogo className={styles['logo']}/>
            <MainComponentsConnectButton className={styles['connect-button']} />
        </AppHeader>
    )
}

export default MainComponentsHeader;