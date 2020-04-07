
## YAxis

Demo:

```tsx
import React, { useRef, Fragment } from 'react';
import { G2Chart, G2YAxis } from 'g2charts';
const type = 'Line';
const data = [
  { year: '1991', value: 3 },
  { year: '1992', value: 4 },
  { year: '1993', value: 3.5 },
  { year: '1994', value: 5 },
  { year: '1995', value: 4.9 },
  { year: '1996', value: 6 },
  { year: '1997', value: 7 },
  { year: '1998', value: 9 },
  { year: '1999', value: 13 },
];
const configs = {
  title: {
    visible: true,
    text: '折线图',
  },
  description: {
    visible: true,
    text: '用平滑的曲线代替折线。',
  },
  data,
  xField: 'year',
  yField: 'value',
  yAxis:{
    type:'time'
  },
}

export default () => {
  const elmRef = useRef<HTMLDivElement>(null);

  return (<Fragment>
    <button onClick={() => {
      elmRef.current.setYAxis({
        type:'time'
      })
    }}>修改配置</button>
    <G2Chart type={type} config={configs}>
      <G2YAxis type='linear' ref={elmRef} />
    </G2Chart>
  </Fragment>)
};
```

Hooks

```tsx
import React, { FC, useRef, useEffect, Fragment, useState } from 'react';
import { useChart,useYAxis } from 'g2charts';
const type = 'Line';
const data = [
  { year: '1991', value: 3 },
  { year: '1992', value: 4 },
  { year: '1993', value: 3.5 },
  { year: '1994', value: 5 },
  { year: '1995', value: 4.9 },
  { year: '1996', value: 6 },
  { year: '1997', value: 7 },
  { year: '1998', value: 9 },
  { year: '1999', value: 13 },
];
const configs = {
  title: {
    visible: true,
    text: '折线图',
  },
  description: {
    visible: true,
    text: '用平滑的曲线代替折线。',
  },
  data,
  xField: 'year',
  yField: 'value',
  yAxis:{
    type:'time'
  },
}

export default () =>  {
  const elmRef = useRef<HTMLDivElement>(null);
  const [chartConfig, setChartConfig] = useState(configs);
  const { chart, setChart, container, setContainer } = useChart({ container: elmRef.current as (string | HTMLDivElement), config: chartConfig, type });
  const yAxisConfig = {
    type:'linear'
  }
  const {yAxis,setYAxis} = useYAxis({chart,setChartConfig,...yAxisConfig})
  useEffect(() => setContainer(elmRef.current as string | HTMLDivElement | undefined), [elmRef.current]);

  return (
    <Fragment>
      <button onClick={()=>{setYAxis({type:'time'})}}>修改配置</button>
      <div ref={elmRef} style={{ fontSize: 1, height: '100%' }} />
    </Fragment>
  );
};
```
