import React from 'react'

export default function User(props) {
    return (
        <div className="userCard">
           <img className="images" src={props.userData.avatar_url} alt={props.userData.name}/>
           <div className="info">
           <h5>{props.userData.name}</h5>
        
           <h5>Location - {props.userData.location}</h5>
        
           <h5>Number of Repositories - {props.userData.public_repos} </h5>
           </div>
        </div>
    )
}
