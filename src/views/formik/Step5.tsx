import React from "react";
import { StepProps } from "./types";
import { CldUploadWidget } from "next-cloudinary";

const Step5: React.FC<StepProps> = ({ formik }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-6 text-center">License</h2>
      <div className="h-16  w-full relative">
        <select
          onBlur={formik.handleBlur}
          value={formik.values.state}
          onChange={formik.handleChange}
          name="state"
          className={`mt-4 pl-2 bg-slate-100 block w-full rounded-md border-0 pb-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
            formik.errors.state && formik.touched.state ? "ring-red-500" : ""
          }`}
        >
          <option value="">State</option>
          <option value="Sindh">Sindh</option>
          <option value="Punjab">Punjab</option>
          <option value="Nwfp">Nwfp</option>
        </select>
        {formik.errors.state && formik.touched.state ? (
          <p className="absolute text-red-500 text-xs right-2 top-1/2 transform -translate-y-1/2">
            {formik.errors.state}
          </p>
        ) : null}
      </div>
      <div className="relative">
        <input
          onBlur={formik.handleBlur}
          type="text"
          id="npinumber"
          name="npinumber"
          className={`pl-2 mb-2 bg-slate-100 block w-full rounded-md border-0 pb-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
            formik.errors.npinumber && formik.touched.npinumber
              ? "ring-red-500"
              : ""
          }`}
          placeholder="NPI Number"
          value={formik.values.npinumber}
          onChange={formik.handleChange}
        />
        {formik.errors.npinumber && formik.touched.npinumber ? (
          <p className="absolute text-red-500 text-xs right-2 top-1/2 transform -translate-y-1/2">
            {formik.errors.npinumber}
          </p>
        ) : null}
      </div>
      <span className="text-sm text-gray-900">Upload License</span>
      <CldUploadWidget
        uploadPreset="l2mkfyec"
        onSuccess={(results) => {
          const { info } = results;

          // Type guard to ensure info exists and has a secure_url
          if (info && typeof info !== "string" && "secure_url" in info) {
            formik.setFieldValue("licenseUrl", info.secure_url);
          } else {
            console.error("Upload failed or secure_url is not available.");
          }
        }}
      >
        {({ open }) => {
          return (
            <div
              onClick={open}
              className="mt-4 mb-2 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 p-4"
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
                    (LCSW, LMFT, LPC or Psyd)
                  </p>
                </div>
              </div>
            </div>
          );
        }}
      </CldUploadWidget>
      <span className="text-sm text-gray-900">Upload Liability Insurance</span>
      <CldUploadWidget
        uploadPreset="l2mkfyec"
        onSuccess={(results) => {
          const { info } = results;

          // Type guard to ensure info exists and has a secure_url
          if (info && typeof info !== "string" && "secure_url" in info) {
            formik.setFieldValue("insuranceUrl", info.secure_url);
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
                  <p className="text-xs text-gray-500">(JPEG, PNG, PDF)</p>
                </div>
              </div>
            </div>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default Step5;
