import {
  parseCommands, parseInputStr, type Command
} from "./parser.js"

function removeConsecutiveSpace(inputStr: string) {
  return inputStr.replace(
    /\s+/g, " "
  )
}

function main() {
  const inputStrRaw = process.argv.at(2)
  const cmdListRaw = process.argv.slice(3)

  const inputStr = parseInputStr(inputStrRaw)
  const cmdList = parseCommands(cmdListRaw)

  let ret = inputStr

  for (const cmd of cmdList) {
    switch (cmd) {
      case "lowercase":
        ret = ret.toLowerCase()
        break
      case "trim":
        ret = ret.trim()
        break
      case "collapse-spaces":
        ret = removeConsecutiveSpace(ret)
    }
  }

  return ret
}

console.log(main());