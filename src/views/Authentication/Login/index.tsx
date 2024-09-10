import React, { useState } from "react";
import { useFormik } from "formik";
import { CldUploadWidget } from "next-cloudinary";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

// Managing the current step

// Go to previous step

const MultiStepFormik = () => {
  const [step, setStep] = useState(0);
  const nextStep = () => setStep((prev) => prev + 1); // Go to next step
  const prevStep = () => setStep((prev) => prev - 1);
  const Formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="flex justify-center items-center my-24 h-full">
      <form
        onSubmit={Formik.handleSubmit}
        className="bg-white p-6 rounded-lg border-2 border-inherit rounded-2xl border-solid w-full max-w-lg"
      >
        <h2 className="text-xl font-bold mb-6 text-center">
          Personal Information
        </h2>

        {step === 0 && (
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Basic Information
            </label>
            {/* <button >Upload an Image</button> */}
            <CldUploadWidget uploadPreset="l2mkfyec">
              {({ open }) => {
                return (
                  <div
                    onClick={open}
                    className="mt-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 p-4"
                  >
                    <div className="flex items-center ml-16">
                      <svg
                        className="h-10 w-10 text-gray-400 mr-4"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                      >
                        <g fill="#000000">
                          <path d="M4.24 5.8a.75.75 0 001.06-.04l1.95-2.1v6.59a.75.75 0 001.5 0V3.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.101.001L4.2 4.74a.75.75 0 00.04 1.06z" />
                          <path d="M1.75 9a.75.75 0 01.75.75v3c0 .414.336.75.75.75h9.5a.75.75 0 00.75-.75v-3a.75.75 0 011.5 0v3A2.25 2.25 0 0112.75 15h-9.5A2.25 2.25 0 011 12.75v-3A.75.75 0 011.75 9z" />
                        </g>
                      </svg>
                      <div>
                        <p className="font-bold text-sm text-gray-500">
                          Upload Your Profile or drag and drop
                        </p>
                        <p className="font-bold text-xs text-gray-400">
                          (JPG, PNG, or PDF)
                        </p>
                      </div>
                    </div>
                  </div>
                );
              }}
            </CldUploadWidget>

            <div className="flex w-full gap-2 mt-2">
              <div className="h-16 mt-2 w-full">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  className="pl-2 block w-full rounded-md border-0 pb-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Age"
                />
              </div>
              <div className="h-16 mt-2 w-full">
                <select
                  name="gender"
                  className="px-2  block w-full rounded-md border-0 pb-7 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="">Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="h-16  w-full">
              <select
                name="gender"
                className="px-2  block w-full rounded-md border-0 pb-7 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="">Religion</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={Formik.values.email}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              className="pl-2 mb-2 block w-full rounded-md border-0 pb-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Race"
            />
            <CldUploadWidget uploadPreset="l2mkfyec">
              {({ open }) => {
                return (
                  <div
                    onClick={open}
                    className="mt-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 p-4"
                  >
                    <div className="flex items-center ml-16">
                      <svg
                        className="h-10 w-10 text-gray-400 mr-4"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                      >
                        <g fill="#000000">
                          <path d="M4.24 5.8a.75.75 0 001.06-.04l1.95-2.1v6.59a.75.75 0 001.5 0V3.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.101.001L4.2 4.74a.75.75 0 00.04 1.06z" />
                          <path d="M1.75 9a.75.75 0 01.75.75v3c0 .414.336.75.75.75h9.5a.75.75 0 00.75-.75v-3a.75.75 0 011.5 0v3A2.25 2.25 0 0112.75 15h-9.5A2.25 2.25 0 011 12.75v-3A.75.75 0 011.75 9z" />
                        </g>
                      </svg>
                      <div>
                        <p className="font-bold text-sm text-gray-500">
                          Upload Your Profile or drag and drop
                        </p>
                        <p className="font-bold text-xs text-gray-400">
                          (JPG, PNG, or PDF)
                        </p>
                      </div>
                    </div>
                  </div>
                );
              }}
            </CldUploadWidget>
            <input
              type="email"
              id="email"
              name="email"
              value={Formik.values.email}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              className="pl-2 mt-4 mb-2 block w-full rounded-md border-0 pb-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Race"
            />
            <input
              type="email"
              id="email"
              name="email"
              value={Formik.values.email}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              className="pl-2 mt-4 mb-2 block w-full rounded-md border-0 pb-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Race"
            />
            <input
              type="email"
              id="email"
              name="email"
              value={Formik.values.email}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              className="pl-2 mt-4 mb-2 block w-full rounded-md border-0 pb-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Race"
            />

            {Formik.errors.name && Formik.touched.name ? (
              <p className="text-red-500">{Formik.errors.name}</p>
            ) : null}
          </div>
        )}

        {step === 1 && (
          <>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={Formik.values.email}
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your email"
              />
              {Formik.errors.email && Formik.touched.email ? (
                <p className="text-red-500">{Formik.errors.email}</p>
              ) : null}
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={Formik.values.password}
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your password"
              />
              {Formik.errors.password && Formik.touched.password ? (
                <p className="text-red-500">{Formik.errors.password}</p>
              ) : null}
            </div>
          </>
        )}

        <div className="flex justify-between">
          {step > 0 && (
            <button
              type="button"
              onClick={prevStep}
              className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
            >
              Previous
            </button>
          )}

          {step < 1 ? (
            <button
              type="button"
              onClick={nextStep}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultiStepFormik;
