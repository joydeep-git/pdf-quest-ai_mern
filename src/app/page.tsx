import MaxWidthWrapper from "@/components/MaxWidthWrapper.tsx";
import { GradientText } from "@/components/TextHighlighters.tsx";
import { buttonVariants } from "@/components/ui/button.tsx";
import { ChevronRight, Info } from 'lucide-react';
import { AboutCard } from "@/components/ShadcnUtils";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";

export default function Home() {

  return (
    <>
      <MaxWidthWrapper
        className="mb-12 mt-20 flex flex-col items-center justify-center text-center px-1">

        <div
          className="mx-auto text m-6 md:m-10 lg:m-12 flex max-w-fit items-center justify-center space-x-2 overflow-hidden border border-gray-200 rounded-full bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50 cursor-pointer">

          <div className="flex gap-2 items-center justify-center">
            <GradientText cssStyles="text-base md:text-xl font-semibold">Quest AI</GradientText>
            <span className="text-sm md:text-base text-slate-800 font-semibold">is live NOW!</span>
          </div>

        </div>

        <h1 className="max-w-7xl text-[1.5rem] sm:text-3xl md:text-5xl font-bold lg:text-6xl text-center">
          Now your <GradientText cssStyles="line-through">PDFs</GradientText> can reply
          <br />
          <span className="line-through text-slate-700">unlike your Crush</span>
        </h1>

        <p className="text-xs md:text-base mt-10 font-light px-0 sm:px-2">

          <span className="text-black font-medium">Your Documents do not just exist, they engage.</span>

          <br />

          Just upload documents and start asking questions.

          <br />

          <span className="font-medium">Quest AI</span> loves human, Promise
        </p>

        <RegisterLink
          className={buttonVariants({ size: "lg", className: "mt-7" })}>
          Get Started <ChevronRight className="ml-2 h-5 w-5" />
        </RegisterLink>

        <AboutCard title={"How it works"}
          content={<iframe width="400" height="260"
            src="https://www.youtube-nocookie.com/embed/BZP1rYjoBgI?si=PZNX3L4BjUPKMDbw"
            title="YouTube video player"
            allow="accelerometer; loop; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>}
          icon={<Info />} />

      </MaxWidthWrapper>

      {/*<div>*/}
      {/*    Display project overview*/}
      {/*</div>*/}
    </>
  );
};