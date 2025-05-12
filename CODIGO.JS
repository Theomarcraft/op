document.getElementById('cancelar-btn').addEventListener('click', function() {
  const fechaCita = new Date(document.getElementById('fecha-cita').textContent);
  const hoy = new Date();

  const diferenciaDias = Math.floor((fechaCita - hoy) / (1000 * 60 * 60 * 24));

  if (diferenciaDias >= 1) {
    document.getElementById('estado-cita').textContent = 'Cancelada';
    document.getElementById('mensaje').textContent = 'La cita ha sido cancelada exitosamente.';
    // Aquí puedes llamar al backend con fetch para guardar la cancelación
  } else {
    document.getElementById('mensaje').textContent = 'Solo puedes cancelar la cita con al menos un día de anticipación.';
    document.getElementById('mensaje').style.color = 'red';
  }
});
