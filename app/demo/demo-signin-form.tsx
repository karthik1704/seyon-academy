"use client";

import SubmitButton from "@/components/submit-button";
import { useActionState, useEffect } from "react";
import Image from "next/image";
import { demoLogin } from "./actions";
import { DASHBOARD_LOGO_URL } from "../constants";
import { toast } from "sonner";

export type InitialState = {
  message: string | null;
  fieldErrors?: {
    code?: string ;
  };
};

const initialState: InitialState = {
  message: null,
  fieldErrors: {
    code: undefined,
  },
};

const DemoSigninForm = () => {
  const [state, formAction] = useActionState(demoLogin, initialState);

  useEffect(() => {
    if (state.message) {
      toast.error(state.message , {
        dismissible: true,
        closeButton: true,
        duration: 10000,
      });
    }
  }, [state.message, state]);

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="w-full max-w-md p-4 md:p-8 bg-white md:rounded-lg md:shadow-md">
        <div className="text-center">
          <Image
            width={150}
            height={200}
            alt="Seyon Academy Logo"
            src={DASHBOARD_LOGO_URL}
            className="mx-auto  w-auto mb-2"
          />
          <h2 className="text-2xl font-bold text-gray-800">Welcome!</h2>
          <p className="mt-2 text-sm text-gray-600">Your journay starts here</p>
          {/* <p className="mt-2 text-sm text-gray-600">Sign in to continue</p> */}
        </div>
        <form action={formAction} className="mt-6 space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Demo Registration Number
            </label>
            <div className="mt-2">
              <input
                id="code"
                name="code"
                type="text"
                required
                autoComplete="code"
                // placeholder="Enter your demo registration number"
                className="w-full px-4 py-2 text-gray-800  border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>
          </div>

        

          <div>
            <SubmitButton
              name="Login"
              className="w-full py-2 text-white bg-green-600 rounded-md hover:bg-green-700"
            />
          </div>
        </form>
        {/* <p className="mt-4 text-center text-sm text-gray-600">
                    Forgot your password?{' '}
                    <a href="#" className="font-medium text-purple-600 hover:underline">
                        Reset here
                    </a>
                </p> */}
      </div>
    </div>
  );
};

export default DemoSigninForm;
