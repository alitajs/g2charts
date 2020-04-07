import { useEffect, useState } from 'react';
import isEqual from 'lodash/isEqual';
import { LegendProps } from './';

export interface UseLegend extends LegendProps { }

export default (props = {} as UseLegend) => {
  const { chart, setChartConfig, ...other } = props;
  const [legend, setLegend] = useState<UseLegend>(other);
  const [preLegend, setPreLegend] = useState<UseLegend>();

  useEffect(() => {
    if (!chart) return;
    if (!isEqual(legend, preLegend)) {
      setChartConfig!({ legend: { visible: true, ...legend } } as any);
      setPreLegend(legend);
    };
  }, [chart, legend]);

  return {
    legend, setLegend
  };
}
