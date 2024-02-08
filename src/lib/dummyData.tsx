import XIcon from "@/assets/svgs/x-icon.svg"
import FacebookIcon from "@/assets/svgs/facebook-icon.svg"
import LinkedinIcon from "@/assets/svgs/linkedin-icon.svg"
import InstagramIcon from "@/assets/svgs/instagram-icon.svg"

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