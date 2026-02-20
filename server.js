const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the stitch-export folder
app.use(express.static(path.join(__dirname, 'stitch-export')));
app.use('/img sin fondo', express.static(path.join(__dirname, 'img sin fondo')));
app.use('/foto lourdes', express.static(path.join(__dirname, 'foto lourdes')));

// Fallback: serve showroom.html for any route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'stitch-export', 'showroom.html'));
});

app.listen(PORT, () => {
  console.log(`Peugeot Finance corriendo en puerto ${PORT}`);
});
