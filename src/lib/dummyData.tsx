import XIcon from "@/assets/svgs/x-icon.svg";
import Support2472 from '@/assets/svgs/and your concierge copy.svg'
import NoneLogo from "@/assets/svgs/user-service.svg";
import FacebookIcon from "@/assets/svgs/facebook-icon.svg";
import LinkedinIcon from "@/assets/svgs/linkedin-icon.svg";
import InstagramIcon from "@/assets/svgs/instagram-icon.svg";
import DoorToDoorIcon from "@/assets/svgs/Door-to-door.svg";
import RealSustainIcon from "@/assets/svgs/real.svg";
import EndlessIcon from "@/assets/svgs/endless-icon.svg"
import GoingFurtherIcon from "@/assets/svgs/going-further.svg";
import WalletFriendlyIcon from "@/assets/svgs/wallet-friendly.svg";
import CheckableEasyIcon from "@/assets/svgs/checkable-easy-payable.svg";
import SuppotLocalBuzIcon from "@/assets/svgs/support-local-biz.svg";
import SlickRides from "@/assets/svgs/slick-rides.svg";
import EasyToBeGreen from "@/assets/svgs/easy-to-be-green.svg";
import LastMile from '@/assets/svgs/Last mile Shuttling.svg'
import AllAroundTheWorld from "@/assets/svgs/all-around-the-world.svg";
import ApproveReview from "@/assets/svgs/approve-review.svg";
import EmployeeSupport from "@/assets/svgs/employee-support.svg";
import ReliabilityGuarantee from "@/assets/svgs/reliablity-guarantee.svg";
import Vehicles4AllOccassions from "@/assets/svgs/vehicles-for-all-occasions.svg";
import TravelSupport247 from "@/assets/svgs/24-7-travel-support.svg";
import CleanAndComfortableIcon from "@/assets/svgs/clean-and-comfortable.svg";
import DALogo from "@/assets/svgs/news/da-logo.svg";
import TechCabalLogo from "@/assets/svgs/news/TechCabal.svg";
import TechMoranLogo from "@/assets/svgs/news/tech-moran.svg";
import TechCrLogo from "@/assets/svgs/news/TechCr.svg";

interface PostalCardProps {
  src: string;
  title: string;
  href?: string;
}
[];

interface PrivateTransProps {
  title?: string;
  desc: string;
}
[];

interface RentACarProps {
  src: string;
  title: string;
  noOfUsers: number;
}
[];

interface BlogProps {
  src: string;
  title: string;
  description: string;
}
[];

interface SocialProps {
  href: string;
  icon: JSX.Element;
}
[];

interface IProps {
  icon: JSX.Element;
  title: string;
  description: string;
}
[];
interface AccordionDataProps {
  title: string;
  content: string;
}
[];

interface AnnouncementProps {
  title: string;
  date: string;
  link: string;
}
[];
interface TeamsMembersProps {
  src: string;
  name: string;
  title: string;
  rank?: string;
  social: string;
}
[];

interface CounterProps {
  count: string;
  text: string;
}
[];

interface footerProps {
  label: string;
  href: string;
}
[];

interface OurPartnerProps {
  src: string;
}
[];

interface NewsProps {
  logo?: JSX.Element;
  src?: string;
  title: string;
  date: string;
  href: string;
  desc?: string;
}
[];

export const BlogsData: NewsProps[] = [
  {
    src: "/blogs/blog-1.png",
    title: "So What Have We Been Up To At Treepz In 2023?",
    date: "Jan 14, 2023",
    desc: "At Treepz, we’re thrilled to reflect on the remarkable achievements and growth we experienced throughout 2023.",
    href: "https://blog.treepz.com/so-what-have-we-been-up-to-at-treepz-in-2023/",
  },
  {
    src: "/blogs/blog-2.png",
    title: "5 Trends In Business: What To Expect In The Next Decade",
    date: "Oct 20, 2023",
    desc: "These trends in business are fast-disrupting customer expectations, moving their experience needle, and influencing how they view businesses.",
    href: "https://blog.treepz.com/5-trends-in-business-what-to-expect-in-the-next-decade/",
  },
  {
    src: "/blogs/blog-3.png",
    title: "Steal The Spotlight: Why Celebs Choose Treepz Car Rentals",
    date: "Sept 28, 2023",
    desc: "From commanding an executive presence to stealing the spotlight, and making cool money, discover why celebs always opt for Treepz car rentals.",
    href: "https://blog.treepz.com/what-if-we-told-you-that-treepz-could-help-you-steal-the-spotlight-like-jay-z-irrespective-of-the-occasion-without-necessarily-sweating-your-pockets/",
  },
];

