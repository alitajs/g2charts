import { useEffect, useState } from 'react';
import isEqual from 'lodash/isEqual';
import { TooltipProps } from './';

export interface UseTooltip extends TooltipProps { }

export default (props = {} as UseTooltip) => {
  const { chart, setChartConfig, ...other } = props;
  const [tooltip, setTooltip] = useState<UseTooltip>(other);
  const [preTooltip, setPreTooltip] = useState<UseTooltip>();

  useEffect(() => {
    if (!chart) return;
    if (!isEqual(tooltip, preTooltip)) {
      setChartConfig!({ tooltip: { visible: true, ...tooltip } } as any);
      setPreTooltip(tooltip);
    };
  }, [chart, tooltip]);

  return {
    tooltip, setTooltip
  };
}
