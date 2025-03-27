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
import { User } from "lucide-react";
import FormSelect from "./FormSelect";
import PersonalDetails from "./PersonalDetails";

const FormSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required." }),
  lastName: z.string().min(1, { message: "Last name is required." }),
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
  availability: z.array(z.string()),
  // availability: z.array(
  //   z.object({
  //     day: z.string(),
  //     startTime: z.string(),
  //     endTime: z.string(),
  //   })
  // ),
});

export function AddDoctor() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
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
    toast("You submitted the following values", {
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div className="bg-gray-100 dark:bg-black">
      <Header link={"Doctors"} page={"Add Doctor"} />
      <div className="p-4 bg-white dark:bg-gray-900 rounded-lg m-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <PersonalDetails form={form} />
            <FormSelect form={form} />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
