import React from 'react'

interface IProp {
    fill?: string
}
const CheckedIcon:React.FC<IProp> = ({ fill="#3FEC8F" }) => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="32" height="32" rx="16" fill={fill} />
<path d="M14.3346 18.6428L21.9946 10.9819L23.1738 12.1603L14.3346 20.9994L9.03125 15.6961L10.2096 14.5178L14.3346 18.6428Z" fill="#231F20"/>
</svg>

  )
}

export default CheckedIcon