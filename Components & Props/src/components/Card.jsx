const Card = (props) => {
  return (
  <div className=" border w-fit my-5 rounded bg-white">
    <div className=' w-full '>
        <img src={props.image} alt="..." />
    </div>
    <div className="px-5 pb-6">
        <h2 className="text-lg font-semibold text-gray-800">{props.title}</h2>
        <div>{props.desc}</div>
    </div>
  </div>
  );
};

export default Card;
