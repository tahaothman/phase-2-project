import React, { useEffect, useState } from "react";
import './Yard.css';

function Yard() {
  const [data, setData] = useState([]);
  const [editItemId, setEditItemId] = useState(null);

  useEffect(() => {
    fetch("https://phase-2-project-db-okyu.onrender.com/example")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const handleEdit = (itemId) => {
    setEditItemId(itemId);
  };

 const handleSave = (item) => {
  fetch(`https://phase-2-project-db-okyu.onrender.com/example/${item.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Updated item:", data);
      setData((prevData) =>
        prevData.map((dataItem) =>
          dataItem.id === item.id ? data : dataItem
        )
      );
      setEditItemId(null);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

  const handleCancel = () => {
    setEditItemId(null);
  };

  const handleAttributeChange = (e, item) => {
    const { name, value } = e.target;
    const updatedItem = { ...item, [name]: value };
    setData((prevData) =>
      prevData.map((dataItem) =>
        dataItem.id === updatedItem.id ? updatedItem : dataItem
      )
    );
  };

  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>Spot Number</th>
            <th>Driver Name</th>
            <th className="expand">Driver image</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Check In time</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <React.Fragment key={item.id}>
              <tr>
                <td>{item.id}</td>
                <td>{item.driverName}</td>
                <td>
                  <img src={item.image}  height={"150px"} width={"150px"} />
                </td>

                <td>{item.address}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.checkInTime}</td>
                <td>
                  <button onClick={() => handleEdit(item.id)}>Edit</button>
                </td>
              </tr>
              {editItemId === item.id && (
                <tr>
                  <td colSpan="6">
                    <div className="edit-form">
                      <h2>Edit Information</h2>
                      <form className="eidtForm">
                        <div>
                          <label htmlFor={`driverName-${item.id}`}>Driver Name:</label>
                          <input
                            type="text"
                            id={`driverName-${item.id}`}
                            name="driverName"
                            value={item.driverName || ""}
                            onChange={(e) => handleAttributeChange(e, item)}
                          />
                        </div>
                        <div>
                          <label htmlFor={`image-${item.id}`}>Image URL:</label>
                          <input
                            type="text"
                            id={`image-${item.id}`}
                            name="image"
                            value={item.image || ""}
                            onChange={(e) => handleAttributeChange(e, item)}
                          />
                        </div>
                        <div>
                          <label htmlFor={`address-${item.id}`}>Address:</label>
                          <input
                            type="text"
                            id={`address-${item.id}`}
                            name="address"
                            value={item.address || ""}
                            onChange={(e) => handleAttributeChange(e, item)}
                          />
                        </div>
                        <div>
                          <label htmlFor={`phoneNumber-${item.id}`}>Phone Number:</label>
                          <input
                            type="number"
                            id={`phoneNumber-${item.id}`}
                            name="phoneNumber"
                            value={item.phoneNumber || ""}
                            onChange={(e) => handleAttributeChange(e, item)}
                          />
                        </div>
                        <div>
                          <label htmlFor={`checkInTime-${item.id}`}>Check In time:</label>
                          <input
                            type="datetime-local"
                            id={`checkInTime-${item.id}`}
                            name="checkInTime"
                            value={item.checkInTime ? new Date(item.checkInTime).toISOString().slice(0, 16) : ""}
                            onChange={(e) => handleAttributeChange(e, item)}
                          />
                        </div>
                      
                        <div>
                          <label htmlFor={`emptySpot-${item.id}`}>Empty Spot:</label>
                          <input
                            type="checkbox"
                            id={`emptySpot-${item.id}`}
                            name="emptySpot"
                            checked={item.emptySpot || false}
                            onChange={(e) => handleAttributeChange(e, item)}
                          />
                        </div>
                        <div className="edit-form-buttons">
                          <button type="button" onClick={() => handleSave(item)}>Save</button>
                          <button type="button" onClick={handleCancel}>Cancel</button>
                        </div>
                      </form>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Yard;




