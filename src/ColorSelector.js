import React, { useState, useEffect } from "react";
import randomColor from "randomcolor";

export const ColorSelector = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [colorMapping, setColorMapping] = useState({});

  useEffect(() => {
    const colors = {};
    for (let day = 1; day <= 365; day++) {
      const color = randomColor();
      colors[day] = color;
    }
    setColorMapping(colors);
  }, []);

  const calculateDayOfYear = (selectedDate) => {
    const date = new Date(selectedDate);
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    const dayOfYear =
      Math.floor((date - startOfYear) / (24 * 60 * 60 * 1000)) + 1;
    return dayOfYear;
  };

  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setSelectedDate(newDate);

    const dayOfYear = calculateDayOfYear(newDate);
    setSelectedColor(colorMapping[dayOfYear]);
  };

  return (
    <div>
      <div style={{ display: "inline-block" }}>
        <input type="date" value={selectedDate} onChange={handleDateChange} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: selectedColor,
            width: "100px",
            height: "100px",
            borderRadius: "10px",
            marginTop: "20px",
          }}
        >
          {colorMapping[calculateDayOfYear(selectedDate)]}
        </div>
      </div>
    </div>
  );
};
