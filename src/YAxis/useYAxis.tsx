import { useEffect, useState } from 'react';
import isEqual from 'lodash/isEqual';
import { YAxisProps } from './';

export interface UseYAxis extends YAxisProps { }

export default (props = {} as UseYAxis) => {
  const { chart, setChartConfig, ...other } = props;
  const [yAxis, setYAxis] = useState<UseYAxis>(other);
  const [preYAxis, setPreYAxis] = useState<UseYAxis>();

  useEffect(() => {
    if (!chart) return;
    if (!isEqual(yAxis, preYAxis)) {
      setChartConfig!({ yAxis: { visible: true, ...yAxis } } as any);
      setPreYAxis(yAxis);
    };
  }, [chart, yAxis]);

  return {
    yAxis, setYAxis
  };
}
