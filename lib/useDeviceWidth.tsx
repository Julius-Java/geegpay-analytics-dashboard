// Write logic to monitor the width of the device, it should be a custom hook that returns the width of the device
import { useState, useEffect } from "react";

export default function useDeviceWidth() {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWidth(window.innerWidth);
        }
        // Listen to the window resize event
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return width;
}
