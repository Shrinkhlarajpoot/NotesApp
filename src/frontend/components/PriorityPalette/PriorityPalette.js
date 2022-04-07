import "./PriorityPalette.css";

const PriorityPalette = ({ userData, setUserData }) => {
  const handlePriority = (priority) => {
    setUserData({ ...userData, priority: priority });
  };
  return (
    <div className="prioritypall">
      <div className="priority__list">
        <input
          type="radio"
          name="priority"
          className="priority__input"
          value="1"
          checked={userData.priority.Low === "1"}
          onChange={(e) => handlePriority({ Low: e.target.value })}
        ></input>
        <label>Low</label>
      </div>
      <div className="priority__list">
        <input
          type="radio"
          name="priority"
          className="priority__input"
          value="2"
          checked={userData.priority.Medium === "2"}
          onChange={(e) => handlePriority({ Medium: e.target.value })}
        ></input>
        <label>Medium</label>
      </div>
      <div className="priority__list">
        <input
          type="radio"
          name="priority"
          className="priority__input"
          value="3"
          checked={userData.priority.High === "3"}
          onChange={(e) => handlePriority({ High: e.target.value })}
        ></input>
        <label>High</label>
      </div>
    </div>
  );
};

export { PriorityPalette };
