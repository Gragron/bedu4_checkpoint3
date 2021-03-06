const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


mongoose.connect('mongodb://admin:admin123@ds337985.mlab.com:37985/bedu_final',{ useNewUrlParser: true });

const app = express();
var cors = require('cors')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())



// app.get('/api/algo', (req, res) => {
//     res.send('1234');
// });

require('./routes/tarjetasRoutes')(app); // ROUTES API TARJETAS
require('./routes/pagosRoutes')(app); // ROUTES API PAGOS
require('./routes/serviciosRoutes')(app); // ROUTES API SERVICIOS

// Configuration for heroku
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('front/build'));
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../front', 'build', 'index.html'));
    });
}

app.listen(process.env.PORT || 5000);