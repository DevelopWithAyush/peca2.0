import Image from "next/image";

const TokenBuyCharacter = () => {
    return (
        <div className="flex flex-row items-start xl:absolute xl:bottom-0  right-0 xl:translate-y-[110%]">
            <div className="relative flex flex-row items-end">
                <div className="relative w-auto">
                    <div className=" absolute w-full px-5  top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center   ">
                        <p className="text-background font-grandstander-medium_500 leading-[114%] text-[18px] text-balance text-center  ">
                            Dunno about
                            Wallets?
                        </p>
                        <button className="text-secondary text-[20px] font-grandstander-medium_500 leading-[114%] text-center ">
                            click Here!
                        </button>
                    </div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="215"
                        height="177"
                        viewBox="0 0 215 177"
                        fill="none"
                    >
                        <g filter="url(#filter0_d_459_11797)">
                            <path
                                d="M106.414 0.52832L105.892 17.3755C105.158 41.0768 76.4151 52.3874 59.7252 35.5427L41.2115 16.8574L43.1009 18.9658C60.689 38.5935 42.618 69.2093 16.935 63.296L0.914062 59.6074L2.2449 59.968C28.8302 67.1712 28.8302 104.885 2.2449 112.089L0.914062 112.449L16.935 108.761C42.618 102.847 60.689 133.463 43.1009 153.091L41.2115 155.199L59.7252 136.514C76.4151 119.669 105.158 130.98 105.892 154.681L106.414 171.528L106.936 154.681C107.671 130.98 136.413 119.669 153.103 136.514L171.617 155.199L169.727 153.091C152.139 133.463 170.21 102.847 195.893 108.761L211.914 112.449L210.583 112.089C183.998 104.885 183.998 67.1712 210.583 59.968L211.914 59.6074L195.893 63.296C170.21 69.2093 152.139 38.5935 169.727 18.9658L171.617 16.8574L153.103 35.5427C136.413 52.3874 107.671 41.0768 106.936 17.3755L106.414 0.52832Z"
                                fill="#FFD700"
                            />
                            <path
                                d="M153.813 36.2466C137.593 52.6172 110.395 43.3446 106.414 21.8843C102.433 43.3446 75.2351 52.6172 59.0148 36.2466L48.8402 25.9776C57.5065 45.6823 40.1709 69.672 16.7106 64.2705L11.3776 63.0426C27.1194 73.816 27.1193 98.2407 11.3775 109.014L16.7106 107.786C40.1709 102.385 57.5065 126.374 48.8402 146.079L59.0148 135.81C75.2351 119.439 102.433 128.712 106.414 150.172C110.395 128.712 137.593 119.439 153.813 135.81L163.988 146.079C155.322 126.374 172.657 102.385 196.118 107.786L201.451 109.014C185.709 98.2407 185.709 73.816 201.451 63.0426L196.118 64.2705C172.657 69.672 155.322 45.6823 163.988 25.9776L153.813 36.2466Z"
                                stroke="#9966CC"
                                stroke-width="2"
                            />
                        </g>
                        <defs>
                            <filter
                                id="filter0_d_459_11797"
                                x="0.914062"
                                y="0.52832"
                                width="214"
                                height="176"
                                filterUnits="userSpaceOnUse"
                                color-interpolation-filters="sRGB"
                            >
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                />
                                <feOffset dx="3" dy="5" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0.6 0 0 0 0 0.4 0 0 0 0 0.8 0 0 0 1 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_459_11797"
                                />
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_459_11797"
                                    result="shape"
                                />
                            </filter>
                        </defs>
                    </svg>
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="81"
                    height="56"
                    viewBox="0 0 81 56"
                    fill="none"
                    className="relative bottom-[18px] left-[-10px]"
                >
                    <g filter="url(#filter0_d_459_11796)">
                        <path
                            d="M34.261 0.257341C36.2747 11.245 25.6349 20.29 15.1147 16.5338L8.1938 14.0627C17.4375 17.8546 16.407 31.2657 6.69238 33.6009L0.791604 35.0193L6.7364 33.7984C16.5234 31.7884 23.15 43.4934 16.3905 50.851L21.6077 45.6755C29.5381 37.8083 43.0114 41.4807 45.8529 52.2839C43.8392 41.2963 54.479 32.2513 64.9992 36.0075L71.9201 38.4786C62.6764 34.6866 63.707 21.2756 73.4215 18.9404L79.3223 17.522L73.3775 18.7429C63.5905 20.7529 56.9639 9.04788 63.7234 1.69026L58.5062 6.86579C50.5758 14.733 37.1025 11.0606 34.261 0.257341Z"
                            fill="#F5F5F5"
                        />
                        <path
                            d="M59.2105 7.57573C51.9964 14.7323 40.4913 12.9556 35.3512 5.1501C34.011 14.3995 24.3484 20.8925 14.7784 17.4755L13.5546 17.0385C17.0084 21.9294 15.9943 29.1536 10.9702 32.7514C17.0464 33.876 21.0316 39.9863 19.9808 45.8808L20.9034 44.9656C28.1176 37.809 39.6226 39.5857 44.7628 47.3912C46.103 38.1418 55.7655 31.6488 65.3355 35.0658L66.5594 35.5027C63.1056 30.6119 64.1197 23.3877 69.1437 19.7899C63.0675 18.6653 59.0824 12.555 60.1331 6.6605L59.2105 7.57573Z"
                            stroke="#9966CC"
                            stroke-width="2"
                        />
                    </g>
                    <defs>
                        <filter
                            id="filter0_d_459_11796"
                            x="0.791992"
                            y="0.257355"
                            width="79.5303"
                            height="55.0266"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                        >
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dx="1" dy="3" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.6 0 0 0 0 0.4 0 0 0 0 0.8 0 0 0 1 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_459_11796"
                            />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_459_11796"
                                result="shape"
                            />
                        </filter>
                    </defs>
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="34"
                    viewBox="0 0 50 34"
                    fill="none"
                    className="relative bottom-[50px] left-0"
                >
                    <g filter="url(#filter0_d_459_11799)">
                        <path
                            d="M27.0817 0.107632C25.797 7.30412 17.6009 10.8737 11.4569 6.9124L6.92013 3.98737C12.4259 8.06754 9.81992 16.7987 2.97844 17.1935L0.462296 17.3387L6.57361 17.3063C13.2131 17.2711 16.8476 25.029 12.5711 30.1079C18.9202 23.858 29.4274 25.1113 34.1283 32.6794C31.1664 26.737 36.5238 20.0518 42.9687 21.6478L48.9009 23.1168L46.4895 22.3838C39.9329 20.3908 39.4538 11.2916 45.7649 8.62105L40.6674 10.3968C33.764 12.8017 26.6375 7.40437 27.0817 0.107632Z"
                            fill="#FFD700"
                        />
                        <path
                            d="M40.9963 11.3412C34.8019 13.4991 28.4438 9.93405 26.5953 4.18542C23.4463 9.33791 16.428 11.3073 10.915 7.75286L10.583 7.53878C11.4942 10.7243 10.3861 14.2855 7.80803 16.3821C13.0246 17.0581 16.2358 22.1319 15.2368 26.8974C20.7489 23.9095 27.6379 24.7313 32.2925 28.9319C32.4425 24.0652 36.7571 19.8891 41.9863 20.4592C39.9737 17.815 39.7344 14.093 41.3694 11.2112L40.9963 11.3412Z"
                            stroke="#9966CC"
                            stroke-width="2"
                        />
                    </g>
                    <defs>
                        <filter
                            id="filter0_d_459_11799"
                            x="0.461914"
                            y="0.107635"
                            width="49.4395"
                            height="33.5717"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                        >
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dx="1" dy="1" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.6 0 0 0 0 0.4 0 0 0 0 0.8 0 0 0 1 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_459_11799"
                            />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_459_11799"
                                result="shape"
                            />
                        </filter>
                    </defs>
                </svg>
            </div>

            <Image
                src={"/Images/images/Slide2Image3.png"}
                className="relative right-[40%]"
                width={291}
                height={297}
                alt="image"
            />
        </div>
    );
};


export default TokenBuyCharacter;