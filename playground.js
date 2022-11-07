console.log(/^[0-9]+$/.test('11'));

const REGEX_EMAIL = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i;
console.log(REGEX_EMAIL.test('fasd@gmail.com'));