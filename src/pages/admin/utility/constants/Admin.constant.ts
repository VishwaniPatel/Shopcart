import { RoutesEnum } from "../../../../core/utility/enums/core.enum";
import {
  IconLayoutDashboardFilled,
  IconDeviceDesktopAnalytics,
} from "@tabler/icons-react";
export const SidebarListItem = [
  {
    icon: IconLayoutDashboardFilled,
    redirectTo: RoutesEnum.DASHBOARD,
    label: "Dashboard",
  },
  {
    icon: IconDeviceDesktopAnalytics,
    redirectTo: RoutesEnum.FRONTEND,
    label: "Frontend",
  },
];
