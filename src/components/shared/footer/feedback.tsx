import Link from "next/link";
import Style from "./footer.module.scss";

const account = [
  {
    title: "My Account",
    link: "#",
  },
  {
    title: "Our stores",
    link: "#",
  },
  {
    title: "Contact us",
    link: "#",
  },
  {
    title: "Career",
    link: "#",
  },
  {
    title: "Specials",
    link: "#",
  },
];

const help = [
  {
    title: "Help Center",
    link: "#",
  },
  {
    title: "How to Buy",
    link: "#",
  },
  {
    title: "Shipping & Delivery",
    link: "#",
  },
  {
    title: "Product Policy",
    link: "#",
  },
  {
    title: "How to Return",
    link: "#",
  },
];

const categories = [
  {
    title: "House Plants",
    link: "#",
  },
  {
    title: "Potter Plants",
    link: "#",
  },
  {
    title: "Seeds",
    link: "#",
  },
  {
    title: "Small Plants",
    link: "#",
  },
  {
    title: "Accessories",
    link: "#",
  },
];

const media = [
  {
    svg: (
      <svg
        width="8"
        height="16"
        viewBox="0 0 8 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 5.33333H0V8H2V16H5.33333V8H7.73333L8 5.33333H5.33333V4.2C5.33333 3.6 5.46667 3.33333 6.06667 3.33333H8V0H5.46667C3.06667 0 2 1.06667 2 3.06667V5.33333Z"
          fill="#46A358"
          fillOpacity="0.6"
        />
      </svg>
    ),
    link: "#",
  },
  {
    svg: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 1.46667C10.1333 1.46667 10.4 1.46667 11.2667 1.53333C13.4667 1.6 14.4667 2.66667 14.5333 4.8C14.6 5.66667 14.6 5.86667 14.6 8C14.6 10.1333 14.6 10.4 14.5333 11.2C14.4667 13.3333 13.4 14.4 11.2667 14.4667C10.4 14.5333 10.2 14.5333 8 14.5333C5.86667 14.5333 5.6 14.5333 4.8 14.4667C2.6 14.4 1.6 13.3333 1.53333 11.2C1.46667 10.3333 1.46667 10.1333 1.46667 8C1.46667 5.86667 1.46667 5.6 1.53333 4.8C1.6 2.66667 2.66667 1.6 4.8 1.53333C5.6 1.46667 5.86667 1.46667 8 1.46667ZM8 0C5.8 0 5.53333 0 4.73333 0.0666667C1.8 0.2 0.2 1.8 0.0666667 4.73333C0 5.53333 0 5.8 0 8C0 10.2 0 10.4667 0.0666667 11.2667C0.2 14.2 1.8 15.8 4.73333 15.9333C5.53333 16 5.8 16 8 16C10.2 16 10.4667 16 11.2667 15.9333C14.2 15.8 15.8 14.2 15.9333 11.2667C16 10.4667 16 10.2 16 8C16 5.8 16 5.53333 15.9333 4.73333C15.8 1.8 14.2 0.2 11.2667 0.0666667C10.4667 0 10.2 0 8 0ZM8 3.86667C5.73333 3.86667 3.86667 5.73333 3.86667 8C3.86667 10.2667 5.73333 12.1333 8 12.1333C10.2667 12.1333 12.1333 10.2667 12.1333 8C12.1333 5.73333 10.2667 3.86667 8 3.86667ZM8 10.6667C6.53333 10.6667 5.33333 9.46667 5.33333 8C5.33333 6.53333 6.53333 5.33333 8 5.33333C9.46667 5.33333 10.6667 6.53333 10.6667 8C10.6667 9.46667 9.46667 10.6667 8 10.6667ZM12.2667 2.8C11.7333 2.8 11.3333 3.2 11.3333 3.73333C11.3333 4.26667 11.7333 4.66667 12.2667 4.66667C12.8 4.66667 13.2 4.26667 13.2 3.73333C13.2 3.2 12.8 2.8 12.2667 2.8Z"
          fill="#46A358"
          fillOpacity="0.6"
        />
      </svg>
    ),
    link: "#",
  },
  {
    svg: (
      <svg
        width="16"
        height="13"
        viewBox="0 0 16 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.03186 13.0036C11.0699 13.0036 14.3718 8.00118 14.3718 3.66357C14.3718 3.52144 14.3689 3.38005 14.3624 3.2392C15.0033 2.77588 15.5605 2.19756 16 1.53953C15.4118 1.80085 14.7789 1.97682 14.1149 2.05616C14.7926 1.64981 15.313 1.0067 15.5585 0.24021C14.9241 0.616357 14.2217 0.889688 13.4742 1.03709C12.8749 0.399076 12.0218 0 11.0779 0C9.26483 0 7.79464 1.4702 7.79464 3.28233C7.79464 3.54001 7.82357 3.79041 7.87962 4.0308C5.1516 3.89377 2.73239 2.58735 1.11352 0.601253C0.831273 1.08622 0.668767 1.64999 0.668767 2.25106C0.668767 3.38988 1.24837 4.3953 2.12968 4.98363C1.59121 4.96707 1.08531 4.81894 0.642926 4.57291C0.642198 4.58656 0.642198 4.60039 0.642198 4.61476C0.642198 6.2047 1.77392 7.53204 3.27578 7.83285C3.00008 7.90801 2.71001 7.94841 2.41047 7.94841C2.19901 7.94841 1.99338 7.9273 1.79339 7.88927C2.21121 9.19332 3.42318 10.1425 4.86007 10.1693C3.73636 11.0499 2.32094 11.5745 0.783049 11.5745C0.518272 11.5745 0.256952 11.5594 0 11.529C1.45273 12.46 3.17769 13.0036 5.03186 13.0036Z"
          fill="#46A358"
          fillOpacity="0.6"
        />
      </svg>
    ),
    link: "#",
  },
  {
    svg: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.33333 1.66667C3.33333 2.6 2.6 3.33333 1.66667 3.33333C0.733333 3.33333 0 2.6 0 1.66667C0 0.733333 0.733333 0 1.66667 0C2.6 0 3.33333 0.733333 3.33333 1.66667ZM3.33333 4.66667H0V15.3333H3.33333V4.66667ZM8.66667 4.66667H5.33333V15.3333H8.66667V9.73333C8.66667 6.6 12.6667 6.33333 12.6667 9.73333V15.3333H16V8.6C16 3.33333 10.0667 3.53333 8.66667 6.13333V4.66667Z"
          fill="#46A358"
          fillOpacity="0.6"
        />
      </svg>
    ),
    link: "#",
  },
  {
    svg: (
      <svg
        width="19"
        height="14"
        viewBox="0 0 19 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.1653 4.42995L15.168 4.43062C15.168 4.43062 15.1676 4.4305 15.1667 4.4303C15.1663 4.4302 15.1658 4.43008 15.1653 4.42995ZM4.32444 4.35686C6.91762 4.19575 11.7483 4.19575 14.3415 4.35686L14.3422 4.3644C14.4047 4.99716 14.4299 5.84143 14.4299 7.01915C14.4299 8.18238 14.4053 9.02689 14.3441 9.66498C11.6962 9.77026 6.97129 9.77027 4.32282 9.66502C4.261 9.03324 4.23602 8.19137 4.23602 7.01915C4.23602 5.84143 4.26123 4.99716 4.32369 4.3644L4.32444 4.35686ZM15.2422 9.61106C15.2422 9.61109 15.2405 9.61148 15.237 9.61215L15.2422 9.61106ZM3.49794 9.60768L3.50063 9.60836C3.49881 9.60793 3.49792 9.60769 3.49794 9.60768ZM0 7.01915C0 11.8412 0.388873 13.63 3.42208 13.8633C6.22196 14.0189 12.4439 14.0189 15.2438 13.8633C18.277 13.7078 18.6659 11.8412 18.6659 7.01915C18.6659 2.19713 18.277 0.408316 15.2438 0.174993C12.4439 -0.0583309 6.22196 -0.0583309 3.42208 0.174993C0.388873 0.408316 0 2.19713 0 7.01915ZM3.49794 4.43062C3.49792 4.43061 3.49884 4.43037 3.50073 4.42992L3.49794 4.43062ZM9.78228 8.73886C8.50388 9.37806 6.99973 8.44845 6.99973 7.01915C6.99973 5.58986 8.50388 4.66025 9.78228 5.29945C11.1994 6.008 11.1994 8.0303 9.78228 8.73886Z"
          fill="#46A358"
          fillOpacity="0.6"
        />
      </svg>
    ),
    link: "#",
  },
];

