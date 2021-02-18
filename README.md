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
PORT=3000
```

**server.js**

```js
// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const app = express()
const PORT = process.env.PORT

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
