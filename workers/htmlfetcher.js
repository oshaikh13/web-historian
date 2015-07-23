// Use the code in `archive-helpers.js` to actually download the urls
// that are waiting.
var archive = require('../helpers/archive-helpers.js');
var fs = require('fs');


archive.readListOfUrls(function(data){
  console.log(data);
  archive.downloadUrls(data, function(){
    fs.writeFile(archive.paths.list, '', function(){console.log('done')});
  });
  
})