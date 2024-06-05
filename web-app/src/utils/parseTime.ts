const makeTwoSymbol = (number: number) =>
  number > 9 ? number : `0${number}`

const parseTime = (seconds: number) =>
  `${
    makeTwoSymbol(Math.floor(seconds / 60))
  }:${
    makeTwoSymbol(Math.floor(seconds % 60))
  }`


export default parseTime