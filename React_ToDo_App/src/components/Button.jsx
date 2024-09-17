//  export function Button ({color,text,onClick}){
//     return <button style= {{background:color, color:"White"}} onClick={onClick}>{text}</button>
//   }
export function Button({ color = "gray", text = "", onClick }) {
  return (
    <button
      style={{
        backgroundColor: color,
        color: "white",
        border: "none",
        padding: "5px 10px",
        margin: "5px",
        borderRadius: "5px",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
