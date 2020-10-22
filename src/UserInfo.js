import React from 'react'

function UserInfo({user}){

    return(
        <div className="User-Info">
            <div className = "user-name">
                <p>{user.id}/25</p>
                <h1>{user.name.first} {user.name.last}</h1>
            </div>
            <div className="user-status">
                <p>From: {user.city}, {user.country}</p>
                <p>Job Title: {user.title}</p>
                <p>Employer: {user.employer}</p>
            </div>
            <div className="favorite movies">
                <p>Favorite movies:
                    <ol> 
                        <li>{user.favoriteMovies[0]}</li>
                        <li>{user.favoriteMovies[1]}</li>
                        <li>{user.favoriteMovies[2]}</li>
                    </ol>
                </p>
            </div>
        </div>
    )
}

export default UserInfo