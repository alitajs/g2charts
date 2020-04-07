import { useEffect, useState } from 'react';
import isEqual from 'lodash/isEqual';
import { XAxisProps } from './';

export interface UseXAxis extends XAxisProps { }

export default (props = {} as UseXAxis) => {
  const { chart, setChartConfig, ...other } = props;
  const [xAxis, setXAxis] = useState<UseXAxis>(other);
  const [preXAxis, setPreXAxis] = useState<UseXAxis>();

  useEffect(() => {
    if (!chart) return;
    if (!isEqual(xAxis, preXAxis)) {
      setChartConfig!({ xAxis: { visible: true, ...xAxis } } as any);
      setPreXAxis(xAxis);
    };
  }, [chart, xAxis]);

  return {
    xAxis, setXAxis
  };
}
