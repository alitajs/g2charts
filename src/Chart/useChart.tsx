import { useEffect, useState, useMemo } from 'react';
import * as G2Plot from '@antv/g2plot';

export interface UseChart {
  /**
   * 指定的容器
   */
  container?: string | HTMLDivElement;
  /**
   * 图表的配置
   */
  configs: any;
  /**
   * 图表的类型
   */
  type: string;
}

export default (props: UseChart) => {
  const { type, configs } = props;
  const [chart, setChart] = useState();
  const [container, setContainer] = useState(props.container);
  const getType = (a: string): string => {
    return a as string;
  }
  useMemo(() => {
    if (container && !chart) {
      // @ts-ignore
      const instance = new G2Plot[getType(type)](container, configs);
      setChart(instance);
    }
  }, [container, chart]);

  return {
    chart, setChart,
    container, setContainer,
  }
}
