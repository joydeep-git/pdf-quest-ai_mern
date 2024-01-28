import clsx, { ClassValue } from "clsx";

import { twMerge } from "tailwind-merge";

export const TailwindMerger = (...inputs: ClassValue[]): string => {

    return twMerge(clsx(inputs));

};