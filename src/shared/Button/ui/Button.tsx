import { FC } from 'react';
import { ModeColor, choseClass } from '../lib/choseClass';

interface ButtonProps {
  text: string;
  mode?: ModeColor;
  handelClick?: () => void | undefined;
  type?: ButtonType;
}

type ButtonType = 'button' | 'submit';

export const Button: FC<ButtonProps> = ({ text, mode, handelClick, type }) => {
  const typeChange = (): ButtonType => (type ? type : 'button');

  return (
    <button
      type={typeChange()}
      className={choseClass(mode)}
      onClick={handelClick}
    >
      {text}
    </button>
  );
};
