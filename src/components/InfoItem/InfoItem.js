import React from 'react';


const InfoItem = ({ description, alt_description, author, date, likes, views, downloads, location }) => {
    return (
        <>
            <h3>{description} </h3>
            {description ? null : <h3>{alt_description}</h3>}
            <p>Made by {author}, {date.slice(0, 10)}</p>
            {location ? <p>{location}</p> : null}
            <p>{likes} likes </p>
            <p>{views} views</p>
            <p>{downloads} downloads</p>
        </>
    )
}

export default InfoItem;