import React from 'react';
import margaret from './img/margaret.jpg';
import fred from './img/fred.jpg';
import sarah from './img/sarah.jpg';

const Testimony = () =>{
  return(
    <div className="bg-washed-blue pt3 pt4-ns" style={{marginTop:-8}}> 
      <div className="tc mb5-ns mb3">
        <h3 className="f3 georgia ttu">What people are saying</h3>
        <hr className="mw4 bb bw1 b--dark-green" />
      </div>  
      <article>
        <div className="cf ml5 ml0-m tc">
          <div className="fl w-75 w-30-m w-25-l pa4 ml5-ns ml1-m mr4-ns mr1-m">
            <img src={margaret} alt="" className="w-100 br-100 w3 dib black-10 shadow-5"/>
            <dl className="mt2 f6 lh-copy">
              <dd className="ml0 black w-100">Margaret E.</dd>
              <dd className="ml0 gray w-100 tc">"This is lovely! Thanks so much floura!"</dd>
            </dl>
          </div>
          <div className="fl w-75 w-30-m w-25-l pa4 ml4-ns ml1-m mr4-ns mr1-m">
            <img src={fred} alt="" className="w-100 br-100 w3 dib black-10 shadow-5"/>
            <dl className="mt2 f6 lh-copy">
              <dd className="ml0 black w-100 ttu">Fred S.</dd>
              <dd className="ml0 gray w-100">"Floura flowers smells nice. I've been ordering it to decorate lots of super nice events."</dd>
            </dl>
          </div>
          <div className="fl w-75 w-30-m w-25-l pa4 ml4-ns ml1-m mr4-ns mr1-m">
            <img src={sarah} alt="" className="w-100 br-100 w3 dib black-10 shadow-5"/>
            <dl className="mt2 f6 lh-copy">
              <dd className="ml0 black w-100">Sarah W.</dd>
              <dd className="ml0 gray w-100">"Thanks so much floura, for making these flowers available to us!"</dd>
            </dl>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Testimony