export const NewsData: NewsProps[] = [
  {
    logo: <DALogo />,
    title: "Treepz partner Octamile to launch insurance for travellers, hosts",
    date: "Oct 17, 2023",
    href: "https://techcabal.com/2023/02/14/treepz-expands-into-kenya/",
  },
  {
    logo: <TechCabalLogo />,
    title: "Online vehicle rentals company, Treepz expands into Kenya",
    date: "Feb 14, 2023",
    href: "https://disrupt-africa.com/2023/10/17/nigerias-treepz-octamile-partner-to-launch-insurance-program-for-travellers-hosts/",
  },
  {
    logo: <TechMoranLogo />,
    title: "Treepz Selected for 2023 VC4A Venture Showcase",
    date: "Aug 24, 2023",
    href: "https://techmoran.com/2023/08/24/treepz-selected-for-2023-vc4a-venture-showcase-appoints-new-board-members-to-foster-sustainable-growth/",
  },
  {
    logo: <TechCrLogo />,
    title: "Nigerian MaaS startup Treepz closes $2.8M seed round to fund",
    date: "Jan 17, 2024",
    href: "https://techcrunch.com/2021/11/22/nigerian-maas-startup-treepz-closes-2-8m-seed-round-to-fund-east-african-expansion/",
  },
];
export const SchoolPartnerData: OurPartnerProps[] = [
  { src: "Jeremiah-Foundation.png" },
  { src: "Eleveation-Church-logo.png" },
  { src: "LBS-Logo.png" },
  { src: "RBS_Rounded_Color_Claim_Logo.png" },
  { src: "Companies-Trust-Us.png" },
  { src: "Techstars.png" },
  { src: "Companies-Trust-Us2.png" },
  { src: "buttercups.png" },
];
export const EmployeePartnerData: OurPartnerProps[] = [
  { src: "logo-2.png" },
  { src: "logo-3.png" },
  { src: "logo-4.png" },
  { src: "Techstars.png" },
  { src: "logo-6.png" },

  { src: "logo-7.png" },
  { src: "logo-8.png" },

  { src: "logo-0.png" },
  { src: "New-mtn-logo.png" },
    {src:'Wakanow-Logo.png'}
];

export const ExecutivePartnerData: OurPartnerProps[] = [
  { src: "logo-2.png" },
  { src: "logo-3.png" },
  { src: "logo-4.png" },
  { src: "Techstars.png" },
  { src: "logo-6.png" },

  { src: "Opportunity.png" },
  { src: "logo-8.png" },

  { src: "logo-0.png" },
  { src: "New-mtn-logo.png" },
    {src:'Wakanow-Logo.png'}
];

export const MainPartnerData: OurPartnerProps[] = [

  { src: "logo-2.png" },
  { src: "logo-3.png" },
  { src: "logo-4.png" },
  { src: "Techstars.png" },
  { src: "logo-6.png" },

  { src: "logo-7.png" },
  { src: "logo-8.png" },

  { src: "logo-9.png" },
  { src: "logo-0.png" },
  { src: "New-mtn-logo.png" },
];
export const HealthPartnerData: OurPartnerProps []=[

    {
        src:"logo-19.png"
    },
    {
        src:"logo-3.png"
    },
    {
        src:"logo-15.png"
    },
    {
        src:"logo-14.png"
    },
    {
        src:"logo-12.png"
    },
    {
        src:"logo-11.png"
    },
    {
        src:"logo-10.png"
    },
    {
        src:"logo-20.png"
    },
    {
        src:"logo-24.png"
    },

]
export const MiniPartnerData: OurPartnerProps[] = [
  {
    src: "Wakanow-Logo.png",
  },
  {
    src: "Jeremiah-Foundation.png",
  },
  {
    src: "New-mtn-logo.png",
  },
  {
    src: "Eleveation-Church-logo.png",
  },
  {
    src: "LBS-Logo.png",
  },
  {
    src: "RBS_Rounded_Color_Claim_Logo.png",
  },
];

export const PostalCardData: PostalCardProps[] = [
  {
    src: "postal-1.png",
    title: "Employee Shuttle Services",
    href: "employee-transportation",
  },
  {
    src: "car-rental.png",
    title: "Car Rental Services",
  },
  {
    src: "school-transportation.png",
    title: "School Transportation",
    href: "school-transportation",
  },
  {
    src: "conference-conventions.png",
    title: "Conference and Conventions",
    href: "conference",
  },
  {
    src: "event-transportation.png",
    title: "Event Transportation",
    href: "event",
  },
  {
    src: "airport-transportation.png",
    title: "Airport Transportation",
    href: "airport-transportation",
  },
];
export const BusinessSolutionsData: PostalCardProps[] = [
  {
    src: "airline.png",
    title: "Airline",
    href: "airline",
  },
  // {
  //     src:"religious.png",
  //     title:"Religious groups",
  //     href: 'contact'
  // },
  {
    src: "corporate.png",
    title: "Corporate events",
    href: "school-transportation",
  },
  {
    src: "school.png",
    title: "School trips",
    href: "school-transportation",
  },
  {
    src: "private.png",
    title: "Private events",
    href: "executive-transportation",
  },
  {
    src: "university.png",
    title: "University",
    href: "university",
  },
  // {
  //     src:"sporting.png",
  //     title:"Sporting teams",
  // },
  // {
  //     src:"military.png",
  //     title:"Military",
  // },
  {
    src: "production.png",
    title: "Production crews",
    href: "contact",
  },
  {
    src: "weddings.png",
    title: "Weddings",
    href: "wedding-transportation",
  },
  {
    src: "government.png",
    title: "Government",
    href: "governments",
  },
];

