import { useEffect, useState, useMemo } from 'react';
import * as G2Plot from '@antv/g2plot';
import isEqual from 'lodash/isEqual';
import { G2ChartProps } from './'
import { ChartProp } from '../types'

export interface UseChart extends G2ChartProps {
  /**
  * 指定的容器
  */
  container?: string | HTMLDivElement;
}

export default (props: UseChart) => {
  const { type, config } = props;
  const [chart, setChart] = useState<ChartProp>();
  const [preConfig, setPreConfig] = useState<ChartProp>(config);
  const [container, setContainer] = useState(props.container);

  const getType = (a: string): string => {
    return a as string;
  }
  useMemo(() => {
    if (container && !chart) {
      // @ts-ignore
      const instance = new G2Plot[getType(type)](container, config);
      setChart(instance);
    }
    if (chart && !isEqual(config, preConfig)) {
      chart.updateConfig(config);
    }
    setPreConfig(config);
    return () => {
      if (chart && !chart.destroyed) {
        chart.destroy();
      }
    }
  }, [container, chart, config, type]);

  useEffect(() => {
    if (chart) {
      chart.render();
    }
  }, [chart, config])

  return {
    chart, setChart,
    container, setContainer,
  }
}
