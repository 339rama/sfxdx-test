import React from "react";
import cn from 'classnames';
import './styles.scss';

const UILiveBackground = (props: {className?: string}) => {
    return <div className={cn("background", props.className)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
}

export default UILiveBackground