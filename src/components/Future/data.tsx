import EndlessOptionsIcon from "@/assets/svgs/endless-options.svg";
import CustomizableJourneyIcon from "@/assets/svgs/customizable-journey.svg";
import WalletFriendlyIcon from "@/assets/svgs/wallet-friendly.svg";
import AlwaysSupportIcon from "@/assets/svgs/24-7-travel-support.svg";
import ReportIcon from "@/assets/svgs/report.svg";
import LargeScaleIcon from "@/assets/svgs/large-scale.svg";
import TechnologyIcon from "@/assets/svgs/technology.svg";
import SupportLocalBizIcon from "@/assets/svgs/support-local-biz.svg";

interface IProps {
    icon: JSX.Element
    title: string;
    description: string
}[]

export const FutureData: IProps[] = [
  {
    icon: <EndlessOptionsIcon />,
    title: "Endless Options",
    description:
      "A selection of hundreds of vehicles, each with professional drivers.",
  },
  {
    icon: <CustomizableJourneyIcon />,
    title: "Customizable Journeys",
    description: "Change, update, and amend. Because life happens.",
  },
  {
    icon: <WalletFriendlyIcon />,
    title: "Wallet-Friendly",
    description:
      "Five-star service at super competitive rates – and only pay for what you need.",
  },
  {
    icon: <AlwaysSupportIcon />,
    title: "24/7 Travel Support",
    description: "It’s tough planning an event – we’re just one text away.",
  },
  {
    icon: <ReportIcon />,
    title: "Analysis and Reporting",
    description: "To help you make better decisions for regular trips.",
  },
  {
    icon: <LargeScaleIcon />,
    title: "Large Scale Programs",
    description: "Events of +25k people? We’ll take care of that.",
  },
  {
    icon: <TechnologyIcon />,
    title: "24/7 Travel Support",
    description: "It’s tough planning an event – we’re just one text away.",
  },
  {
    icon: <SupportLocalBizIcon />,
    title: "24/7 Travel Support",
    description: "It’s tough planning an event – we’re just one text away.",
  },
];