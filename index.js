const express = require('express');
const app = express();
const port = 3001;
const path = require('path');

const PokedexRouter = require('./server/routes/pokedex.router.js');
const EvolutionsRouter = require('./server/routes/evolutions.router.js');
const TypesRouter = require('./server/routes/types.router.js');
const MovesRouter = require('./server/routes/moves.router.js');
const AbilitiesRouter = require('./server/routes/abilities.router.js');
// const template = require('../index.html');

app.use('/api/v1/pokedex', PokedexRouter);
app.use('/api/v1/evolutions', EvolutionsRouter);
app.use('/api/v1/types/', TypesRouter);
app.use('/api/v1/moves', MovesRouter);
app.use('/api/v1/abilities', AbilitiesRouter);
app.get('/', (req, res) => {
	// res.sendFile('../index.html');
	 res.sendFile(path.join(__dirname + '/index.html'));
	// res.send('testing');
});

app.listen(port, () => {
	console.log('Listening on port ', port);
});