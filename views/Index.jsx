const React = require('react')
const Default = require('./layouts/Default')

function Index ({breads, title}) {
  console.log(breads[0].name)
    return (
      <Default title={title}>
        <h2>Index Page</h2>
        {/* This is a JSX comment */}
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

module.exports = Index
