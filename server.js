var http = require("http"),
		fs = require("fs");

// languages
var langs = {};
langs.english = require("./langs/english");
langs.russian = require("./langs/russian");
langs.arabic = require("./langs/arabic");
langs.vietnamese = require("./langs/vietnamese");
langs.danish = require("./langs/danish"); 

http.createServer(function(request, response) {

	var lang = request.url.substr(1);

	//	handle hello world by language, if present
	if (typeof(langs[lang])!=="undefined")
	{
		langs[lang].handle(request, response);
	}
	// list and link all languages based on langs object
	else
	{
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write("<html><body>Hello World in \n");
		for (l in langs) response.write("<a href='"+l+"'>"+l+"</a> ");
		response.write("</body></html>\n");
		response.end();
	}

}).listen(8234);

console.log("Server running at http://localhost:1234/");
