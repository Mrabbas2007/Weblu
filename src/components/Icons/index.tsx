interface IIcon {
    size?: number;
    className?: string;
}

const Logo = ({ className = "" }: { className?: string }) => (
    <svg className={className} width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect width="24" height="24" rx="6" fill="#696FC7" />
        <path d="M7 13L10 9L14 15L17 11" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const PaintBoard = ({ size = 24, className }: IIcon) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className={className}>
        <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C12.8417 22 14 22.1163 14 21C14 20.391 13.6832 19.9212 13.3686 19.4544C12.9082 18.7715 12.4523 18.0953 13 17C13.6667 15.6667 14.7778 15.6667 16.4815 15.6667C17.3334 15.6667 18.3334 15.6667 19.5 15.5C21.601 15.1999 22 13.9084 22 12Z" strokeWidth="1.5" />
        <path d="M7 15.0024L7.00868 15.0001" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9.5" cy="8.5" r="1.5" strokeWidth="1.5" />
        <circle cx="16.5" cy="9.5" r="1.5" strokeWidth="1.5" />
    </svg>
);

const CodeSquar = ({ size = 24, className }: IIcon) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className={className}>
        <path d="M16 10L17.2265 11.0572C17.7422 11.5016 18 11.7239 18 12C18 12.2761 17.7422 12.4984 17.2265 12.9428L16 14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 10L6.77346 11.0572C6.25782 11.5016 6 11.7239 6 12C6 12.2761 6.25782 12.4984 6.77346 12.9428L8 14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 9L11 15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" strokeWidth="1.5" />
    </svg>
);

const Wordpress = ({ size = 24, className }: IIcon) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className={className}>
        <path d="M2 6H3M3 6L7.457 17.4921C8.10731 19.1689 8.43246 20.0073 8.9816 20C9.53074 19.9926 9.83482 19.1459 10.443 17.4524L10.5 17.2935M3 6H6.5M6.5 6H7.457M6.5 6L10.5 17.2935M10.5 17.2935L12.816 11" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 6H11M11 6L15.457 17.4921C16.1073 19.1689 16.4325 20.0073 16.9816 20C17.5307 19.9926 17.8348 19.1459 18.443 17.4524L18.5 17.2935M11 6H14.5M14.5 6H15.457M14.5 6L18.5 17.2935M18.5 17.2935L20.5288 11.644M20.5288 11.644L21.5377 9.23491C21.9415 8.12432 22.0835 6.93739 21.9529 5.76443C21.7963 4.35795 21.1576 3 19.5012 3C17.9632 3 17.2101 4.72272 18.1898 5.89363C19.7701 7.78249 21.1719 9.87537 20.5288 11.644Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const ShopingCart = ({ size = 24, className }: IIcon) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className={className}>
        <path d="M8 16H15.2632C19.7508 16 20.4333 13.1808 21.261 9.06908C21.4998 7.88311 21.6192 7.29013 21.3321 6.89507C21.045 6.5 20.4947 6.5 19.3941 6.5H6" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 16L5.37873 3.51493C5.15615 2.62459 4.35618 2 3.43845 2H2.5" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8.88 16H8.46857C7.10522 16 6 17.1513 6 18.5714C6 18.8081 6.1842 19 6.41143 19H17.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="10.5" cy="20.5" r="1.5" strokeWidth="1.5" />
        <circle cx="17.5" cy="20.5" r="1.5" strokeWidth="1.5" />
    </svg>
);

