const React = require('react')

function Form(props) {
  const {title, index=0, bread, action, method} = props
  return (
    <div className="container form-container">
      <form
        action={action}
        method={method}
      >
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
          defaultChecked={bread.hasGluten || true}
        />
        <br />
        <input type="submit"/>
      </form>
    </div>
  )
}

module.exports = Form
