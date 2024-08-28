document.addEventListener('DOMContentLoaded', (event) => {
  // Cargar el contenido guardado
  const content = document.getElementById('content');
  const savedContent = localStorage.getItem('pageContent');
  if (savedContent) {
      content.innerHTML = savedContent;
  }

  // Guardar el contenido cuando se haga clic en el botón
  const saveButton = document.getElementById('saveButton');
  saveButton.addEventListener('click', () => {
      const newContent = content.innerHTML;
      localStorage.setItem('pageContent', newContent);
      alert('Cambios guardados!');
  });
});
