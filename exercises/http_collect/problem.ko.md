첫 번째 커맨드 라인 인자로 넘긴 URL로 HTTP GET 요청을 수행하는 프로그램을 작성하세요. 서버에서 **모든** 데이터(첫 번째 "data" 이벤트만 하지 말고)를 수집하고 콘솔(stdout)에 두 줄을 적으세요.

출력해야 할 첫 번째 줄은 서버에서 받은 글자의 수를 나타내는 정수입니다. 두 번째 줄은 서버에서 보낸 모든 문자열을 가지고 있어야 합니다.

----------------------------------------------------------------------
## 힌트

이 문제를 푸는 방법은 두 가지가 있습니다.

**1)** 여러 "data" 이벤트에서 데이터를 수집해 결과를 출력하기 전에 합치기. "end" 이벤트를 스트림이 끝나고 결과를 출력할 수 있는지 알아보는데 사용.

**2)** 전체 데이터 스트림을 수집하는 것은 어려운 작업입니다. 서드 파티 패키지를 이용해 해소하세요. `bl` (Buffer List), `concat-stream` 두 패키지가 이 문제를 풀기에 유용한 API를 제공.(할 가능성이 있음!) 하나를 고르세요.

  <https://npmjs.com/bl>
  <https://npmjs.com/concat-stream>

Node 패키지를 설치하려면, Node 패키지 관리자 `npm`을 사용하세요. 밑의 줄을 그냥 입력하세요.

```sh
$ npm install bl
```

그러면 패키지의 최신 버전이 `node_modules`라는 하위 디렉터리에 다운로드되고 설치될 것입니다. 이 하위 디렉터리에 있는 모든 패키지는 메인 프로그램 파일에서 `require` 구문으로 './'를 앞에 붙이지 않고 로드할 수 있습니다.

```js
const bl = require('bl')
```

Node는 패키지의 위치를 찾을 때, 먼저 핵심 모듈에서 찾은 다음 `node_modules` 디렉터리를 찾습니다.

인터넷에 연결되어 있지 않다면, 그냥 {appname}가 설치된 디렉터리 안에 `node_modules` 디렉터리를 만들어 원하는 패키지의 모든 디렉터리를 복사해도 됩니다.

  {rootdir:/node_modules/bl}
  {rootdir:/node_modules/concat-stream}

`bl`, `concat-stream` 둘 다 *piped* 스트림을 가지고 있고 데이터를 수집해 줄 수 있습니다.  스트림이 끝나면, 데이터가 있는 콜백이 일어납니다.

```js
response.pipe(bl(function (err, data) { /* ... */ }))
// or
response.pipe(concatStream(function (data) { /* ... */ }))
```

버퍼에서 변환하기 위해 `data.toString()`을 할 필요가 있으니 주의하세요.

양 모듈의 문서는 {appname}와 함께 시스템에 설치되고 브라우저에 이 주소를 넣으면 볼 수 있습니다.

  {rootdir:/docs/bl.html}
  {rootdir:/docs/concat-stream.html}
