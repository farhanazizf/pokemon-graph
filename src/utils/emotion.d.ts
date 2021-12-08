import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      [colorname: string]: string;
      // primary: string;
      // secondary: string;
      // tertiary: string;
      // success: string;
      // warning: string;
      // danger: string;
      // dark: string;
      // medium: string;
      // light: string;
      // lightmedium: string;
      // "pokemon-ghost": string;
      // "pokemon-steel": string;
      // "pokemon-dragon": string;
      // "pokemon-flying": string;
      // "pokemon-water": string;
      // "pokemon-ice": string;
      // "pokemon-unknown": string;
      // "pokemon-grass": string;
      // "pokemon-bug": string;
      // "pokemon-normal": string;
      // "pokemon-electric": string;
      // "pokemon-ground": string;
      // "pokemon-rock": string;
      // "pokemon-fire": string;
      // "pokemon-fighting": string;
      // "pokemon-dark": string;
      // "pokemon-psychic": string;
      // "pokemon-fairy": string;
      // "pokemon-poison": string;
      // "bg-pokemon-ghost": string;
      // "bg-pokemon-steel": string;
      // "bg-pokemon-dragon": string;
      // "bg-pokemon-flying": string;
      // "bg-pokemon-water": string;
      // "bg-pokemon-ice": string;
      // "bg-pokemon-unknown": string;
      // "bg-pokemon-grass": string;
      // "bg-pokemon-bug": string;
      // "bg-pokemon-normal": string;
      // "bg-pokemon-electric": string;
      // "bg-pokemon-ground": string;
      // "bg-pokemon-rock": string;
      // "bg-pokemon-fire": string;
      // "bg-pokemon-fighting": string;
      // "bg-pokemon-dark": string;
      // "bg-pokemon-psychic": string;
      // "bg-pokemon-fairy": string;
      // "bg-pokemon-poison": string;
    };
  }
}

declare module "@mui/material/styles" {
  interface Theme {
    colors: {
      [colorname: string]: string;
    };
  }
  //   // allow configuration using `createTheme`
  interface ThemeOptions {
    colors: {
      [colorname: string]: string;
    };
  }
}
