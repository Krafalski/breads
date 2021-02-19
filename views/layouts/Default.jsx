const React = require('react')

function Default(props) {
  return (
    <html>
    <head>
      <title>Default</title>
    </head>
    <body>
      <h1>HTML Rendred!</h1>
      {props.children}
    </body>
    </html>
  )
}

module.exports = Default
