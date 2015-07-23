var path = require('path');
var archive = require('../helpers/archive-helpers');
var httpHelp = require('./http-helpers.js');
var fs = require('fs');
// require more modules/folders here!

exports.handleRequest = function (req, res) {
  var reqUrl = req.url;

  if (req.method === "GET") {
    httpHelp.serveAssets(res, req, archive.paths.siteAssets);
  } else if (req.method === "POST") {

    var body = "";
    req.on("data", function(buffer){
      body += buffer;
    })

    req.on("end", function(){

      var statusCode = 201;
      console.log(body);
      body = JSON.parse(body);

      archive.isUrlInList(body["url"], function(UrlExists){
        if (!UrlExists){
          statusCode = 302;
        }
      });

      if (statusCode === 302) {
        res.writeHead(statusCode);

        console.log(body["url"]);

        archive.addUrlToList(body["url"], function(){
        });

        res.end();

      } else {

      }


    });

  }

};
