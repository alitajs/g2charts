
# 简介

基于 React 封装的 G2Plot 组件，期望在项目中像使用组件一样使用 [G2Plot](https://g2plot.antv.vision/zh)。

## 特性

- 组件化设计，清晰明了
- 支持 React Hooks
- 使用 Typescript 编写
- 全面支持 G2Plot 的所有组件和特性

## 安装

```bash
yarn add g2charts
```

## 使用

```tsx
import React from 'react';
import { G2Chart } from 'g2charts';
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
export default () => <G2Chart type={type} {...configs}/>;
```
