// Include React 
var React = require('react');

// This is the main component. It includes the banner and form element.
var Form1 = React.createClass({

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
						<div className="panel-title text-center">
							<h1>Tracking</h1>
							
						</div>
					</div>

					<div class="container">
						<div className="col-sm-12">
							<div className="panel-body text-center">
								<div className="btn-group-vertical">
									<button type="button" className="btn btn-primary">Clients</button>
									<h3></h3>
									<button type="button" className="btn btn-primary">Consultant Lookup</button>
								</div>
	  						</div>
						</div>
					</div>

					<div className="col-md-6">
				
						<div className="panel panel-default">
							<div className="panel-heading">
								<div className="panel-title text-center"><strong>Data Entry</strong></div>
							</div>
							<div className="panel-body text-center">

								
								<div className="btn-group-vertical">
									<button type="button" className="btn btn-primary">NPR Deadlines</button>
										<h3>Update Status for NPRs</h3>
  									<button type="button" className="btn btn-primary">Model Form Entry</button>
  										<h3>Input Model Form</h3>
  									<button type="button" className="btn btn-primary">Tracking Entry</button>
  										<h3>Input Deadlines</h3>
								</div>

							</div>
						</div>

					</div>

					<div className="col-md-6">
				
						<div className="panel panel-default">
							<div className="panel-heading">
								<div className="panel-title text-center"><strong>Reports</strong></div>
							</div>
							<div className="panel-body text-center">

								<div className="btn-group-vertical">
									<button type="button" className="btn btn-primary">QRS Deadline Report</button>
										<h3>Only Deadlines</h3>
									<button type="button" className="btn btn-primary">NPR Deadlines Pursue</button>
										<h3>NPR Deadlines Pursue</h3>
									<button type="button" className="btn btn-primary">All NPR Apeeals</button>
										<h3>NPR Deadlines All</h3>
								</div>


									
							</div>
						</div>

					</div>

				</div>

			</div>
		)
	}
});

// Export the componen back for use in other files
module.exports = Form1;