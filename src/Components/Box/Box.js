import React from 'react';  
import cup from './img/cup.jpg';
import white from './img/white.jpg';
import vase from './img/vase.jpg';

const Box = () =>{
	return(
		<div>
			<div className="tc mb5-ns mb5">
		        <h3 className="f3 georgia ttu">RECENT SUPPLIES</h3>
			    <hr className="mw4 bb bw1 b--dark-green" />
		    </div>	
		   <section className="mw">
			  <article className="pv ph3 ph0-l">
			    <div className="flex flex-column flex-row-ns">
			      <div className="w-100 w-50-ns w-50-m pr3-ns order-2 order-1-ns mb4 mb0-m">
			        <h2 className="f2 f3-m ml6-ns ml3 ml4-m mt2 mt2-m mt5-ns black-100 lh-title">Glass Planter</h2>
			        <p className="f5 f6-m f4-l ml6-ns ml3 ml4-m black-70 lh-copy">
			          A container in which flowers are grown, which can be affixed
			          inside the house or just below a window to improve the appearance of the house, room
			          office and so forth.
			        </p>
			      </div>
			      <div className="pl-ns order-1 order-2-ns mb2 mb0-ns w-100 w-50-m w-50-ns">
			        <img src={cup} className="db" alt="" />
			      </div>
			    </div>
			  </article>
			  <article className="pv ph3 ph0-l">
			    <div className="flex flex-column flex-row-ns">
			      <div className="w-100 w-50-ns w-50-m pr3-ns order-2 order-2-ns mb4 mb0-m">
			        <h2 className="f2 f3-m ml6-ns ml3 ml4-m mt2 mt2-m mt5-ns black-100 lh-title">Clean White</h2>
			        <p className="f5 f6-m f4-l ml6-ns ml3 ml4-m black-70 lh-copy">
			          This giant of a whale says it is ready to begin planning a new
			          swim later this afternoon. A powerful mammal that relies on fish and plankton instead
			          of hamburgers.
			        </p>
			      </div>
			      <div className="pl-ns order-1 order-1-ns mb2 mb0-ns w-100 w-50-m w-50-ns">
			        <img src={white} className="db" alt="" />
			      </div>
			    </div>
			  </article>
			  <article className="pv ph3 ph0-l">
			    <div className="flex flex-column flex-row-ns">
			      <div className="w-100 w-50-ns w-50-m pr3-ns order-2 order-1-ns">
			        <h2 className="f2 f3-m ml6-ns ml3 ml4-m mt2 mt2-m mt5-ns black-100 lh-title">Purple Flower</h2>
			        <p className="f5 f6-m f4-l ml6-ns ml3 ml4-m black-70 lh-copy">
			          A semi-aquatic herbaceous plant, having long spikes of purple flowers,
			          native to Eurasia, considered invasive in North America and New Zealand. Purple
			          loosestrife.
			        </p>
			      </div>
			      <div className="pl-ns order-1 order-2-ns mb2 w-100 w-50-m w-50-ns">
			        <img src={vase} className="db" alt="" />
			      </div>
			    </div>
			  </article>
		    </section> 
		</div>
	);
}

export default Box