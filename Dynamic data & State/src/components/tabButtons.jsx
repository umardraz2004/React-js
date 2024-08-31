const tabButtons = ({children, onSelect ,isSelected}) => {
  return (
    <li className="list-none">
      <button onClick={onSelect} className={`${isSelected ? 'active' : undefined} transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white me-2 p-2 rounded-md font-bold`}>
        {children}
      </button>
    </li>
  );
};

export default tabButtons;
