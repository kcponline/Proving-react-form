// Include React 
var React = require('react');

// This is the main component. It includes the banner and form element.
var Form2 = React.createClass({

	// Here we set a generic state associated with the text being searched for
	getInitialState: function(){
		return {
			num1: 0,
			num2: 0,
			text: ""
		}
	},

	// This function will respond to the user input 
	handleChange: function(event){

    	// Here we create syntax to capture any change in text to the query terms (pre-search).
    	// See this Stack Overflow answer for more details: 
    	// http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler
    	var newState = {}; // create new object
    	newState[event.target.id] = event.target.value;
    	this.setState(newState);

	},

	// Here we render the function
	render: function(){

		return(

			<div className="container">

				<div className="row">

					<div className="jumbotron">
						<div className="panel-title text-left">
							<h2>NPR Status Update</h2>
							
						</div>
					</div>

					<div className="container">
						<form className="form-horizontal">

							<div className="form-group">
								
								<label className="control-label col-sm-2" for="quarter">Quarter:</label>
						
							</div>
							
							<div className="form-group">
								
								<label className="control-label col-sm-2" for="provider number">Provider Number:</label>
							</div>
							
							<div className="form group">
								
								<label className="control-label col-sm-2" for="provider name">Provider Name:</label>
							</div>

							<div className="form-group">
								<label className="control-label col-sm-2" for="consultant">Consultant:</label>
							</div>

							

							<div className="form-group">
								<label className="control-label col-sm-2" for="healthcare system">Healthcare System:</label>
							</div>





							


							
						</form>
						
					</div> 

					
				

					
				</div>

			</div>
		)
	}
});

// Export the componen back for use in other files
module.exports = Form2;