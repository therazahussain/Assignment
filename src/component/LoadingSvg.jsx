import React from 'react'

const LoadingSvg = () => {
  return (
    <div className="flex items-center justify-center font-semibold mt-4">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100" height="100">
      <circle fill="#000000" stroke="#000000" stroke-width="3" r="8" cx="40" cy="65">
        <animate attributeName="cy" calcMode="spline" dur="2" values="65;90;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate>
      </circle>
      <circle fill="#000000" stroke="#000000" stroke-width="3" r="8" cx="70" cy="65">
        <animate attributeName="cy" calcMode="spline" dur="2" values="65;90;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate>
      </circle>
      <circle fill="#000000" stroke="#000000" stroke-width="3" r="8" cx="100" cy="65">
        <animate attributeName="cy" calcMode="spline" dur="2" values="65;90;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate>
      </circle>
    </svg>
  </div>
  )
}

export default LoadingSvg