import React from 'react';
import './Header.css';  

class Header extends React.Component{
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
	   	fetch('http://localhost:1000/signup',{
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
			    <div className="bg-washed-blue pb pb1-m pb1-l">
			      <nav className="dt w-100 mw8 center"> 
			        <div className="dtc v-mid pa3">
			            <h2 className="f3 Helvetica black-100">Floura Landing page</h2>
			        </div>
			        <div className="dtc v-mid tr pa3">
			          <input className="f6 link grow ba br2 ph3 pv2 mb2 dib white bg-dark-green ml2 pv2 ph3" type="submit" value="Sign Up" />  
			        </div>
			      </nav> 
			    </div>
			    <div className="backgroundt">
					<div className="tc-l tc-m ml4 ml4-m ph3 pb1">
				        <h1 className="f2 f1-l fw2 pt5 black-100 mb0 lh-title center helvetica">Build a landing page for your business or project and generate more leads!</h1>
			    	</div>
			    	<div className="pa4-l">
					  <form className="mw7 center pa4">
					      <div className="cf mt4-m">
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

export default Header
