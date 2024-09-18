import { monthNames } from "../utils/Months.js";
import Task from "./Task.jsx";

const ProjectDetail = ({ details, onSelectToDelete }) => {

  function formattedDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    return `${day} / ${month} / ${year}`;
  }
  return (
    <div className="w-[1116px]">
      <div className="w-full p-6 flex justify-center">
        <div className="bg-white shadow-lg rounded-lg w-9/12 p-8">
          <div className="mb-6">
            <div className="flex justify-between">
              <h2 className="font-raleway text-3xl font-extrabold text-stone-700 mb-4">
                {details.title}
              </h2>
              <div>
                <button
                  onClick={onSelectToDelete}
                  className="font-raleway ml-4 bg-stone-700 text-stone-300 hover:bg-stone-600 font-semibold py-2 px-4 rounded-lg"
                >
                  Delete
                </button>
              </div>
            </div>
            <p className="font-inter text-sm text-stone-500">
              {formattedDate(details.date)}
            </p>
            <p className="font-inter text-lg font-medium text-stone-600 mt-2">
              {details.description}
            </p>
          </div>
          <Task showingProject={details} />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
