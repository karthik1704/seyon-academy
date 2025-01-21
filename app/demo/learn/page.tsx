import { getDemoClasses } from "@/services/demo-classes";
import { getCurrentDemoUser } from "@/services/demo-user";
import Video from "./video-and-sidebar";
import Link from "next/link";
import Image from "next/image";
import { DASHBOARD_LOGO_URL } from "@/app/constants";
import DropdownUser from "./avatar";
import { dateTimeFormatter, lessThanExpiryDate } from "@/lib/utils";

type SearchParams = Promise<{ video: number | undefined }>;

export default async function LiveClassPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const videos = await getDemoClasses();
  const user = await getCurrentDemoUser();

  if (!lessThanExpiryDate(user.end_time.slice(0, 16))) {
    return (
      <div className="grid justify-items-center items-center h-svh">
        <div className="flex flex-col items-center text-center gap-2">
          <Image
            src="/images/logo/logo_gif.gif"
            width={200}
            height={200}
            alt="seyon gif"
            unoptimized
            priority
          />
          <h1 className="font-sans font-bold text-2xl">
            Your Demo Time Expired!.
          </h1>
          <p className="text-muted-foreground">
            If you want extra time please contact us
          </p>
          <Link
            href="https://wa.me/919342261389"
            target="_blank"
            className="bg-green-200 px-4 py-2 rounded-full hover:bg-green-500 hover:text-white  text-xs text-green-600"
          >
            WhatsApp Us
          </Link>
        </div>
      </div>
    );
  }

  if (lessThanExpiryDate(user.start_time.slice(0, 16))) {
    return (
      <div className="grid justify-items-center items-center h-svh">
        <div className="flex flex-col items-center text-center gap-2">
          <Image
            src="/images/logo/logo_gif.gif"
            width={200}
            height={200}
            alt="seyon gif"
            unoptimized
            priority
          />
          <h1 className="font-sans font-bold text-2xl">
            Your Demo Class scheduled at:
          </h1>
          <p className="text-muted-foreground text-2xl">
            {dateTimeFormatter(user.start_time.slice(0, 16))} -{" "}
            {dateTimeFormatter(user.end_time.slice(0, 16))}
          </p>
          <Link
            href="https://wa.me/919342261389"
            target="_blank"
            className="bg-green-200 px-4 py-2 rounded-full hover:bg-green-500 hover:text-white  text-xs text-green-600"
          >
            WhatsApp Us
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <nav className="flex items-center justify-between border-b px-2 py-4 shadow-md  bg-white  ">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Image
              src={DASHBOARD_LOGO_URL}
              alt="Logo"
              width={100}
              height={100}
              className="h-30 w-18"
            />
          </Link>
        </div>
        <div className=" flex items-center space-x-4 ml-2">
          <p className="text-muted-foreground hidden md:block">
            Demo Ends at: {dateTimeFormatter(user.end_time)}
          </p>

          <Link
            href="https://wa.me/919342261389"
            target="_blank"
            className="bg-green-200 px-2 py-1 md:px-4 md:py-2 rounded-full hover:bg-green-500 hover:text-white  text-xs text-green-600"
          >
            WhatsApp Us
          </Link>
          <DropdownUser user={user} />
        </div>
      </nav>
      <Video videos={videos} />
    </div>
  );
}
