var server = require('hlc-server');               // Import the package
var app = new server();                           // Fire up the server
app.bind( { protocol: 'serial', path: 'auto' } ); // Listen on USB
console.log('Browse to http://localhost:3001');   // Friendly reminder
