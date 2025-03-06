import React, { useState, useEffect } from 'react'

const Time = () => {
    // Set target date to April 6th, 2025
    const [targetDate] = useState(() => {
        const date = new Date('2025-04-06T00:00:00')
        return date.getTime()
    })

    const [timeLeft, setTimeLeft] = useState({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00'
    })

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime()
            const distance = targetDate - now

            // Calculate time units
            const days = Math.floor(distance / (1000 * 60 * 60 * 24))
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((distance % (1000 * 60)) / 1000)

            // Only update if the countdown hasn't finished
            if (distance > 0) {
                setTimeLeft({
                    days: days.toString().padStart(2, '0'),
                    hours: hours.toString().padStart(2, '0'),
                    minutes: minutes.toString().padStart(2, '0'),
                    seconds: seconds.toString().padStart(2, '0')
                })
            } else {
                clearInterval(timer)
                setTimeLeft({
                    days: '00',
                    hours: '00',
                    minutes: '00',
                    seconds: '00'
                })
            }
        }, 1000)

        return () => clearInterval(timer)
    }, [targetDate])

    return (
        <div className="flex flex-col items-center justify-start w-full rounded-[12px] overflow-hidden  mt-2  ">
            <div
                className="flex flex-row items-center justify-between w-full pt-4 px-4 pb-[10px]  "
                style={{
                    background: "rgba(85, 163, 48, 0.30)",
                }}
            >
                <div>
                    <p className="text-background text-[18px] leading-normal font-grandstander-bold_700">
                        Days
                    </p>
                    <p className="text-background text-center font-grandstander-black_900 text-[32px] ">
                        {timeLeft.days}
                    </p>
                </div>
                <div>
                    <p className="text-background text-[18px] leading-normal font-grandstander-bold_700">
                        Hours
                    </p>
                    <p className="text-background text-center font-grandstander-black_900 text-[32px] ">
                        {timeLeft.hours}
                    </p>
                </div>
                <div>
                    <p className="text-background text-[18px] leading-normal font-grandstander-bold_700">
                        Minutes
                    </p>
                    <p className="text-background text-center font-grandstander-black_900 text-[32px] ">
                        {timeLeft.minutes}
                    </p>
                </div>
                <div>
                    <p className="text-background text-[18px] leading-normal font-grandstander-bold_700">
                        Seconds
                    </p>
                    <p className="text-background text-center font-grandstander-black_900 text-[32px] ">
                        {timeLeft.seconds}
                    </p>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center py-[10px] bg-primary w-full ">
                <p className="text-background text-[18px] leading-normal uppercase font-grandstander-bold_700">
                    COUNTDOWN For OUR TOKEN LAUNCH
                </p>
            </div>
        </div>
    )
}

export default Time