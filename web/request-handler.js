var path = require('path');
var archive = require('../helpers/archive-helpers');
var httpHelp = require('./http-helpers.js');
var fs = require('fs');
// require more modules/folders here!

exports.handleRequest = function (req, res) {
  var reqUrl = req.url;

  httpHelp.serveAssets(res, req, archive.paths.siteAssets);

};
