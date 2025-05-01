export interface IPolicyTimeDropdown {
    value: string
}

export interface IPolicyTimeHoursDropdown {
    value: string
}

export interface IPolicyTimeMinutesDropdown {
    value: string
}

export interface ISelectedTime {
    hours: string;
    minutes: string
}

export interface IPolicyScheduleForm {
    selectedSchedule: string;
    setSelectedSchedule: (arg1: string) => void;
    selectedTime: ISelectedTime;
    setSelectedTime: React.Dispatch<React.SetStateAction<ISelectedTime>>;
    selectedDays: string[]
    setSelectedDays: React.Dispatch<React.SetStateAction<string[]>>;
    selectedRadio: string;
    setSelectedRadio: (arg1: string) => void;
    deleteAfterDaysValue: number;
    setDeleteAfterDaysValue: (arg1: number) => void;
    deleteDurationValue: string;
    setDeleteDurationValue: (arg1: string) => void;
    setIsPolicyChecked: (arg1: boolean) => void;
}