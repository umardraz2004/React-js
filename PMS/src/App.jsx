import { useState } from "react";
import CreateProjectForm from "./components/CreateProjectForm";
import MainContent from "./components/MainContent";
import SideBar from "./components/SideBar";
import ProjectDetail from "./components/ProjectDetail";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [view, setView] = useState("main");
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  function handleInputData(id, title, description, date, tasks) {
    if (!title || !description || !date) {
      console.log('kamran bar ho ')
      console.log(`Title: ${title} description: ${description} date: ${date}`)
      toast.error("Please fill out all fields before adding a project.");
      return;
    } else {
      const newProject = { id, title, description, date, tasks };
      setProjects((prevProjects) => [...prevProjects, newProject]);
      toast.success("Project added successfully");
    }
    // setView("main");
  }
  function handleViewChange(viewName) {
    setView(viewName);
    if (viewName === "form") {
      setSelectedProject(null);
    }
  }
  function handleProjectSelect(project) {
    setSelectedProject(project);
    setView("detail");
  }
  function handleDeleteProject() {
    if (!selectedProject) {
      toast.error("No project selected to delete.");
      return;
    }
    const updatedProjects = projects.filter(
      (project) => project.title !== selectedProject.title
    );
    setProjects(updatedProjects);
    setSelectedProject(null);
    toast.success("Project deleted successfully");
    handleViewChange("main");
  }

  return (
    <div className="flex">
      <SideBar
        onAddClickButton={() => handleViewChange("form")}
        projectList={projects}
        onSelectProject={handleProjectSelect}
      />
      {view === "main" && (
        <MainContent onProjectClickButton={() => handleViewChange("form")} />
      )}
      {view === "form" && (
        <CreateProjectForm
          projectData={handleInputData}
          onCancel={() => handleViewChange("main")}
        />
      )}
      {view === "detail" && selectedProject && (
        <ProjectDetail
          details={selectedProject}
          onSelectToDelete={handleDeleteProject}
        />
      )}
      <ToastContainer
        autoClose={500}
        theme="dark"
        closeOnClick
        hideProgressBar={true}
      />
    </div>
  );
}

export default App;
