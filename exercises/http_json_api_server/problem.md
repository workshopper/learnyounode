Write an HTTP **server** that serves JSON data when it receives a GET request to the path '/api/parsetime'. Expect the request to contain a query string with a key 'iso' and an ISO-format time as the value.

For example:

  /api/parsetime?iso=2013-08-10T12:10:15.474Z

The JSON response should contain only 'hour', 'minute' and 'second' properties. For example:

```json
{
  "hour": 14,
  "minute": 23,
  "second": 15
}
```

Add second endpoint for the path '/api/unixtime' which accepts the same query string but returns UNIX epoch time under the property 'unixtime'. For example:

```json
{ "unixtime": 1376136615474 }
```

Your server should listen on the port provided by the first argument to your program.

----------------------------------------------------------------------
## HINTS

The `request` object from an HTTP server has a `url` property that you will need to use to *"route"* your requests for the two endpoints.

You can parse the URL and query string using the Node core 'url' module. `url.parse(request.url, true)` will parse content of request.url and provide you with an object with helpful properties.

For example, on the command prompt, type:

```sh
$ node -pe "require('url').parse('/test?q=1', true)"
```

Documentation on the `url` module can be found by pointing your browser here:
  {rootdir:/node_apidoc/url.html}
  
Your response should be in a JSON string format. Look at `JSON#stringify()` for more information.

You should also be a good web citizen and set the Content-Type properly:

```js
res.writeHead(200, { 'Content-Type': 'application/json' })
```

The JavaScript `Date` object can print dates in ISO format, e.g. `new Date().toISOString()`. It can also parse this format if you pass the string into the `Date` constructor. `Date#getTime()` will also
come in handy.

----------------------------------------------------------------------
