

import React, { useState } from "react";

function CheckOut() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();

    fetch(`https://phase-2-project-db-okyu.onrender.com/example?q=${searchQuery}`)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data);
      })
      .catch((error) => {
        console.log("Error:", error);
        setSearchResults([]);
      });
  };

  const handleCheckOut = (id) => {
    const updatedObject = {
      driverName: "",
      image: "",
      address: [],
      phoneNumber: "",
      checkInTime: "",
      emptySpot: false,
    };

    fetch(`https://phase-2-project-db-okyu.onrender.com/example/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedObject),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Object attributes updated successfully");
          // Remove the checked-out item from search results
          setSearchResults((prevResults) => prevResults.filter((result) => result.id !== id));
        } else {
          console.log("Failed to update object attributes");
        }
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <div>
      <h2>Check-Out Form</h2>
      <form onSubmit={handleSearch}>
        <div>
          <label htmlFor="searchQuery">Search:</label>
          <input
            type="text"
            id="searchQuery"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            required
          />
        </div>
        <button type="submit">Search</button>
      </form>

      {searchResults.length > 0 && (
        <div>
          <h3>Search Results:</h3>
          <table>
            <thead>
              <tr>
                <th>Spot Number</th>
                <th>Driver Name</th>
                <th>Image URL</th>
                <th>Address</th>
                <th>Phone Number</th>
                <th>Check-In Time</th>
                <th>Empty Spot</th>
                <th>Check Out</th>
              </tr>
            </thead>
            <tbody>
              {searchResults.map((result) => (
                <tr key={result.id}>
                  <td>{result.id}</td>
                  <td>{result.driverName}</td>
                  <td>{result.image}</td>
                  <td>{result.address.join(", ")}</td>
                  <td>{result.phoneNumber}</td>
                  <td>{result.checkInTime}</td>
                  <td>{result.emptySpot ? "Yes" : "No"}</td>
                  <td>
                    <button onClick={() => handleCheckOut(result.id)}>Check Out</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default CheckOut;





// function CheckOut() {
//   const [searchId, setSearchId] = useState("");
//   const [searchResult, setSearchResult] = useState(null);
//   const [confirmation, setConfirmation] = useState(false);

//   const handleSearch = (e) => {
//     e.preventDefault();

//     fetch(`https://phase-2-project-db-okyu.onrender.com/example/${searchId}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setSearchResult(data);
//         setConfirmation(false);
//       })
//       .catch((error) => {
//         console.log("Error:", error);
//         setSearchResult(null);
//       });
//   };

//   const handleCheckOut = (e) => {
//     e.preventDefault();

//     fetch(`https://phase-2-project-db-okyu.onrender.com/example/${searchResult.id}`, {
//       method: "DELETE",
//     })
//       .then((response) => {
//         if (response.ok) {
//           console.log("Object checked out and deleted successfully");
//         } else {
//           console.log("Failed to check out object");
//         }
//       })
//       .catch((error) => {
//         console.log("Error:", error);
//       });

//     // Reset the form fields and search result
//     setSearchId("");
//     setSearchResult(null);
//   };

//   return (
//     <div>
//       <h2>Check-Out Form</h2>
//       <form onSubmit={handleSearch}>
//         <div>
//           <label htmlFor="searchId">Object ID:</label>
//           <input
//             type="text"
//             id="searchId"
//             value={searchId}
//             onChange={(e) => setSearchId(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Search</button>
//       </form>

//       {searchResult && (
//         <div>
//           <h3>Search Result:</h3>
//           <p>Object ID: {searchResult.id}</p>
//           <p>Attribute String: {searchResult.exampleAttributeString}</p>
//           <p>Image URL: {searchResult.exampleImgString}</p>
//           <p>Attributes Array: {searchResult.exampleAttributesArray.join(", ")}</p>
//           <p>Attribute Number: {searchResult.exampleAttributeNumber}</p>
//           <p>Attribute Object: {JSON.stringify(searchResult.exampleAttributeObj)}</p>
//           <p>Attribute Boolean: {searchResult.exampleAttributeBoolean ? "Yes" : "No"}</p>

//           <button onClick={() => setConfirmation(true)}>Check Out</button>

//           {confirmation && (
//             <div>
//               <p>Are you sure you want to check out this object?</p>
//               <button onClick={handleCheckOut}>Confirm Check Out</button>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default CheckOut;