import React from "react";

const Profile = ({ data, setData, errors }) => {
  const { name, age, email } = data;

  const handleDataChange = (e, item) => {
    // const { value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [item]: e.target.value,
    }));
  };

  return (
    <div className="px-2">
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          className="form-control"
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => handleDataChange(e, "name")}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>

      <div className="mb-3">
        <label className="form-label">Age</label>
        <input
          className="form-control"
          type="text"
          placeholder="Your Age"
          value={age}
          onChange={(e) => handleDataChange(e, "age")}
        />
        {errors.age && <span className="error">{errors.age}</span>}
      </div>
      <div>
        <label className="form-label">Email</label>
        <input
          className="form-control mb-2"
          type="text"
          placeholder="Your Email"
          value={email}
          onChange={(e) => handleDataChange(e, "email")}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
    </div>
  );
};

export default Profile;
