// // import { useState } from 'react';
// import { Hotel } from '../api/api';
// import Router from 'next/router';
// import Link from 'next/link';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect, useState } from 'react';
// import { RootState } from '../components/store';
// import { addFavorite, removeFavorite } from '../components/store/actions';

// interface HotelListItemProps {
//     hotel: Hotel;
//     isFavorite: boolean;
//     onFavoriteClick: () => void;
// }

// const HotelListItem = ({ hotel, isFavorite, onFavoriteClick}: HotelListItemProps) => {
//     const [isHovered, setIsHovered] = useState(false);

//     const typeOfBreakfast = (hotel.freeBreakfast) ? 'Free' : 'Paid';

//     // console.log(hotel.freeBreakfast);

//     const [favoriteHotels, setFavoriteHotels] = useState<Hotel[]>([]);

//     useEffect(() => {
//         setFavoriteHotels(hotels.filter((hotel) => favorites[hotel.id]));
//     }, [favorites, hotels]);

//     const toggleFavorite = (id: string) => {
//         if (favorites[id]) {
//         dispatch(removeFavorite(id));
//         } else {
//         dispatch(addFavorite(id));
//         }
//     };


//     return (
//         <>
//         <div
//         className={`hotel-list-item ${isFavorite ? 'favorite' : ''} ${isHovered ? 'hover' : ''}`}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         onClick={() => Router.push(`/details/${hotel.id}`)}
//         >
//                 <div className="image-container">
//                     <img src={hotel.image} alt={hotel.name} />
//                 </div>
//                 <div className="hotel-info">
//                     <h3>{hotel.name}</h3>
//                     <p>₹{hotel.price}</p>
//                     <p className="sub-heading">Breakfast type: {typeOfBreakfast}</p>
//                     <p>{hotel.freeBreakfast}</p>
//                 </div>
            
//         </div>
//         {/* <button className="fav-button">
//             {isFavorite ? 'Favorited' : 'Favorite'}
//         </button> */}
//         <button onClick={() => toggleFavorite(hotel.id)}>
//             {favorites[hotel.id] ? 'Remove from favorites' : 'Add to favorites'}
//         </button>
//         </>
//     );
// };

// export default HotelListItem;

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