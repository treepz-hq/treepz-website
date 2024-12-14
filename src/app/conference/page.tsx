import { Metadata } from 'next'
import ConferenceComponent from '@/components/Conference'

const page = () => {
    return (
        <ConferenceComponent />
    )
}

export default page

export const metadata: Metadata = {
  title: "Treepz: Effortless Conference Shuttles.",
};
