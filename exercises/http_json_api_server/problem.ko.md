'/api/parsetime' 경로로 받은 GET 요청에 대해 JSON 데이터를 제공하는 HTTP **서버**를 작성하세요. 요청에 포함된 쿼리 문자열은 'iso' 키에 ISO 시간 형식의 값이어야 합니다.

예를 들어,

  /api/parsetime?iso=2013-08-10T12:10:15.474Z

이 JSON 응답은 'hour', 'minute', 'second' 속성만 가지고 있어야 합니다. 예를 들어,

```json
{
  "hour": 14,
  "minute": 23,
  "second": 15
}
```

두 번째 엔드 포인트인 '/api/unixtime' 경로를 추가해 같은 쿼리 문자열을 받아 'unixtime' 속성에 UNIX 시간을 밀리 초 단위(1 Jan 1970 00:00:00 UTC부터의 경과 시간의 밀리 초 값)로 반환해야합니다. 예를 들어,

```json
{ "unixtime": 1376136615474 }
```

서버는 프로그램에 첫 번째 인자에서 주어진 포트로 수신해야 합니다.

----------------------------------------------------------------------
## 힌트

HTTP 서버의 `request` 객체는 요청을 두 엔드 포인트로 *"route"*하는데 필요한 `url` 속성을 가지고 있습니다.

Node 핵심 'url' 모듈을 이용해 URL과 쿼리 문자열을 파스할 수 있습니다. `new URL(request.url)`는 request.url의 내용을 구문 해석하고 도움이 되는 속성을 가진 객체를 줄 것입니다.

예를 들어, 커맨드 프롬프트에 다음을 입력하세요.

```sh
$ node -pe "new URL('/test?q=1', 'http://example.com')"
```

`url` 모듈의 문서는 브라우저에 이 주소를 넣으면 볼 수 있습니다.
  {rootdir:/docs-nodejs/url.html}

응답은 JSON 문자열 형식이어야 합니다. 더 자세한 정보는 `JSON.stringify()`를 보세요.

또, 좋은 웹 개발자라면 Content-Type 속성을 설정해야 합니다.

```js
res.writeHead(200, { 'Content-Type': 'application/json' })
```

JavaScript `Date` 객체는 ISO 형식으로 날짜를 출력할 수 있습니다.(예를 들면 `new Date().toISOString()`) `Date` 생성자에 문자열을 넘겨준다면 이 형식으로 변환해 줄 수도 있습니다. `Date#getTime()`도 유용할 수 있습니다.
