import { useEffect, useState } from 'react';
import isEqual from 'lodash/isEqual';
import { TitleProps } from './';

export interface UseTitle extends TitleProps { }

export default (props = {} as UseTitle) => {
  const { chart, setChartConfig, ...other } = props;
  const [title, setTitle] = useState<UseTitle>(other);
  const [preTitle, setPreTitle] = useState<UseTitle>();

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
