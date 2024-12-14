import { Metadata } from 'next'
import React from 'react'
import ContactComponent from '@/components/Contact'

const page = () => {
  return (
   <ContactComponent />
  )
}

export default page

export const metadata: Metadata = {
  title: "Contact Us - Let's Discuss Your Transportation Needs",
};