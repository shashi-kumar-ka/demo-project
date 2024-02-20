
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { RootState } from '../../src/components/store';
import { addFavorite, removeFavorite } from '../../src/components/store/actions';
import HotelListItem from '../../src/components/HotelListItem';
import { Hotel } from '../../src/api/api';

interface HotelListItemProps {
  hotel: Hotel;
  isFavorite: boolean;
  onFavoriteClick: () => void;
}

const Home = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites);
  
  const [hotels, setHotels] = useState<Hotel[]>([]);
  
  useEffect(() => {
    fetch('https://mocki.io/v1/4775a500-cf31-4bee-8a65-0c849b6e4d0c')
    .then((response) => response.json())
    .then((data) => {
      setHotels(data);
    });
  }, []);
  
  const [favoriteHotels, setFavoriteHotels] = useState<Hotel[]>([]);
  
  useEffect(() => {
    setFavoriteHotels(hotels.filter((hotel) => favorites[hotel.id]));
  }, [favorites, hotels]);
  
  const toggleFavorite = (id: string) => {
    if (favorites[id]) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite(id));
    }
  };
  
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredHotels = hotels.filter((hotel) =>
  hotel.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  
  const [showFavorites, setShowFavorites] = useState(false);
  
  const handleShowFavoritesClick = () => {
    setShowFavorites(true);
  };
  
  const handleShowAllClick = () => {
    setShowFavorites(false);
  };
  
  return (
    <div className='container'>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar"
        />
      <button className="favorite-btn home-btn" onClick={handleShowFavoritesClick}>
        Favorites
      </button>
      {showFavorites && (
        <button className="all-btn home-btn" onClick={handleShowAllClick}>
          ╳
        </button>
      )}
      <div className="hotel-list">
        {showFavorites ? (
          favoriteHotels.map((hotel) => (
            <HotelListItem
            key={hotel.id}
            hotel={hotel}
            isFavorite={favoriteHotels.some((favHotel) => favHotel.id === hotel.id)}
            onFavoriteClick={() => toggleFavorite(hotel.id)}
            />
            ))
            ) : (
              filteredHotels.map((hotel) => (
                <HotelListItem
                key={hotel.id}
                hotel={hotel}
                isFavorite={favoriteHotels.some((favHotel) => favHotel.id === hotel.id)}
                onFavoriteClick={() => toggleFavorite(hotel.id)}
                />
                ))
                )}
      </div>
    </div>
  );
};

export default Home;

/**
 * State -> Store hotels data. Global level Context API / redux toolkit / Local state -> props
 * Fetch all all hotels,
 * Hotels page -> All hotels data
 * Details -> State -> id -> hotels
 * Favoriate -> State -> hotel using id -> favoriate -> true -> false -> true update the state
 */