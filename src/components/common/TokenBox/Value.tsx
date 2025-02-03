import React from 'react'


const Value = () => {
  return (
      <div className="flex flex-row items-center justify-between w-full  gap-4 mt-3">
          <div className="w-full h-[1px] bg-background" />
          <p className="text-background font-grandstander-bold_700 leading-[125%] text-[16px] whitespace-nowrap">
              1 $PECA = $0.001618
          </p>
          <div className="w-full h-[1px] bg-background" />
      </div>  )
}

export default Value