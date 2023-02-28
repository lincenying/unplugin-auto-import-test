export default {
    attributify: {
        prefix: 'w-'
    },
    extract: {
        include: ['./**/*.vue', './**/*.jsx', './**/*.html'],
        exclude: ['node_modules/**/*', '.git/**/*', './**/*.js']
    },
    theme: {
        screens: false,
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: {
                light: '#999',
                DEFAULT: '#333',
                dark: '#000'
            },
            blue: {
                light: '#85d7ff',
                DEFAULT: '#1fb6ff',
                dark: '#009eeb'
            },
            pink: {
                light: '#ff7ce5',
                DEFAULT: '#ff49db',
                dark: '#ff16d1'
            },
            gray: {
                darkest: '#1f2d3d',
                dark: '#3c4858',
                DEFAULT: '#c0ccda',
                light: '#e0e6ed',
                lightest: '#f9fafc'
            }
        },
        extend: {}
    },
    shortcuts: {
        'flex--c': 'flex items-center',
        'flex-cc': 'flex justify-center items-center',
        'flex-bc': 'flex justify-between items-center',
        'text-h3': 'text-34px text-orange-600 leading-45px',
        'text-h4': 'text-32px text-dark-200 leading-45px',
        'text-h5': 'text-28px text-dark-200 leading-45px',
        'text-h6': 'text-24px text-dark-200 leading-33px',
        'text-h6-b': 'text-24px text-dark-200 leading-33px font-500',
        'text-p': 'text-24px text-hex-999 leading-33px'
    }
}
