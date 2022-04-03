import "./ColorPalette.css";
const ColorPalette = () => {
  const bgColorList = [
    "#CCFF90",
    "#FDCFE8",
    "#D7AEFB",
    "#E6C9A8",
    "#BAF0BF",
    "#F28B82",
  ];
  return (
    <div className="color__palette">
      
      {bgColorList.map((color) => {
        return (
          <button
            className="color__palette-btn"
            style={{
              backgroundColor: color,
            }}
            type="button"
          ></button>
        );
      })}
    </div>
  );
};
export { ColorPalette };
