import { BatchType } from "./batch";

export type StudentProfileType = {
  student_id: number;
  student_photo: string;
  father_name: string;
  mother_name: string;
  father_phone_number: string;
  mother_phone_number: string;
  siblings_phone_number: string;
  personal_number: string;
  age: number;
  school_name: string;
  district: string;
  state: string;
  address: string;
  blood_group: string;
};

export type StudentType = {
  id: number;
  batch_id: number;
  student_code: string;
  first_name: string;
  last_name: string;
  email: string;
  date_of_birth: string;
  gender: string;
  student_profile: StudentProfileType;
  batch: BatchType;
};
