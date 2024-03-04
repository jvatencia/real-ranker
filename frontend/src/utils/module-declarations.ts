import { Theme } from "@mui/material";

// Update the Badge's color options to include a violet option
declare module '@mui/material/Badge' {
    interface BadgePropsColorOverrides {
        light: true;
        dark: true;
    }
}

declare module '@mui/material/styles' {
    interface Palette {
        light: Palette['primary'];
        dark: Palette['primary'];
    }
    // allow configuration using `createTheme`
    interface PaletteOptions {
        light?: PaletteOptions['primary'];
        dark?: PaletteOptions['primary'];
    }
}


declare module '@mui/styles' {
    interface DefaultTheme extends Theme {
        breakpoints: any
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        custom: true;
    }
}

// Update the Button's color options to include a violet option
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        light: true;
        dark: true;
    }
}

// Update the Button's color options to include a violet option
declare module '@mui/material/IconButton' {
    interface IconButtonPropsColorOverrides {
        light: true;
        dark: true;
    }
}


export class ModuleDeclarations {
    public static declare() {

    }
}