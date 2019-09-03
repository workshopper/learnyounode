POST 요청만 받아 들어온 POST 몸통의 문자를 대문자로 변환해 클라이언트에 반환하는 HTTP 서버를 작성하세요.

서버는 프로그램에 첫 번째 인자에서 주어진 포트로 수신해야 합니다.

----------------------------------------------------------------------
## 힌트

`request`와 `response` 객체의 스트리밍 기능을 사용한다면 훨씬 쉬워집니다.


npm에는 통과하는 스트림 데이터를 *"변환"* 하는데 사용할 수 있는 여러 패키지가 있습니다. 이 연습 문제에서는 가장 간단한 API를 제공하는 `through2-map`를 추천합니다.

`through2-map`은 데이터의 덩어리를 받아 데이터의 덩어리를 반환하는 한 개의 함수만으로 *변환 스트림*을 만들 수 있습니다. 이는 스트림용 `Array#map()`처럼 설계되었습니다.

```js
const map = require('through2-map')
inStream.pipe(map(function (chunk) {
  return chunk.toString().split('').reverse().join('')
})).pipe(outStream)
```

위의 예제에서, `inStream`에서 들어오는 데이터는 (이미 변환되어 있지 않다면) 문자열으로 변환하고 뒤집어서 그 결과를 `outStream`에 넘깁니다. 네, 방금 만든 건 문자 덩어리를 뒤집는 서버입니다! 덩어리의 크기는 업스트림에 의해 결정 되고 들어오는 데이터에서 제어하긴 힘들다는 걸 기억하세요.

`through2-map`를 설치하려면 다음을 입력하세요.

```sh
$ npm install through2-map
```

인터넷에 연결되어 있지 않다면, 그냥 {appname}가 설치된 디렉터리 안에 `node_modules` 디렉터리를 만들어 원하는 패키지의 모든 디렉터리를 복사해도 됩니다.

  {rootdir:/node_modules/through2-map}

through2-map의 문서는 {appname}와 함께 시스템에 설치되고 브라우저에 이 주소를 넣으면 볼 수 있습니다.

  {rootdir:/docs/through2-map.html}
