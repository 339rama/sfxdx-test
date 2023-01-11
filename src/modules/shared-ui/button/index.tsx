import React from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

type UIButtonProps = {
    rounded?:boolean;
    variant: 'primary' | 'primary-inverted',
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const UIButton = (props: UIButtonProps) => {
    const {rounded, variant, className,...buttonProps}=  props;
    return <button 
        {...buttonProps}
        className={cn(
            styles['ui-button'],
            styles[variant],
            className,
            {[styles['rounded']]: rounded}
        )}/>
}

export default UIButton