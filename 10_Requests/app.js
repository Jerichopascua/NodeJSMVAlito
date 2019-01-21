var request = require("request");
var fs = require("fs");
/*// exmample lets grab a page
request("http://www.bing.com", function(error, response, body) {
  console.log(body);
});
*/
// Example 3 : We can download a file and capture whe its done
var request = require("request");
var fs = require("fs");

var file = fs.createWriteStream('rami2.jpg');
// request('http://i.ytimg.com/vi/HrnBrOytj-A/0.jpg').pipe(file);
request('https://scontent.fkul10-1.fna.fbcdn.net/v/t1.0-1/c0.0.240.240a/p240x240/38662677_922654767930820_6552656334481784832_n.jpg?_nc_cat=102&_nc_ht=scontent.fkul10-1.fna&oh=228fa55221f4e3818093fdc7e9a4a94b&oe=5CB8304E').pipe(file);
// request('http://i.ytimg.com/vi/HrnBrOytj-A/0.jpg').pipe(file);
file.on('finish',function(){
  console.log("Okey, we got this stellar pic of Rami");
})