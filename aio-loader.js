"use client";

export default function aioLoader({ src, width, quality }) {
  const aioParams = [];
  aioParams.push(`w-${width}`);
  if (quality) {
    aioParams.push(`q-${quality.toString()}`);
  }
  const joiner = src.indexOf("?") != -1 ? "&" : "?";
  const params = [];
  params.push(src, `aio=${aioParams.join(";")}`);
  return params.join(joiner);
}
