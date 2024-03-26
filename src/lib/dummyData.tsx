import XIcon from "@/assets/svgs/x-icon.svg";
import FacebookIcon from "@/assets/svgs/facebook-icon.svg";
import LinkedinIcon from "@/assets/svgs/linkedin-icon.svg";
import InstagramIcon from "@/assets/svgs/instagram-icon.svg";
import DoorToDoorIcon from "@/assets/svgs/Door-to-door.svg";
import RealSustainIcon from "@/assets/svgs/real.svg";
import GoingFurtherIcon from "@/assets/svgs/going-further.svg";
import WalletFriendlyIcon from "@/assets/svgs/wallet-friendly.svg";
import CheckableEasyIcon from "@/assets/svgs/checkable-easy-payable.svg";
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
    src: "postal-1.png",
    title: "Airline",
    href: "airline",
  },
  {
    src: "car-rental.png",
    title: "Religious groups",
  },
  {
    src: "school-transportation.png",
    title: "Corporate events",
    href: "school-transportation",
  },
  {
    src: "school-transportation.png",
    title: "School trips",
    href: "school-transportation",
  },
  {
    src: "event-transportation.png",
    title: "Private events",
  },
  {
    src: "airport-transportation.png",
    title: "University",
    href: "university",
  },
  {
    src: "airport-transportation.png",
    title: "Sporting teams",
  },
  {
    src: "airport-transportation.png",
    title: "Military",
  },
  {
    src: "airport-transportation.png",
    title: "Production crews",
  },
  {
    src: "airport-transportation.png",
    title: "Weddings",
  },
  {
    src: "airport-transportation.png",
    title: "Government",
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
  // {
  //   label: "Airport Shuttles",
  //   href: "airport-shuttles",
  // },
  // {
  //   label: "Campus Shuttles",
  //   href: "campus-shuttles",
  // },
  {
    label: "Convention Transportation",
    href: "convention",
  },
  // {
  //   label: "Corporate Shuttles",
  //   href: "corporate-shuttles",
  // },
  // {
  //   label: "Corporate Shuttle Service",
  //   href: "corporate-shuttles-service",
  // },
  {
    label: "Event Transportation Service",
    href: "event",
  },
];

export const groupLists = [
  { label: " For Airlines ", href: "airline" },
  { label: "For Corporate Events", href: "event" },
  { label: "For School Trips", href: "university" },
  ,
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
  // {
  //   href: "terms",
  //   label: "Terms & Conditions",
  // },
  // {
  //   href: "privacy",
  //   label: "Privacy & Cookie Policy",
  // },
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
    title: "We do the checks so you don’t have to",
    description:
      "Our focus is providing you with the safest transportation possible, so we regularly check all our vehicles and drivers to keep you safe and secure on every journey",
  },
  {
    icon: <RealSustainIcon />,
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
    icon: <WalletFriendlyIcon />,
    title: "Sit back, relax…",
    description:
      "Begin to unwind from the moment you get into the vehicle. Everything is taken care of, and you can even plug into our WiFi and Bluetooth for extra convenience",
  },
  {
    icon: <CheckableEasyIcon />,
    title: "A team that understands",
    description:
      "At Treepz, we take pride in leading the industry with outstanding customer experience. Whether it is choosing you shuttle or customizing your personal information, we make sure that each ride is perfectly tailored to each rider.",
  },
  {
    icon: <SuppotLocalBuzIcon />,
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
      "Swoop only works with trusted transportation operators across the US, with well-presented vehicles and 5-star drivers behind the wheel",
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
      "A unique feature to the Swoop corporate shuttling program, we don't just leave rides to walk the last mile, we make sure the each and ever rider arrives on time to their exact destination.",
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
    icon: <SuppotLocalBuzIcon />,
    title: "Attentive and secure",
    description:
      "We provide safe campus to campus buses. We regularly inspect our vehicles and drivers to ensure comfort and safety on every trip",
  },
  {
    icon: <RealSustainIcon />,
    title: "All aboard",
    description:
      "Our campus-to-campus bus service guarantees accessibility for everyone, with ample space for study materials, bags, and those with special accessibility needs",
  },
  {
    icon: <CleanAndComfortableIcon />,
    title: "Meeting your budget",
    description:
      "We know that as a university, you're often working within tight budgets, so we only give you the service you need and offer discounts for student groups and faculty",
  },
  {
    icon: <WalletFriendlyIcon />,
    title: "A relaxing experience",
    description:
      "We understand that a calm mind is essential for academic success, so our vehicles always arrive on time, equipped with all the modern amenities needed to relax or study",
  },
  {
    icon: <CheckableEasyIcon />,
    title: "World-class team",
    description:
      "When it comes to student shuttle services, reliability and efficiency are crucial. Our trained team ensures that you reach your destination on time, every time",
  },
  {
    icon: <DoorToDoorIcon />,
    title: "Support local business owners",
    description:
      "Each journey you take with Treepz is taken care of by a local, vetted driver who knows your neighborhood and surrounding areas.",
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
    count: "1.2M+",
    text: "Passenger trips completed",
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

