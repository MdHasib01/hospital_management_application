import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
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
import { useState } from "react";
import ProfileDetails from "./ProfileDetails";
const tabVariant = {
  normal:
    "flex items-center duration-300 hover:font-semibold cursor-pointer  gap-2 text-blue-500 pb-2 dark:text-white  border-b-2 border-white dark:border-gray-900",
  active:
    "flex items-center duration-300 cursor-pointer gap-2 text-blue-600 font-semibold pb-2 dark:text-white dark:border-white border-b-2 border-blue-600",
};
const FormSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required." }),
  lastName: z.string().min(1, { message: "Last name is required." }),
  userName: z.string().min(1, { message: "User name is required." }),
  password: z.string().min(1, { message: "Password is required." }),
  confirmPassword: z
    .string()
    .refine((value, ctx) => {
      if (value !== form.getValues("password")) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Passwords do not match.",
        });
      }
      return true;
    })
    .optional(),
  age: z.string().min(1, { message: "Age is required." }),
  gender: z.string().min(1, { message: "Gender is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  mobile: z.string().min(1, { message: "Mobile number is required." }),
  maritalStatus: z.string().min(1, { message: "Marital status is required." }),
  qualification: z.string().min(1, { message: "Qualification is required." }),
  designation: z.string().min(1, { message: "Designation is required." }),
  bloodGroup: z.string().min(1, { message: "Blood group is required." }),
  address: z.string().min(1, { message: "Address is required." }),
  country: z.string().min(1, { message: "Country is required." }),
  state: z.string().min(1, { message: "State is required." }),
  city: z.string().min(1, { message: "City is required." }),
  postalCode: z.string().min(1, { message: "Postal code is required." }),
  // availability: z.any(),
  availability: z.array(
    z.object({
      day: z.string(),
      startTime: z.string().optional(),
      endTime: z.string().optional(),
    })
  ),
});

export function AddDoctor() {
  const [selectTab, setSelectTab] = useState(1);
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      userName: "",
      password: "",
      confirmPassword: "",
      age: "",
      gender: "",
      email: "",
      mobile: "",
      maritalStatus: "",
      qualification: "",
      designation: "",
      bloodGroup: "",
      address: "",
      country: "",
      state: "",
      city: "",
      postalCode: "",
      availability: [],
    },
  });

  function onSubmit(data) {
    const { confirmPassword, ...payload } = data;
    toast("You submitted the following values", {
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(payload, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div className="bg-gray-100 dark:bg-black">
      <Header link={"Doctors"} page={"Add Doctor"} />
      <div className=" bg-white dark:bg-gray-900 rounded-lg m-2">
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
                  selectTab === 2 ? tabVariant.active : tabVariant.normal
                }
                onClick={() => setSelectTab(2)}
              >
                <CalendarCheck2 />
                <p>Availablity</p>
              </div>
              <div
                className={
                  selectTab === 3 ? tabVariant.active : tabVariant.normal
                }
                onClick={() => setSelectTab(3)}
              >
                <LockKeyhole />
                <p>Account Details</p>
              </div>
            </div>
            <div className="p-4">
              {selectTab === 1 ? (
                <PersonalDetails form={form} />
              ) : selectTab === 2 ? (
                <FormSelect form={form} />
              ) : (
                <ProfileDetails form={form} />
              )}
            </div>
            <Button className="m-4" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
