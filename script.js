const letras = "abcdefghijklmnopqrstuvwxyz";
const maiusculas = letras.toUpperCase();
const numeros = "0123456789";
const simbolos = "!@#$%&*";

function gerar() {
  const tamanho = document.getElementById("tamanho").value;
  const usarMaiusculas = document.getElementById("maiusculas").checked;
  const usarNumeros = document.getElementById("numeros").checked;
  const usarSimbolos = document.getElementById("simbolos").checked;

  let chars = letras;

  if (usarMaiusculas) chars += maiusculas;
  if (usarNumeros) chars += numeros;
  if (usarSimbolos) chars += simbolos;

  let senha = "";

  for (let i = 0; i < tamanho; i++) {
    senha += chars[Math.floor(Math.random() * chars.length)];
  }

  document.getElementById("senha").value = senha;

  avaliarForca(senha);
}

function copiar() {
  const input = document.getElementById("senha");
  input.select();
  document.execCommand("copy");
}

function avaliarForca(senha) {
  let forca = 0;

  if (senha.length >= 10) forca++;
  if (/[A-Z]/.test(senha)) forca++;
  if (/[0-9]/.test(senha)) forca++;
  if (/[^A-Za-z0-9]/.test(senha)) forca++;

  const texto = ["Fraca", "Média", "Boa", "Forte"];
  document.getElementById("forca").innerText = "Força: " + texto[forca - 1] || "Fraca";
}



const slider = document.getElementById("tamanho");
const valor = document.getElementById("tamanhoValor");

valor.innerText = slider.value;

slider.oninput = () => {
  valor.innerText = slider.value;
};