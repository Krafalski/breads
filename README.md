# breads
Express Full CRUD with SSR JSX


# Breads Full CRUD

## Getting Started

- navigate to github in the browser
- make a new repository called breads
  - choose public
  - add a README.md
  - choose .gitignore => node
  - skip license
  - green button create repository

![new repo set up](https://i.imgur.com/hZmTk3t.png)

- green code button to copy link
- navigate to `code` folder
- git clone `https://github.com/Krafalski/breads.git`
- `cd breads`
- `touch server.js`
- `touch .env`
- `npm init -y`
- `npm install express dotenv`
- open with text editor

## Set up basic express server

**Remeber** `.env` is not JavaScript, no spaces, no quotes, no semicolons

**.env**
```
PORT=3003
```

**server.js**

```js
// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const app = express()
const PORT = process.env.PORT

// ROUTES
app.get('/', (req, res) => {
  res.send('Breads!')
})

// LISTEN
app.listen(PORT, () => {
  console.log('nomming at port', PORT);
})
```

Go to `http://localhost:3003`

check that it all works

### END PART 1

## Add Bread Routes

- `mkdir controllers`
- touch `controllers/breads_controller.js`

```js
const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

console.log(Bread)

module.exports = breads
```

**server.js**

 Below Landing Page Route

```js
// ROUTES
breads.get('/', (req, res) => {
  res.send('Welcome to an awesome App about Breads')
})

// Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)
```

Go to `http://localhost:3003/breads`
to confirm you see your console log


## Add 'data' to READ (INDEX/SHOW)

On same level as `package.json`
 - `mdir models`
 - `touch models/bread.js`

 **models/bread.js**

```js
module.exports = [
  {
    name: 'Rye',
    hasGluten: true,
    flourType: 'rye'
  },
  {
    name: 'French',
    hasGluten: true,
    flourType: 'wheat'
  },
  {
    name: 'Glutten Free',
    hasGluten: false,
    flourType: 'tapioca'
  },
]
```

**controllers/breads_controller.js**

```js
const Bread = require('../models/bread.js')

```

Confirm import:
Where will the data appear? (Browser? Terminal?)

```js
console.log(breads)
```

## Send the 'data'

**controllers/breads_controller.js**
```js
breads.get('/', (req, res) => {
  res.send(Bread)
})
```

## YOU DO
Write a route that shows each bread

```js
breads.get('/:arrayIndex', (req, res) => {
  res.send(Bread[req.params.arrayIndex])
})
```

## CREATE

**server.js** - below configuration ABOVE routes

```js
// MIDDLEWARE
app.use(express.urlencoded({extended: true}))

```

INSOMNIA

download insomnia core
new request
BreadsCreate
POST
Form URL Encoded


![](https://i.imgur.com/9Hei1Gn.png)

confirm body parsing

![](https://i.imgur.com/P6kp0Q5.png)

need to change on/off to true/false

```js
breads.post('/', (req, res) => {
  if(req.body.hasGluten === 'on') {
    req.body.hasGluten === 'true'
  } else {
    req.body.hasGlutten === 'false'
  }
  Bread.push(req.body)
  res.redirect('/breads')
})
```

push to Bread array and redirect to confirm
in insomnia and browser
