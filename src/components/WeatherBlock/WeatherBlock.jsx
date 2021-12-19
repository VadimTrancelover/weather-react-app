import React from "react"
import ContentLoader from "react-content-loader"

const WeatherLoadedBlock = (props) => (
  <ContentLoader 
    speed={2}
    width={140}
    height={300}
    viewBox="0 0 140 300"
    backgroundColor="#969393"
    foregroundColor="#ecebeb92"
    {...props}
  >
    <rect x="95" y="97" rx="0" ry="0" width="1" height="0" /> 
    <rect x="19" y="11" rx="12" ry="12" width="100" height="26" /> 
    <rect x="20" y="128" rx="12" ry="12" width="96" height="55" /> 
    <rect x="4" y="189" rx="12" ry="12" width="131" height="87" /> 
    <circle cx="68" cy="83" r="34" />
  </ContentLoader>
)

export default WeatherLoadedBlock;