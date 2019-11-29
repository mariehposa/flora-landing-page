import React from 'react';  
import clover from './img/clover.jpg';
import lotus from './img/lotus.jpg';
import lily from './img/lily.jpg';
import rose from './img/rose.jpg';

const Display = () =>{
	return(
		<div className="bg-washed-blue">	
		    <section className="cf w-100 pa2-ns">
		      <div className="tc mb5-ns mb5">
		        <h3 className="f3 georgia ttu">WHAT WE HAVE</h3>
			    <hr className="mw4 bb bw1 b--dark-green" />
			    <p className="f5 ml6-ns ml3 tc mr6-ns black-70"> We want to present you colourful and scented flowers from floura.
			      They are of conscipious structure associated with angiosperms and frequently scented.
			      They can be used to decorate whatever you like with it. </p>
			  </div>
			  <article className="fl w-100 w-50-m w-25-ns pa2-ns pa4">
			    <div className="aspect-ratio aspect-ratio--1x1">
			      <img src={rose} alt=""
			      className="grow db bg-center cover aspect-ratio--object" />
			    </div>
			    <a href="rose" className="ph2 ph0-ns pb3 link db tc">
			      <h3 className="f5 f4-ns mb0 black-90">Rose</h3>
			      <h3 className="f6 f5 fw4 mt2 black-60">Subtitle of piece</h3>
			    </a>
			  </article>
			  <article className="fl w-100 w-50-m w-25-ns pa2-ns pa4">
			    <div className="aspect-ratio aspect-ratio--1x1">
			      <img src={lotus} alt=""
			      className="grow db bg-center cover aspect-ratio--object" />
			    </div>
			    <a href="lotus" className="ph2 ph0-ns pb3 link db tc">
			      <h3 className="f5 f4-ns mb0 black-90">Lotus</h3>
			      <h3 className="f6 f5 fw4 mt2 black-60">Subtitle of piece</h3>
			    </a>
			  </article>
			  <article className="fl w-100 w-50-m w-25-ns pa2-ns pa4">
			    <div className="aspect-ratio aspect-ratio--1x1">
			      <img src={lily} alt=""
			      className="grow db bg-center cover aspect-ratio--object" />
			    </div>
			    <a href="lily" className="ph2 ph0-ns pb3 link db tc">
			      <h3 className="f5 f4-ns mb0 black-90">Lily</h3>
			      <h3 className="f6 f5 fw4 mt2 black-60">Subtitle of piece</h3>
			    </a>
			  </article>
			  <article className="fl w-100 w-50-m w-25-ns pa2-ns pa4">
			    <div className="aspect-ratio aspect-ratio--1x1">
			      <img src={clover} alt=""
			      className="grow db bg-center cover aspect-ratio--object" />
			    </div>
			    <a href="clover" className="ph2 ph0-ns pb3 link db tc">
			      <h3 className="f5 f4-ns mb0 black-90">Clover</h3>
			      <h3 className="f6 f5 fw4 mt2 black-60">Subtitle of piece</h3>
			    </a>
			  </article>
			</section>
		</div>
	);
}

export default Display