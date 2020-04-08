import { useEffect, useState } from 'react';
import { XAxisProps } from './';

export interface UseXAxis extends XAxisProps { }

export default (props = {} as UseXAxis) => {
  const { chart, setChartConfig, chartConfig, hasChartConfig, ...other } = props;
  const [xAxis, setXAxis] = useState<UseXAxis>(other);

  useEffect(() => {
    setChartConfig!({ xAxis: { visible: true, ...xAxis } } as any);
  }, [JSON.stringify(xAxis)]);

  return {
    xAxis, setXAxis
  };
}
