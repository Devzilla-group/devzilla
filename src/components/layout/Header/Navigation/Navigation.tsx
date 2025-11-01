import { Typography } from '@/components/common/Typography/Typography';
import { headerNavigationData } from '@/mockData/headerNavigationData/headerNavigationData';

export const Navigation = () => {
  return (
    <nav className="hidden 2xl:block">
      <ul className="flex gap-[60px]">
        {headerNavigationData.map(({ id, text }) => {
          return (
            <li key={id}>
              <a
                href={id}
                className="hover:text-green focus:text-green py-6 text-black outline-0 transition-colors duration-300 ease-in"
              >
                <Typography variant="bodyMed" as="span">
                  {text}
                </Typography>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
