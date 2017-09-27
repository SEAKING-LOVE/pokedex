const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;

const PokedexRouter = require('./routes/pokedex.router.js');
const EvolutionsRouter = require('./routes/evolutions.router.js');
const TypesRouter = require('./routes/types.router.js');
const MovesRouter = require('./routes/moves.router.js');
const AbilitiesRouter = require('./routes/abilities.router.js');
const FormsRouter = require('./routes/forms.router.js');
const GifsRouter = require('./routes/gifs.router.js');

//CORS: allow web requests from any domain
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use('/api/v1/pokedex', PokedexRouter);
app.use('/api/v1/evolutions', EvolutionsRouter);
app.use('/api/v1/types', TypesRouter);
app.use('/api/v1/moves', MovesRouter);
app.use('/api/v1/abilities', AbilitiesRouter);
app.use('/api/v1/forms', FormsRouter);

app.use('/assets/sprites', GifsRouter);

app.use('/dist', express.static(path.join(__dirname, '/../dist')));
app.get('*', (req, res) => res.sendFile(path.join(__dirname + '/../index.html')) );

app.listen(port, () => {
	console.log('Listening on port ', port);
});

