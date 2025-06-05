/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { usePathname } from 'next/navigation';
interface LinkProps {
  route:string;
  title:string;
}
export const BASEURL = "https://api.treepz.com/v1/";//"https://treepz-rls29.ondigitalocean.app/v1/";
const website = "https://www.treepz.com"

export const ROUTES = {
    signIn:website+"/sign-in",
    register:website+"/register",
    privacy:"/privacy",
    support:website+"/support",
    forgot_password:website+"/forgot-password",
    terms:website+"/terms",
    cookies:website+"/cookies",
    blog:"https://blog.treepz.com",
    otp:website+"/verify-otp",
    reset_password_otp:website+"/forgot-password/verify-otp",
    signIWithOtp:website+"/sign-in/verify-otp",
    bioData:website+"/bio-data",
    categories:website+"/categories",
    error:website+"/404",
    myAccount:website+"/my-account",
    myaccount_vacation_packages:website+"/my-account/vacation-packages",
    myaccount_event_packages:website+"/my-account/event-packages",
    myaccount_airport_transfer:website+"/my-account/airport-transfer",
    myaccount_car_rental:website+"/my-account/car-rental",
    vacation_packages:website+'/vacation-packages',
    event_packages:website+'/event-packages',
    car_rentals:website+'/car-rentals',
    airport_packages:website+'/airport-transfer',
    partner_affiliation:website+'/partner-affiliation',
    event_tips:website+'/event-tips',
    help:website+'/help',
    policy:website+'/privacy-policy',
    ambassador:website+"/become-ambassador",
    career:website+"/career",
    press:website+"/press",
    about_us:"/about-us",
    faqs:website+"/faq",
    search:website+"/search",
    contact_us:"/contact-us",
    login_with_password:website+"/login-with-password",
    login_with_otp:website+"/login-with-otp",
    manage_profile:website+"/my-account/manage",
    preference:website+"/my-account/manage/preference",
    my_reviews:website+"/my-account/my-reviews",
    check_out:website+"/check-out",
    car_rentals_checkout:website+"/car-rentals/check-out",
}
export const LOCALSTORAGE = {
    city:"city",
    token:"access-token",
    userData:"user-data",
    email:"email",
    saveDailCode:"saveDailCode",
    bookingInfo:"bookingInfo",
    bookingDate:"bookingDate",
    bookingPassengers:"bookingPassengers",
    recentVisit:"recentVisit",
    shopingCart:"shopingCart",
    vacationList:"vacationList",
    CarRentals:"CarRentals",
    AirportTransfer:"AirportTransfer",
    selectedCurrency:"selectedCurrency"
}
export const RegexValidation = {
    ADDRESS: /^[A-Za-z 0-9]+$/,
    ALLDIGITS_ALLALPHABETS: /^[A-Za-z0-9]+$/,
    FULLNAME: /^[A-Z a-z]+$/,
    ALL_DIGIT:/^[0-9]+$/,
    PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/,
    TEN_DIGIT_PHONE: /^[0-9]{10}$/,
    ELEVEN_DIGIT_PHONE: /^[0-9]{11}$/,
    EMAIL:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
    PASSWORD_CHECKS: [
      {
        title: 'at least one lowercase letter',
        pattern: /^(?=.*[a-z])/,
      },
      {
        title: 'at least one uppercase letter',
        pattern: /^(?=.*[A-Z])/,
      },
      {
        title: 'at least one number',
        pattern: /^(?=.*[0-9])/,
      },
      {
        title: 'at least one special character',
        pattern: /^(?=.*[\\W|_])/,
      },
    ],
    STRONG_PASSWORD_CHECKS: 
      {
        lowercase: /^(?=.*[a-z])/,
        uppercase: /^(?=.*[A-Z])/,
        number: /^(?=.*[0-9])/,
        special_character:/[^a-zA-Z0-9\s]/
      }
}
export const SocialMedia = {
  instagram:"https://www.instagram.com/treepzglobal?igsh=cDkyamwyY2F3Nm9j",
  facebook:"https://www.facebook.com/onthemovewithtreepz",
  linkedIn:"https://www.linkedin.com/company/treepzglobal",
  x:"https://x.com/treepzglobal?s=21"
}
interface CustomDashedLinesProps {
    className:string;
}
const CustomDashedLines = (props:CustomDashedLinesProps)=>{
    return <div className={`border-b-[2px] border-dashed custom-dashed-line my-5 ${props.className}`} />
}
const FooterAlt = () => {
  const productList:LinkProps[] = [
    {title:"Event Packages",route:ROUTES.event_packages},
    {title:"Vacation Packages",route:ROUTES.vacation_packages},
    {title:"Car Rental",route:ROUTES.car_rentals},
    {title:"Airport Transfer",route:ROUTES.airport_packages},
    {title:"Corporate Mobility",route:"/"}
  ];
  const resourcesList:LinkProps[] = [
    {title:"Contact Us",route:"/contact.html"},
    {title:"FAQs",route:ROUTES.car_rentals+"#faqs"},
    {title:"Blog",route:"https://blog.treepz.com"}
  ];
  const companyList:LinkProps[] = [
    {title:"About",route:"/about.html"},
    {title:"Career",route:"https://treepz.notion.site/Open-Positions-at-Treepz-Global-1cf36abc474280d7ac3ee66442ac824b"},
    // {title:"Press",route:ROUTES.press},
    {title:"Terms & Conditions",route:ROUTES.terms},
    {title:"Privacy Policy",route: ROUTES.policy}
  ];
const path = String(usePathname()).split("/").filter((a,i,self)=>i == self.length - 2).join("");
const hideBtn = [ROUTES.check_out,ROUTES.car_rentals,ROUTES.airport_packages].includes("/"+path);
console.log(hideBtn)
  return (<div className='bg-[#F8F8FC] mb-[50px] lg:mb-0 pt-[64px] lg:pt-[0px]'>
  <div className={`max-w-[1440px] m-auto ${!hideBtn?"lg:pt-[96px]":" pt-[64px] "}`}>
{!hideBtn &&<div className='lg:grid lg:grid-cols-2 px-[16px] '>
<div className=' lg:px-[50px] '>
<img
   src={"/images/treepz-logo.png"}
   width={119}
   height={32}
   alt="logow"
  />
  <div className='text-[12px] text-[#848383] my-[20px] font-inter leading-[18px] lg:pe-[80px]'>
  Treepz is a leading corporate travel platform that simplifies business travel for employees, entrepreneurs, and executives. Having facilitated over 6 million customer journeys, we offer comprehensive solutions for various travel needs, including events, vacations, corporate retreats, executive transport, staff transportation, and group bookings. While headquartered in Toronto, Canada, Treepz began in Lagos, Nigeria, and has expanded its operations to 25 cities across 6 countries and 4 continents.
  </div>
</div>
{!hideBtn &&<div className='grid grid-cols-2 lg:grid-cols-3  lg:px-10 font-inter  '>
<div className='pt-[34px] lg:pt-[0px]'>
<div className='text-[#101010] text-[12px] font-[500]'>PRODUCTS</div>
<div className='gap-[10px] grid grid-cols-1 pt-5' >
{productList.map((a:LinkProps,i:number)=>{
return <Link key={i} href={a.route}>
  <div className='text-[#848383] text-[14px] hover:text-[#101010] font-[400]'>{a.title}</div>
</Link>
})}
</div>
</div>
<div className='pt-[34px] lg:pt-[0px]'>
<div className='text-[#101010] text-[12px] font-[500]'>RESOURCES</div>
<div className='gap-[10px] grid grid-cols-1 pt-5' >
{resourcesList.map((a:LinkProps,i:number)=>{
return <Link key={i} target={a.route.includes("http")?"_blank":"_parent"} href={a.route}>
  <div className='text-[#848383] hover:text-[#101010] text-[14px] font-[400]'>{a.title}</div>
</Link>
})}
</div>
</div>
<div className='pt-[34px] lg:pt-[0px]'>
<div className='text-[#101010] text-[12px] font-[500]'>COMPANY</div>
<div className='gap-[10px] grid grid-cols-1 pt-5' >
{companyList.map((a:LinkProps,i:number)=>{
return <Link key={i} target={a.route.includes("http")?"_blank":"_parent"} href={a.route}>
  <div className='text-[#848383] hover:text-[#101010] text-[14px] font-[400]'>{a.title}</div>
</Link>
})}
</div>
</div>
</div>}
</div>}
{!hideBtn &&<div className='h-line mt-[32px] lg:mb-[20px]'></div>}
{!hideBtn &&<CustomDashedLines className='' />}
{!hideBtn &&<div className='h-line mt-[32px] mb-[20px]'></div>}
{!hideBtn &&<div className={`grid lg:grid-cols-2 ${!hideBtn?"":"pb-[60px]"} lg:pb-[0px]`}>
<div className={`text-[#666666] text-[15px] font-inter px-[20px] py-[24px] ${!hideBtn?"lg:py-[40px]":""} `}>
© 2025 Treepz, Inc. All rights reserved.
</div>
<div className='flex items-center justify-start lg:justify-end gap-5 ps-[16px] lg:ps-auto  pb-5 lg:pe-[60px]'>
<Link href={SocialMedia.x}
target='_blank'
>
<img
   src={"/images/xlogo.svg"}
   width={24}
   height={24}
   alt="x_"
  />
</Link>
<Link href={SocialMedia.facebook}
target='_blank'
>
<img
   src={"/images/facebook-logo.svg"}
   width={24}
   height={24}
   alt="facebook"
  />
</Link>
<Link href={SocialMedia.linkedIn}
target='_blank'>
<img
   src={"/images/linkin-logo.svg"}
   width={24}
   height={24}
   alt="linkin"
  />
</Link>
<Link 
href={SocialMedia.instagram}
target='_blank'>
<img
   src={"/images/insta-logo.svg"}
   width={24}
   height={24}
   alt="insta"
  />
</Link>
</div>
</div>}
</div>
</div>
  )
}

export default FooterAlt