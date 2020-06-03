/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 ** Variants order: ['responsive', 'group-hover', 'group-focus', 'focus-within', 'first', 'last', 'odd', 'even', 'hover', 'focus', 'active', 'visited', 'disabled']
 */
module.exports = {
  purge: false,
  theme: {
    opacity: {
      '0': '0',
      '10': '.1',
      '20': '.2',
      '25': '.25',
      '30': '.3',
      '40': '.4',
      '50': '.5',
      '60': '.6',
      '70': '.7',
      '70': '.75',
      '80': '.8',
      '90': '.9',
      '91': '.91',
      '92': '.92',
      '93': '.93',
      '94': '.94',
      '95': '.95',
      '96': '.96',
      '97': '.97',
      '97': '.97',
      '98': '.98',
      '99': '.99',
      '100': '1'
    },
    extend: {
      spacing: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%'
      }
    },
    truncate: {
      lines: {
        2: '2',
        3: '3',
        4: '4'
      }
    },
    fontFamily: {
      google: ['Nunito']
    },
    backdropFilter: {
      none: 'none',
      blur: 'blur(20px)'
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'even', 'focus'],
    backgroundOpacity: ['responsive', 'hover', 'even', 'focus']
  },
  plugins: [
    require('tailwindcss-truncate-multiline')(['responsive']),
    require('tailwindcss-filters')
  ]
}
