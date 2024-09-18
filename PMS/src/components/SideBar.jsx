import Projects from "./Projects";

const SideBar = ({ onAddClickButton, projectList, onSelectProject }) => {
  return (
    <div
      className="h-screen bg-stone-900 text-white w-[400px]"
    >
      <div className="ms-10">
        <h1 className="font-bold text-3xl font-raleway uppercase mt-24">
          Your Project
        </h1>
        <button
          className="flex items-center font-raleway text-xl rounded-lg px-6 text-[#ffffffa5]  py-4 bg-stone-600 mt-10"
          onClick={onAddClickButton}
        >
          <span className="me-2">+</span>
          <span>Add Project</span>
        </button>
        <div className="mt-10">
          <Projects projectTitleArray={projectList} onSelect={onSelectProject} />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
