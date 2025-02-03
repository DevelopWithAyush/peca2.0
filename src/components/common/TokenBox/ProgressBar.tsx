import React from 'react'


const ProgressBar = () => {
  return (
      <div className="w-full h-[16px] bg-black relative rounded-[32px] overflow-hidden mt-3 "
          style={{
              background: "rgba(85, 163, 48, 0.30)"
          }}
      >
          <div className="w-[90%] h-full bg-green rounded-[32px] absolute top-0 left-0"
          >
          </div>
      </div>
  )
}

export default ProgressBar