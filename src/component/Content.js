import React from 'react';
import './Content.css'

function Content({animals}) {
  return (
    <React.Fragment>
      {
        animals.map((value, index) => (
          <div class="childContent">
            <h1>{value.name}</h1>
            <img src={value.image} height={300} width={300}  />
          </div>
        ))
      }
    </React.Fragment>
  )
}

export default Content;