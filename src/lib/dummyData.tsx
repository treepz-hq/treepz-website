import XIcon from "@/assets/svgs/x-icon.svg"
import FacebookIcon from "@/assets/svgs/facebook-icon.svg"
import LinkedinIcon from "@/assets/svgs/linkedin-icon.svg"
import InstagramIcon from "@/assets/svgs/instagram-icon.svg"
import DoorToDoorIcon from "@/assets/svgs/Door-to-door.svg"
import RealSustainIcon from "@/assets/svgs/real.svg"
import GoingFurtherIcon from "@/assets/svgs/going-further.svg"
import WalletFriendlyIcon from "@/assets/svgs/wallet-friendly.svg"
import CheckableEasyIcon from "@/assets/svgs/checkable-easy-payable.svg"
import SuppotLocalBuzIcon from "@/assets/svgs/support-local-biz.svg";
import SlickRides from "@/assets/svgs/slick-rides.svg";
import EasyToBeGreen from "@/assets/svgs/easy-to-be-green.svg";
import AllAroundTheWorld from "@/assets/svgs/all-around-the-world.svg";
import ApproveReview from "@/assets/svgs/approve-review.svg";
import EmployeeSupport from "@/assets/svgs/employee-support.svg";
import ReliabilityGuarantee from "@/assets/svgs/reliablity-guarantee.svg";
import Vehicles4AllOccassions from "@/assets/svgs/vehicles-for-all-occasions.svg";
import TravelSupport247 from "@/assets/svgs/24-7-travel-support.svg";
import CleanAndComfortableIcon from "@/assets/svgs/clean-and-comfortable.svg";

interface PostalCardProps {
  src: string;
  title: string;
}[]

interface RentACarProps {
    src: string;
  title: string;
  noOfUsers: number;
}[]

interface BlogProps {
    src: string;
    title: string;
    description: string;
}[]

interface SocialProps {
    href: string;
    icon: JSX.Element
}[]

interface IProps {
  icon: JSX.Element;
  title: string;
  description: string;
}
[];
interface AccordionDataProps {
    title: string;
    content: string
}[]

interface TeamsMembersProps {
    src: string;
    name: string;
    title: string;
    rank?: string
}[]

interface CounterProps {
    count: string;
    text: string
}[]

interface footerProps {
  label: string;
  href: string;
}
[];

interface OurPartnerProps {
  src: string;
}
[];

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
  }
];

export const PostalCardData:PostalCardProps[] = [
    {
        src:"postal-1.png",
        title:"Employee Shuttle Services"
    },
    {
        src:"car-rental.png",
        title:"Car Rental Services"
    },
    {
        src:"school-transportation.png",
        title:"School Transportation"
    },
    {
        src:"conference-conventions.png",
        title:"Conference and Conventions"
    },
    {
        src:"event-transportation.png",
        title:"Event Transportation"
    },
    {
        src:"airport-transportation.png",
        title:"Airport Transportation"
    }
]

export const RentACarData:RentACarProps[] = [
    {
        src: "luxurous.png",
        title: "Luxurious",
        noOfUsers: 233
    },
    {
        src: "basic.png",
        title: "Basic",
        noOfUsers: 400
    },
    {
        src: "group.png",
        title: "Group",
        noOfUsers: 200
    }
]

export const BlogData: BlogProps[] = [
    {
        src:"easy-payment.png",
        title: "Easy Payment",
        description: "We won’t leave you hanging – every ride you book with Treepz can be tracked on our app. Run it for one-off trips or large events, and receive a bird's-eye view of all trips happening with real-time updates."
    },
    {
        src:"simple-booking.png",
        title: "Simple booking",
        description: "We won’t leave you hanging – every ride you book with Treepz can be tracked on our app. Run it for one-off trips or large events, and receive a bird's-eye view of all trips happening with real-time updates."
    },
    {
        src:"efficient-pricing.png",
        title: "Efficient pricing",
        description: "We won’t leave you hanging – every ride you book with Treepz can be tracked on our app. Run it for one-off trips or large events, and receive a bird's-eye view of all trips happening with real-time updates."
    }
]

