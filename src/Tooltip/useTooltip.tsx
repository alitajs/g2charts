import { useEffect, useState } from 'react';
import { TooltipProps } from './';

export interface UseTooltip extends TooltipProps { }

export default (props = {} as UseTooltip) => {
  const { chart, setChartConfig, chartConfig, hasChartConfig, ...other } = props;
  const [tooltip, setTooltip] = useState<UseTooltip>(other);

  useEffect(() => {
    setChartConfig!({ tooltip: { visible: true, ...tooltip } } as any);
  }, [JSON.stringify(tooltip)]);

  return {
    tooltip, setTooltip
  };
}
