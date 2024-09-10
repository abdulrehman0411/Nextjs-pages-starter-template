import React, { useState } from "react";
import { FormikProps } from "formik";
import { CldUploadWidget } from "next-cloudinary";
import { StepProps } from "./types";
import { info } from "console";

const Step1: React.FC<StepProps> = ({ formik }) => {
  const handleChange = (e: { target: { files: any[] } }) => {
    formik.setFieldValue("profileUrl", e.target.files[0]);
  };
  const [hobbyInput, setHobbyInput] = useState("");

  // Add a new hobby to the Formik hobbies array
  const handleAddHobby = () => {
    if (hobbyInput.trim() !== "") {
      formik.setFieldValue("hobbies", [...formik.values.hobbies, hobbyInput]);
      setHobbyInput(""); // Clear the input field
    }
  };

  // Remove hobby from the Formik hobbies array
  const handleRemoveHobby = (hobbyToRemove: string) => {
    const updatedHobbies = formik.values.hobbies.filter(
      (hobby) => hobby !== hobbyToRemove
    );
    formik.setFieldValue("hobbies", updatedHobbies);
  };
  const [url, setUrl] = useState("");
  return (
    <div>
      <h2 className="text-xl font-bold mb-6 text-center">
        Personal Information
      </h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
          Basic Information
        </label>

        <CldUploadWidget
          uploadPreset="l2mkfyec"
          onSuccess={(results) => {
            if (typeof results.info !== "string" && results.info) {
              formik.setFieldValue("profileUrl", results.info.secure_url);
            } else {
              console.error("Upload failed or secure_url is not available.");
            }
          }}
        >
          {({ open }) => {
            return (
              <div
                onClick={() => open()}
                // onChange={handleChange}
                className="mt-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 p-4"
              >
                <div className="flex items-center ml-16">
                  <button>
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
                  </button>
                  <div>
                    <p className="font-bold text-sm text-gray-500">
                      <u> Upload Your Profile </u>
                      or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">(JPG, PNG or PDF)</p>
                    {formik.errors.profileUrl && formik.touched.profileUrl ? (
                      <p className="text-red-500 text-xs mt-4">
                        {formik.errors.profileUrl}
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          }}
        </CldUploadWidget>

        <div className="flex w-full gap-2 mt-2 relative">
          <div className="h-16 mt-2 w-full relative">
            <input
              type="number"
              name="age"
              id="age"
              className={`pl-2 bg-slate-100 block w-full rounded-md border-0 pb-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                formik.errors.age && formik.touched.age ? "ring-red-500" : ""
              }`}
              placeholder="Age"
              value={formik.values.age}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.age && formik.touched.age ? (
              <p className="absolute text-red-500 text-xs right-2 top-1/2 transform -translate-y-1/2">
                {formik.errors.age}
              </p>
            ) : null}
          </div>

          <div className="h-16 mt-2 w-full relative">
            <select
              value={formik.values.gender}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="gender"
              className={`px-2 bg-slate-100 block w-full rounded-md border-0 pb-7 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                formik.errors.gender && formik.touched.gender
                  ? "ring-red-500"
                  : ""
              }`}
            >
              <option value="">Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {formik.errors.gender && formik.touched.gender ? (
              <p className="absolute text-red-500 text-xs right-2 top-1/2 transform -translate-y-1/2">
                {formik.errors.gender}
              </p>
            ) : null}
          </div>
        </div>

        <div className="h-16 w-full relative">
          <select
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.religion}
            name="religion"
            className={`px-2 bg-slate-100 block w-full rounded-md border-0 pb-7 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
              formik.errors.religion && formik.touched.religion
                ? "ring-red-500"
                : ""
            }`}
          >
            <option value="">Religion</option>
            <option value="Islam">Islam</option>
            <option value="Hindu">Hindu</option>
            <option value="Christain">Christian</option>
          </select>
          {formik.errors.religion && formik.touched.religion ? (
            <p className="absolute text-red-500 text-xs right-2 top-1/2 transform -translate-y-1/2">
              {formik.errors.religion}
            </p>
          ) : null}
        </div>

        <div className="relative">
          <input
            type="text"
            onBlur={formik.handleBlur}
            id="race"
            name="race"
            className={`pl-2 mb-2 block bg-slate-100 w-full rounded-md border-0 pb-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
              formik.errors.race && formik.touched.race ? "ring-red-500" : ""
            }`}
            placeholder="Race"
            value={formik.values.race}
            onChange={formik.handleChange}
          />
          {formik.errors.race && formik.touched.race ? (
            <p className="absolute text-red-500 text-xs right-2 top-1/2 transform -translate-y-1/2">
              {formik.errors.race}
            </p>
          ) : null}
        </div>
        <CldUploadWidget
          uploadPreset="l2mkfyec"
          onSuccess={(results) => {
            const { info } = results;

            // Type guard to ensure info exists and has a secure_url
            if (info && typeof info !== "string" && "secure_url" in info) {
              formik.setFieldValue("certificateUrl", info.secure_url);
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
                      <u> Upload Your Resume </u>
                      or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">(PDF)</p>
                  </div>
                </div>
              </div>
            );
          }}
        </CldUploadWidget>

        <div className="relative">
          <input
            type="text"
            onBlur={formik.handleBlur}
            id="yearsofexperience"
            name="yearsofexperience"
            className={`mt-4 pl-2 mb-2 bg-slate-100 block w-full rounded-md border-0 pb-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
              formik.errors.yearsofexperience &&
              formik.touched.yearsofexperience
                ? "ring-red-500"
                : ""
            }`}
            placeholder="Years Of Experience"
            value={formik.values.yearsofexperience}
            onChange={formik.handleChange}
          />
          {formik.errors.yearsofexperience &&
          formik.touched.yearsofexperience ? (
            <p className="absolute text-red-500 text-xs right-2 top-1/2 transform -translate-y-1/2">
              {formik.errors.yearsofexperience}
            </p>
          ) : null}
        </div>

        <div className="relative">
          <input
            onBlur={formik.handleBlur}
            type="text"
            id="favoritequote"
            name="favoritequote"
            className={`mt-4 pl-2 mb-2 bg-slate-100 block w-full rounded-md border-0 pb-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
              formik.errors.favoritequote && formik.touched.favoritequote
                ? "ring-red-500"
                : ""
            }`}
            placeholder="Favorite Quote"
            value={formik.values.favoritequote}
            onChange={formik.handleChange}
          />
          {formik.errors.favoritequote && formik.touched.favoritequote ? (
            <p className="absolute text-red-500 text-xs right-2 top-1/2 transform -translate-y-1/2">
              {formik.errors.favoritequote}
            </p>
          ) : null}
        </div>

        <div className="mt-4">
          <div className="flex">
            <input
              onBlur={formik.handleBlur}
              type="text"
              id="hobbies"
              name="hobbies"
              placeholder="Hobbies"
              value={hobbyInput}
              onChange={(e) => setHobbyInput(e.target.value)}
              className={`mt-4 pl-2 mb-2 bg-slate-100 block w-full rounded-md border-0 pb-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                formik.errors.hobbies && formik.touched.hobbies
                  ? "ring-red-500"
                  : ""
              }`}
            />
            <button
              type="button"
              className="ml-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              onClick={handleAddHobby}
            >
              Add
            </button>
          </div>
          {formik.errors.hobbies && formik.touched.hobbies ? (
            <p className="text-red-500 text-sm mt-1">{formik.errors.hobbies}</p>
          ) : null}

          <div className="mt-2 flex flex-wrap">
            {formik.values.hobbies.map((hobby, index) => (
              <div
                key={index}
                className="bg-gray-200 rounded-full px-4 py-2 mr-2 mb-2 flex items-center"
              >
                <span>{hobby}</span>
                <button
                  type="button"
                  className="ml-2 text-red-500"
                  onClick={() => handleRemoveHobby(hobby)}
                >
                  x
                </button>
              </div>
            ))}
          </div>
        </div>
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
          Address Details
        </label>
        <div className="h-16  w-full relative">
          <select
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.country}
            name="country"
            className={`mt-4 pl-2 mb-2 bg-slate-100 block w-full rounded-md border-0 pb-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
              formik.errors.country && formik.touched.country
                ? "ring-red-500"
                : ""
            }`}
          >
            <option value="">Country</option>
            <option value="Pakistan">Pakistan</option>
            <option value="India">India</option>
            <option value="Bangladesh">Bangladesh</option>
          </select>
          {formik.errors.country && formik.touched.country ? (
            <p className="absolute text-red-500 text-xs right-2 top-1/2 transform -translate-y-1/2">
              {formik.errors.country}
            </p>
          ) : null}
        </div>
        <div className="h-16  w-full relative">
          <select
            onBlur={formik.handleBlur}
            value={formik.values.state}
            onChange={formik.handleChange}
            name="state"
            className={`mt-4 pl-2 mb-2 bg-slate-100 block w-full rounded-md border-0 pb-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
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
            id="address"
            name="address"
            className={`mt-4 pl-2 mb-2 bg-slate-100 block w-full rounded-md border-0 pb-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
              formik.errors.address && formik.touched.address
                ? "ring-red-500"
                : ""
            }`}
            placeholder="Address"
            value={formik.values.address}
            onChange={formik.handleChange}
          />
          {formik.errors.address && formik.touched.address ? (
            <p className="absolute text-red-500 text-xs right-2 top-1/2 transform -translate-y-1/2">
              {formik.errors.address}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Step1;
