import useMediaQuery from '../pages/navbar/hooks/useMediaQuery';

type Props = {
    header: string;
};

function Header({ header }: Props) {
    const isAboveMediumScreens: boolean = useMediaQuery('(min-width: 900px)'); // returns a bool val as per the custom hook we created that takes in a media query string
    // in this case that string is the min-width of 1060 so it will return true if the viewport size is greater than 1060px
    // media queries must have paranthesees around them
    return (
        <div>
            {isAboveMediumScreens && (
                <div className="pl-48 text-6xl py-32 bg-wise-blue text-white font-bold">
                    {header}
                </div>
            )}
            {!isAboveMediumScreens && (
                <div className="text-6xl text-center py-32 bg-wise-blue text-white font-bold px-8">
                    {header}
                </div>
            )}
        </div>
    );
}

export default Header;
