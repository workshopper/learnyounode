**TCP 시간 서버**를 작성하세요!

서버는 프로그램이 첫 번째 인자로 받은 포트로 TCP 연결을 감시해야 합니다. 각 연결에는 **개행** 문자 다음에 현재 시간을 24 시간 형식으로 적어야 합니다.

```
"YYYY-MM-DD hh:mm"
```

월, 일, 시간, 분은 앞이 *0으로 채워진* 2자리 정수여야 합니다. 예를 들면,

```
"2013-07-06 17:42"
```

----------------------------------------------------------------------
## 힌트

이 연습 문제를 위해 생 TCP 서버를 만들겠습니다. HTTP와는 관계없기 때문에 노드 핵심 라이브러리의 `net` 모듈을 사용해야 합니다. 여기에는 네트워킹에 관련된 모든 기본 함수들이 들어 있습니다.

`net` 모듈에는 콜백 함수를 받는 `net.createServer()`라는 메소드가 들어있습니다. 노드 대부분의 콜백과는 다르게, `createServer()`에서 사용되는 콜백은 한 번 이상 호출됩니다. 서버가 받는 모든 연결은 매번 콜백을 호출하게 됩니다. 콜백 함수는 이런 모양입니다.

```js
function callback (socket) { /* ... */ }
```

`net.createServer()`는 `server`의 인스턴스도 반환합니다. 특정 포트의 감시를 시작하려면 `server.listen(portNumber)`를 호출하셔야 합니다.

일반적인 Node TCP 서버는 이렇게 생겼습니다.

```js
const net = require('net')
const server = net.createServer(function (socket) {
  // socket handling logic
})
server.listen(8000)
```

첫 번째 커맨드 라인 인자로 넘긴 포트 번호를 사용하려면 번호를 기억해둘 필요가 있습니다.

`socket` 객체는 연결에 관한 많은 메타 데이터를 가지고 있습니다만, 노드의 2중(duplex) 스트림이기도 해서, 읽어오거나 쓰거나 할 수 있습니다. 이 연습 문제에서는 그냥 데이터를 쓰고 소켓을 닫으시면 됩니다.

데이터를 쓰려면 `socket.write(data)`를 사용하고 소켓을 닫으려면 `socket.end()`를 사용하세요. 아니면 `.end()` 메소드도 데이터 객체를 받을 수 있으니 그냥 `socket.end(data)`를 사용하셔도 됩니다.

`net` 모듈의 문서는 브라우저에 이 주소를 넣으면 볼 수 있습니다.

  {rootdir:/docs-nodejs/net.html}

날짜를 만드려면, `new Date()` 객체에서 사용자 정의 형식을 만들 필요가 있습니다. 이 메소드가 유용할 것입니다.

```js
date.getFullYear()
date.getMonth() // starts at 0
date.getDate() // returns the day of month
date.getHours()
date.getMinutes()
```

조금 더 잘하고 싶다면, npm에서 `strftime` 패키지를 사용할 수도 있습니다. `strftime(fmt, date)` 함수는 unix `date` 형식 같은 데이터 형식을 받습니다. strftime에 관한 더 자세한 정보는 https://github.com/samsonjs/strftime 에서 읽을 수 있습니다.
