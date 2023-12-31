import clsx from "clsx";
import { SVGAttributes, forwardRef } from "react"
import { iconStyle } from "./iconStyle";

const ChakraUILogo = forwardRef<SVGSVGElement, SVGAttributes<SVGSVGElement>>(({ className, ...props }, ref) => {
    return (
        <svg viewBox="0 0 582 582" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} className={clsx(iconStyle, className)} {...props}>
            <g transform="translate(-67.3 -87.3) scale(1.3)" >
                <path d="M157.521 303.421L355.881 106.426C359.587 102.746 365.55 107.225 363.049 111.809L289.22 247.123C287.573 250.141 289.758 253.821 293.196 253.821H420.782C424.892 253.821 426.877 258.857 423.872 261.661L200.293 470.326C196.284 474.067 190.317 468.796 193.536 464.356L299.373 318.351C301.543 315.357 299.404 311.164 295.706 311.164H160.713C156.67 311.164 154.653 306.27 157.521 303.421Z" fill="white" />
            </g>
        </svg>
    )
})

ChakraUILogo.displayName = 'Chakra UI logo';

export { ChakraUILogo }