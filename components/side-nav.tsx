import Link from "next/link";
import dashLogo from "@/public/assets/global/logo.png";
import Image from "next/image";
import NavLinks from "./nav-links";
import sunVector from "@/public/assets/layout/light-mode-vector.png";
import moonVector from "@/public/assets/layout/night-mode-vector.png";
import arrowVector from "@/public/assets/layout/arrow-right-vector.png";
import gearVector from "@/public/assets/layout/setting-vector.png";
import logoutVector from "@/public/assets/layout/logout-vector.png";
import SelectNav from "./select-nav";

export default function SideNav() {
    return (
        <aside className="flex h-full flex-col px-3 py-4 md:px-2 w-full">
            <section className="mb-5 flex justify-center items-center md:flex-none">
                <Link href={"/"}>
                    <Image
                        src={dashLogo}
                        alt="Logo"
                        width={50}
                        height={50}
                        className="mx-auto md:mx-0 md:w-[40px]"
                    />
                </Link>
                <div className="ml-auto md:hidden">
                    <SelectNav />
                </div>
            </section>
            <section className="flex grow justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-8">
                <NavLinks />
                {/* Theme Toggle */}
                <div className="bg-white p-[8px] rounded-[100px] hidden md:flex md:flex-col md:items-center md:gap-y-[14px] ">
                    <button className="p-1 rounded-full bg-[#34CAA5]">
                        <Image
                            src={sunVector}
                            alt="Light Mode"
                            width={16}
                            height={16}
                        />
                    </button>
                    <button>
                        <Image
                            src={moonVector}
                            alt="Dark Mode"
                            width={16}
                            height={16}
                        />
                    </button>
                </div>
                <div className="hidden h-auto w-full grow rounded-md bg-white md:block"></div>
                {/*  Bottom Nav */}
                <div className="hidden md:flex md:flex-col space-y-4">
                    <button>
                        <Image
                            src={arrowVector}
                            alt=""
                            width={24}
                            height={24}
                            className="mx-auto"
                        />
                    </button>
                    <button>
                        <Image
                            src={gearVector}
                            alt="Settings"
                            width={24}
                            height={24}
                            className="mx-auto"
                        />
                    </button>
                    <button>
                        <Image
                            src={logoutVector}
                            alt="Logout"
                            width={24}
                            height={24}
                            className="mx-auto"
                        />
                    </button>
                </div>
            </section>
        </aside>
    );
}
