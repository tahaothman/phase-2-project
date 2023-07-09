import React, { useState } from "react";

function CheckIn() {
  const [id, setId] = useState("");
  const [driverName, setDriverName] = useState("");
  const [image, setImage] = useState("");
  const [address, setAddress] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [checkInTime, setCheckInTime] = useState("");
  const [emptySpot, setEmptySpot] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkInData = {
      id,
      driverName,
      image,
      address,
      phoneNumber,
      checkInTime,
      emptySpot,
    };

    fetch("https://phase-2-project-db-okyu.onrender.com/example", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(checkInData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Handle the response data as needed
      })
      .catch((error) => {
        console.log("Error:", error);
      });

    // Reset the form fields
    setId("");
    setDriverName("");
    setImage("");
    setAddress([]);
    setPhoneNumber(0);
    setCheckInTime("");
    setEmptySpot(false);
  };

  return (
    <div className="edit-form">
      <h2>Check-In Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="id">ID:</label>
          <select
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          >
            <option value="">Select ID</option>
            {Array.from({ length: 50 }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="driverName">Driver Name:</label>
          <input
            type="text"
            id="driverName"
            value={driverName}
            onChange={(e) => setDriverName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address.join(",")}
            onChange={(e) => setAddress(e.target.value.split(","))}
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="number"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="checkInTime">Check-In Time:</label>
          <input
            type="datetime-local"
            id="checkInTime"
            value={checkInTime}
            onChange={(e) => setCheckInTime(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="emptySpot">Empty Spot:</label>
          <input
            type="checkbox"
            id="emptySpot"
            checked={emptySpot}
            onChange={(e) => setEmptySpot(e.target.checked)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CheckIn;


// import React, { useState } from "react";

// function CheckIn() {
//   const [driverName, setDriverName] = useState("");
//   const [image, setImage] = useState("");
//   const [address, setAddress] = useState([]);
//   const [phoneNumber, setPhoneNumber] = useState(0);
//   const [checkInTime, setCheckInTime] = useState("");
//   const [emptySpot, setEmptySpot] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const checkInData = {
//       driverName,
//       image,
//       address,
//       phoneNumber,
//       checkInTime,
//       emptySpot,
//     };

//     fetch("https://phase-2-project-db-okyu.onrender.com/example", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(checkInData),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data); // Handle the response data as needed
//       })
//       .catch((error) => {
//         console.log("Error:", error);
//       });

//     // Reset the form fields
//     setDriverName("");
//     setImage("");
//     setAddress([]);
//     setPhoneNumber(0);
//     setCheckInTime("");
//     setEmptySpot(false);
//   };

//   return (
//     <div className="edit-form">
//       <h2>Check-In Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="driverName">Driver Name:</label>
//           <input
//             type="text"
//             id="driverName"
//             value={driverName}
//             onChange={(e) => setDriverName(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="image">Image URL:</label>
//           <input
//             type="text"
//             id="image"
//             value={image}
//             onChange={(e) => setImage(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="address">Address:</label>
//           <input
//             type="text"
//             id="address"
//             value={address.join(",")}
//             onChange={(e) => setAddress(e.target.value.split(","))}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="phoneNumber">Phone Number:</label>
//           <input
//             type="number"
//             id="phoneNumber"
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="checkInTime">Check-In Time:</label>
//           <input
//             type="datetime-local"
//             id="checkInTime"
//             value={checkInTime}
//             onChange={(e) => setCheckInTime(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="emptySpot">Empty Spot:</label>
//           <input
//             type="checkbox"
//             id="emptySpot"
//             checked={emptySpot}
//             onChange={(e) => setEmptySpot(e.target.checked)}
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default CheckIn;




