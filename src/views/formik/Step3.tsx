import React, { useState } from "react";
import { FormikProps } from "formik";
import { StepProps } from "./types";
import { CldUploadWidget } from "next-cloudinary";

const Step3: React.FC<StepProps> = ({ formik }) => {
  const [submittedData, setSubmittedData] = useState<any>(null);

  // Handle form submission
  const handleSubmit = async () => {
    // await formik.submitForm();
    if (formik.isValid && Object.keys(formik.errors).length === 0) {
      // Save form data only if the form is valid
      setSubmittedData(formik.values);
    } else {
      setSubmittedData(null); // Clear previous data if there are errors
    }
  };
  const handleDelete = () => {
    setSubmittedData(null);
  };
  return (
    <div>
      <h2 className="text-xl font-bold mb-6 text-center">
        Personal Information
      </h2>
      <div className="relative">
        <input
          onBlur={formik.handleBlur}
          type="text"
          id="companyname"
          name="companyname"
          className={`mt-4 pl-2 mb-2 bg-slate-100 block w-full rounded-md border-0 pb-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
            formik.errors.companyname && formik.touched.companyname
              ? "ring-red-500"
              : ""
          }`}
          placeholder="Company Name"
          value={formik.values.companyname}
          onChange={formik.handleChange}
        />
        {formik.errors.companyname && formik.touched.companyname ? (
          <p className="absolute text-red-500 text-xs right-2 top-1/2 transform -translate-y-1/2">
            {formik.errors.companyname}
          </p>
        ) : null}
      </div>
      <div className="relative">
        <input
          onBlur={formik.handleBlur}
          type="text"
          id="jobtitle"
          name="jobtitle"
          className={`mt-4 pl-2 mb-2 bg-slate-100 block w-full rounded-md border-0 pb-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
            formik.errors.jobtitle && formik.touched.jobtitle
              ? "ring-red-500"
              : ""
          }`}
          placeholder="Job Title"
          value={formik.values.jobtitle}
          onChange={formik.handleChange}
        />
        {formik.errors.jobtitle && formik.touched.jobtitle ? (
          <p className="absolute text-red-500 text-xs right-2 top-1/2 transform -translate-y-1/2">
            {formik.errors.jobtitle}
          </p>
        ) : null}
      </div>
      <div className="flex w-full gap-2 mb-4">
        <div className="h-16 w-full relative">
          <input
            onBlur={formik.handleBlur}
            type="date"
            name="pstartdate"
            id="pstartdate"
            className={`mt-2 pl-2 bg-slate-100 block w-full rounded-md border-0 pb-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
              formik.errors.pstartdate && formik.touched.pstartdate
                ? "ring-red-500"
                : ""
            }`}
            placeholder="Start Date"
            value={formik.values.pstartdate}
            onChange={formik.handleChange}
          />
          {formik.errors.pstartdate && formik.touched.pstartdate ? (
            <p className="absolute text-red-500 text-xs right-2 top-1/2 transform -translate-y-1/2">
              {formik.errors.pstartdate}
            </p>
          ) : null}
        </div>
        <div className="h-16 w-full relative">
          <input
            onBlur={formik.handleBlur}
            type="date"
            name="penddate"
            id="penddate"
            className={`mt-2 pl-2 bg-slate-100 block w-full rounded-md border-0 pb-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
              formik.errors.penddate && formik.touched.penddate
                ? "ring-red-500"
                : ""
            }`}
            placeholder="Start Date"
            value={formik.values.penddate}
            onChange={formik.handleChange}
          />
          {formik.errors.penddate && formik.touched.penddate ? (
            <p className="absolute text-red-500 text-xs right-2 top-1/2 transform -translate-y-1/2">
              {formik.errors.penddate}
            </p>
          ) : null}
        </div>
      </div>
      <div className="relative">
        <input
          onBlur={formik.handleBlur}
          type="text"
          id="jobdescription"
          name="jobdescription"
          className={`mt-2 mb-4 pl-2 bg-slate-100 block w-full rounded-md border-0 pb-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
            formik.errors.jobdescription && formik.touched.jobdescription
              ? "ring-red-500"
              : ""
          }`}
          placeholder="Job Description"
          value={formik.values.jobdescription}
          onChange={formik.handleChange}
        />
        {formik.errors.jobdescription && formik.touched.jobdescription ? (
          <p className="absolute text-red-500 text-xs right-2 top-1/2 transform -translate-y-1/2">
            {formik.errors.jobdescription}
          </p>
        ) : null}
      </div>
      <span className="text-sm text-gray-900">
        Upload Experience Certificate
      </span>
      <CldUploadWidget
        uploadPreset="l2mkfyec"
        onSuccess={(results) => {
          const { info } = results;

          // Type guard to ensure info exists and has a secure_url
          if (info && typeof info !== "string" && "secure_url" in info) {
            formik.setFieldValue("expCertificateUrl", info.secure_url);
          } else {
            console.error("Upload failed or secure_url is not available.");
          }
        }}
      >
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
                    <u> Click to upload </u>
                    or drag and drop
                  </p>
                  <p className="text-xs text-gray-500">
                    (SVG, JPG, PNG or PDF)
                  </p>
                </div>
              </div>
            </div>
          );
        }}
      </CldUploadWidget>
      <button
        type="button"
        onClick={handleSubmit}
        className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 ml-auto"
      >
        Submit
      </button>
      {submittedData && Object.keys(formik.errors).length === 0 ? (
        <div className="mt-8 p-6 border rounded-lg bg-gray-50 relative shadow-md">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-bold">Educational Information</h3>
            <div className="flex space-x-2">
              {/* Edit Button */}
              <button className="text-blue-500 hover:text-blue-700">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-1.036l-3.536-3.536a2 2 0 00-2.828 0l-5 5a2 2 0 00-.586 1.414V16a2 2 0 002 2h5.586a2 2 0 001.414-.586l5-5a2 2 0 000-2.828z"
                  />
                </svg>
              </button>
              {/* Delete Button */}
              <button
                className="text-red-500 hover:text-red-700"
                onClick={handleDelete} // This function will reset the form and clear data
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="border-t border-gray-300 pt-4">
            <p className="flex justify-between mb-2">
              <strong className="text-gray-700">Company Name:</strong>
              <span>{submittedData.companyname}</span>
            </p>
            <p className="flex justify-between mb-2">
              <strong className="text-gray-700">Job Title:</strong>
              <span>{submittedData.jobtitle}</span>
            </p>
            <p className="flex justify-between mb-2">
              <strong className="text-gray-700">Start Date:</strong>
              <span>{submittedData.pstartdate}</span>
            </p>
            <p className="flex justify-between mb-2">
              <strong className="text-gray-700">End Date:</strong>
              <span>{submittedData.penddate}</span>
            </p>
            <p className="flex justify-between mb-2">
              <strong className="text-gray-700">Job Description:</strong>
              <span>{submittedData.jobdescription}</span>
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Step3;
