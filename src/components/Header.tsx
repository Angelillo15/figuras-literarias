interface HeaderProps {
  title: string;
}

const Header = ({ title } : HeaderProps) => {
  return (
    <header>
      <h1 className={'text-8xl mb-12'}>{title}</h1>
    </header>
  );
};

export default Header;