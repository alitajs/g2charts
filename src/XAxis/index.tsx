import React, { FC, forwardRef, useImperativeHandle } from 'react';
import { IBaseAxis } from '@antv/g2plot';
import { ChartProp } from '../types'
import useXAxis from './useXAxis';

export interface XAxisProps extends IBaseAxis {
  chart?: ChartProp;
  setChartConfig?: (d: any) => void;
  chartConfig?: Set<object>;
  hasChartConfig?: (key: object) => boolean;
}

const XAxis: FC<XAxisProps> = forwardRef((props, ref) => {
  const { xAxis, setXAxis } = useXAxis(props);
  useImperativeHandle(ref, () => ({ xAxis, setXAxis }), [xAxis]);
  return null;
})

export default XAxis
