import React, { FC, useRef, useEffect, Fragment, useState } from 'react';
import useChart from './useChart';

export interface G2ChartProps {
  className?: React.HTMLAttributes<HTMLDivElement>['className'];
  children?: React.ReactNode;
  config: any;
  style?: React.HTMLAttributes<HTMLDivElement>['style'];
  type: string;
}

const Chart: FC<G2ChartProps> = ({ children, config, type, className, style }) => {
  const elmRef = useRef<HTMLDivElement>(null);
  const [chartConfig, setChartConfig] = useState(config);
  const { chart, setChart, container, setContainer } = useChart({ container: elmRef.current as (string | HTMLDivElement), config: chartConfig, type });
  const childs = React.Children.toArray(children);

  useEffect(() => setContainer(elmRef.current as string | HTMLDivElement | undefined), [elmRef.current]);

  return (
    <Fragment>
      <div ref={elmRef} className={className} style={{ fontSize: 1, height: '100%', ...style }} />
      {chart && typeof children === 'function' && children({ chart })}
      {chart && childs.map((child) => {
        if (!React.isValidElement(child)) return;
        return React.cloneElement(child, {
          ...child.props, chart, setChartConfig
        });
      })}
    </Fragment>
  );
}

export default Chart;
