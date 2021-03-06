type graphicOptions = {
  left?: number;
  top?: number;
  stroke?: string;
  strokeWidth?: number
}

type RectOptions = graphicOptions & {
  width: number;
  height: number;
  strokeUniform?: boolean;
  fill?: string;
  borderColor?: string;
}

type TriangleOptions = RectOptions;

type ImageOptions = graphicOptions & {
  opacity?: number
}

type CircleOptions = graphicOptions & {
  radius: number
}

type TextOptions = graphicOptions & {
  fontFamily: string;
  selectionBackgroundColor: string;
  selectionColor: string;
}

export const rectOptions: RectOptions = {
  width: 40,
  height: 40,
  fill: 'transparent',
  stroke: 'red',
  strokeUniform: true,
  // borderColor: 'red'
}

export const circleOptions: CircleOptions = {
  radius: 20
}

export const textOptions: TextOptions = {
  fontFamily: 'Comic Sans MS',
  selectionBackgroundColor: 'blue',
  selectionColor: 'white'
}

export const triangleOptions: TriangleOptions = {
  width: 20,
  height: 30,
  fill: 'blue',
  strokeUniform: true,
  borderColor: 'red'
}

export const imageOptions: ImageOptions = {
  opacity: 1
}

export {
  type RectOptions
}
