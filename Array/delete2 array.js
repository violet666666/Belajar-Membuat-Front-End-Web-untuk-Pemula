// Namun, perhatikan di sini bahwa keyword delete hanya menghapus data pada index yang ditentukan lalu membiarkan posisi tersebut kosong. Untuk menghapus elemen, gunakan metode splice() seperti ini:
const myArray = ['Cokelat', 42.5, 22, true, 'Programming'];

myArray.splice(2, 1); // Menhapus dari index 2 sebanyak 1 elemen
console.log(myArray);

/* output:
['Cokelat', 42.5, true, 'Programming']
*/