import React, { FC, forwardRef, useImperativeHandle } from 'react';
import { IDescription } from '@antv/g2plot';
import { ChartProp } from '../types'
import useDescription from './useDescription';

export interface DescriptionProps extends IDescription {
  chart?: ChartProp;
  setChartConfig?: (d: any) => void;
}

const Description: FC<DescriptionProps> = forwardRef((props, ref) => {
  const { description, setDescription } = useDescription(props);
  useImperativeHandle(ref, () => ({ description, setDescription }), [description]);
  return null;
})

export default Description;
