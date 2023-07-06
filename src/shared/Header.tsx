type Props = {
    header: string;
};

function Header({ header }: Props) {
    return <div className="pl-48 text-6xl py-48 bg-black">{header}</div>;
}

export default Header;
