var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');

exports.headers = headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.
  //'Content-Type': "text/html"
};

exports.serveAssets = function(res, req, asset) {
  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...),
  // css, or anything that doesn't change often.)

  var mimeTypes = {
    '.js' : 'text/javascript',
    '.html': 'text/html',
    '.css' : 'text/css'
  };

  var lookup = path.basename(decodeURI(req.url)) || 'index.html';
  var f = asset  + '/' + lookup;
  fs.exists(f, function (exists) {
    if (exists) {
      fs.readFile(f, function (err, data) {
        if (err) {res.writeHead(500); res.end('Server Error!'); return; }
        //var headers = {'Content-type': mimeTypes[path.extname(lookup)]};
        // console.log(headers)
        res.writeHead(200, headers);
        res.end(data);
      });
      return;
    }
    console.log(f);
    res.writeHead(404); //no such file found!
    res.end();
  });




};



// As you progress, keep thinking about what helper functions you can put here!
