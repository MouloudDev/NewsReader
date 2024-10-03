import DarkModeToggler from "./DarkModeToggler";
import SearchFrom from "./SearchFrom";

export default function TopBar() {

    return (
        <div className="bg-[#E40000]">
            <div className="grid gap-1 items-start grid-rows-2 grid-cols-2 m-auto p-3 max-w-screen-lg sm:flex sm:gap-1 sm:items-center">
                <img
                  src="../../public/logo.png"
                  alt="Logo"
                  className="min-w-[137px]"
                />
                <SearchFrom />
                <DarkModeToggler />
            </div>
        </div>
    )
}