export const RentACarData: RentACarProps[] = [
  {
    src: "luxurous.png",
    title: "Luxurious",
    noOfUsers: 233,
  },
  {
    src: "basic.png",
    title: "Basic",
    noOfUsers: 400,
  },
  {
    src: "group.png",
    title: "Group",
    noOfUsers: 200,
  },
];

export const BlogData: BlogProps[] = [
  {
    src: "easy-payment.png",
    title: "Easy Payment",
    description:
      "You don't have to enter your card details every time you want to make a payment. Plus, we also offer convenient options like Apple Pay and Google Pay for an even faster checkout experience.",
  },
  {
    src: "simple-booking.png",
    title: "Simple booking",
    description:
      "With Treepz, getting wherever you need to go is as easy as tapping your phone. Our streamlined booking process cuts through the clutter, letting you secure your ride in seconds, not minutes.",
  },
  {
    src: "efficient-pricing.png",
    title: "Efficient pricing",
    description:
      "Our upfront transparent pricing, and no hidden fees, means you can plan your travel with confidence. Whether you're a budget-conscious traveler or simply value smart spending, Treepz delivers.",
  },
];

export const solutionsLists = [
  {
    label: "Airport Shuttles",
    href: "airport-transportation",
  },
  {
    label: "Campus Shuttles",
    href: "school-transportation",
  },
  {
    label: "Convention Transportation",
    href: "convention",
  },
  {
    label: "Corporate Shuttles",
    href: "conference",
  },
  {
    label: "Event Transportation Service",
    href: "event",
  },
];

export const groupLists = [
  { label: " For Airlines ", href: "airline" },
  { label: "For Corporate Events", href: "event" },
  { label: "For School Trips", href: "university" },
];

export const companyLists = [
  {
    href: "about",
    label: "About",
  },
  // {
  //   href: "career",
  //   label: "Career",
  // },
  {
    href: "press",
    label: "Press",
  },
  {
    href: "https://blog.treepz.com",
    label: "Blog",
  },
  {
    href: "terms",
    label: "Terms & Conditions",
  },
  {
    href: "privacy",
    label: "Privacy & Cookie Policy",
  },
];
export const socialMediaLists: SocialProps[] = [
  {
    href: "https://twitter.com/treepzglobal",
    icon: <XIcon />,
  },
  {
    href: "https://facebook.com/treepzglobal",
    icon: <FacebookIcon />,
  },
  {
    href: "https://www.linkedin.com/company/20535443/admin/feed/posts/",
    icon: <LinkedinIcon />,
  },
  {
    href: "https://www.instagram.com/treepzglobal",
    icon: <InstagramIcon />,
  },
];

export const EventUniqueData: IProps[] = [
  {
    icon: <DoorToDoorIcon />,
    title: "Rides you enjoy",
    description:
      " Experience peace of mind knowing every Treepz vehicle is rigorously inspected, fully insured, and equipped with GPS tracking. Our drivers are hand-picked, qualified professionals dedicated to making your journey comfortable and stress-free.",
  },
  {
    icon: <RealSustainIcon />,
    title: "Real sustainability",
    description:
      "We're not just saying sustainable, we're doing it. By utilizing existing vehicles and offsetting our carbon footprint, we reduce emissions and support projects that plant trees and create eco-jobs.",
  },
  {
    icon: <GoingFurtherIcon />,
    title: "We go further",
    description:
      "The world is your oyster, and Treepz gets you there. Wherever your travels take you, experience seamless journeys with our network of carefully vetted drivers in destinations around Africa.",
  },
  {
    icon: <WalletFriendlyIcon />,
    title: "Budget-sized fees",
    description:
      "Treepz believes in transparent pricing. Customize your ride to your budget, see the final cost instantly, and relax knowing there are no hidden fees.",
  },
  {
    icon: <CheckableEasyIcon />,
    title: "Visible, checkable, and easy payable",
    description:
      "Planning your trip is smooth sailing with Treepz! See all your travel details upfront, review everything at your own pace, and confirm and pay with ease. It's that simple.",
  },
  {
    icon: <SuppotLocalBuzIcon />,
    title: "Become a Treepz local business champion",
    description:
      "By choosing Treepz, you're not just getting a ride, you're supporting your community! Our network of local drivers keeps your travel money circulating close to home, empowering local businesses and strengthening your neighborhood.",
  },
];

