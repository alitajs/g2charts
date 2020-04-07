import React, { FC } from 'react';
import { Label } from '@antv/g2plot';
import { ChartProp } from '../types'
import useTitle from './useTitle';

export interface TitleProps extends Label {
  chart?: ChartProp;
  setChartConfig?: (d: any) => void;
}

const Title: FC<TitleProps> = (props) => {
  useTitle(props);
  return null;
}

export default Title
