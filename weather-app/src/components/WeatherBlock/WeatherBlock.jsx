import React from "react"
import ContentLoader from "react-content-loader"

const WeatherLoadedBlock = (props) => (
  <ContentLoader 
    speed={2}
    width={500}
    height={500}
    viewBox="0 0 500 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
>
    <rect x="23" y="96" rx="10" ry="10" width="225" height="302" /> 
    <rect x="115" y="139" rx="0" ry="0" width="1" height="0" />
  </ContentLoader>
)

export default WeatherLoadedBlock;