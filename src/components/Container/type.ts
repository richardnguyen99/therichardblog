/**
 * Base props allows generally-customized CSS attributes like className and ID.
 */
export interface BaseContainerProps {
  [k: string]: any;
}

/**
 * Props required in BaseContainer since it allows customized size.
 */
export interface ContainerProps extends BaseContainerProps {
  maxWidth: number;
  padding?: number;
}
