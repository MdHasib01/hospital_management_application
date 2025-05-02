import React from "react";
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
import { Eye, EyeClosed, User } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { set } from "react-hook-form";
const ProfileDetails = ({ form }) => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] =
    React.useState(false);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2">
      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel>User Name</FormLabel>
            <FormControl>
              <Input placeholder="user name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <div className="relative flex items-center">
              <div className="absolute right-2">
                {passwordVisible ? (
                  <Eye onClick={() => setPasswordVisible(false)} />
                ) : (
                  <EyeClosed onClick={() => setPasswordVisible(true)} />
                )}
              </div>
              <FormControl>
                <Input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="password"
                  {...field}
                />
              </FormControl>
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="confirmPassword"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Confirm Password</FormLabel>
            <div className="relative flex items-center">
              <div className="absolute right-2">
                {confirmPasswordVisible ? (
                  <Eye onClick={() => setConfirmPasswordVisible(false)} />
                ) : (
                  <EyeClosed onClick={() => setConfirmPasswordVisible(true)} />
                )}
              </div>
              <FormControl>
                <Input
                  type={confirmPasswordVisible ? "text" : "password"}
                  placeholder="confirm password"
                  {...field}
                />
              </FormControl>
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default ProfileDetails;