export const EmployeeUniqueData: IProps[] = [
  {
    icon: <DoorToDoorIcon/>,
    title: "We do the checks so you don’t have to",
    description:
      "Our focus is providing you with the safest transportation possible, so we regularly check all our vehicles and drivers to keep you safe and secure on every journey",
  },
  {
    icon: <EasyToBeGreen />,
    title: "Here for everyone",
    description:
      "Your airport shuttle vehicle will be comfortable and accessible for everyone, with all the legroom you need and plenty of space for your luggage",
  },
  {
    icon: <CleanAndComfortableIcon />,
    title: "Spend only what you need to",
    description:
      "Keep your money for when you get there; we only provide the vehicles you need and nothing more, so you can manage your budget effectively",
  },
  {
    icon: <SuppotLocalBuzIcon />,
    title: "Sit back, relax…",
    description:
      "Begin to unwind from the moment you get into the vehicle. Everything is taken care of, and you can even plug into our WiFi and Bluetooth for extra convenience",
  },
  {
    icon: <ReliabilityGuarantee />,
    title: "A team that understands",
    description:
      "At Treepz, we take pride in leading the industry with outstanding customer experience. Whether it is choosing you shuttle or customizing your personal information, we make sure that each ride is perfectly tailored to each rider.",
  },
  {
    icon: <NoneLogo/>,
    title: "Support local businesses",
    description:
      "Booking with Treepz means you’re also supporting your local businesses because we carefully select regional drivers who know the area.",
  },
];

export const AirlineUniqueData: IProps[] = [
  {
    icon: <DoorToDoorIcon />,
    title: "Dedicated travel team",
    description:
      "Taking it all off your hands to coordinate your journeys in the most common sense way possible",
  },
  {
    icon: <RealSustainIcon />,
    title: "Traceable journeys",
    description:
      "Manage trips, cancel, or change details, monitor vehicles, and enjoy feeling in control",
  },
  {
    icon: <CleanAndComfortableIcon />,
    title: "Choice of clean and comfortable vehicles",
    description:
      "Your team can sit back and relax or start work early in one of our many sparkling vehicles",
  },
  {
    icon: <WalletFriendlyIcon />,
    title: "Full Service Partner",
    description:
      "We offer cost-effective transportation solutions for groups of any size, tailoring our services to accommodate your special requests.",
  },
  {
    icon: <CheckableEasyIcon />,
    title: "Reliability Guarantee",
    description:
      "Treepz exclusively works with trusted transportation operators to ensure vehicles show up on time with 5-star drivers.",
  },
  {
    icon: <SuppotLocalBuzIcon />,
    title: "#1 User Friendly Service",
    description:
      "At Treepz, we take pride in leading the industry with outstanding customer experience. Whether it is choosing you shuttle or customizing your personal information, we make sure that each ride is perfectly tailored to each rider.",
  },
];
export const GovernmentsUniqueData: IProps[] = [
  {
    icon: <DoorToDoorIcon />,
    title: "Full Service Partner",
    description:
      "Our cost-effective transportation is tailored to groups of any size, and all our services accommodate your special requests",
  },
  {
    icon: <RealSustainIcon />,
    title: "Dependability guaranteed",
    description:
      "Treepz only works with trusted transportation operators across the US, with well-presented vehicles and 5-star drivers behind the wheel",
  },
  {
    icon: <CleanAndComfortableIcon />,
    title: "Personal Concierge",
    description:
      "Dedicated customer service experts, live chats, and SMS updates, available for you at all times before and during your reservation.",
  },
  {
    icon: <WalletFriendlyIcon />,
    title: "Vehicles for All Occasions",
    description:
      "Choose from vehicles of all types and sizes: Larger buses for big groups, luxury vehicles to impress, and customized vans for any setting.",
  },
  {
    icon: <CheckableEasyIcon />,
    title: "Last Mile Shuttling",
    description:
      "A unique feature to the Treepz corporate shuttling program, we don't just leave rides to walk the last mile, we make sure the each and ever rider arrives on time to their exact destination.",
  },
  {
    icon: <SuppotLocalBuzIcon />,
    title: "Hyper-Efficient",
    description:
      "Optimized routes, ensuring efficiency for every rider, parent, and school.",
  },
];

export const UniversityUniqueData: IProps[] = [
  {
    icon:<TravelSupport247 />,
    title: "Attentive and secure",
    description:
     "Every Treepz trip starts with top-notch shuttles and trained drivers, meticulously checked for your comfort and peace of mind. Get where you need to be, relaxed and ready to conquer your day.",
  },
  {
    icon: <EndlessIcon />,
    title: "All aboard",
    description:
      "Our buses offer ample space for everyone, study materials, luggage, and passengers with specific needs.",
  },
  {
    icon: <WalletFriendlyIcon />,
    title: "Meeting your budget",
    description:
      "We offer flexible services and student/faculty discounts that fit your budget, without compromising on accessibility or comfort.",
  },
  {
    icon: <ApproveReview />,
    title: "A relaxing experience",
    description:
      "Treepz is your punctuality partner, ensuring you arrive at class, events, or the library on time, ready to conquer your day. Our modern shuttles are more than just rides; they're mobile study havens with everything you need to relax, focus, and achieve.",
  },
  {
    icon: <Support2472 />,
    title: "World-class team",
    description:
      "We are dedicated to making your commute seamless and stress-free. Our meticulously trained drivers and support staff work tirelessly to ensure you reach your destination on time, every time.",
  },
  {
    icon: <SuppotLocalBuzIcon />,
    title: "Support local business owners",
    description:
      "Treepz connects you to your community. Each journey you take is powered by a local, vetted driver, deeply familiar with your neighborhood and its surroundings.",

  },
];

