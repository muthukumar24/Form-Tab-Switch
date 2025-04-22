import React from "react";

const Interest = ({ data, setData, errors }) => {
  const { interests } = data;

  const handleDataChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      interests: e.target.checked
        ? [...prevState.interests, e.target.name]
        : prevState.interests.filter((i) => i !== e.target.name),
    }));
  };

  return (
    <div className="px-2">
      <div>
        <label>Select Interest</label>
      </div>
      <div>
        <label className="d-flex gap-1">
          <input
            type="checkbox"
            name="coding"
            checked={interests.includes("coding")}
            onChange={handleDataChange}
          />
          Coding
        </label>
      </div>
      <div>
        <label className="d-flex gap-1">
          <input
            type="checkbox"
            name="music"
            checked={interests.includes("music")}
            onChange={handleDataChange}
          />
          Music
        </label>
      </div>
      <div>
        <label className="d-flex gap-1">
          <input
            type="checkbox"
            name="cooking"
            checked={interests.includes("cooking")}
            onChange={handleDataChange}
          />
          Cooking
        </label>
      </div>
      {errors.interests && <span className="error">{errors.interests}</span>}
    </div>
  );
};

export default Interest;
