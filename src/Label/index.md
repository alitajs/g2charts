
## Label

Demo:

```tsx
import React, { useRef, Fragment } from 'react';
import { G2Chart, G2Label } from 'g2charts';
const type = 'Line';
const data = [
  {
    date: '2018/8/1',
    type: 'download',
    value: 4623,
  },
  {
    date: '2018/8/1',
    type: 'register',
    value: 2208,
  },
  {
    date: '2018/8/1',
    type: 'bill',
    value: 182,
  },
  {
    date: '2018/8/2',
    type: 'download',
    value: 6145,
  },
  {
    date: '2018/8/2',
    type: 'register',
    value: 2016,
  },
  {
    date: '2018/8/2',
    type: 'bill',
    value: 257,
  },
  {
    date: '2018/8/3',
    type: 'download',
    value: 508,
  },
  {
    date: '2018/8/3',
    type: 'register',
    value: 2916,
  },
  {
    date: '2018/8/3',
    type: 'bill',
    value: 289,
  },
  {
    date: '2018/8/4',
    type: 'download',
    value: 6268,
  },
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
  legend:{
    position:'top-center'
  },
  xField: 'date',
  yField: 'value',
  seriesField: 'type',
}
export default () => {
  const elmRef = useRef<HTMLDivElement>(null);

  return (<Fragment>
    <button onClick={() => {
      elmRef.current.setLabel({
        type: 'point'
      })
    }}>修改配置</button>
    <G2Chart type={type} config={configs}>
      <G2Label type='line' ref={elmRef} />
    </G2Chart>
  </Fragment>)
};
```

Hooks

```tsx
import React, { FC, useRef, useEffect, Fragment, useState } from 'react';
import { useChart,useLabel } from 'g2charts';
const type = 'Line';
const data = [
  {
    date: '2018/8/1',
    type: 'download',
    value: 4623,
  },
  {
    date: '2018/8/1',
    type: 'register',
    value: 2208,
  },
  {
    date: '2018/8/1',
    type: 'bill',
    value: 182,
  },
  {
    date: '2018/8/2',
    type: 'download',
    value: 6145,
  },
  {
    date: '2018/8/2',
    type: 'register',
    value: 2016,
  },
  {
    date: '2018/8/2',
    type: 'bill',
    value: 257,
  },
  {
    date: '2018/8/3',
    type: 'download',
    value: 508,
  },
  {
    date: '2018/8/3',
    type: 'register',
    value: 2916,
  },
  {
    date: '2018/8/3',
    type: 'bill',
    value: 289,
  },
  {
    date: '2018/8/4',
    type: 'download',
    value: 6268,
  },
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
  legend:{
    position:'top-center'
  },
  xField: 'date',
  yField: 'value',
  seriesField: 'type',
}

export default () =>  {
  const elmRef = useRef<HTMLDivElement>(null);
  const [chartConfig, setChartConfig] = useState(configs);
  const { chart, setChart, container, setContainer } = useChart({ container: elmRef.current as (string | HTMLDivElement), config: chartConfig, type });
  const labelConfig = {
    type:'line'
  }
  const {label,setLabel} = useLabel({chart,setChartConfig,...labelConfig})
  useEffect(() => setContainer(elmRef.current as string | HTMLDivElement | undefined), [elmRef.current]);

  return (
    <Fragment>
      <button onClick={()=>{setLabel({
        type: 'point'
      })}}>修改配置</button>
      <div ref={elmRef} style={{ fontSize: 1, height: '100%' }} />
    </Fragment>
  );
};
```
