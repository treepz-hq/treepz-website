import React from 'react'
import WeddingComponent from '@/components/Wedding'
import { Metadata } from 'next'

const page = () => {
  return (
    <WeddingComponent />
  )
}

export default page

export const metadata: Metadata = {
  title: "Treepz: Elegant Wedding Transportation.",
};
