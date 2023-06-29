import { useState } from 'react';

type Props = {
    subheadings: string[];
};

function Dropdown({ subheadings }: Props) {
    const x = ['Page1', 'Page2', 'Page3'];

    // managing the open/closed state of the dropdown
    const [isOpen, setIsOpen] = useState<boolean>(true);

    return <div className="bg-black text-green"> Dropdown</div>;
}

export default Dropdown;
