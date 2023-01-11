import React from 'react';
import AppFooter from '~/modules/layout/ui/footer';
import UIIcon from '~/modules/shared-ui/icon';
import AppLogo from '~/modules/shared-ui/logo';
import UITypography from '~/modules/shared-ui/typography';
import styles from './styles.module.scss';

const MainComponentsFooter = () => {
    return (
        <AppFooter className={styles['footer']}>
            <div className={styles['footer-nav']}>
                <UITypography node='div' className={styles['footer-nav-item']}>Privacy Policy</UITypography>
                <UITypography node='div' className={styles['footer-nav-item']}>Terms & Conditions</UITypography>
                <UITypography node='div' className={styles['footer-nav-item']}>Cookie Policy</UITypography>
            </div>
            <AppLogo className={styles['footer-logo']}/>
            <UITypography node='div' className={styles['footer-rights']}>©2022 All rights reserved. Powered by Atla</UITypography>
            <div className={styles['footer-social']}>
                <UIIcon name='facebook'/>
                <UIIcon name='twiter'/>
                <UIIcon name='youtube' />
                <UIIcon name='instagram' />
            </div>
        </AppFooter>
    )
}

export default MainComponentsFooter;