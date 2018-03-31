const shell = require('shelljs')
const fs = require('fs')

const GENERAL_ERROR_MESSAGE = 'ลองตรวจสอบดูดีๆนะ เขียนถูกต้องหรือเปล่า'

function handleConsoleLog(code) {
  const result = evalCode(code)

  if (result.code !== 0) {
    return errorResponse(result.stderr)
  } else {
    return { success: true, message: 'ดีใจด้วย คุณเข้าใจ Console แล้ว', 
            stdout: result.stdout, stderr: result.stderr }
  }
}

function handleDataTypes(code) {
  const result = evalCode(code)

  if (result.code !== 0) {
    return errorResponse(result.stderr)
  }

  const logs = result.stdout.split('\n')
  let checkTypes = {
    'Number': false,
    'Boolean': false,
  }
  logs.map(item => {
    const isNumber = item.length > 0 && !Number.isNaN(item)
    const isBoolean = item === 'true' || item ==='false'
    if (isNumber) checkTypes.Number = true
    if (isBoolean) checkTypes.Boolean = true
  })
  let response = {
    success: true,
    message: 'ดีใจด้วย คุณเข้าใจ Data Types แล้ว',
    stdout: result.stdout,
    stderr: ''
  }
  // if atleast 1 type still false, return fail
  for (const key in checkTypes) {
    if (checkTypes.hasOwnProperty(key)) {
      if (!checkTypes[key]) {
        response.success = false
        response.message = `ลองเพิ่ม console.log ประเภท ${key} ไปด้วย`
        response.stdout = result.stdout
        response.stderr = result.stderr
        break
      }
    }
  }
  return response
}

function handleOperators(code) {
  const result = eval(code)

  if (result.code !== 0) {
    return errorResponse(result.stderr)
  }
  const logs = result.stdout.split('\n')
  let checkResult = {
    '0': 5,
    '1': 10,
    '2': 20,
    '3': 2
  }
  let response = {
    success: true,
    message: 'ดีใจด้วย คุณเข้าใจ Operators แล้ว',
    stdout: result.stdout,
    stderr: ''
  }
  for (let i = 0; i < logs.length; i++) {
    if (Number(logs[i]) !== checkResult[i]) {
      response.success = false
      response.message = `คำตอบยังไม่ถูกต้อง`
      response.stdout = result.stdout
      response.stderr = result.stderr
      break
    }
  }
  return response
}

function handleConditions(code) {
  const result = evalCode(code)

  if (result.code !== 0) {
    return errorResponse(result.stderr)
  }

  const logs = result.stdout.split('\n')
}

function surroundWithTryCatch(code) {
  return `\n
    try {
      ${code}
    } catch (e) {
      console.log('error')
      console.log(e)
      if (e instanceof ReferenceError) {
        console.error('ได้ใส่ "" ครอบตัวหนังสือไหมครับ')
      } else if (e instanceof SyntaxError) {
        console.error('ลองเช็คดูดีๆนะ เขียนถูกต้องหรือเปล่า')
      } else {
        console.error('ลองเช็คดูดีๆนะ เขียนถูกต้องหรือเปล่า')
      }
    }
  `
}

function evalCode(code) {
  const unix = + new Date()
  const fileName = `temp/${unix}.js`
  fs.writeFileSync(fileName, code, 'utf-8')
  const result = shell.exec(`node ${fileName}`)
  console.log('Result:', result)
  return result
}

function errorResponse(stderr) {
  return { success: false, message: GENERAL_ERROR_MESSAGE, stdout: '', stderr }
}

function handleEval(code, question) {
  switch (Number(question)) {
    case 1:
      return handleConsoleLog(code);
    case 2:
      return handleDataTypes(code);
    case 3:
      return handleOperators(code);
    case 4: 
      return handleConditions(code);
    default:
      break;
  }
}

module.exports = {
  handleEval
}