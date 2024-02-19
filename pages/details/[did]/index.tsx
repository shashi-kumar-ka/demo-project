import React from "react";
import { useRouter } from "next/router";
import { Hotel, getHotels } from "../../../src/api/api";
import HotelDetails from "../../../src/components/HotelDetails";

interface HotelDetailsPageProps {
  hotels: Hotel[];
}

const HotelDetailsPage = ({ hotels }: HotelDetailsPageProps) => {
  const router = useRouter();
  const { did } = router.query;

  const filteredHotels = hotels.find((hotel) => {
    return hotel.id === did;
  });

  return (
    <>
      <div className="container">
        <HotelDetails key={filteredHotels.id} hotel={filteredHotels} />
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const hotels = await getHotels();
  return {
    props: {
      hotels,
    },
  };
}
export default HotelDetailsPage;
