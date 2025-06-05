import HealthTranspComponent from '@/components/Health'
import { Metadata } from 'next'

const page = () => {
    return (
        <HealthTranspComponent />
    )
}

export default page

export const metadata: Metadata = {
  title: "Treepz: Reliable Healthcare Shuttles",
};

