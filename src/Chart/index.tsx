import React, { FC, useRef, useEffect, Fragment } from 'react';
import useChart from './useChart';

export interface G2ChartProps {
  className?: React.HTMLAttributes<HTMLDivElement>['className'];
  children?: React.ReactNode;
  configs: any;
  style?: React.HTMLAttributes<HTMLDivElement>['style'];
  type: string;
}

const Chart: FC<G2ChartProps> = ({ children, configs, type, className, style }) => {
  const elmRef = useRef<HTMLDivElement>(null);
  const { chart, setChart, container, setContainer, } = useChart({ container: elmRef.current as (string | HTMLDivElement), configs, type });
  const childs = React.Children.toArray(children);
  useEffect(() => {
    if (chart)
      chart.render();
  }, [chart])
  useEffect(() => setContainer(elmRef.current as string | HTMLDivElement | undefined), [elmRef.current]);

  return (
    <Fragment>
      <div ref={elmRef} className={className} style={{ fontSize: 1, height: '100%', ...style }} />
      {chart && typeof children === 'function' && children({ chart, container })}
      {chart && childs.map((child) => {
        if (!React.isValidElement(child)) return;
        return React.cloneElement(child, {
          ...child.props, chart, container,
        });
      })}
    </Fragment>
  );
}

export default Chart;