export const ConventionUniqueData: IProps[] = [
  {
    icon: <SlickRides />,
    title: "Peaceful rides",
    description:
      "Treepz ensures your ride is smooth, safe, and comfortable with meticulously maintained, insured vehicles and GPS-tracked journeys. Plus, our drivers are rigorously vetted, trained, and experienced, so you can focus on what matters most.",
  },
  {
    icon: <EasyToBeGreen />,
    title: "Eco-friendly",
    description:
      "Your ride creates positive change. We utilize existing vehicles to minimize environmental impact and support local communities through our deforestation prevention projects.",
  },
  {
    icon: <AllAroundTheWorld />,
    title: "For Africa",
    description:
      "Treepz makes event transportation across Africa seamless. Our trusted network of local, vetted drivers ensures you and your guests arrive safely and comfortably, ready to create unforgettable memories.",
  },
  {
    icon: <WalletFriendlyIcon />,
    title: "Tailored pricing",
    description:
      "No surprises, just transparency. Pay only for what you need, customize your ride to fit your budget.",
  },
  {
    icon: <ApproveReview />,
    title: "Streamlined checkout",
    description:
      "See all the details upfront before you book. No hidden fees, no surprises, just complete transparency so you can make informed choices and book with confidence.",
  },
  {
    icon: <SuppotLocalBuzIcon />,
    title: "Community-driven",
    description:
      "Every ride empowers local businesses, fuels the heart of your neighborhood, and offers personalized journeys just for you.",
  },
];

export const ShoolUniqueData: IProps[] = [
  {
    icon: <TravelSupport247 />,
    title: "Safety first",
    description:
      "Robust, child-friendly, and insured vehicles, GPS trackable journeys for staff and guardians, plus vetted, and screened drivers",
  },
  {
    icon: <EasyToBeGreen />,
    title: "Green means go!",
    description:
      "One large carbon-neutral vehicle can shuttle multiple students, reducing emissions and the amount of traffic on the roads",
  },
  {
    icon: <AllAroundTheWorld />,
    title: "School policy proff",
    description:
      "Stick to your school’s budget, sustainability policies, and staffing/ scheduling guidelines",
  },
  {
    icon: <ApproveReview />,
    title: "Follow the school rules",
    description:
      "Adhere to your federal, state, and local regulations with our wheelchair-accessible, regularly checked vehicles, trained and checked staff, plus onboard safety features",
  },
  {
    icon: <WalletFriendlyIcon />,
    title: "Budget buddy system",
    description:
      "Only pay for what you need with our tailored fees and flexible billing options – budget friendly and simple",
  },
  {
    icon: <SuppotLocalBuzIcon />,
    title: "Become a local business advocate",
    description:
      "Our carefully selected and vetted collection of drivers is always based in your chosen area – so we can all help to support local businesses together",
  },
];

export const ExecutiveUniqueData: IProps[] = [
  {
    icon: <SlickRides />,
    title: "Smooth and safe",
    description:
      "A professional ride starts way before you set foot into the car. We carefully check and insure our vehicles and drivers for your peace of mind",
  },
  {
    icon: <WalletFriendlyIcon />,
    title: "Flexible payments",
    description:
      "We provide you with the chance to streamline your business journeys and only pay for what you need. Call us mavericks if you like, it just makes sense to us",
  },
  {
    icon: <AllAroundTheWorld />,
    title: "Cut the carbon",
    description:
      "We make use of existing vehicles instead of adding new ones to the road, and we offset carbon by supporting projects that both prevent deforestation and create sustainable employment",
  },
  {
    icon: <WalletFriendlyIcon />,
    title: "You’re in the driver’s seat",
    description:
      "You have a full overview of your service before you pay, so you always know what you’re getting",
  },
  {
    icon: <ApproveReview />,
    title: "Your business makes the world go round",
    description:
      "For overseas journeys, we have cars and drivers all over the globe. They still undergo our same rigorous checks and are fully insured",
  },
  {
    icon: <SuppotLocalBuzIcon />,
    title: "Champion local businesses",
    description:
      "When you book with Treepz, you’ll become a small business advocate – we use local, knowledgable drivers",
  },
];

