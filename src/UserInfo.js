import React from 'react'

function UserInfo({user}){

    return(
        <div className="User-Info">
            
                <div class="user-id">{user.id}/25</div>
                <div class="user-name">{user.name.first} {user.name.last}</div>
            <div className="user-status">
                <p><strong>From:</strong> {user.city}, {user.country}</p>
                <p><strong>Job Title:</strong> {user.title}</p>
                <p><strong>Employer:</strong> {user.employer}</p>
            </div>
            <div className="favorite-movies">
                <p><strong>Favorite movies:</strong>
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