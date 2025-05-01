import Dropdown from "../common/Dropdown"
import { IPolicyTimeDropdown } from "../../interfaces/components/SnapshotPolicyInterfaces"

const snapshotPolicyDropdownData: IPolicyTimeDropdown[] = [
    { value: "Daily" },
    { value: "Monthly" },
]

const PolicyScheduleForm = () => {
    return (
        <>
            <div className="text-textColor2 text-cmd">
                Run Poilcy on the Following Schedule
            </div>
            <div className="bg-bgColor1 border border-borderColor2 w-[100%] p-8 rounded mt-1">
                <form>
                    <label>Select Schedule Type</label>
                    <Dropdown options={snapshotPolicyDropdownData} />
                </form>
            </div>
        </>
    )
}

export default PolicyScheduleForm