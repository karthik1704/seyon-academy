import { Metadata } from "next";
import { DASHBOARD_LOGO_URL, LOGO_URL } from "../constants";
import StudentSigninForm from "./student-signin-form";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Student Page",
  description: "This is the student page",
};

export default async function StudentPage() {
  return (
    <div className="flex h-svh flex-1 flex-col justify-center  px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
        width={150}
        height={200}
          alt="Seyon Academy Logo"
          src={DASHBOARD_LOGO_URL}
          className="mx-auto  w-auto"
        />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <StudentSigninForm />
      </div>
    </div>
  );
}
