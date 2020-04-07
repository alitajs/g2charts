import React, { FC, forwardRef, useImperativeHandle } from 'react';
import { ITitle } from '@antv/g2plot';
import { ChartProp } from '../types'
import useTitle from './useTitle';

export interface TitleProps extends ITitle {
  chart?: ChartProp;
  setChartConfig?: (d: any) => void;
}

const Title: FC<TitleProps> = forwardRef((props, ref) => {
  const { title, setTitle } = useTitle(props);
  useImperativeHandle(ref, () => ({ title, setTitle }), [title]);
  return null;
})

export default Title