export const solutionsLists = [
    {
        label: "Airport Shuttles",
        href: "airport-shuttles"
    },
    {
        label: "Campus Shuttles",
        href: "campus-shuttles"
    },
    {
        label: "Convention Transportation",
        href: "convention"
    },
    {
        label: "Corporate Shuttles",
        href: "corporate-shuttles"
    },
    {
        label: "Corporate Shuttle Service",
        href: "corporate-shuttles-service"
    },
    {
        label: "Event Transportation Service",
        href: "event"
    },
];

export const groupLists = [
  "For Airlines",
  "For Religious Groups",
  "For Corporate Events",
  "For School Trips",
  "For Military",
];

export const companyLists = [
    {
        href: "about",
        label: "About"
    },
    {
        href: "career",
        label: "Career"
    },
    {
        href: "press",
        label: "Press"
    },
    {
        href: "blog",
        label: "Blog"
    },
    {
        href: "terms",
        label: "Terms & Conditions"
    },
    {
        href: "privacy",
        label: "Privacy & Cookie Policy"
    },
]
export const socialMediaLists:SocialProps[] = [
    {
        href: "http://www.x.com",
        icon: <XIcon />
    },
    {
        href: "https://www.facebooks.com",
        icon: <FacebookIcon />
    },
    {
        href: "https://www.linkedin.com",
        icon: <LinkedinIcon />
    },
    {
        href: "https://www.instagram.com",
        icon: <InstagramIcon />
    }
]

export const EventUniqueData: IProps[] = [
  {
    icon: <DoorToDoorIcon />,
    title: "Feel-good rides",
    description:
      "A great event starts with an enjoyable journey. Rest assured that our vehicles are thoroughly checked and insured, can be GPS-tracked, and your drivers are screened, qualified, and experienced",
  },
  {
    icon: <RealSustainIcon />,
    title: "Real sustainability",
    description:
      "We believe in sustainability that really means something; we utilize existing vehicles so that we don’t add extra cars to the road. Also, we offset our carbon to tackle deforestation and create sustainable jobs",
  },
  {
    icon: <GoingFurtherIcon />,
    title: "Going further? On it!",
    description:
      "Our service extends beyond our borders. For complete peace of mind, you can book a vehicle from our network of carefully screened Treepz drivers, based all over the world",
  },
  {
    icon: <WalletFriendlyIcon />,
    title: "Budget-sized fees",
    description:
      "It may sound obvious, but in our opinion, you should only be charged for what you need. With Treepz, you can tailor your journey to fit your budget – no compromises, no surprises",
  },
  {
    icon: <CheckableEasyIcon />,
    title: "Visible, checkable, and easy payable",
    description:
      "Things don't need to be complicated. You can see all the information about your journey then review, approve, and pay easily",
  },
  {
    icon: <SuppotLocalBuzIcon />,
    title: "Become a Treepz local business champion",
    description:
      "Because we have a network of carefully picked drivers who are already based in your chosen area, we can always support great local business owners",
  },
];

