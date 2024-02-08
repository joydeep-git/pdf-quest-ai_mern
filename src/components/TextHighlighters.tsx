import React, { ReactNode } from 'react';
import {TailwindMerger} from "@/lib/Utilities";

const GradientText = ({ children, cssStyles }: { children: ReactNode, cssStyles?: string }) => {
    return (
        <span className={TailwindMerger('bg-gradient-to-r from-indigo-500 via-sky-500 via-30% to-emerald-500 text-transparent bg-clip-text', cssStyles)}>
            {children}
        </span>
    );
};

export { GradientText };