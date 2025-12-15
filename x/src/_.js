export const DOC = document,
  BODY = DOC.body,
  Tag = DOC.createElement.bind(DOC),
  C = (name, opt) => {
    customElements.define("i-" + name, opt);
  },
  Style = async (name) => {
    const s = Tag("style");
    s.textContent = (await import("-/css/" + name + ".js")).default;
    DOC.head.appendChild(s);
  },
  /// load style from js then create custom element
  S = async (name, opt) => {
    await Style(name);
    C(name, opt);
  },
  On = (elem, dict) => {
    dict = [...Object.entries(dict)];
    let e, func;

    for ([e, func] of dict) {
      elem.addEventListener(e, func);
    }

    return () => {
      for ([e, func] of dict) {
        elem.removeEventListener(e, func);
      }
    };
  },
  Div = () => Tag("div"),
  TEXTAREA = Tag("textarea"),
  HtmE = (txt) => {
    TEXTAREA.textContent = txt;
    return TEXTAREA.innerHTML;
  };
