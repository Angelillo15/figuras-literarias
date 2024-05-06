interface HeaderProps {
  title: string;
}

const Header = ({ title } : HeaderProps) => {
  return (
    <header>
      <h1 className={'text-4xl md:text-8xl mb-12 font-bold'}>{title}</h1>
    </header>
  );
};

export default Header;