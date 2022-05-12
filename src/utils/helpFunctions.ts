

export const debounce = (fn: Function, delay:number) => {
  let timer: ReturnType<typeof setTimeout>;
  return function(this: any, ...args: any) {
    let context = this;
    // let args = [].slice.call(arguments);
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, delay);
  }
}