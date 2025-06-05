import { Metadata } from 'next'
import NonEmergencyTranspComponent from '@/components/NonEmergency'
import React from 'react'

const page = () => {
  return (
    <NonEmergencyTranspComponent />
  )
}

export default page

export const metadata: Metadata = {
  title: "Treepz: Comfortable Rides for Medical Appointments.",
};

