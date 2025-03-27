import { createBrowserRouter, RouterProvider } from "react-router";
import { ThemeProvider } from "./components/theme-provider";
import { Button } from "./components/ui/button";
import Dashboard from "./Dashboard";
import SalaryTable from "./components/SalaryTable.jsx";
import DoctorList from "./page/DoctorDashboard/DoctorList";
import DoctorsCard from "./page/DoctorDashboard/DoctorsCard";
import DoctorProfile from "./page/DoctorDashboard/DoctorProfile";
import { AddDoctor } from "./page/DoctorDashboard/AddDoctor/AddDoctor";
const router = createBrowserRouter([
  {
    path: "",
    element: <Dashboard />,
    children: [
      { path: "salary", element: <SalaryTable /> },
      { path: "doctors-list", element: <DoctorList /> },
      { path: "doctors-card", element: <DoctorsCard /> },
      { path: "doctor-profile", element: <DoctorProfile /> },
      { path: "add-doctor", element: <AddDoctor /> },
    ],
  },
]);
function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
