"use client"
import React, { useState } from "react";

const TabView = () => {
  const [activeTab, setActiveTab] = useState("category1");

  const handleTabChange = (tab:any) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "category1":
        return (
          <div>
            <h2>Category 1 Content</h2>
            <p>This is the content for Category 1.</p>
          </div>
        );
      case "category2":
        return (
          <div>
            <h2>Category 2 Content</h2>
            <p>This is the content for Category 2.</p>
          </div>
        );
      case "category3":
        return (
          <div>
            <h2>Category 3 Content</h2>
            <p>This is the content for Category 3.</p>
          </div>
        );
      case "category4":
        return (
          <div>
            <h2>Category 4 Content</h2>
            <p>This is the content for Category 4.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex">
        <button
          onClick={() => handleTabChange("category1")}
          className={`tab-button ${activeTab === "category1" ? "active" : ""}`}
        >
          Category 1
        </button>
        <button
          onClick={() => handleTabChange("category2")}
          className={`tab-button ${activeTab === "category2" ? "active" : ""}`}
        >
          Category 2
        </button>
        <button
          onClick={() => handleTabChange("category3")}
          className={`tab-button ${activeTab === "category3" ? "active" : ""}`}
        >
          Category 3
        </button>
        <button
          onClick={() => handleTabChange("category4")}
          className={`tab-button ${activeTab === "category4" ? "active" : ""}`}
        >
          Category 4
        </button>
      </div>
      {renderContent()}
    </div>
  );
};

export default TabView;
