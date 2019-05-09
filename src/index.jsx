import React from 'react'
import ReactDom from 'react-dom'

class App extends React.Component {
    render() {
        return (<h1>Welcome to My Awesome React Application...</h1>)
    }
}

ReactDom.render(
    <App />,
    document.getElementById('react-root')
)    
