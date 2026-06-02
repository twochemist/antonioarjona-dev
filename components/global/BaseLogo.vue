<template>
  <svg
    alt="Logo with initials in circle"
    viewBox="0 0 800 800"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <path
        id="path-1"
        d="	M 50 150 C70  250 , 130 250 ,150 150 
	M150 150 C170 50 ,  230 50 , 250 150 
	M250 150 C270 250 , 330 250 ,350 150
	M350 150 C370 50 ,  430 50 , 450 150
	M450 150 C470 250 , 530 250 ,550 150"
      ></path>
      <filter
        id="filter-2"
        x="-1.0%"
        y="-0.8%"
        width="102.0%"
        height="101.5%"
        filterUnits="objectBoundingBox"
      >
        <feOffset
          dx="0"
          dy="0"
          in="SourceAlpha"
          result="shadowOffsetOuter1"
        ></feOffset>
        <feGaussianBlur
          stdDeviation="1"
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        ></feGaussianBlur>
        <feColorMatrix
          values="0 0 0 0 0.181507553   0 0 0 0 0.180108402   0 0 0 0 0.246014031  0 0 0 1 0"
          type="matrix"
          in="shadowBlurOuter1"
        ></feColorMatrix>
      </filter>
    </defs>
    <g
      id="Version2"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g id="Final_Color_Dark" transform="translate(-100.000000, -100.000000)">
        <g id="Logo" transform="translate(100.000000, 100.000000)">
          <circle
            id="Kreis"
            class="background"
            cx="400"
            cy="400"
            r="400"
          ></circle>
          <g id="LH">
            <use
              fill="black"
              fill-opacity="1"
              filter="url(#filter-2)"
              xlink:href="#path-1"
            ></use>
            <use
              class="initials"
              fill-rule="evenodd"
              xlink:href="#path-1"
            ></use>
          </g>
        </g>
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  name: 'BaseLogo',
}
</script>

<style lang="sass" scoped>
.background
  fill: $color-primary
  @media (prefers-color-scheme: dark)
    fill: $color-light
.initials
  fill: $color-light
  @media (prefers-color-scheme: dark)
    fill: $color-primary
</style>
