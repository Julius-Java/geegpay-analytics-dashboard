import {
    Drawer,
    DrawerClose,
    DrawerTrigger,
    DrawerContent,
} from "@/components/ui/drawer";
import { Bars2Icon } from "@heroicons/react/20/solid";
import Image from "next/image";
import arrowVector from "@/public/assets/layout/arrow-right-vector.png";
import gearVector from "@/public/assets/layout/setting-vector.png";
import logoutVector from "@/public/assets/layout/logout-vector.png";

export default function SideDrawer() {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Bars2Icon className="w-6" />
            </DrawerTrigger>
            <DrawerContent>
                <div className="p-6">
                    <div className="flex justify-center gap-x-9">
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
                </div>
            </DrawerContent>
        </Drawer>
    );
}
