import React from 'react';
import './Footertop.css';  

class Footertop extends React.Component{
	constructor(props){
	    super(props);
	    this.state = {
	      email: ''
	    }
    }

   onEmailChange = (event) =>{
    this.setState({email: event.target.value});
   }

   onSubmitSignUp = () =>{
	   	fetch('https://localhost:1000/signup',{
	   		method: 'post',
	   		headers: {'Content-Type': 'application/json'},
	   		body: JSON.stringify({ //converts what is inside the body(javascript objects i.e email) to json before transferring to the backend
	   			email:this.state.email
	   		})
	   	})
	   	.then(response => response.json())
 		/*.then(user =>{
	 			alert('Thanks for signing up!');	
 		})*/	
    }

	render(){	
		return(
			<div>	
			    <div className="background">
					<div className="tc-l ml3 tc-m ph3 pb1">
				        <h1 className="f3 f2-l fw2 pt6 black-100 mb0 lh-title center helvetica">Ready to buy from us? Please sign up now!</h1>
			    	</div>
			    	<div className="pa4-l">
					  <form className="mw7 center pa4">
					      <div className="cf">
					        <input className="f6 f5-l fw4 input-reset fl black-80 bg-white lh-solid pa3 w-100 w-70-m w-70-l ba br3 Helvetica mr3-ns mb2 ml3-m"
						        	placeholder="Enter your email..." type="email" name="email-address" id="email-address" 
						        	onChange={this.onEmailChange}
						    />
					        <input className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-green hover-bg-dark-green white pointer w-100 w-20-m w-20-l br3" 
							        type="submit" value="Sign Up!" 
							        onClick={this.onSubmitSignUp} 
						    />
					      </div>
					  </form>
					</div>
			    </div>
			</div>
		);
	}
}

export default Footertop
			