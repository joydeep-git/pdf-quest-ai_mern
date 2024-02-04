import {HoverCard, HoverCardContent, HoverCardTrigger} from "@/components/ui/hover-card.tsx";
import {ReactNode} from "react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel.tsx";

import {Card, CardContent} from "@/components/ui/card.tsx";

const AboutCard = (
    {title, content, icon}:
        {
            title: string;
            content: ReactNode;
            icon?: ReactNode;
        }) => {
    return (
        <div className="hover:underline decoration-black m-1.5 cursor-pointer w-fit">
            <HoverCard openDelay={500} closeDelay={500} >
                <HoverCardTrigger className="flex flex-row items-center  gap-3">{title} {icon}</HoverCardTrigger>
                <HoverCardContent className="w-fit">{content}</HoverCardContent>
            </HoverCard>
        </div>
    );
};

export {AboutCard};