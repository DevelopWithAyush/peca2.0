import React from 'react'


const Time = () => {
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
                      {" "}
                      00
                  </p>
              </div>
              <div>
                  <p className="text-background text-[18px] leading-normal font-grandstander-bold_700">
                      Hours
                  </p>
                  <p className="text-background text-center font-grandstander-black_900 text-[32px] ">
                      {" "}
                      00
                  </p>
              </div>
              <div>
                  <p className="text-background text-[18px] leading-normal font-grandstander-bold_700">
                      Minutes
                  </p>
                  <p className="text-background text-center font-grandstander-black_900 text-[32px] ">
                      {" "}
                      00
                  </p>
              </div>
              <div>
                  <p className="text-background text-[18px] leading-normal font-grandstander-bold_700">
                      Seconds
                  </p>
                  <p className="text-background text-center font-grandstander-black_900 text-[32px] ">
                      {" "}
                      00
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