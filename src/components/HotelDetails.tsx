import React, { useState } from "react";
import { useRouter } from "next/router";
import { Hotel } from "../api/api";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../components/store";
import { addFavorite, removeFavorite } from "../components/store/actions";

interface HotelDetailsProps {
  hotel: Hotel;
}

const HotelDetails = ({ hotel }: HotelDetailsProps) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites);

  const isFavorite = favorites[hotel.id];

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(hotel.id));
    } else {
      dispatch(addFavorite(hotel.id));
    }
  };

  return (
    <div className="hotel-details-container">
      <div className="image-container1">
        <div className="back-button" onClick={() => router.back()}>
          ←
        </div>
        <div className="favorite-button" onClick={toggleFavorite}>
          {isFavorite ? '♥' : '♡'}
        </div>
        <img className="hotel-image" src={hotel.image} alt={hotel.name} />
      </div>
      <div className="hotel-info">
        <p className="loc-info">Hotel in {hotel.location}</p>
        <div className="desc">
          <p dangerouslySetInnerHTML={{ __html: hotel.description }}></p>
        </div>
      </div>
      <div className="hotel-price">
        <span className="price">
          ₹{hotel.price} <span className="include">/ night (all inc.)</span>
        </span>
      </div>
    </div>
  );
};

export default HotelDetails;