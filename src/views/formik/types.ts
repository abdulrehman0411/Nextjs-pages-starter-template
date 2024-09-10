import { FormikProps } from 'formik';

export interface FormValues {
  profileUrl: string;
  certificateUrl: string;
  resumeUrl: string;
  expCertificateUrl: string;
  licenseUrl:string;
  insuranceUrl:string;
  age: string;
  gender: string;
  race: string;
  religion:string;
  yearsofexperience:string;
  favoritequote:string;
  country:string;
  state:string;
  address:string;
  hobbies: string[];
  institutename: string;
  degree:string;
  fieldofstudy:string;
  startdate:string;
  enddate:string;
  companyname:string;
  jobtitle:string;
  jobdescription:string;
  pstartdate:string;
  penddate:string;
  specialization:string[];
  npinumber:string;
  time:string;
  etime:string;
  selectbank:string;
  accounttitle:string;
  accountno:string;
}

export interface StepProps {
  formik: FormikProps<FormValues>;
}