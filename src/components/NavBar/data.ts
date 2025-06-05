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
    href: "/about",
  },
  {
    label: "Contact us",
    href: "/contact",
  },
];

export const GroupTransport: SubMenuProps[] = [
  {
    label: "Event Transportation",
    href: "/event",
  },
  {
    label: "Convention Transportation",
    href: "/convention",
  },
  {
    label: "Conference Shuttles",
    href: "/conference",
  },
];

export const SchoolTransport: SubMenuProps[] = [
  {
    label: "School Transportation",
    href: "/school-transportation",
  },
  {
    label: "Conference Shuttles",
    href: "/conference",
  },
];

export const CorporateTransportation: SubMenuProps[] = [
  {
    label: "Corporate Shuttle Service",
    href: "/corporate-shuttle-service",
  },
  {
    label: "Employee Transportation",
    href: "/employee-transportation",
  },
  {
    label: "Executive Transportation",
    href: "/executive-transportation",
  },
  // {
  //   label: "Off-Site Parking Transportation",
  //   href: "/off-siteparking-transportation",
  // },
];

export const GroundTransportation: SubMenuProps[] = [
  {
    label: "Airport Transportation",
    href: "/airport-transportation",
  },
  {
    label: "Wedding Transportation",
    href: "/wedding-transportation",
  },
  {
    label: "Executive Transportation",
    href: "/executive-transportation",
  },
  // {
  //   label: "Off-Site Parking Transportation",
  //   href: "/off-siteparking-transportation",
  // },
];

export const HealthCareTransportation: SubMenuProps[] = [
  {
    label: "Non-Emergency Medical Transportation",
    href: "/non-emergency-transportation",
  },
  {
    label: "Healthcare Shuttle",
    href: "/healthcare-transportation",
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
    href: "/airline",
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
    href: "/wedding",
  },
  {
    label: "For Governments",
    href: "/governments",
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
    href: "/university",
  },
  // {
  //   label: "For Production Crews",
  //   href: "/production-crews",
  // },
];
