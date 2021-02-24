const React = require('react')
const Default = require('./layouts/Default')

function New ({bread, title}) {
    return (
      <Default title={title}>
        <h2>Add a new bread</h2>
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
            defaultChecked
          />
          <br />
          <input type="submit"/>
        </form>
      </Default>
    )
}

module.exports = New
