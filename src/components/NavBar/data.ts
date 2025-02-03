interface MenuDataProps {
  label: string;
  href: string;
  hasSubMenu?: boolean;
  type?: string;
}

interface SubMenuProps {
  label: string;
  href: string;
}
[];

export const NavMenu: MenuDataProps[] = [
  {
    label: "Solutions",
    href: "",
    hasSubMenu: true,
    type: "solutions"
  },
  {
    label: "Group Transportation Services",
    href: "",
    hasSubMenu: true,
    type: "group"
  },
  {
    label: "About us",
    href: "/about.html",
  },
  {
    label: "Contact us",
    href: "/contact.html",
  },
];

export const GroupTransport: SubMenuProps[] = [
  {
    label: "Event Transportation",
    href: "/event.html",
  },
  {
    label: "Convention Transportation",
    href: "/convention.html",
  },
  {
    label: "Conference Shuttles",
    href: "/conference.html",
  },
];

export const SchoolTransport: SubMenuProps[] = [
  {
    label: "School Transportation",
    href: "/school-transportation.html",
  },
  {
    label: "Conference Shuttles",
    href: "/conference.html",
  },
];

export const CorporateTransportation: SubMenuProps[] = [
  {
    label: "Corporate Shuttle Service",
    href: "/corporate-shuttle-service.html",
  },
  {
    label: "Employee Transportation",
    href: "/employee-transportation.html",
  },
  {
    label: "Executive Transportation",
    href: "/executive-transportation.html",
  },
  // {
  //   label: "Off-Site Parking Transportation",
  //   href: "/off-siteparking-transportation",
  // },
];

export const GroundTransportation: SubMenuProps[] = [
  {
    label: "Airport Transportation",
    href: "/airport-transportation.html",
  },
  {
    label: "Wedding Transportation",
    href: "/wedding-transportation.html",
  },
  {
    label: "Executive Transportation",
    href: "/executive-transportation.html",
  },
  // {
  //   label: "Off-Site Parking Transportation",
  //   href: "/off-siteparking-transportation",
  // },
];

export const HealthCareTransportation: SubMenuProps[] = [
  {
    label: "Non-Emergency Medical Transportation",
    href: "/non-emergency-transportation.html",
  },
  {
    label: "Healthcare Shuttle",
    href: "/healthcare-transportation.html",
  },
  // {
  //   label: "Elderly Transportation Services",
  //   href: "/elderly-transportation",
  // },
  // {
  //   label: "Off-Site Parking Transportation",
  //   href: "/off-siteparking-transportation",
  // },
];

export const TransitAgencyTransportation: SubMenuProps[] = [
  // {
  //   label: "Transit Agency Transport",
  //   href: "/transit-agency-transportation",
  // },
];

export const GroupFirstColumn: SubMenuProps[] = [
  {
    label: "For Airline",
    href: "/airline.html",
  },
  // {
  //   label: "For Corporate Events",
  //   href: "/corporate-events",
  // },
  // {
  //   label: "For Military",
  //   href: "/military",
  // },
  // {
  //   label: "For Private Events",
  //   href: "/private-events",
  // },
  {
    label: "For Wedding",
    href: "/wedding.html",
  },
  {
    label: "For Governments",
    href: "/governments.html",
  },
];

export const GroupSecondColumn: SubMenuProps[] = [
  // {
  //   label: "For Religious Groups",
  //   href: "/religious",
  // },
  // {
  //   label: "For School Trips",
  //   href: "/school-trips",
  // },
  // {
  //   label: "For School Team",
  //   href: "/school-team",
  // },
  {
    label: "For University",
    href: "/university.html",
  },
  // {
  //   label: "For Production Crews",
  //   href: "/production-crews",
  // },
];
