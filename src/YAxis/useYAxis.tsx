import { useEffect, useState } from 'react';
import { YAxisProps } from './';

export interface UseYAxis extends YAxisProps { }

export default (props = {} as UseYAxis) => {
  const { chart, setChartConfig, chartConfig, hasChartConfig, ...other } = props;
  const [yAxis, setYAxis] = useState<UseYAxis>(other);

  useEffect(() => {
    setChartConfig!({ yAxis: { visible: true, ...yAxis } } as any);
  }, [JSON.stringify(yAxis)]);

  return {
    yAxis, setYAxis
  };
}
