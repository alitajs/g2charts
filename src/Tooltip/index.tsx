import React, { FC, forwardRef, useImperativeHandle } from 'react';
import { Tooltip as TooltipConfig } from '@antv/g2plot';
import { ChartProp } from '../types'
import useTooltip from './useTooltip';

export interface TooltipProps extends TooltipConfig {
  chart?: ChartProp;
  setChartConfig?: (d: any) => void;
}

const Tooltip: FC<TooltipProps> = forwardRef((props, ref) => {
  const { tooltip, setTooltip } = useTooltip(props);
  useImperativeHandle(ref, () => ({ tooltip, setTooltip }), [tooltip]);
  return null;
})

export default Tooltip
