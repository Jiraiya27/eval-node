

    try {
      console.log('sdcds')
console.log(1)
console.log(())
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
  