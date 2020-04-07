import { useEffect, useState } from 'react';
import { TitleProps } from './';

export interface UseLabel extends TitleProps { }

export default (props = {} as UseLabel) => {
  const [title, setTitle] = useState<UseLabel>();
  const { chart, setChartConfig, ...other } = props;

  useEffect(() => {
    if (!chart) return;
    if (!title) {
      setChartConfig!({ title: { visible: true, ...other } } as any);
    };
    setTitle(other);
  }, [chart]);

  return {
    title, setTitle
  };
}
