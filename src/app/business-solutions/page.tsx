import { Metadata } from 'next'
import React from 'react'
import BusinessSolutionComponent from '@/components/Business'

const page = () => {
  return (
    <BusinessSolutionComponent />
  )
}

export default page

export const metadata: Metadata = {
  title: "Treepz: Group Transportation Simplified",
};

