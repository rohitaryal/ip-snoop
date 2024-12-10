### IP-Snoop
Get verbose ip detail. Made for cloudflare worker.

### How to run?
```bash
npm install
npm run dev
```

### Deployment
```bash
npm run deploy # deploy using wrangler
```

### Demo [nord]
 * <a href="https://ip-snoop.erucix.workers.dev/nord">YOU</a>
 * <a href="https://ip-snoop.erucix.workers.dev/nord?ip=8.8.8.8">CUSTOM</a>

### Demo [ipapi]
 * <a href="https://ip-snoop.erucix.workers.dev/ipapi">YOU</a>
 * <a href="https://ip-snoop.erucix.workers.dev/ipapi?ip=8.8.8.8">CUSTOM</a>

Check for other servers yourself.
___

#### Supported Methods
```js
["GET", "OPTIONS"]
```

#### IP Servers
```js
["nord", "ipapi", "ipinfo", "ifconfig", "cloudflare", "cf"]
```
#### Custom IP query supported by:
```js
["nord", "ipapi", "ipinfo"]
```
___
*Note: Some API key(s) present here was/were taken from a game i found. Not mine :)*