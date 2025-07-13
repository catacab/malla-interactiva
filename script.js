const info = {
  QG1: "Química General I: Materia introductoria. No tiene prerrequisitos.",
  QG2: "Química General II: Necesita Química General I."
};

function mostrarInfo(codigo) {
  document.getElementById('infoMateria').innerText = info[codigo];
}
