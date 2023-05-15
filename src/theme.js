import { createTheme } from "@mui/material"

export const theme = createTheme({
    //light refers to when in light theme, dark when in dark theme
    palette: {
        primary: {
            main: '#000',
        },
        secondary: {
            main: '#fff',
        },
        background: {
            default: '#E8F2FB',
            primary: '#E95D35',
            secondary: '#fff',
            buttonHover: '#d32f2f'
        },
        filtersBar: {
            main: "#3370f6"
        },
        priceAndBedrooms: {
            main: 'rgba(0,0,0,.87)'
        },
        details: {
            main: 'rgba(144, 238, 144,.87)'
        }
    },
    typography: {
        fontFamily: 'DM Sans'
    }
})