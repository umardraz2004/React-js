import NoProjectImg from "../assets/no-projects.png";
const MainContent = ({ onProjectClickButton }) => {
  return (
    <>
      <div className="w-[1116px] flex flex-col items-center justify-center">
        <img className="w-20" src={NoProjectImg} alt="" />
        <h2 className="font-bold text-xl font-raleway text-stone-700 mt-8">
          No Project Selected
        </h2>
        <p className="font-medium text-lg font-inter text-stone-500 mt-4">
          Select a project or get started with a new one
        </p>
        <button
          className="flex items-center font-raleway text-xl rounded-lg px-6 text-[#ffffffa5]  py-4 bg-stone-600 mt-8"
          onClick={onProjectClickButton}
        >
          <span>Create new project</span>
        </button>
      </div>
    </>
  );
};

export default MainContent;
