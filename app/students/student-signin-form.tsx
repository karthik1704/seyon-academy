"use client";

import SubmitButton from "@/components/submit-button";
import { useActionState, useEffect } from "react";
import Image from "next/image";
import { signinJwt } from "./actions";
import { DASHBOARD_LOGO_URL } from "../constants";
import { toast } from "sonner";

export type InitialState = {
  message: string | null;
  fieldErrors?: {
    username?: string ;
    password?: string ;
  };
};

const initialState: InitialState = {
  message: null,
  fieldErrors: {
    username: undefined,
    password: undefined,
  },
};

const StudentSigninForm = () => {
  const [state, formAction] = useActionState(signinJwt, initialState);

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
          <h2 className="text-2xl font-bold text-gray-800">Welcome Back</h2>
          <p className="mt-2 text-sm text-gray-600">Sign in to continue</p>
        </div>
        <form action={formAction} className="mt-6 space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Registration Number
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="username"
                type="text"
                required
                autoComplete="email"
                placeholder="Enter your registration number"
                className="w-full px-4 py-2 text-gray-800 bg-gray-100 border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 text-gray-800 bg-gray-100 border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
              <p className="mt-1 text-xs text-gray-500">
                Default password is Date of Birth (DD-MM-YYYY)
              </p>
            </div>
          </div>

          <div>
            <SubmitButton
              name="Sign In"
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

export default StudentSigninForm;
