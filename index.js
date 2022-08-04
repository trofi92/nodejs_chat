const WebSocket = require("ws");
const ws = WebSocket.Server({port:8008});

ws.on ("connertion", function connect(ws,req){  //웹소켓에 특정 클라이언트가 연결 되었을때 실행
 
});
