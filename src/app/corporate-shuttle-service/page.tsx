import CorporateComponent from '@/components/Corporate'
import { Metadata } from 'next'

const page = () => {
    return (
        <CorporateComponent />
    )
}

export default page

export const metadata: Metadata = {
  title: "Treepz: Your Corporate Shuttle Solution.",
};
