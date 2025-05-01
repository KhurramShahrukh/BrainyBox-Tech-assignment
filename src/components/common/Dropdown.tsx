import { useState, useRef, useEffect } from 'react';
import { IDropdownProps } from '../../interfaces/common/DropdownInterfaces';
import { DATE } from '../../utils/Constants';

const Dropdown: React.FC<IDropdownProps> = ({ options, defaultValue, onChange, type = "" }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<string>(defaultValue || options[0]?.value);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleOptionClick = (value: string) => {
        setSelected(value);
        onChange?.(value);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div ref={dropdownRef} className="relative inline-block text-left">
            <button
                type="button" // prevent default form submit behavior by setting typ button
                onClick={() => setIsOpen((prev) => !prev)}
                className="flex items-center justify-between px-2 py-1 border rounded cursor-pointer text-csm text-textColor4 bg-bgInput1 border-borderColor2"
            >
                {selected}
                {type !== DATE &&
                    <svg
                        className={`w-4 h-4 ml-2 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                    >
                        <path d="M19 9l-7 7-7-7" />
                    </svg>
                }
            </button>

            {isOpen && (
                <ul className="absolute z-10 w-full mt-1 text-center border rounded shadow border-borderColor2">
                    {options.map(({ value }, index) => (
                        <li
                            key={index}
                            onClick={() => handleOptionClick(value)}
                            className="py-2 cursor-pointer text-csm text-textColor4 bg-bgColor1 hover:bg-bgInput2"
                        >
                            {value}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;