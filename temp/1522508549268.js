var a = 'hehe x'
var a3 = 'dcdscsdcs'

      const assert = require('assert');
      const AssertionError = assert.AssertionError;
      try {
        assert.deepStrictEqual(a1, 'hehe xd');
      } catch (e) {
        if (e instanceof AssertionError) {
          console.error('สะกดถูกต้องไหมครับ');
        } else if (e instanceof ReferenceError) {
          console.error('ชื่อตัวแปรถูกต้องไหมครับ');
        } else {
          console.error(e);
        }
        process.exit(1)
      }
    