﻿exports.handle = function(request, response)
{
    // prepare http head
    response.writeHead(200, {"Content-Type": "text/html; charset=UTF-8"});

    // add http body
    response.write("<html><body>\n");
    response.write("Polish: cześć świata<br>");
    response.write("<a href='./'>Back</a>\n");
    response.write("</body></html>\n");

    // send http response off
    response.end();
};