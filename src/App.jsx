import { createBrowserRouter, RouterProvider } from "react-router";
import { ThemeProvider } from "./components/theme-provider";
import { Button } from "./components/ui/button";
import Dashboard from "./Dashboard";
import SalaryTable from "./components/SalaryTable.jsx";
import DoctorList from "./page/DoctorDashboard/DoctorList";
import DoctorsCard from "./page/DoctorDashboard/DoctorsCard";
import DoctorProfile from "./page/DoctorDashboard/DoctorProfile";
import LogoinPage from "./page/LoginPage";
import { AddDoctor } from "./page/DoctorDashboard/AddDoctor/AddDoctor";
import { ToastContainer } from "react-toastify";
import Confirm from "./page/Confirm";
import AppointmentList from "./page/DoctorDashboard/DoctorsCard";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LogoinPage />,
  },
  {
    path: "/confirm/:token",
    element: <Confirm />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { path: "salary", element: <SalaryTable /> },
      { path: "doctors-list", element: <DoctorList /> },
      { path: "doctors-card", element: <DoctorsCard /> },
      { path: "doctor-profile/:id", element: <DoctorProfile /> },
      { path: "add-doctor", element: <AddDoctor /> },
      { path: "appointments", element: <AppointmentList /> },
    ],
  },
]);
function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
        <ToastContainer position="bottom-right" autoClose={2000} />
      </ThemeProvider>
    </>
  );
}

export default App;
