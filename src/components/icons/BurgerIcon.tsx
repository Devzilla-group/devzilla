export const BurgerIcon = ({
  className,
  width = 40,
  height = 40,
}: {
  className?: string;
  width?: number;
  height?: number;
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="40" height="40" />
    <path
      d="M5.23438 9.5957L36.6386 9.59571"
      stroke="#091908"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M5.23438 20.9362L36.6386 20.9362"
      stroke="#091908"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M5.23438 32.2766L36.6386 32.2766"
      stroke="#091908"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
