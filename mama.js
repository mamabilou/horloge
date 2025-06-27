 function updateClockAndDate() {
      const now = new Date();

      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;

      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const dateStr = now.toLocaleDateString('fr-FR', options);
      document.getElementById("date").textContent = dateStr;
    }

    setInterval(updateClockAndDate, 1000);
    updateClockAndDate();