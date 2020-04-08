import deepmerge from 'deepmerge';

export function getChartConfig<T>(config: T, runtimeConfig: Set<object>): T {
  let newConfig = config;
console.log(runtimeConfig)
  const { guideLine = [] } = {};
  runtimeConfig.forEach(item => {
    console.log(item)
    // @ts-ignore
    if (item.guideLine) {
  console.log('guideLine')

      // @ts-ignore
      guideLine.push(item.guideLine);
    } else {
      newConfig = deepmerge(newConfig, item) as any;
    }
  })
  console.log('guideLine',guideLine)
  newConfig = deepmerge(newConfig, { guideLine }) as any;
  return newConfig;
}
