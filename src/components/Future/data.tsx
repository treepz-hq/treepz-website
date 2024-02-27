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
    title: "Unlimited Choices",
    description:
      "We have a selection of hundreds of vehicles, each with professional drivers.",
  },
  {
    icon: <CustomizableJourneyIcon />,
    title: "Incident Proof",
    description:
      "We change, update, and service our vehicles to get them incident ready. ",
  },
  {
    icon: <WalletFriendlyIcon />,
    title: "Budget-Friendly",
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
    title: "Data Driven",
    description: "We help you make informed decisions for regular trips.",
  },
  {
    icon: <LargeScaleIcon />,
    title: "Comprehensive Projects",
    description: "We take care of events of any scale.",
  },
  {
    icon: <TechnologyIcon />,
    title: "Cutting-edge Technology",
    description: "We have advanced technologies to give you the best experience.",
  },
  {
    icon: <SupportLocalBizIcon />,
    title: "Community Driven",
    description: "We work with business owners in your community.",
  },
];