const IdeaIcon = ({ size = 24, className }: IIcon) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className={className}>
        <path d="M5.14286 14C4.41735 12.8082 4 11.4118 4 9.91886C4 5.54539 7.58172 2 12 2C16.4183 2 20 5.54539 20 9.91886C20 11.4118 19.5827 12.8082 18.8571 14" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7.38287 17.0982C7.291 16.8216 7.24507 16.6833 7.25042 16.5713C7.26174 16.3343 7.41114 16.1262 7.63157 16.0405C7.73579 16 7.88105 16 8.17157 16H15.8284C16.119 16 16.2642 16 16.3684 16.0405C16.5889 16.1262 16.7383 16.3343 16.7496 16.5713C16.7549 16.6833 16.709 16.8216 16.6171 17.0982C16.4473 17.6094 16.3624 17.8651 16.2315 18.072C15.9572 18.5056 15.5272 18.8167 15.0306 18.9408C14.7935 19 14.525 19 13.9881 19H10.0119C9.47495 19 9.2065 19 8.96944 18.9408C8.47283 18.8167 8.04281 18.5056 7.7685 18.072C7.63755 17.8651 7.55266 17.6094 7.38287 17.0982Z" strokeWidth="1.5" />
        <path d="M15 19L14.8707 19.6466C14.7293 20.3537 14.6586 20.7072 14.5001 20.9866C14.2552 21.4185 13.8582 21.7439 13.3866 21.8994C13.0816 22 12.7211 22 12 22C11.2789 22 10.9184 22 10.6134 21.8994C10.1418 21.7439 9.74484 21.4185 9.49987 20.9866C9.34144 20.7072 9.27073 20.3537 9.12932 19.6466L9 19" strokeWidth="1.5" />
        <path d="M12 16V11" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const UsersGroup = ({ size = 24, className }: IIcon) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className={className}>
        <path d="M20.774 18C21.5233 18 22.1193 17.5285 22.6545 16.8691C23.7499 15.5194 21.9513 14.4408 21.2654 13.9126C20.568 13.3756 19.7894 13.0714 19 13M18 11C19.3807 11 20.5 9.88071 20.5 8.5C20.5 7.11929 19.3807 6 18 6" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3.22596 18C2.47666 18 1.88067 17.5285 1.34555 16.8691C0.250089 15.5194 2.04867 14.4408 2.73465 13.9126C3.43197 13.3756 4.21058 13.0714 5 13M5.5 11C4.11929 11 3 9.88071 3 8.5C3 7.11929 4.11929 6 5.5 6" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8.0838 15.1112C7.06203 15.743 4.38299 17.0331 6.0147 18.6474C6.81178 19.436 7.69952 20 8.81563 20H15.1844C16.3005 20 17.1882 19.436 17.9853 18.6474C19.617 17.0331 16.938 15.743 15.9162 15.1112C13.5201 13.6296 10.4799 13.6296 8.0838 15.1112Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.5 7.5C15.5 9.433 13.933 11 12 11C10.067 11 8.5 9.433 8.5 7.5C8.5 5.567 10.067 4 12 4C13.933 4 15.5 5.567 15.5 7.5Z" strokeWidth="1.5" />
    </svg>
);

const User = ({ size = 24, className }: IIcon) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className={className}>
        <path d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z" stroke-width="1.5" />
    </svg>
);

const CustomerService = ({ size = 24, className }: IIcon) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className={className}>
        <path d="M17 11.8045C17 11.4588 17 11.286 17.052 11.132C17.2032 10.6844 17.6018 10.5108 18.0011 10.3289C18.45 10.1244 18.6744 10.0222 18.8968 10.0042C19.1493 9.98378 19.4022 10.0382 19.618 10.1593C19.9041 10.3198 20.1036 10.6249 20.3079 10.873C21.2513 12.0188 21.7229 12.5918 21.8955 13.2236C22.0348 13.7334 22.0348 14.2666 21.8955 14.7764C21.6438 15.6979 20.8485 16.4704 20.2598 17.1854C19.9587 17.5511 19.8081 17.734 19.618 17.8407C19.4022 17.9618 19.1493 18.0162 18.8968 17.9958C18.6744 17.9778 18.45 17.8756 18.0011 17.6711C17.6018 17.4892 17.2032 17.3156 17.052 16.868C17 16.714 17 16.5412 17 16.1955V11.8045Z" stroke-width="1.5" />
        <path d="M7 11.8046C7 11.3694 6.98778 10.9782 6.63591 10.6722C6.50793 10.5609 6.33825 10.4836 5.99891 10.329C5.55001 10.1246 5.32556 10.0224 5.10316 10.0044C4.43591 9.9504 4.07692 10.4058 3.69213 10.8732C2.74875 12.019 2.27706 12.5919 2.10446 13.2237C1.96518 13.7336 1.96518 14.2668 2.10446 14.7766C2.3562 15.6981 3.15152 16.4705 3.74021 17.1856C4.11129 17.6363 4.46577 18.0475 5.10316 17.996C5.32556 17.978 5.55001 17.8757 5.99891 17.6713C6.33825 17.5167 6.50793 17.4394 6.63591 17.3281C6.98778 17.0221 7 16.631 7 16.1957V11.8046Z" stroke-width="1.5" />
        <path d="M20 10.5V9C20 5.13401 16.4183 2 12 2C7.58172 2 4 5.13401 4 9V10.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M20 17.5C20 22 16 22 12 22" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
)

const Computer = ({ size = 24, className }: IIcon) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className={className}>
        <path d="M20 17.1862C18.843 18 17.2107 18 13.9462 18H9.96412C6.6996 18 5.06734 18 3.9103 17.1862C3.48223 16.8851 3.1099 16.5111 2.81017 16.0811C2 14.9188 2 13.2792 2 10C2 6.72077 2 5.08116 2.81017 3.91891C3.1099 3.48891 3.48223 3.1149 3.9103 2.81382C5.06734 2 6.6996 2 9.96412 2" stroke-width="1.5" stroke-linecap="round" />
        <path d="M12 18V22" stroke-width="1.5" />
        <path d="M8 22H16" stroke-width="1.5" stroke-linecap="round" />
        <path d="M18 2C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6V10C22 11.8856 22 12.8284 21.4142 13.4142C20.8284 14 19.8856 14 18 14H17C15.1144 14 14.1716 14 13.5858 13.4142C13 12.8284 13 11.8856 13 10L13 6C13 4.11438 13 3.17157 13.5858 2.58579C14.1716 2 15.1144 2 17 2L18 2Z" stroke-width="1.5" stroke-linecap="round" />
        <path d="M17.5 11.5H17.509" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
)

