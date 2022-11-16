import React from 'react'

function Title(props: {content: string}) {
    return (
        <h2 className="tracking-[0.413333px] text-[28px] text-[#3A4562] leading-[34px] font-bold">
          {props.content}
        </h2>
      );
}

export default Title