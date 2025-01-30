"use client"
import ReportComponent from '@/components/Report';
import { Metadata } from 'next';
import React from 'react'

const page = () => {
  return <ReportComponent />
}

export default page

const metadata: Metadata = {
  title: "Treepz: Recent Trip Report.",
};