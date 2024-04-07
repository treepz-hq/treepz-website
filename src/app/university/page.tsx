import { Metadata } from 'next'
import React from "react";
import UniversityComponent from '@/components/University'

const page = () => {
  return <UniversityComponent />
};

export default page;

export const metadata: Metadata = {
  title: "Treepz: Safe & Efficient Student Transportation.",
};