import { useEffect, useState } from 'react';
import isEqual from 'lodash/isEqual';
import { GuideLineProps } from './';

export interface UseGuideLine extends GuideLineProps { }

export default (props = {} as UseGuideLine) => {
  const { chart, setChartConfig, ...other } = props;
  const [guideLine, setGuideLine] = useState<UseGuideLine>(other);
  const [preGuideLine, setPreGuideLine] = useState<UseGuideLine>();

  useEffect(() => {
    if (!chart) return;
    if (!isEqual(guideLine, preGuideLine)) {
      const config = chart.getPlotTheme();
      console.log(config);
      // setChartConfig!({ guideLine: { visible: true, ...guideLine } } as any);
      setPreGuideLine(guideLine);
    };
  }, [chart, guideLine]);

  return {
    guideLine, setGuideLine
  };
}
