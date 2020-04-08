import React, { FC, forwardRef, useImperativeHandle } from 'react';
import { Legend as LegendConfig} from '@antv/g2plot';
import { ChartProp } from '../types'
import useLegend from './useLegend';

export interface LegendProps extends LegendConfig {
  chart?: ChartProp;
  setChartConfig?: (d: any) => void;
  chartConfig?: Set<object>;
  hasChartConfig?: (key: object) => boolean;
}

const Legend: FC<LegendProps> = forwardRef((props, ref) => {
  const { legend, setLegend } = useLegend(props);
  useImperativeHandle(ref, () => ({ legend, setLegend }), [legend]);
  return null;
})

export default Legend
