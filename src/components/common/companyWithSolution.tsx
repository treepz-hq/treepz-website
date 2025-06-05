interface SolutionProps {
    icon: JSX.Element,
    title: string;
    description: string
}

const CompaniesWithSolution:React.FC<SolutionProps> = ({ icon, title, description}) => {
    return (
        <div className="w-full sm:w-[264px] space-y-6 flex flex-col text-center justify-center items-center sm:justify-start sm:items-start sm:text-left" >
            {icon}
            <h1 className="text-xl font-semibold text-[#212529]">{title}</h1>
            <p className="text-base text-[#4D5154]">{description}</p>
        </div>
    )
}

export default CompaniesWithSolution
