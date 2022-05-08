type graphicOptions = {
  left?: number;
  top?: number;
}

type RectOptions = graphicOptions & {
  width: number;
  height: number;
  fill: string;
  // borderColor: string
}

type CircleOptions = graphicOptions & {
  radius: number
}
export const rectOptions: RectOptions = {
  width: 40,
  height: 40,
  fill: 'pink',
  // borderColor: 'red'
}

export const circleOptions: CircleOptions = {
  radius: 20
}