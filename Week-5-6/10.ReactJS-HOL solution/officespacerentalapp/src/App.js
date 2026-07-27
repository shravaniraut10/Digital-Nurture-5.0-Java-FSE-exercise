import "./App.css";

function App() {
  const officeData = {
    Name: "DBS",
    Rent: 50000,
    Address: "Chennai",
  };

  const officeList = [
    { Name: "DBS", Rent: 50000, Address: "Chennai" },
    { Name: "Regus", Rent: 75000, Address: "Bangalore" },
    { Name: "WeWork", Rent: 65000, Address: "Mumbai" },
  ];

  return (
    <div style={{ marginLeft: "50px" }}>
      <h1>Office Space, at Affordable Range</h1>

      <img
        src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600"
        alt="Office Space"
        width="25%"
      />

      <h2>Name: {officeData.Name}</h2>

      <h3 style={{ color: officeData.Rent <= 60000 ? "red" : "green" }}>
        Rent: Rs. {officeData.Rent}
      </h3>

      <h3>Address: {officeData.Address}</h3>

      <hr />

      {officeList.map((item, index) => (
        <div key={index}>
          <h2>{item.Name}</h2>

          <h3 style={{ color: item.Rent <= 60000 ? "red" : "green" }}>
            Rent: Rs. {item.Rent}
          </h3>

          <h3>Address: {item.Address}</h3>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;