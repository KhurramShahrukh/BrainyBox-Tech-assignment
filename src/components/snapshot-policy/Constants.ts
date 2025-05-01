import { IPolicyTimeDropdown, IPolicyTimeHoursDropdown, IPolicyTimeMinutesDropdown } from "../../interfaces/components/SnapshotPolicyInterfaces"

export const snapshotPolicyDropdownData: IPolicyTimeDropdown[] = [
    { value: "Daily" },
    { value: "Monthly" },
]

export const hoursDropdownData: IPolicyTimeHoursDropdown[] = [
    { value: "07" },
    { value: "08" },
]

export const minutesDropdownData: IPolicyTimeMinutesDropdown[] = [
    { value: "00" },
    { value: "30" },
]

export const checkBoxDays: string[] = [
    "Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"
]

export const radioOptions: string[] = [
    "Never", "Automatically after",
]

export const durationDropdownData: IPolicyTimeMinutesDropdown[] = [
    { value: "day(s)" },
    { value: "month(s)" },
]