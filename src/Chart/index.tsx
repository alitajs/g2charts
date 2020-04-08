import React, { FC, useRef, useEffect, Fragment, useState, forwardRef, useImperativeHandle } from 'react';
import { useSet } from '@umijs/hooks';
import { PlotConfig } from '@antv/g2plot';
import useChart from './useChart';
import { getChartConfig } from '../utils';

export interface G2ChartProps extends PlotConfig {
  className?: React.HTMLAttributes<HTMLDivElement>['className'];
  children?: React.ReactNode;
  style?: React.HTMLAttributes<HTMLDivElement>['style'];
  type: string;
}

const Chart: FC<G2ChartProps> = forwardRef(({ children, type, className, style, ...rest }, ref) => {
  const elmRef = useRef<HTMLDivElement>(null);
  const [set, { add, has, remove }] = useSet<object>();
  const { chart, setChart, container, setContainer } = useChart({ container: elmRef.current as (string | HTMLDivElement), config: getChartConfig(rest, set), type });
  const childs = React.Children.toArray(children);
  useImperativeHandle(ref, () => ({ chart, container: elmRef }), [chart]);
  useEffect(() => setContainer(elmRef.current as string | HTMLDivElement | undefined), [elmRef.current]);

  return (
    <Fragment>
      <div ref={elmRef} className={className} style={{ fontSize: 1, height: '100%', ...style }} />
      {chart && typeof children === 'function' && children({ chart, setChartConfig: add, chartConfig: set, hasChartConfig: has, removeChartConfig: remove })}
      {chart && childs.map((child) => {
        if (!React.isValidElement(child)) return;
        return React.cloneElement(child, {
          ...child.props, chart, setChartConfig: add, chartConfig: set, hasChartConfig: has, removeChartConfig: remove
        });
      })}
    </Fragment>
  );
})

export default Chart;
