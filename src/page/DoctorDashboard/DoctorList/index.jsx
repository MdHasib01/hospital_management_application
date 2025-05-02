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
import { Eye, SquarePen, SquarePlus, Trash, User } from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import user4 from "@/assets/userImages/user4.png";
import Header from "@/components/header";
import { Link, useNavigate } from "react-router";
const variant = {
  action_delete:
    "w-4 h-4 bg-red-200 hover:bg-red-300 rounded-lg p-2 box-content  dark:bg-red-500 dark:hover:bg-red-600",
  action_edit:
    "w-4 h-4 bg-green-200 hover:bg-green-300 rounded-lg p-2 box-content dark:bg-green-500 dark:hover:bg-green-600",
  action_view:
    "w-4 h-4 bg-blue-200 hover:bg-blue-300 rounded-lg p-2 box-content dark:bg-blue-500 dark:hover:bg-blue-600",
};
const DoctorList = () => {
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem("token")));
    fetch("http://localhost:8080/v1/doctors", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setDoctors(data.data));
  }, []);
  console.log(doctors);
  const isAvailable = (day, availability) => {
    return availability?.includes(day?.toLowerCase());
  };
  return (
    <div>
      <Header link={"Doctors"} page={"Doctors List"} />
      <div className="m-2 p-2 rounded-lg  bg-white dark:bg-gray-900">
        <div className="flex justify-between">
          <h2>Docrors List</h2>
          <Link to="/dashboard/add-doctor">
            <Button className="flex items-center gap-1">
              <SquarePlus />
              Add Doctor
            </Button>
          </Link>
        </div>
        <Table>
          <TableCaption>List of doctors.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Doctor Name</TableHead>
              <TableHead>Designation</TableHead>
              <TableHead>Sun</TableHead>
              <TableHead>Mon</TableHead>
              <TableHead>Tue</TableHead>
              <TableHead>Wed</TableHead>
              <TableHead>Thu</TableHead>
              <TableHead>Fri</TableHead>
              <TableHead>Sat</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {doctors.map((doctor, index) => (
              <TableRow key={doctor.user_id}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell className="flex items-center gap-2">
                  <img
                    src={user4}
                    className="rounded-full w-8 border"
                    alt="user image"
                  />
                  {/* <div className=" rounded-full bg-blue-600 p-2">
                  <User className=" w-5 h-5 text-white" />
                </div> */}
                  <span className="font-bold">
                    {doctor.firstname} {doctor.lastname}
                  </span>
                </TableCell>
                <TableCell>{doctor.designation}</TableCell>

                <TableCell>
                  {isAvailable("saturday", doctor.availability) ? (
                    <FaCheckCircle className="text-green-500 w-6 h-6" />
                  ) : (
                    <IoCloseCircle className="text-red-500 w-6 h-6" />
                  )}
                </TableCell>

                <TableCell>
                  {isAvailable("sunday", doctor.availability) ? (
                    <FaCheckCircle className="text-green-500 w-6 h-6" />
                  ) : (
                    <IoCloseCircle className="text-red-500 w-6 h-6" />
                  )}
                </TableCell>

                <TableCell>
                  {isAvailable("monday", doctor.availability) ? (
                    <FaCheckCircle className="text-green-500 w-6 h-6" />
                  ) : (
                    <IoCloseCircle className="text-red-500 w-6 h-6" />
                  )}
                </TableCell>

                <TableCell>
                  {isAvailable("tuesday", doctor.availability) ? (
                    <FaCheckCircle className="text-green-500 w-6 h-6" />
                  ) : (
                    <IoCloseCircle className="text-red-500 w-6 h-6" />
                  )}
                </TableCell>

                <TableCell>
                  {isAvailable("wednesday", doctor.availability) ? (
                    <FaCheckCircle className="text-green-500 w-6 h-6" />
                  ) : (
                    <IoCloseCircle className="text-red-500 w-6 h-6" />
                  )}
                </TableCell>

                <TableCell>
                  {isAvailable("thursday", doctor.availability) ? (
                    <FaCheckCircle className="text-green-500 w-6 h-6" />
                  ) : (
                    <IoCloseCircle className="text-red-500 w-6 h-6" />
                  )}
                </TableCell>
                <TableCell>
                  {isAvailable("friday", doctor.availability) ? (
                    <FaCheckCircle className="text-green-500 w-6 h-6" />
                  ) : (
                    <IoCloseCircle className="text-red-500 w-6 h-6" />
                  )}
                </TableCell>

                <TableCell className=" flex gap-1 justify-center">
                  <Trash className={variant.action_delete} />

                  <Eye
                    className={variant.action_view}
                    onClick={() =>
                      navigate(`/dashboard/doctor-profile/${doctor.user_id}`)
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

export default DoctorList;
