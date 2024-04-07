import { Metadata } from 'next'
import GovernmentsComponent from "@/components/Governments";
import React from "react";

const page = () => {
  return <GovernmentsComponent />
};

export default page;

export const metadata: Metadata = {
  title: "Treepz: Efficient Government Mobility.",
};
