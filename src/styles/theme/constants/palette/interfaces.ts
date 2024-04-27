import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    orange: Palette['primary'];
    body: Palette['primary'];
    dark: Palette['primary'];
    white: Palette['primary'];
    gradient: Palette['primary'];
    gray: Palette['primary'];
  }

  interface PaletteOptions {
    orange?: PaletteOptions['primary'];
    body?: PaletteOptions['primary'];
    dark?: PaletteOptions['primary'];
    white?: PaletteOptions['primary'];
    gradient?: PaletteOptions['primary'];
    gray?: PaletteOptions['primary'];
  }
}
