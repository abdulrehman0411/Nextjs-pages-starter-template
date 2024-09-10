import React, { useState } from "react";
import { useFormik, FormikProps, Field } from "formik";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { FormValues } from "./types";
import Image from "next/image";
import logo from "@/images/logo.png";
import {
  form1Schema,
  form2Schema,
  form3Schema,
  form4Schema,
  form5Schema,
  form6Schema,
  form7Schema,
} from "@/schema/form.schema";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";
import { off } from "process";
import Logo from "@/components/ui/Logo";
import Footer from "@/components/ui/Footer";

// Define the shape of form values
const initialValues: FormValues = {
  profileUrl: "",
  certificateUrl: "",
  resumeUrl: "",
  expCertificateUrl: "",
  licenseUrl: "",
  insuranceUrl: "",
  age: "",
  gender: "",
  race: "",
  religion: "",
  yearsofexperience: "",
  favoritequote: "",
  country: "",
  state: "",
  address: "",
  hobbies: [],
  institutename: "",
  degree: "",
  fieldofstudy: "",
  startdate: "",
  enddate: "",
  companyname: "",
  jobtitle: "",
  jobdescription: "",
  pstartdate: "",
  penddate: "",
  specialization: [],
  npinumber: "",
  time: "",
  etime: "",
  selectbank: "",
  accounttitle: "",
  accountno: "",
};

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState(0);
  const handleSchema = () => {
    if (step === 0) return form1Schema;
    // if (step === 1) return form2Schema;
    // if (step === 2) return form3Schema;
    // if (step === 3) return form4Schema;
    // if (step === 4) return form5Schema;
    // if (step === 5) return form6Schema;
    // if (step === 6) return form7Schema;
  };

  const nextStep = async () => {
    //Set touched fields to ensure validation messages are shown
    formik.setTouched(
      Object.keys(formik.values).reduce(
        (acc, key) => ({ ...acc, [key]: true }),
        {}
      )
    );

    const errors = await formik.validateForm();

    if (Object.keys(errors).length === 0) {
      await formik.submitForm();
      setStep((prev) => prev + 1);
    } else {
      formik.setErrors(errors);
    }
  };
  const prevStep = () => setStep((prev) => prev - 1);

  const formik: FormikProps<FormValues> = useFormik<FormValues>({
    initialValues: initialValues,
    validationSchema: handleSchema(),

    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <div className="ml-4">
        <Logo />
      </div>
      <div className="flex justify-center items-center mt-24">
        <div className="w-full max-w-lg mb-24">
          <form
            onSubmit={formik.handleSubmit}
            className="bg-white p-6 border-2 border-inherit rounded-2xl border-solid w-full"
          >
            {/* Rendering steps based on the current step */}
            {step === 0 && <Step1 formik={formik} />}
            {step === 1 && <Step2 formik={formik} />}
            {step === 2 && <Step3 formik={formik} />}
            {step === 3 && <Step4 formik={formik} />}
            {step === 4 && <Step5 formik={formik} />}
            {step === 5 && <Step6 formik={formik} />}
            {step === 6 && <Step7 formik={formik} />}
          </form>

          {/* Navigation buttons placed outside the form */}
          <div className="flex justify-between mt-6">
            {step > 0 && (
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
              >
                Previous
              </button>
            )}

            {step < 6 ? (
              <button
                type="button"
                onClick={nextStep}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 ml-auto"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                onClick={formik.submitForm}
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 ml-auto"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="float-end">
        <Footer />
      </div>
    </div>
  );
};

export default MultiStepForm;
