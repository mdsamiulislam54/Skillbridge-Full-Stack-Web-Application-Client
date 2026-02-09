"use client";

import { AlignVerticalSpaceBetween, Book, Menu, Sunset, Trees, Zap } from "lucide-react";

import { cn } from "@/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { ModeToggle } from "@/components/modules/Darkmode/darkmode";
import { useClientSession } from "@/hook/authentication/useClientSession";
import Image from "next/image";
import useSignOut from "@/hook/authentication/useSign-Out";
import { Spinner } from "@/components/ui/spinner";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  className?: string;
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
    className?: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: {
      title: string;
      url: string;
    };
    signup: {
      title: string;
      url: string;
    };
  };
}

const Navbar = ({

  menu = [
    { title: "Home", url: "/" },
    { title: "Browse Tutors", url: "/tutor" },
    { title: "About", url: "/about" },
    { title: "Dashboard", url: "/dashboard" }


  ],
  auth = {
    login: { title: "Login", url: "/auth/login" },
    signup: { title: "Register", url: "/auth/register" },

  },
  className,
}: Navbar1Props) => {
  const { user, isAuthenticated, isPending } = useClientSession();

  const { mutate, isPending: signOutIsPending, reset } = useSignOut()
  const handaleSignOut = () => {
    mutate();
    reset();
 
  }

  return (
    <section className={cn("py-4", className)}>
      <div className="container px-4 mx-auto">

        {/* Desktop Menu */}

        <nav className="hidden items-center justify-between lg:flex">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <Link href={'/'} className="flex items-center gap-2">
              <AlignVerticalSpaceBetween />
              <span className="text-lg font-semibold tracking-tighter">
                SkillBridge
              </span>
            </Link>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          {
            isAuthenticated ? (
              <div className="flex items-center gap-4">

                <ModeToggle />
                {isPending ? (
                  <div>Loading...</div>
                ) : (
                  <Link href={'/dashboard'} title="Dashboard" className="flex items-center gap-3">
                    <span>{user?.name}</span>
                    <Image src={user?.image || 'http://localhost:3000/_next/static/media/teaching.ba59945d.svg'} alt="Profile" width={32} height={32} className="rounded-full" />
                  </Link>
                )}
                <Button onClick={handaleSignOut} variant="outline" size="sm" className="cursor-pointer">
                  {
                    signOutIsPending ? <Spinner /> : "Sign Out"
                  }
                </Button>

              </div>
            ) : (
              <div className="flex gap-2">
                <ModeToggle />
                <Button asChild variant="outline" size="sm">
                  <Link href={auth.login.url}>{auth.login.title}</Link>
                </Button>
                <Button asChild size="sm">
                  <Link href={auth.signup.url}>{auth.signup.title}</Link>
                </Button>
              </div>
            )

          }
        </nav>

        {/* Mobile Menu */}

        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href={'/'} className="flex items-center gap-2">
              <AlignVerticalSpaceBetween />
              <span className="text-lg font-semibold tracking-tighter">
                SkillBridge
              </span>
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <Link href={'/'} className="flex items-center gap-2">
                      <AlignVerticalSpaceBetween />
                      <span className="text-lg font-semibold tracking-tighter">
                        SkillBridge
                      </span>
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>
                  {
                    isAuthenticated ? (
                      <div>
                        <div className="flex items-center gap-4">
                          <Link href={'/dashboard'} title="Dashboard">
                            <Image src={user?.image || 'http://localhost:3000/_next/static/media/teaching.ba59945d.svg'} alt="Profile" width={32} height={32} className="rounded-full" />
                          </Link>
                          <ModeToggle />
                        </div>
                        <Button onClick={handaleSignOut} variant="outline" size="sm" className="cursor-pointer">
                          {
                            signOutIsPending ? <Spinner /> : "Sign Out"
                          }
                        </Button>
                      </div>
                    ) : (

                      <div className="flex flex-col gap-3">
                        <Button asChild variant="outline">
                          <Link href={auth.login.url}>{auth.login.title}</Link>
                        </Button>
                        <Button asChild>
                          <Link href={auth.signup.url}>{auth.signup.title}</Link>
                        </Button>
                      </div>

                    )
                  }
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <Link
        href={item.url}
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
      >
        {item.title}
      </Link>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </a>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <Link
      className="flex min-w-80 flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
      href={item.url}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-sm leading-snug text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </Link>
  );
};

export { Navbar };
