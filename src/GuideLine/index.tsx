import React, { FC, forwardRef, useImperativeHandle } from 'react';
import { GuideLineConfig } from '@antv/g2plot';
import { ChartProp } from '../types'
import useGuideLine from './useGuideLine';

export interface GuideLineProps extends GuideLineConfig {
  chart?: ChartProp;
  setChartConfig?: (d: any) => void;
  chartConfig?: Set<object>;
  hasChartConfig?: (key: object) => boolean;
  removeChartConfig?: (key: object) => void;
}

const Description: FC<GuideLineProps> = forwardRef((props, ref) => {
  const { guideLine, setGuideLine } = useGuideLine(props);
  useImperativeHandle(ref, () => ({ guideLine, setGuideLine }), [guideLine]);
  return null;
})

export default Description;
