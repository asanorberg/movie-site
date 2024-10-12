const buttonColor = {
  primary:
    "whitespace-nowrap bg-lightpurple border-none text-white enabled:hover:bg-purple-600 enabled:active:bg-purple-700 disabled:opacity-50",
  secondary:
    "whitespace-nowrap bg-lightpink border-none text-white enabled:hover:bg-purple-50 enabled:active:bg-purple-100 disabled:opacity-50",
  textbutton:
    "whitespace-nowrap bg-white uppercase bg-opacity-10 text-palepink border-none enabled:hover:text-purple-700 enabled:active:text-purple-400 disabled:opacity-50",
};

const sizes = {
  xs: "text-xs px-2 py-1 h-6 min-w-18",
  sm: "text-sm px-3 py-2 h-7",
  md: "text-base px-4 py-4 h-8",
  lg: "text-[1rem] tracking-wide py-6 w-60 h-9",
  full: "text-[1rem] tracking-wide py-6 h-9",
};

const Button = ({ size, color, children, disabled }) => {
  return (
    <button
      className={`rounded-xl flex flex-col justify-center items-center ${sizes[size]} ${buttonColor[color]}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
