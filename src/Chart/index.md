
## Chart

Demo:

```tsx
import React ,{useRef,Fragment}from 'react';
import { G2Chart,ChartProp } from 'g2charts';
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
}
export default () => {
  const chartRef = useRef<ChartProp>(null);
  return (
  <Fragment>
  <button onClick={()=>{
        chartRef.current.chart.updateConfig({title:{
          text:'修改后的标题'
        }})
        chartRef.current.chart.render();
      }}>修改配置</button>
  <button onClick={()=>{
        console.log(chartRef.current.chart.getData())
      }}>获取图表数据</button>
  <button onClick={()=>{
        console.log(chartRef.current.chart.getPlotTheme())
      }}>获取图表主题</button>
  <G2Chart type={type} {...configs} ref={chartRef}/>
  </Fragment>
)};
```

Hooks

```tsx
import React, { FC, useRef, useEffect, Fragment, useState } from 'react';
import { useChart } from 'g2charts';
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
}

export default () =>  {
  const elmRef = useRef<HTMLDivElement>(null);
  const [chartConfig, setChartConfig] = useState(configs);
  const { chart, setChart, container, setContainer } = useChart({ container: elmRef.current as (string | HTMLDivElement), config: chartConfig, type });

  useEffect(() => setContainer(elmRef.current as string | HTMLDivElement | undefined), [elmRef.current]);

  return (
    <Fragment>
      <button onClick={()=>{
        chart.updateConfig({title:{
          text:'修改后的标题'
        }})
        chart.render();
      }}>修改配置</button>
      <button onClick={()=>{
        console.log(chart.getData())
      }}>获取图表数据</button>
      <button onClick={()=>{
        console.log(chart.getPlotTheme())
      }}>获取图表主题</button>
      <div ref={elmRef} style={{ fontSize: 1, height: '100%' }} />
    </Fragment>
  );
};
```
