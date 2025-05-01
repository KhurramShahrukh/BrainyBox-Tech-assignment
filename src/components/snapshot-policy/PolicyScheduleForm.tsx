import Dropdown from "../common/Dropdown"
import { IPolicyScheduleForm, ISelectedTime } from "../../interfaces/components/SnapshotPolicyInterfaces"
import { DATE, HOURS, MINUTES } from "../../utils/Constants"
import { Fragment, } from "react"
import { checkBoxDays, durationDropdownData, hoursDropdownData, minutesDropdownData, radioOptions, snapshotPolicyDropdownData } from "./Constants"

const PolicyScheduleForm = (props: IPolicyScheduleForm) => {
    const {
        selectedSchedule,
        setSelectedSchedule,
        selectedTime,
        setSelectedTime,
        selectedDays,
        setSelectedDays,
        selectedRadio,
        setSelectedRadio,
        deleteAfterDaysValue,
        setDeleteAfterDaysValue,
        deleteDurationValue,
        setDeleteDurationValue,
        setIsPolicyChecked
    } = props
    console.log("🚀 ~ PolicyScheduleForm ~ selectedTime:", selectedTime)
    const scheduleChangeHandler = (value: string) => {
        setSelectedSchedule(value)
    }

    const timeChangeHandler = (value: string, type: string) => {
        setSelectedTime((prevState: ISelectedTime) => ({
            ...prevState,
            ...(type === HOURS && { hours: value }),
            ...(type === MINUTES && { minutes: value }),
        }));

    };

    const changeDaysHandler = (checked: boolean, day: string) => {
        setSelectedDays((prevState: string[]) =>
            checked ? [...prevState, day] : prevState.filter(d => d !== day)
        );
    };

    const handleRadioChange = (value: string) => {
        setSelectedRadio(value);
        if (value === radioOptions[0]) {
            setIsPolicyChecked(false)
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;
        // Only allow digits, up to 2 characters
        if (/^\d{0,2}$/.test(input)) {
            // Prevent empty string from being converted to 0
            setDeleteAfterDaysValue(Number(input));
        }
    };

    const deleteDurationChangeHandler = (value: string) => {
        setDeleteDurationValue(value)
    }

    return (
        <>
            <div className="text-textColor2 text-cmd">
                Run Poilcy on the Following Schedule
            </div>
            <div className="bg-bgColor1 border border-borderColor2 w-[100%] p-8 rounded mt-1">
                <form className="text-textColor2">
                    <label className="mr-6">Select Schedule Type</label>
                    <Dropdown
                        options={snapshotPolicyDropdownData}
                        onChange={scheduleChangeHandler}
                        defaultValue={selectedSchedule}
                    />
                    <br />
                    <br />
                    <label className="mr-6 ">Set to Time Zone</label>
                    <div className="inline-block">America/Los Angeles</div>
                    <br />
                    <br />
                    <label className="mr-6">Take a Snapshot at</label>
                    <div className="inline-block">
                        <Dropdown
                            type={DATE}
                            defaultValue={selectedTime.hours}
                            options={hoursDropdownData}
                            onChange={(timeValue: string) => timeChangeHandler(timeValue, HOURS)}
                        />
                        {" "}
                        :
                        {" "}
                        <Dropdown
                            type={DATE}
                            defaultValue={selectedTime.minutes}
                            options={minutesDropdownData}
                            onChange={(timeValue: string) => timeChangeHandler(timeValue, MINUTES)}
                        />
                    </div>
                    <br />
                    <br />
                    <label className="mr-6">On the Following Day(s)</label>
                    <div className="inline-block">
                        {checkBoxDays.map((item: string, index: number) => {
                            return <Fragment key={index}>
                                <input
                                    // checkBoxDays[0],
                                    checked={selectedDays.includes(item) ? true : false}
                                    type="checkbox"
                                    className="cursor-pointer"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeDaysHandler(e.target.checked, item)}
                                />
                                <div className={`inline-block ml-1 ${(index + 1) !== checkBoxDays.length && `mr-4`}`}>{item}</div>
                            </Fragment>
                        })}
                    </div>
                    <br />
                    <br />
                    <label className="mr-6">Delete Each Snapshot</label>
                    <div className="inline-block">
                        {radioOptions.map((item: string, index: number) => (
                            <Fragment key={index}>
                                <input
                                    type="radio"
                                    className="cursor-pointer"
                                    name="snapshotRetention" // important to group them together
                                    value={item}
                                    checked={selectedRadio === item}
                                    onChange={() => handleRadioChange(item)}
                                />
                                <div className={`inline-block ml-1 ${(index + 1) !== radioOptions.length && `mr-4`}`}>{item}</div>

                                {item === radioOptions[1] && (
                                    <>
                                        &nbsp;
                                        &nbsp;
                                        <input
                                            type="text"
                                            inputMode="numeric"
                                            value={deleteAfterDaysValue ?? ""}
                                            onChange={handleChange}
                                            onPaste={(e) => {
                                                const pasted = e.clipboardData.getData("Text");
                                                if (!/^\d{1,2}$/.test(pasted)) {
                                                    e.preventDefault();
                                                }
                                            }}
                                            placeholder="00"
                                            className="input-no-spin p-1 align-bottom border rounded bg-bgInput1 border-borderInput1 text-cmd leading-clh text-textColor2 w-[2rem] h-[1.95rem]"
                                        />
                                        &nbsp;
                                        <Dropdown
                                            options={durationDropdownData}
                                            defaultValue={deleteDurationValue}
                                            onChange={deleteDurationChangeHandler}
                                        />
                                    </>
                                )}
                            </Fragment>
                        ))}

                    </div>
                </form>
            </div>
        </>
    )
}

export default PolicyScheduleForm