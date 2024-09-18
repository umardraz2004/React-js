import { useState , useRef, useEffect } from "react";
export default function Player() {
  const playerName = useRef();
  const [enteredPlayerName, setPlayerName] = useState(null);
  function handleClick() {
    const validChecked = playerName.current.value ? playerName.current.value : 'unknown entity';
    setPlayerName(validChecked);
    playerName.current.value = '';
  }
  useEffect(() => {
    playerName.current.focus();
  }, [])
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
