import AirportTransComponent from '@/components/Airport'
import { Metadata } from 'next'

const page = () => {
    return (
        <AirportTransComponent />
    )
}

export default page

export const metadata: Metadata = {
  title: "Treepz: Airport Transfers Made Easy.",
};
