

export default function BtnsFilterPorjects() {
    return (
        entry.data.categoria.ux ? (
        <div class="mt-4 flex space-x-2">
            <button
                id="btnDesktop"
                class="outline outline-1 outline-gray-400 p-2 rounded-md hover:outline-gray-300 focus:outline-0 focus:ring-1 focus:ring-[#6B5EE7]"
            >
                Desktop
            </button>
            <button
                id="btnMobile"
                class="outline outline-1 outline-gray-400 p-2 rounded-md hover:outline-gray-300  focus:outline-0 focus:ring-1 focus:ring-[#6B5EE7]"
            >
                Mobile
            </button>
        </div>
        ): null
    )
}
