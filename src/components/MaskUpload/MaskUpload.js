import React from 'react';
import './MaskUpload.css';
import logo from './../Hero/logo.png';


function MaskUpload ({onRouteChange}) {

	const Clarifai = require('clarifai');
	const app = new Clarifai.App({apiKey: 'e1f69a61e92944bf82866dffef30a8e7'});
	let imgUrl;
	
	const onInputChange =(event) =>{
		imgUrl = event.target.value;
	}

	const onButtonClick = () => {
		app.models.predict({id:'MaskRecognition', version:'3bac2d45232e486b92c7815083acbe80'}, `${imgUrl}`).then(
		  function(response) {
		  	let result = response.outputs[0].data.concepts[0].value;
		  	if (result > .95) {
		  		document.write('Thanks, great mask!')
		  	}
		  	else{
		  		document.write('Sorry, there was an error finding your mask. Please try another picture')
		  	}
		  },
		  function(err) {
		    document.write('Error receiving your image');
		  }
		);
	}
	
		return (
			<div className="mask-upload">
				<img src={logo} alt='logo' className='up-logo'/>
				<div className="exit"><i className="far fa-times-circle"></i></div>
				<div className="upload">
						
					<div className="submit-text">
						Thanks for participating!
					</div> 
					<div className="submit-text-sub">
						Upload an image of you wearing your DIY face mask to have your points added to your balance. 
					 	Thanks for actively helping in your community! 
					 </div>
					 <div className="upload-box" >
					 	 	<p className="up-text">upload</p>
						 	<input className="img-input" type="text" placeholder="Enter image here" onChange={onInputChange} />
						 	<button onClick={onButtonClick}>Submit</button>
					 </div>
				</div>
			</div>
		);
}

export default MaskUpload;