export const AirportUniqueData: IProps[] = [
  {
    icon: <SuppotLocalBuzIcon />,
    title: "Full Service Partner",
    description:
      "We offer cost-effective transportation solutions for groups of any size, tailoring our services to accommodate your special requests.",
  },
  {
    icon: <EmployeeSupport />,
    title: "Personal Concierge",
    description:
      "Dedicated customer service experts, live chats, and SMS updates, available for you at all times before and during your reservation.",
  },
  {
    icon: <ReliabilityGuarantee />,
    title: "Reliability Guarantee",
    description:
      "We make use of existing vehicles instead of adding new ones to the road, and we offset carbon by supporting projects that both prevent deforestation and create sustainable employment",
  },
  {
    icon: <Vehicles4AllOccassions />,
    title: "Vehicles for All Occasions",
    description:
      "Choose from vehicles of all types and sizes: Larger buses for big groups, luxury vehicles to impress, and customized vans for any setting.",
  },
  {
    icon: <LastMile />,
    title: "Last Mile Shuttling",
    description:
      "A unique feature to the Treepz corporate shuttling program, we don't just leave rides to walk the last mile, we make sure the each and ever rider arrives on time to their exact destination.",
  },
  {
    icon: <GoingFurtherIcon/>,
    title: "Hyper-Efficient",
    description:
      "Optimized routes, ensuring efficiency for every rider, parent, and school.",
  },
];
export const CorporateShuttleData: IProps[] = [
  {
    icon: <CleanAndComfortableIcon />,
    title: "Peaceful Rides",
    description:
      "Treepz ensures your ride is smooth, safe, and comfortable with meticulously maintained, insured vehicles and GPS-trackable journeys. Plus, our drivers are rigorously vetted and experienced, so you can focus on what matters most.",
  },
  {
    icon: <EasyToBeGreen />,
    title: "Ride green, feel good",
    description:
      "By maximizing existing vehicles and funding green initiatives, Treepz offers eco-conscious travel that benefits both the planet and local communities.",
  },

  {
    icon: <AllAroundTheWorld />,
    title: "For Africa",
    description:
      "Treepz is built for Africa. We help you navigate through busy cities, hidden wonders, and amazing sights.   ",
  },

  {
    icon: <WalletFriendlyIcon />,
    title: "Stay Flexible, Save Cost",
    description:
      "Easily adjust your requests with Treepz to perfectly match your budget, no matter the size of your company.",
  },
  {
    icon: <CheckableEasyIcon />,
    title: "Simplicity is our superpower",
    description:
      "We believe transportation should be easy. Access all your information, review, approve, and pay seamlessly with Treepz.",
  },
  {
    icon: <SuppotLocalBuzIcon />,
    title: "Community Driven",
    description:
      "Every Treepz driver is from your area. Each trip is a vote of support to local businesses and keeps your community thriving",
  },
];
export const CorporateUniqueData: IProps[] = [
  {
    icon: <SuppotLocalBuzIcon />,
    title: "Vehicles that feel good",
    description:
      "We offer cost-effective transportation solutions for groups of any size, tailoring our services to accommodate your special requests.",
  },
  {
    icon: <AllAroundTheWorld />,
    title: "Sustainability is not just a buzz word",
    description:
      "We make use of existing vehicles instead of adding extra cars to the road, and we offset our carbon through funding projects that tackle deforestation and allow for sustainable jobs",
  },
  {
    icon: <WalletFriendlyIcon />,
    title: "It’s a global world",
    description:
      "We make use of existing vehicles instead of adding extra cars to the road, and we offset our carbon through funding projects that tackle deforestation and allow for sustainable jobs",
  },
  {
    icon: <ApproveReview />,
    title: "Your budget won’t hold you back",
    description:
      "It’s kinda common sense, but we believe you should only pay for what you need. Amend your requests and tailor your costs no matter what your company’s budget",
  },
  {
    icon: <EmployeeSupport />,
    title: "Become a local business advocate",
    description:
      "Our carefully selected and vetted collection of drivers is always based in your chosen area – so we can all help to support local businesses together",
  },
  {
    icon: <SuppotLocalBuzIcon />,
    title: "Easy to approve and pay",
    description:
      "We don’t believe in making things complicated. Access all your information to review and approve, then pay with confidence",
  },
];

export const AccordionData: AccordionDataProps[] = [
  {
    title: "Where is Treepz available?",
    content:
      "Currently, Treepz operates in several countries across Africa, including Nigeria, Kenya, Ghana, and Uganda.",
  },
  {
    title: "How does Treepz work?",
    content:
      "When you visit the Treepz website, Make a booking request via a form where you will provide your preferred service (car rental, airport shuttle, ride-hailing, or medical transport), and enter your specific needs (location, dates, passengers, etc.). Our team will reach out to give you a tarlor made service.",
  },
  {
    title: "Are there any safety measures in place? ",
    content:
      "As a renter, you can search for available cars on our platform and book the one that best fits your needs. As an owner, you can list your car on our platform, set your rental rates and availability, and earn money by renting out your vehicle.",
  },
  {
    title: "Do you offer any personal mobility solutions?",
    content: "Yes, we offer car rentals services.",
  },
  {
    title: "Can I customize solutions for my specific needs?",
    content:
      "Absolutely! We offer flexible solutions with various vehicle types, scheduling options, and accessibility features. Contact us for a personalized quote.",
  },
];

