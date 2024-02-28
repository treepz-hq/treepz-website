import ConventionComponent from '@/components/Convention'
import { Metadata } from 'next'

const page = () => {
    return (
        <ConventionComponent />
    )
}

export default page

export const metadata: Metadata = {
  title: "Treepz: Seamless Convention Shuttles",
};
