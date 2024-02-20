import { useState } from 'react';
import { Hotel } from '../api/api';
import Router from 'next/router';
import Link from 'next/link';

interface HotelListItemProps {
  hotel: Hotel;
  isFavorite: boolean;
  onFavoriteClick: () => void;
}

const HotelListItem = ({ hotel, isFavorite, onFavoriteClick }: HotelListItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const typeOfBreakfast = hotel.freeBreakfast ? 'Free Breakfast' : 'Paid Breakfast';

  return (
    <div
      className={`hotel-list-item ${isFavorite ? 'favorite' : ''} ${isHovered ? 'hover' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}   
    >
      <div className="image-container" onClick={() => Router.push(`/details/${hotel.id}`)}>
        <img src={hotel.image} alt={hotel.name} />
      </div>
      <div className="hotel-info">
        <h3>{hotel.name}</h3>
        <p>₹{hotel.price}</p>
        <p className="sub-heading">{typeOfBreakfast}</p>
      </div>
      <button className="fav-button" onClick={onFavoriteClick}>
        {isFavorite ? 'Favorited' : 'Favorite'}
      </button>
    </div>
  );
};

export default HotelListItem;