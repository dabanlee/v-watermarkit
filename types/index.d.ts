declare namespace WATER_MARK {
  export interface ISettings {
    text: string,
    color: string,
    fontSize: number,
    rotate: number,
    gap: number,
    zIndex: number,
    opacity: number,
  }

  export interface CSS {
    position?: string,
    top?: number,
    left?: number,
    width?: string,
    height?: string,
    pointerEvents?: string,
    backgroundImage?: string,
  }

  export type IStyle = Partial<Pick<ISettings, 'opacity' | 'zIndex'> & CSS>
}
