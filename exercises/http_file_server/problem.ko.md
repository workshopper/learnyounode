받은 요청과 같은 텍스트 파일를 제공하는 HTTP **서버**를 작성합니다.

서버는 프로그램에 첫 번째 인자에서 주어진 포트로 수신해야 합니다.

제공할 파일의 위치는 두 번째 커맨드 라인 인자로 넘겨야 합니다. **반드시** 응답에 파일 내용을 스트림하기 위해 `fs.createReadStream()` 메소드를 사용해야 합니다.

----------------------------------------------------------------------
## 힌트

일반적인 TCP 서버가 아니라 이 연습 문제를 위한 HTTP 서버를 만들어야 하기 때문에, Node 핵심 모듈에 있는 `http` 모듈을 사용해야 합니다. `net` 모듈처럼, `http`에도 `http.createServer()`라는 메소드가 있습니다. 이 메소드는 HTTP로 통신할 수 있는 서버를 만들 수 있다는 차이가 있습니다.

`http.createServer()`는 서버가 연결을 받을 때마다 한 번씩 호출되는 콜백을 받습니다. 이 콜백은 이런 모양을 하고 있습니다.

```js
function callback (request, response) { /* ... */ }
```

여기의 두 인자는 HTTP 요청과 그 요청에 대한 응답을 나타내는 객체입니다. `request`는 요청에서 헤더나 쿼리 문자열같은 속성을 가져오는데 사용합니다. `response`는 클라이언트로 헤더와 몸통 데이터를 보내는데 사용합니다.

`request`, `response` 둘 다 Node 스트림이기도 합니다! 이 말은 사용법에 맞기만 하면 데이터를 보내거나 받을 때 스트리밍 추상화를 사용할 수 있다는 이야기입니다.

`http.createServer()`도 `server` 인스턴스를 반환합니다. 특정 포트를 감시하기 시작하려면 반드시 `server.listen(portNumber)`로 호출해야 합니다.

보통 Node HTTP 서버는 이렇세 생겼습니다.

```js
const http = require('http')
const server = http.createServer(function (req, res) {
  // request handling logic...
})
server.listen(8000)
```

`http` 모듈의 문서는 브라우저에 이 주소를 넣으면 볼 수 있습니다.
  {rootdir:/docs-nodejs/http.html}

`fs` 핵심 모듈도 파일을 위한 스트리밍 API를 가지고 있습니다. 커맨드 라인 인수로 넘겨준 파일을 나타내는 스트림을 만들기 위해 `fs.createReadStream()` 메소드를 사용할 필요가 있습니다. 이 메소드는 스트림 객체를 반환합니다. 이를 이용해 `src.pipe(dst)`로 `src` 스트림에서 `dst` 스트림으로 파이프하도록 할 수 있습니다. 이 방법을 사용하면 파일 시스템 스트림에 HTTP 응답 스트림을 연결할 수 있습니다.
