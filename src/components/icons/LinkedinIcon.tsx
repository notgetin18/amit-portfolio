import React from "react";

interface Props extends React.SVGProps<SVGSVGElement> { }

export default function LinkedinIcon({ className, ...props }: Props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className={className}
            {...props}
        >
            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6 1.12 6 0 4.88 0 3.5S1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8H4.5V24H.5zM8.5 8H12v2.2c.6-1.1 2.3-2.2 4.8-2.2 5.1 0 6 3.4 6 7.9V24h-4V16.3c0-2-0.1-4.6-3.1-4.6-3.1 0-3.6 2.1-3.6 4.4V24H8.5z" />
        </svg>
    );
}
