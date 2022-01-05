import React from 'react'

interface Props {
    link: string | null
    place: string
}

const Place = ({ link, place }: Props) => {
    return !link ? (
        <span className="place"> {place}</span>
    ) : (
        <a href={link} className="place" target="_blank" rel="noreferrer">
            {place}
        </a>
    )
}

export default Place
