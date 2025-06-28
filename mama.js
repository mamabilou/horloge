
    function updateClockAndDate() {
      const now = new Date();
      const optionsDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const date = now.toLocaleDateString('fr-FR', optionsDate);
      const time = now.toLocaleTimeString('fr-FR');

      document.getElementById('clock').textContent = ` Heure actuelle : ${time}`;
      document.getElementById('date').textContent = ` Aujourd’hui : ${date}`;
    }

    updateClockAndDate();
    setInterval(updateClockAndDate, 1000);
 
