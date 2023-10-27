import React from "react";
import { Lists } from "./Lists";

export function AllLists({ dresses, setDresses }) {
  return (
    <div>
      <img
        src="https://media.istockphoto.com/id/653003428/photo/fashionable-clothes-in-a-boutique-store-in-london.jpg?s=612x612&w=0&k=20&c=UafU4a4xSbepJow4kvNu0q-LD4hFUoli7q3fvwkp79s="
        style={{ height: "350px", width: "100%" }}
        alt="download failed"
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {dresses.map((dress, index) => (
          <Lists dress={dress} key={index} id={index} />
        ))}
      </div>
    </div>
  );
}
