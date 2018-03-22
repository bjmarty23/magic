let express = require('express');
let app = express();
// just leave the array empty
let PORT =5000;
let bodyParser = require('body-parser');

app.use(express.static('server/public'));



app.listen(PORT, () => {
    console.log('app is running n port', PORT)
});
