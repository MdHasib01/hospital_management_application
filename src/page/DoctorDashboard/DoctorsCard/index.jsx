import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Eye, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import { Link, useNavigate } from "react-router";

const variant = {
  action_delete:
    "w-4 h-4 bg-red-200 hover:bg-red-300 rounded-lg p-2 box-content  dark:bg-red-500 dark:hover:bg-red-600",
  action_view:
    "w-4 h-4 bg-blue-200 hover:bg-blue-300 rounded-lg p-2 box-content dark:bg-blue-500 dark:hover:bg-blue-600",
};

const AppointmentList = () => {
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem("token")));
    fetch("http://localhost:8080/v1/appointments", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setAppointments(data.data));
  }, []);

  console.log(appointments);

  return (
    <div>
      <Header link={"Appointments"} page={"Appointments List"} />
      <div className="m-2 p-2 rounded-lg bg-white dark:bg-gray-900">
        <div className="flex justify-between">
          <h2>Appointments List</h2>
          <Link to="/dashboard/add-appointment">
            <Button className="flex items-center gap-1">Add Appointment</Button>
          </Link>
        </div>
        <Table>
          <TableCaption>List of appointments.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Doctor Email</TableHead>
              <TableHead>Patient Email</TableHead>
              <TableHead>Appointment Time</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {appointments.map((appointment, index) => (
              <TableRow key={appointment.id}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>
                  {appointment.doctor_first_name} {appointment.doctor_last_name}
                </TableCell>
                <TableCell>
                  {appointment.patient_first_name} {appointment.patient_email}
                </TableCell>
                <TableCell>{appointment.appointment_time}</TableCell>
                <TableCell className="flex gap-1 justify-center">
                  <Trash className={variant.action_delete} />
                  <Eye
                    className={variant.action_view}
                    onClick={() =>
                      navigate(`/dashboard/appointment/${appointment.id}`)
                    }
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AppointmentList;
