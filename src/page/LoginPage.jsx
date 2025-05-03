import { GalleryVerticalEnd } from "lucide-react";

import { LoginForm } from "@/components/login-form";
import logo from "../assets/logo.png";
import loginBg from "../assets/loginbg.png";
import { useState } from "react";
import { RegisterForm } from "@/components/register-form";
export default function LoginPage() {
  const [form, setForm] = useState(1);
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-center">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <img src={logo} alt="" />
            </div>
            <span className="font-bold text-xl">
              <span className="text-blue-500">Medi</span>Core HMS
            </span>
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            {form === 1 ? (
              <LoginForm setForm={setForm} />
            ) : (
              <RegisterForm setForm={setForm} />
            )}
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <img
          src={loginBg}
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
