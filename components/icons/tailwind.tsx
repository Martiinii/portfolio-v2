import clsx from "clsx";
import { SVGAttributes, forwardRef } from "react"
import { iconStyle } from "./iconStyle";

const TailwindLogo = forwardRef<SVGSVGElement, SVGAttributes<SVGSVGElement>>(({ className, ...props }, ref) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33" ref={ref} className={clsx(iconStyle, className)} {...props}>
            <g clip-path="url(#prefix__clip0)" transform="translate(2.7, 1.65) scale(.9)">
                <path fill="white" fill-rule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clip-rule="evenodd" />
            </g>
            <defs>
                <clipPath id="prefix__clip0">
                    <path fill="#fff" d="M0 0h54v32.4H0z" />
                </clipPath>
            </defs>
        </svg>
    )
})

TailwindLogo.displayName = 'Tailwind logo';

export { TailwindLogo }