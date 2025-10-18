'use client';
import Image from 'next/image';

import { AppContainer } from '@/components/common/AppContainer/AppContainer';
import Link from 'next/link';
import { Typography } from '@/components/common/Typography/Typography';
import { Button } from '@/components/ui/Button/Button';

export const Header = () => {
  return (
    <header
      className={
        'mt-3 mb-[45px] md:mt-8 md:mb-[110px] 2xl:mt-[50px] 2xl:mb-[140px]'
      }
    >
      <AppContainer>
        <div
          className={
            'flex items-center justify-between 2xl:rounded-2xl 2xl:px-[30px] 2xl:py-4 2xl:shadow-[0_0_66.6px_0_rgba(29,78,216,0.27)] 2xl:backdrop-blur-[70px]'
          }
        >
          <Link href="/" className={'outline-0'}>
            <Image
              src="/common/logo.svg"
              alt="Devzilla company logotype"
              width={112}
              height={32}
              priority
            />
          </Link>
          <nav className="hidden 2xl:block">
            <ul className="flex gap-[60px]">
              <li>
                <a
                  href="#about"
                  className="hover:text-green focus:text-green py-6 outline-0 transition-colors duration-300 ease-in"
                >
                  <Typography variant="bodyMed" as="span">
                    About us
                  </Typography>
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-green focus:text-green py-6 outline-0 transition-colors duration-300 ease-in"
                >
                  <Typography variant="bodyMed" as="span">
                    Services
                  </Typography>
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-green focus:text-green py-6 outline-0 transition-colors duration-300 ease-in"
                >
                  <Typography variant="bodyMed" as="span">
                    Portfolio
                  </Typography>
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-green focus:text-green py-6 outline-0 transition-colors duration-300 ease-in"
                >
                  <Typography variant="bodyMed" as="span">
                    Contact
                  </Typography>
                </a>
              </li>
            </ul>
          </nav>
          <button
            type={'button'}
            onClick={() => {}}
            className={'flex items-center justify-center 2xl:hidden'}
          >
            <Image
              // className="dark:invert"
              src="/header/mobileBurger.svg"
              alt="Burger menu icon"
              width={40}
              height={40}
              priority
            />
          </button>
          <Button>
            <Typography variant="bodyMed">Build with us</Typography>
          </Button>
        </div>
      </AppContainer>
    </header>
  );
};