export const BoardMembers: TeamsMembersProps[] = [
  {
    src: "jane.png",
    name: "Jane Egerton-Idehen",
    title: "MD/CEO, NIGCOMSAT",
    rank: "BOARD CHAIRMAN",
    social: "https://www.linkedin.com/in/jane-egerton-idehen-6716a39/",
  },
  {
    src: "ebenzer.png",
    name: "Ebenezer Arthur",
    title: "MD, Wangara Green Ventures",
    rank: "BOARD MEMBER",
    social: "https://www.linkedin.com/in/ebenezerarthur/",
  },
  {
    src: "sunil.png",
    name: "Sunil Sharma",
    title: "MD, Techstars Toronto",
    rank: "BOARD MEMBER",
    social: "https://www.linkedin.com/in/sunilsharmats/",
  },
  {
    src: "adejare.png",
    name: "Adejare Rasheed Olaoluwa",
    title: "EX MD, Bank of Industry Limited",
    rank: "BOARD MEMBER",
    social: "https://www.linkedin.com/in/adejare-rasheed-olaoluwa-82588933/",
  },
  {
    src: "laura.png",
    name: "Laura Venasse",
    title: "Partner, LaBarge Weinstein LLP",
    rank: "BOARD MEMBER",
    social: "https://www.linkedin.com/in/laura-venasse-a56b6a5a/",
  },
];

export const FoundersData: TeamsMembersProps[] = [
  {
    src: "onyeka.png",
    name: "Onyeka Akumah",
    title: "Co-Founder/CEO",
    social: "https://www.linkedin.com/in/onyekaakumah/",
  },
  {
    src: "johnny.png",
    name: "Johnny Enagwolor",
    title: "Co-Founder & President",
    social: "https://www.linkedin.com/in/johnny-enagwolor-99b83766/",
  },
  {
    src: "afolabi.png",
    name: "Afolabi Oluseyi",
    title: "Co-Founder/VP of Products",
    social: "https://www.linkedin.com/in/oluseyi-afolabi/",
  },
  {
    src: "john.png",
    name: "John Atumeyi Shaibu",
    title: "Co-Founder/VP of Customer Engagement",
    social: "https://www.linkedin.com/in/john-atumeyi-shaibu/",
  },
];

export const CounterData: CounterProps[] = [
  {
    count: "4M+",
    text: "Customers Served",
  },
  {
    count: "900k",
    text: "Kg of Co2 emissions saved",
  },
  {
    count: "688",
    text: "Vehicles signed up",
  },
  {
    count: "16+",
    text: "Cities covered",
  },
];

export const ConferenceSolutionData: IProps[] = [
  {
    icon: <DoorToDoorIcon />,
    title: "Flexible Solutions",
    description:
      "We offer solutions that adapt to your needs - from hybrid office commuter programs to running full-time recurring charters. We can scale with you.",
  },
  {
    icon: <EmployeeSupport />,
    title: "Employee Support",
    description:
      "Dedicated customer service experts, live chats, and SMS updates, available for you at all times before and during your reservation.",
  },
  {
    icon: <ReliabilityGuarantee />,
    title: "Reliability Guarantee",
    description:
      "We offer solutions that adapt to your needs - from hybrid office commuter programs to running full-time recurring charters. We can scale with you.",
  },
  {
    icon: <Vehicles4AllOccassions />,
    title: "Vehicle Choice",
    description:
      "Our fleet of vehicles range from transit vans to motor coaches and everything in between so you can find the ideal vehicle.",
  },
];

export const NonEmeTranspUniqueData: IProps[] = [
  {
    icon: <TravelSupport247/>,
    title: "Safe and sound",
    description:
      "First and foremost, we provide safe transportation from door to door, employing drivers who will take you there in carefully designed and checked vehicles",
  },
  {
    icon: <WalletFriendlyIcon />,
    title: "We won’t waste your time or money",
    description:
      "We will not keep you waiting or make you late for appointments, and every trip can be tailored to your budget, with no fuss, no hidden extras",
  },
  {
    icon: <EmployeeSupport/>,
    title: "Speak to a real person",
    description:
      "All of our team is trained and extremely caring; they will take onboard all of your concerns and requirements to provide the best and most common sense service for you",
  },
  {
    icon: <WalletFriendlyIcon />,
    title: "Everyone is unique",
    description:
      "Whether you need a vehicle that is wheelchair-accessible or spacious enough for your vital equipment, our transportation service is completely inclusive",
  },
  {
    icon: <Support2472/>,
    title: "Comfort and convenience",
    description:
      "Your vehicle will have amenities such as comfy seating and temperature control, so you will always feel comfortable",
  },
  {
    icon: <SuppotLocalBuzIcon />,
    title: "Support local business",
    description:
      "Did you know that every journey you make will be with a local, checked, and screened driver who understands your neighborhood? So you can feel extra confidence",
  },
];

export const HealthUniqueData: IProps[] = [
  {
    icon: <SlickRides />,
    title: "Full Service Partner",
    description:
      "We offer cost-effective transportation solutions for groups of any size, tailoring our services to accommodate your special requests.",
  },
  {
    icon: <WalletFriendlyIcon />,
    title: "Personal Concierge",
    description:
      "Dedicated customer service experts, live chats, and SMS updates, available for you at all times before and during your reservation.",
  },
  {
    icon: <TravelSupport247 />,
    title: "Reliability Guarantee",
    description:
      "We make use of existing vehicles instead of adding new ones to the road, and we offset carbon by supporting projects that both prevent deforestation and create sustainable employment",
  },
  {
    icon: <WalletFriendlyIcon />,
    title: "Vehicles for All Occasions",
    description:
      "Choose from vehicles of all types and sizes: Larger buses for big groups, luxury vehicles to impress, and customized vans for any setting.",
  },
  {
    icon: <ApproveReview />,
    title: "Last Mile Shuttling",
    description:
      "A unique feature to the Treepz corporate shuttling program, we don't just leave rides to walk the last mile, we make sure the each and ever rider arrives on time to their exact destination.",
  },
  {
    icon: <SuppotLocalBuzIcon />,
    title: "Hyper-Efficient",
    description:
      "Optimized routes, ensuring efficiency for every rider, parent, and school.",
  },
];

