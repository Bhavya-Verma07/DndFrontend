import "./App.css";
import 'react-toastify/dist/ReactToastify.css';
import TaskManager from "./Component/TaskManagement";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
    <ToastContainer/>
      <TaskManager />
    </div>
  );
}

export default App;
