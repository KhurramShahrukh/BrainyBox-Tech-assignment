import { useState } from "react"

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
            </div>
        )
    }

export default SnapshotPolicy
