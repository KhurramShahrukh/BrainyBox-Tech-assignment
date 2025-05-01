import { useState } from "react"
import PolicyScheduleForm from "./PolicyScheduleForm"

const SnapshotPolicy
    = () => {
        const [policyNameValue, setPolicyNameValue] = useState<string>("")
        const [directoryValue, setDirectoryValue] = useState<string>("")

        return (
            <div className='py-4 pl-4'>
                <div className='text-clg text-textColor1'>Edit Snapshot Policy</div>
                <br />
                <div>
                    <label className="text-textColor2 text-cmd ">Policy Name</label>
                    <br />
                    <input className="bg-bgInput1 border border-borderInput1 rounded text-cmd leading-clh p-1 text-textColorInput1 mt-1 min-w-[30rem] h-[2.25rem]" value={policyNameValue} onChange={(e) => setPolicyNameValue(e.target.value)} />
                </div>
                <div className="mt-4">
                    <label className="text-textColor2 text-cmd">Apply to Directory</label>
                    <br />
                    <div className="h-[2.25rem] w-[2.5rem] text-center p-1 border rounded-tl rounded-bl bg-bgInput2 border-borderInput2 text-cmd text-textColor1 inline-block">/</div>
                    <input className="bg-bgInput1 border border-borderInput1 rounded-tr rounded-br  text-cmd leading-clh p-1 text-textColorInput1 mt-1 min-w-[27.5rem] h-[2.25rem]" value={directoryValue} onChange={(e) => setDirectoryValue(e.target.value)} />
                </div>
                <br />
                <PolicyScheduleForm />
                <br />
                <div className="text-textColor2 text-cmd ">Snapshot Locking</div>
                <div className="text-textColor2 ">Locked snapshots cannot be deleted before the deletion schedule expires. For this feature to be available, snapshots must  be set to automatically delete.</div>
                <input type="checkbox" className="cursor-pointer" />
                <div className="inline-block mt-2 ml-2 text-textColor2 text-cmd">Enable locked snapshots</div>
                <br />
                <br />
                <br />
                <input type="checkbox" className="cursor-pointer" />
                <div className="inline-block ml-2 text-textColor2 text-cmd">Enable policy</div>
                <br />
                <button className="cursor-pointer px-4 py-2 mt-2 text-white rounded bg-button1 shadow-[inset_0px_1px_0px_0px_var(--color-shadow1)] text-cmd">Save Policy</button>
                <button className="mx-8 my-4 cursor-pointer text-button2 text-cmd">Cancel</button>
            </div>
        )
    }

export default SnapshotPolicy
