declare module "ui_components/Button" {
  export function Button(props: {
    text?: string;
    handleClick?: () => void;
  }): JSX.Element;
}
