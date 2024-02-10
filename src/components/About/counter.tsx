interface CounterProps {
    count: string;
    text: string
}
const Counter:React.FC<CounterProps> = ({ count, text }) => {
    return (
        <div className="w-full sm:w-[288px] py-6 border-b border-[#D3D6D9] flex flex-col">
            <h1 className="text-[32px] sm:leading-[80px] text-[72px] text-[#212529] font-medium">{count}</h1>
            <p className="text-[#6F7174] text-sm font-light">{text}</p>
        </div>
    )
}

export default Counter
