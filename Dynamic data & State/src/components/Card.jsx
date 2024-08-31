const Card = (props) => {
  return (
  <div className=" border w-fit my-5 rounded-xl bg-white">
    <div className=' w-full '>
        <img src={props.image} alt="..." />
    </div>
    <div className="px-5 pb-6 text-black">
        <h2 className="text-lg font-semibold text-cyan-400 pb-2">{props.title}</h2>
        <div className="text-lg text-gray-500">{props.description}</div>
    </div>
  </div>
  );
};

export default Card;
