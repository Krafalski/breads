# Creating a Form, adding an external CSS Stylesheet

It would be nice to be able to add more bread.

We already added a route that lets us add bread. But to do it through the browser, we need to use a form. So we will need a `new` route to show the form, and then we will `post` the form data.

- `touch views/new.jsx`

**controllers/breads_controller.js**


```js
breads.get('/new', (req, res) => {
    res.render('new')
})
```

**Gotcha!:** Make sure this root is above the req.params route `/:arrayIndex` or else it will be unreachable.


**views/new.jsx**

```js
const React = require('react')
const Default = require('./layouts/Default')

function New ({bread}) {
    return (
      <Default>
        <h2>Add a new bread</h2>
      </Default>
    )
}

module.exports = New
```

Go to `http:localhost:3003/breads/new`

### Add the form

We need to tell the form what type of request it is (POST) and where to send the request (`/breads`)

**views/new.jsx**

```js
<Default>
  <h2>Add a new bread</h2>
  <form action="/breads" method="POST">
    <input type="submit"/>
  </form>
</Default>
```

Got to `http://localhost:3003/breads/new` and press submit

It should successfully redirect back to the index page and you should see a new bullet in the list indicating a new object was created and added to the breads array.

## Add fields to the form

**views/new.jsx**

```js
<Default>
  <h2>Add a new bread</h2>
  <form>
    <label htmlFor="name">Name</label>
    <input
      type="text"
      name="name"
      id="name"
    />
    <label htmlFor="flourType">Flour Type</label>
    <input
      type="text"
      name="flourType"
      id="flourType"/>
    <label htmlFor="hasGluten">Has Gluten?</label>
    <input
      type="checkbox"
      name="hasGluten"
      id="hasGluten"/>
      checked
      <br />
    <input type="submit"/>
  </form>
</Default>
```

Now we should be able to add a new bread!

**Note:** in the same way that `class` is a reserved word, so is `for`. So when we make a label for our input that requires a `for` attribute, we have to use `htmlFor` instead. If we open up our dev tools, we will see that that it is converted to the proper attribute name.

[insert image showing class and for attribute in elements tab]()

## Navigation
We always should be thinking about how our users will use our app.

There is no way that they would know to go to `/breads/new` in order to find a new form. Let's go add this link to the `index` page

**views/index.jsx**

```js
<Default title={title}>
  <h2>Index Page</h2>
  <a href="/breads/new"><button>Add a new bread</button></a>
```

**Bonus**

Add a button or link to take the user back to the index page, in case they changed their mind about making a new bread

## Dealing with User Error

What if our users don't add a bread name? It should be required.

Let's add that to our form

What if the user doesn't provide an image

TO DO SHOW SHORT CIRCUIT AND ADD FIELD

## Adding Our own Style

We can add our own CSS file(s).

- `mkdir public`
- `touch public/main.css`

**public/main.css**

```css
body {
  background-color: floralwhite;
}
```

**views/layouts/Default.jsx**

AFTER the links to `skeleton.css`, inside `<head>`:

```html
<link rel="stylesheet" href="/main.css" />
```

It won't work yet. We have to tell the server where to find the files.

We will use some more built-in `express`  middleware

**server.js**

in the `middleware` section

```js
app.use(express.static('public'));
```

## Bonus Add some more style

Here is a little CSS to get you started

```css
body {
  background-color: floralwhite;
}

input[type=submit], button {
  background-color: wheat;
}

```

## BONUS 2

Add a favicon. [Hint](https://www.digitalocean.com/community/tutorials/how-to-add-a-favicon-to-your-website-with-html)
