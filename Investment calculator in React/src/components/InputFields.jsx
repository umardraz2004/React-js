const InputFields = ({ title, forWhat, onChanging, Placeholder }) => {
  return (
    <div>
      <label htmlFor={forWhat}>{title}</label>
      <input type="number" onChange={onChanging} name={forWhat} id={forWhat} placeholder={Placeholder} />
    </div>
  );
};

export default InputFields;
