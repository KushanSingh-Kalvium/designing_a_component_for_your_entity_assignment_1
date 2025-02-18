import React from "react";
import Usercard from "./components/Usercard";

function App() {
  const users = [
    {
      profilePhoto: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "+1 234 567 890",
      address: "123 Main St, Springfield, USA",
    },
    {
      profilePhoto: "https://randomuser.me/api/portraits/women/2.jpg",
      name: "Jane Smith",
      email: "janesmith@example.com",
      phone: "+1 987 654 321",
      address: "456 Oak St, Metropolis, USA",
    },
    {
      profilePhoto: "https://randomuser.me/api/portraits/men/3.jpg",
      name: "Michael Johnson",
      email: "michaelj@example.com",
      phone: "+1 456 789 123",
      address: "789 Elm St, Gotham, USA",
    },
    {
      profilePhoto: "https://randomuser.me/api/portraits/women/4.jpg",
      name: "Emily Davis",
      email: "emilyd@example.com",
      phone: "+1 321 654 987",
      address: "159 Pine St, Star City, USA",
    },
    {
      profilePhoto: "https://randomuser.me/api/portraits/men/5.jpg",
      name: "David Wilson",
      email: "davidw@example.com",
      phone: "+1 852 963 741",
      address: "753 Maple St, Smallville, USA",
    },
    {
      profilePhoto: "https://randomuser.me/api/portraits/women/6.jpg",
      name: "Sarah Miller",
      email: "sarahm@example.com",
      phone: "+1 147 258 369",
      address: "321 Cedar St, Central City, USA",
    },
    {
      profilePhoto: "https://randomuser.me/api/portraits/men/7.jpg",
      name: "Chris Brown",
      email: "chrisb@example.com",
      phone: "+1 369 852 147",
      address: "951 Birch St, Coast City, USA",
    },
    {
      profilePhoto: "https://randomuser.me/api/portraits/women/8.jpg",
      name: "Olivia Wilson",
      email: "oliviaw@example.com",
      phone: "+1 753 159 456",
      address: "852 Willow St, Blüdhaven, USA",
    },
    {
      profilePhoto: "https://randomuser.me/api/portraits/men/9.jpg",
      name: "Daniel Anderson",
      email: "daniela@example.com",
      phone: "+1 147 369 258",
      address: "654 Aspen St, Hub City, USA",
    },
    {
      profilePhoto: "https://randomuser.me/api/portraits/women/10.jpg",
      name: "Sophia Martinez",
      email: "sophiam@example.com",
      phone: "+1 258 147 369",
      address: "357 Palm St, National City, USA",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#121212",
        color: "#f5f5f5",
        display: "flex",
        flexWrap: "wrap", // Allows wrapping of cards to next line
        gap: "16px",
        padding: "16px",
        justifyContent: "center",
      }}
    >
      {users.map((user, index) => (
        <div
          key={index}
          style={{
            backgroundColor: "#333", // Dark background for each user card
            color: "#f5f5f5", // Light text
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.7)", // Dark shadow for depth
            textAlign: "center",
            border: "2px solid #444", // Dark border
            width: "280px", // Fixed width for each card
          }}
        >
          <img
            src={user.profilePhoto}
            alt="Profile"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              marginBottom: "10px",
              border: "4px solid #555",
            }}
          />
          <h2 style={{ fontSize: "1.6rem", fontWeight: "600", marginBottom: "10px" }}>
            {user.name}
          </h2>
          <p style={{ color: "#bbb", fontSize: "1rem", margin: "5px 0", lineHeight: "1.4" }}>
            <strong>Email:</strong> {user.email}
          </p>
          <p style={{ color: "#bbb", fontSize: "1rem", margin: "5px 0", lineHeight: "1.4" }}>
            <strong>Phone:</strong> {user.phone}
          </p>
          <p style={{ color: "#bbb", fontSize: "1rem", margin: "5px 0", lineHeight: "1.4" }}>
            <strong>Address:</strong> {user.address}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
