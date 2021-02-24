const React = require('react')
const Default = require('./layouts/Default')

function Index ({breads, title}) {
    return (
      <Default title={title}>
        {/* This is a JSX comment */}
        <a href="/breads/new"><button>Add a new bread</button></a>
        <h3>A list of my breads:</h3>
        <ul>
        {
          breads.map((bread, index)=> {
            return (
              <li key={index}>
               <a href={`/breads/${index}`}>{bread.name}</a>
              </li>
            )
          })
        }
        </ul>
      </Default>
    )
}

module.exports = Index
