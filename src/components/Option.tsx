import { useEffect, useState, type HtmlHTMLAttributes } from 'react';
interface Props {
  canClick: boolean;
  definition: string;
  correct: boolean;
  onOptionClick: (correct: boolean) => void;
}

const DEFAULT_STYLE = 'bg-gray-200 hover:bg-gray-300 cursor-pointer';

const Option = ({
  definition,
  correct,
  canClick,
  onOptionClick,
  ...props
}: Props & HtmlHTMLAttributes<HTMLDivElement>) => {
  const [style, setStyle] = useState(DEFAULT_STYLE);

  useEffect(() => {
    setStyle(DEFAULT_STYLE);
  }, [definition]);

  useEffect(() => {
    if (!canClick && correct && style === DEFAULT_STYLE) {
      setStyle('bg-green-500');
    }
  }, [canClick]);

  const handleClick = () => {
    if (!canClick) return;

    setStyle(correct ? 'bg-green-500' : 'bg-red-600');
    onOptionClick(correct);
  };

  return (
    <div {...props}>
      <p className={`${style} text-2xl p-4 m-2 transition-all rounded-xl`} onClick={handleClick}>
        {definition}
      </p>
    </div>
  );
};

export default Option;
