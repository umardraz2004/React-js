import { useRef } from "react";

const CreateProjectForm = ({ projectData, onCancel }) => {
  const titleInput = useRef();
  const descInput = useRef();
  const dateInput = useRef();
  const max = 1000;
  const min = 1;

  function handleSaveData() {
    const title = titleInput.current.value;
    const description = descInput.current.value;
    const date = dateInput.current.value;
    const id = Math.floor(Math.random() * max) + min;
    const tasks= []
    projectData(id, title, description, date, tasks);
    titleInput.current.value = '';
    descInput.current.value = '';
    dateInput.current.value = '';
  }

  return (
    <div className="w-[1116px]">
      <form className="flex flex-col justify-center h-full w-9/12 ms-16">
        <div className="flex justify-end">
          <button
            onClick={onCancel}
            type="button"
            className="font-raleway text-stone-700 hover:text-stone-600 transition-colors font-semibold me-5"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSaveData}
            className="font-raleway bg-stone-700 hover:bg-stone-600 transition-colors text-white font-semibold px-5 py-2 rounded-lg"
          >
            Save
          </button>
        </div>
        <label
          htmlFor="title"
          className="font-inter font-semibold text-lg text-stone-700 uppercase"
        >
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          ref={titleInput}
          className="bg-gray-300 border-b-2 border-stone-200 focus:border-stone-700 outline-none py-3 ps-2 mb-3"
        />
        <label
          htmlFor="description"
          className="font-inter font-semibold text-lg text-stone-700 uppercase"
        >
          Description
        </label>
        <textarea
          name="description"
          id="description"
          ref={descInput}
          className="bg-gray-300 border-b-2 border-stone-200 focus:border-stone-700 outline-none py-3 ps-2 mb-3"
        ></textarea>
        <label
          htmlFor="date"
          className="font-inter font-semibold text-lg text-stone-700 uppercase"
        >
          Date
        </label>
        <input
          type="date"
          name="date"
          id="date"
          ref={dateInput}
          className="bg-gray-300 border-b-2 border-stone-200 focus:border-stone-700 outline-none py-3 ps-2 pe-3"
        />
      </form>
    </div>
  );
};

export default CreateProjectForm;
