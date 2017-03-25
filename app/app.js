// Include the Main React Dependencies
var React = require('react');
var ReactDOM = require('react-dom');

// Include the Main Component
var Form1 = require('./Components/Form1')

// This code here allows us to render our main component (in this case "Form")
ReactDOM.render(

	<Form1 />,
	document.getElementById('app')
)