"use client";
import { useFormStatus } from "react-dom";
import clsx from "clsx";

const SubmitButton = ({
  name = "Submit",
  loading = "Loading...",
  width="w-full",
}: {
  name?: string;
  loading?: React.ReactNode | string;
  width?: string;
}) => {
  const { pending } = useFormStatus();

  return (

    <button
        type="submit"
        className={clsx(
            "flex",
            width,
            "justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
            { "opacity-50 cursor-wait": pending }
        )}
        aria-disabled={pending}
        disabled={pending}
    >
        {pending ? loading : name}
    </button>
  );
};

export default SubmitButton;