import React from 'react'

export default function Card(props) {
  return (
    <div className='container my-3'>
        <div className="myCard container card my-3">
            {/* <img src="https://content.wepik.com/statics/7048075/preview-page0.jpg" className="card-img-top" alt="..." /> */}
            <div className="card-body">
                <h4 className="card-title text-primary" style={{"marginBottom": "15px"}}>{props.id} - {props.title}</h4>
                <p className="card-text">{props.body}</p>
                <p className="card-text"><small className="text-primary">By User {props.userId}</small></p>
            </div>
        </div>
    </div>
  )
}