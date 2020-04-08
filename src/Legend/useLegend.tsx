import { useEffect, useState } from 'react';
import { LegendProps } from './';

export interface UseLegend extends LegendProps { }

export default (props = {} as UseLegend) => {
  const { chart, setChartConfig, chartConfig, hasChartConfig, ...other } = props;
  const [legend, setLegend] = useState<UseLegend>(other);

  useEffect(() => {
    setChartConfig!({ legend: { visible: true, ...legend } } as any);
  }, [JSON.stringify(legend)]);

  return {
    legend, setLegend
  };
}
