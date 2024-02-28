import { Metadata } from 'next'
import EventComponent from '@/components/Event'
import React from 'react'

const page = () => {
  return (
    <EventComponent />
  )
}

export default page

export const metadata: Metadata = {
  title: "Treepz: Event Transportation Made Easy",
};