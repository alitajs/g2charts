import { useEffect, useState } from 'react';
import isEqual from 'lodash/isEqual';
import { DescriptionProps } from './';

export interface UseDescription extends DescriptionProps { }

export default (props = {} as UseDescription) => {
  const { chart, setChartConfig, ...other } = props;
  const [description, setDescription] = useState<UseDescription>(other);
  const [preDescription, setPreDescription] = useState<UseDescription>();

  useEffect(() => {
    if (!chart) return;
    if (!isEqual(description, preDescription)) {
      setChartConfig!({ description: { visible: true, ...description } } as any);
      setPreDescription(description);
    };
  }, [chart, description]);

  return {
    description, setDescription
  };
}
