import { TailwindMerger } from "@/lib/Utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({ className, children }: { className?: string, children: ReactNode }) => {

    return (
        <div
            className={TailwindMerger("mx-auto w-full max-w-screen-xl px-2.5 md:px-20", className)}>
            {children}
        </div>
    )
};

export default MaxWidthWrapper;