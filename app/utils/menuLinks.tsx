import {
  DirectionsCarOutlined as CarIcon,
  ConstructionOutlined as ToolsIcon,
  CarRepair as CarRepairIcon,
  ReviewsOutlined as ReviewsIcon,
  GroupsOutlined as PartnersIcon,
  PhoneOutlined as ContactIcon,
} from "@mui/icons-material";

const ICON_SIZE = "large";
export const links = [
  {
    href: "#o-firmie",
    label: "o firmie",
    icon: <CarRepairIcon fontSize={ICON_SIZE} />,
  },
  {
    href: "#realizacje",
    label: "realizacje",
    icon: <CarIcon fontSize={ICON_SIZE} />,
  },
  {
    href: "#serwis",
    label: "serwis",
    icon: <ToolsIcon fontSize={ICON_SIZE} />,
  },
  {
    href: "#partnerzy",
    label: "partnerzy",
    icon: <PartnersIcon fontSize={ICON_SIZE} />,
  },
  {
    href: "#opinie",
    label: "opinie",
    icon: <ReviewsIcon fontSize={ICON_SIZE} />,
  },
  {
    href: "#kontakt",
    label: "kontakt",
    icon: <ContactIcon fontSize={ICON_SIZE} />,
  },
];
