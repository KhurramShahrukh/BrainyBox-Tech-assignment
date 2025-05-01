export interface IOption {
    value: string;
}

export interface IDropdownProps {
    options: IOption[];
    defaultValue?: string;
    onChange?: (value: string) => void;
}