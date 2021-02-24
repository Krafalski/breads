const React = require('react')
const Default = require('./layouts/Default')

function Edit ({bread, index, title}) {
    return (
      <Default title={title}>
        <form action={`/breads/${index}\?_method=PUT`} method="POST">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            defaultValue={bread.name}
          />
          <label htmlFor="flourType">Flour Type</label>
          <input
            type="text"
            name="flourType"
            id="flourType"
            defaultValue={bread.flourType}
          />
          <label htmlFor="hasGluten">Has Gluten?</label>
          <input
            type="checkbox"
            name="hasGluten"
            id="hasGluten"
            defaultChecked={bread.hasGluten}
          />
          <br />
          <input type="submit"/>
        </form>
      </Default>
    )
}

module.exports = Edit
