import React from "react";
import { useDeleteDestinationMutation } from "../api/destinationApi";
import { useUpdateDestinationMutation } from "../api/destinationApi";
import { useState } from "react";

function Destination({ destination }) {
  const [deleteDestination, result] = useDeleteDestinationMutation();
  const [isEditing, setIsEditing] = useState(false);
  const [updateDestination] = useUpdateDestinationMutation();
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const updateButton = () => {
    let cityToUpdate,
      countryToUpdate = "";

    console.log(city);
    if (city == "") {
      cityToUpdate = destination.city;
    } else {
      cityToUpdate = city;
    }
    console.log(country);
    if (country == "") {
      countryToUpdate = destination.country;
    } else {
      countryToUpdate = country;
    }

    updateDestination({
      id: destination.id,
      city: cityToUpdate,
      country: countryToUpdate,
      daysNeeded: destination.daysNeeded,
    });
    setCity("");
    setCountry("");
    setIsEditing(false);
  };

  return (
    <div
      className="row py-1"
      style={{
        borderBottom: "1px solid #333",
        borderTop: "1px solid #333",
      }}
    >
      <div className="col-4 row offset-2">
        <div className="col-6 p-1">
          {isEditing ? (
            <input
              placeholder="City..."
              defaultValue={destination.city}
              onChange={(e) => setCity(e.target.value)}
            />
          ) : (
            <span>{destination.city}</span>
          )}
        </div>

        <div className="col-6 p-1">
          {isEditing ? (
            <input
              placeholder="Country..."
              defaultValue={destination.country}
              onChange={(e) => setCountry(e.target.value)}
            />
          ) : (
            <span>{destination.country}</span>
          )}
        </div>
      </div>

      <div className="col-1 text-warning">{destination.daysNeeded} days</div>
      <div className="col-1">
        <button
          onClick={() => {
            {
              setIsEditing(!isEditing);
            }
          }}
          className="btn btn-warning form-control"
        >
          {isEditing ? "Cancel" : "Edit"}
        </button>
      </div>

      {isEditing ? (
        <div className="col-1">
          <button
            onClick={() => updateButton()}
            className="btn btn-primary form-control"
          >
            Update
          </button>
        </div>
      ) : (
        ""
      )}

      <div className="col-1">
        <button
          onClick={() => deleteDestination({ id: destination.id })}
          className="btn btn-danger form-control"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Destination;
