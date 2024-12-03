import Footer from "@/components/footer";
import LearningPrograms from "@/components/home/learning-programs";
import Select from "@/components/select";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
    <div className="h-full mb-4">
      <div className="flex flex-col md:flex-row p-2 bg-green-600 justify-center items-center gap-4 ">
        <div className="text-xs font-bold marquee text-white text-center">
          WHATSAPP NOW / CALL US - ADMISSION FOR 9TH TO 10TH AND 11TH TO 12TH IS GOING NOW, HURRY UP JOIN RIGHT NOW LIMITED SEATS ONLY
        </div>
        <Link
          href="https://wa.me/919342261389"
          target="_blank"
          className="bg-white px-4 py-2 rounded-full hover:bg-green-50  text-xs text-green-600"
        >
          WhatsApp Us
        </Link>
      </div>
      <div className="bg-[url('/images/home/banner_website_home_1.png')] bg-cover  bg-center h-full">
        <nav className="bg-transparent p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="">
              <Link href="/">
              <Image
                src="/images/home/seyon_logo1.png"
                width={150}
                height={100}
                alt="seyon academy"
              />
              </Link>
            </div>
            <div className="hidden md:block">
              <Link
                href="/"
                className="text-gray-300 hover:text-white px-3 text-md font-medium active:font-bold"
              >
                Home
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-white px-3 text-md font-medium"
              >
                Courses
              </Link>
              <Link
                href="/about"
                className="text-gray-300 hover:text-white px-3 text-md font-medium"
              >
                About
              </Link>
            </div>
            <div>
              <Link
                href="/students"
                className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-700 active:scale-50"
              >
                {" "}
                Student Login
              </Link>
            </div>
          </div>
        </nav>

        <section className="container mx-auto flex justify-center items-start  h-full">
          <div className="hidden md:flex justify-center items-end h-[70%] w-full ">
            <div className="overflow-hidden h-[340px] w-[250px] rounded-full relative  border-blue-500">
              {/* <Image
                src="/images/home/school_girl_image.png"
                width={250}
                height={200}
                alt="seyon student"
                className="object-cover object-bottom rounded-full"
              /> */}
            </div>
          </div>
          <div className="w-full h-auto  md:h-[80%] flex justify-center items-center">
            <div className="bg-white p-6 rounded-none md:rounded-2xl md:shadow-lg md:shadow-green-700 max-w-lg ">
              <h2 className="text-2xl font-bold mb-3 text-center">
                JOIN MY BATCH
              </h2>
              <p className="text-muted-foreground font-medium text-center text-sm">
                KINDLY FILL THIS FORM AND SUBMIT SO THAT OUR TEAM MEMBERS WILL
                CONTACT YOU FOR YOUR ADMISSION
              </p>
              <div className="flex items-center my-4">
                <hr className="flex-grow border-t border-gray-300" />
                <span className="mx-4 text-gray-700  font-black">
                  ONLINE SESSION
                </span>
                <hr className="flex-grow border-t border-gray-300" />
              </div>
              <form>
                <div className="mb-2">
                  <Select name="request_from" label={"Are you"}>
                    <option value="STUDENT">Student</option>
                    <option value="PARENT">Parent</option>
                  </Select>
                </div>
                <div className="mb-2">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="w-full appearance-none rounded border border-stroke bg-transparent px-5 py-1 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    id="name"
                    type="text"
                    placeholder="Enter Student Name"
                  />
                </div>
                <div className="mb-2">
                  <Select name="standard" label={"Standard"}>
                    <option value="NEET">NEET</option>
                    <option value="12TH">12TH</option>
                    <option value="11TH">11TH</option>
                    <option value="10TH">10TH</option>
                    <option value="9TH">9TH</option>
                  </Select>
                </div>
                <div className="mb-2">
                  <Select name="board" label={"Board"}>
                    <option value="ISC/ICSE">ISC/ICSE</option>
                    <option value="CBSE">CBSE</option>
                    <option value="STATEBOARD/MATRIC">STATEBOARD / MATRIC</option>
                  </Select>
                </div>
                <div className="mb-2">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full appearance-none rounded border border-stroke bg-transparent px-5 py-1 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    id="email"
                    type="email"
                    placeholder="Your email"
                  />
                </div>
                <div className="mb-2">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="phone"
                  >
                    Phone
                  </label>
                  <input
                    className="w-full appearance-none rounded border border-stroke bg-transparent px-5 py-1 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    id="phone"
                    type="tel"
                    placeholder="Your Phone Number"
                  />
                </div>
                <div className="mb-2">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="district"
                  >
                    District
                  </label>
                  <input
                    className="w-full appearance-none rounded border border-stroke bg-transparent px-5 py-1 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    id="district"
                    type="text"
                    placeholder="Your District"
                  />
                </div>

                <div className="flex items-center justify-between w-full">
                  <button
                    className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Join Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>

      {/* Card Section */}

      <LearningPrograms />
     
    </div>
     <Footer />
     </div>
  );
}
