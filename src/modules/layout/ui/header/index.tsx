import React from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';


type AppHeaderProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>

const AppHeader = (props: AppHeaderProps) => {
    return <header {...props} className={cn(styles['app-header'], props.className)} />
}

export default AppHeader;