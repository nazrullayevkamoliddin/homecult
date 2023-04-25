import React from 'react';

export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
  children?: React.ReactNode;
  sizes?: string | number;
  color?: string;
  stroke?: string;
}

export type IconType = React.FC<IconBaseProps>;
