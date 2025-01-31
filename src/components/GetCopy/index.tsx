'use client';
import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { FormData } from '@/lib/types';
import * as Yup from 'yup';
import { submitReport, retryRequest } from '@/lib/api';

const GetACopy: React.FC = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    jobTitle: '',
    companyName: '',
    companySize: '',
    companyLocation: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    phoneNumber: Yup.string()
      .matches(/^\+?[1-9]\d{1,14}$/, 'Phone number is not valid (e.g., +1234567890)')
      .required('Phone number is required'),
    jobTitle: Yup.string().required('Job title is required'),
    companyName: Yup.string().required('Company name is required'),
    companySize: Yup.string().required('Company size is required'),
    companyLocation: Yup.string().required('Company location is required'),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false); 

  const handleSubmit = async (values: FormData, { resetForm }: { resetForm: () => void }) => {
    setIsSubmitting(true);
    setErrorMessage(null);
    setSuccessMessage(null);
    setRetryCount(0);
  
    try {
      const response = await retryRequest(values, retryCount);
      setSuccessMessage('Please check your email for the report!');
      setShowModal(true);
      
      resetForm();
  
      setTimeout(() => {
        setShowModal(false);
      }, 3000);
    } catch (error: any) {
      setErrorMessage('Something went wrong. Please try again.');
      setShowModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const closeModal = () => {
    setShowModal(false); 
  };

  return (
    <>
    <div
      className="flex flex-col margin-auto py-[45px] mx-[7%] sm:flex-row  items-center gap-4"
      // className="flex flex-col md:flex-row px-[55px] py-[74px] items-center gap-4"
      style={{
        borderTop: '1.5px dashed #D3D6D9',
        borderBottom: '1.5px dashed #D3D6D9',
        // backgroundColor: '#FFF',
      }}
    >
      <div className="w-full sm:w-1/2">
      {/* <div className="w-full margin-auto bg-red-950 md:w-1/2 p-6"> */}
        {/* Mobile style heading */}
        <h2 className="text-[#101010] text-center font-switzer text-xl font-semibold leading-[32px] p-6 uppercase lg:hidden">
          Get Your Free Copy: Corporate Mobility Report 2025
        </h2>

        {/* Large screen style heading */}
        <h2 className="text-[#212529] text-4xl font-semibold leading-[52px] tracking-[0.4px] uppercase hidden lg:block">
          Get Your Free Copy: Corporate Mobility Report 2025
        </h2>
        <p className="text-[#6F7174] text-center font-switzer text-sm font-normal leading-4 tracking-[0.4px] 
  lg:text-[#4D5154] lg:text-xl lg:leading-7 lg:tracking-[0.4px] lg:text-left">
          Gain exclusive insights into Africa&apos;s corporate transportation landscape and discover how leading companies are optimizing their mobility solutions.
        </p>
      </div>
      
      {/* Form Section */}
      <div className="w-full sm:w-1/2 rounded-2xl p-6 shadow-[0px_1px_24px_3px_rgba(0,0,0,0.04)]">
        <h2 className="text-md font-semibold mb-6 text-center">
          Fill this to get your free copy today
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-6">
              <div className="space-y-4">
                <div className="sm:flex md:gap-4">
                  <div className="sm:w-1/2">
                    <label htmlFor="firstName" className="block text-sm font-normal text-gray-700 my-2">
                      First Name
                    </label>
                    <Field
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="John"
                      className="w-full px-3 py-2 border border-[#A0A3A6] rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    />
                    <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm" />
                  </div>

                  <div className="sm:w-1/2">
                    <label htmlFor="lastName" className="block text-sm font-normal text-gray-700 my-2">
                      Last Name
                    </label>
                    <Field
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Doe"
                      className="w-full px-3 py-2 border border-[#A0A3A6] rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    />
                    <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm" />
                  </div>
                </div>
                <div className="sm:flex md:gap-4">
                  <div className="sm:w-1/2">
                    <label htmlFor="email" className="block text-sm font-normal text-gray-700 my-2">
                      Email
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      placeholder="johndoe@example.com"
                      className="w-full px-3 py-2 border border-[#A0A3A6] rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                  </div>

                  <div className="sm:w-1/2">
                    <label htmlFor="phoneNumber" className="block text-sm font-normal text-gray-700 my-2">
                      Phone Number
                    </label>
                    <Field
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      placeholder="2347056873423"
                      className="w-full px-3 py-2 border border-[#A0A3A6] rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    />
                    <ErrorMessage name="phoneNumber" component="div" className="text-red-500 text-sm" />
                  </div>
                </div>

                <div className="sm:flex md:gap-4">
                  <div className="sm:w-1/2">
                    <label htmlFor="jobTitle" className="block text-sm font-normal text-gray-700 my-2">
                      Job Title
                    </label>
                    <Field
                      type="text"
                      id="jobTitle"
                      name="jobTitle"
                      placeholder="Enter your job title"
                      className="w-full px-3 py-2 border border-[#A0A3A6] rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    />
                    <ErrorMessage name="jobTitle" component="div" className="text-red-500 text-sm" />
                  </div>

                  <div className="sm:w-1/2">
                    <label htmlFor="companyName" className="block text-sm font-normal text-gray-700 my-2">
                    What&apos;s your company name?
                    </label>
                    <Field
                      type="text"
                      id="companyName"
                      name="companyName"
                      placeholder="Facebook"
                      className="w-full px-3 py-2 border border-[#A0A3A6] rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    />
                    <ErrorMessage name="companyName" component="div" className="text-red-500 text-sm" />
                  </div>
                </div>

                <div className="sm:flex md:gap-4">
                  <div className="sm:w-1/2">
                    <label htmlFor="companySize" className="block text-sm font-normal text-gray-700 my-2">
                    What&apos;s the size of your company?
                    </label>
                    <Field
                      as="select"
                      id="companySize"
                      name="companySize"
                      className="w-full px-3 py-2 border border-[#A0A3A6] rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    >
                      <option value="">Select company size</option>
                      <option value="1-10">1-10</option>
                      <option value="11-50">11-50</option>
                      <option value="51-200">51-200</option>
                      <option value="201-500">201-500</option>
                      <option value="500+">500+</option>
                    </Field>
                    <ErrorMessage name="companySize" component="div" className="text-red-500 text-sm" />
                  </div>

                  <div className="sm:w-1/2">
                    <label htmlFor="companyLocation" className="block text-sm font-normal text-gray-700 my-2">
                    Company location (City & Country)
                    </label>
                    <Field
                      type="text"
                      id="companyLocation"
                      name="companyLocation"
                      placeholder="Lagos, Nigeria"
                      className="w-full px-3 py-2 border border-[#A0A3A6] rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    />
                    <ErrorMessage name="companyLocation" component="div" className="text-red-500 text-sm" />
                  </div>
                </div>
              </div>

              <p className="text-[#6F7174] text-sm text-center">
                By downloading this report, you will also receive Treepz&apos;s monthly newsletter.
              </p>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#F8B02B] text-[#101010] font-semibold py-2 px-4 rounded-full"
              >
                {isSubmitting ? 'Submitting...' : 'Download Report'}
              </button>
            </Form>
          )}
        </Formik>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-center text-xl font-semibold mb-4">
              {successMessage ? 'Submission Successful' : 'Submission Failed'}
            </h2>
            <p className="text-center text-sm mb-4">
              {successMessage || errorMessage}
            </p>
            <button
              onClick={closeModal}
              className="w-full bg-[#F8B02B] text-[#101010] font-semibold py-2 px-4 rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default GetACopy;
