"use client";

import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card.tsx";
import { ReactNode, useState } from "react";

import { Card, CardContent } from "@/components/ui/card.tsx";

import { XCircle } from "lucide-react";

const AboutCard = (
  { title, content, icon }:
    {
      title: string;
      content: ReactNode;
      icon?: ReactNode;
    }) => {

  const [openTab, setOpenTab] = useState(false);

  const handleClick = (): void => {
    setOpenTab(!openTab);
  };

  return (
    <div
      className="hover:underline p-0 decoration-black m-1.5 cursor-pointer w-fit"
      onClick={handleClick}>
      <HoverCard openDelay={100} closeDelay={0} open={openTab}>
        <HoverCardTrigger className="flex flex-row items-center  gap-3">
          {openTab ? "CLOSE" : title } { openTab ? <XCircle /> : icon }
        </HoverCardTrigger>
        <HoverCardContent className="w-fit p-1 border-2 border-black mb-6 shadow-lg">{content}</HoverCardContent>
      </HoverCard>
    </div>
  );
};

export { AboutCard };