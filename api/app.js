'use strict';

const cors = require('cors');
const express = require('express');
const { flaschenpost } = require('flaschenpost');
const logger = flaschenpost.getLogger();
const http = require('http');  // http Modul importieren

const api = express();

const server = http.createServer(api);

const port = 3000;  // Stelle sicher, dass deine Node.js-Version Unterstriche unterstützt

api.use(cors());

api.get('/', (req, res) => {
  res.json({ now: Date.now() });  // Optional: Beispiel JSON-Objekt
});

server.listen(port, () => {
  logger.info('Server started.', { port });  // Fehlendes Komma hinzugefügt
});


