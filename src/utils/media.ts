import { generateMedia, pxToRem } from "styled-media-query";

const ratio = 16;

// function convertPxToRem(px: number) {
//   return px / 10;
// }

function convertPxToRem(
  breakpoints: { [key: string]: string },
  ratio = 16,
  unit = "rem"
) {
  const newBreakpoints: { [key: string]: string } = {};

  for (let key in breakpoints) {
    const point = breakpoints[key];

    if (String(point).includes("px")) {
      newBreakpoints[key] = +(parseInt(point) / ratio) + unit;
      continue;
    }

    newBreakpoints[key] = point;
  }

  return newBreakpoints;
}

const listBreakpoints: {
  [index: string]: number;
} = {
  sm: 500,
  md: 768,
  lg: 992,
  xl: 1200,
  screen320: 320,
  screen360: 360,
  screen375: 375,
  screen425: 425,
  screen414: 414,
  screen411: 411,
};

export const mqGreater = Object.keys(listBreakpoints)
  .map((key) => [key, listBreakpoints[key]] as [string, number])
  .reduce((prev, [key, breakpoint]) => {
    prev[key] = `@media (min-width: ${breakpoint / 16}rem)`;
    return prev;
  }, {} as { [index: string]: string });

export const mqLess = Object.keys(listBreakpoints)
  .map((key) => [key, listBreakpoints[key]] as [string, number])
  .reduce((prev, [key, breakpoint]) => {
    prev[key] = `@media (max-width: ${breakpoint / 16}rem)`;
    return prev;
  }, {} as { [index: string]: string });

// export default mq;

export const breakpointz = convertPxToRem(
  {
    xs: "0px",
    screen320: "320px",
    screen360: "360px",
    screen375: "375px",
    screen425: "425px",
    screen414: "414px",
    screen411: "411px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
  },
  ratio
);

const breakpointss = pxToRem(
  {
    xs: "0px",
    screen320: "320px",
    screen360: "360px",
    screen375: "375px",
    screen425: "425px",
    screen414: "414px",
    screen411: "411px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
  },
  ratio
);

export default generateMedia(breakpointss);
