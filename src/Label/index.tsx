import React, { FC, forwardRef, useImperativeHandle } from 'react';
import { Label as LabelConfig } from '@antv/g2plot';
import { ChartProp } from '../types'
import useLabel from './useLabel';

export interface LabelProps extends LabelConfig {
  chart?: ChartProp;
  setChartConfig?: (d: any) => void;
  chartConfig?: Set<object>;
  hasChartConfig?: (key: object) => boolean;
}

const Label: FC<LabelProps> = forwardRef((props, ref) => {
  const { label, setLabel } = useLabel(props);
  useImperativeHandle(ref, () => ({ label, setLabel }), [label]);
  return null;
})

export default Label
