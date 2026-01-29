import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import TeachingImage from '@/media/teaching.svg';
import Image from "next/image";
interface Hero47Props {
  heading?: string;
  subheading?: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
  };
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  className?: string;
}

const Hero47 = ({
  heading = "Unlock Your Potential",
  subheading = ", Master New Skills Today",
  description = "SkillBridge connects passionate learners with expert tutors worldwide. Dive into interactive courses, personalized mentoring, and hands-on projects that transform your career. Start your learning journey today!",
  buttons = {
    primary: {
      text: "Get Started",
      url: "/tutor",
    },
    secondary: {
      text: "contact us",
      url: "/contact",
    },
  },

  className,
}: Hero47Props) => {
  return (
    <section className={cn("bg-background py-20 lg:py-10", className)}>
      <div className="container px-4 mx-auto flex flex-col items-center gap-10 lg:my-0 lg:flex-row">
        <div className="flex flex-col gap-7 lg:w-2/3">
          <h2 className="text-5xl font-semibold text-foreground md:text-5xl lg:text-8xl">
            <span>{heading}</span>
            <span className="text-muted-foreground">{subheading}</span>
          </h2>
          <p className="text-base text-muted-foreground md:text-lg lg:text-xl">
            {description}
          </p>
          <div className="flex flex-wrap items-start gap-5 lg:gap-7">
            <Button asChild>
              <a href={buttons.primary?.url}>
                <div className="flex items-center gap-2">
                  <ArrowUpRight className="size-4" />
                </div>
                <span className="pr-6 pl-4 text-sm whitespace-nowrap lg:pr-8 lg:pl-6 lg:text-base">
                  {buttons.primary?.text}
                </span>
              </a>
            </Button>
            <Button asChild variant="link" className="underline">
              <a href={buttons.secondary?.url}>{buttons.secondary?.text}</a>
            </Button>
          </div>
        </div>
        <div className="relative z-10">
          <div className="">
            <Image
              src={TeachingImage}
              alt="Teaching"
              width={768}
              height={512}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export { Hero47 };
