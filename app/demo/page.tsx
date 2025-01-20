import { Metadata } from "next";
import DemoSigninForm from "./demo-signin-form";

export const metadata: Metadata = {
  title: "Student Demo | Seyon Academy",
  description: "This is the demo user login page",
};

export default async function StudentPage() {
  return (
    <div className=" w-full h-full ">
      <div >
        <DemoSigninForm />
      </div>
    </div>
  );
}
