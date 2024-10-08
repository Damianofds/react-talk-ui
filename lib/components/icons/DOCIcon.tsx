// MANY THANKS TO THE AUTHOR OF THIS GREAT WORK --> https://www.svgrepo.com/svg/199829/doc

import React from "react";

const DOCIcon: React.FC<IconProps> = ({
    width = "24px",
    height = "24px",
    color = "white",
}) => {
    return (
        <svg
            width={width}
            height={height}
            fill={color}
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 496 496"
            xmlSpace="preserve">
            <g>
                <g>
                    <g>
                        <path
                            d="M472,32h-72V0H100.688L0,100.688V496h400V192h72c13.232,0,24-10.768,24-24V56C496,42.768,485.232,32,472,32z M96,27.312
V96H27.312L96,27.312z M384,480H16V112h96V16h272v16H184c-13.232,0-24,10.768-24,24v112c0,13.232,10.768,24,24,24h200V480z
M480,168c0,4.408-3.592,8-8,8H184c-4.408,0-8-3.592-8-8V56c0-4.408,3.592-8,8-8h288c4.408,0,8,3.592,8,8V168z"
                        />
                        <path
                            d="M424,80c13.232,0,24,10.768,24,24h16c0-22.056-17.944-40-40-40c-22.056,0-40,17.944-40,40v16c0,22.056,17.944,40,40,40
c22.056,0,40-17.944,40-40h-16c0,13.232-10.768,24-24,24s-24-10.768-24-24v-16C400,90.768,410.768,80,424,80z"
                        />
                        <path d="M32,464h336V208H32V464z M48,224h304v224H48V224z" />
                        <rect x="32" y="128" width="16" height="16" />
                        <rect x="64" y="128" width="16" height="16" />
                        <rect x="32" y="160" width="16" height="16" />
                        <path
                            d="M224,64h-32v96h32c26.472,0,48-21.528,48-48S250.472,64,224,64z M224,144h-16V80h16c17.648,0,32,14.352,32,32
S241.648,144,224,144z"
                        />
                        <path
                            d="M328,64c-22.056,0-40,17.944-40,40v16c0,22.056,17.944,40,40,40c22.056,0,40-17.944,40-40v-16
C368,81.944,350.056,64,328,64z M352,120c0,13.232-10.768,24-24,24s-24-10.768-24-24v-16c0-13.232,10.768-24,24-24
s24,10.768,24,24V120z"
                        />
                        <polygon
                            points="92.528,328 112,295.552 131.472,328 151.16,328 159.952,248.88 144.048,247.12 137.416,306.816 112,264.448 
86.584,306.816 79.952,247.12 64.048,248.88 72.84,328 			"
                        />
                        <rect x="176" y="248" width="160" height="16" />
                        <rect x="176" y="280" width="160" height="16" />
                        <rect x="176" y="312" width="160" height="16" />
                        <rect x="64" y="344" width="272" height="16" />
                        <rect x="64" y="376" width="272" height="16" />
                        <rect x="64" y="408" width="208" height="16" />
                        <rect x="320" y="408" width="16" height="16" />
                        <rect x="288" y="408" width="16" height="16" />
                    </g>
                </g>
            </g>
        </svg>
    );
};

export default DOCIcon;
