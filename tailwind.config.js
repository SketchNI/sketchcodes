const defaultTheme = require('tailwindcss/defaultTheme');
const color = require('tailwindcss/colors');

module.exports = {
    purge: [
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}'
    ],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        extend: {
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.gray.200'),
                        fontFamily: theme('fontFamily.display'),
                        strong: {
                            fontWeight: 600,
                            color: theme('color.gray.300'),
                        },
                        h3: {
                            color: theme('colors.gray.300'),
                        },
                        h2: {
                            color: theme('colors.gray.200'),
                        },
                        h1: {
                            color: theme('colors.purple.200'),
                            textDecoration: 'none',
                            marginBottom: 0,
                        },
                        a: {
                            textDecoration: 'none',
                        }
                    }
                },
            }),
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
                serif: ['Merriweather', ...defaultTheme.fontFamily.serif],
                mono: ['Overpass Mono', ...defaultTheme.fontFamily.mono],
                display: ['Work Sans']
            },
            colors: {
                red: {
                    ...color.red,
                    650: '#ad2a37',
                },
                cool: color.blueGray,
                gray: {
                    ...color.trueGray,
                    750: '#323232',
                    850: '#202020',
                },
                tomato: {
                    '50': '#fcf8f6',
                    '100': '#fceeed',
                    '200': '#fad5d8',
                    '300': '#f9b1b5',
                    '400': '#fa7d7e',
                    '500': '#fa5251',
                    '600': '#f33235',
                    '700': '#d24545',
                    '800': '#ac1f2c',
                    '900': '#8a1b26',
                },
                green: color.emerald,
                purple: color.violet,
                orange: color.amber,
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
