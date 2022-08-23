import type { Lib } from '../typing'

export function ZarmResolve(): Lib {
  return {
    libraryName: 'zarm',
    esModule: true,
    resolveStyle: (name) => {
      return `zarm/es/${name}/style/index`
    },
  }
}
