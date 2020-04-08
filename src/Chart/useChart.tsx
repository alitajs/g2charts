import { useEffect, useState, useMemo } from 'react';
import * as G2Plot from '@antv/g2plot';
import { PlotConfig } from '@antv/g2plot';
import { ChartProp } from '../types'

export interface UseChart {
  /**
  * 指定的容器
  */
  container?: string | HTMLDivElement;
  type: string;
  config?: PlotConfig;
}

export default (props: UseChart) => {
  const { type, container: propsContainer, config } = props;
  const [chart, setChart] = useState<ChartProp>();
  const [container, setContainer] = useState(propsContainer);

  const getType = (a: string): string => {
    return a as string;
  }
  useEffect(() => {
    if (!container) return () => null;
    // @ts-ignore
    const instance = new G2Plot[getType(type)](container, config);
    setChart(instance);
    instance.render();
    return () => {
      if (chart && !chart.destroyed) {
        chart.destroy();
      }
    }
  }, [type, container]);

  useEffect(() => {
    if (chart) {
      chart.updateConfig(config!);
      chart.render();
    }
  }, [JSON.stringify(config)]);

  return {
    chart, setChart,
    container, setContainer,
  }
}
