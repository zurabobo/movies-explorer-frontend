const fs = require('fs');

// _redirects will be created or overwritten by default.
fs.copyFile('_redirects', '../../build/_redirects', (err) => {
 if (err) throw err;
 console.log('_redirects was copied to dist folder!');
});
