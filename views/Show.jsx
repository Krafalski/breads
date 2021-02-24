const React = require('react')
const Default = require('./layouts/Default')

function Show ({bread, index, title}) {
    return (
      <Default title={title}>
        <h3>{bread.name}</h3>
        <div className="image-container">
        <div className="image">
          <img src={bread.image} alt={bread.name}/>
        </div>
        </div>
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
        <form action={`/breads/${index}\?_method=DELETE`} method="POST">
          <input type='submit' value="DELETE"/>
        </form>
        <a href={`/breads/${index}/edit`}><button>edit</button></a>
        <ul>
          <li><a href="/breads">Index</a></li>
          <li><a href="/">Go home</a></li>
        </ul>
      </Default>
    )
}

module.exports = Show
