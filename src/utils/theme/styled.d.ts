import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      white: string;
      black: string;
      green: string;
      turquoise: string;
      red: string;
      beige: string;
      lightBrown: string;
      darkBrown: string;
      yellow: string;
    };
  }
}
