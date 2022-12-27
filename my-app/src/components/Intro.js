import React from 'react'
import './Intro.css';
const intro = () => {
  return (
    <div className='i'>
      <div className="i-left">
        <div className='i-wrapper'>
          <h1 className='i-intro'>Hello Genntelmen , My Self </h1>
          <h2 className='i-name'>Abdullah sidd</h2>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-items">Web developer</div>
              <div className="i-title-items">UI/UX Designer</div>
              <div className="i-title-items">Writter</div>
              <div className="i-title-items">Blogger</div>
              <div className="i-title-items">Content Creator</div>
            </div>
          </div>
          <p  className='i-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, placeat. Perferendis nesciunt dolores rem, dolorem sint placeat voluptatibus quia neque, sed veritatis fugit? Vitae ducimus at voluptatum facilis voluptatem reiciendis.</p>
        </div>
      </div>
      <div className="i-right">
     <img classNme="circular--square"alt='' src="https://images.unsplash.com/photo-1644982647869-e1337f992828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw5MHx8fGVufDB8fHx8&auto=format&fit=crop&w=300" />
      </div>
    </div>
    
  )
}

export default intro
