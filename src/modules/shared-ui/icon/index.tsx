import React from "react";
import cn from 'classnames';
import styles from './styles.module.scss';
import { IconsId } from "../../../assets/icons/output/icons";

type UIIconProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
    name: IconsId;
    size: number;
}

const UIIcon = (props: UIIconProps) => {
    const {name, size}  = props;
    return <i className={cn(`icon-${name}`, styles['ui-icon'])} style={{
        fontSize: size,
        height: size,
        width: size,
        display: 'inline-flex'
    }}/>
}

UIIcon.defaultProps = {
    size: 24
}

export default UIIcon