import React from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

type AppFooterProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>

const AppFooter = (props:AppFooterProps)=> {
    return <footer {...props} className={cn(styles['app-footer'], props.className)} />
}

export default AppFooter