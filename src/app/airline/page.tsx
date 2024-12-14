import { Metadata } from 'next'
import AirlineComponent from '@/components/Airline'
import React from 'react'

const page = () => {
  return (
    <AirlineComponent />
  )
}

export default page

export const metadata: Metadata = {
  title: "Treepz: Reliable Airport Transportation.",
};
