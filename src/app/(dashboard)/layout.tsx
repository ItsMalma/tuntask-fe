"use client";

import { Indicator, IndicatorCircle } from "@/components/indicator";
import LoadableImage from "@/components/loadable-image";
import Logo from "@/components/logo";
import IconBell from "@/icons/bell";
import IconMenu from "@/icons/menu";
import IconMessage from "@/icons/message";
import IconSearch from "@/icons/search";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";
import navigations from "./navigations";

export default function DashboardLayout(props: PropsWithChildren) {
  const pathname = usePathname();

  return (
    <div className="h-screen max-h-screen flex">
      <aside className="sticky top-0 left-0 w-[16.8055556%] max-h-screen flex flex-col border-t-2 border-r-2 border-background-dark">
        <div className="h-16 flex justify-center items-center">
          <Logo />
        </div>
        {navigations.map((navigation) => (
          <Link
            key={navigation.href}
            href={navigation.href}
            aria-selected={pathname === navigation.href}
            className="group h-16 flex px-7 items-center gap-4 text-secondary aria-selected:bg-background aria-selected:border-l-2 aria-selected:border-primary"
          >
            <navigation.icon className="size-5 group-aria-selected:text-primary" />
            <p className="text-sm uppercase group-aria-selected:font-medium">
              {navigation.label}
            </p>
          </Link>
        ))}
      </aside>
      <main className="w-full flex flex-col">
        <header className="h-16 flex justify-between px-7 border-y-2 border-background-dark">
          <div className="flex items-center gap-5">
            <button>
              <IconMenu className="size-6 text-secondary" />
            </button>
            <h3 className="text-primary-dark">Dasbor</h3>
          </div>
          <div className="flex items-center gap-5">
            <button className="flex items-center gap-3 text-secondary">
              <IconSearch className="size-6" />
              <p className="text-md">Cari tugas dan lain-lain</p>
            </button>
            <button>
              <Indicator>
                <IconMessage className="size-6 text-secondary" />
                <IndicatorCircle className="text-green" />
              </Indicator>
            </button>
            <button>
              <Indicator>
                <IconBell className="size-6 text-secondary" />
                <IndicatorCircle className="text-pink" />
              </Indicator>
            </button>
            <button>
              <LoadableImage
                src="https://i.pravatar.cc/"
                alt="Avatar"
                width={36}
                height={36}
                className="rounded-full"
              />
            </button>
          </div>
        </header>
        {props.children}
        <footer className="h-16 flex justify-between items-center px-7 sticky bottom-0 text-secondary-dark">
          <p>&copy; 2024 Malma - All Rights Reserved.</p>
        </footer>
      </main>
    </div>
  );
}
