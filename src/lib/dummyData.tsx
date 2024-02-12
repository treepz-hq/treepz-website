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
  "Airport Shuttles",
  "Campus Shuttles",
  "Conference Shuttles",
  "Convention Transportation",
  "Corporate Shuttles",
  "Corporate Shuttle Service",
  "Event Transportation Service",
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