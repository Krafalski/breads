# Deleting an item

Let's create a route to delete an item

**controllers/breads_controller.js**

```js
breads.delete('/:index', (req, res) => {
  Bread.splice(req.params.index, 1)
  res.render('Index', {
    breads: Bread
  })
})
```

**views/show.jsx**

```js
// add argument index
function Show ({bread, index}) {
// ...
// further down, add a form
// ...

<form action={`/breads/${index}\?_method=DELETE`} method="POST">
  <input type='submit' value="DELETE"/>
</form>
```

# Updating an Item

**controllers/breads_controller.js**

We will need to make a view to show the edit form




**controllers/breads_controller.js**

```js
breads.put('/:index', (req, res) => {
  if(req.body.hasGluten === 'on'){
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread[req.params.index] = req.body
  res.render('Show', {
    bread: Bread,
    index: req.params.index
  })
})
```



- `touch views/edit.jsx`

```js
const React = require('react')
const Default = require('./layouts/Default')

function Edit ({bread, index}) {
    return (
      <Default>

      </Default>
    )
}

module.exports = Edit
```

Copy the form from `new.jsx` inside the `Default` element.

```js
<form action="/breads" method="POST">
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
    id="hasGluten"
    checked
  />
  <br />
  <input type="submit"/>
</form>
```

Update the form action

```js
<form action={`/breads/${index}\?_method=PUT` method="POST"}>
```

Test!


NOTE! Works with postman and not insomnia! Weird!
