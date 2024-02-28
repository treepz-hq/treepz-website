import React from 'react'
import AboutComponent from '@/components/About'
import { Metadata } from 'next';

const page = () => {
    return (
        <AboutComponent />
    )
}

export default page

export const metadata: Metadata = {
  title: "Treepz: Who We Are & What We Do.",
};
