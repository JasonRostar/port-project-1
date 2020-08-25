import React from 'react'

export default function Followers(props) {
    return (
        <div >
            {props.followers.map(person => {
                return (
                    <div className="followers" key={person.id}>
                        <img  className="images" src={person.avatar_url} alt={person.login}/>
                        <br/>
                        <h5>{person.login}</h5>
       
           
                    </div>
                )
            })}
        </div>
    )
}
