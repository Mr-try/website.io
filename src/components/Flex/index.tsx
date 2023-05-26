/*
 * @Author: Mr.try
 * @Date: 2022-08-29 15:18:24
 */
import React from 'react';

/**
 * 最外围包裹元素都必须支持class与style参数
 */
export interface BaseProps {
  className?: string;
  style?: React.CSSProperties;
  children?: any;
  [propertyName: string]: any;
}

type FlexProps = {
  gap?: string;
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  alignContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'stretch';
} & BaseProps;

export const Flex = ({
  children,
  style,
  className,
  direction,
  wrap,
  justifyContent,
  alignItems,
  alignContent,
  ...props
}: FlexProps) => {
  const selfStyle = {
    flexDirection: direction,
    flexWrap: wrap,
    justifyContent,
    alignItems,
    alignContent,
    ...style,
  };
  return (
    <div
      onClick={props?.onClick}
      className={className}
      style={{ display: 'flex', ...selfStyle }}
      {...props}
    >
      {children}
    </div>
  );
};

export const FlexCenter = ({ children, ...props }: FlexProps) => (
  <Flex {...props} alignItems="center" justifyContent="center">
    {children}
  </Flex>
);
export const FlexColumn = ({ children, ...props }: FlexProps) => (
  <Flex {...props} direction="column">
    {children}
  </Flex>
);

Flex.Center = FlexCenter;
Flex.Column = FlexColumn;

export default Flex;
