import user from "@/assets/userImages/user.png";
import user1 from "@/assets/userImages/user1.png";
import user2 from "@/assets/userImages/user2.png";
import user4 from "@/assets/userImages/user4.png";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Header from "@/components/header";
const doctors = [
  {
    id: 1,
    name: "John Doe",
    image: user,
    yearOfExperience: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    image: user1,
    yearOfExperience: 3,
  },
  {
    id: 3,
    name: "Michael Johnson",
    image: user2,
    yearOfExperience: 8,
  },
  {
    id: 4,
    name: "Emily Davis",
    image: user4,
    yearOfExperience: 2,
  },
  {
    id: 1,
    name: "John Doe",
    image: user,
    yearOfExperience: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    image: user1,
    yearOfExperience: 3,
  },
  {
    id: 3,
    name: "Michael Johnson",
    image: user2,
    yearOfExperience: 8,
  },
  {
    id: 4,
    name: "Emily Davis",
    image: user4,
    yearOfExperience: 2,
  },
];
const DoctorsCard = () => {
  return (
    <div className="bg-gray-100 dark:bg-black">
      <Header link={"Doctors"} page={"Doctors Card"} />
      <div className="p-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {doctors.map((doctor) => (
            <div className="p-4 border bg-white shadow-lg rounded-md flex justify-center items-center flex-col dark:bg-gray-900">
              <img src={doctor.image} class="w-30 rounded-full" alt="" />
              <p className="font-bold text-2xl mt-2">{doctor.name}</p>
              <p>{doctor.yearOfExperience} years of experience</p>
              <div className="flex gap-1 my-1">
                <Star className="text-yellow-500 w-5" />
                <Star className="text-yellow-500 w-5" />
                <Star className="text-yellow-500 w-5" />
                <Star className="text-yellow-500 w-5" />
                <Star className="text-yellow-500 w-5" />
              </div>
              <Button className="my-2">Book Appointment</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorsCard;
