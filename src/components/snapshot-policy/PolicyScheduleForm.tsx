import Dropdown from "../common/Dropdown"
import { IPolicyTimeDropdown, IPolicyTimeHoursDropdown, IPolicyTimeMinutesDropdown } from "../../interfaces/components/SnapshotPolicyInterfaces"
import { DATE } from "../../utils/constants"
import { Fragment, useState } from "react"

const snapshotPolicyDropdownData: IPolicyTimeDropdown[] = [
    { value: "Daily" },
    { value: "Monthly" },
]

const hoursDropdownData: IPolicyTimeHoursDropdown[] = [
    { value: "07" },
    { value: "08" },
]

const minutesDropdownData: IPolicyTimeMinutesDropdown[] = [
    { value: "00" },
    { value: "30" },
]

const durationDropdownData: IPolicyTimeMinutesDropdown[] = [
    { value: "day(s)" },
    { value: "month(s)" },
]

const checkBoxDays: string[] = [
    "Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"
]

const radioOptions: string[] = [
    "Never", "Automatically after",
]

const PolicyScheduleForm = () => {
    const [value, setValue] = useState<number | undefined>();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;
        // Only allow digits, up to 2 characters
        if (/^\d{0,2}$/.test(input)) {
            // Prevent empty string from being converted to 0
            setValue(input === "" ? undefined : Number(input));
        }
    };


    return (
        <>
            <div className="text-textColor2 text-cmd">
                Run Poilcy on the Following Schedule
            </div>
            <div className="bg-bgColor1 border border-borderColor2 w-[100%] p-8 rounded mt-1">
                <form className="text-textColor2">
                    <label className="mr-6">Select Schedule Type</label>
                    <Dropdown options={snapshotPolicyDropdownData} />
                    <br />
                    <br />
                    <label className="mr-6 ">Set to Time Zone</label>
                    <div className="inline-block">America/Los Angeles</div>
                    <br />
                    <br />
                    <label className="mr-6">Take a Snapshot at</label>
                    <div className="inline-block">
                        <Dropdown type={DATE} options={hoursDropdownData} /> : <Dropdown type={DATE} options={minutesDropdownData} />
                    </div>
                    <br />
                    <br />
                    <label className="mr-6">On the Following Day(s)</label>
                    <div className="inline-block">
                        {checkBoxDays.map((item: string, index) => {
                            return <Fragment key={index}>
                                <input type="checkbox" className="cursor-pointer" />
                                <div className={`inline-block ml-1 ${(index + 1) !== checkBoxDays.length && `mr-4`}`}>{item}</div>
                            </Fragment>
                        })}
                    </div>
                    <br />
                    <br />
                    <label className="mr-6">Delete Each Snapshot</label>
                    <div className="inline-block">
                        {radioOptions.map((item: string, index) => {
                            return <Fragment key={index}>
                                <input type="radio" className="cursor-pointer" />
                                <div className={`inline-block ml-1  ${(index + 1) !== radioOptions.length && `mr-4`}`}>{item}</div>
                                {(index + 1) === radioOptions.length && <>
                                    &nbsp;
                                    &nbsp;
                                    <input
                                        type="text"
                                        inputMode="numeric" // opens digits only keyboard on mobile
                                        value={value ?? ""}
                                        onChange={handleChange}
                                        onPaste={(e) => {
                                            const pasted = e.clipboardData.getData("Text");
                                            if (!/^\d{1,2}$/.test(pasted)) { // only digits can be pasted
                                                e.preventDefault();
                                            }
                                        }}
                                        placeholder="00"
                                        className="input-no-spin p-1 align-bottom border rounded bg-bgInput1 border-borderInput1 text-cmd leading-clh text-textColorInput1 w-[2rem] h-[1.95rem]"
                                    />
                                    &nbsp;
                                    <Dropdown options={durationDropdownData} />
                                </>}
                            </Fragment>
                        })}
                    </div>
                </form>
            </div>
        </>
    )
}

export default PolicyScheduleForm