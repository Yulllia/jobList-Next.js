import React from 'react'

function Text(props: {content: string}) {
    return (
        <p className="tracking-[-0.5625px] text-[18px] text-[#3A4562] leading-[24px] font-normal">
          {props.content}
        </p>
      );
}

export default Text