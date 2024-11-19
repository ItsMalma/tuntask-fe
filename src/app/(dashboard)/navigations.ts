import IconAddressBook from "@/icons/address-book";
import IconBriefcase from "@/icons/briefcase";
import IconCalendar from "@/icons/calendar";
import IconDashboard from "@/icons/dashboard";
import { Icon } from "@/icons/generic";
import IconLayoutKanban from "@/icons/layout-kanban";
import IconListCheck from "@/icons/list-check";

type Navigation = {
  href: string;
  icon: Icon;
  label: string;
};

const navigations: Navigation[] = [
  {
    href: "/",
    icon: IconDashboard,
    label: "Dasbor",
  },
  {
    href: "/projects",
    icon: IconBriefcase,
    label: "Projek",
  },
  {
    href: "/tasks",
    icon: IconListCheck,
    label: "Tugas",
  },
  {
    href: "/kanban-desk",
    icon: IconLayoutKanban,
    label: "Papan Kanban",
  },
  {
    href: "/calendar",
    icon: IconCalendar,
    label: "Kalendar",
  },
  {
    href: "/contacts",
    icon: IconAddressBook,
    label: "Kontak",
  },
];

export default navigations;