const order = [
  {
    svg: (
      <svg
        height={50}
        width={50}
        version="1.1"
        id="Capa_1"
        x="0px"
        y="0px"
        viewBox="0 0 488.8 488.8"
        enableBackground="new 0 0 488.8 488.8"
      >
        <path
          style={{ fill: "#32A6CE" }}
          d="M381.6,200.4c-12,0-21.6,3.2-29.6,4.8l-2.4,18.4c4-1.6,15.2-4.8,24.8-5.6c9.6,0,15.2,1.6,13.6,10.4 c-28.8,0-48,5.6-52,24.8c-5.6,32,29.6,32.8,43.2,18.4l-1.6,8.8h25.6l11.2-52C418.4,206.8,399.2,199.6,381.6,200.4z M383.2,254 c-1.6,6.4-7.2,8.8-13.6,9.6c-5.6,0-10.4-3.2-7.2-9.6c3.2-4.8,10.4-4.8,16-4.8c1.6,0,4,0,6.4,0C384,248.4,383.2,251.6,383.2,254z"
        ></path>
        <path
          style={{ fill: "#1A80AD" }}
          d="M349.6,223.6c4-1.6,15.2-4.8,24.8-5.6c9.6,0,15.2,1.6,13.6,10.4c-28.8,0-48,5.6-52,24.8 c-5.6,32,29.6,32.8,43.2,18.4l-1.6,8.8h25.6l11.2-52c4.8-21.6-15.2-27.2-32.8-27.2 M383.2,254c-1.6,6.4-7.2,8.8-13.6,9.6 c-5.6,0-10.4-3.2-7.2-9.6c3.2-4.8,10.4-4.8,16-4.8c1.6,0,4,0,6.4,0C384,248.4,383.2,251.6,383.2,254z"
        ></path>
        <polygon
          style={{ fill: "#32A6CE" }}
          points="436,176.4 415.2,280.4 440.8,280.4 462.4,176.4 "
        ></polygon>
        <polygon
          style={{ fill: "#1A80AD" }}
          points="454.4,176.4 415.2,280.4 440.8,280.4 462.4,176.4 436,176.4 436,176.4 "
        ></polygon>
        <path
          style={{ fill: "#32A6CE" }}
          d="M316.8,176.4h-47.2l-20.8,104h28l7.2-32h20c19.2,0,35.2-11.2,39.2-31.2 C347.2,194,330.4,176.4,316.8,176.4z M316,212.4c-1.6,7.2-8.8,12-16,12h-12.8l5.6-24h13.6C313.6,200.4,317.6,205.2,316,212.4z"
        ></path>
        <path
          style={{ fill: "#1A80AD" }}
          d="M316.8,176.4h-32l-36.8,104h28l7.2-32h20c19.2,0,35.2-11.2,39.2-31.2 C347.2,194,330.4,176.4,316.8,176.4z M316,212.4c-1.6,7.2-8.8,12-16,12h-12.8l5.6-24h13.6C313.6,200.4,317.6,205.2,316,212.4z"
        ></path>
        <path
          style={{ fill: "#21789E" }}
          d="M132,200.4c-12,0-21.6,3.2-28.8,4.8l-2.4,18.4c3.2-1.6,15.2-4.8,24.8-5.6c9.6,0,15.2,1.6,13.6,10.4 c-28,0-47.2,5.6-51.2,24.8c-5.6,32,28.8,32.8,42.4,18.4l-1.6,8.8h25.6l11.2-52C169.6,206.8,149.6,199.6,132,200.4z M134.4,254 c-1.6,6.4-7.2,8.8-13.6,9.6c-5.6,0-10.4-3.2-6.4-9.6c3.2-4.8,10.4-4.8,15.2-4.8c2.4,0,4,0,6.4,0C135.2,248.4,134.4,251.6,134.4,254z "
        ></path>
        <path
          style={{ fill: "#1A5B80" }}
          d="M101.6,223.6c3.2-1.6,15.2-4.8,24.8-5.6c9.6,0,15.2,1.6,13.6,10.4c-28,0-47.2,5.6-51.2,24.8 c-5.6,32,28.8,32.8,42.4,18.4l-2.4,8.8h25.6l11.2-52c4.8-21.6-15.2-27.2-32.8-27.2 M134.4,254c-1.6,6.4-7.2,8.8-13.6,9.6 c-5.6,0-10.4-3.2-6.4-9.6c3.2-4.8,10.4-4.8,15.2-4.8c2.4,0,4,0,6.4,0C135.2,248.4,134.4,251.6,134.4,254z"
        ></path>
        <polygon
          style={{ fill: "#21789E" }}
          points="176,200.4 201.6,200.4 205.6,245.2 231.2,200.4 257.6,200.4 196.8,312.4 168,312.4 186.4,278.8 "
        ></polygon>
        <polyline
          style={{ fill: "#1A5B80" }}
          points="201.6,202 205.6,246 231.2,200.4 257.6,200.4 196.8,312.4 168,312.4 186.4,279.6 "
        ></polyline>
        <path
          style={{ fill: "#21789E" }}
          d="M68.8,176.4h-48L0,280.4h28l7.2-32h20c19.2,0,35.2-11.2,39.2-31.2C99.2,194,82.4,176.4,68.8,176.4z M68,212.4c-1.6,7.2-8.8,12-16,12H39.2l5.6-24h13.6C65.6,200.4,69.6,205.2,68,212.4z"
        ></path>
        <path
          style={{ fill: "#1A5B80" }}
          d="M68.8,176.4H47.2L0,280.4h28l7.2-32h20c19.2,0,35.2-11.2,39.2-31.2C99.2,194,82.4,176.4,68.8,176.4z M68,212.4c-1.6,7.2-8.8,12-16,12H39.2l5.6-24h13.6C65.6,200.4,69.6,205.2,68,212.4z"
        ></path>
        <g>
          <path
            style={{ fill: "#06435E" }}
            d="M127.2,228.4c-21.6,1.6-36,8-39.2,24c-5.6,32,28.8,32.8,42.4,18.4l-1.6,9.6h25.6l4-19.2L127.2,228.4 z M134.4,254c-1.6,6.4-7.2,8.8-13.6,9.6c-5.6,0-10.4-3.2-6.4-9.6c3.2-4.8,10.4-4.8,15.2-4.8c2.4,0,4,0,6.4,0 C135.2,248.4,134.4,251.6,134.4,254z"
          ></path>
          <polygon
            style={{ fill: "#06435E" }}
            points="207.2,244.4 205.6,246.8 222.4,262.8 257.6,200.4 231.2,200.4 "
          ></polygon>
          <polygon
            style={{ fill: "#06435E" }}
            points="28,280.4 35.2,248.4 2.4,280.4 "
          ></polygon>
        </g>
        <g>
          <polygon
            style={{ fill: "#2273AA" }}
            points="276,280.4 283.2,246.8 283.2,247.6 250.4,280.4 "
          ></polygon>
          <path
            style={{ fill: "#2273AA" }}
            d="M376,228.4c-21.6,1.6-36,8-39.2,24c-5.6,32,29.6,32.8,43.2,18.4l-2.4,9.6h25.6l4-19.2L376,228.4z M383.2,254c-1.6,6.4-7.2,8.8-13.6,9.6c-5.6,0-10.4-3.2-7.2-9.6c3.2-4.8,10.4-4.8,16-4.8c1.6,0,4,0,6.4,0 C384,248.4,383.2,251.6,383.2,254z"
          ></path>
          <polygon
            style={{ fill: "#2273AA" }}
            points="433.6,233.2 415.2,280.4 440.8,280.4 448,248.4 "
          ></polygon>
        </g>
        <g>
          <path
            style={{ fill: "#32A6CE" }}
            d="M468,193.2V182h-4v-1.6h10.4v1.6h-4v11.2H468z"
          ></path>
          <path
            style={{ fill: "#32A6CE" }}
            d="M476,193.2v-12.8h2.4l3.2,8.8c0,0.8,0.8,1.6,0.8,1.6c0-0.8,0-0.8,0.8-2.4l3.2-8.8h2.4v12.8h-1.6 v-11.2l-4,11.2h-2.4l-4-11.2v11.2H476V193.2z"
          ></path>
        </g>
      </svg>
    ),
    link: "#",
  },
  {
    svg: (
      <svg
        height={50}
        width={50}
        id="Layer_1"
        enableBackground="new 0 0 24 24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <linearGradient
          id="SVGID_1_"
          gradientUnits="userSpaceOnUse"
          x1="1.994"
          x2="22.006"
          y1="12"
          y2="12"
        >
          <stop offset="0" stopColor="#02beff"></stop>
          <stop offset="1" stopColor="#535bff"></stop>
        </linearGradient>
        <switch>
          <g>
            <path
              d="m15.3 5.3c-1.1 0-2.3.3-3.3.9-3.2-1.9-7.3-.7-9.1 2.5s-.7 7.3 2.6 9.2c2 1.1 4.5 1.1 6.6 0 3.2 1.8 7.3.6 9.1-2.6s.6-7.3-2.6-9.1c-1-.6-2.2-.9-3.3-.9zm-5 11.2c-.5.2-1 .3-1.5.3-2.7-.1-4.8-2.2-4.8-4.8s2.1-4.7 4.7-4.7c.5 0 1 .1 1.5.3-2.2 2.5-2.2 6.3.1 8.9zm1.7-1.1c-1.9-1.8-1.9-4.8-.2-6.6.1-.1.2-.1.2-.2 1.9 1.8 1.9 4.8.2 6.6-.1.1-.1.1-.2.2zm3.3 1.3c-.5 0-1-.1-1.5-.3 2.3-2.5 2.3-6.4 0-8.9.5-.2 1-.3 1.5-.3 2.6 0 4.7 2.1 4.7 4.7s-2.1 4.8-4.7 4.8z"
              fill="url(#SVGID_1_)"
            ></path>
          </g>
        </switch>
      </svg>
    ),
    link: "#",
  },
  {
    svg: (
      <svg
        height={50}
        width={50}
        version="1.1"
        id="Capa_1"
        x="0px"
        y="0px"
        viewBox="0 0 504 504"
        enableBackground="new 0 0 504 504"
      >
        <polygon
          style={{ fill: "#3C58BF" }}
          points="184.8,324.4 210.4,180.4 250.4,180.4 225.6,324.4 "
        ></polygon>
        <polygon
          style={{ fill: "#293688" }}
          points="184.8,324.4 217.6,180.4 250.4,180.4 225.6,324.4 "
        ></polygon>
        <path
          style={{ fill: "#3C58BF" }}
          d="M370.4,182c-8-3.2-20.8-6.4-36.8-6.4c-40,0-68.8,20-68.8,48.8c0,21.6,20,32.8,36,40 s20.8,12,20.8,18.4c0,9.6-12.8,14.4-24,14.4c-16,0-24.8-2.4-38.4-8l-5.6-2.4l-5.6,32.8c9.6,4,27.2,8,45.6,8 c42.4,0,70.4-20,70.4-50.4c0-16.8-10.4-29.6-34.4-40c-14.4-7.2-23.2-11.2-23.2-18.4c0-6.4,7.2-12.8,23.2-12.8 c13.6,0,23.2,2.4,30.4,5.6l4,1.6L370.4,182L370.4,182z"
        ></path>
        <path
          style={{ fill: "#293688" }}
          d="M370.4,182c-8-3.2-20.8-6.4-36.8-6.4c-40,0-61.6,20-61.6,48.8c0,21.6,12.8,32.8,28.8,40 s20.8,12,20.8,18.4c0,9.6-12.8,14.4-24,14.4c-16,0-24.8-2.4-38.4-8l-5.6-2.4l-5.6,32.8c9.6,4,27.2,8,45.6,8 c42.4,0,70.4-20,70.4-50.4c0-16.8-10.4-29.6-34.4-40c-14.4-7.2-23.2-11.2-23.2-18.4c0-6.4,7.2-12.8,23.2-12.8 c13.6,0,23.2,2.4,30.4,5.6l4,1.6L370.4,182L370.4,182z"
        ></path>
        <path
          style={{ fill: "#3C58BF" }}
          d="M439.2,180.4c-9.6,0-16.8,0.8-20.8,10.4l-60,133.6h43.2l8-24h51.2l4.8,24H504l-33.6-144H439.2z M420.8,276.4c2.4-7.2,16-42.4,16-42.4s3.2-8.8,5.6-14.4l2.4,13.6c0,0,8,36,9.6,44h-33.6V276.4z"
        ></path>
        <path
          style={{ fill: "#293688" }}
          d="M448.8,180.4c-9.6,0-16.8,0.8-20.8,10.4l-69.6,133.6h43.2l8-24h51.2l4.8,24H504l-33.6-144H448.8z M420.8,276.4c3.2-8,16-42.4,16-42.4s3.2-8.8,5.6-14.4l2.4,13.6c0,0,8,36,9.6,44h-33.6V276.4z"
        ></path>
        <path
          style={{ fill: "#3C58BF" }}
          d="M111.2,281.2l-4-20.8c-7.2-24-30.4-50.4-56-63.2l36,128h43.2l64.8-144H152L111.2,281.2z"
        ></path>
        <path
          style={{ fill: "#293688" }}
          d="M111.2,281.2l-4-20.8c-7.2-24-30.4-50.4-56-63.2l36,128h43.2l64.8-144H160L111.2,281.2z"
        ></path>
        <path
          style={{ fill: "#FFBC00" }}
          d="M0,180.4l7.2,1.6c51.2,12,86.4,42.4,100,78.4l-14.4-68c-2.4-9.6-9.6-12-18.4-12H0z"
        ></path>
        <path
          style={{ fill: "#F7981D" }}
          d="M0,180.4L0,180.4c51.2,12,93.6,43.2,107.2,79.2l-13.6-56.8c-2.4-9.6-10.4-15.2-19.2-15.2L0,180.4z"
        ></path>
        <path
          style={{ fill: "#ED7C00" }}
          d="M0,180.4L0,180.4c51.2,12,93.6,43.2,107.2,79.2l-9.6-31.2c-2.4-9.6-5.6-19.2-16.8-23.2L0,180.4z"
        ></path>
        <g>
          <path
            style={{ fill: "#051244" }}
            d="M151.2,276.4L124,249.2l-12.8,30.4l-3.2-20c-7.2-24-30.4-50.4-56-63.2l36,128h43.2L151.2,276.4z"
          ></path>
          <polygon
            style={{ fill: "#051244" }}
            points="225.6,324.4 191.2,289.2 184.8,324.4 "
          ></polygon>
          <path
            style={{ fill: "#051244" }}
            d="M317.6,274.8L317.6,274.8c3.2,3.2,4.8,5.6,4,8.8c0,9.6-12.8,14.4-24,14.4c-16,0-24.8-2.4-38.4-8 l-5.6-2.4l-5.6,32.8c9.6,4,27.2,8,45.6,8c25.6,0,46.4-7.2,58.4-20L317.6,274.8z"
          ></path>
          <path
            style={{ fill: "#051244" }}
            d="M364,324.4h37.6l8-24h51.2l4.8,24H504L490.4,266l-48-46.4l2.4,12.8c0,0,8,36,9.6,44h-33.6 c3.2-8,16-42.4,16-42.4s3.2-8.8,5.6-14.4"
          ></path>
        </g>
      </svg>
    ),
    link: "#",
  },
  {
    svg: (
      <svg
        height={50}
        width={50}
        version="1.1"
        id="Capa_1"
        x="0px"
        y="0px"
        viewBox="0 0 504 504"
        enableBackground="new 0 0 504 504"
      >
        <polygon
          style={{ fill: "#2FABF7" }}
          points="43.2,207.6 60.8,207.6 52,185.2 "
        ></polygon>
        <path
          style={{ fill: "#228FE0" }}
          d="M261.6,188.4c-1.6-0.8-4-0.8-6.4-0.8h-16v12.8h16c2.4,0,4.8,0,6.4-0.8s2.4-3.2,2.4-5.6 C264.8,190.8,263.2,189.2,261.6,188.4z"
        ></path>
        <path
          style={{ fill: "#0571C1" }}
          d="M432.8,164.4v9.6l-4.8-9.6h-37.6v9.6l-4.8-9.6h-51.2c-8.8,0-16,1.6-22.4,4.8v-4.8h-36v4.8 c-4-3.2-8.8-4.8-15.2-4.8H132l-8.8,20l-8.8-20H73.6v9.6l-4.8-9.6H34.4l-16,37.6L0,243.6h18.4h22.4l4.8-12.8h11.2l4.8,12.8H108V234 l4,9.6h23.2l4-9.6v9.6h111.2v-20.8h1.6c1.6,0,1.6,0,1.6,2.4v17.6h57.6V238c4.8,2.4,12,4.8,21.6,4.8h24l4.8-12.8h11.2l4.8,12.8H424 v-12l7.2,12h37.6v-78.4H432.8L432.8,164.4z M162.4,231.6h-13.6v-44l-19.2,44h-12l-19.2-44v44H71.2l-5.6-12H38.4l-4.8,12.8H18.4 l24-56.8h20l22.4,53.6v-53.6h21.6L124,214l16-38.4h22.4V231.6z M216.8,187.6h-31.2V198H216v11.2h-30.4v11.2h31.2v12H172v-56.8h44.8 V187.6z M276.8,210.8c1.6,3.2,2.4,5.6,2.4,10.4v11.2h-13.6v-7.2c0-3.2,0-8-2.4-11.2c-2.4-2.4-4.8-2.4-9.6-2.4h-14.4v20.8h-13.6 v-56.8H256c7.2,0,12,0,16,2.4s6.4,6.4,6.4,12.8c0,8.8-5.6,13.6-9.6,15.2C272.8,206.8,275.2,209.2,276.8,210.8z M300.8,231.6h-13.6 v-56.8h13.6V231.6z M458.4,231.6h-19.2l-25.6-42.4v42.4h-27.2l-4.8-12h-28l-4.8,12.8h-15.2c-6.4,0-14.4-1.6-19.2-6.4 c-4.8-4.8-7.2-11.2-7.2-21.6c0-8,1.6-16,7.2-22.4c4-4.8,11.2-6.4,20-6.4h12.8v12h-12.8c-4.8,0-7.2,0.8-10.4,3.2 c-2.4,2.4-4,7.2-4,12.8c0,6.4,0.8,10.4,4,13.6c2.4,2.4,5.6,3.2,9.6,3.2h5.6l18.4-44h20L400,230v-53.6h20l23.2,39.2v-39.2h13.6v55.2 L458.4,231.6L458.4,231.6z"
        ></path>
        <g>
          <polygon
            style={{ fill: "#228FE0" }}
            points="358.4,207.6 376.8,207.6 368,185.2 "
          ></polygon>
          <polygon
            style={{ fill: "#228FE0" }}
            points="222.4,322.8 222.4,277.2 201.6,299.6 "
          ></polygon>
        </g>
        <polygon
          style={{ fill: "#2FABF7" }}
          points="136.8,282.8 136.8,293.2 166.4,293.2 166.4,304.4 136.8,304.4 136.8,316.4 169.6,316.4 184.8,299.6 170.4,282.8 "
        ></polygon>
        <path
          id="SVGCleanerId_0"
          style={{ fill: "#228FE0" }}
          d="M252.8,282.8H236v14.4h17.6c4.8,0,8-2.4,8-7.2 C260.8,285.2,257.6,282.8,252.8,282.8z"
        ></path>
        <path
          style={{ fill: "#0571C1" }}
          d="M500,296.4v-36h-9.6h-24c-7.2,0-12.8,1.6-16.8,4.8v-4.8h-36.8c-5.6,0-12.8,1.6-16,4.8v-4.8H332v4.8 c-4.8-4-13.6-4.8-17.6-4.8h-43.2v4.8c-4-4-13.6-4.8-18.4-4.8h-48l-11.2,12l-10.4-12h-72v78.4h70.4l11.2-12l10.4,12h43.2v-18.4h5.6 c5.6,0,12.8,0,18.4-2.4v21.6h36v-20.8h1.6c2.4,0,2.4,0,2.4,2.4v18.4h108.8c7.2,0,14.4-1.6,18.4-4.8v4.8H472c7.2,0,14.4-0.8,19.2-4 l0,0c8-4.8,12.8-13.6,12.8-24C504,306,502.4,300.4,500,296.4z M252,309.2h-16v19.2h-25.6l-16-18.4l-16.8,18.4h-52.8v-56.8h53.6 l16,18.4l16.8-18.4h42.4c10.4,0,22.4,3.2,22.4,18.4C275.2,306,264,309.2,252,309.2z M332,306c1.6,2.4,2.4,5.6,2.4,10.4v11.2h-13.6 v-7.2c0-3.2,0-8.8-2.4-11.2c-1.6-2.4-4.8-2.4-9.6-2.4h-14.4v20.8h-13.6v-56.8h30.4c6.4,0,12,0,16,2.4s7.2,6.4,7.2,12.8 c0,8.8-5.6,13.6-9.6,15.2C328.8,302.8,331.2,304.4,332,306z M387.2,282.8H356v10.4h30.4v11.2H356v11.2h31.2v12h-44.8v-56.8h44.8 V282.8z M420.8,327.6h-25.6v-12h25.6c2.4,0,4,0,5.6-1.6c0.8-0.8,1.6-2.4,1.6-4s-0.8-3.2-1.6-4c-0.8-0.8-2.4-1.6-4.8-1.6 c-12.8-0.8-28,0-28-17.6c0-8,4.8-16.8,19.2-16.8h26.4v13.6h-24.8c-2.4,0-4,0-5.6,0.8s-1.6,2.4-1.6,4c0,2.4,1.6,3.2,3.2,4 s3.2,0.8,4.8,0.8h7.2c7.2,0,12,1.6,15.2,4.8c2.4,2.4,4,6.4,4,12C441.6,322,434.4,327.6,420.8,327.6z M489.6,322 c-3.2,3.2-8.8,5.6-16.8,5.6h-25.6v-12h25.6c2.4,0,4,0,5.6-1.6c0.8-0.8,1.6-2.4,1.6-4s-0.8-3.2-1.6-4c-0.8-0.8-2.4-1.6-4.8-1.6 c-12.8-0.8-28,0-28-17.6c0-8,4.8-16.8,19.2-16.8h26.4v13.6h-24c-2.4,0-4,0-5.6,0.8s-1.6,2.4-1.6,4c0,2.4,0.8,3.2,3.2,4 c1.6,0.8,3.2,0.8,4.8,0.8h7.2c7.2,0,12,1.6,15.2,4.8c0.8,0,0.8,0.8,0.8,0.8c2.4,3.2,3.2,7.2,3.2,11.2 C494.4,314.8,492.8,318.8,489.6,322z"
        ></path>
        <path
          id="SVGCleanerId_1"
          style={{ fill: "#228FE0" }}
          d="M317.6,284.4c-1.6-0.8-4-0.8-6.4-0.8h-16v12.8h16c2.4,0,4.8,0,6.4-0.8 s2.4-3.2,2.4-5.6C320.8,286.8,319.2,285.2,317.6,284.4z"
        ></path>
        <g>
          <path
            style={{ fill: "#228FE0" }}
            d="M261.6,188.4c-1.6-0.8-4-0.8-6.4-0.8h-16v12.8h16c2.4,0,4.8,0,6.4-0.8s2.4-3.2,2.4-5.6 C264.8,190.8,263.2,189.2,261.6,188.4z"
          ></path>
          <polygon
            style={{ fill: "#228FE0" }}
            points="358.4,207.6 376.8,207.6 368,185.2 "
          ></polygon>
          <polygon
            style={{ fill: "#228FE0" }}
            points="222.4,322.8 222.4,277.2 201.6,299.6 "
          ></polygon>
        </g>
        <g>
          <path
            id="SVGCleanerId_0_1_"
            style={{ fill: "#228FE0" }}
            d="M252.8,282.8H236v14.4h17.6c4.8,0,8-2.4,8-7.2 C260.8,285.2,257.6,282.8,252.8,282.8z"
          ></path>
        </g>
        <g>
          <path
            id="SVGCleanerId_1_1_"
            style={{ fill: "#228FE0" }}
            d="M317.6,284.4c-1.6-0.8-4-0.8-6.4-0.8h-16v12.8h16c2.4,0,4.8,0,6.4-0.8 s2.4-3.2,2.4-5.6C320.8,286.8,319.2,285.2,317.6,284.4z"
          ></path>
        </g>
        <g>
          <polygon
            style={{ fill: "#2FABF7" }}
            points="247.2,326 236,314 236,327.6 209.6,327.6 193.6,309.2 176,327.6 123.2,327.6 123.2,271.6 176.8,271.6 193.6,290 201.6,280.4 181.6,260.4 111.2,260.4 111.2,338.8 181.6,338.8 193.6,326.8 204,338.8 247.2,338.8 "
          ></polygon>
          <polygon
            style={{ fill: "#2FABF7" }}
            points="164,242.8 153.6,231.6 148.8,231.6 148.8,226.8 136.8,214.8 128.8,231.6 117.6,231.6 98.4,187.6 98.4,231.6 71.2,231.6 65.6,219.6 38.4,219.6 32.8,231.6 18.4,231.6 42.4,175.6 62.4,175.6 84.8,229.2 84.8,175.6 96.8,175.6 85.6,164.4 73.6,164.4 73.6,174 69.6,164.4 34.4,164.4 18.4,202 0,242.8 18.4,242.8 41.6,242.8 46.4,230.8 57.6,230.8 63.2,242.8 108,242.8 108,233.2 112,242.8 135.2,242.8 139.2,233.2 139.2,242.8 "
          ></polygon>
          <polygon
            style={{ fill: "#2FABF7" }}
            points="127.2,206 114.4,193.2 124,214 "
          ></polygon>
        </g>
        <g>
          <path
            style={{ fill: "#228FE0" }}
            d="M491.2,334.8c7.2-4.8,12-12.8,12.8-21.6L492.8,302c0.8,2.4,1.6,4.8,1.6,8c0,4.8-1.6,8.8-4.8,12 c-3.2,3.2-8.8,5.6-16.8,5.6h-25.6v-12h25.6c2.4,0,4,0,5.6-1.6c0.8-0.8,1.6-2.4,1.6-4s-0.8-3.2-1.6-4c-0.8-0.8-2.4-1.6-4.8-1.6 c-12.8-0.8-28,0-28-17.6c0-8,4.8-15.2,16.8-16.8l-8.8-8.8c-1.6,0.8-2.4,1.6-3.2,1.6V258h-36.8c-5.6,0-12.8,1.6-16,4.8V258H332v4.8 c-4.8-4-13.6-4.8-17.6-4.8h-43.2v4.8c-4-4-13.6-4.8-18.4-4.8h-48l-11.2,12l-10.4-12h-8.8l24,24l12-12.8h42.4 c10.4,0,22.4,3.2,22.4,18.4c0,16-11.2,19.2-23.2,19.2h-16v12l12,12v-12h4c5.6,0,12.8,0,18.4-2.4V338h36v-20.8h1.6 c2.4,0,2.4,0,2.4,2.4V338h108.8c7.2,0,14.4-1.6,18.4-4.8v4.8H472C478.4,338.8,485.6,338,491.2,334.8L491.2,334.8z M332,306 c1.6,2.4,2.4,5.6,2.4,10.4v11.2h-13.6v-7.2c0-3.2,0-8.8-2.4-11.2c-1.6-2.4-4.8-2.4-9.6-2.4h-14.4v20.8h-13.6v-56.8h30.4 c6.4,0,12,0,16,2.4s7.2,6.4,7.2,12.8c0,8.8-5.6,13.6-9.6,15.2C328.8,302.8,331.2,304.4,332,306z M387.2,282.8H356v10.4h30.4v11.2 H356v11.2h31.2v12h-44.8v-56.8h44.8V282.8z M420.8,327.6h-25.6v-12h25.6c2.4,0,4,0,5.6-1.6c0.8-0.8,1.6-2.4,1.6-4s-0.8-3.2-1.6-4 c-0.8-0.8-2.4-1.6-4.8-1.6c-12.8-0.8-28,0-28-17.6c0-8,4.8-16.8,19.2-16.8h26.4v13.6h-24.8c-2.4,0-4,0-5.6,0.8s-1.6,2.4-1.6,4 c0,2.4,1.6,3.2,3.2,4s3.2,0.8,4.8,0.8h7.2c7.2,0,12,1.6,15.2,4.8c2.4,2.4,4,6.4,4,12C441.6,322,434.4,327.6,420.8,327.6z"
          ></path>
          <path
            style={{ fill: "#228FE0" }}
            d="M459.2,288.4c0,2.4,0.8,3.2,3.2,4c1.6,0.8,3.2,0.8,4.8,0.8h7.2c4.8,0,8,0.8,11.2,2.4l-12-12h-7.2 c-2.4,0-4,0-5.6,0.8C460,285.2,459.2,286.8,459.2,288.4z"
          ></path>
          <polygon
            style={{ fill: "#228FE0" }}
            points="431.2,240.4 432.8,242.8 433.6,242.8 "
          ></polygon>
          <polygon
            style={{ fill: "#228FE0" }}
            points="387.2,196.4 400.8,229.2 400.8,210 "
          ></polygon>
          <path
            style={{ fill: "#228FE0" }}
            d="M250.4,222.8h1.6c1.6,0,1.6,0,1.6,2.4v17.6h57.6V238c4.8,2.4,12,4.8,21.6,4.8h24l4.8-12.8h11.2 l4.8,12.8H424v-8l-11.2-11.2v8.8h-27.2l-4-12.8h-28l-4.8,12.8h-15.2c-6.4,0-14.4-1.6-19.2-6.4c-4.8-4.8-7.2-11.2-7.2-21.6 c0-8,1.6-16,7.2-22.4c4-4.8,11.2-6.4,20-6.4h12.8v12h-12.8c-4.8,0-7.2,0.8-10.4,3.2c-2.4,2.4-4,7.2-4,12.8c0,6.4,0.8,10.4,4,13.6 c2.4,2.4,5.6,3.2,9.6,3.2h5.6l18.4-44h8l-11.2-11.2h-20.8c-8.8,0-16,1.6-22.4,4.8v-4.8H276v4.8c-4-3.2-8.8-4.8-15.2-4.8H132 l-8.8,20l-8.8-20H79.2l11.2,11.2h16L120,206l4.8,4.8l14.4-35.2h22.4v56.8H148v-44l-13.6,32l23.2,23.2h92L250.4,222.8z M287.2,175.6 h13.6v56.8h-13.6V175.6z M216.8,187.6h-31.2V198H216v11.2h-30.4v11.2h31.2v12H172v-56.8h44.8V187.6z M239.2,231.6h-13.6v-56.8H256 c7.2,0,12,0,16,2.4s6.4,6.4,6.4,12.8c0,8.8-5.6,13.6-9.6,15.2c3.2,0.8,5.6,3.2,6.4,4.8c1.6,3.2,2.4,5.6,2.4,10.4v11.2H264v-7.2 c0-3.2,0-8-2.4-11.2c-0.8-1.6-3.2-1.6-8-1.6h-14.4L239.2,231.6L239.2,231.6z"
          ></path>
        </g>
      </svg>
    ),
    link: "#",
  },
];

