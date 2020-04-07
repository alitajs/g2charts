import { useEffect, useState } from 'react';
import isEqual from 'lodash/isEqual';
import { LabelProps } from './';

export interface UseLabel extends LabelProps { }

export default (props = {} as UseLabel) => {
  const { chart, setChartConfig, ...other } = props;
  const [label, setLabel] = useState<UseLabel>(other);
  const [preLabel, setPreLabel] = useState<UseLabel>();

  useEffect(() => {
    if (!chart) return;
    if (!isEqual(label, preLabel)) {
      setChartConfig!({ label: { visible: true, ...label } } as any);
      setPreLabel(label);
    };
  }, [chart, label]);

  return {
    label, setLabel
  };
}
