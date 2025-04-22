import React, { use, useEffect, useState } from "react";
import Profile from "./Profile";
import Interest from "./Interest";
import Settings from "./Settings";

const TabForm = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
    email: "",
    interests: [],
    theme: "dark",
  });

  const [errors, setErrors] = useState({});

  const [activeTab, setActiveTab] = useState(0);

  // Configure Driven UI - Which makes the form sacalable
  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};
        if (!data.name || data.name.length < 2) {
          err.name = "Name is Not Valid";
        }
        if (!data.age || data.age < 18) {
          err.age = "Age is Not Valid";
        }
        if (!data.email || data.email.length < 2) {
          err.email = "Email is Not Valid";
        }

        setErrors(err);
        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      name: "Interests",
      component: Interest,
      validate: () => {
        const err = {};
        if (data.interests.length < 1) {
          err.interests = "Select atleat One Interest";
        }
        setErrors(err);
        return err.interests ? false : true;
      },
    },
    {
      name: "Settings",
      component: Settings,
      validate: () => {
        return true
      }
    },
  ];

  const ActiveTabComponent = tabs[activeTab].component;

  const handleNextClick = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev + 1);
    }
  };

  const handlePreviousClick = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev - 1);
    }
  };

  const handleSubmitClick = () => {
    alert('Response Saved, Thanks!!');
    // console.log(data)
  };

  return (
    <div>
      <div className="heading-container my-2">
        {tabs.map((t, index) => (
          <button
            key={index}
            className = {`${activeTab == index  ? 'active-btn' : 'heading-btn' }`}
            onClick={() => tabs[activeTab].validate() && setActiveTab(index)}
          >
            {t.name}
          </button>
        ))}
      </div>
      <div className="tab-body card w-50">
        <ActiveTabComponent data={data} setData={setData} errors={errors} />
      </div>
      <div className="d-flex gap-1 mt-2 mb-2">
        {activeTab > 0 && (
          <button onClick={handlePreviousClick} className="btn btn-primary">Previous</button>
        )}
        {activeTab < tabs.length - 1 && (
          <button onClick={handleNextClick} className="btn btn-primary">Next</button>
        )}
        {activeTab === tabs.length - 1 && (
          <button onClick={handleSubmitClick} className="btn btn-primary">Submit</button>
        )}
      </div>
    </div>
  );
};

export default TabForm;
