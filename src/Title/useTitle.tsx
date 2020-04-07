import { useEffect, useState } from 'react';
import isEqual from 'lodash/isEqual';
import { TitleProps } from './';

export interface UseLabel extends TitleProps { }

export default (props = {} as UseLabel) => {
  const { chart, setChartConfig, ...other } = props;
  const [title, setTitle] = useState<UseLabel>(other);
  const [preTitle, setPreTitle] = useState<UseLabel>();

  useEffect(() => {
    if (!chart) return;
    if (!isEqual(title, preTitle)) {
      setChartConfig!({ title: { visible: true, ...title } } as any);
      setPreTitle(title);
    };
  }, [chart, title]);

  return {
    title, setTitle
  };
}
