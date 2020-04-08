import { useEffect, useState } from 'react';
import { LabelProps } from './';

export interface UseLabel extends LabelProps { }

export default (props = {} as UseLabel) => {
  const { chart, setChartConfig, chartConfig, hasChartConfig, ...other } = props;
  const [label, setLabel] = useState<UseLabel>(other);

  useEffect(() => {
    setChartConfig!({ label: { visible: true, ...label } } as any);
  }, [JSON.stringify(label)]);

  return {
    label, setLabel
  };
}
