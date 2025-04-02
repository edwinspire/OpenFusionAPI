import "clsx";
const HYDRATION_START = "[";
const HYDRATION_END = "]";
const HYDRATION_ERROR = {};
const UNINITIALIZED = Symbol();
function lifecycle_outside_component(name) {
  {
    throw new Error(`https://svelte.dev/e/lifecycle_outside_component`);
  }
}
const ATTR_REGEX = /[&"<]/g;
const CONTENT_REGEX = /[&<]/g;
function escape_html(value, is_attr) {
  const str = String(value ?? "");
  const pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
  pattern.lastIndex = 0;
  let escaped = "";
  let last = 0;
  while (pattern.test(str)) {
    const i = pattern.lastIndex - 1;
    const ch = str[i];
    escaped += str.substring(last, i) + (ch === "&" ? "&amp;" : ch === '"' ? "&quot;" : "&lt;");
    last = i + 1;
  }
  return escaped + str.substring(last);
}
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean) return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
const whitespace = [..." 	\n\r\f \v\uFEFF"];
function to_class(value, hash, directives) {
  var classname = value == null ? "" : "" + value;
  if (hash) {
    classname = classname ? classname + " " + hash : hash;
  }
  if (directives) {
    for (var key in directives) {
      if (directives[key]) {
        classname = classname ? classname + " " + key : key;
      } else if (classname.length) {
        var len = key.length;
        var a = 0;
        while ((a = classname.indexOf(key, a)) >= 0) {
          var b = a + len;
          if ((a === 0 || whitespace.includes(classname[a - 1])) && (b === classname.length || whitespace.includes(classname[b]))) {
            classname = (a === 0 ? "" : classname.substring(0, a)) + classname.substring(b + 1);
          } else {
            a = b;
          }
        }
      }
    }
  }
  return classname === "" ? null : classname;
}
function to_style(value, styles) {
  return value == null ? null : String(value);
}
var current_component = null;
function getContext(key) {
  const context_map = get_or_init_context_map();
  const result = (
    /** @type {T} */
    context_map.get(key)
  );
  return result;
}
function setContext(key, context) {
  get_or_init_context_map().set(key, context);
  return context;
}
function get_or_init_context_map(name) {
  if (current_component === null) {
    lifecycle_outside_component();
  }
  return current_component.c ??= new Map(get_parent_context(current_component) || void 0);
}
function push(fn) {
  current_component = { p: current_component, c: null, d: null };
}
function pop() {
  var component = (
    /** @type {Component} */
    current_component
  );
  var ondestroy = component.d;
  if (ondestroy) {
    on_destroy.push(...ondestroy);
  }
  current_component = component.p;
}
function get_parent_context(component_context) {
  let parent = component_context.p;
  while (parent !== null) {
    const context_map = parent.c;
    if (context_map !== null) {
      return context_map;
    }
    parent = parent.p;
  }
  return null;
}
const BLOCK_OPEN = `<!--${HYDRATION_START}-->`;
const BLOCK_CLOSE = `<!--${HYDRATION_END}-->`;
let on_destroy = [];
function props_id_generator(prefix) {
  let uid = 1;
  return () => `${prefix}s${uid++}`;
}
function render(component, options = {}) {
  const uid = props_id_generator(options.idPrefix ? options.idPrefix + "-" : "");
  const payload = {
    out: "",
    css: /* @__PURE__ */ new Set(),
    head: { title: "", out: "", css: /* @__PURE__ */ new Set(), uid },
    uid
  };
  const prev_on_destroy = on_destroy;
  on_destroy = [];
  payload.out += BLOCK_OPEN;
  if (options.context) {
    push();
    current_component.c = options.context;
  }
  component(payload, options.props ?? {}, {}, {});
  if (options.context) {
    pop();
  }
  payload.out += BLOCK_CLOSE;
  for (const cleanup of on_destroy) cleanup();
  on_destroy = prev_on_destroy;
  let head2 = payload.head.out + payload.head.title;
  for (const { hash, code } of payload.css) {
    head2 += `<style id="${hash}">${code}</style>`;
  }
  return {
    head: head2,
    html: payload.out,
    body: payload.out
  };
}
function head(payload, fn) {
  const head_payload = payload.head;
  head_payload.out += BLOCK_OPEN;
  fn(head_payload);
  head_payload.out += BLOCK_CLOSE;
}
function stringify(value) {
  return typeof value === "string" ? value : value == null ? "" : value + "";
}
function attr_class(value, hash, directives) {
  var result = to_class(value, hash, directives);
  return result ? ` class="${escape_html(result, true)}"` : "";
}
function attr_style(value, directives) {
  var result = to_style(value);
  return result ? ` style="${escape_html(result, true)}"` : "";
}
function bind_props(props_parent, props_now) {
  for (const key in props_now) {
    const initial_value = props_parent[key];
    const value = props_now[key];
    if (initial_value === void 0 && value !== void 0 && Object.getOwnPropertyDescriptor(props_parent, key)?.set) {
      props_parent[key] = value;
    }
  }
}
function ensure_array_like(array_like_or_iterator) {
  if (array_like_or_iterator) {
    return array_like_or_iterator.length !== void 0 ? array_like_or_iterator : Array.from(array_like_or_iterator);
  }
  return [];
}
export {
  HYDRATION_ERROR as H,
  UNINITIALIZED as U,
  attr as a,
  attr_style as b,
  attr_class as c,
  bind_props as d,
  push as e,
  ensure_array_like as f,
  escape_html as g,
  head as h,
  getContext as i,
  HYDRATION_START as j,
  HYDRATION_END as k,
  setContext as l,
  pop as p,
  render as r,
  stringify as s
};
