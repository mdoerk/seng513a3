exports.handle = function (request, response)
{
	// prepare http head
	response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});

	// add http body
  response.write("<html><body>\n");
	response.write("Bulgarian: здравей свят<br>");
	response.write("<a href='./'>Back</a>\n");
	response.write("</body></html>\n");

	// send http response off
  response.end();
};
