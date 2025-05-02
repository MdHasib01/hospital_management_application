import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Header from "@/components/header";
import { toast, Toaster } from "sonner";
import {
  BriefcaseBusiness,
  CalendarCheck2,
  LockKeyhole,
  User,
} from "lucide-react";
import FormSelect from "./FormSelect";
import PersonalDetails from "./PersonalDetails";
import { useEffect, useState } from "react";
import ProfileDetails from "./ProfileDetails";

const tabVariant = {
  normal:
    "flex items-center duration-300 hover:font-semibold cursor-pointer gap-2 text-blue-500 pb-2 dark:text-white border-b-2 border-white dark:border-gray-900",
  active:
    "flex items-center duration-300 cursor-pointer gap-2 text-blue-600 font-semibold pb-2 dark:text-white dark:border-white border-b-2 border-blue-600",
};

const FormSchema = z.object({
  firstname: z.string().min(1, { message: "First name is required." }),
  lastname: z.string().min(1, { message: "Last name is required." }),
  username: z.string().min(1, { message: "User name is required." }),
  password: z.string().min(1, { message: "Password is required." }),
  confirmPassword: z.string().optional(),
  age: z.string().min(1, { message: "Age is required." }),
  gender: z.string().min(1, { message: "Gender is required." }),
  email: z.string().email({ message: "Invalid email address." }),

  marital_status: z.string().min(1, { message: "Marital status is required." }),
  qualification: z.string().min(1, { message: "Qualification is required." }),
  designation: z.string().min(1, { message: "Designation is required." }),
  blood_group: z.string().min(1, { message: "Blood group is required." }),
  address: z.string().min(1, { message: "Address is required." }),
  country: z.string().min(1, { message: "Country is required." }),
  state: z.string().min(1, { message: "State is required." }),
  city: z.string().min(1, { message: "City is required." }),
  postal_code: z.string().min(1, { message: "Postal code is required." }),
  specialization: z.string().min(1, { message: "Specialization is required." }),
  license_number: z.string().min(1, { message: "License number is required." }),
});

export function AddDoctor() {
  const [selectTab, setSelectTab] = useState(1);
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));
  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem("token")));
  }, []);

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      confirmPassword: "",
      age: "",
      gender: "",
      email: "",
      marital_status: "",
      qualification: "",
      designation: "",
      blood_group: "",
      address: "",
      country: "",
      state: "",
      city: "",
      postal_code: "strin",
      specialization: "",
      license_number: "",
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
    const { confirmPassword, ...payload } = data;
    fetch("http://localhost:8080/v1/doctors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => toast("Doctor added successfully"))
      .catch((err) => toast("Doctor account creation failed"));
  };

  return (
    <div className="bg-gray-100 dark:bg-black">
      <Header link={"Doctors"} page={"Add Doctor"} />
      <div className="bg-white dark:bg-gray-900 rounded-lg m-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="border-b-2 border-gray-300 dark:border-gray-600 pt-4 px-4 flex gap-5">
              <div
                className={
                  selectTab === 1 ? tabVariant.active : tabVariant.normal
                }
                onClick={() => setSelectTab(1)}
              >
                <BriefcaseBusiness />
                <p>Personal Details</p>
              </div>

              <div
                className={
                  selectTab === 3 ? tabVariant.active : tabVariant.normal
                }
                onClick={() => setSelectTab(2)}
              >
                <LockKeyhole />
                <p>Account Details</p>
              </div>
            </div>
            <div className="p-4">
              {selectTab === 1 ? (
                <PersonalDetails form={form} />
              ) : (
                <ProfileDetails form={form} />
              )}
            </div>
            {selectTab === 1 ? (
              <Button className="m-4" onClick={() => setSelectTab(3)}>
                Next Page <MdOutlineNavigateNext />
              </Button>
            ) : (
              <div className="flex items-center">
                <Button className="m-4 mr-0" onClick={() => setSelectTab(1)}>
                  <GrFormPrevious />
                  Previous Page
                </Button>
                <Button className="m-4" type="submit">
                  Submit
                </Button>
              </div>
            )}
          </form>
        </Form>
      </div>
    </div>
  );
}
