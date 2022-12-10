/**
 * 获取图片的相对地址
 * @param name 图片名称
 * @returns 
 */
export function getImageUrl(name: string) {
  return `src/assets/logos/${name}.svg`
}

export class Debounce {
  static use(fn: Function, delay: number) {
    let timer: any = null
    return (...args: any) => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        fn.apply(this, args)
      }, delay)
    }
  }
}