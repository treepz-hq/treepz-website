import { Metadata } from 'next'
import React from 'react'
import SchoolTransComponent from '@/components/School'

const page = () => {
  return (
    <SchoolTransComponent />
  )
}

export default page

export const metadata: Metadata = {
  title: "Treepz: Safe & Reliable School Transportation.",
};

