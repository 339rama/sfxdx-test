import React from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

const AppLogo = (props: Pick<React.SVGProps<SVGSVGElement>, 'className'>) => {
    return <svg width="149" height="26" viewBox="0 0 149 26" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn(styles['logo'], props.className)}>
    <path d="M19.2974 20.242L13.7353 25.0427C5.5934 24.7196 0.83606 22.7577 0.83606 16.6646H7.03717C7.03717 19.1572 9.11998 20.2882 16.9779 20.2882C17.8299 20.2882 18.611 20.2882 19.2974 20.242Z" fill="#092326"/>
    <path d="M30.6349 8.93279H24.4338C24.4338 6.34779 21.7829 5.70155 15.3214 5.70155C14.7534 5.70155 14.209 5.70155 13.7357 5.72463L19.203 0.993164C26.3982 1.47785 30.6349 3.83204 30.6349 8.93279Z" fill="#092326"/>
    <path d="M24.8829 19.088C25.2853 18.7418 25.4746 18.2802 25.4746 17.7494C25.4746 15.7875 24.1019 15.4644 16.2676 15.0951C5.75888 14.6104 1.56958 13.0179 1.56958 7.73252C1.56958 2.74717 6.58727 1.03923 15.0605 0.923828L8.57542 6.48618C7.98371 6.92471 7.77069 7.34015 7.77069 8.00948C7.77069 9.83282 9.21446 10.1559 16.244 10.5714C25.7587 11.0792 31.6521 11.5869 31.6521 17.5416C31.6521 23.5194 26.1373 24.9504 17.9244 25.0889" fill="#092326"/>
    <path d="M40.126 6.30154V11.3561H57.3802V16.4569H40.126V24.7427H33.9249V1.22388H59.4394V6.30154H40.126Z" fill="#092326"/>
    <path d="M71.178 16.6884L61.9237 24.7665H53.3795L66.9651 12.9956L53.3795 1.22461H61.9237L71.178 9.30272L75.2253 12.9956" fill="#092326"/>
    <path d="M77.5212 11.1022L88.953 1.22388H80.4087L73.3082 7.4094" fill="#092326"/>
    <path d="M73.2844 18.5339L80.4085 24.7656H88.9528L77.4736 14.8411" fill="#092326"/>
    <path d="M131.201 16.6884L121.97 24.7665H113.426L127.012 12.9956L113.426 1.22461H121.97L131.201 9.30272L135.272 12.9956" fill="#092326"/>
    <path d="M137.521 11.1484L149 1.22388H140.456L133.308 7.45556" fill="#092326"/>
    <path d="M133.355 18.5801L140.456 24.7656H149L137.568 14.8872" fill="#092326"/>
    <path d="M116.74 12.9948C116.74 21.0037 111.249 24.7658 105.024 24.7658H87.5094V1.22388H105.024C111.272 1.22388 116.74 4.98597 116.74 12.9948ZM110.539 12.9948C110.539 7.27092 107.367 6.30154 102.681 6.30154H93.7105V19.6881H102.681C107.367 19.6881 110.539 18.7187 110.539 12.9948Z" fill="#092326"/>
    </svg>    
}

export default AppLogo