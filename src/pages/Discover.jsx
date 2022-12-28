import React from "react";
import Row from "../components/Row";

const Discover = () => {
  const rowData = [
    { term: "genre-global-chart-1", name: "Pop" },
    { term: "genre-global-chart-2", name: "Hip-Hop/Rap" },
    { term: "genre-global-chart-3", name: "Dance" },
    { term: "genre-global-chart-4", name: "Electronic" },
    { term: "genre-global-chart-5", name: "R&B/Soul" },
  ];

  return (
    <>
      <div className="  pb-20 pt-6 sm:ml-[200px] w-screen h-screen overflow-auto flex flex-col ">
        <h1 className="font-bold text-3xl text-white mt-4 ml-2 mb-4">
          Discover
        </h1>

        {rowData.map((genre, i) => (
          <Row key={i} i={i} genre={genre.term} name={genre.name} />
        ))}
      </div>
    </>
  );
};

export default Discover;