const AddSquar = ({ size = 24, className }: IIcon) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className={className}>
        <path d="M12 8V16M16 12L8 12" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke-width="1.5" />
    </svg>
)

const CallIcon = ({ size = 24, className }: IIcon) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className={className}>
        <path d="M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424ZM3.77762 11.9424C5.69651 15.2883 8.70784 18.3013 12.0576 20.2224M12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9042C18.4524 22.3124 20.4292 21.3782 21.6905 19.8306C22.2236 19.1766 22.0415 18.4268 21.3476 18.04L19.7811 17.1668C18.5394 16.4747 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0661 16.7326 14.994 17.666L12.0576 20.2224Z" stroke-width="1.5" stroke-linejoin="round" />
    </svg>
)

const ArrowLeft = ({ size = 24, className }: IIcon) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className={className}>
        <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke-width="1.5" />
        <path d="M14 17L10.3725 12.6247C10.1242 12.3252 10 12.1754 10 12C10 11.8246 10.1242 11.6748 10.3725 11.3753L14 7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
)

const ArrowRight = ({ size = 24, className }: IIcon) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className={className}>
        <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke-width="1.5" />
        <path d="M10 17L13.6275 12.6247C13.8758 12.3252 14 12.1754 14 12C14 11.8246 13.8758 11.6748 13.6275 11.3753L10 7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
)

const InstagramIcon = ({ size = 24, className }: IIcon) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className={className}>
        <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke-width="1.5" stroke-linejoin="round" />
        <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke-width="1.5" />
        <path d="M17.5078 6.5L17.4988 6.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
)

const TelegramIcon = ({ size = 24, className }: IIcon) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className={className}>
        <path d="M11.9854 15.4083L15.2268 19.0936C16.4277 20.4589 17.0282 21.1416 17.6567 20.9754C18.2852 20.8092 18.5008 19.9108 18.9318 18.1138L21.3229 8.1459C21.9868 5.37832 22.3187 3.99454 21.5808 3.312C20.843 2.62947 19.564 3.13725 17.0061 4.15282L5.13876 8.86449C3.09293 9.67674 2.07001 10.0829 2.00507 10.7808C1.99842 10.8522 1.99831 10.9241 2.00474 10.9955C2.06754 11.6937 3.08921 12.1033 5.13255 12.9223C6.05838 13.2934 6.5213 13.479 6.8532 13.8344C6.89052 13.8743 6.9264 13.9157 6.96078 13.9584C7.26658 14.3384 7.39709 14.8371 7.65808 15.8344L8.14653 17.701C8.4005 18.6715 8.52749 19.1568 8.86008 19.223C9.19267 19.2891 9.48225 18.8867 10.0614 18.0819L11.9854 15.4083ZM11.9854 15.4083L11.6676 15.0771C11.3059 14.7001 11.1251 14.5117 11.1251 14.2775C11.1251 14.0433 11.3059 13.8548 11.6676 13.4778L15.2406 9.75409" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
)

const Mail = ({ size = 24, className }: IIcon) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className={className}>
        <path d="M7 8.5L9.94202 10.2394C11.6572 11.2535 12.3428 11.2535 14.058 10.2394L17 8.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z" stroke-width="1.5" stroke-linejoin="round" />
    </svg>
)

const Lock = ({ size = 24, className }: IIcon) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className={className}>
        <path d="M4.26781 18.8447C4.49269 20.515 5.87613 21.8235 7.55966 21.9009C8.97627 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.879 17.7547 20 16.6376 20 15.5C20 14.3624 19.879 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97627 9.03397 7.55966 9.09909C5.87613 9.17649 4.49269 10.485 4.26781 12.1553C4.12104 13.2453 4 14.3624 4 15.5C4 16.6376 4.12104 17.7547 4.26781 18.8447Z" stroke-width="1.5" />
        <path d="M7.5 9V6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5V9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M11.9961 15.5H12.0051" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
)

export {
    Logo, PaintBoard, CodeSquar, Wordpress, ShopingCart, IdeaIcon, User, UsersGroup, CustomerService, Computer, AddSquar, CallIcon,
    ArrowLeft, ArrowRight, InstagramIcon, TelegramIcon, Mail, Lock
}