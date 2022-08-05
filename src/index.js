module.exports = function toReadable(number) {
  if (number === 0) return 'zero'

  let sResult = ''
  const oHundreds = {
    0: '',
    1: 'one hundred ',
    2: 'two hundred ',
    3: 'three hundred ',
    4: 'four hundred ',
    5: 'five hundred ',
    6: 'six hundred ',
    7: 'seven hundred ',
    8: 'eight hundred ',
    9: 'nine hundred ',
  }
  const oUnits = {
    0: '',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  }
  const oTeens = {
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
  }
  const oDecades = {
    2: 'twenty ',
    3: 'thirty ',
    4: 'forty ',
    5: 'fifty ',
    6: 'sixty ',
    7: 'seventy ',
    8: 'eighty ',
    9: 'ninety ',
    10: 'none'
  }


  let nHundreds = Math.trunc(number / 100)
  sResult = sResult + oHundreds[nHundreds]
  number = number - nHundreds * 100

  if (number >= 0 && number <= 9) {
    sResult = sResult + oUnits[number]
  } else if (number > 9 && number <= 19) {
    sResult = sResult + oTeens[number]
  } else {
    const nDecades = Math.trunc(number / 10)
    sResult = sResult + oDecades[nDecades]
    number = number - nDecades * 10
    sResult = sResult + oUnits[number]
  }

  return sResult.trim()
}
