import MaxWidthWrapper from "@/components/MaxWidthWrapper.tsx";
import {GradientText} from "@/components/TextHighlighters.tsx";
import { buttonVariants } from "@/components/ui/button.tsx";
import {ChevronRight, Info} from 'lucide-react';
import Link from "next/link";
import {AboutCard } from "@/components/ShadcnUtils";

export default function Home() {
    return (
        <>
            <MaxWidthWrapper
                className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">

                <div
                    className="mx-auto m-6 md:m-10 lg:m-12 flex max-w-fit items-center justify-center space-x-2 overflow-hidden border border-gray-200 rounded-full bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50 cursor-pointer">

                    <p className="text-lg text-slate-800 font-semibold">
                        <GradientText cssStyles="text-xl md:text-2xl font-semibold">Quest AI</GradientText> is live NOW!
                    </p>

                </div>

                <h1 className="max-w-7xl text-4xl font-bold md:text-5xl lg:text-6xl text-center">
                    Now your <GradientText cssStyles="line-through">PDFs</GradientText> can reply,
                    <br/>
                    <span className="line-through text-slate-700">unlike your Crush</span>
                </h1>

                <p className="text-base md:text-xl mt-10 font-light">

                    <span className="text-black font-medium">Your Documents do not just exist, they engage.</span>

                    <br/>

                    Just upload documents and start asking questions.

                    <br/>

                    <span className="font-medium">Quest AI</span> loves human, promise.
                </p>

                <Link href="/dashboard"
                      target="_blank"
                      className={buttonVariants({size: "lg", className: "mt-7"})}>
                    Get Started <ChevronRight className="ml-2 h-5 w-5"/>
                </Link>

                <AboutCard title={"How it works"}
                           content={<iframe width="560" height="315"
                                            src="https://www.youtube-nocookie.com/embed/BZP1rYjoBgI?si=PZNX3L4BjUPKMDbw"
                                            title="YouTube video player"
                                            allow="accelerometer; loop; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen></iframe>}
                           icon={<Info />}/>

            </MaxWidthWrapper>

            {/*<div>*/}
            {/*    Display project overview*/}
            {/*</div>*/}
        </>
    );
};