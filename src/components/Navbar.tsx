import React, { ReactNode } from 'react';
import Link from 'next/link';
import { RegisterLink, LoginLink } from '@kinde-oss/kinde-auth-nextjs/server';

// COMPONENTS
import MaxWidthWrapper from './MaxWidthWrapper.tsx';
import { GradientText } from './TextHighlighters.tsx';
import { buttonVariants } from './ui/button.tsx';

// ICON
import { Menu, ArrowRight } from 'lucide-react';

const Navbar = (): ReactNode => {
    return (
        <nav className='sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>

            <MaxWidthWrapper>

                <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
                    <Link
                        className='flex z-40 font-semibold'
                        href='/'>

                        <GradientText>PDFQuest</GradientText>

                    </Link>

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
                            Get started{' '}
                            <ArrowRight className='ml-1.5 h-5 w-5' />
                        </RegisterLink>

                    </div>
                </div>


            </MaxWidthWrapper>

        </nav>
    )
};

export default Navbar;