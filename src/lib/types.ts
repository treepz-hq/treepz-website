export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  jobTitle: string;
  companyName: string;
  companySize: string;
  companyLocation: string;
}

export interface ApiResponse {
  message?: string;
  error?: string;
  success?: boolean;
}