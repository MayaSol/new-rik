module.exports = {
  content: ["./build/**/*.{html,js}"],
  separator: '_',
  theme: {
    screens: {
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1440px',
      '3xl': '1800px',
      '4xl': '1921px'
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        xl: '64px',
        xxl: '64px'
      },
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['14px', { lineHeight: '24px' }],
      '15': ['15px', { lineHeight: '21px' }],
      base: ['16px', { lineHeight: '26px' }],
      lg: ['18px', { lineHeight: '28px' }],
      xl: ['20px', { lineHeight: '30px' }],
      '2xl': ['24px', { lineHeight: '34px' }],
      '36px': ['36px', { lineHeight: '42px' }],
      '40px': ['40px', { lineHeight: '48px' }],
      '48px': ['48px', { lineHeight: '58px' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: '#14142B',
      slate: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#EBF3F6',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#181828',
        900: '#0f172a',
      },
      white: '#fff',
      neutral: colors.neutral,
      red: {
        50: '#FFF5F5',
        100: '#fee2e2',
        200: '#fecaca',
        300: '#fca5a5',
        400: '#f87171',
        500: '#EC6565',
        600: '#dc2626',
        700: '#b91c1c',
        800: '#991b1b',
        900: '#ff0000',
      },
      orange: colors.orange,
      amber: colors.amber,
      yellow: {
      50: '#FFFDEE',
      100: '#fef9c3',
      200: '#fef08a',
      300: '#fde047',
      400: '#facc15',
      500: '#CFB428',
      600: '#ca8a04',
      700: '#a16207',
      800: '#854d0e',
      900: '#713f12',
    },
      lime: colors.lime,
    green: {
      50: '#F3F6ED',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#94A76D',
      400: '#4ade80',
      500: '#28CFA7',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
    },
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: '#0075DA',
      blue_link: '#007CD3',
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
      gray: {
        50: '#f9fafb',
        75: '#f8f8f8',
        100: '#f5f5f5',
        200: '#ebebeb',
        300: '#D3D3D3',
        400: '#2D2D42',
        500: '#686868',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#14142B',
      },
    }),
    fontFamily: {
      sans: [
        'Circe',
        '-apple-system',
        'BlinkMacSystemFont',
        'ui-sans-serif',
        'system-ui',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
      icon: [
        '"Font Awesome 6 Free"'
      ]
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      default: '0px 0px 14px rgb(0 0 0 / 0.1)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
      none: 'none',
    },
    extend: {
      spacing: {
        '3px':  '3px',
        '5px':  '5px',
        '7px': '7px',
        '8px': '8px',
        '10px': '10px',
        '12px': '12px',
        '14px': '14px',
        '15px': '15px',
        '16px': '16px',
        '18px': '18px',
        '20px': '20px',
        '22px': '22px',
        '24px': '24px',
        '25px': '25px',
        '28px': '28px',
        '30px': '30px',
        '32px': '32px',
        '35px': '35px',
        '40px': '40px',
        '42px': '42px',
        '45px': '45px',
        '50px': '50px',
        '56px': '56px',
        '60px': '60px',
        '64px': '64px',
        '80px': '80px',
        '90px': '90px',
        '100px': '100px',
        '110px': '110px',
        '115px': '115px',
        '120px': '120px',
        '124px': '124px',
        '128px': '128px',
        '130px': '130px',
        '140px': '140px',
        '150px': '150px',
        '160px': '160px',
        '170px': '170px',
        '180px': '180px',
        '220px': '220px',
        '390px': '390px',
        '397px': '397px',
        '400px': '400px',
        '402px': '402px',
        '466px': '466px',
        '736px': '736px'
      },
      borderRadius: {
        '10px': '10px',
        '24px': '24px'
      }
    },
  },
  plugins: [],
}
