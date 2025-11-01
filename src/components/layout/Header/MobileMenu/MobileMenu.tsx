import { FC, useCallback, useEffect, useState } from 'react';

import { Button } from '@/components/ui/Button/Button';
import { CrossIcon } from '@/components/icons/CrossIcon';
import { Typography } from '@/components/common/Typography/Typography';
import { TMobileMenuProps } from '@/components/layout/Header/MobileMenu/mobileMenu.types';

import { headerNavigationData } from '@/mockData/headerNavigationData/headerNavigationData';

export const MobileMenu: FC<TMobileMenuProps> = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => onClose(), 300);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    setIsVisible(true);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleClose]);

  return (
    <div
      className={[
        'fixed inset-0 z-[99] bg-black/40 transition-opacity duration-300',
        isVisible ? 'opacity-100' : 'opacity-0',
      ].join(' ')}
      onClick={handleClose}
    >
      <div
        className={`absolute top-0 right-0 h-full w-[80%] max-w-[300px] transform overflow-auto rounded-l-xl bg-black p-6 px-10 pt-20 shadow-[0_0_40px_rgba(0,0,0,0.4)] transition-transform duration-300 ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="group absolute top-3 right-4"
          aria-label="Close mobile menu button"
        >
          <CrossIcon className="fill-grey group-hover:fill-green group-focus:fill-green h-8 w-8 transition-colors duration-300" />
        </button>

        <nav className="mb-5">
          <ul className="flex flex-col gap-5">
            {headerNavigationData.map(({ id, text }) => (
              <li key={id}>
                <a
                  href={id}
                  className="hover:text-green focus:text-green text-white transition-colors duration-300 ease-in"
                >
                  <Typography variant="bodyMed" as="span">
                    {text}
                  </Typography>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <Button>Build with us</Button>
      </div>
    </div>
  );
};
