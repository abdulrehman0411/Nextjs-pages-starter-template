import  * as Yup from "yup";


const validFileExtensions:any = { image: ['jpg', 'gif', 'png', 'jpeg', 'svg', 'webp'] };

function isValidFileType(fileName: string, fileType: string | number) {
  return fileName && validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1;
}

export const form1Schema = Yup.object({
  profileUrl: Yup.string().required("Please enter your profile image"),
  age: Yup.number().min(18).required("Please enter your age"),
  gender: Yup.string().required("Please enter your gender"),
  race: Yup.string().required("Please enter your race"),
  religion: Yup.string().required("Please enter your religion"),
  yearsofexperience: Yup.string().required("Please enter your experience"),
  favoritequote: Yup.string().required("Please enter your quote"),
  country: Yup.string().required("Please enter your country"),
  state: Yup.string().required("Please enter your state"),
  address: Yup.string().required("Please enter your address"),
  hobbies: Yup.array().min(1).required("please enter your hobbies"),
  
})

export const form2Schema = Yup.object({
  institutename: Yup.string().required("Please enter your institute name"),
  degree: Yup.string().required("Please enter your degree"),
  fieldofstudy: Yup.string().required("Please enter your field of study"),
  startdate: Yup.date().required("Please enter your start date"),
  enddate: Yup.date().required("Please enter your enddate"),
})
export const form3Schema = Yup.object({
  pstartdate: Yup.date().required("Please enter your start date"),
  penddate: Yup.date().required("Please enter your enddate"),
  companyname: Yup.string().required("Please enter your company name"),
  jobtitle: Yup.string().required("Please enter your company jobtitle"),
  jobdescription: Yup.string().required("Please enter your company jobdescription"),
})
export const form4Schema = Yup.object({
  specialization: Yup.array().min(1).required("please enter atleast 1 specialization"),
})
export const form5Schema = Yup.object({
  state: Yup.string().required("Please enter your state"),
  npinumber: Yup.number().required("please enter npi")
})
export const form6Schema = Yup.object({
  time: Yup.string().required("Enter Start Time"),
  etime: Yup.string().required("Enter End Time"),
})
export const form7Schema = Yup.object({
  selectbank: Yup.string().required("Select Back"),
  accounttitle:Yup.string().required("Enter Account Title"),
  accountno:Yup.string().required("Enter Account Number"),
})

