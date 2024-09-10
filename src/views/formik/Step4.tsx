import React from "react";
import { StepProps } from "./types";

const Step4: React.FC<StepProps> = ({ formik }) => {
  const specializations: string[] = [
    "Depression",
    "Anxiety",
    "Behavior Change",
    "Family Therapy",
    "Sleeping Difficulty",
    "Grief",
    "PTSD",
    "Loneliness",
    "Job Change",
    "Retirement",
    "Companionship",
    "Purpose/Meaning",
    "Declining Health",
    "Declining Mortality",
    "Other",
  ];

  const toggleSpecialization = (specialization: string) => {
    const selectedSpecializations = formik.values.specialization;

    if (selectedSpecializations.includes(specialization)) {
      // Remove if already selected
      formik.setFieldValue(
        "specialization",
        selectedSpecializations.filter((item) => item !== specialization)
      );
    } else {
      // Add if not selected
      formik.setFieldValue("specialization", [
        ...selectedSpecializations,
        specialization,
      ]);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-6 text-center">
        Select Specialization
      </h2>
      <div className="flex flex-wrap gap-4 justify-center mt-6">
        {specializations.map((specialization, index) => (
          <div
            key={index}
            onClick={() => toggleSpecialization(specialization)}
            className={`flex items-center px-4 py-2 border rounded-lg cursor-pointer transition-colors ${
              formik.values.specialization.includes(specialization)
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-gray-100 text-gray-700 border-gray-300"
            }`}
          >
            <input
              onBlur={formik.handleBlur}
              name="specialization"
              type="checkbox"
              checked={formik.values.specialization.includes(specialization)}
              onChange={() => toggleSpecialization(specialization)}
              className="hidden"
            />

            <label className="text-sm font-medium">{specialization}</label>
          </div>
        ))}
        {formik.errors.specialization && formik.touched.specialization ? (
          <p className="text-red-500 text-lg transform ">
            {formik.errors.specialization}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default Step4;
