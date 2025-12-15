let TLD;

const D = document,
  _cookieSet = (kv, t) => {
    const n = new Date(),
      s = +n;
    n.setTime(s + t);
    D.cookie = kv + ";path=/;expires=" + n.toUTCString() + ";domain=" + TLD;
  };
(() => {
  let i = 0,
    p = location.hostname.split("."),
    s = +new Date(),
    k = "_" + s,
    v = k + "=" + s;

  while (i < p.length - 1 && !D.cookie.includes(v)) {
    TLD = p.slice(-1 - ++i).join(".");
    _cookieSet(v, 1e3);
  }
})();

export default TLD;
