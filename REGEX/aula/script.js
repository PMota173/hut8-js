const regexp = /\w+/gi;

const regexp1 = new RegExp('\\w+', 'gi');

const frase = 'JavaScript é uma linguagem de programação';
console.log(frase.match(regexp));

// propiedades
console.log("flags:" + regexp.flags);
console.log("global:" + regexp.global);
console.log("ignoreCase:" + regexp.ignoreCase);
console.log("multiline:" + regexp.multiline);
console.log("source:" + regexp.source);
console.log("sticky:" + regexp.sticky);
console.log("unicode:" + regexp.unicode);



const frase1 = 'JavaScript, TypeScript, CoffeeScript, Java, C#';

const regexp2 = /\w+/gi;
const regexp3 = new RegExp('\\w+', 'gi');

console.log(frase1.match(regexp2));


const tags = `
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>
`;

const regexp4 = /(?<=<\/?)\w+/gi;

resultado = tags.replace(regexp4, 'div');

console.log(resultado);