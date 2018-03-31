const questions = [
  {
    id: 0,
    title: 'บทนำ Javascript',
    text: `<p>เรียน Javascript ไม่ยากอย่างที่คิด ไม่ว่าคุณจะอยากจะลองเขียนแอพเป็นของตัวเอง ทำเว็บไซต์ หรือ ต่อยอดในการทำงาน Javascript สามารถช่วยคุณได้</p> 
    <p>เชื่อหรือไม่? เมื่อจบบทเรียนนี้ คุณสามารถทำ XXXXX เป็นของตัวเองได้ง่ายๆ สร้างเองได้ใน 15 นาที ต้องลอง!</p>
    <p>Javascript เป็นภาษาที่ใช้กันอย่างแพร่หลาย ทุกวันนี้ภาษา Javascript สามารถใช้เขียนได้แทบทุกอย่าง ไม่ว่าจะเป็น เว็บไซต์ โปรแกรมเดสก์ท็อป และแม้กระทั่ง แอปพลิเคชันมือถือ</p>
    <p>ในบทเรียนนี้คุณจะได้เรียนรู้พื้นฐาน Javascript เช่น ชนิดตัวแปร การเขียน function และอื่นๆ ซึ่งเมื่อคุณเรียนเสร็จจะสามารถนำไปใช้ต่อยอดได้หลายอย่าง :)</p>
    `,
    haveQuestion: false,
    editorText: '',
  },
  {
    id: 1,
    title: 'บทนำ Javascript',
    text: `<p>ยินดีด้วย! คุณเข้าใจการพิมพ์ข้อความลงไปใน console แล้ว​ :)</p>
    <p>คุณอาจสงสัยทำไมต้องมีคำสั่งโง่ๆนี้ด้วย คือมันก็แค่พิมพ์ข้อความที่เราใส่ลงไปออกมาปะ ซึ่งเราก็รู้อยู่แล้วผลลัพธ์ที่ออกมาจะเป็นไง แต่เชื่อเราสิ คำสั่งนี้คุณได้ใช้บ่อยแน่ๆในอนาคตเมื่อคุณต้องเช็คผลลัพธ์ของโปรแกรมคุณ ซึ่งมันคงไม่ใช่แค่การแสดงข้อความที่คุณใส่ลงไปแน่ๆ :P</p>
    `,
    haveQuestion: false,
    editorText: ''
  },
  {
    id: 2,
    title: 'Console',
    text: `<p>Console คือเครื่องมือของโปรแกรมเมอร์ในการบันทึก output ของตัวโปรแกรม</p>
    <p><code>console.log()</code> คือคำสั่งในการพิมพ์ข้อความลงไปใน console</p>
    <p>ลองดูตัวอย่างต่อไปนี้</p>
    <pre><code class="javascript">console.log("สวัสดีวันอาทิตย์");</code></pre>
    <p>ในตัวอย่างนี้ สวัสดีวันอาทิตย์ จะถูกพิมพ์เข้าสู่ <code>console</code> จะสังเกตได้ว่าตรงท้ายแถวมีเครื่องหมายอัฒภาค <code>;</code> เป็นตัวบ่งบอกว่าสิ้นสุดประโยคคำสั่งนั้นๆ</p>
    <ol><li>ใช้คำสั่ง <code>console.log()</code> ในการพิมพ์ชื่อของคุณลงไป</li>
    <li>แถวถัดไปใช้คำสั่งเดิมในการพิมพ์ข้อความที่อยากบอกกับพวกเราสิ้</li></ol>
    <p>กด ปุ่ม <code>Run</code> เมื่อคุณต้องการจะเห็นผลลัพธ์</p>
    `,
    haveQuestion: true,
    editorText: `console.log();`
  },
  {
    id: 3,
    title: 'Data Types (ชนิดของตัวแปร)',
    text: `<p>จากบททดสอบที่แล้ว จะเห็นว่าข้อความที่เราพิมพ์ออกมานั้นโดยใช้คำสั่ง <cod>console.log()</cod> เป็นข้อความที่เอาตัวอักษรมารวมๆกัน(String)ทั้งหมด ซึ่งเป็นชนิดนึงของตัวแปร คุณคงมีคำถามว่า แล้วถ้าอยากจะพิมพ์ อายุตัวเองจะทำได้มั้ย?</p>
    <p>คำตอบคือได้! ในโลกโปรแกรมมิ่งจะมี data types หรือตัวแปรชนิดต่างๆอยู่หลากหลาย เช่น</p>
    <p>String (ข้อความ)</p>
    <p>ตัวอย่าง “เรา” “รัก” “ลุงตู่” (สังเกตว่า String จะมีเครื่องหมายคำพูดล้อมรอบ)</p>
    <p>Number (ตัวเลข)</p>
    <p>ตัวอย่าง 50, 3.14, 44</p>
    <p>Boolean (จริง หรือ เท็จ / true or false)</p>
    <p>ตัวอย่าง true false</p>
    <p>กดปุ่ม <code>Run</code> เพื่อดูเวลาพิมพ์ตัวแปรชนิดต่างๆลง console หน้าตาเป็นไงนะจ๊ะ</p>
    `,
    haveQuestion: true,
    editorText: `console.log(“ลุงตู่ อายุ”);
    console.log(64);
    console.log(true);    
    `
  },
  {
    id: 4,
    title: 'Operators',
    text: `<p>Operators คืออะไร? มันดูอลังการนะ แต่จริงๆมันก็คือ</p>
    <p><code>+</code>   บวก</p>
    <p><code>-</code>   ลบ</p>
    <p><code>*</code>   คูณ</p>
    <p><code>/</code>   หาร</p>
    <p>ซึ่งเด็กประถมก็เคยเรียนอะนะ ซึ่งเครื่องหมายพวกนี้ตอนเด็กๆเราก็ใช้มันเป็นตัวดำเนินการเลขสองตัวเข้าด้วยกัน ในเชิงโปรแกรมมิ่งก็เหมือนกันเลย!</p>
    <p>ยกตัวอย่าง</p>
    <p><code>1 + 1</code> จะได้ 2</p>
    <p><code>2 * 3</code> จะได้ 6</p>
    <p><code>2 + 2 / 2</code> จะได้ 3 (สังเกตว่าการประมวลผลจะอิงตามกฎคณิตศาสตร์เลย)</p>
    <ol><li>แถวที่หนึ่ง ใช้ Operator <code>+</code> และ <code>console.log()</code> ในการแสดงผลลัพธ์ให้ได้ <code>5</code></li>
    <li>แถวที่สอง ใช้ Operator <code>-</code> และ <code>console.log()</code> ในการแสดงผลลัพธ์ให้ได้ <code>10</code></li>
    <li>แถวที่สาม ใช้ Operator <code>*</code> และ <code>console.log()</code> ในการแสดงผลลัพธ์ให้ได้ <code>20</code></li>
    <li>แถวที่สี่ ใช้ Operator <code>/</code> และ <code>console.log()</code> ในการแสดงผลลัพธ์ให้ได้ <code>2</code></li></ol>
    <p>กด ปุ่ม <code>Run</code> เพื่อเช็คคำตอบนะจ๊ะ</p>
    `,
    haveQuestion: true,
    editorText: ''
  },
  {
    id: 5,
    title: 'Operators',
    text: `<p>ยินดีด้วย! คุณเข้าใจการใช้ Operators แล้ว​ :)</p>
    <p>Operators ที่เพิ่งเรียนไป คุณอาจจะสงสัยว่าไอ้ บวก ลบ คูณ หาร ง่ายๆที่เด็กประถมก็รู้นี้ มันจะเอาไปสร้างโปรแกรมอะไรเจ๋งๆได้เรอะ แต่คุณรู้มั้ยว่าโปรแกรมที่ร้านค้าขายของใช้กัน ไม่ว่าจะเป็นร้าน 7-11 Boots Watson และอื่นๆ โปรแกรมหน้าร้านที่เขาใช้จัดการสต๊อกสินค้าก็มีสูตรแค่นี้แหละ!</p>
    <p>ลูกค้าซื้อ DUREX Comfort 3 กล่อง
    (จำนวนที่มีอยู่ <code>- 3</code>) = จำนวนปัจจุบัน</p>
    <p>สต๊อกเข้าร้าน 5 โหล</p>
    <p>(จำนวนที่มีอยู่ <code>+ 5 * 12</code>) = จำนวนปัจจุบัน</p>
    `,
    haveQuestion: false,
    editorText: `
    console.log(2+3);
    console.log(15-5);
    console.log(5*4);
    console.log(4/2);
    `
  },
  {
    id: 6,
    title: 'If / else (ถ้าหาก / ถ้าไม่)',
    text: `<p>จากที่เรียนมาทั้งหมดมันออกจะทื่อๆไปหน่อย เราใส่อะไรลงไปโปรแกรมมันก็ป้อนที่เราใส่ไปออกมาให้ สิ่งสุดท้ายที่จะสอนในวิชา JavaScript เบื้องต้นนี้ จะเป็นการสอนให้โปรแกรมมีผลลัพธ์ได้มากกว่าหนึ่งอย่าง</p>
    <p>คำสั่ง <code>if()</code> คือถ้าหากเงื่อนไขในวงเล็บเป็นจริงจะประมวลคำสั่งข้างใต้ <code>if()</code></p>
    <p>คำสั่ง <code>else</code> ต้องใช้ต่อจาก <code>if()</code> ถ้าหากเงื่อนไขในวงเล็บของ <code>if()</code> ไม่เป็นจริงจะประมวลคำสั่งข้างล่าง <code>else</code> แทน</p>
    <p>จากคำอธิบายข้างบนอาจจะงงๆหน่อย แต่ถ้าเราพูดว่า ถ้าหาก(<code>if()</code>)เรากินอาหารแพงๆบ่อยๆ เราก็จะไม่มีตังค์เก็บ ถ้าไม่กินอาหารแพงๆบ่อยๆ(<code>else</code>)เราก็จะมีตังค์เก็บ โดยรูปแบบโค้ดง่ายๆก็จะออกมาเป็นแบบนี้</p>
    <p><code>if(กินอาหารแพงๆบ่อยๆ)</code></p>
    <p>\t<code>ไม่มีตังค์เก็บ;</code></p>
    <p><code>else</code></p>
    <p>\t<code>มีตังค์เก็บ;</code></p>
  </p>
    `,
    haveQuestion: false,
    editorText: ''
  },
  {
    id: 7,
    title: 'Project จบบท',
    text: `บทนี้เราเรียนมาหลายอย่างมากไม่ว่าจะเป็นคำสั่ง <code>console.log()</code> ซึ่งเป็นคำสั่งที่พิมพ์ตัวแปรลงไปใน console อย่างที่สองคือ <code>data types(ตัวแปรชนิดต่างๆ)</code> เป็นตัวบอกว่าข้อมูลเรานั้นจะเป็นชนิดไหน <code>String(ข้อความ) Number(ตัวเลข) Boolean(จริงเท็จ)</code> อย่างที่สามคือ <code>Operators + - * /</code> เอาไว้ทำสมการทางคณิตศาสตร์ต่างๆ สุดท้ายคือเรื่อง <code>if() / else</code> ตัวควบคุมการเดินทางของตัวโปรแกรม
    <ol><li><p>จงเขียนโปรแกรมว่าถ้า <code>x</code> เท่ากับ <code>44</code> ให้ ใช้คำสั่ง <code>alert()</code> และใส่ข้อความ <code>“ลุงตู่มาแล้ว!!!”</code> ลงไปข้างในวงเล็บ <code>alert()</code> ถ้าไม่เท่ากับ <code>44</code> จงใช้คำสั่ง <code>console.log()</code> พิมพ์ข้อความว่า <code>“ลุงตู่ไปแล้ว!!!”</code></p>
    <p>คำสั่งเท่ากับให้ใช้ <code>==</code> เช่น <code>x == 44</code></p>
    <p>กด <code>Run</code> เพื่อดูผลลัพธ์</p></li>
    <li>เปลี่ยนค่าของ <code>x</code> เป็นอย่างอื่นที่ไม่ใช่ <code>44</code> แล้ว กด Run เพื่อดูผลลัพธ์ใหม่</li></ol>
    `,
    haveQuestion: true,
    editorText: `var x = 44; // เปลี่ยนค่าของ x ตรงนี้ \n
    // เขียนโค๊ดของคุณข้างล่างนี้
    `
  }
]

module.exports = {
  questions
}