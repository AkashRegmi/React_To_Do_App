 export function Button ({color,text,onClick}){
    return <button style= {{background:color, color:"White"}} onClick={onClick}>{text}</button>
  }