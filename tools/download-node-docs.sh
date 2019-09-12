#!/bin/sh
#
# This script assumes that Monolith (https://github.com/Y2Z/monolith) is
# installed.
#
# Note: If someone knows a better way to save and bundle webpages into a single
#       HTML file using a built-in system dependency like wget or curl, or using
#       a Node.js package, please send a PR to improve this.

monolith https://nodejs.org/api/assert.html > ../docs/assert.html
monolith https://nodejs.org/api/async_hooks.html > ../docs/async_hooks.html
monolith https://nodejs.org/api/buffer.html > ../docs/buffer.html
monolith https://nodejs.org/api/addons.html > ../docs/addons.html
monolith https://nodejs.org/api/n-api.html > ../docs/n-api.html
monolith https://nodejs.org/api/child_process.html > ../docs/child_process.html
monolith https://nodejs.org/api/cluster.html > ../docs/cluster.html
monolith https://nodejs.org/api/cli.html > ../docs/cli.html
monolith https://nodejs.org/api/console.html > ../docs/console.html
monolith https://nodejs.org/api/crypto.html > ../docs/crypto.html
monolith https://nodejs.org/api/debugger.html > ../docs/debugger.html
monolith https://nodejs.org/api/deprecations.html > ../docs/deprecations.html
monolith https://nodejs.org/api/dns.html > ../docs/dns.html
monolith https://nodejs.org/api/domain.html > ../docs/domain.html
monolith https://nodejs.org/api/esm.html > ../docs/esm.html
monolith https://nodejs.org/api/errors.html > ../docs/errors.html
monolith https://nodejs.org/api/events.html > ../docs/events.html
monolith https://nodejs.org/api/fs.html > ../docs/fs.html
monolith https://nodejs.org/api/globals.html > ../docs/globals.html
monolith https://nodejs.org/api/http.html > ../docs/http.html
monolith https://nodejs.org/api/http2.html > ../docs/http2.html
monolith https://nodejs.org/api/https.html > ../docs/https.html
monolith https://nodejs.org/api/inspector.html > ../docs/inspector.html
monolith https://nodejs.org/api/intl.html > ../docs/intl.html
monolith https://nodejs.org/api/modules.html > ../docs/modules.html
monolith https://nodejs.org/api/net.html > ../docs/net.html
monolith https://nodejs.org/api/os.html > ../docs/os.html
monolith https://nodejs.org/api/path.html > ../docs/path.html
monolith https://nodejs.org/api/perf_hooks.html > ../docs/perf_hooks.html
monolith https://nodejs.org/api/policy.html > ../docs/policy.html
monolith https://nodejs.org/api/process.html > ../docs/process.html
monolith https://nodejs.org/api/punycode.html > ../docs/punycode.html
monolith https://nodejs.org/api/querystring.html > ../docs/querystring.html
monolith https://nodejs.org/api/readline.html > ../docs/readline.html
monolith https://nodejs.org/api/repl.html > ../docs/repl.html
monolith https://nodejs.org/api/report.html > ../docs/report.html
monolith https://nodejs.org/api/stream.html > ../docs/stream.html
monolith https://nodejs.org/api/string_decoder.html > ../docs/string_decoder.html
monolith https://nodejs.org/api/timers.html > ../docs/timers.html
monolith https://nodejs.org/api/tls.html > ../docs/tls.html
monolith https://nodejs.org/api/tracing.html > ../docs/tracing.html
monolith https://nodejs.org/api/tty.html > ../docs/tty.html
monolith https://nodejs.org/api/dgram.html > ../docs/dgram.html
monolith https://nodejs.org/api/url.html > ../docs/url.html
monolith https://nodejs.org/api/util.html > ../docs/util.html
monolith https://nodejs.org/api/v8.html > ../docs/v8.html
monolith https://nodejs.org/api/vm.html > ../docs/vm.html
monolith https://nodejs.org/api/worker_threads.html > ../docs/worker_threads.html
monolith https://nodejs.org/api/zlib.html > ../docs/zlib.html
