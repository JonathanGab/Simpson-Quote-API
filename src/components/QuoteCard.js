import React from 'react';
import './QuoteCard.css';

const QuoteCard = ({ quote, character, image }) => (
    <figure className="simpson">
        <img src={image} alt={character} />
        <figcaption>
            <blockquote>{quote}</blockquote>
            <cite>{character}</cite>
        </figcaption>
    </figure>
);

export default QuoteCard;