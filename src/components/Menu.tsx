import logo from '../assets/logo-default.png'
import { IMenu } from '../interfaces/components/MenuInterfaces'
import { PERFORMANCE, SNAPSHOT } from '../utils/Constants'

const Menu = (props: IMenu) => {
    const { selectedItem, setSelectedItem } = props

    return (
        <div className='w-[12.5rem] min-h-[100vh] bg-bgColor1'>
            <div className="flex justify-center gap-2 pb-2 mx-4 my-4 border-b border-[#2D3E4E]">
                <img src={logo} />
                <div className='text-clg text-textColor1'>Cluster Name</div>
            </div>
            <div>
                <ul className="ml-4 text-csm">
                    <li onClick={() => setSelectedItem(PERFORMANCE)} className={`pl-2 flex justify-start items-center gap-2 leading-clh cursor-pointer 
                ${selectedItem === PERFORMANCE
                            ? "bg-hColor1 border-r-2 border-selected"
                            : "hover:bg-hColor1 hover:border-r-2 hover:border-selected"}`}>
                        <div className="w-[0.3125rem] h-[0.3125rem] rounded-full bg-white" />
                        Performance Metrics
                    </li>
                    <li onClick={() => setSelectedItem(SNAPSHOT)} className={`pl-2 flex justify-start items-center gap-2 leading-clh cursor-pointer 
                ${selectedItem === SNAPSHOT
                            ? "bg-hColor1 border-r-2 border-selected"
                            : "hover:bg-hColor1 hover:border-r-2 hover:border-selected"}`}>
                        <div className="w-[0.3125rem] h-[0.3125rem] rounded-full bg-white" />
                        Edit Snapshot Policy
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default Menu