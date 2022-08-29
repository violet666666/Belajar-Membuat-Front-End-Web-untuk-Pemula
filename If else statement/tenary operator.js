/* Selain if statement di atas, JavaScript juga mendukung ternary operator atau conditional expressions. Dengan ini, kita bisa menuliskan if-else statement hanya dalam satu baris. */
// condition ? true expression : false expression

const isMember = true;
const discount = isMember ? 0.1 : 0;
console.log('Anda mendapatkan diskon sebesar ' + discount * 100 + '%');

/* Output:
Anda mendapatkan diskon sebesar 0% jika member false
*/