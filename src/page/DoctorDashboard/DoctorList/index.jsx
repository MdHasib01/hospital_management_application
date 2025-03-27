import React from "react";
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
import { Button } from "@/components/ui/button";
import user4 from "@/assets/userImages/user4.png";
import Header from "@/components/header";
const variant = {
  action_delete:
    "w-4 h-4 bg-red-200 hover:bg-red-300 rounded-lg p-2 box-content  dark:bg-red-500 dark:hover:bg-red-600",
  action_edit:
    "w-4 h-4 bg-green-200 hover:bg-green-300 rounded-lg p-2 box-content dark:bg-green-500 dark:hover:bg-green-600",
  action_view:
    "w-4 h-4 bg-blue-200 hover:bg-blue-300 rounded-lg p-2 box-content dark:bg-blue-500 dark:hover:bg-blue-600",
};
const DoctorList = () => {
  return (
    <div>
      <Header link={"Doctors"} page={"Doctors List"} />
      <div className="p-2">
        <div className="flex justify-between">
          <h2>Docrors List</h2>
          <Button className="flex items-center gap-1">
            <SquarePlus />
            Add Doctor
          </Button>
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
            <TableRow>
              <TableCell className="font-medium">#001</TableCell>
              <TableCell className="flex items-center gap-2">
                <img
                  src={user4}
                  class="rounded-full w-8 border"
                  alt="user image"
                />
                {/* <div className=" rounded-full bg-blue-600 p-2">
                  <User className=" w-5 h-5 text-white" />
                </div> */}
                <span className="font-bold">Allan Stuart</span>
              </TableCell>
              <TableCell>Therapist</TableCell>
              <TableCell>N/A</TableCell>
              <TableCell>9AM-2PM</TableCell>
              <TableCell>9AM-2PM</TableCell>
              <TableCell>9AM-2PM</TableCell>
              <TableCell>9AM-2PM</TableCell>
              <TableCell>9AM-2PM</TableCell>
              <TableCell>9AM-2PM</TableCell>
              <TableCell className=" flex gap-1">
                <Trash className={variant.action_delete} />
                <SquarePen className={variant.action_edit} />
                <Eye className={variant.action_view} />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DoctorList;
