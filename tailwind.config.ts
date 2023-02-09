import type { Config } from 'tailwindcss'
export default <Partial<Config>>{
    theme: {
    extend: {
      fontFamily: {
        'display': ['ClashDisplay-Bold', 'Helvetica'],
        'body': ['ClashDisplay-Medium', 'Helvetica'],
      },
      colors: {
        red: {
          50: '#FFF1F1',
          100: '#FFDFDF',
          200: '#FFC5C5',
          300: '#FF9D9D',
          400: '#FF6464',
          500: '#FF3030',
          600: '#ED1515',
          700: '#C80D0D',
          800: '#A50F0F',
          900: '#881414',
        },
        gray: {
          50: '#F0EEF5',
          100: '#CBC8D4',
          200: '#B5B2C2',
          300: '#9F9BB0',
          400: '#89849E',
          500: '#746E8B',
          600: '#5A556C',
          700: '#403C4C',
          800: '#26242D',
          900: '#0B0B0E',
        },
        yellow: {
          50: '#FFF9EB',
          100: '#FFEDC6',
          200: '#FFD888',
          300: '#FFBF4A',
          400: '#FFAC30',
          500: '#F98207',
          600: '#DD5C02',
          700: '#B73D06',
          800: '#942E0C',
          900: '#7A270D',
        }
      }
    }
  }
}