'use client';

import SubmitButton from "@/components/submit-button";
import { useActionState } from "react";
import { signinJwt } from "./actions";

export type InitialState = {
    message?: string ;
    fieldErrors?: {
      username?: string ;
      password?: string ;
    };
  };
  
  const initialState: InitialState = {
    message: undefined,
    fieldErrors: {
      username: undefined,
      password: undefined,
    },
  };
  

const StudentSigninForm = () => {
    const [state, formAction] = useActionState(signinJwt, initialState);

    return(
        <form action={formAction} method="POST" className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
            Registration Number
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="username"
              type="text"
              required
              autoComplete="email"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
              Password
            </label>
            {/* <div className="text-sm">
              <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Forgot password?
              </a>
            </div> */}
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            />
            <p className="text-gray-600">Default password is Date of birth (DD-MM-YYYY) </p>
          </div>

        </div>

        <div>
          <SubmitButton name="Signin" />
        </div>
      </form>
    )

}



export default StudentSigninForm;