export const EmployeeUniqueData: IProps[] = [
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

export const ConventionUniqueData: IProps[] = [
  {
    icon: <SlickRides />,
    title: "Slick rides",
    description:
      "Enjoy smooth, professional rides with our meticulously checked and insured vehicles, plus GPS-trackable journeys, and vetted, trained, and experienced drivers",
  },
  {
    icon: <EasyToBeGreen />,
    title: "Easy to be green",
    description:
      "We use existing group vehicles rather than adding new cars to the road, and we offset carbon by funding projects that prevent deforestation and create sustainable jobs",
  },
  {
    icon: <AllAroundTheWorld />,
    title: "All around the world",
    description:
      "If you have events that require travel overseas, we will help you with that too. Our network of vetted drivers is global, which sounds rather fancy but just makes sense to us",
  },
  {
    icon: <WalletFriendlyIcon />,
    title: "Flexible billing",
    description:
      "Call us radical, but we believe you should only pay for what you actually need. Tweak your requirements and adjust your costs according to your company’s budget.",
  },
  {
    icon: <ApproveReview />,
    title: "Approve, review, and pay",
    description:
      "See all the information you need about your service before you pay, so you’ll never be left in the dark",
  },
  {
    icon: <SuppotLocalBuzIcon />,
    title: "Support local business",
    description:
      "Be a fellow champion for smaller businesses by riding with our select vetted and checked pool of local drivers",
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
    icon: <AllAroundTheWorld />,
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
      "A unique feature to the Swoop corporate shuttling program, we don't just leave rides to walk the last mile, we make sure the each and ever rider arrives on time to their exact destination.",
  },
  {
    icon: <SuppotLocalBuzIcon />,
    title: "Hyper-Efficient",
    description:
      "Optimized routes, ensuring efficiency for every rider, parent, and school.",
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

export const AccordionData:AccordionDataProps[] = [
    {
        title: "Where is Treepz available?",
        content: "As a renter, you can search for available cars on our platform and book the one that best fits your needs. As an owner, you can list your car on our platform, set your rental rates and availability, and earn money by renting out your vehicle."
    },
    {
        title: "How does Treepz work?",
        content: "As a renter, you can search for available cars on our platform and book the one that best fits your needs. As an owner, you can list your car on our platform, set your rental rates and availability, and earn money by renting out your vehicle."
    },
    {
        title: "How does Treepz work?",
        content: "As a renter, you can search for available cars on our platform and book the one that best fits your needs. As an owner, you can list your car on our platform, set your rental rates and availability, and earn money by renting out your vehicle."
    },
    {
        title: "How does Treepz work?",
        content: "As a renter, you can search for available cars on our platform and book the one that best fits your needs. As an owner, you can list your car on our platform, set your rental rates and availability, and earn money by renting out your vehicle."
    },
    {
        title: "How does Treepz work?",
        content: "As a renter, you can search for available cars on our platform and book the one that best fits your needs. As an owner, you can list your car on our platform, set your rental rates and availability, and earn money by renting out your vehicle."
    },
]

export const BoardMembers:TeamsMembersProps[] = [
    {
        src:"jane.png",
        name: "Jane Egerton-Idehen",
        title: "MD/CEO, NIGCOMSAT",
        rank: "BOARD CHAIRMAN"
    },
    {
        src:"ebenzer.png",
        name: "Ebenezer Arthur",
        title: "MD, Wangara Green Ventures",
        rank: "BOARD MEMBER"
    },
    {
        src:"sunil.png",
        name: "Sunil Sharma",
        title: "MD, Techstars Toronto",
        rank: "BOARD MEMBER"
    },
    {
        src:"adejare.png",
        name: "Adejare Rasheed Olaoluwa",
        title: "EX MD, Bank of Industry Limited",
        rank: "BOARD MEMBER"
    },
    {
        src:"laura.png",
        name: "Laura Venasse",
        title: "Partner, LaBarge Weinstein LLP",
        rank: "BOARD MEMBER"
    }
]

export const FoundersData:TeamsMembersProps[] = [
    {
        src:"onyeka.png",
        name: "Onyeka Akumah",
        title: "Co-Founder/CEO",
    },
    {
        src:"johnny.png",
        name: "Johnny Enagwolor",
        title: "Co-Founder & President",
    },
    {
        src:"afolabi.png",
        name: "Afolabi Oluseyi",
        title: "Co-Founder/VP of Products",
    },
    {
        src:"john.png",
        name: "John Atumeyi Shaibu",
        title: "Co-Founder/VP of Customer Engagement",
    },
]

export const CounterData:CounterProps[] = [
    {
        count: "11k+",
        text: "Total completed bookings"
    },
    {
        count: "2k+",
        text: "Total hosts doing business on Treepz*"
    },
    {
        count: "20k+",
        text: "Vehicles listed on Treepz marketplace*"
    },
    {
        count: "12+",
        text: "African countries covered*"
    },
]

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
    icon: <SlickRides />,
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
    icon: <TravelSupport247 />,
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
    icon: <ApproveReview />,
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
      "A unique feature to the Swoop corporate shuttling program, we don't just leave rides to walk the last mile, we make sure the each and ever rider arrives on time to their exact destination.",
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
      "Worry-free. Choose from hundreds of vehicle options for any wedding transportation request. We’ll provide tailored itineraries for you and your guests before the big day.",
  },
  {
    src: "room-entire.png",
    title: "Room for the Entire Group",
    description:
      "Tailored wedding packages and a variety of vehicles for any-sized group. We’re a one-stop-shop for all your wedding transportation needs.",
  },
  {
    src: "always-care.png",
    title: "Always Care About the Details",
    description:
      "Treepz simplifies group transportation to-and-from your wedding. We provide tailored wedding packages, access to hundreds of different vehicles, live vehicle tracking, personal concierge, and the ability to add on-site support.",
  },
];
