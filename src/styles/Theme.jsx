import { ThemeProvider } from "styled-components";

const theme = {
    color: {
        lightmode: {
            background: 'var(--color-light-background)',
            text: 'var(--color-light-text)',
            cta: 'var(--color-light-cta)' ,
            ctaText: 'var(--color-light-cta-text)'
        },

        darkmode: {
            background: 'var(--color-dark-background)',
            text: 'var(--color-dark-text)',
            cta: 'var(--color-dark-cta)' 
        }
    },
}

const Theme = ({children}) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;