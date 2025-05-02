import user from "@/assets/userImages/user.png";
import user1 from "@/assets/userImages/user1.png";
import user2 from "@/assets/userImages/user2.png";
import user4 from "@/assets/userImages/user4.png";
import { Button } from "@/components/ui/button";
import { HeartPulse, Star, Syringe } from "lucide-react";
import Header from "@/components/header";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
const iconVariant = {
  surgery:
    "w-12 h-12 bg-red-200 text-red-500 dark:text-white hover:bg-red-300 rounded-lg p-2 box-content  dark:bg-red-500 dark:hover:bg-red-600",
  review:
    "w-12 h-12 text-green-500 dark:text-white bg-green-200 hover:bg-green-300 rounded-lg p-2 box-content dark:bg-green-500 dark:hover:bg-green-600",
  patients:
    "w-12 h-12 text-blue-500 dark:text-white bg-blue-200 hover:bg-blue-300 rounded-lg p-2 box-content dark:bg-blue-500 dark:hover:bg-blue-600",
};
const DoctorProfile = () => {
  const { id } = useParams();
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));
  const [doctor, setDoctor] = useState({});
  console.log(doctor);
  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem("token")));
    fetch(`http://localhost:8080/v1/doctors/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setDoctor(data.data));
  }, []);
  console.log(id);
  return (
    <div className="bg-gray-100 dark:bg-black">
      <Header link={"Doctors"} page={"Doctor Profile"} />
      <div className="p-2">
        <div className="bg-blue-600 p-4 rounded-lg grid grid-cols-4 gap-2">
          <img
            className="col-span-4 md:col-span-1 rounded-lg w-60"
            src={user}
            alt="doctor image"
          />
          <div className="col-span-3 mt-5">
            <p className="text-xs text-white">Hello I am,</p>
            <p className="font-bold text-xl text-white">
              {doctor.firstname} {doctor.lastname}
            </p>
            <p className="text-white text-sm">{doctor.email}</p>
            <p className="text-white font-semibold">
              {doctor.designation}, {doctor.qualification}
            </p>
            <p className="text-white font-semibold">{doctor.specialization}</p>
            <p className="text-white font-semibold">
              License No: {doctor.license_number}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-4 gap-4">
          <div className="bg-blue-100 dark:bg-blue-900 rounded-lg shadow flex flex-col p-4 justify-center items-center">
            <HeartPulse className={iconVariant.patients} />
            <h2 className="font-bold text-4xl text-blue-600 my-2">403</h2>
            <p className="font-bold text-sm  my-2">Patients</p>
            <span className="bg-blue-600 rounded-lg px-2 py-1 text-white text-xs">
              68% High
            </span>
          </div>
          <div className="bg-red-100 dark:bg-red-900 rounded-lg shadow flex flex-col p-4 justify-center items-center">
            <Syringe className={iconVariant.surgery} />
            <h2 className="font-bold text-4xl text-red-600 my-2">403</h2>
            <p className="font-bold text-sm  my-2">Surgery</p>
            <span className="bg-red-600 rounded-lg px-2 py-1 text-white text-xs">
              68% High
            </span>
          </div>
          <div className="bg-green-100  dark:bg-green-900 rounded-lg shadow flex flex-col p-4 justify-center items-center">
            <Star className={iconVariant.review} />
            <h2 className="font-bold text-4xl text-green-600 my-2">403</h2>
            <p className="font-bold text-sm  my-2">Patients</p>
            <span className="bg-green-600 rounded-lg px-2 py-1 text-white text-xs">
              68% High
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
