import type { Metadata } from "next";
import Header from "./components/header";

export const generateMetadata = (): Metadata => ({
  title: "Webinar | Seyon Academy",
  description: "Seyon Academy's Webinar Page",
});

export default function WebinarLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    return (
  <div className="">
    <Header />
    <div className=" w-full mx-auto ">
      {children}
    </div>
  </div>);
}
