function solution(x) {
  const xStr = x.toString();
  let posSum = 0;
  for (let i = 0; i < xStr.length; i++) {
    posSum += Number(xStr[i]);
  }

  return x % posSum === 0 ? true : false;
}
