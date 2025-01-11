"use client";
import { useFormStatus } from "react-dom";
import clsx from "clsx";

const SubmitButton = ({
  name = "Submit",
  loading = "Loading...",
  width="w-full",
  className
}: {
  name?: string;
  loading?: React.ReactNode | string;
  width?: string;
  className: string
}) => {
  const { pending } = useFormStatus();

  return (

    <button
        type="submit"
        className={clsx(
            "flex",
            width,
            "justify-center rounded-md px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600",
            { "opacity-50 cursor-wait": pending },
            className
        )}
        aria-disabled={pending}
        disabled={pending}
    >
        {pending ? loading : name}
    </button>
  );
};

export default SubmitButton;