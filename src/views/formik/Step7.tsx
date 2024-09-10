import React from "react";
import { StepProps } from "./types";

const Step7: React.FC<StepProps> = ({ formik }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-6 text-center">Banking Details</h2>
      <div className="h-16  w-full relative">
        <select
          onBlur={formik.handleBlur}
          value={formik.values.selectbank}
          onChange={formik.handleChange}
          name="selectbank"
          className={`mt-4 pl-2 bg-slate-100 block w-full rounded-md border-0 pb-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
            formik.errors.selectbank && formik.touched.selectbank
              ? "ring-red-500"
              : ""
          }`}
        >
          <option value="">Select Bank</option>
          <option value="BOP">BOP</option>
          <option value="HBL">HBL</option>
          <option value="Meezan">Meezan</option>
        </select>
        {formik.errors.selectbank && formik.touched.selectbank ? (
          <p className="absolute text-red-500 text-xs right-2 top-1/2 transform -translate-y-1/2">
            {formik.errors.selectbank}
          </p>
        ) : null}
      </div>
      <div className="relative">
        <input
          onBlur={formik.handleBlur}
          type="text"
          id="accounttitle"
          name="accounttitle"
          className={`pl-2 mb-4 bg-slate-100 block w-full rounded-md border-0 pb-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
            formik.errors.accounttitle && formik.touched.accounttitle
              ? "ring-red-500"
              : ""
          }`}
          placeholder="Account Title"
          value={formik.values.accounttitle}
          onChange={formik.handleChange}
        />
        {formik.errors.accounttitle && formik.touched.accounttitle ? (
          <p className="absolute text-red-500 text-xs right-2 top-1/2 transform -translate-y-1/2">
            {formik.errors.accounttitle}
          </p>
        ) : null}
      </div>
      <div className="relative">
        <input
          onBlur={formik.handleBlur}
          type="text"
          id="accountno"
          name="accountno"
          className={`pl-2 mb-2 bg-slate-100 block w-full rounded-md border-0 pb-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
            formik.errors.accountno && formik.touched.accountno
              ? "ring-red-500"
              : ""
          }`}
          placeholder="Account no/IBAN"
          value={formik.values.accountno}
          onChange={formik.handleChange}
        />
        {formik.errors.accountno && formik.touched.accountno ? (
          <p className="absolute text-red-500 text-xs right-2 top-1/2 transform -translate-y-1/2">
            {formik.errors.accountno}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default Step7;
