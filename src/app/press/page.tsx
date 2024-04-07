import React from 'react'
import PressComponent from '@/components/Press'
import { Metadata } from 'next'

const page = () => {
  return (
    <PressComponent />
  )
}

export default page

export const metadata: Metadata = {
  title: "Treepz: Latest News & Press Releases.",
};
