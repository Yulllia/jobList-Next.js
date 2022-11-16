import React from 'react'

function Border(props:{margin?: string}) {
    return <div style={{marginTop: props.margin}} className="border-b bg-[#3A4562] mt-[9px] opacity-[0.13]"></div>;
}

export default Border