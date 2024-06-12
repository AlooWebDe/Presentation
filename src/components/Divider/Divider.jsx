import React from 'react'

function Divider() {
  return (
    <>
      {/* Divider: With Heading */}
      <h3 className="my-8 flex items-center pt-20 pb-40">
        <span
          aria-hidden="true"
          className="h-1 grow rounded bg-[#FF6B6B]"
        />
        <span className="mx-3 text-4xl font-medium text-[#FF6B6B]">About Cakery</span>
        <span
          aria-hidden="true"
          className="h-1 grow  rounded bg-[#FF6B6B] "
        />
      </h3>
      {/* END Divider: With Heading */}
    </>
  );
}

export default Divider