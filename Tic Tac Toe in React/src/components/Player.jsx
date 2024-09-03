import { useState } from "react";
const Player = ({ initialName, Symbol, isActive, onChangeName }) => {
  const [name, setName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  function handelEditClick() {
    setIsEditing((isEditing) => !isEditing);
    if(isEditing) {
      onChangeName(Symbol,name)
    }
  }
  function handleChange(e) {
    setName(e.target.value);
  }
  let PlayerField = <span className="font-bold px-3">{name}</span>;
  if (isEditing) {
    PlayerField = (
      <input
        type="text"
        value={name}
        onChange={handleChange}
        className="w-[88px] px-3 border-2 border-[#c7aa40] bg-[#c7aa4040] rounded text-white me-2"
        required
      />
    );
  }
  return (
    <li className={isActive ? 'border-2 border-[#f6e35a] animate-pulse' : undefined}>
      <span className="text-sm">
        {PlayerField}
        <span>{Symbol}</span>
      </span>
      <button className="px-3 text-[#c7aa40] text-xs" onClick={handelEditClick}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
};

export default Player;
