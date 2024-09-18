// aula sobre o objeto Date

// const data = new Date();
// console.log(data.toString());
// console.log('Dia', data.getDate());

// const data = new Date('2020-04-20 20:20:59');

// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth() + 1);


const data = new Date();

console.log('Dia:', data.getDate());
console.log('Mês:', data.getMonth() + 1);
console.log('Ano:', data.getFullYear());
console.log('Hora:', data.getHours());
console.log('Minutos:', data.getMinutes());
console.log('Segundos:', data.getSeconds());
console.log('Milissegundos:', data.getMilliseconds());
console.log('Dia da semana:', data.getDay());
console.log('Data completa:', data.toString());