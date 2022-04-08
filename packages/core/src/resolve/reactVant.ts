import type { Lib } from '../typing'

export function ReactVantResolve(): Lib {
  return {
    libraryName: 'react-vant',
    esModule: true,
    resolveStyle: (name) => {
      return `react-vant/es/${name}/style`
    },
  }
}