interface Item {
  title: string;
  link: string;
}
[];

interface Element {
  svg: JSX.Element;
  link: string;
}
[];

export const Feedback: React.FC = () => {
  return (
    <>
      <section className={Style.feedback}>
        <nav>
          <h3 className={Style.title}>My Account</h3>

          <ul className={Style.lists}>
            {account.map((item: Item, index: number) => (
              <li className={Style.list} key={index}>
                <Link className={Style.link} href={item.link}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav>
          <h3 className={Style.title}>Help & Guide</h3>

          <ul className={Style.lists}>
            {help.map((item: Item, index: number) => (
              <li className={Style.list} key={index}>
                <Link className={Style.link} href={item.link}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav>
          <h3 className={Style.title}>Categories</h3>

          <ul className={Style.lists}>
            {categories.map((item: Item, index: number) => (
              <li className={Style.list} key={index}>
                <Link className={Style.link} href={item.link}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={Style.accept}>
          <nav style={{ marginBottom: "30px" }}>
            <h3 className={Style.title}>Social Media</h3>

            <ul className={Style.lists}>
              {media.map((item: Element, index: number) => (
                <li className={Style.list} key={index}>
                  <Link href={item.link}>{item.svg}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav>
            <h3 className={Style.title}>We accept</h3>

            <ul className={Style.lists}>
              {order.map((item: Element, index: number) => (
                <li key={index}>
                  <Link href={item.link}>{item.svg}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <p className={Style.privacy}>© 2024 GreenShop. All Rights Reserved.</p>
    </>
  );
};
