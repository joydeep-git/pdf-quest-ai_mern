import React, { ReactNode } from 'react';
import Link from 'next/link';
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

import MaxWidthWrapper from './MaxWidthWrapper.tsx';
import { GradientText } from './TextHighlighters.tsx';
import { buttonVariants } from './ui/button.tsx';

import { Menu, ChevronRight } from 'lucide-react';

const Navbar = (): ReactNode => {
  return (
    <nav className='sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-20 bg-white/10 backdrop-blur-lg transition-all'>

      <MaxWidthWrapper>

        <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
          <span className='flex z-40 font-semibold gap-1 md:gap-2 flex-row h-max items-baseline'>

            <GradientText>
              <Link href='/' className='text-xl rounded-sm'>PDFQuest</Link>
            </GradientText>

            <span className='text-xs float-end bottom-0 left-0 top-1 right'>
              by ElecDroid
            </span>

          </span>

          <div className='hidden items-center space-x-4 sm:flex'>

            <Link
              href='/pricing'
              className={buttonVariants({
                variant: 'ghost',
                size: 'sm',
              })}>
              Pricing
            </Link>

            <LoginLink
              className={buttonVariants({
                variant: 'ghost',
                size: 'sm',
              })}>
              Sign in
            </LoginLink>

            <RegisterLink
              className={buttonVariants({
                size: 'sm',
              })}>
              Get Started
              <ChevronRight className="ml-1.5 h-6 w-6" />
            </RegisterLink>

          </div>
        </div>

      </MaxWidthWrapper>

    </nav>
  )
};

export default Navbar;