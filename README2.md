# Rendering HTML

So far we've just been rendering plain strings. We want to be able to show HTML in the browser.

We want our HTML to have our data inside of it (embedded), so that our web pages reflect the data.

We are going to add an npm package that will help us do this.

We are going to use JSX, which is a mishmash of HTML and JavaScript.

- `npm install express-react-views`

**server.js**

```js
// MIDDLEWARE
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
```

- `mkdir views`
- `mkdir views/layouts`
- `touch views/layouts/Default.jsx`
- `touch views/Index.jsx`

**important**

The file extensions for the `views` must end int `jsx` not `js`

## Building the boilerplate

When we make a web page with html, we start by typing `html` and we press tab to autofill the boilerplate (`html`, `body`, `head` tags etc.)

We will want every page to have this.

**views/layout/Default/js**

React is included  inside of `express-react-views`
We need to require React so we can use jsx.


```js
const React = require('react')

function Default() {
  return (
    <html>
    <head>
      <title>Default</title>
    </head>
    <body>
      <h1>HTML Rendered!</h1>
      {this.props.children}
    </body>
    </html>
  )
}

module.exports = Default
```

We have to note some important things

- `return` can only be one line by default. Since we ant to put our HTML across many lines so we can read it more easily, we must wrap everything we want to return in parentheses `()`

- while whitespace almost never matters in JavaScript, we encounter a time when it does:
  - you must start the parenthesis `(` on the same line as the `return`

**Good**
```js
 return (

 )
```

**Bad**
```js
return
()
```

The latter will return `null` and not anything inside the parentheses.


We have to add `{props.children}` - `props` is short for `properties` and `children` is also a keyword for the child HTML elements that we'll load. These `child` components will be our different views.

## Building the Index Page

We are going to wrap our content inside our layout.
We are going to import the Default component, and then put our new HTML inside it, that way we get everything from the HTML/head boilerplate we created.


```js
const React = require('react')
const Default = require('./layouts/Default')

function Index () {
    return (
      <Default>
        <h2>Index Page</h2>
      </Default>
    )
}

module.exports = Index
```
Let's change our index route from just sending a string to rendering some HTML

**controlers/breads_controller.js**

```js
breads.get('/', (req, res) => {
    res.render('Index')
  // res.send(Bread)
})
```

**important** - you cannot res.send/res.render in the same request. Both send a response and you can only do one response per ever request. So be sure to comment out or remove the res.send.

Let's test it by going to `http:localhost:3003/breads`

### Add our data

Let's update our render function. We need a way to pass the data. The way the render function works, is that the first argument is a string that is the file name that we want to render.

The second (optional) argument is an object that will hold our data.

```js
{}
```

The name of our data will be the key of the object. We can name it whatever we want, and we can add as many keys as we want

```js
{
  breads: `data from our models`
  username: `John doE`
  asdf: `jkl;`
}
```

For our purposes, we will bring in the array of bread objects

```js
{
  bread: Breads
}
```

Let's put it all together:

**controlers/breads_controller.js**


```js
breads.get('/', (req, res) => {
    res.render('Index',
      {
        breads: Breads
      }
    )
  // res.send(Bread)
})
```

When we refresh the page, nothing happens yet.

We have to put our data in.

Let's start with just one bread:

First, we have to pass our `breads` as an object as an argument in our function.


Then we can access it inside our `jsx`
**views/Index.js**

```js
function Index ({breads}) {
    return (
      <Default>
        <h2>Index Page</h2>
        <p>I have {breads[0].name} bread!</p>
      </Default>
    )
}
```


**Need help debugging?** You can add a console.log before the return statement

```js
function Index ({breads}) {
  console.log('the value of breads is', breads)
    return (
      <Default>
        <h2>Index Page</h2>
      </Default>
    )
}
```
**Important** - inside the `return` is not JavaScript, but the special JSX syntax.

If you want to comment something out inside the return statement, regular JS comments don't work, instead you must use the following syntax:


`{/* This is a JSX comment */}`

### Add all our data

We need to be able to loop over all our data and return HTML for each object.

We'll use the `.map` array method. It will loop over our array of data and `return` a new array with our data inside the `html` elements we want.

Let's us an `ul` (unordered list) to hold all our breads


```js
<Default>
  <h2>Index Page</h2>
  {/* <p>I have {breads[0].name} bread!</p> */}
  {/* This is a JSX comment */}
  <ul>
  {
    breads.map((bread, index)=> {})
  }
  </ul>
</Default>
```

```js
<Default>
  <h2>Index Page</h2>
  {/* <p>I have {breads[0].name} bread!</p> */}
  {/* This is a JSX comment */}
  <ul>
  {
    breads.map((bread, index)=> {
      return (<li></li>)
    })
  }
  </ul>
</Default>
```

When we refresh our browser, we should see 3 bullets for each list item. We haven't put our data in yet, but we see that the `.map` method has made 3 new list item elements. Good!

We also see a warning:

`Warning: Each child in a list should have a unique "key" prop.`

We can fix this by giving each `li` a unique key. We can use the array position for now, for such a small build it will be ok. But when you'll be pulling from a database and building more complex apps, it is important you use a truly unique and unchanging for that piece of data value: You could use the `id` or another unique value.

This should fix the `warning`:

```js
    breads.map((bread, index)=> {
      return (<li key={index}></li>)
    })
```

Let's add the data inside our `li`

```js
    breads.map((bread, index)=> {
      return (
        <li key={index}>
         {bread.name}
        </li>
      )
    })
```

### Bonus

Adding more data. Let's add a custom title to each page.

**views/layouts/Default.jsx**

```js
function Default(props) {
  return (
    <html>
    <head>
      <title>{props.title}</title>
    </head>
    <body>
      <h1>HTML Rendred!</h1>
      {props.children}
    </body>
    </html>
  )
}
```

**controllers/breads_controller.js**

```js
breads.get('/', (req, res) => {
    res.render('Index',
      {
        breads: Bread,
        title: 'Index Page'
      }
    )
})
```

**views/Index.jsx**

```js
function Index ({breads, title}) {
    return (
      <Default title={title}>
        <h2>Index Page</h2>
        <ul>
        {
          breads.map((bread, index)=> {
            return (
              <li key={index}>
               {bread.name}
              </li>
            )
          })
        }
        </ul>
      </Default>
    )
}
```
