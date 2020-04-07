import React, { FC, forwardRef, useImperativeHandle } from 'react';
import { IBaseAxis } from '@antv/g2plot';
import { ChartProp } from '../types'
import useYAxis from './useYAxis';

export interface YAxisProps extends IBaseAxis {
  chart?: ChartProp;
  setChartConfig?: (d: any) => void;
}

const YAxis: FC<YAxisProps> = forwardRef((props, ref) => {
  const { yAxis, setYAxis } = useYAxis(props);
  useImperativeHandle(ref, () => ({ yAxis, setYAxis }), [yAxis]);
  return null;
})

export default YAxis
