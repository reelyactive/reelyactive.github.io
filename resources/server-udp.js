var server = require('hlc-server');               // Import the package
var app = new server();                           // Fire up the server
app.bind( { protocol: 'udp',                      // Listen for UDP
            path: '192.168.1.101:50000' } );      //   on this IP address
console.log('Browse to http://localhost:3001');   // Friendly reminder
