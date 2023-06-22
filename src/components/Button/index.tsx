import * as React from "react";

type TButton = {
  characters?: string;
  className?: string;
  onClick?: () => void;
  icon?: string;
  size?: string;
};

export const Button = ({ characters, className, onClick }: TButton) => {
  return (
    <button onClick={onClick} className={className}>
      {characters}
    </button>
  );
};
