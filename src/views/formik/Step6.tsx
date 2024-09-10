import React from "react";
import { StepProps } from "./types";

const Step6: React.FC<StepProps> = ({ formik }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-6 text-center">
        Your Available Timings
      </h2>
      <div className="relative mb-4">
        <input
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          type="time"
          id="time"
          name="time"
          min="00:00"
          max="24:00"
          className={`pl-2 mb-2 bg-slate-100 block w-full rounded-md border-0 pb-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
            formik.errors.time && formik.touched.time ? "ring-red-500" : ""
          }`}
          value={formik.values.time}
          placeholder="Start Time"
        />
        {formik.errors.time && formik.touched.time ? (
          <p className="absolute text-red-500 text-xs right-2 top-1/2 transform -translate-y-1/2">
            {formik.errors.time}
          </p>
        ) : null}
      </div>
      <div className="relative">
        <input
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          type="time"
          id="etime"
          name="etime"
          min="00:00"
          max="24:00"
          className={`pl-2 mb-2 bg-slate-100 block w-full rounded-md border-0 pb-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
            formik.errors.etime && formik.touched.etime ? "ring-red-500" : ""
          }`}
          value={formik.values.etime}
          placeholder="Start Time"
        />
      </div>
      {formik.errors.etime && formik.touched.etime ? (
        <p className="absolute text-red-500 text-xs right-2 top-1/2 transform -translate-y-1/2">
          {formik.errors.etime}
        </p>
      ) : null}
      {/* </div> */}
    </div>
  );
};

export default Step6;