export const WeddingPostalData: BlogProps[] = [
  {
    src: "seamless.png",
    title: "Seamless Booking Process",
    description:
      'Breathe easy, your wedding ride is covered! Choose from hundreds of vehicles and enjoy personalized itineraries for you and your guests.Leave the stress to us and focus on saying "I Do!',
  },
  {
    src: "room-entire.png",
    title: "Custom made for you",
    description:
      "We customize packages and offer diverse vehicles to match your unique vision and guest count. One stop for all your transportation needs, stress-free!",
  },
  {
    src: "always-care.png",
    title: "Detailed Experience",
    description:
      "Your dream wedding, your perfect ride. Choose from hundreds of stylish vehicles with Treepz! We offer tailored packages, live tracking, personal concierge service, and on-site support for a seamless group transportation experience.",
  },
];

export const BookingPros: PrivateTransProps[] = [
  {
    title: "Cost saving",
    desc: "Self-booking can sometimes lead to lower costs, especially for small groups or simple, one-off travel arrangements",
  },
  {
    title: "Full control",
    desc: "You have complete control over the planning, scheduling, and logistics",
  },
];

export const BookingCros: PrivateTransProps[] = [
  {
    title: "Uncertainty",
    desc: "Dealing with various service providers can lead to unpredictability, from vehicle quality to driver competence",
  },
  {
    title: "Administrative burden",
    desc: "Organizing your own group transportation can be time-consuming and may require significant effort and stress",
  },
  {
    title: "Safety concerns",
    desc: "Ensuring the safety and reliability of self-booked transportation can be challenging, not to mention accessibility",
  },
];

export const IntegrationData: PrivateTransProps[] = [
  {
    desc: "Private transportation companies ensure reliability, safety, and professionalism, giving you peace of mind throughout your journey",
  },
  {
    desc: "Skilled and trained drivers with local knowledge ensure a smooth and stress-free travel experience",
  },
  {
    desc: "Private providers offer a wide range of vehicle options to accommodate your group size and specific needs, from cars to buses and coaches",
  },
  {
    desc: "Tailored itineraries and services allow you to plan your trip according to your preferences and needs, such as requiring various pickup points",
  },
];

export const ProsData: PrivateTransProps[] = [
  {
    title: "Peace of mind",
    desc: "Private transportation companies ensure reliability, safety, and professionalism, giving you peace of mind throughout your journey",
  },
  {
    title: "Experienced drivers",
    desc: "Skilled and trained drivers with local knowledge ensure a smooth and stress-free travel experience",
  },
  {
    title: "Flexible options",
    desc: "Private providers offer a wide range of vehicle options to accommodate your group size and specific needs, from cars to buses and coaches",
  },
  {
    title: "Customization",
    desc: "Tailored itineraries and services allow you to plan your trip according to your preferences and needs, such as requiring various pickup points",
  },
  {
    title: "Budget management",
    desc: "Clear pricing and payment structures make it easier to manage your finances and avoid unexpected expenses",
  },
];

export const ConsData: PrivateTransProps[] = [
  {
    title: "Potentially higher cost",
    desc: "Private transportation companies ensure reliability, safety, and professionalism, giving you peace of mind throughout your journey",
  },
  {
    title: "Less direct control",
    desc: "You might have to rely on the company's schedules and policies rather than managing everything independently",
  },
  {
    title: "Limited spontaneity",
    desc: "There could be less room for last-minute changes or adjustments during the trip, so it’s key to choose a company that allows for life’s little changes",
  },
  {
    title: "Customization",
    desc: "Tailored itineraries and services allow you to plan your trip according to your preferences and needs, such as requiring various pickup points",
  },
];

export const AnnouncementData: AnnouncementProps[] = [
  {
    title: "Mobility start-up Treepz expands further in East Africa",
    date: "Feb 14, 2023",
    link: "https://www.cnbcafrica.com/media/6320383101112/",
  },
  {
    title:
      "Treepz Appoints Ex-Meta Senior Exec And Former Nigerian MD of Bank of Industry To Its Board",
    date: "Aug 16, 2023",
    link: "https://techlabari.com/treepz-appoints-ex-meta-senior-exec-and-former-nigerian-md-of-bank-of-industry-to-its-board/",
  },
  {
    title: "Promoting Equitable And Sustainable Transport In Africa",
    date: "May 11, 2023",
    link: "https://blog.treepz.com/treepz-promoting-equitable-and-sustainable-transport-in-africa/",
  },
];
