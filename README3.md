# Rendering The Show Page, Navigation and Adding a CSS Library

- `touch views/Show.jsx`
- add our basic code

**views/Show.jsx**

```js
const React = require('react')
const Default = require('./layouts/Default')

function Show ({bread}) {
  console.log(bread.name)
    return (
      <Default>
        <h2>Show Page</h2>  
      </Default>
    )
}

module.exports = Show
```

**controllers/breads_controller.js**

```js
breads.get('/:arrayIndex', (req, res) => {
  res.render('Show', {
    bread: Bread[req.params.arrayIndex]
  })
})
```

Go to `http://locahost:3003/1`

You should see `French` in your terminal.

## Adding data to our view

**views/Show.jsx**

```js
function Show ({bread}) {
  console.log(bread.name)
    return (
      <Default>
        <h3>{bread.name}</h3>
        <h4>Is made up of {bread.flourType}</h4>
      </Default>
    )
}
```

## Conditionally adding different HTML based on data

Let's provide the bread information about gluten

```js
function Show ({bread}) {
  console.log(bread)
    return (
      <Default>
        <h2>Show Page</h2>
        <h3>{bread.name}</h3>
        <h4>Is made up of {bread.flourType}</h4>
        <p>
          and it
          {
            bread.hasGluten
            ? <span> does </span>
            : <span> does NOT </span>
          }
          have gluten.
        </p>
      </Default>
    )
}
```

## Create navigation

```js
function Show ({bread}) {
  console.log(bread)
    return (
      <Default>
        <h2>Show Page</h2>
        <h3>{bread.name}</h3>
        <h4>Is made up of {bread.flourType}</h4>
        <p>
          and it
          {
            bread.hasGluten
            ? <span> does </span>
            : <span> does NOT </span>
          }
          have gluten.
        </p>
        <ul>
          <li><a href="/breads">Index</a></li>
          <li><a href="/">Go home</a></li>
        </ul>
      </Default>
    )
}
```

## Create Dynamic Navigation

**views/Index.js**

```js
  {
    breads.map((bread, index)=> {
      return (
        <li key={index}>
         <a href={`/breads/${index}`}>{bread.name}</a>
        </li>
      )
    })
  }
```

## Adding a CSS Library

We will learn how to add external style sheets in a future lesson, but for now, you can add a CSS Framework like skeleton or bootstrap

**views/layouts/Default.jsx**

```html
<head>
  <title>{props.title}</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossOrigin="anonymous" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" integrity="sha512-EZLkOqwILORob+p0BXZc+Vm3RgJBOe1Iq/0fiI7r/wJgzOFZMlsqTa29UEl6v6U6gsV4uIpsNZoV32YZqrCRCQ==" crossOrigin="anonymous" />
</head>
```

## Bonus 2

### Create a 404 page

- `touch views/404.jsx`

**views/404.jsx**

```js
const React = require('react')
const Default = require('./layouts/Default')

function NotFound () {
    return (
      <Default title="404">
        <h1>Uh oh! There isn't a page here!</h1>
        <h2><a href="/breads">Go back to breads</a></h2>
      </Default>
    )
}

module.exports = NotFound

```

**server.js**

right above the `app.listen`. MUST be below every other route

```js
// 404
app.get('*', (req, res) => {
  res.render('404')
})
```

Go to `http://locahost:3003/breadzzzz`

You should see the 404!

Let's also add it in case someone adds an invalid array number in breads.

**controllers/breads_controller.js**

```js
breads.get('/:arrayIndex', (req, res) => {
  if (Bread[req.params.arrayIndex]) {
    res.render('Show', {
      bread:Bread[req.params.arrayIndex]
    })
  } else {
    res.render('404')
  }
})
```

Go to `http://locahost:3003/breads/43`
