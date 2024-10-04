import validarCPF from "./validarCPF.js";

const cpf = document.querySelector('[data-cpf]');
const validar = new validarCPF(cpf).iniciar();

