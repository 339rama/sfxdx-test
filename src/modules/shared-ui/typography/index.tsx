import React from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';


type UITypographyPropsDiv = {
    node: 'div';
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

type UITypographyPropsParagraph = {
    node: 'p';
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLDivElement>

type UITypographyPropsSpan = {
    node: 'span';
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLDivElement>

type UITypographyProps = UITypographyPropsDiv |  UITypographyPropsParagraph | UITypographyPropsSpan

const UITypography = (props: UITypographyProps)=> {
    const {node, ...componentProps} = props;
    const Component = node;
    return <Component {...componentProps} className={cn(styles['ui-typography'], props.className)}/>
}

UITypography.defaultProps = {
    node: 'span'
}

export default UITypography;