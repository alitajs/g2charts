import { useEffect, useState } from 'react';
import { GuideLineProps } from './';

export interface UseGuideLine extends GuideLineProps { }

export default (props = {} as UseGuideLine) => {
  const { chart, setChartConfig, chartConfig, hasChartConfig, ...other } = props;
  const [guideLine, setGuideLine] = useState<UseGuideLine>(other);
  useEffect(() => {
    setChartConfig!({ guideLine } as any);
  }, [JSON.stringify(guideLine)]);

  return {
    guideLine, setGuideLine
  };
}
