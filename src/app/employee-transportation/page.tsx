import EmployeeTransComponent from '@/components/Employee'
import { Metadata } from 'next'

const page = () => {
    return (
        <EmployeeTransComponent />
    )
}

export default page

export const metadata: Metadata = {
  title: "Treepz: Streamlined Employee Transportation",
};

