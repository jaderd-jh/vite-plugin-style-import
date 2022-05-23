import type { Lib } from '../typing'

export function AntdMobile(): Lib {
  return {
    libraryName: 'antd-mobile',
    esModule: true,
    resolveStyle: (name) => {
      return `antd-mobile/es/${name}/style/index`
    },
  }
}
