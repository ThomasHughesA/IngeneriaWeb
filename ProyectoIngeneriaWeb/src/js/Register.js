const registro=document.getElementById('registro');
const inputs=document.querySelectorALL('#registro inputs');

const expresiones={
  nombre:/^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  correo:/^.{4,12}$/, // 4 a 12 digitos.
  contraseña:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}
