const React = require('react')
const Default = require('./layouts/Default')

function Show ({bread, index, title}) {
    return (
      <Default title={title}>

        <div className="show-container">
          <div className="image-container">
            <div className="image">
              <img src={bread.image} alt={bread.name}/>
            </div>
          </div>
          <div className="info">
            <h3>{bread.name}</h3>
            <h4>{bread.rating.map(star => {
              String.fromCodePoint(parseInt(star, 16))
            })}</h4>
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

           <div className="actions">
              <form action={`/breads/${index}\?_method=DELETE`} method="POST">
                <input type='submit' value="DELETE"/>
              </form>
              <a href={`/breads/${index}/edit`}><button>edit</button></a>
            </div>
              <a href="/breads">Back to Index</a>
          </div>
        </div>
      </Default>
    )
}

module.exports = Show
