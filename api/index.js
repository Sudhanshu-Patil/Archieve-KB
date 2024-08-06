var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: !0, configurable: !0, writable: !0, value }) : obj[key] = value;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);
var __publicField = (obj, key, value) => (__defNormalProp(obj, typeof key != "symbol" ? key + "" : key, value), value);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 39,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 81,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_react3 = require("@remix-run/react"), import_remix_typedjson = require("remix-typedjson");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-HUWEYEGK.css";

// app/utils/data/root-data.ts
var import_react2 = require("@remix-run/react");

// app/utils/session/session.server.ts
var import_node2 = require("@remix-run/node"), import_crypto = require("crypto"), sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret)
  throw new Error("SESSION_SECRET must be set");
var storage = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    name: "RJ_session",
    secure: !1,
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: !0
  }
});
function getUserSession(request) {
  return storage.getSession(request.headers.get("Cookie"));
}
async function getUserInfo(request) {
  return {
    userAnalyticsId: (await getUserSession(request)).get("userAnalyticsId") ?? null
  };
}
async function createUserSession(userSession, redirectTo = "") {
  let session = await storage.getSession();
  return session.set("userAnalyticsId", userSession.userAnalyticsId), (0, import_node2.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session)
    }
  });
}
function generateAnalyticsUserId() {
  return (0, import_crypto.randomBytes)(100).toString("base64");
}

// app/utils/data/root-data.ts
var import_node3 = require("@remix-run/node");
function useRootData() {
  var _a;
  return ((_a = (0, import_react2.useMatches)().find((f) => f.pathname === "/" || f.pathname === "")) == null ? void 0 : _a.data) ?? {};
}
async function loadRootData({ request }) {
  let userSession = await getUserSession(request), userInfo = await getUserInfo(request), headers = new Headers();
  if (!userSession.get("userAnalyticsId"))
    return createUserSession(
      {
        userAnalyticsId: generateAnalyticsUserId()
      },
      new URL(request.url).pathname
    );
  let metatags = {
    title: "Archieve KB",
    description: "Knowledge Base starter kit with WYSIWYG, Markdown, GPT, and Multi-language support",
    seoImage: "https://yahooder.sirv.com/saasrock-kb/cover.png"
  }, data = {
    metatags: [
      { charset: "utf-8" },
      { title: metatags.title },
      { name: "description", content: "Intercom-like knowledge base with WYSIWYG and Markdown support" },
      { name: "og:title", content: metatags.title },
      { name: "og:description", content: metatags.description },
      { name: "og:image", content: metatags.seoImage },
      { name: "og:url", content: request.url },
      { name: "twitter:title", content: metatags.title },
      { name: "twitter:description", content: metatags.description },
      { name: "twitter:image", content: metatags.seoImage },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    userSession: userInfo,
    debug: !0,
    chatWebsiteId: process.env.CHAT_WEBSITE_ID
  };
  return (0, import_node3.json)(data, { headers });
}

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [{ rel: "stylesheet", href: tailwind_default }], meta = ({ data }) => data == null ? void 0 : data.metatags, loader = async ({ request }) => loadRootData({ request });
function App() {
  let rootData = useRootData(), data = (0, import_remix_typedjson.useTypedLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("link", { rel: "icon", type: "image/png", sizes: "192x192", href: "/android-icon-192x192.png" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("link", { rel: "icon", type: "image/png", sizes: "96x96", href: "/favicon-96x96.png" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("link", { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { httpEquiv: "Content-Type", content: "text/html; charset=utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { className: "min-h-screen bg-gray-50 text-gray-800", children: [
      !data.debug && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("script", { async: !0, defer: !0, src: "https://scripts.simpleanalyticscdn.com/latest.js" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 32,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("noscript", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: "https://queue.simpleanalyticscdn.com/noscript.gif", alt: "privacy-friendly-simpleanalytics", referrerPolicy: "no-referrer-when-downgrade" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 34,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 33,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react3.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/routes/$slug.($lang).categories.$category.tsx
var slug_lang_categories_category_exports = {};
__export(slug_lang_categories_category_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => Index,
  loader: () => loader2,
  meta: () => meta2
});

// app/components/ServerError.tsx
var import_react6 = require("@remix-run/react");

// app/components/pages/Page404.tsx
var import_react5 = require("@remix-run/react");

// app/assets/img/logo-light.png
var logo_light_default = "/build/_assets/logo-light-MHPZPRID.png";

// app/components/brand/Logo.tsx
var import_clsx = __toESM(require("clsx")), import_react4 = require("@remix-run/react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Logo({ className = "", size = "h-9", to }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Link, { to: to ?? "/", className: (0, import_clsx.default)(className, "flex"), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: (0, import_clsx.default)(size, "mx-auto hidden w-auto dark:block"), src: logo_light_default, alt: "Logo" }, void 0, !1, {
      fileName: "app/components/brand/Logo.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: (0, import_clsx.default)(size, "mx-auto w-auto dark:hidden"), src: logo_light_default, alt: "Logo" }, void 0, !1, {
      fileName: "app/components/brand/Logo.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/brand/Logo.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/components/pages/Page404.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Page404({ withLogo = !0, withGoBack = !0 }) {
  let navigate = (0, import_react5.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex min-h-full flex-col pt-16 pb-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("main", { className: "mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8", children: [
    withLogo && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-shrink-0 justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Logo, {}, void 0, !1, {
      fileName: "app/components/pages/Page404.tsx",
      lineNumber: 17,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/pages/Page404.tsx",
      lineNumber: 16,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "py-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-sm font-semibold uppercase tracking-wide text-theme-600", children: "404 error" }, void 0, !1, {
        fileName: "app/components/pages/Page404.tsx",
        lineNumber: 22,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { className: "mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl", children: "Page not found." }, void 0, !1, {
        fileName: "app/components/pages/Page404.tsx",
        lineNumber: 23,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "mt-2 text-base text-gray-500", children: "Sorry, we couldn\u2019t find the page you\u2019re looking for." }, void 0, !1, {
        fileName: "app/components/pages/Page404.tsx",
        lineNumber: 24,
        columnNumber: 17
      }, this),
      withGoBack && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-4 flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        "button",
        {
          type: "button",
          onClick: () => navigate(-1),
          className: "w-full text-center text-sm font-medium text-theme-600 hover:text-theme-500 dark:text-theme-400",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { "aria-hidden": "true", children: " \u2190" }, void 0, !1, {
              fileName: "app/components/pages/Page404.tsx",
              lineNumber: 32,
              columnNumber: 23
            }, this),
            " Go back"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/pages/Page404.tsx",
          lineNumber: 27,
          columnNumber: 21
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/pages/Page404.tsx",
        lineNumber: 26,
        columnNumber: 19
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/pages/Page404.tsx",
      lineNumber: 21,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/components/pages/Page404.tsx",
      lineNumber: 20,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/pages/Page404.tsx",
    lineNumber: 14,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/components/pages/Page404.tsx",
    lineNumber: 13,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/pages/Page404.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/pages/Page404.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/components/ServerError.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function ServerError() {
  var _a, _b, _c;
  let error = (0, import_react6.useRouteError)();
  return (error == null ? void 0 : error.status) === 404 ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Page404, {}, void 0, !1, {
    fileName: "app/components/ServerError.tsx",
    lineNumber: 9,
    columnNumber: 12
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "px-4 py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mx-auto w-full space-y-2 rounded-md border-2 border-dashed border-gray-300 bg-white p-12 text-center text-gray-800 shadow-md", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-col justify-center space-y-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mx-auto text-red-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("svg", { className: "h-6 w-6", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
        },
        void 0,
        !1,
        {
          fileName: "app/components/ServerError.tsx",
          lineNumber: 17,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/ServerError.tsx",
        lineNumber: 16,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/ServerError.tsx",
        lineNumber: 15,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "text-2xl font-bold text-gray-800", children: ((_a = error == null ? void 0 : error.data) == null ? void 0 : _a.message) ?? (error == null ? void 0 : error.message) ?? "Error" }, void 0, !1, {
        fileName: "app/components/ServerError.tsx",
        lineNumber: 25,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ServerError.tsx",
      lineNumber: 14,
      columnNumber: 9
    }, this),
    ((_b = error == null ? void 0 : error.data) == null ? void 0 : _b.description) && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "text-gray-800", children: (_c = error == null ? void 0 : error.data) == null ? void 0 : _c.description }, void 0, !1, {
      fileName: "app/components/ServerError.tsx",
      lineNumber: 28,
      columnNumber: 38
    }, this),
    (error == null ? void 0 : error.stack) && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "pt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "break-words border-t border-dashed border-gray-300 pt-3 text-left text-sm text-gray-600", children: error.stack }, void 0, !1, {
      fileName: "app/components/ServerError.tsx",
      lineNumber: 33,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/ServerError.tsx",
      lineNumber: 31,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ServerError.tsx",
    lineNumber: 13,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/ServerError.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/$slug.($lang).categories.$category.tsx
var import_node4 = require("@remix-run/node");

// app/lib/db.server.ts
var import_client = require("@prisma/client"), db;
global.__db || (global.__db = new import_client.PrismaClient()), db = global.__db;

// app/modules/knowledgeBase/db/knowledgeBase.db.server.ts
var include = {
  _count: {
    select: { categories: !0, articles: !0, views: !0 }
  }
};
async function getAllKnowledgeBases({ enabled } = {}) {
  return await db.knowledgeBase.findMany({
    where: { enabled },
    include
  });
}
async function getKnowledgeBaseById(id) {
  return await db.knowledgeBase.findUnique({
    where: { id },
    include
  });
}
async function getKnowledgeBaseBySlug(slug) {
  return await db.knowledgeBase.findUnique({
    where: { slug },
    include
  });
}
async function createKnowledgeBase(data) {
  return await db.knowledgeBase.create({
    data: {
      slug: data.slug,
      title: data.title,
      description: data.description,
      defaultLanguage: data.defaultLanguage,
      layout: data.layout,
      color: data.color,
      enabled: data.enabled,
      languages: data.languages,
      links: data.links,
      logo: data.logo,
      seoImage: data.seoImage
    }
  });
}
async function updateKnowledgeBase(id, data) {
  return await db.knowledgeBase.update({
    where: { id },
    data: {
      slug: data.slug,
      title: data.title,
      description: data.description,
      defaultLanguage: data.defaultLanguage,
      layout: data.layout,
      color: data.color,
      enabled: data.enabled,
      languages: data.languages,
      links: data.links,
      logo: data.logo,
      seoImage: data.seoImage
    }
  });
}
async function countKnowledgeBases() {
  return await db.knowledgeBase.count();
}

// app/modules/knowledgeBase/db/kbArticles.db.server.ts
var include2 = {
  category: {
    select: { slug: !0, title: !0 }
  },
  section: {
    select: { order: !0, title: !0 }
  },
  relatedArticles: {
    select: { order: !0, title: !0, slug: !0 }
  },
  _count: {
    select: { views: !0, upvotes: !0, downvotes: !0 }
  }
};
async function getAllKnowledgeBaseArticles({
  knowledgeBaseSlug,
  categoryId,
  language
}) {
  return await db.knowledgeBaseArticle.findMany({
    where: {
      knowledgeBase: { slug: knowledgeBaseSlug },
      categoryId,
      language
    },
    include: include2,
    orderBy: [
      {
        category: { order: "asc" }
      },
      {
        section: { order: "asc" }
      },
      {
        order: "asc"
      }
    ]
  });
}
async function getAllKnowledgeBaseArticlesWithPagination({
  knowledgeBaseSlug,
  language,
  pagination,
  filters
}) {
  let where = {
    knowledgeBase: { slug: knowledgeBaseSlug },
    language
  };
  filters.title !== void 0 && (where.title = { contains: filters.title }), filters.description !== void 0 && (where.description = { contains: filters.description }), filters.categoryId !== void 0 && (where.categoryId = filters.categoryId);
  let items = await db.knowledgeBaseArticle.findMany({
    take: pagination.pageSize,
    skip: (pagination.page - 1) * pagination.pageSize,
    where,
    include: include2,
    orderBy: [{ createdAt: "desc" }]
  }), totalItems = await db.knowledgeBaseArticle.count({
    where
  });
  return {
    items,
    pagination: {
      page: pagination.page,
      pageSize: pagination.pageSize,
      totalItems,
      totalPages: Math.ceil(totalItems / pagination.pageSize)
    }
  };
}
async function getFeaturedKnowledgeBaseArticles({
  knowledgeBaseId,
  language
}) {
  return await db.knowledgeBaseArticle.findMany({
    where: {
      knowledgeBaseId,
      language,
      featuredOrder: { not: null },
      publishedAt: { not: null }
    },
    include: include2,
    orderBy: [{ featuredOrder: "asc" }]
  });
}
async function getKbArticleById(id) {
  return await db.knowledgeBaseArticle.findUnique({
    where: { id },
    include: include2
  });
}
async function getKbArticleBySlug({
  knowledgeBaseId,
  slug,
  language
}) {
  return await db.knowledgeBaseArticle.findFirst({
    where: {
      knowledgeBaseId,
      slug,
      language
    },
    include: {
      ...include2
    }
  });
}
async function createKnowledgeBaseArticle(data) {
  return await db.knowledgeBaseArticle.create({
    data: {
      knowledgeBaseId: data.knowledgeBaseId,
      categoryId: data.categoryId,
      sectionId: data.sectionId,
      slug: data.slug,
      title: data.title,
      description: data.description,
      order: data.order,
      contentDraft: data.contentDraft,
      contentPublished: data.contentPublished,
      contentType: data.contentType,
      language: data.language,
      featuredOrder: data.featuredOrder,
      author: data.author,
      seoImage: data.seoImage,
      publishedAt: data.publishedAt
    }
  });
}
async function updateKnowledgeBaseArticle(id, data) {
  return await db.knowledgeBaseArticle.update({
    where: { id },
    data: {
      categoryId: data.categoryId,
      sectionId: data.sectionId,
      slug: data.slug,
      title: data.title,
      description: data.description,
      order: data.order,
      contentDraft: data.contentDraft,
      contentPublished: data.contentPublished,
      contentType: data.contentType,
      language: data.language,
      featuredOrder: data.featuredOrder,
      author: data.author,
      seoImage: data.seoImage,
      publishedAt: data.publishedAt
    }
  });
}
async function deleteKnowledgeBaseArticle(id) {
  return await db.knowledgeBaseArticle.delete({
    where: { id }
  });
}
async function countKnowledgeBaseArticles() {
  return await db.knowledgeBaseArticle.count();
}

// app/modules/knowledgeBase/db/kbCategories.db.server.ts
var include3 = {
  articles: {
    select: { id: !0, order: !0, title: !0, description: !0, slug: !0, language: !0, sectionId: !0, publishedAt: !0 }
  },
  sections: {
    select: { id: !0, order: !0, title: !0, description: !0 }
  }
};
async function getAllKnowledgeBaseCategories({
  knowledgeBaseSlug,
  language
}) {
  return await db.knowledgeBaseCategory.findMany({
    where: {
      knowledgeBase: { slug: knowledgeBaseSlug },
      language
    },
    include: include3,
    orderBy: { order: "asc" }
  });
}
async function getKbCategoryById(id) {
  return await db.knowledgeBaseCategory.findUnique({
    where: { id },
    include: include3
  });
}
async function getKbCategoryBySlug({
  knowledgeBaseId,
  slug,
  language
}) {
  let where = {
    knowledgeBaseId,
    slug,
    language
  };
  return await db.knowledgeBaseCategory.findFirst({
    where,
    include: include3
  });
}
async function createKnowledgeBaseCategory(data) {
  return await db.knowledgeBaseCategory.create({
    data: {
      knowledgeBaseId: data.knowledgeBaseId,
      slug: data.slug,
      order: data.order,
      title: data.title,
      description: data.description,
      icon: data.icon,
      language: data.language,
      seoImage: data.seoImage
    },
    include: include3
  });
}
async function updateKnowledgeBaseCategory(id, data) {
  return await db.knowledgeBaseCategory.update({
    where: { id },
    data: {
      slug: data.slug,
      order: data.order,
      title: data.title,
      description: data.description,
      icon: data.icon,
      language: data.language,
      seoImage: data.seoImage
    }
  });
}
async function deleteKnowledgeBaseCategory(id) {
  return await db.knowledgeBaseCategory.delete({
    where: { id }
  });
}
async function countKnowledgeBaseCategories() {
  return await db.knowledgeBaseCategory.count();
}

// app/modules/knowledgeBase/utils/KnowledgeBaseUtils.ts
var supportedLanguages = [
  { name: "English", value: "en" },
  { name: "Spanish", value: "es" }
];
function getLanguageName(language) {
  let supportedLanguage = supportedLanguages.find((l) => l.value === language);
  return supportedLanguage ? supportedLanguage.name : "";
}
function getAvailableArticleSlug({ allArticles, initialSlug }) {
  let number = 1, slug = "", findExistingSlug = (slug2) => allArticles.find((p) => p.slug === slug2);
  do {
    if (slug = `${initialSlug}-${number}`, !findExistingSlug(slug))
      break;
    if (number > 10)
      throw Error("Too many duplicates");
    number++;
  } while (!0);
  let maxOrder = 0;
  return allArticles.length > 0 && (maxOrder = Math.max(...allArticles.map((p) => p.order))), {
    slug,
    maxOrder,
    number
  };
}
function getKbUrl({ kb, params }) {
  return params.lang ? `/${kb.slug}/${params.lang}` : `/${kb.slug}`;
}
function getArticleUrl({ kb, article, params }) {
  return params.lang ? `/${kb.slug}/${params.lang}/articles/${article.slug}` : `/${kb.slug}/articles/${article.slug}`;
}
function getCategoryUrl({ kb, category, params }) {
  return params.lang ? `/${kb.slug}/${params.lang}/categories/${category.slug}` : `/${kb.slug}/categories/${category.slug}`;
}
var KnowledgeBaseUtils_default = {
  supportedLanguages,
  getLanguageName,
  getAvailableArticleSlug,
  getKbUrl,
  getArticleUrl,
  getCategoryUrl
};

// app/modules/knowledgeBase/service/KnowledgeBaseService.ts
async function getAll({ enabled }) {
  return (await getAllKnowledgeBases({ enabled })).map((item) => kbToDto(item));
}
async function get({ slug, enabled }) {
  let item = await getKnowledgeBaseBySlug(slug);
  if (!item || enabled !== void 0 && item.enabled !== enabled)
    throw new Error("Knowledge base not found");
  return kbToDto(item);
}
async function getById(id) {
  let item = await getKnowledgeBaseById(id);
  return item ? kbToDto(item) : null;
}
function kbToDto(kb) {
  return {
    id: kb.id,
    createdAt: kb.createdAt,
    updatedAt: kb.updatedAt,
    slug: kb.slug,
    title: kb.title,
    description: kb.description,
    defaultLanguage: kb.defaultLanguage,
    layout: kb.layout,
    languages: JSON.parse(kb.languages),
    links: JSON.parse(kb.links),
    color: kb.color,
    enabled: kb.enabled,
    count: {
      articles: kb._count.articles,
      categories: kb._count.categories,
      views: kb._count.views
    },
    logo: kb.logo,
    seoImage: kb.seoImage,
    metatags: [
      { title: `${kb.title}` },
      { name: "description", content: kb.description },
      { name: "og:title", content: `${kb.title}` },
      { name: "og:description", content: kb.description },
      { name: "og:image", content: kb.seoImage },
      { name: "twitter:title", content: `${kb.title}` },
      { name: "twitter:description", content: kb.description },
      { name: "twitter:image", content: kb.seoImage },
      { name: "twitter:card", content: "summary_large_image" }
    ]
  };
}
async function getCategories({
  kb,
  params
}) {
  return (await getAllKnowledgeBaseCategories({
    knowledgeBaseSlug: kb.slug,
    language: params.lang || kb.defaultLanguage
  })).map((f) => categoryToDto({ kb, category: f, params }));
}
function categoryToDto({ kb, category, params }) {
  return {
    id: category.id,
    slug: category.slug,
    order: category.order,
    title: category.title,
    description: category.description,
    icon: category.icon,
    language: category.language,
    seoImage: category.seoImage,
    href: KnowledgeBaseUtils_default.getCategoryUrl({ kb, category, params }),
    sections: category.sections.map((f) => ({
      id: f.id,
      order: f.order,
      title: f.title,
      description: f.description
    })),
    articles: category.articles.map((f) => ({
      id: f.id,
      order: f.order,
      title: f.title,
      description: f.description,
      language: f.language,
      slug: f.slug,
      href: KnowledgeBaseUtils_default.getArticleUrl({ kb, article: f, params }),
      sectionId: f.sectionId
    })),
    metatags: [
      { title: `${category.title} | ${kb.title}` },
      { name: "description", content: category.description },
      { name: "og:title", content: `${category.title} | ${kb.title}` },
      { name: "og:description", content: category.description },
      { name: "og:image", content: category.seoImage },
      { name: "twitter:title", content: `${category.title} | ${kb.title}` },
      { name: "twitter:description", content: category.description },
      { name: "twitter:image", content: category.seoImage },
      { name: "twitter:card", content: "summary_large_image" }
    ]
  };
}
async function getArticles({
  kb,
  categoryId,
  language,
  query,
  params
}) {
  return (await getAllKnowledgeBaseArticles({
    knowledgeBaseSlug: kb.slug,
    categoryId,
    language
  })).map((f) => articleToDto({ kb, article: f, relatedArticles: f.relatedArticles, params }));
}
async function getArticle({ kb, slug, params }) {
  let language = params.lang || kb.defaultLanguage, item = await getKbArticleBySlug({
    knowledgeBaseId: kb.id,
    slug,
    language
  });
  if (!item || !item.publishedAt || !item.categoryId)
    return null;
  let category = await getKbCategoryById(item.categoryId);
  return category ? {
    article: articleToDto({ kb, article: item, relatedArticles: item.relatedArticles, params }),
    category: categoryToDto({ kb, category, params })
  } : null;
}
async function getArticleById({ kb, id }) {
  let item = await getKbArticleById(id);
  return item ? articleToDto({ kb, article: item, relatedArticles: item.relatedArticles, params: {} }) : null;
}
async function getFeaturedArticles({ kb, params }) {
  return (await getFeaturedKnowledgeBaseArticles({
    knowledgeBaseId: kb.id,
    language: params.lang || kb.defaultLanguage
  })).map((f) => articleToDto({ kb, article: f, relatedArticles: f.relatedArticles, params }));
}
function articleToDto({
  kb,
  article,
  relatedArticles,
  params
}) {
  return {
    id: article.id,
    createdAt: article.createdAt,
    updatedAt: article.updatedAt,
    slug: article.slug,
    title: article.title,
    description: article.description,
    order: article.order,
    contentDraft: article.contentDraft,
    contentPublished: article.contentPublished,
    contentType: article.contentType,
    language: article.language,
    featuredOrder: article.featuredOrder,
    author: {
      email: "alex.martinez@absys.com.mx",
      firstName: "Sudhanshu",
      lastName: "Patil",
      avatar: "https://avatars.githubusercontent.com/u/93507588?s=400&u=ef7c65a4cd7df11185c8ac6444d9f914a159daf0&v=4"
    },
    publishedAt: article.publishedAt,
    href: KnowledgeBaseUtils_default.getArticleUrl({ kb, article, params }),
    sectionId: article.sectionId,
    relatedArticles: relatedArticles.map((f) => ({
      order: f.order,
      title: f.title,
      slug: f.slug,
      href: KnowledgeBaseUtils_default.getArticleUrl({ kb, article: f, params })
    })),
    seoImage: article.seoImage,
    metatags: [
      { title: `${article.title} | ${kb.title}` },
      { name: "description", content: article.description },
      { name: "og:title", content: `${article.title}` },
      { name: "og:description", content: article.description },
      { name: "og:image", content: article.seoImage },
      { name: "twitter:title", content: `${article.title}` },
      { name: "twitter:description", content: article.description },
      { name: "twitter:image", content: article.seoImage },
      { name: "twitter:card", content: "summary_large_image" }
    ]
  };
}
async function getCategory({
  kb,
  category,
  language,
  params
}) {
  let item = await getKbCategoryBySlug({
    knowledgeBaseId: kb.id,
    slug: category,
    language
  });
  return item ? (item.articles = item.articles.filter((f) => f.publishedAt), categoryToDto({ kb, category: item, params })) : null;
}
async function del(item) {
  let articlesCount = await db.knowledgeBaseArticle.count({
    where: { knowledgeBaseId: item.id }
  }), categoriesCount = await db.knowledgeBaseCategory.count({
    where: { knowledgeBaseId: item.id }
  });
  if (articlesCount > 0)
    throw new Error("Cannot delete knowledge base with articles");
  if (categoriesCount > 0)
    throw new Error("Cannot delete knowledge base with categories");
  return await db.knowledgeBase.delete({
    where: { id: item.id }
  });
}
async function duplicateCategory({ kb, language, categoryId }) {
  let allCategories = await getAllKnowledgeBaseCategories({
    knowledgeBaseSlug: kb.slug,
    language
  }), existing = allCategories.find((p) => p.id === categoryId);
  if (!existing)
    throw Error("Invalid category");
  let number = 2, slug = "", findExistingSlug = (slug2) => allCategories.find((p) => p.slug === slug2);
  do {
    if (slug = `${existing.slug}${number}`, !findExistingSlug(slug))
      break;
    if (number > 10)
      throw Error("Too many duplicates");
    number++;
  } while (!0);
  let maxOrder = 0;
  return allCategories.length > 0 && (maxOrder = Math.max(...allCategories.map((p) => p.order))), await createKnowledgeBaseCategory({
    knowledgeBaseId: kb.id,
    slug,
    order: maxOrder + 1,
    title: existing.title + " " + number,
    description: existing.description,
    icon: existing.icon,
    language: existing.language,
    seoImage: existing.seoImage
  });
}
async function duplicateArticle({ kb, language, articleId }) {
  let allArticles = await getAllKnowledgeBaseArticles({
    knowledgeBaseSlug: kb.slug,
    language
  }), existing = allArticles.find((p) => p.id === articleId);
  if (!existing)
    throw Error("Invalid article");
  let { slug, maxOrder, number } = KnowledgeBaseUtils_default.getAvailableArticleSlug({
    allArticles,
    initialSlug: existing.slug
  });
  return await createKnowledgeBaseArticle({
    knowledgeBaseId: kb.id,
    categoryId: existing.categoryId,
    sectionId: existing.sectionId,
    slug,
    title: existing.title + " " + number,
    description: existing.description,
    order: maxOrder + 1,
    contentDraft: existing.contentDraft,
    contentPublished: existing.contentPublished,
    contentType: existing.contentType,
    language: existing.language,
    featuredOrder: existing.featuredOrder,
    author: existing.author,
    seoImage: existing.seoImage,
    publishedAt: null
  });
}
var KnowledgeBaseService_default = {
  getAll,
  get,
  getById,
  getCategories,
  getArticles,
  getArticle,
  getArticleById,
  getFeaturedArticles,
  getCategory,
  del,
  duplicateCategory,
  duplicateArticle
};

// app/routes/$slug.($lang).categories.$category.tsx
var import_remix_typedjson2 = require("remix-typedjson");

// app/modules/knowledgeBase/components/KbHeader.tsx
var import_react7 = require("@remix-run/react");

// app/components/icons/XIcon.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function XIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("svg", { className, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    "path",
    {
      fillRule: "evenodd",
      d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
      clipRule: "evenodd"
    },
    void 0,
    !1,
    {
      fileName: "app/components/icons/XIcon.tsx",
      lineNumber: 4,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/icons/XIcon.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/modules/knowledgeBase/components/KbHeader.tsx
var import_react8 = require("react"), import_clsx2 = __toESM(require("clsx"));

// app/utils/shared/colors/ColorBackgroundUtils.ts
function getBg700(itemColor) {
  switch (itemColor) {
    case 0 /* UNDEFINED */:
      return "bg-gray-700";
    case 1 /* SLATE */:
      return "bg-slate-700";
    case 2 /* GRAY */:
      return "bg-gray-700";
    case 3 /* NEUTRAL */:
      return "bg-neutral-700";
    case 4 /* STONE */:
      return "bg-stone-700";
    case 5 /* RED */:
      return "bg-red-700";
    case 6 /* ORANGE */:
      return "bg-orange-700";
    case 7 /* AMBER */:
      return "bg-amber-700";
    case 8 /* YELLOW */:
      return "bg-yellow-700";
    case 9 /* LIME */:
      return "bg-lime-700";
    case 10 /* GREEN */:
      return "bg-green-700";
    case 11 /* EMERALD */:
      return "bg-emerald-700";
    case 12 /* TEAL */:
      return "bg-teal-700";
    case 13 /* CYAN */:
      return "bg-cyan-700";
    case 14 /* SKY */:
      return "bg-sky-700";
    case 15 /* BLUE */:
      return "bg-blue-700";
    case 16 /* INDIGO */:
      return "bg-indigo-700";
    case 17 /* VIOLET */:
      return "bg-violet-700";
    case 18 /* PURPLE */:
      return "bg-purple-700";
    case 19 /* FUCHSIA */:
      return "bg-fuchsia-700";
    case 20 /* PINK */:
      return "bg-pink-700";
    case 21 /* ROSE */:
      return "bg-rose-700";
  }
}
function getBg800(itemColor) {
  switch (itemColor) {
    case 0 /* UNDEFINED */:
      return "bg-gray-800";
    case 1 /* SLATE */:
      return "bg-slate-800";
    case 2 /* GRAY */:
      return "bg-gray-800";
    case 3 /* NEUTRAL */:
      return "bg-neutral-800";
    case 4 /* STONE */:
      return "bg-stone-800";
    case 5 /* RED */:
      return "bg-red-800";
    case 6 /* ORANGE */:
      return "bg-orange-800";
    case 7 /* AMBER */:
      return "bg-amber-800";
    case 8 /* YELLOW */:
      return "bg-yellow-800";
    case 9 /* LIME */:
      return "bg-lime-800";
    case 10 /* GREEN */:
      return "bg-green-800";
    case 11 /* EMERALD */:
      return "bg-emerald-800";
    case 12 /* TEAL */:
      return "bg-teal-800";
    case 13 /* CYAN */:
      return "bg-cyan-800";
    case 14 /* SKY */:
      return "bg-sky-800";
    case 15 /* BLUE */:
      return "bg-blue-800";
    case 16 /* INDIGO */:
      return "bg-indigo-800";
    case 17 /* VIOLET */:
      return "bg-violet-800";
    case 18 /* PURPLE */:
      return "bg-purple-800";
    case 19 /* FUCHSIA */:
      return "bg-fuchsia-800";
    case 20 /* PINK */:
      return "bg-pink-800";
    case 21 /* ROSE */:
      return "bg-rose-800";
  }
}
var ColorBackgroundUtils_default = {
  getBg700,
  getBg800
};

// app/utils/shared/colors/ColorTextUtils.ts
function getText300(itemColor) {
  switch (itemColor) {
    case 0 /* UNDEFINED */:
      return "text-gray-300";
    case 1 /* SLATE */:
      return "text-slate-300";
    case 2 /* GRAY */:
      return "text-gray-300";
    case 3 /* NEUTRAL */:
      return "text-neutral-300";
    case 4 /* STONE */:
      return "text-stone-300";
    case 5 /* RED */:
      return "text-red-300";
    case 6 /* ORANGE */:
      return "text-orange-300";
    case 7 /* AMBER */:
      return "text-amber-300";
    case 8 /* YELLOW */:
      return "text-yellow-300";
    case 9 /* LIME */:
      return "text-lime-300";
    case 10 /* GREEN */:
      return "text-green-300";
    case 11 /* EMERALD */:
      return "text-emerald-300";
    case 12 /* TEAL */:
      return "text-teal-300";
    case 13 /* CYAN */:
      return "text-cyan-300";
    case 14 /* SKY */:
      return "text-sky-300";
    case 15 /* BLUE */:
      return "text-blue-300";
    case 16 /* INDIGO */:
      return "text-indigo-300";
    case 17 /* VIOLET */:
      return "text-violet-300";
    case 18 /* PURPLE */:
      return "text-purple-300";
    case 19 /* FUCHSIA */:
      return "text-fuchsia-300";
    case 20 /* PINK */:
      return "text-pink-300";
    case 21 /* ROSE */:
      return "text-rose-300";
  }
}
function getText400(itemColor) {
  switch (itemColor) {
    case 0 /* UNDEFINED */:
      return "text-gray-400";
    case 1 /* SLATE */:
      return "text-slate-400";
    case 2 /* GRAY */:
      return "text-gray-400";
    case 3 /* NEUTRAL */:
      return "text-neutral-400";
    case 4 /* STONE */:
      return "text-stone-400";
    case 5 /* RED */:
      return "text-red-400";
    case 6 /* ORANGE */:
      return "text-orange-400";
    case 7 /* AMBER */:
      return "text-amber-400";
    case 8 /* YELLOW */:
      return "text-yellow-400";
    case 9 /* LIME */:
      return "text-lime-400";
    case 10 /* GREEN */:
      return "text-green-400";
    case 11 /* EMERALD */:
      return "text-emerald-400";
    case 12 /* TEAL */:
      return "text-teal-400";
    case 13 /* CYAN */:
      return "text-cyan-400";
    case 14 /* SKY */:
      return "text-sky-400";
    case 15 /* BLUE */:
      return "text-blue-400";
    case 16 /* INDIGO */:
      return "text-indigo-400";
    case 17 /* VIOLET */:
      return "text-violet-400";
    case 18 /* PURPLE */:
      return "text-purple-400";
    case 19 /* FUCHSIA */:
      return "text-fuchsia-400";
    case 20 /* PINK */:
      return "text-pink-400";
    case 21 /* ROSE */:
      return "text-rose-400";
  }
}
function getText500(itemColor) {
  switch (itemColor) {
    case 0 /* UNDEFINED */:
      return "text-gray-500";
    case 1 /* SLATE */:
      return "text-slate-500";
    case 2 /* GRAY */:
      return "text-gray-500";
    case 3 /* NEUTRAL */:
      return "text-neutral-500";
    case 4 /* STONE */:
      return "text-stone-500";
    case 5 /* RED */:
      return "text-red-500";
    case 6 /* ORANGE */:
      return "text-orange-500";
    case 7 /* AMBER */:
      return "text-amber-500";
    case 8 /* YELLOW */:
      return "text-yellow-500";
    case 9 /* LIME */:
      return "text-lime-500";
    case 10 /* GREEN */:
      return "text-green-500";
    case 11 /* EMERALD */:
      return "text-emerald-500";
    case 12 /* TEAL */:
      return "text-teal-500";
    case 13 /* CYAN */:
      return "text-cyan-500";
    case 14 /* SKY */:
      return "text-sky-500";
    case 15 /* BLUE */:
      return "text-blue-500";
    case 16 /* INDIGO */:
      return "text-indigo-500";
    case 17 /* VIOLET */:
      return "text-violet-500";
    case 18 /* PURPLE */:
      return "text-purple-500";
    case 19 /* FUCHSIA */:
      return "text-fuchsia-500";
    case 20 /* PINK */:
      return "text-pink-500";
    case 21 /* ROSE */:
      return "text-rose-500";
  }
}
var ColorTextUtils_default = {
  getText300,
  getText400,
  getText500
};

// app/utils/shared/colors/ColorPlaceholderUtils.ts
function getText4002(itemColor) {
  switch (itemColor) {
    case 0 /* UNDEFINED */:
      return "placeholder:text-gray-400";
    case 1 /* SLATE */:
      return "placeholder:text-slate-400";
    case 2 /* GRAY */:
      return "placeholder:text-gray-400";
    case 3 /* NEUTRAL */:
      return "placeholder:text-neutral-400";
    case 4 /* STONE */:
      return "placeholder:text-stone-400";
    case 5 /* RED */:
      return "placeholder:text-red-400";
    case 6 /* ORANGE */:
      return "placeholder:text-orange-400";
    case 7 /* AMBER */:
      return "placeholder:text-amber-400";
    case 8 /* YELLOW */:
      return "placeholder:text-yellow-400";
    case 9 /* LIME */:
      return "placeholder:text-lime-400";
    case 10 /* GREEN */:
      return "placeholder:text-green-400";
    case 11 /* EMERALD */:
      return "placeholder:text-emerald-400";
    case 12 /* TEAL */:
      return "placeholder:text-teal-400";
    case 13 /* CYAN */:
      return "placeholder:text-cyan-400";
    case 14 /* SKY */:
      return "placeholder:text-sky-400";
    case 15 /* BLUE */:
      return "placeholder:text-blue-400";
    case 16 /* INDIGO */:
      return "placeholder:text-indigo-400";
    case 17 /* VIOLET */:
      return "placeholder:text-violet-400";
    case 18 /* PURPLE */:
      return "placeholder:text-purple-400";
    case 19 /* FUCHSIA */:
      return "placeholder:text-fuchsia-400";
    case 20 /* PINK */:
      return "placeholder:text-pink-400";
    case 21 /* ROSE */:
      return "placeholder:text-rose-400";
  }
}
var ColorPlaceholderUtils_default = {
  getText400: getText4002
};

// app/utils/shared/colors/ColorFocusUtils.ts
function getRing600(itemColor) {
  switch (itemColor) {
    case 0 /* UNDEFINED */:
      return "focus:ring-gray-600";
    case 1 /* SLATE */:
      return "focus:ring-slate-600";
    case 2 /* GRAY */:
      return "focus:ring-gray-600";
    case 3 /* NEUTRAL */:
      return "focus:ring-neutral-600";
    case 4 /* STONE */:
      return "focus:ring-stone-600";
    case 5 /* RED */:
      return "focus:ring-red-600";
    case 6 /* ORANGE */:
      return "focus:ring-orange-600";
    case 7 /* AMBER */:
      return "focus:ring-amber-600";
    case 8 /* YELLOW */:
      return "focus:ring-yellow-600";
    case 9 /* LIME */:
      return "focus:ring-lime-600";
    case 10 /* GREEN */:
      return "focus:ring-green-600";
    case 11 /* EMERALD */:
      return "focus:ring-emerald-600";
    case 12 /* TEAL */:
      return "focus:ring-teal-600";
    case 13 /* CYAN */:
      return "focus:ring-cyan-600";
    case 14 /* SKY */:
      return "focus:ring-sky-600";
    case 15 /* BLUE */:
      return "focus:ring-blue-600";
    case 16 /* INDIGO */:
      return "focus:ring-indigo-600";
    case 17 /* VIOLET */:
      return "focus:ring-violet-600";
    case 18 /* PURPLE */:
      return "focus:ring-purple-600";
    case 19 /* FUCHSIA */:
      return "focus:ring-fuchsia-600";
    case 20 /* PINK */:
      return "focus:ring-pink-600";
    case 21 /* ROSE */:
      return "focus:ring-rose-600";
  }
}
function getText600(itemColor) {
  switch (itemColor) {
    case 0 /* UNDEFINED */:
      return "focus:text-gray-600";
    case 1 /* SLATE */:
      return "focus:text-slate-600";
    case 2 /* GRAY */:
      return "focus:text-gray-600";
    case 3 /* NEUTRAL */:
      return "focus:text-neutral-600";
    case 4 /* STONE */:
      return "focus:text-stone-600";
    case 5 /* RED */:
      return "focus:text-red-600";
    case 6 /* ORANGE */:
      return "focus:text-orange-600";
    case 7 /* AMBER */:
      return "focus:text-amber-600";
    case 8 /* YELLOW */:
      return "focus:text-yellow-600";
    case 9 /* LIME */:
      return "focus:text-lime-600";
    case 10 /* GREEN */:
      return "focus:text-green-600";
    case 11 /* EMERALD */:
      return "focus:text-emerald-600";
    case 12 /* TEAL */:
      return "focus:text-teal-600";
    case 13 /* CYAN */:
      return "focus:text-cyan-600";
    case 14 /* SKY */:
      return "focus:text-sky-600";
    case 15 /* BLUE */:
      return "focus:text-blue-600";
    case 16 /* INDIGO */:
      return "focus:text-indigo-600";
    case 17 /* VIOLET */:
      return "focus:text-violet-600";
    case 18 /* PURPLE */:
      return "focus:text-purple-600";
    case 19 /* FUCHSIA */:
      return "focus:text-fuchsia-600";
    case 20 /* PINK */:
      return "focus:text-pink-600";
    case 21 /* ROSE */:
      return "focus:text-rose-600";
  }
}
function getPlaceholder600(itemColor) {
  switch (itemColor) {
    case 0 /* UNDEFINED */:
      return "focus:placeholder-gray-600";
    case 1 /* SLATE */:
      return "focus:placeholder-slate-600";
    case 2 /* GRAY */:
      return "focus:placeholder-gray-600";
    case 3 /* NEUTRAL */:
      return "focus:placeholder-neutral-600";
    case 4 /* STONE */:
      return "focus:placeholder-stone-600";
    case 5 /* RED */:
      return "focus:placeholder-red-600";
    case 6 /* ORANGE */:
      return "focus:placeholder-orange-600";
    case 7 /* AMBER */:
      return "focus:placeholder-amber-600";
    case 8 /* YELLOW */:
      return "focus:placeholder-yellow-600";
    case 9 /* LIME */:
      return "focus:placeholder-lime-600";
    case 10 /* GREEN */:
      return "focus:placeholder-green-600";
    case 11 /* EMERALD */:
      return "focus:placeholder-emerald-600";
    case 12 /* TEAL */:
      return "focus:placeholder-teal-600";
    case 13 /* CYAN */:
      return "focus:placeholder-cyan-600";
    case 14 /* SKY */:
      return "focus:placeholder-sky-600";
    case 15 /* BLUE */:
      return "focus:placeholder-blue-600";
    case 16 /* INDIGO */:
      return "focus:placeholder-indigo-600";
    case 17 /* VIOLET */:
      return "focus:placeholder-violet-600";
    case 18 /* PURPLE */:
      return "focus:placeholder-purple-600";
    case 19 /* FUCHSIA */:
      return "focus:placeholder-fuchsia-600";
    case 20 /* PINK */:
      return "focus:placeholder-pink-600";
    case 21 /* ROSE */:
      return "focus:placeholder-rose-600";
  }
}
var ColorFocusUtils_default = {
  getRing600,
  getText600,
  getPlaceholder600
};

// app/utils/shared/colors/ColorRingUtils.ts
function getRing800(itemColor) {
  switch (itemColor) {
    case 0 /* UNDEFINED */:
      return "ring-gray-800";
    case 1 /* SLATE */:
      return "ring-slate-800";
    case 2 /* GRAY */:
      return "ring-gray-800";
    case 3 /* NEUTRAL */:
      return "ring-neutral-800";
    case 4 /* STONE */:
      return "ring-stone-800";
    case 5 /* RED */:
      return "ring-red-800";
    case 6 /* ORANGE */:
      return "ring-orange-800";
    case 7 /* AMBER */:
      return "ring-amber-800";
    case 8 /* YELLOW */:
      return "ring-yellow-800";
    case 9 /* LIME */:
      return "ring-lime-800";
    case 10 /* GREEN */:
      return "ring-green-800";
    case 11 /* EMERALD */:
      return "ring-emerald-800";
    case 12 /* TEAL */:
      return "ring-teal-800";
    case 13 /* CYAN */:
      return "ring-cyan-800";
    case 14 /* SKY */:
      return "ring-sky-800";
    case 15 /* BLUE */:
      return "ring-blue-800";
    case 16 /* INDIGO */:
      return "ring-indigo-800";
    case 17 /* VIOLET */:
      return "ring-violet-800";
    case 18 /* PURPLE */:
      return "ring-purple-800";
    case 19 /* FUCHSIA */:
      return "ring-fuchsia-800";
    case 20 /* PINK */:
      return "ring-pink-800";
    case 21 /* ROSE */:
      return "ring-rose-800";
  }
}
var ColorRingUtils_default = {
  getRing800
};

// app/utils/shared/colors/ColorGradientUtils.ts
function getFrom700To800(itemColor) {
  switch (itemColor) {
    case 0 /* UNDEFINED */:
      return "from-gray-700 to-gray-800";
    case 1 /* SLATE */:
      return "from-slate-700 to-slate-800";
    case 2 /* GRAY */:
      return "from-gray-700 to-gray-800";
    case 3 /* NEUTRAL */:
      return "from-neutral-700 to-neutral-800";
    case 4 /* STONE */:
      return "from-stone-700 to-stone-800";
    case 5 /* RED */:
      return "from-red-700 to-red-800";
    case 6 /* ORANGE */:
      return "from-orange-700 to-orange-800";
    case 7 /* AMBER */:
      return "from-amber-700 to-amber-800";
    case 8 /* YELLOW */:
      return "from-yellow-700 to-yellow-800";
    case 9 /* LIME */:
      return "from-lime-700 to-lime-800";
    case 10 /* GREEN */:
      return "from-green-700 to-green-800";
    case 11 /* EMERALD */:
      return "from-emerald-700 to-emerald-800";
    case 12 /* TEAL */:
      return "from-teal-700 to-teal-800";
    case 13 /* CYAN */:
      return "from-cyan-700 to-cyan-800";
    case 14 /* SKY */:
      return "from-sky-700 to-sky-800";
    case 15 /* BLUE */:
      return "from-blue-700 to-blue-800";
    case 16 /* INDIGO */:
      return "from-indigo-700 to-indigo-800";
    case 17 /* VIOLET */:
      return "from-violet-700 to-violet-800";
    case 18 /* PURPLE */:
      return "from-purple-700 to-purple-800";
    case 19 /* FUCHSIA */:
      return "from-fuchsia-700 to-fuchsia-800";
    case 20 /* PINK */:
      return "from-pink-700 to-pink-800";
    case 21 /* ROSE */:
      return "from-rose-700 to-rose-800";
  }
}
var ColorGradientUtils_default = {
  getFrom700To800
};

// app/assets/img/logo-dark.png
var logo_dark_default = "/build/_assets/logo-dark-JWXKLHVP.png";

// app/utils/shared/colors/ColorFocusWithinUtils.ts
function getText6002(itemColor) {
  switch (itemColor) {
    case 0 /* UNDEFINED */:
      return "focus-within:text-gray-600";
    case 1 /* SLATE */:
      return "focus-within:text-slate-600";
    case 2 /* GRAY */:
      return "focus-within:text-gray-600";
    case 3 /* NEUTRAL */:
      return "focus-within:text-neutral-600";
    case 4 /* STONE */:
      return "focus-within:text-stone-600";
    case 5 /* RED */:
      return "focus-within:text-red-600";
    case 6 /* ORANGE */:
      return "focus-within:text-orange-600";
    case 7 /* AMBER */:
      return "focus-within:text-amber-600";
    case 8 /* YELLOW */:
      return "focus-within:text-yellow-600";
    case 9 /* LIME */:
      return "focus-within:text-lime-600";
    case 10 /* GREEN */:
      return "focus-within:text-green-600";
    case 11 /* EMERALD */:
      return "focus-within:text-emerald-600";
    case 12 /* TEAL */:
      return "focus-within:text-teal-600";
    case 13 /* CYAN */:
      return "focus-within:text-cyan-600";
    case 14 /* SKY */:
      return "focus-within:text-sky-600";
    case 15 /* BLUE */:
      return "focus-within:text-blue-600";
    case 16 /* INDIGO */:
      return "focus-within:text-indigo-600";
    case 17 /* VIOLET */:
      return "focus-within:text-violet-600";
    case 18 /* PURPLE */:
      return "focus-within:text-purple-600";
    case 19 /* FUCHSIA */:
      return "focus-within:text-fuchsia-600";
    case 20 /* PINK */:
      return "focus-within:text-pink-600";
    case 21 /* ROSE */:
      return "focus-within:text-rose-600";
  }
}
var ColorFocusWithinUtils_default = {
  getText600: getText6002
};

// app/components/WarningBanner.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function WarningBanner({ title = "Warning", text = "", redirect: redirect17, children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "not-prose rounded-md border border-yellow-400 bg-yellow-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "rounded-md bg-yellow-50 p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("svg", { className: "h-5 w-5 text-yellow-400", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      "path",
      {
        fillRule: "evenodd",
        d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
        clipRule: "evenodd"
      },
      void 0,
      !1,
      {
        fileName: "app/components/WarningBanner.tsx",
        lineNumber: 18,
        columnNumber: 15
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/WarningBanner.tsx",
      lineNumber: 17,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/WarningBanner.tsx",
      lineNumber: 16,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "ml-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h3", { className: "text-sm font-medium leading-5 text-yellow-800", children: title }, void 0, !1, {
        fileName: "app/components/WarningBanner.tsx",
        lineNumber: 27,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mt-2 text-sm leading-5 text-yellow-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
        text,
        children
      ] }, void 0, !0, {
        fileName: "app/components/WarningBanner.tsx",
        lineNumber: 29,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/WarningBanner.tsx",
        lineNumber: 28,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/WarningBanner.tsx",
      lineNumber: 26,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/WarningBanner.tsx",
    lineNumber: 15,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/WarningBanner.tsx",
    lineNumber: 14,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/WarningBanner.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/modules/knowledgeBase/components/KbHeader.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function KbHeader({ kb, withTitleAndDescription }) {
  var _a, _b;
  let navigate = (0, import_react7.useNavigate)(), params = (0, import_react7.useParams)(), [searchParams, setSearchParams] = (0, import_react7.useSearchParams)(), [search, setSearch] = (0, import_react8.useState)(((_a = searchParams.get("q")) == null ? void 0 : _a.toString()) ?? ""), [debouncedSearch, setDebouncedSearch] = (0, import_react8.useState)(((_b = searchParams.get("q")) == null ? void 0 : _b.toString()) ?? "");
  return (0, import_react8.useEffect)(() => {
    let timer = setTimeout(() => setDebouncedSearch(search), 500);
    return () => clearTimeout(timer);
  }, [search]), (0, import_react8.useEffect)(() => {
    (searchParams.get("q") ?? "") !== debouncedSearch && (debouncedSearch === "" ? searchParams.delete("q") : searchParams.set("q", debouncedSearch), setSearchParams(searchParams));
  }, [debouncedSearch, searchParams, setSearchParams]), /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: (0, import_clsx2.default)("bg-gradient-to-r py-6 text-white", ColorGradientUtils_default.getFrom700To800(kb.color)), children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mx-auto max-w-5xl px-8 py-6 space-y-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex items-center justify-between space-x-2 h-12", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react7.Link, { to: `/${kb.slug}`, className: "flex select-none items-center space-x-2", children: [
          kb.logo === "light" ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { className: "h-8 w-auto", src: logo_light_default, alt: "Logo" }, void 0, !1, {
            fileName: "app/modules/knowledgeBase/components/KbHeader.tsx",
            lineNumber: 55,
            columnNumber: 17
          }, this) : kb.logo === "dark" ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { className: "h-8 w-auto", src: logo_dark_default, alt: "Logo" }, void 0, !1, {
            fileName: "app/modules/knowledgeBase/components/KbHeader.tsx",
            lineNumber: 57,
            columnNumber: 17
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { className: "h-8 w-auto", src: kb.logo, alt: "Logo" }, void 0, !1, {
            fileName: "app/modules/knowledgeBase/components/KbHeader.tsx",
            lineNumber: 59,
            columnNumber: 17
          }, this),
          !withTitleAndDescription && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react8.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: (0, import_clsx2.default)("px-2", ColorTextUtils_default.getText300(kb.color)), children: "|" }, void 0, !1, {
              fileName: "app/modules/knowledgeBase/components/KbHeader.tsx",
              lineNumber: 63,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "font-semibold", children: kb.title }, void 0, !1, {
              fileName: "app/modules/knowledgeBase/components/KbHeader.tsx",
              lineNumber: 64,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/modules/knowledgeBase/components/KbHeader.tsx",
            lineNumber: 62,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/modules/knowledgeBase/components/KbHeader.tsx",
          lineNumber: 53,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
          kb.links.map((link) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("a", { href: link.href, className: (0, import_clsx2.default)("hover:text-white transition-colors duration-150", ColorTextUtils_default.getText300(kb.color)), children: link.name }, link.href, !1, {
            fileName: "app/modules/knowledgeBase/components/KbHeader.tsx",
            lineNumber: 71,
            columnNumber: 19
          }, this)),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex space-x-2 items-center", children: kb.languages.length > 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            "select",
            {
              id: "lang",
              name: "lang",
              defaultValue: params.lang || kb.defaultLanguage,
              className: (0, import_clsx2.default)(
                "text-white ring-1 ring-inset focus:ring-2 sm:text-sm sm:leading-6 w-full block rounded-md border-0 py-1.5 pl-3 pr-10",
                ColorBackgroundUtils_default.getBg700(kb.color),
                ColorRingUtils_default.getRing800(kb.color),
                ColorFocusUtils_default.getRing600(kb.color)
              ),
              onChange: (e) => {
                params.article ? navigate(`/${kb.slug}/${e.target.value}/articles/${params.article}?${searchParams.toString()}`) : params.category ? navigate(`/${kb.slug}/${e.target.value}/categories/${params.category}?${searchParams.toString()}`) : navigate(`/${kb.slug}/${e.target.value}?${searchParams.toString()}`);
              },
              children: kb.languages.map((lang) => {
                let language = KnowledgeBaseUtils_default.supportedLanguages.find((f) => f.value === lang);
                return language ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("option", { value: lang, children: language.name }, lang, !1, {
                  fileName: "app/modules/knowledgeBase/components/KbHeader.tsx",
                  lineNumber: 121,
                  columnNumber: 25
                }, this) : null;
              })
            },
            void 0,
            !1,
            {
              fileName: "app/modules/knowledgeBase/components/KbHeader.tsx",
              lineNumber: 97,
              columnNumber: 19
            },
            this
          ) }, void 0, !1, {
            fileName: "app/modules/knowledgeBase/components/KbHeader.tsx",
            lineNumber: 76,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/modules/knowledgeBase/components/KbHeader.tsx",
          lineNumber: 68,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/modules/knowledgeBase/components/KbHeader.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this),
      withTitleAndDescription && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { className: "text-2xl font-semibold tracking-tight sm:text-4xl", children: kb.title }, void 0, !1, {
          fileName: "app/modules/knowledgeBase/components/KbHeader.tsx",
          lineNumber: 133,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: (0, import_clsx2.default)("text-base", ColorTextUtils_default.getText300(kb.color)), children: kb.description }, void 0, !1, {
          fileName: "app/modules/knowledgeBase/components/KbHeader.tsx",
          lineNumber: 134,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/modules/knowledgeBase/components/KbHeader.tsx",
        lineNumber: 132,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "w-full space-y-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: (0, import_clsx2.default)("relative", ColorTextUtils_default.getText400(kb.color), ColorFocusWithinUtils_default.getText600(kb.color)), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("svg", { className: "h-5 w-5", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14", height: "48", width: "48", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("g", { id: "magnifying-glass--glass-search-magnifying", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            "path",
            {
              id: "Vector",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M6 11.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"
            },
            void 0,
            !1,
            {
              fileName: "app/modules/knowledgeBase/components/KbHeader.tsx",
              lineNumber: 142,
              columnNumber: 21
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("path", { id: "Vector_2", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M13.5 13.5 10 10" }, void 0, !1, {
            fileName: "app/modules/knowledgeBase/components/KbHeader.tsx",
            lineNumber: 149,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/modules/knowledgeBase/components/KbHeader.tsx",
          lineNumber: 141,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/modules/knowledgeBase/components/KbHeader.tsx",
          lineNumber: 140,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/modules/knowledgeBase/components/KbHeader.tsx",
          lineNumber: 139,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          "input",
          {
            autoFocus: withTitleAndDescription,
            autoComplete: "off",
            className: (0, import_clsx2.default)(
              " transition-all focus:bg-white focus:ring-2 focus:ring-inset block w-full rounded-md border-0 px-6 py-5 pl-12 ring-1 ring-inset outline-none",
              ColorBackgroundUtils_default.getBg800(kb.color),
              ColorTextUtils_default.getText300(kb.color),
              ColorPlaceholderUtils_default.getText400(kb.color),
              ColorFocusUtils_default.getText600(kb.color),
              ColorFocusUtils_default.getPlaceholder600(kb.color),
              ColorFocusUtils_default.getRing600(kb.color),
              ColorRingUtils_default.getRing800(kb.color)
            ),
            type: "text",
            placeholder: "Search...",
            value: search,
            onChange: (e) => setSearch(e.target.value)
          },
          void 0,
          !1,
          {
            fileName: "app/modules/knowledgeBase/components/KbHeader.tsx",
            lineNumber: 153,
            columnNumber: 15
          },
          this
        ),
        search && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("button", { className: "absolute inset-y-0 right-0 flex items-center pr-4", onClick: () => setSearch(""), "aria-label": "Clear search", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(XIcon, { className: "h-5 w-5" }, void 0, !1, {
          fileName: "app/modules/knowledgeBase/components/KbHeader.tsx",
          lineNumber: 173,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/modules/knowledgeBase/components/KbHeader.tsx",
          lineNumber: 172,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/modules/knowledgeBase/components/KbHeader.tsx",
        lineNumber: 138,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/modules/knowledgeBase/components/KbHeader.tsx",
        lineNumber: 137,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/modules/knowledgeBase/components/KbHeader.tsx",
      lineNumber: 51,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/modules/knowledgeBase/components/KbHeader.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    searchParams.get("q") && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mx-auto max-w-5xl px-8 py-6 space-y-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(WarningBanner, { title: "TODO", children: [
      "TODO: Search results for ",
      searchParams.get("q")
    ] }, void 0, !0, {
      fileName: "app/modules/knowledgeBase/components/KbHeader.tsx",
      lineNumber: 182,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/modules/knowledgeBase/components/KbHeader.tsx",
      lineNumber: 181,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/modules/knowledgeBase/components/KbHeader.tsx",
    lineNumber: 49,
    columnNumber: 5
  }, this);
}

// app/components/ui/breadcrumbs/BreadcrumbSimple.tsx
var import_clsx3 = __toESM(require("clsx")), import_react9 = require("@remix-run/react");

// app/utils/app/UrlUtils.ts
var stripTrailingSlash = (str) => str.endsWith("/") ? str.slice(0, -1) : str, currentTenantUrl = (params, path) => {
  let { tenant } = params;
  if (path) {
    let appPath = path.startsWith("/") ? path.substring(1, path.length - 1) : path;
    return `/app/${tenant}/${appPath}`;
  }
  return `/app/${tenant}/`;
}, currentEntityUrl = (params) => `${stripTrailingSlash(currentTenantUrl(params))}/${params.entity}`, replaceVariables = (params, path) => path == null ? void 0 : path.replace(":tenant", params.tenant ?? ""), slugify = (str, max = 100) => {
  let a = "\xE0\xE1\xE2\xE4\xE6\xE3\xE5\u0101\u0103\u0105\xE7\u0107\u010D\u0111\u010F\xE8\xE9\xEA\xEB\u0113\u0117\u0119\u011B\u011F\u01F5\u1E27\xEE\xEF\xED\u012B\u012F\xEC\u0131\u0130\u0142\u1E3F\xF1\u0144\u01F9\u0148\xF4\xF6\xF2\xF3\u0153\xF8\u014D\xF5\u0151\u1E55\u0155\u0159\xDF\u015B\u0161\u015F\u0219\u0165\u021B\xFB\xFC\xF9\xFA\u016B\u01D8\u016F\u0171\u0173\u1E83\u1E8D\xFF\xFD\u017E\u017A\u017C\xB7/_,:;", b = "aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------", p = new RegExp(a.split("").join("|"), "g");
  return str.toString().toLowerCase().replace(/\s+/g, "-").replace(p, (c) => b.charAt(a.indexOf(c))).replace(/&/g, "-and-").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
};
function getParentRoute(pathname) {
  let url = stripTrailingSlash(pathname);
  return url.substring(0, url.lastIndexOf("/"));
}
function getModulePath(params, path) {
  return params.tenant ? path.startsWith("integrations") ? `/app/${params.tenant}/settings/${path}` : path.startsWith("entities") ? `/app/${params.tenant}/settings/${path}` : `/app/${params.tenant}/${path}` : `/admin/${path}`;
}
var UrlUtils_default = {
  currentTenantUrl,
  currentEntityUrl,
  stripTrailingSlash,
  slugify,
  replaceVariables,
  getParentRoute,
  getModulePath
};

// app/components/ui/icons/RightIcon.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function RightIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("svg", { className, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
    "path",
    {
      fillRule: "evenodd",
      d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
      clipRule: "evenodd"
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/icons/RightIcon.tsx",
      lineNumber: 4,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/ui/icons/RightIcon.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/components/ui/breadcrumbs/BreadcrumbSimple.tsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function BreadcrumbSimple({ menu = [], className = "", home = "" }) {
  let params = (0, import_react9.useParams)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("nav", { className: (0, import_clsx3.default)("not-prose flex truncate", className), "aria-label": "Breadcrumb", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("ol", { className: "flex items-center space-x-1", children: [
    home && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react9.Link, { to: home.length > 0 ? home : UrlUtils_default.currentTenantUrl(params, "dashboard"), className: "text-gray-300 hover:text-gray-400", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("svg", { className: "h-4 w-4 flex-shrink-0", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("path", { d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" }, void 0, !1, {
        fileName: "app/components/ui/breadcrumbs/BreadcrumbSimple.tsx",
        lineNumber: 27,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/components/ui/breadcrumbs/BreadcrumbSimple.tsx",
        lineNumber: 26,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "sr-only", children: "Home" }, void 0, !1, {
        fileName: "app/components/ui/breadcrumbs/BreadcrumbSimple.tsx",
        lineNumber: 29,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ui/breadcrumbs/BreadcrumbSimple.tsx",
      lineNumber: 25,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/components/ui/breadcrumbs/BreadcrumbSimple.tsx",
      lineNumber: 24,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/ui/breadcrumbs/BreadcrumbSimple.tsx",
      lineNumber: 23,
      columnNumber: 11
    }, this),
    menu.map((item, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex items-center", children: [
      (idx > 0 || home) && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(RightIcon, { className: "h-4 w-4 flex-shrink-0 text-gray-400" }, void 0, !1, {
        fileName: "app/components/ui/breadcrumbs/BreadcrumbSimple.tsx",
        lineNumber: 37,
        columnNumber: 37
      }, this),
      item.routePath ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react9.Link, { to: item.routePath, className: (0, import_clsx3.default)("select-none text-sm font-normal text-gray-400 hover:text-gray-600", home && "ml-1"), children: item.title }, void 0, !1, {
        fileName: "app/components/ui/breadcrumbs/BreadcrumbSimple.tsx",
        lineNumber: 39,
        columnNumber: 17
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "ml-1 select-none text-sm font-normal text-gray-400", children: item.title }, void 0, !1, {
        fileName: "app/components/ui/breadcrumbs/BreadcrumbSimple.tsx",
        lineNumber: 43,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ui/breadcrumbs/BreadcrumbSimple.tsx",
      lineNumber: 36,
      columnNumber: 13
    }, this) }, item.title, !1, {
      fileName: "app/components/ui/breadcrumbs/BreadcrumbSimple.tsx",
      lineNumber: 35,
      columnNumber: 11
    }, this))
  ] }, void 0, !0, {
    fileName: "app/components/ui/breadcrumbs/BreadcrumbSimple.tsx",
    lineNumber: 21,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/ui/breadcrumbs/BreadcrumbSimple.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/modules/knowledgeBase/components/categories/KbCategory.tsx
var import_clsx7 = __toESM(require("clsx")), import_react13 = require("@remix-run/react");

// app/components/ui/buttons/ButtonSecondary.tsx
var import_clsx4 = __toESM(require("clsx"));

// app/components/ui/buttons/LinkOrAhref.tsx
var import_react10 = require("@remix-run/react"), import_react11 = require("react"), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function LinkOrAhref({ to, target, children, className, role, rel, reloadDocument }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react11.Fragment, { children: to.startsWith("http") ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("a", { href: to, target, className, role, rel, children }, void 0, !1, {
    fileName: "app/components/ui/buttons/LinkOrAhref.tsx",
    lineNumber: 17,
    columnNumber: 9
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react10.Link, { reloadDocument, to, target, className, role, children }, void 0, !1, {
    fileName: "app/components/ui/buttons/LinkOrAhref.tsx",
    lineNumber: 21,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/ui/buttons/LinkOrAhref.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/components/ui/buttons/ButtonSecondary.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function ButtonSecondary({ className = "", type = "button", onClick, disabled, destructive, to, target, children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { children: (() => !to || disabled ? /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
    "button",
    {
      onClick,
      type,
      disabled,
      className: (0, import_clsx4.default)(
        className,
        "inline-flex items-center space-x-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-sm focus:border-accent-300 focus:outline-none focus:ring-2",
        disabled && "cursor-not-allowed opacity-75",
        !destructive && "text-accent-700",
        destructive && "text-red-700",
        !disabled && !destructive && !className && "hover:border-accent-300 hover:text-accent-900 focus:ring-accent-500",
        !disabled && destructive && "hover:bg-red-50 focus:ring-red-500"
      ),
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/buttons/ButtonSecondary.tsx",
      lineNumber: 22,
      columnNumber: 13
    },
    this
  ) : /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
    LinkOrAhref,
    {
      to,
      target,
      className: (0, import_clsx4.default)(
        className,
        "inline-flex items-center space-x-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-sm focus:border-accent-300 focus:outline-none focus:ring-2",
        disabled && "cursor-not-allowed opacity-75",
        !destructive && "text-accent-700",
        destructive && "text-red-700",
        !disabled && !destructive && !className && "hover:border-accent-300 hover:text-accent-900 focus:ring-accent-500",
        !disabled && destructive && "hover:bg-red-50 focus:ring-red-500"
      ),
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/buttons/ButtonSecondary.tsx",
      lineNumber: 41,
      columnNumber: 13
    },
    this
  ))() }, void 0, !1, {
    fileName: "app/components/ui/buttons/ButtonSecondary.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/assets/icons/IconEmptyResults.tsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function IconEmptyResults({ className }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
    "svg",
    {
      className,
      fill: "currentColor",
      id: "f20e0c25-d928-42cc-98d1-13cc230663ea",
      "data-name": "Layer 1",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      viewBox: "0 0 820.16 780.81",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("defs", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
            "linearGradient",
            {
              id: "07332201-7176-49c2-9908-6dc4a39c4716",
              x1: "539.63",
              y1: "734.6",
              x2: "539.63",
              y2: "151.19",
              gradientTransform: "translate(-3.62 1.57)",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("stop", { offset: "0", stopColor: "gray", stopOpacity: "0.25" }, void 0, !1, {
                  fileName: "app/assets/icons/IconEmptyResults.tsx",
                  lineNumber: 22,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("stop", { offset: "0.54", stopColor: "gray", stopOpacity: "0.12" }, void 0, !1, {
                  fileName: "app/assets/icons/IconEmptyResults.tsx",
                  lineNumber: 23,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("stop", { offset: "1", stopColor: "gray", stopOpacity: "0.1" }, void 0, !1, {
                  fileName: "app/assets/icons/IconEmptyResults.tsx",
                  lineNumber: 24,
                  columnNumber: 11
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/assets/icons/IconEmptyResults.tsx",
              lineNumber: 13,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
            "linearGradient",
            {
              id: "0ee1ab3f-7ba2-4205-9d4a-9606ad702253",
              x1: "540.17",
              y1: "180.2",
              x2: "540.17",
              y2: "130.75",
              gradientTransform: "translate(-63.92 7.85)",
              xlinkHref: "#07332201-7176-49c2-9908-6dc4a39c4716"
            },
            void 0,
            !1,
            {
              fileName: "app/assets/icons/IconEmptyResults.tsx",
              lineNumber: 26,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
            "linearGradient",
            {
              id: "abca9755-bed1-4a97-b027-7f02ee3ffa09",
              x1: "540.17",
              y1: "140.86",
              x2: "540.17",
              y2: "82.43",
              gradientTransform: "translate(-84.51 124.6) rotate(-12.11)",
              xlinkHref: "#07332201-7176-49c2-9908-6dc4a39c4716"
            },
            void 0,
            !1,
            {
              fileName: "app/assets/icons/IconEmptyResults.tsx",
              lineNumber: 35,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
            "linearGradient",
            {
              id: "2632d424-e666-4ee4-9508-a494957e14ab",
              x1: "476.4",
              y1: "710.53",
              x2: "476.4",
              y2: "127.12",
              gradientTransform: "matrix(1, 0, 0, 1, 0, 0)",
              xlinkHref: "#07332201-7176-49c2-9908-6dc4a39c4716"
            },
            void 0,
            !1,
            {
              fileName: "app/assets/icons/IconEmptyResults.tsx",
              lineNumber: 44,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
            "linearGradient",
            {
              id: "97571ef7-1c83-4e06-b701-c2e47e77dca3",
              x1: "476.94",
              y1: "156.13",
              x2: "476.94",
              y2: "106.68",
              gradientTransform: "matrix(1, 0, 0, 1, 0, 0)",
              xlinkHref: "#07332201-7176-49c2-9908-6dc4a39c4716"
            },
            void 0,
            !1,
            {
              fileName: "app/assets/icons/IconEmptyResults.tsx",
              lineNumber: 53,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
            "linearGradient",
            {
              id: "7d32e13e-a0c7-49c4-af0e-066a2f8cb76e",
              x1: "666.86",
              y1: "176.39",
              x2: "666.86",
              y2: "117.95",
              gradientTransform: "matrix(1, 0, 0, 1, 0, 0)",
              xlinkHref: "#07332201-7176-49c2-9908-6dc4a39c4716"
            },
            void 0,
            !1,
            {
              fileName: "app/assets/icons/IconEmptyResults.tsx",
              lineNumber: 62,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/assets/icons/IconEmptyResults.tsx",
          lineNumber: 12,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("title", {}, void 0, !1, {
          fileName: "app/assets/icons/IconEmptyResults.tsx",
          lineNumber: 72,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("rect", { x: "317.5", y: "142.55", width: "437.02", height: "603.82", transform: "translate(-271.22 62.72) rotate(-12.11)", fill: "#e0e0e0" }, void 0, !1, {
          fileName: "app/assets/icons/IconEmptyResults.tsx",
          lineNumber: 73,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("g", { opacity: "0.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
          "rect",
          {
            x: "324.89",
            y: "152.76",
            width: "422.25",
            height: "583.41",
            transform: "translate(-271.22 62.72) rotate(-12.11)",
            fill: "url(#07332201-7176-49c2-9908-6dc4a39c4716)"
          },
          void 0,
          !1,
          {
            fileName: "app/assets/icons/IconEmptyResults.tsx",
            lineNumber: 75,
            columnNumber: 9
          },
          this
        ) }, void 0, !1, {
          fileName: "app/assets/icons/IconEmptyResults.tsx",
          lineNumber: 74,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("rect", { x: "329.81", y: "157.1", width: "411.5", height: "570.52", transform: "translate(-270.79 62.58) rotate(-12.11)", fill: "#fafafa" }, void 0, !1, {
          fileName: "app/assets/icons/IconEmptyResults.tsx",
          lineNumber: 84,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
          "rect",
          {
            x: "374.18",
            y: "138.6",
            width: "204.14",
            height: "49.45",
            transform: "translate(-213.58 43.93) rotate(-12.11)",
            fill: "url(#0ee1ab3f-7ba2-4205-9d4a-9606ad702253)"
          },
          void 0,
          !1,
          {
            fileName: "app/assets/icons/IconEmptyResults.tsx",
            lineNumber: 85,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
          "path",
          {
            d: "M460.93,91.9c-15.41,3.31-25.16,18.78-21.77,34.55s18.62,25.89,34,22.58,25.16-18.78,21.77-34.55S476.34,88.59,460.93,91.9ZM470.6,137A16.86,16.86,0,1,1,483.16,117,16.66,16.66,0,0,1,470.6,137Z",
            transform: "translate(-189.92 -59.59)",
            fill: "url(#abca9755-bed1-4a97-b027-7f02ee3ffa09)"
          },
          void 0,
          !1,
          {
            fileName: "app/assets/icons/IconEmptyResults.tsx",
            lineNumber: 93,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("rect", { x: "375.66", y: "136.55", width: "199.84", height: "47.27", transform: "translate(-212.94 43.72) rotate(-12.11)", className: "text-theme-700" }, void 0, !1, {
          fileName: "app/assets/icons/IconEmptyResults.tsx",
          lineNumber: 98,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
          "path",
          {
            d: "M460.93,91.9a27.93,27.93,0,1,0,33.17,21.45A27.93,27.93,0,0,0,460.93,91.9ZM470.17,135a16.12,16.12,0,1,1,12.38-19.14A16.12,16.12,0,0,1,470.17,135Z",
            transform: "translate(-189.92 -59.59)",
            className: "text-theme-700"
          },
          void 0,
          !1,
          {
            fileName: "app/assets/icons/IconEmptyResults.tsx",
            lineNumber: 99,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("rect", { x: "257.89", y: "116.91", width: "437.02", height: "603.82", fill: "#e0e0e0" }, void 0, !1, {
          fileName: "app/assets/icons/IconEmptyResults.tsx",
          lineNumber: 104,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("g", { opacity: "0.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("rect", { x: "265.28", y: "127.12", width: "422.25", height: "583.41", fill: "url(#2632d424-e666-4ee4-9508-a494957e14ab)" }, void 0, !1, {
          fileName: "app/assets/icons/IconEmptyResults.tsx",
          lineNumber: 106,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/assets/icons/IconEmptyResults.tsx",
          lineNumber: 105,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("rect", { x: "270.65", y: "131.42", width: "411.5", height: "570.52", fill: "#fff" }, void 0, !1, {
          fileName: "app/assets/icons/IconEmptyResults.tsx",
          lineNumber: 108,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("rect", { x: "374.87", y: "106.68", width: "204.14", height: "49.45", fill: "url(#97571ef7-1c83-4e06-b701-c2e47e77dca3)" }, void 0, !1, {
          fileName: "app/assets/icons/IconEmptyResults.tsx",
          lineNumber: 109,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
          "path",
          {
            d: "M666.86,118c-15.76,0-28.54,13.08-28.54,29.22s12.78,29.22,28.54,29.22,28.54-13.08,28.54-29.22S682.62,118,666.86,118Zm0,46.08a16.86,16.86,0,1,1,16.46-16.86A16.66,16.66,0,0,1,666.86,164Z",
            transform: "translate(-189.92 -59.59)",
            fill: "url(#7d32e13e-a0c7-49c4-af0e-066a2f8cb76e)"
          },
          void 0,
          !1,
          {
            fileName: "app/assets/icons/IconEmptyResults.tsx",
            lineNumber: 110,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("rect", { x: "377.02", y: "104.56", width: "199.84", height: "47.27", className: "text-theme-700" }, void 0, !1, {
          fileName: "app/assets/icons/IconEmptyResults.tsx",
          lineNumber: 115,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
          "path",
          {
            d: "M666.86,118a27.93,27.93,0,1,0,27.93,27.93A27.93,27.93,0,0,0,666.86,118Zm0,44.05A16.12,16.12,0,1,1,683,145.89,16.12,16.12,0,0,1,666.86,162Z",
            transform: "translate(-189.92 -59.59)",
            className: "text-theme-700"
          },
          void 0,
          !1,
          {
            fileName: "app/assets/icons/IconEmptyResults.tsx",
            lineNumber: 116,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("g", { opacity: "0.5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("rect", { x: "15.27", y: "737.05", width: "3.76", height: "21.33", fill: "#47e6b1" }, void 0, !1, {
            fileName: "app/assets/icons/IconEmptyResults.tsx",
            lineNumber: 122,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("rect", { x: "205.19", y: "796.65", width: "3.76", height: "21.33", transform: "translate(824.47 540.65) rotate(90)", fill: "#47e6b1" }, void 0, !1, {
            fileName: "app/assets/icons/IconEmptyResults.tsx",
            lineNumber: 123,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/assets/icons/IconEmptyResults.tsx",
          lineNumber: 121,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("g", { opacity: "0.5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("rect", { x: "451.49", width: "3.76", height: "21.33", fill: "#47e6b1" }, void 0, !1, {
            fileName: "app/assets/icons/IconEmptyResults.tsx",
            lineNumber: 126,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("rect", { x: "641.4", y: "59.59", width: "3.76", height: "21.33", transform: "translate(523.63 -632.62) rotate(90)", fill: "#47e6b1" }, void 0, !1, {
            fileName: "app/assets/icons/IconEmptyResults.tsx",
            lineNumber: 127,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/assets/icons/IconEmptyResults.tsx",
          lineNumber: 125,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
          "path",
          {
            d: "M961,832.15a4.61,4.61,0,0,1-2.57-5.57,2.22,2.22,0,0,0,.1-.51h0a2.31,2.31,0,0,0-4.15-1.53h0a2.22,2.22,0,0,0-.26.45,4.61,4.61,0,0,1-5.57,2.57,2.22,2.22,0,0,0-.51-.1h0a2.31,2.31,0,0,0-1.53,4.15h0a2.22,2.22,0,0,0,.45.26,4.61,4.61,0,0,1,2.57,5.57,2.22,2.22,0,0,0-.1.51h0a2.31,2.31,0,0,0,4.15,1.53h0a2.22,2.22,0,0,0,.26-.45,4.61,4.61,0,0,1,5.57-2.57,2.22,2.22,0,0,0,.51.1h0a2.31,2.31,0,0,0,1.53-4.15h0A2.22,2.22,0,0,0,961,832.15Z",
            transform: "translate(-189.92 -59.59)",
            fill: "#4d8af0",
            opacity: "0.5"
          },
          void 0,
          !1,
          {
            fileName: "app/assets/icons/IconEmptyResults.tsx",
            lineNumber: 129,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
          "path",
          {
            d: "M326.59,627.09a4.61,4.61,0,0,1-2.57-5.57,2.22,2.22,0,0,0,.1-.51h0a2.31,2.31,0,0,0-4.15-1.53h0a2.22,2.22,0,0,0-.26.45,4.61,4.61,0,0,1-5.57,2.57,2.22,2.22,0,0,0-.51-.1h0a2.31,2.31,0,0,0-1.53,4.15h0a2.22,2.22,0,0,0,.45.26,4.61,4.61,0,0,1,2.57,5.57,2.22,2.22,0,0,0-.1.51h0a2.31,2.31,0,0,0,4.15,1.53h0a2.22,2.22,0,0,0,.26-.45A4.61,4.61,0,0,1,325,631.4a2.22,2.22,0,0,0,.51.1h0a2.31,2.31,0,0,0,1.53-4.15h0A2.22,2.22,0,0,0,326.59,627.09Z",
            transform: "translate(-189.92 -59.59)",
            fill: "#fdd835",
            opacity: "0.5"
          },
          void 0,
          !1,
          {
            fileName: "app/assets/icons/IconEmptyResults.tsx",
            lineNumber: 135,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
          "path",
          {
            d: "M855,127.77a4.61,4.61,0,0,1-2.57-5.57,2.22,2.22,0,0,0,.1-.51h0a2.31,2.31,0,0,0-4.15-1.53h0a2.22,2.22,0,0,0-.26.45,4.61,4.61,0,0,1-5.57,2.57,2.22,2.22,0,0,0-.51-.1h0a2.31,2.31,0,0,0-1.53,4.15h0a2.22,2.22,0,0,0,.45.26,4.61,4.61,0,0,1,2.57,5.57,2.22,2.22,0,0,0-.1.51h0a2.31,2.31,0,0,0,4.15,1.53h0a2.22,2.22,0,0,0,.26-.45,4.61,4.61,0,0,1,5.57-2.57,2.22,2.22,0,0,0,.51.1h0a2.31,2.31,0,0,0,1.53-4.15h0A2.22,2.22,0,0,0,855,127.77Z",
            transform: "translate(-189.92 -59.59)",
            fill: "#fdd835",
            opacity: "0.5"
          },
          void 0,
          !1,
          {
            fileName: "app/assets/icons/IconEmptyResults.tsx",
            lineNumber: 141,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("circle", { cx: "812.64", cy: "314.47", r: "7.53", fill: "#f55f44", opacity: "0.5" }, void 0, !1, {
          fileName: "app/assets/icons/IconEmptyResults.tsx",
          lineNumber: 147,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("circle", { cx: "230.73", cy: "746.65", r: "7.53", fill: "#f55f44", opacity: "0.5" }, void 0, !1, {
          fileName: "app/assets/icons/IconEmptyResults.tsx",
          lineNumber: 148,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("circle", { cx: "735.31", cy: "477.23", r: "7.53", fill: "#f55f44", opacity: "0.5" }, void 0, !1, {
          fileName: "app/assets/icons/IconEmptyResults.tsx",
          lineNumber: 149,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("circle", { cx: "87.14", cy: "96.35", r: "7.53", fill: "#4d8af0", opacity: "0.5" }, void 0, !1, {
          fileName: "app/assets/icons/IconEmptyResults.tsx",
          lineNumber: 150,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("circle", { cx: "7.53", cy: "301.76", r: "7.53", fill: "#47e6b1", opacity: "0.5" }, void 0, !1, {
          fileName: "app/assets/icons/IconEmptyResults.tsx",
          lineNumber: 151,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/assets/icons/IconEmptyResults.tsx",
      lineNumber: 3,
      columnNumber: 5
    },
    this
  );
}

// app/components/ui/emptyState/EmptyState.tsx
var import_clsx5 = __toESM(require("clsx")), import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function EmptyState({ className, captions, to, icon, onClick }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: (0, import_clsx5.default)(className, "px-1.6 rounded-md border-2 border-dashed border-gray-200 py-16 text-center text-gray-900"), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(IconEmptyResults, { className: "mx-auto w-10" }, void 0, !1, {
      fileName: "app/components/ui/emptyState/EmptyState.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h3", { className: "mt-2 text-sm font-medium", children: captions.thereAreNo }, void 0, !1, {
      fileName: "app/components/ui/emptyState/EmptyState.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "mt-1 text-sm text-gray-500", children: captions.description }, void 0, !1, {
      fileName: "app/components/ui/emptyState/EmptyState.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    captions.new && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "mt-6", children: (() => to ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(ButtonSecondary, { to, children: [
      (() => icon === "plus" ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 4v16m8-8H4" }, void 0, !1, {
        fileName: "app/components/ui/emptyState/EmptyState.tsx",
        lineNumber: 35,
        columnNumber: 27
      }, this) }, void 0, !1, {
        fileName: "app/components/ui/emptyState/EmptyState.tsx",
        lineNumber: 34,
        columnNumber: 25
      }, this) : icon === "refresh" ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "2",
          d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        },
        void 0,
        !1,
        {
          fileName: "app/components/ui/emptyState/EmptyState.tsx",
          lineNumber: 41,
          columnNumber: 27
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/ui/emptyState/EmptyState.tsx",
        lineNumber: 40,
        columnNumber: 25
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", {}, void 0, !1, {
        fileName: "app/components/ui/emptyState/EmptyState.tsx",
        lineNumber: 50,
        columnNumber: 30
      }, this))(),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { children: captions.new }, void 0, !1, {
        fileName: "app/components/ui/emptyState/EmptyState.tsx",
        lineNumber: 53,
        columnNumber: 19
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ui/emptyState/EmptyState.tsx",
      lineNumber: 30,
      columnNumber: 17
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(ButtonSecondary, { onClick, type: "button", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { children: icon === "plus" && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 4v16m8-8H4" }, void 0, !1, {
        fileName: "app/components/ui/emptyState/EmptyState.tsx",
        lineNumber: 62,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/components/ui/emptyState/EmptyState.tsx",
        lineNumber: 61,
        columnNumber: 23
      }, this) }, void 0, !1, {
        fileName: "app/components/ui/emptyState/EmptyState.tsx",
        lineNumber: 59,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { children: captions.new }, void 0, !1, {
        fileName: "app/components/ui/emptyState/EmptyState.tsx",
        lineNumber: 66,
        columnNumber: 19
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ui/emptyState/EmptyState.tsx",
      lineNumber: 58,
      columnNumber: 17
    }, this))() }, void 0, !1, {
      fileName: "app/components/ui/emptyState/EmptyState.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ui/emptyState/EmptyState.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

// app/modules/knowledgeBase/components/articles/KbArticles.tsx
var import_react12 = require("@remix-run/react");

// app/components/icons/RightIcon.tsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function RightIcon2({ className }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("svg", { className, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
    "path",
    {
      fillRule: "evenodd",
      d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
      clipRule: "evenodd"
    },
    void 0,
    !1,
    {
      fileName: "app/components/icons/RightIcon.tsx",
      lineNumber: 4,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/icons/RightIcon.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/modules/knowledgeBase/components/articles/KbArticles.tsx
var import_clsx6 = __toESM(require("clsx"));

// app/utils/shared/colors/ColorHoverUtils.ts
function getBorder500(itemColor) {
  switch (itemColor) {
    case 0 /* UNDEFINED */:
      return "border-gray-500";
    case 1 /* SLATE */:
      return "border-slate-500";
    case 2 /* GRAY */:
      return "border-gray-500";
    case 3 /* NEUTRAL */:
      return "border-neutral-500";
    case 4 /* STONE */:
      return "border-stone-500";
    case 5 /* RED */:
      return "border-red-500";
    case 6 /* ORANGE */:
      return "border-orange-500";
    case 7 /* AMBER */:
      return "border-amber-500";
    case 8 /* YELLOW */:
      return "border-yellow-500";
    case 9 /* LIME */:
      return "border-lime-500";
    case 10 /* GREEN */:
      return "border-green-500";
    case 11 /* EMERALD */:
      return "border-emerald-500";
    case 12 /* TEAL */:
      return "border-teal-500";
    case 13 /* CYAN */:
      return "border-cyan-500";
    case 14 /* SKY */:
      return "border-sky-500";
    case 15 /* BLUE */:
      return "border-blue-500";
    case 16 /* INDIGO */:
      return "border-indigo-500";
    case 17 /* VIOLET */:
      return "border-violet-500";
    case 18 /* PURPLE */:
      return "border-purple-500";
    case 19 /* FUCHSIA */:
      return "border-fuchsia-500";
    case 20 /* PINK */:
      return "border-pink-500";
    case 21 /* ROSE */:
      return "border-rose-500";
  }
}
var ColorHoverUtils_default = {
  getBorder500
};

// app/modules/knowledgeBase/components/articles/KbArticles.tsx
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function KbArticles({
  kb,
  items
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "bg-white border border-gray-300 rounded-md py-3", children: items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: (0, import_clsx6.default)("group", ColorHoverUtils_default.getBorder500(kb.color)), children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react12.Link, { to: item.href, children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex justify-between space-x-2 px-6 py-3 hover:bg-gray-50 items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: (0, import_clsx6.default)("text-gray-600 group-hover:text-gray-900"), children: item.title }, void 0, !1, {
      fileName: "app/modules/knowledgeBase/components/articles/KbArticles.tsx",
      lineNumber: 28,
      columnNumber: 19
    }, this) }, void 0, !1, {
      fileName: "app/modules/knowledgeBase/components/articles/KbArticles.tsx",
      lineNumber: 27,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(RightIcon2, { className: (0, import_clsx6.default)("h-5 w-5 text-gray-300 flex-shrink-0 group-hover:text-gray-600") }, void 0, !1, {
      fileName: "app/modules/knowledgeBase/components/articles/KbArticles.tsx",
      lineNumber: 30,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/modules/knowledgeBase/components/articles/KbArticles.tsx",
    lineNumber: 26,
    columnNumber: 15
  }, this) }, void 0, !1, {
    fileName: "app/modules/knowledgeBase/components/articles/KbArticles.tsx",
    lineNumber: 25,
    columnNumber: 13
  }, this) }, item.title, !1, {
    fileName: "app/modules/knowledgeBase/components/articles/KbArticles.tsx",
    lineNumber: 24,
    columnNumber: 11
  }, this)) }, void 0, !1, {
    fileName: "app/modules/knowledgeBase/components/articles/KbArticles.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

// app/modules/knowledgeBase/components/articles/KbArticlesBySection.tsx
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function KbArticlesBySection({ kb, item }) {
  function getSections() {
    let sections = [];
    return item.articles.forEach((article) => {
      let section = item.sections.find((item2) => item2.id === article.sectionId) ?? null, sectionIndex = sections.findIndex((item2) => {
        var _a;
        return ((_a = item2.section) == null ? void 0 : _a.id) === (section == null ? void 0 : section.id);
      });
      sectionIndex === -1 ? sections.push({
        section,
        articles: [article]
      }) : sections[sectionIndex].articles.push(article);
    }), sections.forEach((item2) => {
      item2.articles = item2.articles.sort((a, b) => a.order && b.order ? a.order - b.order : 0);
    }), sections = sections.sort((a, b) => {
      var _a, _b;
      return ((_a = a.section) == null ? void 0 : _a.order) && ((_b = b.section) == null ? void 0 : _b.order) ? a.section.order - b.section.order : -1;
    }), sections;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: item.articles.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(EmptyState, { className: "bg-white", captions: { thereAreNo: "No articles" } }, void 0, !1, {
    fileName: "app/modules/knowledgeBase/components/articles/KbArticlesBySection.tsx",
    lineNumber: 53,
    columnNumber: 9
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "space-y-6", children: getSections().map((item2) => {
    var _a;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "space-y-3", children: [
      item2.section && /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex items-center space-x-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "text-xl font-bold", children: item2.section.title }, void 0, !1, {
        fileName: "app/modules/knowledgeBase/components/articles/KbArticlesBySection.tsx",
        lineNumber: 61,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/modules/knowledgeBase/components/articles/KbArticlesBySection.tsx",
        lineNumber: 60,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(KbArticles, { kb, items: item2.articles }, void 0, !1, {
        fileName: "app/modules/knowledgeBase/components/articles/KbArticlesBySection.tsx",
        lineNumber: 64,
        columnNumber: 17
      }, this)
    ] }, (_a = item2.section) == null ? void 0 : _a.id, !0, {
      fileName: "app/modules/knowledgeBase/components/articles/KbArticlesBySection.tsx",
      lineNumber: 58,
      columnNumber: 15
    }, this);
  }) }, void 0, !1, {
    fileName: "app/modules/knowledgeBase/components/articles/KbArticlesBySection.tsx",
    lineNumber: 55,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/modules/knowledgeBase/components/articles/KbArticlesBySection.tsx",
    lineNumber: 51,
    columnNumber: 5
  }, this);
}

// app/modules/knowledgeBase/components/categories/KbCategory.tsx
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
function KbCategory({ kb, item, allCategories }) {
  let params = (0, import_react13.useParams)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
      BreadcrumbSimple,
      {
        menu: [
          {
            title: kb.title,
            routePath: KnowledgeBaseUtils_default.getKbUrl({ kb, params })
          },
          {
            title: item.title ?? "",
            routePath: item.href
          }
        ]
      },
      void 0,
      !1,
      {
        fileName: "app/modules/knowledgeBase/components/categories/KbCategory.tsx",
        lineNumber: 13,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex flex-col space-y-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex items-center space-x-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex flex-col w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex space-x-3 items-center", children: [
        item.icon && /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex-shrink-0", children: item.icon.startsWith("<svg") ? /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
          "div",
          {
            dangerouslySetInnerHTML: {
              __html: item.icon.replace("<svg", "<svg class='h-7 w-7 text-gray-400 group-hover:text-gray-700'") ?? ""
            }
          },
          void 0,
          !1,
          {
            fileName: "app/modules/knowledgeBase/components/categories/KbCategory.tsx",
            lineNumber: 33,
            columnNumber: 21
          },
          this
        ) : item.icon.includes("http") ? /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("img", { className: "h-7 w-7", src: item.icon, alt: item.title }, void 0, !1, {
          fileName: "app/modules/knowledgeBase/components/categories/KbCategory.tsx",
          lineNumber: 39,
          columnNumber: 21
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_jsx_dev_runtime18.Fragment, {}, void 0, !1, {
          fileName: "app/modules/knowledgeBase/components/categories/KbCategory.tsx",
          lineNumber: 41,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/modules/knowledgeBase/components/categories/KbCategory.tsx",
          lineNumber: 31,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "text-xl md:text-2xl font-bold group-hover:text-gray-700", children: item.title }, void 0, !1, {
          fileName: "app/modules/knowledgeBase/components/categories/KbCategory.tsx",
          lineNumber: 45,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/modules/knowledgeBase/components/categories/KbCategory.tsx",
        lineNumber: 29,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "mt-2 text-gray-700 font-normal", children: item.description }, void 0, !1, {
        fileName: "app/modules/knowledgeBase/components/categories/KbCategory.tsx",
        lineNumber: 47,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/modules/knowledgeBase/components/categories/KbCategory.tsx",
      lineNumber: 28,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/modules/knowledgeBase/components/categories/KbCategory.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/modules/knowledgeBase/components/categories/KbCategory.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "border-b border-gray-200" }, void 0, !1, {
      fileName: "app/modules/knowledgeBase/components/categories/KbCategory.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "grid grid-cols-12 gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "hidden md:block col-span-3 space-y-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "font-bold text text-gray-800", children: "Categories" }, void 0, !1, {
          fileName: "app/modules/knowledgeBase/components/categories/KbCategory.tsx",
          lineNumber: 64,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "space-y-1", children: allCategories.map((category) => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react13.Link, { to: category.href, children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
          "div",
          {
            className: (0, import_clsx7.default)(
              "rounded-md border border-transparent group p-2",
              category.slug === item.slug ? "bg-slate-200 font-bold" : "hover:bg-slate-100"
            ),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "text-sm", children: category.title }, void 0, !1, {
              fileName: "app/modules/knowledgeBase/components/categories/KbCategory.tsx",
              lineNumber: 75,
              columnNumber: 21
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/modules/knowledgeBase/components/categories/KbCategory.tsx",
            lineNumber: 69,
            columnNumber: 19
          },
          this
        ) }, category.title, !1, {
          fileName: "app/modules/knowledgeBase/components/categories/KbCategory.tsx",
          lineNumber: 68,
          columnNumber: 17
        }, this)) }, void 0, !1, {
          fileName: "app/modules/knowledgeBase/components/categories/KbCategory.tsx",
          lineNumber: 65,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/modules/knowledgeBase/components/categories/KbCategory.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "col-span-12 md:col-span-9 pt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(KbArticlesBySection, { kb, item }, void 0, !1, {
        fileName: "app/modules/knowledgeBase/components/categories/KbCategory.tsx",
        lineNumber: 83,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/modules/knowledgeBase/components/categories/KbCategory.tsx",
        lineNumber: 82,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/modules/knowledgeBase/components/categories/KbCategory.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/modules/knowledgeBase/components/categories/KbCategory.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/$slug.($lang).categories.$category.tsx
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime"), loader2 = async ({ request, params }) => {
  let kb = await KnowledgeBaseService_default.get({ slug: params.slug, enabled: !0 }), language = params.lang ?? kb.defaultLanguage, item = await KnowledgeBaseService_default.getCategory({
    kb,
    category: params.category ?? "",
    language,
    params
  });
  if (!item)
    return (0, import_node4.redirect)(KnowledgeBaseUtils_default.getKbUrl({ kb, params }));
  let data = {
    metatags: item == null ? void 0 : item.metatags,
    kb,
    item,
    allCategories: await KnowledgeBaseService_default.getCategories({
      kb,
      params
    }),
    language
  };
  return (0, import_node4.json)(data);
}, meta2 = ({ data }) => data == null ? void 0 : data.metatags;
function Index() {
  let data = (0, import_remix_typedjson2.useTypedLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(KbHeader, { kb: data.kb, withTitleAndDescription: !1 }, void 0, !1, {
      fileName: "app/routes/$slug.($lang).categories.$category.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "max-w-5xl mx-auto py-8 px-8 min-h-screen", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "space-y-5", children: data.item ? /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(KbCategory, { kb: data.kb, item: data.item, allCategories: data.allCategories }, void 0, !1, {
      fileName: "app/routes/$slug.($lang).categories.$category.tsx",
      lineNumber: 54,
      columnNumber: 73
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { children: "Not found" }, void 0, !1, {
      fileName: "app/routes/$slug.($lang).categories.$category.tsx",
      lineNumber: 54,
      columnNumber: 50
    }, this) }, void 0, !1, {
      fileName: "app/routes/$slug.($lang).categories.$category.tsx",
      lineNumber: 54,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/$slug.($lang).categories.$category.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/$slug.($lang).categories.$category.tsx",
    lineNumber: 51,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(ServerError, {}, void 0, !1, {
    fileName: "app/routes/$slug.($lang).categories.$category.tsx",
    lineNumber: 61,
    columnNumber: 10
  }, this);
}

// app/routes/$slug.($lang).articles.$article.tsx
var slug_lang_articles_article_exports = {};
__export(slug_lang_articles_article_exports, {
  ErrorBoundary: () => ErrorBoundary2,
  action: () => action,
  default: () => Index2,
  loader: () => loader3,
  meta: () => meta3
});
var import_node5 = require("@remix-run/node");
var import_remix_typedjson3 = require("remix-typedjson");

// app/modules/knowledgeBase/components/articles/KbArticleContent.tsx
var import_react14 = require("@remix-run/react");

// node_modules/marked/lib/marked.esm.js
function getDefaults() {
  return {
    async: !1,
    baseUrl: null,
    breaks: !1,
    extensions: null,
    gfm: !0,
    headerIds: !0,
    headerPrefix: "",
    highlight: null,
    hooks: null,
    langPrefix: "language-",
    mangle: !0,
    pedantic: !1,
    renderer: null,
    sanitize: !1,
    sanitizer: null,
    silent: !1,
    smartypants: !1,
    tokenizer: null,
    walkTokens: null,
    xhtml: !1
  };
}
var defaults = getDefaults();
function changeDefaults(newDefaults) {
  defaults = newDefaults;
}
var escapeTest = /[&<>"']/, escapeReplace = new RegExp(escapeTest.source, "g"), escapeTestNoEncode = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode = new RegExp(escapeTestNoEncode.source, "g"), escapeReplacements = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, getEscapeReplacement = (ch) => escapeReplacements[ch];
function escape(html, encode) {
  if (encode) {
    if (escapeTest.test(html))
      return html.replace(escapeReplace, getEscapeReplacement);
  } else if (escapeTestNoEncode.test(html))
    return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
  return html;
}
var unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function unescape(html) {
  return html.replace(unescapeTest, (_, n) => (n = n.toLowerCase(), n === "colon" ? ":" : n.charAt(0) === "#" ? n.charAt(1) === "x" ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1)) : ""));
}
var caret = /(^|[^\[])\^/g;
function edit(regex, opt) {
  regex = typeof regex == "string" ? regex : regex.source, opt = opt || "";
  let obj = {
    replace: (name, val) => (val = val.source || val, val = val.replace(caret, "$1"), regex = regex.replace(name, val), obj),
    getRegex: () => new RegExp(regex, opt)
  };
  return obj;
}
var nonWordAndColonTest = /[^\w:]/g, originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
function cleanUrl(sanitize, base, href) {
  if (sanitize) {
    let prot;
    try {
      prot = decodeURIComponent(unescape(href)).replace(nonWordAndColonTest, "").toLowerCase();
    } catch {
      return null;
    }
    if (prot.indexOf("javascript:") === 0 || prot.indexOf("vbscript:") === 0 || prot.indexOf("data:") === 0)
      return null;
  }
  base && !originIndependentUrl.test(href) && (href = resolveUrl(base, href));
  try {
    href = encodeURI(href).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return href;
}
var baseUrls = {}, justDomain = /^[^:]+:\/*[^/]*$/, protocol = /^([^:]+:)[\s\S]*$/, domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;
function resolveUrl(base, href) {
  baseUrls[" " + base] || (justDomain.test(base) ? baseUrls[" " + base] = base + "/" : baseUrls[" " + base] = rtrim(base, "/", !0)), base = baseUrls[" " + base];
  let relativeBase = base.indexOf(":") === -1;
  return href.substring(0, 2) === "//" ? relativeBase ? href : base.replace(protocol, "$1") + href : href.charAt(0) === "/" ? relativeBase ? href : base.replace(domain, "$1") + href : base + href;
}
var noopTest = { exec: function() {
} };
function splitCells(tableRow, count) {
  let row = tableRow.replace(/\|/g, (match, offset, str) => {
    let escaped = !1, curr = offset;
    for (; --curr >= 0 && str[curr] === "\\"; )
      escaped = !escaped;
    return escaped ? "|" : " |";
  }), cells = row.split(/ \|/), i = 0;
  if (cells[0].trim() || cells.shift(), cells.length > 0 && !cells[cells.length - 1].trim() && cells.pop(), cells.length > count)
    cells.splice(count);
  else
    for (; cells.length < count; )
      cells.push("");
  for (; i < cells.length; i++)
    cells[i] = cells[i].trim().replace(/\\\|/g, "|");
  return cells;
}
function rtrim(str, c, invert) {
  let l = str.length;
  if (l === 0)
    return "";
  let suffLen = 0;
  for (; suffLen < l; ) {
    let currChar = str.charAt(l - suffLen - 1);
    if (currChar === c && !invert)
      suffLen++;
    else if (currChar !== c && invert)
      suffLen++;
    else
      break;
  }
  return str.slice(0, l - suffLen);
}
function findClosingBracket(str, b) {
  if (str.indexOf(b[1]) === -1)
    return -1;
  let l = str.length, level = 0, i = 0;
  for (; i < l; i++)
    if (str[i] === "\\")
      i++;
    else if (str[i] === b[0])
      level++;
    else if (str[i] === b[1] && (level--, level < 0))
      return i;
  return -1;
}
function checkSanitizeDeprecation(opt) {
  opt && opt.sanitize && !opt.silent && console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options");
}
function repeatString(pattern, count) {
  if (count < 1)
    return "";
  let result = "";
  for (; count > 1; )
    count & 1 && (result += pattern), count >>= 1, pattern += pattern;
  return result + pattern;
}
function outputLink(cap, link, raw, lexer2) {
  let href = link.href, title = link.title ? escape(link.title) : null, text = cap[1].replace(/\\([\[\]])/g, "$1");
  if (cap[0].charAt(0) !== "!") {
    lexer2.state.inLink = !0;
    let token = {
      type: "link",
      raw,
      href,
      title,
      text,
      tokens: lexer2.inlineTokens(text)
    };
    return lexer2.state.inLink = !1, token;
  }
  return {
    type: "image",
    raw,
    href,
    title,
    text: escape(text)
  };
}
function indentCodeCompensation(raw, text) {
  let matchIndentToCode = raw.match(/^(\s+)(?:```)/);
  if (matchIndentToCode === null)
    return text;
  let indentToCode = matchIndentToCode[1];
  return text.split(`
`).map((node) => {
    let matchIndentInNode = node.match(/^\s+/);
    if (matchIndentInNode === null)
      return node;
    let [indentInNode] = matchIndentInNode;
    return indentInNode.length >= indentToCode.length ? node.slice(indentToCode.length) : node;
  }).join(`
`);
}
var Tokenizer = class {
  constructor(options2) {
    this.options = options2 || defaults;
  }
  space(src) {
    let cap = this.rules.block.newline.exec(src);
    if (cap && cap[0].length > 0)
      return {
        type: "space",
        raw: cap[0]
      };
  }
  code(src) {
    let cap = this.rules.block.code.exec(src);
    if (cap) {
      let text = cap[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: cap[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic ? text : rtrim(text, `
`)
      };
    }
  }
  fences(src) {
    let cap = this.rules.block.fences.exec(src);
    if (cap) {
      let raw = cap[0], text = indentCodeCompensation(raw, cap[3] || "");
      return {
        type: "code",
        raw,
        lang: cap[2] ? cap[2].trim().replace(this.rules.inline._escapes, "$1") : cap[2],
        text
      };
    }
  }
  heading(src) {
    let cap = this.rules.block.heading.exec(src);
    if (cap) {
      let text = cap[2].trim();
      if (/#$/.test(text)) {
        let trimmed = rtrim(text, "#");
        (this.options.pedantic || !trimmed || / $/.test(trimmed)) && (text = trimmed.trim());
      }
      return {
        type: "heading",
        raw: cap[0],
        depth: cap[1].length,
        text,
        tokens: this.lexer.inline(text)
      };
    }
  }
  hr(src) {
    let cap = this.rules.block.hr.exec(src);
    if (cap)
      return {
        type: "hr",
        raw: cap[0]
      };
  }
  blockquote(src) {
    let cap = this.rules.block.blockquote.exec(src);
    if (cap) {
      let text = cap[0].replace(/^ *>[ \t]?/gm, ""), top = this.lexer.state.top;
      this.lexer.state.top = !0;
      let tokens = this.lexer.blockTokens(text);
      return this.lexer.state.top = top, {
        type: "blockquote",
        raw: cap[0],
        tokens,
        text
      };
    }
  }
  list(src) {
    let cap = this.rules.block.list.exec(src);
    if (cap) {
      let raw, istask, ischecked, indent, i, blankLine, endsWithBlankLine, line, nextLine, rawLine, itemContents, endEarly, bull = cap[1].trim(), isordered = bull.length > 1, list = {
        type: "list",
        raw: "",
        ordered: isordered,
        start: isordered ? +bull.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`, this.options.pedantic && (bull = isordered ? bull : "[*+-]");
      let itemRegex = new RegExp(`^( {0,3}${bull})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      for (; src && (endEarly = !1, !(!(cap = itemRegex.exec(src)) || this.rules.block.hr.test(src))); ) {
        if (raw = cap[0], src = src.substring(raw.length), line = cap[2].split(`
`, 1)[0].replace(/^\t+/, (t) => " ".repeat(3 * t.length)), nextLine = src.split(`
`, 1)[0], this.options.pedantic ? (indent = 2, itemContents = line.trimLeft()) : (indent = cap[2].search(/[^ ]/), indent = indent > 4 ? 1 : indent, itemContents = line.slice(indent), indent += cap[1].length), blankLine = !1, !line && /^ *$/.test(nextLine) && (raw += nextLine + `
`, src = src.substring(nextLine.length + 1), endEarly = !0), !endEarly) {
          let nextBulletRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}#`);
          for (; src && (rawLine = src.split(`
`, 1)[0], nextLine = rawLine, this.options.pedantic && (nextLine = nextLine.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), !(fencesBeginRegex.test(nextLine) || headingBeginRegex.test(nextLine) || nextBulletRegex.test(nextLine) || hrRegex.test(src))); ) {
            if (nextLine.search(/[^ ]/) >= indent || !nextLine.trim())
              itemContents += `
` + nextLine.slice(indent);
            else {
              if (blankLine || line.search(/[^ ]/) >= 4 || fencesBeginRegex.test(line) || headingBeginRegex.test(line) || hrRegex.test(line))
                break;
              itemContents += `
` + nextLine;
            }
            !blankLine && !nextLine.trim() && (blankLine = !0), raw += rawLine + `
`, src = src.substring(rawLine.length + 1), line = nextLine.slice(indent);
          }
        }
        list.loose || (endsWithBlankLine ? list.loose = !0 : /\n *\n *$/.test(raw) && (endsWithBlankLine = !0)), this.options.gfm && (istask = /^\[[ xX]\] /.exec(itemContents), istask && (ischecked = istask[0] !== "[ ] ", itemContents = itemContents.replace(/^\[[ xX]\] +/, ""))), list.items.push({
          type: "list_item",
          raw,
          task: !!istask,
          checked: ischecked,
          loose: !1,
          text: itemContents
        }), list.raw += raw;
      }
      list.items[list.items.length - 1].raw = raw.trimRight(), list.items[list.items.length - 1].text = itemContents.trimRight(), list.raw = list.raw.trimRight();
      let l = list.items.length;
      for (i = 0; i < l; i++)
        if (this.lexer.state.top = !1, list.items[i].tokens = this.lexer.blockTokens(list.items[i].text, []), !list.loose) {
          let spacers = list.items[i].tokens.filter((t) => t.type === "space"), hasMultipleLineBreaks = spacers.length > 0 && spacers.some((t) => /\n.*\n/.test(t.raw));
          list.loose = hasMultipleLineBreaks;
        }
      if (list.loose)
        for (i = 0; i < l; i++)
          list.items[i].loose = !0;
      return list;
    }
  }
  html(src) {
    let cap = this.rules.block.html.exec(src);
    if (cap) {
      let token = {
        type: "html",
        raw: cap[0],
        pre: !this.options.sanitizer && (cap[1] === "pre" || cap[1] === "script" || cap[1] === "style"),
        text: cap[0]
      };
      if (this.options.sanitize) {
        let text = this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]);
        token.type = "paragraph", token.text = text, token.tokens = this.lexer.inline(text);
      }
      return token;
    }
  }
  def(src) {
    let cap = this.rules.block.def.exec(src);
    if (cap) {
      let tag = cap[1].toLowerCase().replace(/\s+/g, " "), href = cap[2] ? cap[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline._escapes, "$1") : "", title = cap[3] ? cap[3].substring(1, cap[3].length - 1).replace(this.rules.inline._escapes, "$1") : cap[3];
      return {
        type: "def",
        tag,
        raw: cap[0],
        href,
        title
      };
    }
  }
  table(src) {
    let cap = this.rules.block.table.exec(src);
    if (cap) {
      let item = {
        type: "table",
        header: splitCells(cap[1]).map((c) => ({ text: c })),
        align: cap[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
        rows: cap[3] && cap[3].trim() ? cap[3].replace(/\n[ \t]*$/, "").split(`
`) : []
      };
      if (item.header.length === item.align.length) {
        item.raw = cap[0];
        let l = item.align.length, i, j, k, row;
        for (i = 0; i < l; i++)
          /^ *-+: *$/.test(item.align[i]) ? item.align[i] = "right" : /^ *:-+: *$/.test(item.align[i]) ? item.align[i] = "center" : /^ *:-+ *$/.test(item.align[i]) ? item.align[i] = "left" : item.align[i] = null;
        for (l = item.rows.length, i = 0; i < l; i++)
          item.rows[i] = splitCells(item.rows[i], item.header.length).map((c) => ({ text: c }));
        for (l = item.header.length, j = 0; j < l; j++)
          item.header[j].tokens = this.lexer.inline(item.header[j].text);
        for (l = item.rows.length, j = 0; j < l; j++)
          for (row = item.rows[j], k = 0; k < row.length; k++)
            row[k].tokens = this.lexer.inline(row[k].text);
        return item;
      }
    }
  }
  lheading(src) {
    let cap = this.rules.block.lheading.exec(src);
    if (cap)
      return {
        type: "heading",
        raw: cap[0],
        depth: cap[2].charAt(0) === "=" ? 1 : 2,
        text: cap[1],
        tokens: this.lexer.inline(cap[1])
      };
  }
  paragraph(src) {
    let cap = this.rules.block.paragraph.exec(src);
    if (cap) {
      let text = cap[1].charAt(cap[1].length - 1) === `
` ? cap[1].slice(0, -1) : cap[1];
      return {
        type: "paragraph",
        raw: cap[0],
        text,
        tokens: this.lexer.inline(text)
      };
    }
  }
  text(src) {
    let cap = this.rules.block.text.exec(src);
    if (cap)
      return {
        type: "text",
        raw: cap[0],
        text: cap[0],
        tokens: this.lexer.inline(cap[0])
      };
  }
  escape(src) {
    let cap = this.rules.inline.escape.exec(src);
    if (cap)
      return {
        type: "escape",
        raw: cap[0],
        text: escape(cap[1])
      };
  }
  tag(src) {
    let cap = this.rules.inline.tag.exec(src);
    if (cap)
      return !this.lexer.state.inLink && /^<a /i.test(cap[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\/a>/i.test(cap[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0]) && (this.lexer.state.inRawBlock = !1), {
        type: this.options.sanitize ? "text" : "html",
        raw: cap[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0]
      };
  }
  link(src) {
    let cap = this.rules.inline.link.exec(src);
    if (cap) {
      let trimmedUrl = cap[2].trim();
      if (!this.options.pedantic && /^</.test(trimmedUrl)) {
        if (!/>$/.test(trimmedUrl))
          return;
        let rtrimSlash = rtrim(trimmedUrl.slice(0, -1), "\\");
        if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0)
          return;
      } else {
        let lastParenIndex = findClosingBracket(cap[2], "()");
        if (lastParenIndex > -1) {
          let linkLen = (cap[0].indexOf("!") === 0 ? 5 : 4) + cap[1].length + lastParenIndex;
          cap[2] = cap[2].substring(0, lastParenIndex), cap[0] = cap[0].substring(0, linkLen).trim(), cap[3] = "";
        }
      }
      let href = cap[2], title = "";
      if (this.options.pedantic) {
        let link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);
        link && (href = link[1], title = link[3]);
      } else
        title = cap[3] ? cap[3].slice(1, -1) : "";
      return href = href.trim(), /^</.test(href) && (this.options.pedantic && !/>$/.test(trimmedUrl) ? href = href.slice(1) : href = href.slice(1, -1)), outputLink(cap, {
        href: href && href.replace(this.rules.inline._escapes, "$1"),
        title: title && title.replace(this.rules.inline._escapes, "$1")
      }, cap[0], this.lexer);
    }
  }
  reflink(src, links2) {
    let cap;
    if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
      let link = (cap[2] || cap[1]).replace(/\s+/g, " ");
      if (link = links2[link.toLowerCase()], !link) {
        let text = cap[0].charAt(0);
        return {
          type: "text",
          raw: text,
          text
        };
      }
      return outputLink(cap, link, cap[0], this.lexer);
    }
  }
  emStrong(src, maskedSrc, prevChar = "") {
    let match = this.rules.inline.emStrong.lDelim.exec(src);
    if (!match || match[3] && prevChar.match(/[\p{L}\p{N}]/u))
      return;
    let nextChar = match[1] || match[2] || "";
    if (!nextChar || nextChar && (prevChar === "" || this.rules.inline.punctuation.exec(prevChar))) {
      let lLength = match[0].length - 1, rDelim, rLength, delimTotal = lLength, midDelimTotal = 0, endReg = match[0][0] === "*" ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
      for (endReg.lastIndex = 0, maskedSrc = maskedSrc.slice(-1 * src.length + lLength); (match = endReg.exec(maskedSrc)) != null; ) {
        if (rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6], !rDelim)
          continue;
        if (rLength = rDelim.length, match[3] || match[4]) {
          delimTotal += rLength;
          continue;
        } else if ((match[5] || match[6]) && lLength % 3 && !((lLength + rLength) % 3)) {
          midDelimTotal += rLength;
          continue;
        }
        if (delimTotal -= rLength, delimTotal > 0)
          continue;
        rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);
        let raw = src.slice(0, lLength + match.index + (match[0].length - rDelim.length) + rLength);
        if (Math.min(lLength, rLength) % 2) {
          let text2 = raw.slice(1, -1);
          return {
            type: "em",
            raw,
            text: text2,
            tokens: this.lexer.inlineTokens(text2)
          };
        }
        let text = raw.slice(2, -2);
        return {
          type: "strong",
          raw,
          text,
          tokens: this.lexer.inlineTokens(text)
        };
      }
    }
  }
  codespan(src) {
    let cap = this.rules.inline.code.exec(src);
    if (cap) {
      let text = cap[2].replace(/\n/g, " "), hasNonSpaceChars = /[^ ]/.test(text), hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
      return hasNonSpaceChars && hasSpaceCharsOnBothEnds && (text = text.substring(1, text.length - 1)), text = escape(text, !0), {
        type: "codespan",
        raw: cap[0],
        text
      };
    }
  }
  br(src) {
    let cap = this.rules.inline.br.exec(src);
    if (cap)
      return {
        type: "br",
        raw: cap[0]
      };
  }
  del(src) {
    let cap = this.rules.inline.del.exec(src);
    if (cap)
      return {
        type: "del",
        raw: cap[0],
        text: cap[2],
        tokens: this.lexer.inlineTokens(cap[2])
      };
  }
  autolink(src, mangle2) {
    let cap = this.rules.inline.autolink.exec(src);
    if (cap) {
      let text, href;
      return cap[2] === "@" ? (text = escape(this.options.mangle ? mangle2(cap[1]) : cap[1]), href = "mailto:" + text) : (text = escape(cap[1]), href = text), {
        type: "link",
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: "text",
            raw: text,
            text
          }
        ]
      };
    }
  }
  url(src, mangle2) {
    let cap;
    if (cap = this.rules.inline.url.exec(src)) {
      let text, href;
      if (cap[2] === "@")
        text = escape(this.options.mangle ? mangle2(cap[0]) : cap[0]), href = "mailto:" + text;
      else {
        let prevCapZero;
        do
          prevCapZero = cap[0], cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
        while (prevCapZero !== cap[0]);
        text = escape(cap[0]), cap[1] === "www." ? href = "http://" + cap[0] : href = cap[0];
      }
      return {
        type: "link",
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: "text",
            raw: text,
            text
          }
        ]
      };
    }
  }
  inlineText(src, smartypants2) {
    let cap = this.rules.inline.text.exec(src);
    if (cap) {
      let text;
      return this.lexer.state.inRawBlock ? text = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0] : text = escape(this.options.smartypants ? smartypants2(cap[0]) : cap[0]), {
        type: "text",
        raw: cap[0],
        text
      };
    }
  }
}, block = {
  newline: /^(?: *(?:\n|$))+/,
  code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
  fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
  heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
  html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
  def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
  table: noopTest,
  lheading: /^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  text: /^[^\n]+/
};
block._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
block.def = edit(block.def).replace("label", block._label).replace("title", block._title).getRegex();
block.bullet = /(?:[*+-]|\d{1,9}[.)])/;
block.listItemStart = edit(/^( *)(bull) */).replace("bull", block.bullet).getRegex();
block.list = edit(block.list).replace(/bull/g, block.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + block.def.source + ")").getRegex();
block._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
block._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
block.html = edit(block.html, "i").replace("comment", block._comment).replace("tag", block._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
block.paragraph = edit(block._paragraph).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
block.blockquote = edit(block.blockquote).replace("paragraph", block.paragraph).getRegex();
block.normal = { ...block };
block.gfm = {
  ...block.normal,
  table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
};
block.gfm.table = edit(block.gfm.table).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
block.gfm.paragraph = edit(block._paragraph).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", block.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
block.pedantic = {
  ...block.normal,
  html: edit(
    `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`
  ).replace("comment", block._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: noopTest,
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: edit(block.normal._paragraph).replace("hr", block.hr).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", block.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
};
var inline = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: noopTest,
  tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(ref)\]/,
  nolink: /^!?\[(ref)\](?:\[\])?/,
  reflinkSearch: "reflink|nolink(?!\\()",
  emStrong: {
    lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
    rDelimAst: /^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,
    rDelimUnd: /^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/
  },
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: noopTest,
  text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  punctuation: /^([\spunctuation])/
};
inline._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";
inline.punctuation = edit(inline.punctuation).replace(/punctuation/g, inline._punctuation).getRegex();
inline.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
inline.escapedEmSt = /(?:^|[^\\])(?:\\\\)*\\[*_]/g;
inline._comment = edit(block._comment).replace("(?:-->|$)", "-->").getRegex();
inline.emStrong.lDelim = edit(inline.emStrong.lDelim).replace(/punct/g, inline._punctuation).getRegex();
inline.emStrong.rDelimAst = edit(inline.emStrong.rDelimAst, "g").replace(/punct/g, inline._punctuation).getRegex();
inline.emStrong.rDelimUnd = edit(inline.emStrong.rDelimUnd, "g").replace(/punct/g, inline._punctuation).getRegex();
inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
inline.autolink = edit(inline.autolink).replace("scheme", inline._scheme).replace("email", inline._email).getRegex();
inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
inline.tag = edit(inline.tag).replace("comment", inline._comment).replace("attribute", inline._attribute).getRegex();
inline._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
inline._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
inline.link = edit(inline.link).replace("label", inline._label).replace("href", inline._href).replace("title", inline._title).getRegex();
inline.reflink = edit(inline.reflink).replace("label", inline._label).replace("ref", block._label).getRegex();
inline.nolink = edit(inline.nolink).replace("ref", block._label).getRegex();
inline.reflinkSearch = edit(inline.reflinkSearch, "g").replace("reflink", inline.reflink).replace("nolink", inline.nolink).getRegex();
inline.normal = { ...inline };
inline.pedantic = {
  ...inline.normal,
  strong: {
    start: /^__|\*\*/,
    middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    endAst: /\*\*(?!\*)/g,
    endUnd: /__(?!_)/g
  },
  em: {
    start: /^_|\*/,
    middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
    endAst: /\*(?!\*)/g,
    endUnd: /_(?!_)/g
  },
  link: edit(/^!?\[(label)\]\((.*?)\)/).replace("label", inline._label).getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", inline._label).getRegex()
};
inline.gfm = {
  ...inline.normal,
  escape: edit(inline.escape).replace("])", "~|])").getRegex(),
  _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
};
inline.gfm.url = edit(inline.gfm.url, "i").replace("email", inline.gfm._extended_email).getRegex();
inline.breaks = {
  ...inline.gfm,
  br: edit(inline.br).replace("{2,}", "*").getRegex(),
  text: edit(inline.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
};
function smartypants(text) {
  return text.replace(/---/g, "\u2014").replace(/--/g, "\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018").replace(/'/g, "\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C").replace(/"/g, "\u201D").replace(/\.{3}/g, "\u2026");
}
function mangle(text) {
  let out = "", i, ch, l = text.length;
  for (i = 0; i < l; i++)
    ch = text.charCodeAt(i), Math.random() > 0.5 && (ch = "x" + ch.toString(16)), out += "&#" + ch + ";";
  return out;
}
var Lexer = class {
  constructor(options2) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = options2 || defaults, this.options.tokenizer = this.options.tokenizer || new Tokenizer(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    let rules = {
      block: block.normal,
      inline: inline.normal
    };
    this.options.pedantic ? (rules.block = block.pedantic, rules.inline = inline.pedantic) : this.options.gfm && (rules.block = block.gfm, this.options.breaks ? rules.inline = inline.breaks : rules.inline = inline.gfm), this.tokenizer.rules = rules;
  }
  static get rules() {
    return {
      block,
      inline
    };
  }
  static lex(src, options2) {
    return new Lexer(options2).lex(src);
  }
  static lexInline(src, options2) {
    return new Lexer(options2).inlineTokens(src);
  }
  lex(src) {
    src = src.replace(/\r\n|\r/g, `
`), this.blockTokens(src, this.tokens);
    let next;
    for (; next = this.inlineQueue.shift(); )
      this.inlineTokens(next.src, next.tokens);
    return this.tokens;
  }
  blockTokens(src, tokens = []) {
    this.options.pedantic ? src = src.replace(/\t/g, "    ").replace(/^ +$/gm, "") : src = src.replace(/^( *)(\t+)/gm, (_, leading, tabs) => leading + "    ".repeat(tabs.length));
    let token, lastToken, cutSrc, lastParagraphClipped;
    for (; src; )
      if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((extTokenizer) => (token = extTokenizer.call({ lexer: this }, src, tokens)) ? (src = src.substring(token.raw.length), tokens.push(token), !0) : !1))) {
        if (token = this.tokenizer.space(src)) {
          src = src.substring(token.raw.length), token.raw.length === 1 && tokens.length > 0 ? tokens[tokens.length - 1].raw += `
` : tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.code(src)) {
          src = src.substring(token.raw.length), lastToken = tokens[tokens.length - 1], lastToken && (lastToken.type === "paragraph" || lastToken.type === "text") ? (lastToken.raw += `
` + token.raw, lastToken.text += `
` + token.text, this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text) : tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.fences(src)) {
          src = src.substring(token.raw.length), tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.heading(src)) {
          src = src.substring(token.raw.length), tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.hr(src)) {
          src = src.substring(token.raw.length), tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.blockquote(src)) {
          src = src.substring(token.raw.length), tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.list(src)) {
          src = src.substring(token.raw.length), tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.html(src)) {
          src = src.substring(token.raw.length), tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.def(src)) {
          src = src.substring(token.raw.length), lastToken = tokens[tokens.length - 1], lastToken && (lastToken.type === "paragraph" || lastToken.type === "text") ? (lastToken.raw += `
` + token.raw, lastToken.text += `
` + token.raw, this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text) : this.tokens.links[token.tag] || (this.tokens.links[token.tag] = {
            href: token.href,
            title: token.title
          });
          continue;
        }
        if (token = this.tokenizer.table(src)) {
          src = src.substring(token.raw.length), tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.lheading(src)) {
          src = src.substring(token.raw.length), tokens.push(token);
          continue;
        }
        if (cutSrc = src, this.options.extensions && this.options.extensions.startBlock) {
          let startIndex = 1 / 0, tempSrc = src.slice(1), tempStart;
          this.options.extensions.startBlock.forEach(function(getStartIndex) {
            tempStart = getStartIndex.call({ lexer: this }, tempSrc), typeof tempStart == "number" && tempStart >= 0 && (startIndex = Math.min(startIndex, tempStart));
          }), startIndex < 1 / 0 && startIndex >= 0 && (cutSrc = src.substring(0, startIndex + 1));
        }
        if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
          lastToken = tokens[tokens.length - 1], lastParagraphClipped && lastToken.type === "paragraph" ? (lastToken.raw += `
` + token.raw, lastToken.text += `
` + token.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text) : tokens.push(token), lastParagraphClipped = cutSrc.length !== src.length, src = src.substring(token.raw.length);
          continue;
        }
        if (token = this.tokenizer.text(src)) {
          src = src.substring(token.raw.length), lastToken = tokens[tokens.length - 1], lastToken && lastToken.type === "text" ? (lastToken.raw += `
` + token.raw, lastToken.text += `
` + token.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text) : tokens.push(token);
          continue;
        }
        if (src) {
          let errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
          if (this.options.silent) {
            console.error(errMsg);
            break;
          } else
            throw new Error(errMsg);
        }
      }
    return this.state.top = !0, tokens;
  }
  inline(src, tokens = []) {
    return this.inlineQueue.push({ src, tokens }), tokens;
  }
  inlineTokens(src, tokens = []) {
    let token, lastToken, cutSrc, maskedSrc = src, match, keepPrevChar, prevChar;
    if (this.tokens.links) {
      let links2 = Object.keys(this.tokens.links);
      if (links2.length > 0)
        for (; (match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null; )
          links2.includes(match[0].slice(match[0].lastIndexOf("[") + 1, -1)) && (maskedSrc = maskedSrc.slice(0, match.index) + "[" + repeatString("a", match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null; )
      maskedSrc = maskedSrc.slice(0, match.index) + "[" + repeatString("a", match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (match = this.tokenizer.rules.inline.escapedEmSt.exec(maskedSrc)) != null; )
      maskedSrc = maskedSrc.slice(0, match.index + match[0].length - 2) + "++" + maskedSrc.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex), this.tokenizer.rules.inline.escapedEmSt.lastIndex--;
    for (; src; )
      if (keepPrevChar || (prevChar = ""), keepPrevChar = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((extTokenizer) => (token = extTokenizer.call({ lexer: this }, src, tokens)) ? (src = src.substring(token.raw.length), tokens.push(token), !0) : !1))) {
        if (token = this.tokenizer.escape(src)) {
          src = src.substring(token.raw.length), tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.tag(src)) {
          src = src.substring(token.raw.length), lastToken = tokens[tokens.length - 1], lastToken && token.type === "text" && lastToken.type === "text" ? (lastToken.raw += token.raw, lastToken.text += token.text) : tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.link(src)) {
          src = src.substring(token.raw.length), tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.reflink(src, this.tokens.links)) {
          src = src.substring(token.raw.length), lastToken = tokens[tokens.length - 1], lastToken && token.type === "text" && lastToken.type === "text" ? (lastToken.raw += token.raw, lastToken.text += token.text) : tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
          src = src.substring(token.raw.length), tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.codespan(src)) {
          src = src.substring(token.raw.length), tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.br(src)) {
          src = src.substring(token.raw.length), tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.del(src)) {
          src = src.substring(token.raw.length), tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.autolink(src, mangle)) {
          src = src.substring(token.raw.length), tokens.push(token);
          continue;
        }
        if (!this.state.inLink && (token = this.tokenizer.url(src, mangle))) {
          src = src.substring(token.raw.length), tokens.push(token);
          continue;
        }
        if (cutSrc = src, this.options.extensions && this.options.extensions.startInline) {
          let startIndex = 1 / 0, tempSrc = src.slice(1), tempStart;
          this.options.extensions.startInline.forEach(function(getStartIndex) {
            tempStart = getStartIndex.call({ lexer: this }, tempSrc), typeof tempStart == "number" && tempStart >= 0 && (startIndex = Math.min(startIndex, tempStart));
          }), startIndex < 1 / 0 && startIndex >= 0 && (cutSrc = src.substring(0, startIndex + 1));
        }
        if (token = this.tokenizer.inlineText(cutSrc, smartypants)) {
          src = src.substring(token.raw.length), token.raw.slice(-1) !== "_" && (prevChar = token.raw.slice(-1)), keepPrevChar = !0, lastToken = tokens[tokens.length - 1], lastToken && lastToken.type === "text" ? (lastToken.raw += token.raw, lastToken.text += token.text) : tokens.push(token);
          continue;
        }
        if (src) {
          let errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
          if (this.options.silent) {
            console.error(errMsg);
            break;
          } else
            throw new Error(errMsg);
        }
      }
    return tokens;
  }
}, Renderer = class {
  constructor(options2) {
    this.options = options2 || defaults;
  }
  code(code, infostring, escaped) {
    let lang = (infostring || "").match(/\S*/)[0];
    if (this.options.highlight) {
      let out = this.options.highlight(code, lang);
      out != null && out !== code && (escaped = !0, code = out);
    }
    return code = code.replace(/\n$/, "") + `
`, lang ? '<pre><code class="' + this.options.langPrefix + escape(lang) + '">' + (escaped ? code : escape(code, !0)) + `</code></pre>
` : "<pre><code>" + (escaped ? code : escape(code, !0)) + `</code></pre>
`;
  }
  blockquote(quote) {
    return `<blockquote>
${quote}</blockquote>
`;
  }
  html(html) {
    return html;
  }
  heading(text, level, raw, slugger) {
    if (this.options.headerIds) {
      let id = this.options.headerPrefix + slugger.slug(raw);
      return `<h${level} id="${id}">${text}</h${level}>
`;
    }
    return `<h${level}>${text}</h${level}>
`;
  }
  hr() {
    return this.options.xhtml ? `<hr/>
` : `<hr>
`;
  }
  list(body, ordered, start) {
    let type = ordered ? "ol" : "ul", startatt = ordered && start !== 1 ? ' start="' + start + '"' : "";
    return "<" + type + startatt + `>
` + body + "</" + type + `>
`;
  }
  listitem(text) {
    return `<li>${text}</li>
`;
  }
  checkbox(checked) {
    return "<input " + (checked ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";
  }
  paragraph(text) {
    return `<p>${text}</p>
`;
  }
  table(header, body) {
    return body && (body = `<tbody>${body}</tbody>`), `<table>
<thead>
` + header + `</thead>
` + body + `</table>
`;
  }
  tablerow(content) {
    return `<tr>
${content}</tr>
`;
  }
  tablecell(content, flags) {
    let type = flags.header ? "th" : "td";
    return (flags.align ? `<${type} align="${flags.align}">` : `<${type}>`) + content + `</${type}>
`;
  }
  strong(text) {
    return `<strong>${text}</strong>`;
  }
  em(text) {
    return `<em>${text}</em>`;
  }
  codespan(text) {
    return `<code>${text}</code>`;
  }
  br() {
    return this.options.xhtml ? "<br/>" : "<br>";
  }
  del(text) {
    return `<del>${text}</del>`;
  }
  link(href, title, text) {
    if (href = cleanUrl(this.options.sanitize, this.options.baseUrl, href), href === null)
      return text;
    let out = '<a href="' + href + '"';
    return title && (out += ' title="' + title + '"'), out += ">" + text + "</a>", out;
  }
  image(href, title, text) {
    if (href = cleanUrl(this.options.sanitize, this.options.baseUrl, href), href === null)
      return text;
    let out = `<img src="${href}" alt="${text}"`;
    return title && (out += ` title="${title}"`), out += this.options.xhtml ? "/>" : ">", out;
  }
  text(text) {
    return text;
  }
}, TextRenderer = class {
  strong(text) {
    return text;
  }
  em(text) {
    return text;
  }
  codespan(text) {
    return text;
  }
  del(text) {
    return text;
  }
  html(text) {
    return text;
  }
  text(text) {
    return text;
  }
  link(href, title, text) {
    return "" + text;
  }
  image(href, title, text) {
    return "" + text;
  }
  br() {
    return "";
  }
}, Slugger = class {
  constructor() {
    this.seen = {};
  }
  serialize(value) {
    return value.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
  }
  getNextSafeSlug(originalSlug, isDryRun) {
    let slug = originalSlug, occurenceAccumulator = 0;
    if (this.seen.hasOwnProperty(slug)) {
      occurenceAccumulator = this.seen[originalSlug];
      do
        occurenceAccumulator++, slug = originalSlug + "-" + occurenceAccumulator;
      while (this.seen.hasOwnProperty(slug));
    }
    return isDryRun || (this.seen[originalSlug] = occurenceAccumulator, this.seen[slug] = 0), slug;
  }
  slug(value, options2 = {}) {
    let slug = this.serialize(value);
    return this.getNextSafeSlug(slug, options2.dryrun);
  }
}, Parser = class {
  constructor(options2) {
    this.options = options2 || defaults, this.options.renderer = this.options.renderer || new Renderer(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new TextRenderer(), this.slugger = new Slugger();
  }
  static parse(tokens, options2) {
    return new Parser(options2).parse(tokens);
  }
  static parseInline(tokens, options2) {
    return new Parser(options2).parseInline(tokens);
  }
  parse(tokens, top = !0) {
    let out = "", i, j, k, l2, l3, row, cell, header, body, token, ordered, start, loose, itemBody, item, checked, task, checkbox, ret, l = tokens.length;
    for (i = 0; i < l; i++) {
      if (token = tokens[i], this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type] && (ret = this.options.extensions.renderers[token.type].call({ parser: this }, token), ret !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(token.type))) {
        out += ret || "";
        continue;
      }
      switch (token.type) {
        case "space":
          continue;
        case "hr": {
          out += this.renderer.hr();
          continue;
        }
        case "heading": {
          out += this.renderer.heading(
            this.parseInline(token.tokens),
            token.depth,
            unescape(this.parseInline(token.tokens, this.textRenderer)),
            this.slugger
          );
          continue;
        }
        case "code": {
          out += this.renderer.code(
            token.text,
            token.lang,
            token.escaped
          );
          continue;
        }
        case "table": {
          for (header = "", cell = "", l2 = token.header.length, j = 0; j < l2; j++)
            cell += this.renderer.tablecell(
              this.parseInline(token.header[j].tokens),
              { header: !0, align: token.align[j] }
            );
          for (header += this.renderer.tablerow(cell), body = "", l2 = token.rows.length, j = 0; j < l2; j++) {
            for (row = token.rows[j], cell = "", l3 = row.length, k = 0; k < l3; k++)
              cell += this.renderer.tablecell(
                this.parseInline(row[k].tokens),
                { header: !1, align: token.align[k] }
              );
            body += this.renderer.tablerow(cell);
          }
          out += this.renderer.table(header, body);
          continue;
        }
        case "blockquote": {
          body = this.parse(token.tokens), out += this.renderer.blockquote(body);
          continue;
        }
        case "list": {
          for (ordered = token.ordered, start = token.start, loose = token.loose, l2 = token.items.length, body = "", j = 0; j < l2; j++)
            item = token.items[j], checked = item.checked, task = item.task, itemBody = "", item.task && (checkbox = this.renderer.checkbox(checked), loose ? item.tokens.length > 0 && item.tokens[0].type === "paragraph" ? (item.tokens[0].text = checkbox + " " + item.tokens[0].text, item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === "text" && (item.tokens[0].tokens[0].text = checkbox + " " + item.tokens[0].tokens[0].text)) : item.tokens.unshift({
              type: "text",
              text: checkbox
            }) : itemBody += checkbox), itemBody += this.parse(item.tokens, loose), body += this.renderer.listitem(itemBody, task, checked);
          out += this.renderer.list(body, ordered, start);
          continue;
        }
        case "html": {
          out += this.renderer.html(token.text);
          continue;
        }
        case "paragraph": {
          out += this.renderer.paragraph(this.parseInline(token.tokens));
          continue;
        }
        case "text": {
          for (body = token.tokens ? this.parseInline(token.tokens) : token.text; i + 1 < l && tokens[i + 1].type === "text"; )
            token = tokens[++i], body += `
` + (token.tokens ? this.parseInline(token.tokens) : token.text);
          out += top ? this.renderer.paragraph(body) : body;
          continue;
        }
        default: {
          let errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return;
          } else
            throw new Error(errMsg);
        }
      }
    }
    return out;
  }
  parseInline(tokens, renderer) {
    renderer = renderer || this.renderer;
    let out = "", i, token, ret, l = tokens.length;
    for (i = 0; i < l; i++) {
      if (token = tokens[i], this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type] && (ret = this.options.extensions.renderers[token.type].call({ parser: this }, token), ret !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(token.type))) {
        out += ret || "";
        continue;
      }
      switch (token.type) {
        case "escape": {
          out += renderer.text(token.text);
          break;
        }
        case "html": {
          out += renderer.html(token.text);
          break;
        }
        case "link": {
          out += renderer.link(token.href, token.title, this.parseInline(token.tokens, renderer));
          break;
        }
        case "image": {
          out += renderer.image(token.href, token.title, token.text);
          break;
        }
        case "strong": {
          out += renderer.strong(this.parseInline(token.tokens, renderer));
          break;
        }
        case "em": {
          out += renderer.em(this.parseInline(token.tokens, renderer));
          break;
        }
        case "codespan": {
          out += renderer.codespan(token.text);
          break;
        }
        case "br": {
          out += renderer.br();
          break;
        }
        case "del": {
          out += renderer.del(this.parseInline(token.tokens, renderer));
          break;
        }
        case "text": {
          out += renderer.text(token.text);
          break;
        }
        default: {
          let errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return;
          } else
            throw new Error(errMsg);
        }
      }
    }
    return out;
  }
}, Hooks = class {
  constructor(options2) {
    this.options = options2 || defaults;
  }
  preprocess(markdown) {
    return markdown;
  }
  postprocess(html) {
    return html;
  }
};
__publicField(Hooks, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess"
]));
function onError(silent, async, callback) {
  return (e) => {
    if (e.message += `
Please report this to https://github.com/markedjs/marked.`, silent) {
      let msg = "<p>An error occurred:</p><pre>" + escape(e.message + "", !0) + "</pre>";
      if (async)
        return Promise.resolve(msg);
      if (callback) {
        callback(null, msg);
        return;
      }
      return msg;
    }
    if (async)
      return Promise.reject(e);
    if (callback) {
      callback(e);
      return;
    }
    throw e;
  };
}
function parseMarkdown(lexer2, parser2) {
  return (src, opt, callback) => {
    typeof opt == "function" && (callback = opt, opt = null);
    let origOpt = { ...opt };
    opt = { ...marked.defaults, ...origOpt };
    let throwError = onError(opt.silent, opt.async, callback);
    if (typeof src > "u" || src === null)
      return throwError(new Error("marked(): input parameter is undefined or null"));
    if (typeof src != "string")
      return throwError(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(src) + ", string expected"));
    if (checkSanitizeDeprecation(opt), opt.hooks && (opt.hooks.options = opt), callback) {
      let highlight = opt.highlight, tokens;
      try {
        opt.hooks && (src = opt.hooks.preprocess(src)), tokens = lexer2(src, opt);
      } catch (e) {
        return throwError(e);
      }
      let done = function(err) {
        let out;
        if (!err)
          try {
            opt.walkTokens && marked.walkTokens(tokens, opt.walkTokens), out = parser2(tokens, opt), opt.hooks && (out = opt.hooks.postprocess(out));
          } catch (e) {
            err = e;
          }
        return opt.highlight = highlight, err ? throwError(err) : callback(null, out);
      };
      if (!highlight || highlight.length < 3 || (delete opt.highlight, !tokens.length))
        return done();
      let pending = 0;
      marked.walkTokens(tokens, function(token) {
        token.type === "code" && (pending++, setTimeout(() => {
          highlight(token.text, token.lang, function(err, code) {
            if (err)
              return done(err);
            code != null && code !== token.text && (token.text = code, token.escaped = !0), pending--, pending === 0 && done();
          });
        }, 0));
      }), pending === 0 && done();
      return;
    }
    if (opt.async)
      return Promise.resolve(opt.hooks ? opt.hooks.preprocess(src) : src).then((src2) => lexer2(src2, opt)).then((tokens) => opt.walkTokens ? Promise.all(marked.walkTokens(tokens, opt.walkTokens)).then(() => tokens) : tokens).then((tokens) => parser2(tokens, opt)).then((html) => opt.hooks ? opt.hooks.postprocess(html) : html).catch(throwError);
    try {
      opt.hooks && (src = opt.hooks.preprocess(src));
      let tokens = lexer2(src, opt);
      opt.walkTokens && marked.walkTokens(tokens, opt.walkTokens);
      let html = parser2(tokens, opt);
      return opt.hooks && (html = opt.hooks.postprocess(html)), html;
    } catch (e) {
      return throwError(e);
    }
  };
}
function marked(src, opt, callback) {
  return parseMarkdown(Lexer.lex, Parser.parse)(src, opt, callback);
}
marked.options = marked.setOptions = function(opt) {
  return marked.defaults = { ...marked.defaults, ...opt }, changeDefaults(marked.defaults), marked;
};
marked.getDefaults = getDefaults;
marked.defaults = defaults;
marked.use = function(...args) {
  let extensions = marked.defaults.extensions || { renderers: {}, childTokens: {} };
  args.forEach((pack) => {
    let opts = { ...pack };
    if (opts.async = marked.defaults.async || opts.async || !1, pack.extensions && (pack.extensions.forEach((ext) => {
      if (!ext.name)
        throw new Error("extension name required");
      if (ext.renderer) {
        let prevRenderer = extensions.renderers[ext.name];
        prevRenderer ? extensions.renderers[ext.name] = function(...args2) {
          let ret = ext.renderer.apply(this, args2);
          return ret === !1 && (ret = prevRenderer.apply(this, args2)), ret;
        } : extensions.renderers[ext.name] = ext.renderer;
      }
      if (ext.tokenizer) {
        if (!ext.level || ext.level !== "block" && ext.level !== "inline")
          throw new Error("extension level must be 'block' or 'inline'");
        extensions[ext.level] ? extensions[ext.level].unshift(ext.tokenizer) : extensions[ext.level] = [ext.tokenizer], ext.start && (ext.level === "block" ? extensions.startBlock ? extensions.startBlock.push(ext.start) : extensions.startBlock = [ext.start] : ext.level === "inline" && (extensions.startInline ? extensions.startInline.push(ext.start) : extensions.startInline = [ext.start]));
      }
      ext.childTokens && (extensions.childTokens[ext.name] = ext.childTokens);
    }), opts.extensions = extensions), pack.renderer) {
      let renderer = marked.defaults.renderer || new Renderer();
      for (let prop in pack.renderer) {
        let prevRenderer = renderer[prop];
        renderer[prop] = (...args2) => {
          let ret = pack.renderer[prop].apply(renderer, args2);
          return ret === !1 && (ret = prevRenderer.apply(renderer, args2)), ret;
        };
      }
      opts.renderer = renderer;
    }
    if (pack.tokenizer) {
      let tokenizer = marked.defaults.tokenizer || new Tokenizer();
      for (let prop in pack.tokenizer) {
        let prevTokenizer = tokenizer[prop];
        tokenizer[prop] = (...args2) => {
          let ret = pack.tokenizer[prop].apply(tokenizer, args2);
          return ret === !1 && (ret = prevTokenizer.apply(tokenizer, args2)), ret;
        };
      }
      opts.tokenizer = tokenizer;
    }
    if (pack.hooks) {
      let hooks = marked.defaults.hooks || new Hooks();
      for (let prop in pack.hooks) {
        let prevHook = hooks[prop];
        Hooks.passThroughHooks.has(prop) ? hooks[prop] = (arg) => {
          if (marked.defaults.async)
            return Promise.resolve(pack.hooks[prop].call(hooks, arg)).then((ret2) => prevHook.call(hooks, ret2));
          let ret = pack.hooks[prop].call(hooks, arg);
          return prevHook.call(hooks, ret);
        } : hooks[prop] = (...args2) => {
          let ret = pack.hooks[prop].apply(hooks, args2);
          return ret === !1 && (ret = prevHook.apply(hooks, args2)), ret;
        };
      }
      opts.hooks = hooks;
    }
    if (pack.walkTokens) {
      let walkTokens2 = marked.defaults.walkTokens;
      opts.walkTokens = function(token) {
        let values = [];
        return values.push(pack.walkTokens.call(this, token)), walkTokens2 && (values = values.concat(walkTokens2.call(this, token))), values;
      };
    }
    marked.setOptions(opts);
  });
};
marked.walkTokens = function(tokens, callback) {
  let values = [];
  for (let token of tokens)
    switch (values = values.concat(callback.call(marked, token)), token.type) {
      case "table": {
        for (let cell of token.header)
          values = values.concat(marked.walkTokens(cell.tokens, callback));
        for (let row of token.rows)
          for (let cell of row)
            values = values.concat(marked.walkTokens(cell.tokens, callback));
        break;
      }
      case "list": {
        values = values.concat(marked.walkTokens(token.items, callback));
        break;
      }
      default:
        marked.defaults.extensions && marked.defaults.extensions.childTokens && marked.defaults.extensions.childTokens[token.type] ? marked.defaults.extensions.childTokens[token.type].forEach(function(childTokens) {
          values = values.concat(marked.walkTokens(token[childTokens], callback));
        }) : token.tokens && (values = values.concat(marked.walkTokens(token.tokens, callback)));
    }
  return values;
};
marked.parseInline = parseMarkdown(Lexer.lexInline, Parser.parseInline);
marked.Parser = Parser;
marked.parser = Parser.parse;
marked.Renderer = Renderer;
marked.TextRenderer = TextRenderer;
marked.Lexer = Lexer;
marked.lexer = Lexer.lex;
marked.Tokenizer = Tokenizer;
marked.Slugger = Slugger;
marked.Hooks = Hooks;
marked.parse = marked;
var options = marked.options, setOptions = marked.setOptions, use = marked.use, walkTokens = marked.walkTokens, parseInline = marked.parseInline;
var parser = Parser.parse, lexer = Lexer.lex;

// app/components/ui/icons/ThumbsDownIcon.tsx
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime");
function ThumbsDownIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("svg", { className, fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", width: "50", height: "50", viewBox: "0 0 50 50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("path", { d: "M 17 5 C 12.054688 5 8 9.054688 8 14 L 8 23.40625 C 8 25.300781 8.570313 27.121094 9.6875 28.6875 L 20.84375 44 C 20.867188 44.039063 20.910156 44.054688 20.9375 44.09375 C 21.691406 45.273438 22.824219 46 24 46 C 24.851563 46 25.789063 45.660156 26.59375 44.90625 C 27.398438 44.152344 28 42.949219 28 41.40625 C 28 40.285156 27.609375 39.667969 27.34375 38.875 C 27.042969 38.03125 26.0625 35.785156 25.125 33.65625 C 24.511719 32.265625 24.269531 31.746094 23.9375 31 C 25.800781 31 33.300781 30.996094 36.40625 30.90625 C 36.417969 30.90625 36.425781 30.90625 36.4375 30.90625 C 39.152344 30.890625 41 29.050781 41 27.09375 C 41 26.179688 40.835938 25.421875 40.75 24.90625 C 41.578125 24.472656 43 23.554688 43 21.3125 C 43 19.816406 42.308594 18.828125 41.625 18.15625 C 42.308594 17.546875 43 16.613281 43 15.1875 C 43 12.921875 41.566406 11.929688 40.59375 11.40625 C 40.800781 10.871094 41 10.167969 41 9.3125 C 41 8.277344 40.480469 7.261719 39.625 6.4375 C 38.769531 5.613281 37.515625 5 36 5 Z M 17 7 L 36 7 C 36.984375 7 37.730469 7.375 38.25 7.875 C 38.769531 8.375 39 9.046875 39 9.3125 C 39 10.5 38.46875 11.21875 38.46875 11.21875 C 38.28125 11.472656 38.226563 11.800781 38.320313 12.101563 C 38.410156 12.402344 38.640625 12.644531 38.9375 12.75 C 38.9375 12.75 41 13.539063 41 15.1875 C 41 16.652344 39.625 17.15625 39.625 17.15625 C 39.261719 17.300781 39.019531 17.644531 39 18.03125 C 38.980469 18.421875 39.1875 18.785156 39.53125 18.96875 C 39.53125 18.96875 41 19.847656 41 21.3125 C 41 22.945313 39.375 23.46875 39.375 23.46875 C 38.921875 23.628906 38.644531 24.085938 38.71875 24.5625 C 38.71875 24.5625 39 26.292969 39 27.09375 C 39 27.726563 38.269531 28.90625 36.40625 28.90625 C 36.394531 28.90625 36.386719 28.90625 36.375 28.90625 C 33.035156 29.003906 22.40625 29 22.40625 29 C 22.070313 29.003906 21.757813 29.175781 21.574219 29.457031 C 21.390625 29.742188 21.363281 30.097656 21.5 30.40625 C 21.5 30.40625 22.375 32.347656 23.3125 34.46875 C 24.25 36.589844 25.269531 38.972656 25.46875 39.53125 L 25.4375 39.53125 C 25.773438 40.535156 26 40.726563 26 41.40625 C 26 42.460938 25.640625 43.042969 25.21875 43.4375 C 24.796875 43.832031 24.246094 44 24 44 C 23.617188 44 23.011719 43.746094 22.5625 43 C 22.542969 42.96875 22.523438 42.9375 22.5 42.90625 L 11.3125 27.53125 C 11.308594 27.523438 11.316406 27.507813 11.3125 27.5 C 10.441406 26.269531 10 24.902344 10 23.40625 L 10 14 C 10 10.144531 13.144531 7 17 7 Z" }, void 0, !1, {
    fileName: "app/components/ui/icons/ThumbsDownIcon.tsx",
    lineNumber: 4,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/ui/icons/ThumbsDownIcon.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/components/ui/icons/ThumbsDownIconFilled.tsx
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime");
function ThumbsDownIconFilled({ className }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("svg", { className, fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", width: "50", height: "50", viewBox: "0 0 50 50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("path", { d: "M 24 46 C 22.769531 46 21.589844 45.257813 20.84375 44.015625 L 9.691406 28.6875 C 8.566406 27.113281 8 25.339844 8 23.398438 L 8 14 C 8 9.039063 12.039063 5 17 5 L 36 5 C 39.097656 5 41 7.503906 41 9.300781 C 41 10.132813 40.824219 10.835938 40.628906 11.359375 C 41.617188 11.976563 43 13.195313 43 15.199219 C 43 16.609375 42.335938 17.566406 41.675781 18.175781 C 42.324219 18.851563 43 19.894531 43 21.300781 C 43 23.324219 41.683594 24.445313 40.804688 24.96875 C 40.894531 25.585938 41 26.457031 41 27.101563 C 41 28.96875 39.277344 30.902344 36.398438 30.902344 C 33.832031 30.976563 27.015625 30.996094 23.941406 31 C 24.980469 33.324219 26.964844 37.804688 27.34375 38.863281 C 27.429688 39.121094 27.507813 39.320313 27.578125 39.503906 C 27.796875 40.046875 28 40.566406 28 41.398438 C 28 44.574219 25.660156 46 24 46 Z" }, void 0, !1, {
    fileName: "app/components/ui/icons/ThumbsDownIconFilled.tsx",
    lineNumber: 4,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/ui/icons/ThumbsDownIconFilled.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/components/ui/icons/ThumbsUpIcon.tsx
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime");
function ThumbsUpIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("svg", { className, fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", width: "50", height: "50", viewBox: "0 0 50 50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("path", { d: "M 24 4 C 22.824219 4 21.691406 4.726563 20.9375 5.90625 C 20.910156 5.945313 20.867188 5.960938 20.84375 6 L 9.6875 21.3125 C 8.570313 22.878906 8 24.699219 8 26.59375 L 8 36 C 8 40.945313 12.054688 45 17 45 L 36 45 C 37.515625 45 38.769531 44.386719 39.625 43.5625 C 40.480469 42.738281 41 41.722656 41 40.6875 C 41 39.832031 40.800781 39.128906 40.59375 38.59375 C 41.566406 38.070313 43 37.078125 43 34.8125 C 43 33.386719 42.308594 32.453125 41.625 31.84375 C 42.308594 31.171875 43 30.183594 43 28.6875 C 43 26.445313 41.578125 25.527344 40.75 25.09375 C 40.835938 24.578125 41 23.820313 41 22.90625 C 41 20.949219 39.152344 19.109375 36.4375 19.09375 C 36.429688 19.09375 36.414063 19.09375 36.40625 19.09375 C 33.300781 19.003906 25.800781 19 23.9375 19 C 24.269531 18.253906 24.511719 17.734375 25.125 16.34375 C 26.058594 14.226563 27.039063 12.007813 27.34375 11.15625 C 27.34375 11.152344 27.34375 11.128906 27.34375 11.125 C 27.613281 10.410156 28 9.703125 28 8.59375 C 28 7.050781 27.398438 5.847656 26.59375 5.09375 C 25.789063 4.339844 24.851563 4 24 4 Z M 24 6 C 24.246094 6 24.796875 6.167969 25.21875 6.5625 C 25.640625 6.957031 26 7.539063 26 8.59375 C 26 9.273438 25.796875 9.558594 25.46875 10.4375 C 25.46875 10.449219 25.46875 10.457031 25.46875 10.46875 C 25.269531 11.027344 24.25 13.410156 23.3125 15.53125 C 22.375 17.652344 21.5 19.59375 21.5 19.59375 C 21.363281 19.902344 21.390625 20.257813 21.574219 20.542969 C 21.757813 20.824219 22.070313 20.996094 22.40625 21 C 22.40625 21 33.035156 20.996094 36.375 21.09375 C 36.386719 21.09375 36.394531 21.09375 36.40625 21.09375 C 38.269531 21.09375 39 22.273438 39 22.90625 C 39 23.707031 38.71875 25.4375 38.71875 25.4375 C 38.644531 25.914063 38.921875 26.371094 39.375 26.53125 C 39.375 26.53125 41 27.054688 41 28.6875 C 41 30.152344 39.53125 31.03125 39.53125 31.03125 C 39.1875 31.214844 38.980469 31.578125 39 31.96875 C 39.019531 32.355469 39.261719 32.699219 39.625 32.84375 C 39.625 32.84375 41 33.347656 41 34.8125 C 41 36.460938 38.9375 37.25 38.9375 37.25 C 38.640625 37.355469 38.410156 37.597656 38.320313 37.898438 C 38.226563 38.199219 38.28125 38.527344 38.46875 38.78125 C 38.46875 38.78125 39 39.5 39 40.6875 C 39 40.953125 38.769531 41.625 38.25 42.125 C 37.730469 42.625 36.984375 43 36 43 L 17 43 C 13.144531 43 10 39.855469 10 36 L 10 26.59375 C 10 25.097656 10.441406 23.730469 11.3125 22.5 C 11.316406 22.492188 11.308594 22.476563 11.3125 22.46875 L 22.5 7.09375 C 22.523438 7.0625 22.542969 7.03125 22.5625 7 C 23.011719 6.253906 23.617188 6 24 6 Z" }, void 0, !1, {
    fileName: "app/components/ui/icons/ThumbsUpIcon.tsx",
    lineNumber: 4,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/ui/icons/ThumbsUpIcon.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/components/ui/icons/ThumbsUpIconFilled.tsx
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime");
function ThumbsUpIconFilled({ className }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("svg", { className, fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", width: "50", height: "50", viewBox: "0 0 50 50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("path", { d: "M 36 45 L 17 45 C 12.039063 45 8 40.964844 8 36 L 8 26.601563 C 8 24.660156 8.566406 22.886719 9.6875 21.320313 L 20.890625 5.910156 C 21.589844 4.742188 22.769531 4 24 4 C 25.660156 4 28 5.425781 28 8.601563 C 28 9.507813 27.753906 10.117188 27.511719 10.707031 C 27.453125 10.847656 27.394531 10.992188 27.335938 11.148438 C 26.960938 12.199219 24.980469 16.675781 23.941406 19 C 27.019531 19.003906 33.839844 19.023438 36.429688 19.101563 C 39.28125 19.101563 41 21.03125 41 22.898438 C 41 23.539063 40.894531 24.414063 40.804688 25.03125 C 41.683594 25.554688 43 26.679688 43 28.699219 C 43 30.105469 42.324219 31.144531 41.675781 31.824219 C 42.335938 32.433594 43 33.390625 43 34.800781 C 43 36.808594 41.617188 38.023438 40.628906 38.640625 C 40.824219 39.164063 41 39.867188 41 40.699219 C 41 42.496094 39.097656 45 36 45 Z" }, void 0, !1, {
    fileName: "app/components/ui/icons/ThumbsUpIconFilled.tsx",
    lineNumber: 4,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/ui/icons/ThumbsUpIconFilled.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/utils/shared/DateUtils.ts
var import_moment = __toESM(require("moment"));
var dateAgo = (value) => {
  let today = (0, import_moment.default)(new Date()), at = (0, import_moment.default)(value), days = Math.abs(today.diff(at, "days"));
  return days <= 1 ? (0, import_moment.default)(at).startOf("minute").fromNow() : days <= 7 ? (0, import_moment.default)(at).startOf("day").fromNow() : days <= 30 ? (0, import_moment.default)(at).startOf("week").fromNow() : days <= 30 * 12 ? (0, import_moment.default)(at).startOf("month").fromNow() : days <= 30 * 12 * 2 ? (0, import_moment.default)(at).startOf("year").fromNow() : (0, import_moment.default)(at).format("YYYY-MM-DD");
}, dateYMD = (value) => (0, import_moment.default)(value).format("YYYY-MM-DD"), dateDMY = (value) => (0, import_moment.default)(value).format("DD-MM-YYYY"), dateMDY = (value) => (0, import_moment.default)(value).format("MM-DD-YYYY"), dateLL = (value) => (0, import_moment.default)(value).format("YYYY-MM-DD"), dateYMDHMS = (value) => (0, import_moment.default)(value).format("YYYY-MM-DD HH:mm:ss"), dateMonthName = (value) => (0, import_moment.default)(value).format("MMMM YYYY"), dateDM = (value) => (0, import_moment.default)(value).format("D MMM"), dateMonthDayYear = (value) => (0, import_moment.default)(value).format("MMMM D, YYYY"), dateHMS = (value) => (0, import_moment.default)(value).format("HH:mm:ss"), daysFromDate = (value, days) => new Date(new Date().setDate(value.getDate() + days)), diffDays = (a, b) => {
  let utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate()), utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate()), _MS_PER_DAY = 1e3 * 60 * 60 * 24;
  return (utc2 - utc1) / _MS_PER_DAY;
}, add = (value, days) => new Date(new Date().setDate(value.getDate() + days)), getMonths = () => ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], getMonthName = (month) => {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return month >= 1 && month <= 12 ? months[month - 1].substring(0, 3) : "";
}, isCurrentMonth = (year, month) => {
  let today = new Date();
  return today.getFullYear() === year && today.getMonth() + 1 === month;
}, gteFromFilter = (filter, from) => {
  let gte;
  return from || (from = new Date()), filter === "last-24-hours" ? gte = daysFromDate(from, 1 * -1) : filter === "last-7-days" ? gte = daysFromDate(from, 7 * -1) : filter === "last-30-days" ? gte = daysFromDate(from, 30 * -1) : filter === "last-3-months" ? gte = daysFromDate(from, 30 * 3 * -1) : filter === "last-6-months" ? gte = daysFromDate(from, 30 * 6 * -1) : filter === "last-year" ? gte = daysFromDate(from, 30 * 12 * -1) : console.log("gteFromFilter: filter not found", filter), gte;
}, getDuration = ({ start, end, format = "s" }) => {
  let diff = +new Date(end) - +new Date(start), seconds = Math.floor(diff / 1e3);
  switch (format) {
    case "ms":
      return diff;
    case "s":
      return seconds;
    case "m":
      return Math.floor(seconds / 60);
    case "h":
      return Math.floor(seconds / 3600);
    case "d":
      return Math.floor(seconds / 86400);
    case "w":
      return Math.floor(seconds / 604800);
    case "M":
      return Math.floor(seconds / 2592e3);
    case "y":
      return Math.floor(seconds / 31536e3);
    default:
      return diff;
  }
};
function getDurationInSeconds({ start, end }) {
  if (start && end) {
    let diff = +new Date(end) - +new Date(start), seconds = Math.floor(diff / 1e3);
    return seconds < 60 ? `${seconds}s` : `${Math.floor(seconds / 60)}m ${seconds % 60}s`;
  }
  return "-";
}
var DateUtils_default = {
  dateAgo,
  dateYMD,
  dateDMY,
  dateMDY,
  dateLL,
  dateYMDHMS,
  dateMonthName,
  dateDM,
  dateHMS,
  dateMonthDayYear,
  daysFromDate,
  diffDays,
  add,
  getMonths,
  getMonthName,
  isCurrentMonth,
  gteFromFilter,
  getDuration,
  getDurationInSeconds
};

// app/modules/knowledgeBase/components/articles/KbArticleContent.tsx
var import_jsx_dev_runtime24 = require("react/jsx-dev-runtime");
function KbArticleContent({
  item,
  content,
  actions,
  userState
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "flex flex-col space-y-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "flex items-center space-x-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "flex flex-col w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "flex space-x-3 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "text-xl md:text-3xl font-bold group-hover:text-gray-700", children: item.title }, void 0, !1, {
        fileName: "app/modules/knowledgeBase/components/articles/KbArticleContent.tsx",
        lineNumber: 33,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/modules/knowledgeBase/components/articles/KbArticleContent.tsx",
        lineNumber: 32,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "mt-2 text-gray-700 font-light", children: item.description }, void 0, !1, {
        fileName: "app/modules/knowledgeBase/components/articles/KbArticleContent.tsx",
        lineNumber: 35,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "flex justify-between space-x-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("li", { className: "flex items-center space-x-2 mt-5", children: [
          item.author && /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("img", { src: item.author.avatar, alt: "", className: "h-8 w-8 rounded-full" }, void 0, !1, {
            fileName: "app/modules/knowledgeBase/components/articles/KbArticleContent.tsx",
            lineNumber: 38,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("dl", { className: "whitespace-no-wrap text-sm font-medium leading-5", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("dt", { className: "sr-only", children: "Author" }, void 0, !1, {
                fileName: "app/modules/knowledgeBase/components/articles/KbArticleContent.tsx",
                lineNumber: 41,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("dd", { className: "text-gray-900 dark:text-white", children: [
                item.author.firstName,
                " ",
                item.author.lastName
              ] }, void 0, !0, {
                fileName: "app/modules/knowledgeBase/components/articles/KbArticleContent.tsx",
                lineNumber: 42,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/modules/knowledgeBase/components/articles/KbArticleContent.tsx",
              lineNumber: 40,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("dl", { className: "whitespace-no-wrap text-xs leading-5", children: DateUtils_default.dateAgo(item.createdAt) }, void 0, !1, {
              fileName: "app/modules/knowledgeBase/components/articles/KbArticleContent.tsx",
              lineNumber: 46,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/modules/knowledgeBase/components/articles/KbArticleContent.tsx",
            lineNumber: 39,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/modules/knowledgeBase/components/articles/KbArticleContent.tsx",
          lineNumber: 37,
          columnNumber: 15
        }, this),
        actions && /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("button", { type: "button", onClick: actions.onThumbsUp, className: "flex items-center space-x-2  hover:text-gray-800 text-gray-500", children: userState != null && userState.hasThumbsUp ? /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(ThumbsUpIconFilled, { className: "h-4 w-4" }, void 0, !1, {
            fileName: "app/modules/knowledgeBase/components/articles/KbArticleContent.tsx",
            lineNumber: 52,
            columnNumber: 47
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(ThumbsUpIcon, { className: "h-4 w-4" }, void 0, !1, {
            fileName: "app/modules/knowledgeBase/components/articles/KbArticleContent.tsx",
            lineNumber: 52,
            columnNumber: 92
          }, this) }, void 0, !1, {
            fileName: "app/modules/knowledgeBase/components/articles/KbArticleContent.tsx",
            lineNumber: 51,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("button", { type: "button", onClick: actions.onThumbsDown, className: "flex items-center space-x-2  hover:text-gray-800 text-gray-500", children: userState != null && userState.hasThumbsDown ? /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(ThumbsDownIconFilled, { className: "h-4 w-4" }, void 0, !1, {
            fileName: "app/modules/knowledgeBase/components/articles/KbArticleContent.tsx",
            lineNumber: 55,
            columnNumber: 49
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(ThumbsDownIcon, { className: "h-4 w-4" }, void 0, !1, {
            fileName: "app/modules/knowledgeBase/components/articles/KbArticleContent.tsx",
            lineNumber: 55,
            columnNumber: 96
          }, this) }, void 0, !1, {
            fileName: "app/modules/knowledgeBase/components/articles/KbArticleContent.tsx",
            lineNumber: 54,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/modules/knowledgeBase/components/articles/KbArticleContent.tsx",
          lineNumber: 50,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/modules/knowledgeBase/components/articles/KbArticleContent.tsx",
        lineNumber: 36,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/modules/knowledgeBase/components/articles/KbArticleContent.tsx",
      lineNumber: 31,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/modules/knowledgeBase/components/articles/KbArticleContent.tsx",
      lineNumber: 30,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/modules/knowledgeBase/components/articles/KbArticleContent.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "border-b border-gray-200" }, void 0, !1, {
      fileName: "app/modules/knowledgeBase/components/articles/KbArticleContent.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "grid grid-cols-12 gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "col-span-9", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "prose", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { dangerouslySetInnerHTML: { __html: marked(content) } }, void 0, !1, {
        fileName: "app/modules/knowledgeBase/components/articles/KbArticleContent.tsx",
        lineNumber: 69,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/modules/knowledgeBase/components/articles/KbArticleContent.tsx",
        lineNumber: 68,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/modules/knowledgeBase/components/articles/KbArticleContent.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      item.relatedArticles.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "col-span-3 space-y-3 py-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "font-medium text-sm text-gray-600", children: "Related Articles" }, void 0, !1, {
          fileName: "app/modules/knowledgeBase/components/articles/KbArticleContent.tsx",
          lineNumber: 74,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "space-y-2", children: item.relatedArticles.map((x) => /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react14.Link, { to: x.href, className: "flex items-center space-x-2 hover:underline", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "text-sm", children: x.title }, void 0, !1, {
          fileName: "app/modules/knowledgeBase/components/articles/KbArticleContent.tsx",
          lineNumber: 78,
          columnNumber: 19
        }, this) }, x.href, !1, {
          fileName: "app/modules/knowledgeBase/components/articles/KbArticleContent.tsx",
          lineNumber: 77,
          columnNumber: 17
        }, this)) }, void 0, !1, {
          fileName: "app/modules/knowledgeBase/components/articles/KbArticleContent.tsx",
          lineNumber: 75,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/modules/knowledgeBase/components/articles/KbArticleContent.tsx",
        lineNumber: 73,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/modules/knowledgeBase/components/articles/KbArticleContent.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/modules/knowledgeBase/components/articles/KbArticleContent.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

// app/modules/knowledgeBase/components/articles/KbArticle.tsx
var import_react15 = require("@remix-run/react");
var import_jsx_dev_runtime25 = require("react/jsx-dev-runtime");
function KbArticle({
  kb,
  category,
  item,
  userState,
  actions
}) {
  let params = (0, import_react15.useParams)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
      BreadcrumbSimple,
      {
        menu: [
          {
            title: kb.title,
            routePath: KnowledgeBaseUtils_default.getKbUrl({ kb, params })
          },
          {
            title: category.title,
            routePath: KnowledgeBaseUtils_default.getCategoryUrl({ kb, category, params })
          },
          {
            title: item.title,
            routePath: item.href
          }
        ]
      },
      void 0,
      !1,
      {
        fileName: "app/modules/knowledgeBase/components/articles/KbArticle.tsx",
        lineNumber: 31,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(KbArticleContent, { item, content: item.contentPublished, userState, actions }, void 0, !1, {
      fileName: "app/modules/knowledgeBase/components/articles/KbArticle.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/modules/knowledgeBase/components/articles/KbArticle.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

// app/routes/$slug.($lang).articles.$article.tsx
var import_react16 = require("@remix-run/react");

// app/modules/knowledgeBase/db/kbAnalytics.db.server.ts
async function createKnowledgeBaseView({ userAnalyticsId, knowledgeBaseId }) {
  if (!userAnalyticsId)
    return;
  await db.knowledgeBaseViews.findUnique({
    where: {
      knowledgeBaseId_userAnalyticsId: {
        userAnalyticsId,
        knowledgeBaseId
      }
    }
  }) || await db.knowledgeBaseViews.create({
    data: {
      userAnalyticsId,
      knowledgeBaseId
    }
  });
}
async function createKnowledgeBaseArticleView({ userAnalyticsId, articleId }) {
  if (!userAnalyticsId)
    return;
  await db.knowledgeBaseArticleViews.findUnique({
    where: {
      knowledgeBaseArticleId_userAnalyticsId: {
        userAnalyticsId,
        knowledgeBaseArticleId: articleId
      }
    }
  }) || await db.knowledgeBaseArticleViews.create({
    data: {
      userAnalyticsId,
      knowledgeBaseArticleId: articleId
    }
  });
}
async function voteArticle({ userAnalyticsId, articleId, type }) {
  !userAnalyticsId || (type === "up" ? (await db.knowledgeBaseArticleDownvotes.deleteMany({
    where: {
      userAnalyticsId,
      knowledgeBaseArticleId: articleId
    }
  }), await db.knowledgeBaseArticleUpvotes.findUnique({
    where: {
      knowledgeBaseArticleId_userAnalyticsId: {
        userAnalyticsId,
        knowledgeBaseArticleId: articleId
      }
    }
  }) ? await db.knowledgeBaseArticleUpvotes.delete({
    where: {
      knowledgeBaseArticleId_userAnalyticsId: {
        userAnalyticsId,
        knowledgeBaseArticleId: articleId
      }
    }
  }) : await db.knowledgeBaseArticleUpvotes.create({
    data: {
      userAnalyticsId,
      knowledgeBaseArticleId: articleId
    }
  })) : (await db.knowledgeBaseArticleUpvotes.deleteMany({
    where: {
      userAnalyticsId,
      knowledgeBaseArticleId: articleId
    }
  }), await db.knowledgeBaseArticleDownvotes.findUnique({
    where: {
      knowledgeBaseArticleId_userAnalyticsId: {
        userAnalyticsId,
        knowledgeBaseArticleId: articleId
      }
    }
  }) ? await db.knowledgeBaseArticleDownvotes.delete({
    where: {
      knowledgeBaseArticleId_userAnalyticsId: {
        userAnalyticsId,
        knowledgeBaseArticleId: articleId
      }
    }
  }) : await db.knowledgeBaseArticleDownvotes.create({
    data: {
      userAnalyticsId,
      knowledgeBaseArticleId: articleId
    }
  })));
}
async function getArticleStateByUserAnalyticsId({ userAnalyticsId, articleId }) {
  return {
    hasThumbsUp: !!await db.knowledgeBaseArticleUpvotes.findUnique({
      where: {
        knowledgeBaseArticleId_userAnalyticsId: {
          userAnalyticsId,
          knowledgeBaseArticleId: articleId
        }
      }
    }),
    hasThumbsDown: !!await db.knowledgeBaseArticleDownvotes.findUnique({
      where: {
        knowledgeBaseArticleId_userAnalyticsId: {
          userAnalyticsId,
          knowledgeBaseArticleId: articleId
        }
      }
    })
  };
}
async function countAllKbsViews() {
  return await db.knowledgeBaseViews.count();
}
async function countAllKbsArticleViews() {
  return await db.knowledgeBaseArticleViews.count();
}
async function countAllKbsArticleUpvotes() {
  return await db.knowledgeBaseArticleUpvotes.count();
}
async function countAllKbsArticleDownvotes() {
  return await db.knowledgeBaseArticleDownvotes.count();
}

// app/routes/$slug.($lang).articles.$article.tsx
var import_jsx_dev_runtime26 = require("react/jsx-dev-runtime"), loader3 = async ({ request, params }) => {
  let userInfo = await getUserInfo(request), kb = await KnowledgeBaseService_default.get({ slug: params.slug, enabled: !0 }), item = await KnowledgeBaseService_default.getArticle({
    kb,
    slug: params.article ?? "",
    params
  });
  if (!item)
    return (0, import_node5.redirect)(KnowledgeBaseUtils_default.getKbUrl({ kb, params }));
  item != null && item.article && await createKnowledgeBaseArticleView({ userAnalyticsId: userInfo.userAnalyticsId, articleId: item.article.id });
  let userState = await getArticleStateByUserAnalyticsId({
    userAnalyticsId: userInfo.userAnalyticsId,
    articleId: (item == null ? void 0 : item.article.id) ?? ""
  }), data = {
    metatags: item == null ? void 0 : item.article.metatags,
    kb,
    item,
    userState
  };
  return (0, import_node5.defer)(data);
}, action = async ({ request, params }) => {
  let userInfo = await getUserInfo(request), action18 = (await request.formData()).get("action"), kb = await KnowledgeBaseService_default.get({ slug: params.slug, enabled: !0 }), item = await KnowledgeBaseService_default.getArticle({
    kb,
    slug: params.article ?? "",
    params
  });
  return item ? action18 === "thumbsUp" ? (await voteArticle({ userAnalyticsId: userInfo.userAnalyticsId, articleId: item.article.id, type: "up" }), (0, import_node5.json)({ success: !0 })) : action18 === "thumbsDown" ? (await voteArticle({ userAnalyticsId: userInfo.userAnalyticsId, articleId: item.article.id, type: "down" }), (0, import_node5.json)({ success: !0 })) : (0, import_node5.json)({ error: "Invalid action" }, { status: 400 }) : (0, import_node5.json)({ error: "Not found" }, { status: 404 });
}, meta3 = ({ data }) => data == null ? void 0 : data.metatags;
function Index2() {
  let data = (0, import_remix_typedjson3.useTypedLoaderData)(), submit = (0, import_react16.useSubmit)();
  function onAction(name) {
    let form = new FormData();
    form.set("action", name), submit(form, {
      method: "post"
    });
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(KbHeader, { kb: data.kb, withTitleAndDescription: !1 }, void 0, !1, {
      fileName: "app/routes/$slug.($lang).articles.$article.tsx",
      lineNumber: 96,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "max-w-5xl mx-auto py-8 px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "space-y-3", children: data.item ? /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
      KbArticle,
      {
        kb: data.kb,
        category: data.item.category,
        item: data.item.article,
        userState: {
          hasThumbsUp: data.userState.hasThumbsUp,
          hasThumbsDown: data.userState.hasThumbsDown
        },
        actions: {
          onThumbsUp: () => onAction("thumbsUp"),
          onThumbsDown: () => onAction("thumbsDown")
        }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/$slug.($lang).articles.$article.tsx",
        lineNumber: 103,
        columnNumber: 13
      },
      this
    ) : /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { children: "Not found" }, void 0, !1, {
      fileName: "app/routes/$slug.($lang).articles.$article.tsx",
      lineNumber: 101,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/$slug.($lang).articles.$article.tsx",
      lineNumber: 99,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/$slug.($lang).articles.$article.tsx",
      lineNumber: 98,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/$slug.($lang).articles.$article.tsx",
    lineNumber: 95,
    columnNumber: 5
  }, this);
}
function ErrorBoundary2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(ServerError, {}, void 0, !1, {
    fileName: "app/routes/$slug.($lang).articles.$article.tsx",
    lineNumber: 124,
    columnNumber: 10
  }, this);
}

// app/routes/api.ai/generate.tsx
var generate_exports = {};
__export(generate_exports, {
  action: () => action2
});

// app/modules/ai/lib/OpenAIStream.ts
var import_eventsource_parser = require("eventsource-parser");
async function chatCompletionStream(payload) {
  let apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey)
    throw new Error("No OpenAI API key found");
  let encoder = new TextEncoder(), decoder = new TextDecoder(), counter = 0, res = await fetch("https://api.openai.com/v1/chat/completions", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    method: "POST",
    body: JSON.stringify(payload)
  });
  return new ReadableStream({
    async start(controller) {
      function onParse(event) {
        var _a;
        if (event.type === "event") {
          let data = event.data;
          if (data === "[DONE]") {
            controller.close();
            return;
          }
          try {
            let text = ((_a = JSON.parse(data).choices[0].delta) == null ? void 0 : _a.content) || "";
            if (counter < 2 && (text.match(/\n/) || []).length)
              return;
            let queue = encoder.encode(text);
            controller.enqueue(queue), counter++;
          } catch (e) {
            controller.error(e);
          }
        }
      }
      let parser2 = (0, import_eventsource_parser.createParser)(onParse);
      for await (let chunk of res.body)
        parser2.feed(decoder.decode(chunk));
    }
  });
}
var OpenAIStream_default = {
  chatCompletionStream
};

// app/routes/api.ai/generate.tsx
var action2 = async ({ request, params }) => {
  let { prompt } = await request.json();
  if (!prompt)
    return new Response("No prompt in the request", { status: 400 });
  if (prompt = prompt.replace(/\n/g, " ").replace(/\/$/, "").slice(0, 5e3), !prompt)
    return new Response("Start typing to get suggestions", { status: 400 });
  let stream = await OpenAIStream_default.chatCompletionStream({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "You are an AI writing assistant that continues existing text based on context from prior text. Give more weight/priority to the later characters than the beginning ones. Make sure to construct complete sentences."
      },
      {
        role: "user",
        content: prompt
      }
    ],
    stream: !0,
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    n: 1
  });
  return new Response(stream, {});
};

// app/routes/$slug.($lang).tsx
var slug_lang_exports = {};
__export(slug_lang_exports, {
  ErrorBoundary: () => ErrorBoundary3,
  default: () => Index3,
  loader: () => loader4,
  meta: () => meta4
});
var import_node6 = require("@remix-run/node");
var import_remix_typedjson4 = require("remix-typedjson");

// app/modules/knowledgeBase/components/categories/KbCategoriesList.tsx
var import_react17 = require("@remix-run/react"), import_clsx8 = __toESM(require("clsx")), import_jsx_dev_runtime27 = require("react/jsx-dev-runtime");
function KbCategoriesList({ items }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "space-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("h2", { className: "text-2xl font-bold", children: "Categories" }, void 0, !1, {
      fileName: "app/modules/knowledgeBase/components/categories/KbCategoriesList.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: (0, import_clsx8.default)("grid gap-4 grid-cols-1"), children: items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "rounded-md border border-gray-300 bg-white hover:border-slate-400 group", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_react17.Link, { to: item.href, className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "flex items-center space-x-8 p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "flex-shrink-0", children: item.icon.startsWith("<svg") ? /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
        "div",
        {
          dangerouslySetInnerHTML: {
            __html: item.icon.replace("<svg", "<svg class='h-12 w-12 text-gray-400 group-hover:text-gray-700'") ?? ""
          }
        },
        void 0,
        !1,
        {
          fileName: "app/modules/knowledgeBase/components/categories/KbCategoriesList.tsx",
          lineNumber: 18,
          columnNumber: 23
        },
        this
      ) : item.icon.includes("http") ? /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("img", { className: "h-12 w-12", src: item.icon, alt: item.title }, void 0, !1, {
        fileName: "app/modules/knowledgeBase/components/categories/KbCategoriesList.tsx",
        lineNumber: 24,
        columnNumber: 23
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_jsx_dev_runtime27.Fragment, {}, void 0, !1, {
        fileName: "app/modules/knowledgeBase/components/categories/KbCategoriesList.tsx",
        lineNumber: 26,
        columnNumber: 23
      }, this) }, void 0, !1, {
        fileName: "app/modules/knowledgeBase/components/categories/KbCategoriesList.tsx",
        lineNumber: 16,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "flex flex-col w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "font-bold group-hover:text-gray-700", children: item.title }, void 0, !1, {
          fileName: "app/modules/knowledgeBase/components/categories/KbCategoriesList.tsx",
          lineNumber: 30,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "mt-1 text-sm text-gray-700", children: item.description }, void 0, !1, {
          fileName: "app/modules/knowledgeBase/components/categories/KbCategoriesList.tsx",
          lineNumber: 31,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "mt-6 flex items-center space-x-2 justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "flex items-center space-x-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "text-sm", children: [
          item.articles.length,
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("span", { children: item.articles.length === 1 ? "article" : "articles" }, void 0, !1, {
            fileName: "app/modules/knowledgeBase/components/categories/KbCategoriesList.tsx",
            lineNumber: 35,
            columnNumber: 50
          }, this)
        ] }, void 0, !0, {
          fileName: "app/modules/knowledgeBase/components/categories/KbCategoriesList.tsx",
          lineNumber: 34,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/modules/knowledgeBase/components/categories/KbCategoriesList.tsx",
          lineNumber: 33,
          columnNumber: 23
        }, this) }, void 0, !1, {
          fileName: "app/modules/knowledgeBase/components/categories/KbCategoriesList.tsx",
          lineNumber: 32,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/modules/knowledgeBase/components/categories/KbCategoriesList.tsx",
        lineNumber: 29,
        columnNumber: 19
      }, this)
    ] }, void 0, !0, {
      fileName: "app/modules/knowledgeBase/components/categories/KbCategoriesList.tsx",
      lineNumber: 15,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/modules/knowledgeBase/components/categories/KbCategoriesList.tsx",
      lineNumber: 14,
      columnNumber: 15
    }, this) }, item.title, !1, {
      fileName: "app/modules/knowledgeBase/components/categories/KbCategoriesList.tsx",
      lineNumber: 13,
      columnNumber: 13
    }, this)) }, void 0, !1, {
      fileName: "app/modules/knowledgeBase/components/categories/KbCategoriesList.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/modules/knowledgeBase/components/categories/KbCategoriesList.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/modules/knowledgeBase/components/categories/KbCategoriesGrid.tsx
var import_react18 = require("@remix-run/react"), import_clsx9 = __toESM(require("clsx")), import_jsx_dev_runtime28 = require("react/jsx-dev-runtime");
function KbCategoriesGrid({ items, columns }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
    "div",
    {
      className: (0, import_clsx9.default)(
        "grid gap-4 grid-cols-1",
        columns === 2 && "md:grid-cols-2",
        columns === 3 && "md:grid-cols-3",
        columns === 4 && "md:grid-cols-4",
        columns === 5 && "md:grid-cols-5",
        columns === 6 && "md:grid-cols-6"
      ),
      children: items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "rounded-md border border-gray-300 bg-white hover:border-slate-400 group", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react18.Link, { to: item.href, className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "p-6 flex flex-col space-y-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "flex-shrink-0", children: item.icon.startsWith("<svg") ? /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
          "div",
          {
            dangerouslySetInnerHTML: {
              __html: item.icon.replace("<svg", "<svg class='h-8 w-8 text-gray-400 group-hover:text-gray-700'") ?? ""
            }
          },
          void 0,
          !1,
          {
            fileName: "app/modules/knowledgeBase/components/categories/KbCategoriesGrid.tsx",
            lineNumber: 24,
            columnNumber: 21
          },
          this
        ) : item.icon.includes("http") ? /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("img", { className: "h-8 w-8", src: item.icon, alt: item.title }, void 0, !1, {
          fileName: "app/modules/knowledgeBase/components/categories/KbCategoriesGrid.tsx",
          lineNumber: 30,
          columnNumber: 21
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_jsx_dev_runtime28.Fragment, {}, void 0, !1, {
          fileName: "app/modules/knowledgeBase/components/categories/KbCategoriesGrid.tsx",
          lineNumber: 32,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/modules/knowledgeBase/components/categories/KbCategoriesGrid.tsx",
          lineNumber: 22,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "flex items-center space-x-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "flex flex-col w-full", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "font-bold group-hover:text-gray-700", children: item.title }, void 0, !1, {
            fileName: "app/modules/knowledgeBase/components/categories/KbCategoriesGrid.tsx",
            lineNumber: 37,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "mt-1 text-sm text-gray-700", children: item.description }, void 0, !1, {
            fileName: "app/modules/knowledgeBase/components/categories/KbCategoriesGrid.tsx",
            lineNumber: 38,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "mt-6 flex items-center space-x-2 justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "flex items-center space-x-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "text-sm", children: [
            item.articles.length,
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("span", { children: item.articles.length === 1 ? "article" : "articles" }, void 0, !1, {
              fileName: "app/modules/knowledgeBase/components/categories/KbCategoriesGrid.tsx",
              lineNumber: 42,
              columnNumber: 50
            }, this)
          ] }, void 0, !0, {
            fileName: "app/modules/knowledgeBase/components/categories/KbCategoriesGrid.tsx",
            lineNumber: 41,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/modules/knowledgeBase/components/categories/KbCategoriesGrid.tsx",
            lineNumber: 40,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/modules/knowledgeBase/components/categories/KbCategoriesGrid.tsx",
            lineNumber: 39,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/modules/knowledgeBase/components/categories/KbCategoriesGrid.tsx",
          lineNumber: 36,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/modules/knowledgeBase/components/categories/KbCategoriesGrid.tsx",
          lineNumber: 35,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/modules/knowledgeBase/components/categories/KbCategoriesGrid.tsx",
        lineNumber: 21,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/modules/knowledgeBase/components/categories/KbCategoriesGrid.tsx",
        lineNumber: 20,
        columnNumber: 13
      }, this) }, item.title, !1, {
        fileName: "app/modules/knowledgeBase/components/categories/KbCategoriesGrid.tsx",
        lineNumber: 19,
        columnNumber: 11
      }, this))
    },
    void 0,
    !1,
    {
      fileName: "app/modules/knowledgeBase/components/categories/KbCategoriesGrid.tsx",
      lineNumber: 7,
      columnNumber: 5
    },
    this
  );
}

// app/modules/knowledgeBase/components/categories/KbCategoriesTopArticles.tsx
var import_react19 = require("@remix-run/react"), import_clsx10 = __toESM(require("clsx")), import_jsx_dev_runtime29 = require("react/jsx-dev-runtime");
function KbCategoriesTopArticles({ items }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "space-y-4", children: items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "space-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "flex justify-between space-x-2 items-baseline", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "space-x-4 flex items-center", children: [
        item.icon.startsWith("<svg") ? /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
          "div",
          {
            dangerouslySetInnerHTML: {
              __html: item.icon.replace("<svg", "<svg class='h-6 w-6 text-gray-400 group-hover:text-gray-700'") ?? ""
            }
          },
          void 0,
          !1,
          {
            fileName: "app/modules/knowledgeBase/components/categories/KbCategoriesTopArticles.tsx",
            lineNumber: 14,
            columnNumber: 19
          },
          this
        ) : item.icon.includes("http") ? /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("img", { className: "h-6 w-6", src: item.icon, alt: item.title }, void 0, !1, {
          fileName: "app/modules/knowledgeBase/components/categories/KbCategoriesTopArticles.tsx",
          lineNumber: 20,
          columnNumber: 19
        }, this) : null,
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react19.Link, { to: item.href, className: "hover:underline", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("h2", { className: "text-2xl font-bold", children: item.title }, void 0, !1, {
          fileName: "app/modules/knowledgeBase/components/categories/KbCategoriesTopArticles.tsx",
          lineNumber: 23,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/modules/knowledgeBase/components/categories/KbCategoriesTopArticles.tsx",
          lineNumber: 22,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/modules/knowledgeBase/components/categories/KbCategoriesTopArticles.tsx",
        lineNumber: 12,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react19.Link, { to: item.href, className: "text-sm text-gray-500 hover:underline", children: "View all" }, void 0, !1, {
        fileName: "app/modules/knowledgeBase/components/categories/KbCategoriesTopArticles.tsx",
        lineNumber: 26,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/modules/knowledgeBase/components/categories/KbCategoriesTopArticles.tsx",
      lineNumber: 11,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: (0, import_clsx10.default)("grid gap-4 grid-cols-3"), children: item.articles.slice(0, 3).map((item2) => /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "rounded-md border border-gray-300 bg-white hover:border-slate-400 group", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react19.Link, { to: item2.href, className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "flex items-center space-x-8 p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "flex flex-col w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "font-medium group-hover:text-gray-700", children: item2.title }, void 0, !1, {
      fileName: "app/modules/knowledgeBase/components/categories/KbCategoriesTopArticles.tsx",
      lineNumber: 37,
      columnNumber: 27
    }, this) }, void 0, !1, {
      fileName: "app/modules/knowledgeBase/components/categories/KbCategoriesTopArticles.tsx",
      lineNumber: 36,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/modules/knowledgeBase/components/categories/KbCategoriesTopArticles.tsx",
      lineNumber: 35,
      columnNumber: 23
    }, this) }, void 0, !1, {
      fileName: "app/modules/knowledgeBase/components/categories/KbCategoriesTopArticles.tsx",
      lineNumber: 34,
      columnNumber: 21
    }, this) }, item2.title, !1, {
      fileName: "app/modules/knowledgeBase/components/categories/KbCategoriesTopArticles.tsx",
      lineNumber: 33,
      columnNumber: 19
    }, this)) }, void 0, !1, {
      fileName: "app/modules/knowledgeBase/components/categories/KbCategoriesTopArticles.tsx",
      lineNumber: 30,
      columnNumber: 13
    }, this)
  ] }, item.slug, !0, {
    fileName: "app/modules/knowledgeBase/components/categories/KbCategoriesTopArticles.tsx",
    lineNumber: 10,
    columnNumber: 11
  }, this)) }, void 0, !1, {
    fileName: "app/modules/knowledgeBase/components/categories/KbCategoriesTopArticles.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/modules/knowledgeBase/components/categories/KbCategories.tsx
var import_react20 = require("react"), import_jsx_dev_runtime30 = require("react/jsx-dev-runtime");
function KbCategories({ items, kb }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { children: items.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "space-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("h2", { className: "text-2xl font-bold", children: "Categories" }, void 0, !1, {
      fileName: "app/modules/knowledgeBase/components/categories/KbCategories.tsx",
      lineNumber: 14,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(EmptyState, { className: "bg-white", captions: { thereAreNo: "There are no categories" } }, void 0, !1, {
      fileName: "app/modules/knowledgeBase/components/categories/KbCategories.tsx",
      lineNumber: 15,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/modules/knowledgeBase/components/categories/KbCategories.tsx",
    lineNumber: 13,
    columnNumber: 9
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_react20.Fragment, { children: kb.layout === "list" ? /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(KbCategoriesList, { items }, void 0, !1, {
    fileName: "app/modules/knowledgeBase/components/categories/KbCategories.tsx",
    lineNumber: 20,
    columnNumber: 13
  }, this) : kb.layout === "articles" ? /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(KbCategoriesTopArticles, { items }, void 0, !1, {
    fileName: "app/modules/knowledgeBase/components/categories/KbCategories.tsx",
    lineNumber: 22,
    columnNumber: 13
  }, this) : kb.layout === "grid" ? /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(KbCategoriesGrid, { items, columns: 3 }, void 0, !1, {
    fileName: "app/modules/knowledgeBase/components/categories/KbCategories.tsx",
    lineNumber: 24,
    columnNumber: 13
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_jsx_dev_runtime30.Fragment, {}, void 0, !1, {
    fileName: "app/modules/knowledgeBase/components/categories/KbCategories.tsx",
    lineNumber: 26,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/modules/knowledgeBase/components/categories/KbCategories.tsx",
    lineNumber: 18,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/modules/knowledgeBase/components/categories/KbCategories.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/modules/knowledgeBase/components/KbFeaturedArticles.tsx
var import_react21 = require("@remix-run/react");
var import_clsx11 = __toESM(require("clsx"));
var import_jsx_dev_runtime31 = require("react/jsx-dev-runtime");
function KbFeaturedArticles({ kb, items }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "space-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "space-x-4 flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(FeaturedArticlesIcon, { color: kb.color }, void 0, !1, {
        fileName: "app/modules/knowledgeBase/components/KbFeaturedArticles.tsx",
        lineNumber: 13,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("h2", { className: "text-2xl font-bold", children: "Featured Articles" }, void 0, !1, {
        fileName: "app/modules/knowledgeBase/components/KbFeaturedArticles.tsx",
        lineNumber: 14,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/modules/knowledgeBase/components/KbFeaturedArticles.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    items.length === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(EmptyState, { className: "bg-white", captions: { thereAreNo: "No featured articles" } }, void 0, !1, {
      fileName: "app/modules/knowledgeBase/components/KbFeaturedArticles.tsx",
      lineNumber: 16,
      columnNumber: 30
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "grid gap-2 grid-cols-2", children: items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
      import_react21.Link,
      {
        to: item.href,
        className: "px-3 py-4 bg-white border border-gray-200 shadow-sm rounded-md hover:bg-slate-50 hover:border-slate-400",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "flex justify-between space-x-2 items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "font-medium text-gray-700 flex-grow", children: item.title }, void 0, !1, {
            fileName: "app/modules/knowledgeBase/components/KbFeaturedArticles.tsx",
            lineNumber: 26,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("svg", { className: "h-5 w-5", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
            "path",
            {
              fillRule: "evenodd",
              d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
              clipRule: "evenodd"
            },
            void 0,
            !1,
            {
              fileName: "app/modules/knowledgeBase/components/KbFeaturedArticles.tsx",
              lineNumber: 32,
              columnNumber: 21
            },
            this
          ) }, void 0, !1, {
            fileName: "app/modules/knowledgeBase/components/KbFeaturedArticles.tsx",
            lineNumber: 31,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/modules/knowledgeBase/components/KbFeaturedArticles.tsx",
            lineNumber: 27,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/modules/knowledgeBase/components/KbFeaturedArticles.tsx",
          lineNumber: 25,
          columnNumber: 15
        }, this)
      },
      item.id,
      !1,
      {
        fileName: "app/modules/knowledgeBase/components/KbFeaturedArticles.tsx",
        lineNumber: 20,
        columnNumber: 13
      },
      this
    )) }, void 0, !1, {
      fileName: "app/modules/knowledgeBase/components/KbFeaturedArticles.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/modules/knowledgeBase/components/KbFeaturedArticles.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
function FeaturedArticlesIcon({ color }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
    "svg",
    {
      className: (0, import_clsx11.default)("h-5 w-5", ColorTextUtils_default.getText500(color)),
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 14 14",
      height: "48",
      width: "48",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("g", { id: "star-1--reward-rating-rate-social-star-media-favorite-like-stars", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
        "path",
        {
          id: "Union",
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M7 .277a1.04 1.04 0 0 0-.94.596L4.472 4.078a.495.495 0 0 0-.012.023.486.486 0 0 0-.023.004L.94 4.623a1.04 1.04 0 0 0-.617 1.788l2.56 2.469.006.005a.03.03 0 0 1 .009.027v.004l-.61 3.568v.001a1.05 1.05 0 0 0 1.526 1.107l3.15-1.665a.09.09 0 0 1 .072 0l3.15 1.664a1.049 1.049 0 0 0 1.527-1.106l-.61-3.57v-.003c-.002-.004-.001-.01 0-.014a.03.03 0 0 1 .008-.013l.006-.005 2.559-2.47a1.04 1.04 0 0 0-.617-1.787l-3.496-.518a.486.486 0 0 0-.023-.004.495.495 0 0 0-.012-.023L7.94.873A1.04 1.04 0 0 0 7 .277Z",
          clipRule: "evenodd"
        },
        void 0,
        !1,
        {
          fileName: "app/modules/knowledgeBase/components/KbFeaturedArticles.tsx",
          lineNumber: 59,
          columnNumber: 9
        },
        this
      ) }, void 0, !1, {
        fileName: "app/modules/knowledgeBase/components/KbFeaturedArticles.tsx",
        lineNumber: 58,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/modules/knowledgeBase/components/KbFeaturedArticles.tsx",
      lineNumber: 50,
      columnNumber: 5
    },
    this
  );
}

// app/routes/$slug.($lang).tsx
var import_jsx_dev_runtime32 = require("react/jsx-dev-runtime"), loader4 = async ({ request, params }) => {
  var _a;
  let kb = await KnowledgeBaseService_default.get({ slug: params.slug, enabled: !0 }), userInfo = await getUserInfo(request);
  await createKnowledgeBaseView({ userAnalyticsId: userInfo.userAnalyticsId, knowledgeBaseId: kb.id });
  let query = (_a = new URL(request.url).searchParams.get("q")) == null ? void 0 : _a.toString(), data = {
    metatags: kb.metatags,
    kb,
    categories: await KnowledgeBaseService_default.getCategories({
      kb,
      params
    }),
    featured: await KnowledgeBaseService_default.getFeaturedArticles({
      kb,
      params
    }),
    query
  };
  return (0, import_node6.defer)(data);
}, meta4 = ({ data }) => data == null ? void 0 : data.metatags;
function Index3() {
  let data = (0, import_remix_typedjson4.useTypedLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(KbHeader, { kb: data.kb, withTitleAndDescription: !0 }, void 0, !1, {
      fileName: "app/routes/$slug.($lang).tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "max-w-5xl mx-auto py-6 px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "space-y-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(KbFeaturedArticles, { kb: data.kb, items: data.featured }, void 0, !1, {
        fileName: "app/routes/$slug.($lang).tsx",
        lineNumber: 58,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(KbCategories, { kb: data.kb, items: data.categories }, void 0, !1, {
        fileName: "app/routes/$slug.($lang).tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/$slug.($lang).tsx",
      lineNumber: 57,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/$slug.($lang).tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/$slug.($lang).tsx",
    lineNumber: 54,
    columnNumber: 5
  }, this);
}
function ErrorBoundary3() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(ServerError, {}, void 0, !1, {
    fileName: "app/routes/$slug.($lang).tsx",
    lineNumber: 67,
    columnNumber: 10
  }, this);
}

// app/routes/api.ai/upload.tsx
var upload_exports = {};
__export(upload_exports, {
  action: () => action3
});
var import_node7 = require("@remix-run/node");

// app/modules/supabase/SupabaseService.ts
var import_supabase_js = require("@supabase/supabase-js");
function getClient() {
  var _a, _b;
  let supabaseUrl = ((_a = process.env.SUPABASE_API_URL) == null ? void 0 : _a.toString()) ?? "", supabaseKey = ((_b = process.env.SUPABASE_KEY) == null ? void 0 : _b.toString()) ?? "";
  return (0, import_supabase_js.createClient)(supabaseUrl, supabaseKey);
}
async function createSupabaseFile(bucketId, path, file, contentType) {
  let client = getClient(), bucket = await getOrCreateSupabaseBucket(bucketId, !0);
  if (!bucket.data)
    throw bucket.error ? Error("Could not create supabase bucket: " + bucket.error.message) : Error("Could not create supabase bucket: Unknown error");
  let createdSupabaseFile = await client.storage.from(bucket.data.id).upload(path, file, {
    contentType
  });
  if (!createdSupabaseFile.data)
    throw createdSupabaseFile.error ? Error("Could not create supabase file: " + JSON.stringify({ error: createdSupabaseFile.error.message, path })) : Error("Could not create supabase file: Unknown error");
  return {
    id: createdSupabaseFile.data.path,
    publicUrl: await getSupabaseFilePublicUrl(bucketId, path)
  };
}
async function getOrCreateSupabaseBucket(id, isPublic) {
  let client = getClient(), existingBucket = await client.storage.getBucket(id);
  if (existingBucket.data)
    return {
      data: existingBucket.data,
      error: existingBucket.error
    };
  let newBucketId = await client.storage.createBucket(id, {
    public: isPublic
  });
  if (newBucketId.data) {
    let newBucket = await client.storage.getBucket(newBucketId.data.name);
    if (newBucket.data)
      return {
        data: newBucket.data,
        error: newBucket.error
      };
  }
  return {
    data: null,
    error: newBucketId.error
  };
}
async function getSupabaseFilePublicUrl(bucketId, path) {
  let supabaseFile = getClient().storage.from(bucketId).getPublicUrl(path);
  if (!supabaseFile.data.publicUrl)
    throw Error("Could not get supabase file: Unknown error");
  return supabaseFile.data.publicUrl;
}
var SupabaseService_default = {
  createSupabaseFile
};

// app/routes/api.ai/upload.tsx
var action3 = async ({ request, params }) => {
  let missingEnvVars = ["SUPABASE_API_URL", "SUPABASE_KEY", "SUPABASE_ANON_PUBLIC_KEY"].filter((envVar) => !process.env[envVar]);
  if (missingEnvVars.length)
    return (0, import_node7.json)("Missing env vars: " + missingEnvVars.join(", "), {
      status: 401
    });
  try {
    let file = request.body || "", filename = request.headers.get("x-filename") || "file.txt", contentType = request.headers.get("content-type") || "text/plain", fileType = `.${contentType.split("/")[1]}`, finalName = filename.includes(fileType) ? filename : `${filename}${fileType}`, path = `${new Date().getTime()}-${finalName}`, response = await SupabaseService_default.createSupabaseFile("saasrock-knowledge-bucket", path, file, contentType);
    return (0, import_node7.json)({ success: !0, url: response.publicUrl });
  } catch (error) {
    return console.error("Error uploading file", error.message), new Response(error.message, { status: 500 });
  }
};

// app/routes/admin.tsx
var admin_exports = {};
__export(admin_exports, {
  default: () => admin_default
});
var import_react32 = require("@remix-run/react");

// app/components/layouts/SidebarLayout.tsx
var import_react29 = require("@headlessui/react"), import_react30 = require("react");

// app/components/layouts/SidebarMenu.tsx
var import_react22 = require("@remix-run/react"), import_react23 = require("react");

// app/application/sidebar/AdminSidebar.tsx
var AdminSidebar = () => [
  {
    title: "",
    path: "",
    items: [
      {
        title: "Dashboard",
        path: "/admin",
        exact: !0,
        icon: '<svg className={className} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 172 172" fill="currentColor"> <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" // style="mix-blend-mode: normal" > <path d="M0,172v-172h172v172z" fill="none" /> <g fill="currentColor"> <path d="M86,11.46667c-1.4986,0.0001 -2.93759,0.58695 -4.00886,1.6349l-62.54036,51.15208c-0.07223,0.05431 -0.14317,0.11031 -0.21276,0.16797l-0.21276,0.17917v0.0112c-1.16235,1.08285 -1.82332,2.59943 -1.82526,4.18802c0,3.16643 2.5669,5.73333 5.73333,5.73333h5.73333v63.06667c0,6.33533 5.13133,11.46667 11.46667,11.46667h91.73333c6.33533,0 11.46667,-5.13133 11.46667,-11.46667v-63.06667h5.73333c3.16643,0 5.73333,-2.5669 5.73333,-5.73333c0.00117,-1.59249 -0.66006,-3.11372 -1.82526,-4.19922l-0.08958,-0.06719c-0.12577,-0.11399 -0.25654,-0.22235 -0.39193,-0.32474l-9.15989,-7.49141v-22.31745c0,-3.1648 -2.56853,-5.73333 -5.73333,-5.73333h-5.73333c-3.1648,0 -5.73333,2.56853 -5.73333,5.73333v8.25286l-36.24766,-29.65208c-1.0562,-0.98184 -2.44361,-1.52961 -3.88567,-1.53411zM103.2,86h22.93333v45.86667h-22.93333z" /> </g> </g> </svg>'
      }
    ]
  },
  {
    title: "Manage",
    path: "",
    items: [
      {
        title: "Knowledge Base",
        path: "/admin/knowledge-base",
        icon: '<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50"> <path d="M 13 2 C 10.792969 2 9 3.792969 9 6 L 9 44.3125 L 9.03125 44.3125 C 9.195313 46.363281 10.910156 48 13 48 L 42 48 L 42 46 L 13 46 C 11.882813 46 11 45.117188 11 44 C 11 42.882813 11.882813 42 13 42 L 42 42 L 42 40 L 13 40 C 11.898438 40 11 39.101563 11 38 C 11 36.898438 11.898438 36 13 36 L 42 36 L 42 2 Z M 16 8 L 35 8 C 35.550781 8 36 8.449219 36 9 L 36 12 C 36 12.550781 35.550781 13 35 13 L 16 13 C 15.449219 13 15 12.550781 15 12 L 15 9 C 15 8.449219 15.449219 8 16 8 Z"></path> </svg>'
      }
    ]
  }
];

// app/components/layouts/SidebarMenu.tsx
var import_react24 = require("@remix-run/react");
var import_clsx12 = __toESM(require("clsx"));

// app/components/layouts/icons/EntityIcon.tsx
var import_jsx_dev_runtime33 = require("react/jsx-dev-runtime");
function EntityIcon({ className, icon, title }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_jsx_dev_runtime33.Fragment, { children: icon && /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_jsx_dev_runtime33.Fragment, { children: icon.startsWith("<svg") ? /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { dangerouslySetInnerHTML: { __html: icon.replace("<svg", `<svg class='${className}'`) ?? "" } }, void 0, !1, {
    fileName: "app/components/layouts/icons/EntityIcon.tsx",
    lineNumber: 7,
    columnNumber: 13
  }, this) : icon.includes("http") ? /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("img", { className, src: icon, alt: title }, void 0, !1, {
    fileName: "app/components/layouts/icons/EntityIcon.tsx",
    lineNumber: 9,
    columnNumber: 13
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_jsx_dev_runtime33.Fragment, {}, void 0, !1, {
    fileName: "app/components/layouts/icons/EntityIcon.tsx",
    lineNumber: 11,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/layouts/icons/EntityIcon.tsx",
    lineNumber: 5,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/layouts/icons/EntityIcon.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/components/layouts/SidebarMenu.tsx
var import_jsx_dev_runtime34 = require("react/jsx-dev-runtime");
function SidebarMenu({ layout, onSelected }) {
  let params = (0, import_react24.useParams)(), location = (0, import_react22.useLocation)(), [menu, setMenu] = (0, import_react23.useState)([]), [expanded, setExpanded] = (0, import_react23.useState)([]);
  (0, import_react23.useEffect)(() => {
    let menu2 = [];
    layout === "admin" ? menu2 = AdminSidebar() : layout === "app" ? menu2 = [] : layout === "docs" && (menu2 = []);
    function clearItemsIfNotCollapsible(items) {
      items.forEach((item) => {
        item.isCollapsible !== void 0 && !item.isCollapsible && (item.items = []), item.items && clearItemsIfNotCollapsible(item.items);
      });
    }
    clearItemsIfNotCollapsible(menu2), menu2.forEach((item) => {
      var _a;
      item.isCollapsible !== void 0 && !item.isCollapsible && (item.items = []), (_a = item.items) == null || _a.forEach((subitem) => {
        subitem.isCollapsible !== void 0 && !subitem.isCollapsible && (subitem.items = []);
      });
    }), menu2.forEach((group) => {
      var _a;
      (_a = group.items) == null || _a.forEach((element) => {
        element.open || isCurrent(element) || currentIsChild(element) ? expanded.push(element.path) : setExpanded(expanded.filter((f) => f !== element.path));
      });
    }), setMenu(menu2);
  }, [location.pathname]);
  function menuItemIsExpanded(path) {
    return expanded.includes(path);
  }
  function toggleMenuItem(path) {
    expanded.includes(path) ? setExpanded(expanded.filter((item) => item !== path)) : setExpanded([...expanded, path]);
  }
  function getPath(item) {
    return UrlUtils_default.replaceVariables(params, item.path) ?? "";
  }
  function isCurrent(menuItem) {
    var _a;
    if (menuItem.path)
      return menuItem.exact ? location.pathname === getPath(menuItem) : (_a = location.pathname) == null ? void 0 : _a.includes(getPath(menuItem));
  }
  function currentIsChild(menuItem) {
    var _a;
    let hasOpenChild = !1;
    return (_a = menuItem.items) == null || _a.forEach((item) => {
      isCurrent(item) && (hasOpenChild = !0);
    }), hasOpenChild;
  }
  let getMenu = () => {
    function filterItem(f) {
      return f;
    }
    let _menu = [];
    return menu.filter((f) => f).forEach(({ title, items }) => {
      _menu.push({
        title: title.toString(),
        items: (items == null ? void 0 : items.filter((f) => f).map((f) => {
          var _a;
          return {
            ...f,
            items: (_a = f.items) == null ? void 0 : _a.filter((f2) => f2)
          };
        })) ?? []
      });
    }), _menu.filter((f) => f.items.length > 0);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "space-y-1 divide-y-2 divide-slate-800 sm:hidden", children: getMenu().map((group, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "mt-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { id: group.title, className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("h3", { className: "px-1 text-xs font-semibold uppercase leading-4 tracking-wider text-slate-500", children: group.title }, void 0, !1, {
        fileName: "app/components/layouts/SidebarMenu.tsx",
        lineNumber: 133,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/layouts/SidebarMenu.tsx",
        lineNumber: 132,
        columnNumber: 15
      }, this),
      group.items.map((menuItem, index2) => /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { children: (() => !menuItem.items || menuItem.items.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { children: menuItem.path.includes("://") ? /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
        "a",
        {
          target: "_blank",
          href: menuItem.path,
          rel: "noreferrer",
          className: (0, import_clsx12.default)(
            "group mt-1 flex items-center space-x-4 rounded-sm px-4 py-2 text-base leading-5 text-slate-300 transition duration-150 ease-in-out hover:bg-slate-800 hover:text-white focus:bg-slate-800 focus:text-gray-50 focus:outline-none"
          ),
          onClick: onSelected,
          children: [
            menuItem.icon !== void 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(EntityIcon, { className: "h-5 w-5 text-white", icon: menuItem.icon }, void 0, !1, {
              fileName: "app/components/layouts/SidebarMenu.tsx",
              lineNumber: 152,
              columnNumber: 65
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { children: menuItem.title }, void 0, !1, {
              fileName: "app/components/layouts/SidebarMenu.tsx",
              lineNumber: 153,
              columnNumber: 33
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/layouts/SidebarMenu.tsx",
          lineNumber: 143,
          columnNumber: 31
        },
        this
      ) : /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
        import_react22.Link,
        {
          id: UrlUtils_default.slugify(getPath(menuItem)),
          to: menuItem.redirectTo ?? getPath(menuItem),
          className: (0, import_clsx12.default)(
            "group mt-1 flex items-center space-x-4 rounded-sm px-4 py-2 text-base leading-5 text-slate-300 transition duration-150 ease-in-out hover:text-white focus:text-gray-50 focus:outline-none",
            isCurrent(menuItem) && "bg-theme-600 text-slate-300 focus:bg-theme-700",
            !isCurrent(menuItem) && "text-slate-200 hover:bg-slate-800 focus:bg-slate-800"
          ),
          onClick: onSelected,
          children: [
            menuItem.icon !== void 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(EntityIcon, { className: "h-5 w-5 text-white", icon: menuItem.icon }, void 0, !1, {
              fileName: "app/components/layouts/SidebarMenu.tsx",
              lineNumber: 166,
              columnNumber: 65
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { children: menuItem.title }, void 0, !1, {
              fileName: "app/components/layouts/SidebarMenu.tsx",
              lineNumber: 167,
              columnNumber: 33
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/layouts/SidebarMenu.tsx",
          lineNumber: 156,
          columnNumber: 31
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/layouts/SidebarMenu.tsx",
        lineNumber: 141,
        columnNumber: 27
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
          "div",
          {
            className: "group mt-1 flex items-center justify-between rounded-sm px-4 py-2 text-base leading-5 text-slate-200 transition duration-150 ease-in-out hover:bg-slate-800 hover:text-white focus:bg-slate-800 focus:text-gray-50 focus:outline-none",
            onClick: () => toggleMenuItem(menuItem.path),
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
                menuItem.icon !== void 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("span", { className: "h-5 w-5 text-slate-200 transition ease-in-out", children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(EntityIcon, { className: "h-5 w-5 text-white", icon: menuItem.icon }, void 0, !1, {
                  fileName: "app/components/layouts/SidebarMenu.tsx",
                  lineNumber: 182,
                  columnNumber: 37
                }, this) }, void 0, !1, {
                  fileName: "app/components/layouts/SidebarMenu.tsx",
                  lineNumber: 181,
                  columnNumber: 35
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { children: menuItem.title }, void 0, !1, {
                  fileName: "app/components/layouts/SidebarMenu.tsx",
                  lineNumber: 185,
                  columnNumber: 33
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/layouts/SidebarMenu.tsx",
                lineNumber: 179,
                columnNumber: 31
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
                "svg",
                {
                  className: (0, import_clsx12.default)(
                    "ml-auto h-5 w-5 transform transition-colors duration-150 ease-in-out",
                    menuItemIsExpanded(menuItem.path) ? "ml-auto h-3 w-3 rotate-90 transform transition-colors duration-150 ease-in-out group-hover:text-gray-400 group-focus:text-gray-400" : "ml-auto h-3 w-3 transform transition-colors duration-150 ease-in-out group-hover:text-gray-400 group-focus:text-gray-400"
                  ),
                  viewBox: "0 0 20 20",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("path", { d: "M6 6L14 10L6 14V6Z", fill: "currentColor" }, void 0, !1, {
                    fileName: "app/components/layouts/SidebarMenu.tsx",
                    lineNumber: 197,
                    columnNumber: 33
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/components/layouts/SidebarMenu.tsx",
                  lineNumber: 188,
                  columnNumber: 31
                },
                this
              )
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/layouts/SidebarMenu.tsx",
            lineNumber: 175,
            columnNumber: 29
          },
          this
        ),
        menuItemIsExpanded(menuItem.path) && /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "mt-1", children: menuItem.items.map((subItem, index3) => /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_react23.Fragment, { children: [
          menuItem.path.includes("://") ? /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
            "a",
            {
              target: "_blank",
              href: menuItem.path,
              rel: "noreferrer",
              className: (0, import_clsx12.default)(
                "group mt-1 flex items-center rounded-sm py-2 pl-14 leading-5 text-slate-200 transition duration-150 ease-in-out hover:bg-slate-800 hover:text-slate-300 focus:bg-slate-800 focus:text-slate-300 focus:outline-none sm:text-sm"
              ),
              onClick: onSelected,
              children: [
                subItem.icon !== void 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("span", { className: "mr-1 h-5 w-5 transition ease-in-out", children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(EntityIcon, { className: "h-5 w-5 text-white", icon: subItem.icon }, void 0, !1, {
                  fileName: "app/components/layouts/SidebarMenu.tsx",
                  lineNumber: 218,
                  columnNumber: 47
                }, this) }, void 0, !1, {
                  fileName: "app/components/layouts/SidebarMenu.tsx",
                  lineNumber: 217,
                  columnNumber: 45
                }, this),
                subItem.title
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/layouts/SidebarMenu.tsx",
              lineNumber: 207,
              columnNumber: 41
            },
            this
          ) : /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
            import_react22.Link,
            {
              id: UrlUtils_default.slugify(getPath(subItem)),
              to: subItem.redirectTo ?? getPath(subItem),
              className: (0, import_clsx12.default)(
                "group mt-1 flex items-center rounded-sm py-2 pl-14 leading-5 transition duration-150 ease-in-out hover:text-slate-300 focus:text-slate-300 focus:outline-none sm:text-sm",
                isCurrent(subItem) && "bg-theme-600 text-slate-300 focus:bg-theme-700",
                !isCurrent(subItem) && "text-slate-200 hover:bg-slate-800 focus:bg-slate-800"
              ),
              onClick: onSelected,
              children: [
                subItem.icon !== void 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("span", { className: "mr-1 h-5 w-5 transition ease-in-out", children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(EntityIcon, { className: "h-5 w-5 text-white", icon: subItem.icon }, void 0, !1, {
                  fileName: "app/components/layouts/SidebarMenu.tsx",
                  lineNumber: 237,
                  columnNumber: 47
                }, this) }, void 0, !1, {
                  fileName: "app/components/layouts/SidebarMenu.tsx",
                  lineNumber: 236,
                  columnNumber: 45
                }, this),
                subItem.title
              ]
            },
            index3,
            !0,
            {
              fileName: "app/components/layouts/SidebarMenu.tsx",
              lineNumber: 224,
              columnNumber: 41
            },
            this
          ),
          " "
        ] }, index3, !0, {
          fileName: "app/components/layouts/SidebarMenu.tsx",
          lineNumber: 205,
          columnNumber: 37
        }, this)) }, void 0, !1, {
          fileName: "app/components/layouts/SidebarMenu.tsx",
          lineNumber: 202,
          columnNumber: 31
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/layouts/SidebarMenu.tsx",
        lineNumber: 174,
        columnNumber: 27
      }, this))() }, index2, !1, {
        fileName: "app/components/layouts/SidebarMenu.tsx",
        lineNumber: 137,
        columnNumber: 19
      }, this))
    ] }, index, !0, {
      fileName: "app/components/layouts/SidebarMenu.tsx",
      lineNumber: 131,
      columnNumber: 13
    }, this)) }, void 0, !1, {
      fileName: "app/components/layouts/SidebarMenu.tsx",
      lineNumber: 128,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "hidden space-y-1 divide-y-2 divide-slate-800 sm:block", children: getMenu().map((group, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "select-none", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("h3", { id: "Group-headline", className: "px-1 text-xs font-semibold uppercase leading-4 tracking-wider text-slate-500", children: group.title }, void 0, !1, {
        fileName: "app/components/layouts/SidebarMenu.tsx",
        lineNumber: 266,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/layouts/SidebarMenu.tsx",
        lineNumber: 265,
        columnNumber: 15
      }, this),
      group.items.map((menuItem, index2) => /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { children: (() => !menuItem.items || menuItem.items.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { children: menuItem.path.includes("://") ? /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
        "a",
        {
          target: "_blank",
          href: menuItem.path,
          rel: "noreferrer",
          className: (0, import_clsx12.default)(
            "group mt-1 flex items-center justify-between truncate rounded-sm px-4 py-2 text-sm leading-5 text-slate-200 transition duration-150 ease-in-out hover:bg-slate-800 hover:text-white focus:bg-slate-800 focus:text-gray-50 focus:outline-none",
            menuItem.icon !== void 0 && "px-4"
          ),
          onClick: onSelected,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "flex items-center space-x-5", children: [
              menuItem.icon !== void 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(EntityIcon, { className: "h-5 w-5 text-white", icon: menuItem.icon }, void 0, !1, {
                fileName: "app/components/layouts/SidebarMenu.tsx",
                lineNumber: 289,
                columnNumber: 67
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { children: menuItem.title }, void 0, !1, {
                fileName: "app/components/layouts/SidebarMenu.tsx",
                lineNumber: 290,
                columnNumber: 35
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/layouts/SidebarMenu.tsx",
              lineNumber: 288,
              columnNumber: 33
            }, this),
            menuItem.side
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/layouts/SidebarMenu.tsx",
          lineNumber: 278,
          columnNumber: 31
        },
        this
      ) : /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
        import_react22.Link,
        {
          id: UrlUtils_default.slugify(getPath(menuItem)),
          to: menuItem.redirectTo ?? getPath(menuItem),
          className: (0, import_clsx12.default)(
            "group mt-1 flex items-center justify-between truncate rounded-sm px-4 py-2 text-sm leading-5 text-slate-300 transition duration-150 ease-in-out hover:text-white focus:text-gray-50 focus:outline-none",
            menuItem.icon !== void 0 && "px-4",
            isCurrent(menuItem) && "bg-theme-600 text-slate-300 focus:bg-theme-700",
            !isCurrent(menuItem) && "text-slate-200 hover:bg-slate-800 focus:bg-slate-800"
          ),
          onClick: onSelected,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "flex items-center space-x-5", children: [
              menuItem.icon !== void 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(EntityIcon, { className: "h-5 w-5 text-white", icon: menuItem.icon }, void 0, !1, {
                fileName: "app/components/layouts/SidebarMenu.tsx",
                lineNumber: 307,
                columnNumber: 67
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { children: menuItem.title }, void 0, !1, {
                fileName: "app/components/layouts/SidebarMenu.tsx",
                lineNumber: 308,
                columnNumber: 35
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/layouts/SidebarMenu.tsx",
              lineNumber: 306,
              columnNumber: 33
            }, this),
            menuItem.side
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/layouts/SidebarMenu.tsx",
          lineNumber: 295,
          columnNumber: 31
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/layouts/SidebarMenu.tsx",
        lineNumber: 276,
        columnNumber: 27
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
          "button",
          {
            type: "button",
            className: "group mt-1 flex w-full items-center justify-between truncate rounded-sm px-4 py-2 text-sm leading-5 text-slate-200 transition duration-150 ease-in-out hover:bg-slate-800 hover:text-white focus:bg-slate-800 focus:text-gray-50 focus:outline-none",
            onClick: () => toggleMenuItem(menuItem.path),
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "flex items-center space-x-5", children: [
                menuItem.icon !== void 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(EntityIcon, { className: "h-5 w-5 text-white", icon: menuItem.icon }, void 0, !1, {
                  fileName: "app/components/layouts/SidebarMenu.tsx",
                  lineNumber: 324,
                  columnNumber: 65
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { children: menuItem.title }, void 0, !1, {
                  fileName: "app/components/layouts/SidebarMenu.tsx",
                  lineNumber: 325,
                  columnNumber: 33
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/layouts/SidebarMenu.tsx",
                lineNumber: 323,
                columnNumber: 31
              }, this),
              menuItem.side ?? /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
                "svg",
                {
                  className: (0, import_clsx12.default)(
                    "ml-auto h-5 w-5 transform bg-slate-900 transition-colors duration-150 ease-in-out",
                    menuItemIsExpanded(menuItem.path) ? "ml-auto h-3 w-3 rotate-90 transform  transition-colors duration-150 ease-in-out" : "ml-auto h-3 w-3 transform  transition-colors duration-150 ease-in-out"
                  ),
                  viewBox: "0 0 20 20",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("path", { d: "M6 6L14 10L6 14V6Z", fill: "currentColor" }, void 0, !1, {
                    fileName: "app/components/layouts/SidebarMenu.tsx",
                    lineNumber: 339,
                    columnNumber: 35
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/components/layouts/SidebarMenu.tsx",
                  lineNumber: 330,
                  columnNumber: 33
                },
                this
              )
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/layouts/SidebarMenu.tsx",
            lineNumber: 318,
            columnNumber: 29
          },
          this
        ),
        menuItemIsExpanded(menuItem.path) && /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "mt-1", children: menuItem.items.map((subItem, index3) => /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_react23.Fragment, { children: menuItem.path.includes("://") ? /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
          "a",
          {
            target: "_blank",
            href: menuItem.path,
            rel: "noreferrer",
            className: (0, import_clsx12.default)(
              isCurrent(subItem) && "bg-theme-600 text-slate-300 focus:bg-theme-700",
              "group mt-1 flex items-center rounded-sm py-2 text-sm leading-5 text-slate-300 transition duration-150 ease-in-out hover:text-white focus:text-gray-50 focus:outline-none ",
              menuItem.icon === void 0 && "pl-10",
              menuItem.icon !== void 0 && "pl-14"
            ),
            onClick: onSelected,
            children: [
              subItem.icon !== void 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(EntityIcon, { className: "h-5 w-5 text-white", icon: subItem.icon }, void 0, !1, {
                fileName: "app/components/layouts/SidebarMenu.tsx",
                lineNumber: 363,
                columnNumber: 74
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { children: subItem.title }, void 0, !1, {
                fileName: "app/components/layouts/SidebarMenu.tsx",
                lineNumber: 364,
                columnNumber: 43
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/layouts/SidebarMenu.tsx",
            lineNumber: 351,
            columnNumber: 41
          },
          this
        ) : /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
          import_react22.Link,
          {
            id: UrlUtils_default.slugify(getPath(subItem)),
            to: subItem.redirectTo ?? getPath(subItem),
            className: (0, import_clsx12.default)(
              "group mt-1 flex items-center rounded-sm py-2 text-sm leading-5 text-slate-300 transition duration-150 ease-in-out hover:text-white focus:text-gray-50 focus:outline-none",
              menuItem.icon === void 0 && "pl-10",
              menuItem.icon !== void 0 && "pl-14",
              isCurrent(subItem) && "bg-theme-600 text-slate-300 focus:bg-theme-700",
              !isCurrent(subItem) && "text-slate-200 hover:bg-slate-800 focus:bg-slate-800"
            ),
            onClick: onSelected,
            children: [
              subItem.icon !== void 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(EntityIcon, { className: "h-5 w-5 text-white", icon: subItem.icon }, void 0, !1, {
                fileName: "app/components/layouts/SidebarMenu.tsx",
                lineNumber: 379,
                columnNumber: 74
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { children: subItem.title }, void 0, !1, {
                fileName: "app/components/layouts/SidebarMenu.tsx",
                lineNumber: 380,
                columnNumber: 43
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/layouts/SidebarMenu.tsx",
            lineNumber: 367,
            columnNumber: 41
          },
          this
        ) }, index3, !1, {
          fileName: "app/components/layouts/SidebarMenu.tsx",
          lineNumber: 349,
          columnNumber: 37
        }, this)) }, void 0, !1, {
          fileName: "app/components/layouts/SidebarMenu.tsx",
          lineNumber: 346,
          columnNumber: 31
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/layouts/SidebarMenu.tsx",
        lineNumber: 317,
        columnNumber: 27
      }, this))() }, index2, !1, {
        fileName: "app/components/layouts/SidebarMenu.tsx",
        lineNumber: 272,
        columnNumber: 19
      }, this))
    ] }, index, !0, {
      fileName: "app/components/layouts/SidebarMenu.tsx",
      lineNumber: 264,
      columnNumber: 13
    }, this)) }, void 0, !1, {
      fileName: "app/components/layouts/SidebarMenu.tsx",
      lineNumber: 261,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/layouts/SidebarMenu.tsx",
    lineNumber: 126,
    columnNumber: 5
  }, this);
}

// app/components/layouts/SidebarLayout.tsx
var import_react31 = require("@remix-run/react");

// app/utils/app/scroll-restoration.tsx
var import_react25 = require("react"), import_react26 = require("react"), import_react27 = require("react"), import_react28 = require("@remix-run/react"), import_jsx_dev_runtime35 = require("react/jsx-dev-runtime"), STORAGE_KEY = "positions", positions = {};
if (typeof document < "u") {
  let sessionPositions = sessionStorage.getItem(STORAGE_KEY);
  sessionPositions && (positions = JSON.parse(sessionPositions));
}
function useElementScrollRestoration({ apply }, ref) {
  let positions2 = (0, import_react25.useRef)(/* @__PURE__ */ new Map()).current, location = (0, import_react28.useLocation)(), pendingLocation = (0, import_react28.useTransition)().location;
  (0, import_react26.useEffect)(() => {
    !ref.current || !apply || pendingLocation && positions2.set(location.key, ref.current.scrollTop);
  }, [pendingLocation, location]), typeof window < "u" && (0, import_react27.useLayoutEffect)(() => {
    if (!ref.current || !apply)
      return;
    let y = positions2.get(location.key);
    ref.current.scrollTo(0, y || 0);
  }, [location]);
}

// app/components/layouts/SidebarLayout.tsx
var import_jsx_dev_runtime36 = require("react/jsx-dev-runtime");
function SidebarLayout({ layout, children }) {
  let params = (0, import_react31.useParams)(), mainElement = (0, import_react30.useRef)(null);
  useElementScrollRestoration({ apply: !0 }, mainElement);
  let [sidebarOpen, setSidebarOpen] = (0, import_react30.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "flex h-screen overflow-hidden bg-gray-100 text-gray-800", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "md:hidden", children: sidebarOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "fixed inset-0 z-40 flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
        import_react29.Transition,
        {
          as: import_react30.Fragment,
          show: sidebarOpen,
          enter: "transition-opacity ease-linear duration-300",
          enterFrom: "opacity-0",
          enterTo: "opacity-100",
          leave: "transition-opacity ease-linear duration-300",
          leaveFrom: "opacity-100",
          leaveTo: "opacity-0",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "fixed inset-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "absolute inset-0 bg-gray-800 opacity-75" }, void 0, !1, {
            fileName: "app/components/layouts/SidebarLayout.tsx",
            lineNumber: 39,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/components/layouts/SidebarLayout.tsx",
            lineNumber: 38,
            columnNumber: 17
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/layouts/SidebarLayout.tsx",
          lineNumber: 28,
          columnNumber: 15
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
        import_react29.Transition,
        {
          as: import_react30.Fragment,
          show: sidebarOpen,
          enter: "transition ease-in-out duration-300 transform",
          enterFrom: "-translate-x-full",
          enterTo: "translate-x-0",
          leave: "transition ease-in-out duration-300 transform",
          leaveFrom: "translate-x-0",
          leaveTo: "-translate-x-full",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "relative flex w-full max-w-xs flex-1 flex-col bg-gray-900", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "absolute right-0 top-0 -mr-14 mt-2 p-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
              "button",
              {
                className: "flex h-12 w-12 items-center justify-center rounded-sm focus:bg-gray-600 focus:outline-none",
                "aria-label": "Close sidebar",
                onClick: () => setSidebarOpen(!sidebarOpen),
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("svg", { className: "h-7 w-7 text-white", stroke: "currentColor", fill: "none", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M6 18L18 6M6 6l12 12" }, void 0, !1, {
                  fileName: "app/components/layouts/SidebarLayout.tsx",
                  lineNumber: 61,
                  columnNumber: 25
                }, this) }, void 0, !1, {
                  fileName: "app/components/layouts/SidebarLayout.tsx",
                  lineNumber: 60,
                  columnNumber: 23
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/components/layouts/SidebarLayout.tsx",
                lineNumber: 55,
                columnNumber: 21
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/layouts/SidebarLayout.tsx",
              lineNumber: 54,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "mt-5 h-0 flex-1 overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("nav", { className: "space-y-3 px-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "flex flex-col space-y-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_react31.Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("img", { className: "mx-auto h-8 w-auto", src: logo_dark_default, alt: "Logo" }, void 0, !1, {
                fileName: "app/components/layouts/SidebarLayout.tsx",
                lineNumber: 69,
                columnNumber: 27
              }, this) }, void 0, !1, {
                fileName: "app/components/layouts/SidebarLayout.tsx",
                lineNumber: 68,
                columnNumber: 25
              }, this) }, void 0, !1, {
                fileName: "app/components/layouts/SidebarLayout.tsx",
                lineNumber: 67,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(SidebarMenu, { layout, onSelected: () => setSidebarOpen(!sidebarOpen) }, void 0, !1, {
                fileName: "app/components/layouts/SidebarLayout.tsx",
                lineNumber: 72,
                columnNumber: 23
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/layouts/SidebarLayout.tsx",
              lineNumber: 66,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/components/layouts/SidebarLayout.tsx",
              lineNumber: 65,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/layouts/SidebarLayout.tsx",
            lineNumber: 53,
            columnNumber: 17
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/layouts/SidebarLayout.tsx",
          lineNumber: 43,
          columnNumber: 15
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "w-14 flex-shrink-0" }, void 0, !1, {
        fileName: "app/components/layouts/SidebarLayout.tsx",
        lineNumber: 77,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/layouts/SidebarLayout.tsx",
      lineNumber: 27,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/layouts/SidebarLayout.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
      "div",
      {
        className: sidebarOpen ? "hidden transition duration-1000 ease-in" : "hidden overflow-x-hidden border-r border-theme-200 shadow-sm dark:border-r-0 dark:border-theme-800 dark:shadow-lg md:flex md:flex-shrink-0",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "flex w-64 flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "flex h-0 flex-1 flex-col bg-theme-600 shadow-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "flex flex-1 flex-col overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("nav", { className: "flex-1 select-none space-y-3 bg-gray-900 px-2 py-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "flex flex-col space-y-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_react31.Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("img", { className: "mx-auto h-8 w-auto", src: logo_dark_default, alt: "Logo" }, void 0, !1, {
            fileName: "app/components/layouts/SidebarLayout.tsx",
            lineNumber: 96,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/components/layouts/SidebarLayout.tsx",
            lineNumber: 95,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/components/layouts/SidebarLayout.tsx",
            lineNumber: 94,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(SidebarMenu, { layout }, void 0, !1, {
            fileName: "app/components/layouts/SidebarLayout.tsx",
            lineNumber: 99,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/layouts/SidebarLayout.tsx",
          lineNumber: 93,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/components/layouts/SidebarLayout.tsx",
          lineNumber: 92,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/layouts/SidebarLayout.tsx",
          lineNumber: 91,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/layouts/SidebarLayout.tsx",
          lineNumber: 90,
          columnNumber: 11
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/layouts/SidebarLayout.tsx",
        lineNumber: 83,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "flex w-0 flex-1 flex-col overflow-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "relative flex h-14 flex-shrink-0 border-b border-gray-200 bg-white shadow-inner", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
          "button",
          {
            className: "border-r border-gray-200 px-4 text-gray-600 focus:bg-gray-100 focus:text-gray-600 focus:outline-none",
            "aria-label": "Open sidebar",
            onClick: () => setSidebarOpen(!sidebarOpen),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("svg", { className: "h-5 w-5", stroke: "currentColor", fill: "none", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M4 6h16M4 12h16M4 18h7" }, void 0, !1, {
              fileName: "app/components/layouts/SidebarLayout.tsx",
              lineNumber: 115,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/components/layouts/SidebarLayout.tsx",
              lineNumber: 114,
              columnNumber: 15
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/layouts/SidebarLayout.tsx",
            lineNumber: 109,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(NavBar, { title: "Admin" }, void 0, !1, {
          fileName: "app/components/layouts/SidebarLayout.tsx",
          lineNumber: 119,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/layouts/SidebarLayout.tsx",
        lineNumber: 108,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("main", { ref: mainElement, className: "flex-1 overflow-y-auto bg-gray-50 focus:outline-none", tabIndex: 0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "pb-20 sm:pb-0", children }, params.tenant, !1, {
        fileName: "app/components/layouts/SidebarLayout.tsx",
        lineNumber: 123,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/layouts/SidebarLayout.tsx",
        lineNumber: 122,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/layouts/SidebarLayout.tsx",
      lineNumber: 107,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/layouts/SidebarLayout.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/layouts/SidebarLayout.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}
function NavBar({ title }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "flex flex-1 justify-between space-x-2 px-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "flex flex-1 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "font-extrabold", children: title }, void 0, !1, {
    fileName: "app/components/layouts/SidebarLayout.tsx",
    lineNumber: 137,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/layouts/SidebarLayout.tsx",
    lineNumber: 136,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/layouts/SidebarLayout.tsx",
    lineNumber: 135,
    columnNumber: 5
  }, this);
}

// app/routes/admin.tsx
var import_jsx_dev_runtime37 = require("react/jsx-dev-runtime");
function admin_default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(SidebarLayout, { layout: "admin", children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_react32.Outlet, {}, void 0, !1, {
    fileName: "app/routes/admin.tsx",
    lineNumber: 9,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/admin.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/admin.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/routes/admin/knowledge-base.tsx
var knowledge_base_exports = {};
__export(knowledge_base_exports, {
  ErrorBoundary: () => ErrorBoundary4,
  default: () => knowledge_base_default,
  loader: () => loader5
});
var import_node8 = require("@remix-run/node"), import_react38 = require("@remix-run/react");

// app/components/ui/errors/ServerError.tsx
var import_react33 = require("@remix-run/react");
var import_jsx_dev_runtime38 = require("react/jsx-dev-runtime");
function ServerError2() {
  var _a, _b, _c;
  let error = (0, import_react33.useRouteError)();
  return (error == null ? void 0 : error.status) === 404 ? /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(Page404, {}, void 0, !1, {
    fileName: "app/components/ui/errors/ServerError.tsx",
    lineNumber: 9,
    columnNumber: 12
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "px-4 py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "mx-auto w-full space-y-2 rounded-md border-2 border-dashed border-gray-300 bg-white p-12 text-center text-gray-800 shadow-md", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "flex flex-col justify-center space-y-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "mx-auto text-red-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("svg", { className: "h-6 w-6", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
        },
        void 0,
        !1,
        {
          fileName: "app/components/ui/errors/ServerError.tsx",
          lineNumber: 17,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/ui/errors/ServerError.tsx",
        lineNumber: 16,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/ui/errors/ServerError.tsx",
        lineNumber: 15,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "text-2xl font-bold text-gray-800", children: ((_a = error == null ? void 0 : error.data) == null ? void 0 : _a.message) ?? (error == null ? void 0 : error.message) ?? "Error" }, void 0, !1, {
        fileName: "app/components/ui/errors/ServerError.tsx",
        lineNumber: 25,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ui/errors/ServerError.tsx",
      lineNumber: 14,
      columnNumber: 9
    }, this),
    ((_b = error == null ? void 0 : error.data) == null ? void 0 : _b.description) && /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "text-gray-800", children: (_c = error == null ? void 0 : error.data) == null ? void 0 : _c.description }, void 0, !1, {
      fileName: "app/components/ui/errors/ServerError.tsx",
      lineNumber: 28,
      columnNumber: 38
    }, this),
    (error == null ? void 0 : error.stack) && /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "pt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "break-words border-t border-dashed border-gray-300 pt-3 text-left text-sm text-gray-600", children: error.stack }, void 0, !1, {
      fileName: "app/components/ui/errors/ServerError.tsx",
      lineNumber: 33,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/ui/errors/ServerError.tsx",
      lineNumber: 31,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ui/errors/ServerError.tsx",
    lineNumber: 13,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/ui/errors/ServerError.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/components/ui/layouts/SidebarIconsLayout.tsx
var import_react36 = require("@remix-run/react"), import_clsx14 = __toESM(require("clsx")), import_react37 = require("react");

// app/components/ui/tabs/Tabs.tsx
var import_react34 = require("@remix-run/react"), import_clsx13 = __toESM(require("clsx")), import_react35 = require("react");
var import_jsx_dev_runtime39 = require("react/jsx-dev-runtime");
function Tabs({ className = "", breakpoint = "md", tabs = [], asLinks = !0, onSelected, exact, selectedTab = 0 }) {
  let navigate = (0, import_react34.useNavigate)(), location = (0, import_react34.useLocation)(), [selected, setSelected] = (0, import_react35.useState)(selectedTab);
  (0, import_react35.useEffect)(() => {
    selectedTab !== selected && setSelected(selectedTab);
  }, [selected, selectedTab]), (0, import_react35.useEffect)(() => {
    if (asLinks) {
      let index = 0;
      tabs.forEach((tab, idx) => {
        exact ? tab.routePath && UrlUtils_default.stripTrailingSlash(location.pathname) === UrlUtils_default.stripTrailingSlash(tab.routePath) && (index = idx) : tab.routePath && (location.pathname + location.search).includes(tab.routePath) && (index = idx);
      }), setSelected(index);
    }
  }, [location.pathname, location.search, tabs, asLinks, exact]);
  function selectTab(idx) {
    let tab = tabs[idx];
    setSelected(idx), asLinks ? tab != null && tab.routePath && navigate(tab.routePath) : onSelected && onSelected(idx);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
      "div",
      {
        className: (0, import_clsx13.default)(
          breakpoint === "sm" && "sm:hidden",
          breakpoint === "md" && "md:hidden",
          breakpoint === "lg" && "lg:hidden",
          breakpoint === "xl" && "xl:hidden",
          breakpoint === "2xl" && "2xl:hidden"
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("label", { htmlFor: "tabs", className: "sr-only", children: "Select" }, void 0, !1, {
            fileName: "app/components/ui/tabs/Tabs.tsx",
            lineNumber: 75,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
            "select",
            {
              id: "tabs",
              name: "tabs",
              className: "block w-full rounded-md border-gray-300 focus:border-accent-500 focus:ring-accent-500",
              onChange: (e) => selectTab(Number(e.target.value)),
              value: selected,
              children: tabs.map((tab, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("option", { value: Number(idx), children: tab.name }, tab.name, !1, {
                fileName: "app/components/ui/tabs/Tabs.tsx",
                lineNumber: 87,
                columnNumber: 15
              }, this))
            },
            void 0,
            !1,
            {
              fileName: "app/components/ui/tabs/Tabs.tsx",
              lineNumber: 78,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/ui/tabs/Tabs.tsx",
        lineNumber: 66,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
      "div",
      {
        className: (0, import_clsx13.default)(
          breakpoint === "sm" && "hidden sm:block",
          breakpoint === "md" && "hidden md:block",
          breakpoint === "lg" && "hidden lg:block",
          breakpoint === "xl" && "hidden xl:block",
          breakpoint === "2xl" && "hidden 2xl:block"
        ),
        children: (() => asLinks ? /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("nav", { className: "flex space-x-4", "aria-label": "Tabs", children: tabs.filter((f) => f.routePath).map((tab, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
          import_react34.Link,
          {
            to: tab.routePath ?? "",
            className: (0, import_clsx13.default)(
              "truncate border",
              idx === selected ? "border-accent-300 bg-accent-100 text-accent-700" : "text-gray-500 hover:bg-gray-50 hover:text-gray-700",
              "rounded-sm border-transparent px-3 py-2 text-sm font-medium"
            ),
            "aria-current": idx === selected ? "page" : void 0,
            children: tab.name
          },
          tab.name,
          !1,
          {
            fileName: "app/components/ui/tabs/Tabs.tsx",
            lineNumber: 111,
            columnNumber: 23
          },
          this
        )) }, void 0, !1, {
          fileName: "app/components/ui/tabs/Tabs.tsx",
          lineNumber: 106,
          columnNumber: 15
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("nav", { className: "flex space-x-4", "aria-label": "Tabs", children: tabs.map((tab, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
          "button",
          {
            type: "button",
            onClick: () => selectTab(idx),
            className: (0, import_clsx13.default)(
              "truncate",
              idx === selected ? "border border-accent-300 bg-accent-100 text-accent-700" : "text-gray-500 hover:bg-gray-50 hover:text-gray-700",
              "rounded-sm border-transparent px-3 py-2 text-sm font-medium"
            ),
            children: tab.name
          },
          idx,
          !1,
          {
            fileName: "app/components/ui/tabs/Tabs.tsx",
            lineNumber: 132,
            columnNumber: 21
          },
          this
        )) }, void 0, !1, {
          fileName: "app/components/ui/tabs/Tabs.tsx",
          lineNumber: 129,
          columnNumber: 15
        }, this))()
      },
      void 0,
      !1,
      {
        fileName: "app/components/ui/tabs/Tabs.tsx",
        lineNumber: 94,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/ui/tabs/Tabs.tsx",
    lineNumber: 65,
    columnNumber: 5
  }, this);
}

// app/components/ui/layouts/SidebarIconsLayout.tsx
var import_jsx_dev_runtime40 = require("react/jsx-dev-runtime");
function SidebarIconsLayout({
  children,
  items,
  label
}) {
  let location = (0, import_react36.useLocation)(), [currentTab, setCurrentTab] = (0, import_react37.useState)(), mainElement = (0, import_react37.useRef)(null);
  return useElementScrollRestoration({ apply: !0 }, mainElement), (0, import_react37.useEffect)(() => {
    function findExactRoute(element) {
      return element.exact ? UrlUtils_default.stripTrailingSlash(location.pathname) === UrlUtils_default.stripTrailingSlash(element.href) : (location.pathname + location.search).includes(element.href);
    }
    let current = items.find((element) => findExactRoute(element));
    setCurrentTab(current);
  }, [items, location.pathname, location.search]), /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "sm:flex sm:h-[calc(100vh-56px)] sm:flex-row sm:bg-gray-50", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(
      "div",
      {
        className: (0, import_clsx14.default)(
          "hidden flex-none flex-col items-center justify-between border-r border-gray-200 bg-gray-100 shadow-sm sm:flex",
          (label == null ? void 0 : label.align) === "bottom" && "lg:text-center"
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "flex w-full flex-col items-center ", children: items.filter((f) => !f.bottom).map((item, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(IconLink, { ...item, current: (currentTab == null ? void 0 : currentTab.name) === item.name, label }, idx, !1, {
            fileName: "app/components/ui/layouts/SidebarIconsLayout.tsx",
            lineNumber: 60,
            columnNumber: 22
          }, this)) }, void 0, !1, {
            fileName: "app/components/ui/layouts/SidebarIconsLayout.tsx",
            lineNumber: 56,
            columnNumber: 9
          }, this),
          items.filter((f) => f.bottom).length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "flex w-full flex-col space-y-2 pb-5", children: items.filter((f) => f.bottom).map((item, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(IconLink, { ...item, current: (currentTab == null ? void 0 : currentTab.name) === item.name, label }, idx, !1, {
            fileName: "app/components/ui/layouts/SidebarIconsLayout.tsx",
            lineNumber: 68,
            columnNumber: 24
          }, this)) }, void 0, !1, {
            fileName: "app/components/ui/layouts/SidebarIconsLayout.tsx",
            lineNumber: 64,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/ui/layouts/SidebarIconsLayout.tsx",
        lineNumber: 50,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "w-full border-b border-gray-300 bg-white py-2 shadow-sm sm:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "mx-auto flex max-w-5xl items-center justify-between space-x-2 px-4 sm:px-6 lg:px-8 xl:max-w-7xl 2xl:max-w-screen-2xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(
      Tabs,
      {
        tabs: items.map((i) => ({ name: i.name, routePath: i.href })),
        className: "flex-grow"
      },
      void 0,
      !1,
      {
        fileName: "app/components/ui/layouts/SidebarIconsLayout.tsx",
        lineNumber: 76,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/ui/layouts/SidebarIconsLayout.tsx",
      lineNumber: 75,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/ui/layouts/SidebarIconsLayout.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { ref: mainElement, className: "w-full overflow-x-hidden", children }, void 0, !1, {
      fileName: "app/components/ui/layouts/SidebarIconsLayout.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ui/layouts/SidebarIconsLayout.tsx",
    lineNumber: 49,
    columnNumber: 5
  }, this);
}
function IconLink({
  name,
  href,
  icon,
  current,
  iconSelected,
  label,
  textIcon,
  textIconSelected
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: (0, import_clsx14.default)("w-full px-1 py-1"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(
    import_react36.Link,
    {
      to: href,
      className: (0, import_clsx14.default)(
        "flex w-11 items-center justify-center rounded-md border px-2 py-2 text-xs hover:border-gray-300 hover:bg-gray-200 hover:text-gray-900",
        current ? " border-gray-300 bg-gray-200 text-gray-800" : "border-transparent text-gray-500",
        label ? "lg:w-auto lg:justify-start" : "w-11",
        (label == null ? void 0 : label.align) === "bottom" && "flex-col space-y-1",
        (label == null ? void 0 : label.align) === "right" && "flex-row space-x-2"
      ),
      children: [
        textIcon !== void 0 && textIconSelected !== void 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { children: current ? /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(EntityIcon, { className: "h-5 w-5 text-gray-500", icon: textIconSelected }, void 0, !1, {
          fileName: "app/components/ui/layouts/SidebarIconsLayout.tsx",
          lineNumber: 128,
          columnNumber: 15
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(EntityIcon, { className: "h-5 w-5 text-gray-400", icon: textIcon }, void 0, !1, {
          fileName: "app/components/ui/layouts/SidebarIconsLayout.tsx",
          lineNumber: 130,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/ui/layouts/SidebarIconsLayout.tsx",
          lineNumber: 126,
          columnNumber: 11
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { children: current ? iconSelected : icon }, void 0, !1, {
          fileName: "app/components/ui/layouts/SidebarIconsLayout.tsx",
          lineNumber: 134,
          columnNumber: 11
        }, this),
        label !== void 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: (0, import_clsx14.default)([icon, iconSelected, textIcon, textIconSelected].some((f) => f !== void 0) && "hidden lg:block"), children: name }, void 0, !1, {
          fileName: "app/components/ui/layouts/SidebarIconsLayout.tsx",
          lineNumber: 137,
          columnNumber: 11
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/ui/layouts/SidebarIconsLayout.tsx",
      lineNumber: 115,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/ui/layouts/SidebarIconsLayout.tsx",
    lineNumber: 114,
    columnNumber: 5
  }, this);
}

// app/routes/admin/knowledge-base.tsx
var import_jsx_dev_runtime41 = require("react/jsx-dev-runtime"), loader5 = async ({ request, params }) => (0, import_node8.json)({
  metatags: [{ title: "Knowledge Base" }]
}), knowledge_base_default = () => /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
  SidebarIconsLayout,
  {
    label: { align: "right" },
    items: [
      {
        name: "Overview",
        href: "/admin/knowledge-base",
        exact: !0,
        icon: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("svg", { className: "h-5 w-5", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", width: "50", height: "50", viewBox: "0 0 50 50", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("path", { d: "M 39 0 L 39 2 L 46.5625 2 L 34 14.5625 L 30.71875 11.28125 L 30 10.59375 L 29.28125 11.28125 L 18 22.5625 L 14.71875 19.28125 L 14 18.59375 L 13.28125 19.28125 L 0.28125 32.28125 L 1.71875 33.71875 L 14 21.4375 L 17.28125 24.71875 L 18 25.40625 L 18.71875 24.71875 L 30 13.4375 L 33.28125 16.71875 L 34 17.40625 L 34.71875 16.71875 L 48 3.4375 L 48 11 L 50 11 L 50 0 Z M 42 14 L 42 50 L 44 50 L 44 14 Z M 48 15 L 48 50 L 50 50 L 50 15 Z M 30 20 L 30 50 L 32 50 L 32 20 Z M 36 20 L 36 50 L 38 50 L 38 20 Z M 24 24 L 24 50 L 26 50 L 26 24 Z M 12 28 L 12 50 L 14 50 L 14 28 Z M 18 30 L 18 50 L 20 50 L 20 30 Z M 6 34 L 6 50 L 8 50 L 8 34 Z M 0 38 L 0 50 L 2 50 L 2 38 Z" }, void 0, !1, {
          fileName: "app/routes/admin/knowledge-base.tsx",
          lineNumber: 30,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/admin/knowledge-base.tsx",
          lineNumber: 29,
          columnNumber: 13
        }, this),
        iconSelected: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("svg", { className: "h-5 w-5", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", width: "50", height: "50", viewBox: "0 0 50 50", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("path", { d: "M 38 0 L 38 4 L 43.1875 4 L 34 13.1875 L 31.40625 10.59375 L 30 9.15625 L 28.59375 10.59375 L 18 21.1875 L 15.40625 18.59375 L 14 17.15625 L 12.59375 18.59375 L 0.59375 30.59375 L 3.40625 33.40625 L 14 22.8125 L 16.59375 25.40625 L 18 26.84375 L 19.40625 25.40625 L 30 14.8125 L 32.59375 17.40625 L 34 18.84375 L 35.40625 17.40625 L 46 6.8125 L 46 12 L 50 12 L 50 0 Z M 44 15 L 44 50 L 48 50 L 48 15 Z M 30 20 L 30 50 L 34 50 L 34 20 Z M 37 20 L 37 50 L 41 50 L 41 20 Z M 23 24 L 23 50 L 27 50 L 27 24 Z M 16 30 L 16 50 L 20 50 L 20 30 Z M 9 31 L 9 50 L 13 50 L 13 31 Z M 2 38 L 2 50 L 6 50 L 6 38 Z" }, void 0, !1, {
          fileName: "app/routes/admin/knowledge-base.tsx",
          lineNumber: 35,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/admin/knowledge-base.tsx",
          lineNumber: 34,
          columnNumber: 13
        }, this)
      },
      {
        name: "Bases",
        href: "/admin/knowledge-base/bases",
        icon: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("svg", { className: "h-5 w-5", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", width: "50", height: "50", viewBox: "0 0 50 50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("path", { d: "M 13 2 C 10.800781 2 9 3.800781 9 6 L 9 44.3125 L 9.03125 44.3125 C 9.195313 46.363281 10.910156 48 13 48 L 42 48 L 42 46 L 13 46 C 11.882813 46 11 45.117188 11 44 C 11 42.882813 11.882813 42 13 42 L 42 42 L 42 40 L 13 40 C 11.882813 40 11 39.117188 11 38 C 11 36.882813 11.882813 36 13 36 L 42 36 L 42 2 Z M 13 4 L 40 4 L 40 34 L 13 34 C 12.257813 34 11.597656 34.261719 11 34.621094 L 11 6 C 11 4.882813 11.882813 4 13 4 Z M 16 7 C 14.90625 7 14 7.90625 14 9 L 14 12 C 14 13.09375 14.90625 14 16 14 L 35 14 C 36.09375 14 37 13.09375 37 12 L 37 9 C 37 7.90625 36.09375 7 35 7 Z M 16 9 L 35 9 L 35 12 L 16 12 Z" }, void 0, !1, {
          fileName: "app/routes/admin/knowledge-base.tsx",
          lineNumber: 44,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/admin/knowledge-base.tsx",
          lineNumber: 43,
          columnNumber: 13
        }, this),
        iconSelected: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("svg", { className: "h-5 w-5", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", width: "50", height: "50", viewBox: "0 0 50 50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("path", { d: "M 13 2 C 10.792969 2 9 3.792969 9 6 L 9 44.3125 L 9.03125 44.3125 C 9.195313 46.363281 10.910156 48 13 48 L 42 48 L 42 46 L 13 46 C 11.882813 46 11 45.117188 11 44 C 11 42.882813 11.882813 42 13 42 L 42 42 L 42 40 L 13 40 C 11.898438 40 11 39.101563 11 38 C 11 36.898438 11.898438 36 13 36 L 42 36 L 42 2 Z M 16 8 L 35 8 C 35.550781 8 36 8.449219 36 9 L 36 12 C 36 12.550781 35.550781 13 35 13 L 16 13 C 15.449219 13 15 12.550781 15 12 L 15 9 C 15 8.449219 15.449219 8 16 8 Z" }, void 0, !1, {
          fileName: "app/routes/admin/knowledge-base.tsx",
          lineNumber: 49,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/admin/knowledge-base.tsx",
          lineNumber: 48,
          columnNumber: 13
        }, this)
      },
      {
        name: "Danger",
        href: "/admin/knowledge-base/danger",
        bottom: !0,
        icon: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("svg", { className: "h-5 w-5", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/admin/knowledge-base.tsx",
            lineNumber: 59,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/admin/knowledge-base.tsx",
          lineNumber: 58,
          columnNumber: 13
        }, this),
        iconSelected: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("svg", { className: "h-5 w-5", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
          "path",
          {
            fillRule: "evenodd",
            d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
            clipRule: "evenodd"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/admin/knowledge-base.tsx",
            lineNumber: 68,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/admin/knowledge-base.tsx",
          lineNumber: 67,
          columnNumber: 13
        }, this)
      }
    ],
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_react38.Outlet, {}, void 0, !1, {
      fileName: "app/routes/admin/knowledge-base.tsx",
      lineNumber: 78,
      columnNumber: 7
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/routes/admin/knowledge-base.tsx",
    lineNumber: 21,
    columnNumber: 5
  },
  this
);
function ErrorBoundary4() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(ServerError2, {}, void 0, !1, {
    fileName: "app/routes/admin/knowledge-base.tsx",
    lineNumber: 84,
    columnNumber: 10
  }, this);
}

// app/routes/admin/knowledge-base/bases.$slug/articles.$lang.$id.edit.tsx
var articles_lang_id_edit_exports = {};
__export(articles_lang_id_edit_exports, {
  action: () => action4,
  default: () => articles_lang_id_edit_default,
  loader: () => loader6
});
var import_node10 = require("@remix-run/node"), import_react57 = require("@remix-run/react"), import_remix_typedjson5 = require("remix-typedjson");

// app/components/ui/buttons/ButtonPrimary.tsx
var import_clsx15 = __toESM(require("clsx"));
var import_jsx_dev_runtime42 = require("react/jsx-dev-runtime");
function ButtonPrimary({ className = "", type = "button", onClick, disabled, destructive, to, target, isExternal = !1, children }) {
  let combinedClassName = (0, import_clsx15.default)(
    className,
    "inline-flex items-center space-x-2 px-3 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gray-300",
    disabled && "cursor-not-allowed opacity-75",
    !destructive && "bg-gray-800",
    destructive && "bg-red-600",
    !disabled && !destructive && !className && "hover:bg-gray-900 focus:ring-gray-500 hover:text-gray-100",
    !disabled && destructive && "hover:bg-red-700 focus:ring-red-500"
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("span", { children: (() => !to || disabled ? /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
    "button",
    {
      onClick,
      type,
      disabled,
      className: (0, import_clsx15.default)(
        className,
        "inline-flex items-center space-x-2 rounded-md border border-transparent px-3 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300",
        disabled && "cursor-not-allowed opacity-75",
        !destructive && "bg-gray-800",
        destructive && "bg-red-600",
        !disabled && !destructive && !className && "hover:bg-gray-900 hover:text-gray-100 focus:ring-gray-500",
        !disabled && destructive && "hover:bg-red-700 focus:ring-red-500"
      ),
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/buttons/ButtonPrimary.tsx",
      lineNumber: 33,
      columnNumber: 13
    },
    this
  ) : to && isExternal ? /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("a", { href: to, className: combinedClassName, target, children }, void 0, !1, {
    fileName: "app/components/ui/buttons/ButtonPrimary.tsx",
    lineNumber: 52,
    columnNumber: 13
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
    LinkOrAhref,
    {
      to: disabled ? "" : to,
      target,
      className: (0, import_clsx15.default)(
        className,
        "borde1-transparent inline-flex items-center space-x-2 rounded-md border px-3 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300",
        disabled && "cursor-not-allowed opacity-75",
        !destructive && "bg-gray-800",
        destructive && "bg-red-600",
        !disabled && !destructive && !className && "hover:bg-gray-900 hover:text-gray-100 focus:ring-gray-500",
        !disabled && destructive && "hover:bg-red-700 focus:ring-red-500"
      ),
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/buttons/ButtonPrimary.tsx",
      lineNumber: 58,
      columnNumber: 13
    },
    this
  ))() }, void 0, !1, {
    fileName: "app/components/ui/buttons/ButtonPrimary.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

// app/components/ui/buttons/LoadingButton.tsx
var import_react39 = require("react"), import_clsx16 = __toESM(require("clsx")), import_react40 = require("@remix-run/react"), import_jsx_dev_runtime43 = require("react/jsx-dev-runtime"), LoadingButton = ({ className, type = "button", children, disabled, onClick, to, actionName, isLoading }, ref) => {
  let navigation = (0, import_react40.useNavigation)(), [loading, setLoading] = (0, import_react39.useState)(!1);
  (0, import_react39.useImperativeHandle)(ref, () => ({
    start,
    stop
  }));
  function start() {
    setLoading(!0);
  }
  function stop() {
    setLoading(!1);
  }
  let submitting = navigation.state === "submitting";
  function checkIsLoading() {
    if (isLoading)
      return !0;
    let loadingOrSubmitting = loading || submitting;
    return actionName ? loadingOrSubmitting && navigation.state === "submitting" && navigation.formData.get("action") === actionName : loadingOrSubmitting;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
    ButtonPrimary,
    {
      disabled: disabled || checkIsLoading(),
      className: (0, import_clsx16.default)(className, "relative justify-center", checkIsLoading() && "base-spinner cursor-not-allowed"),
      type,
      onClick,
      to,
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/buttons/LoadingButton.tsx",
      lineNumber: 51,
      columnNumber: 5
    },
    this
  );
}, LoadingButton_default = (0, import_react39.forwardRef)(LoadingButton);

// app/components/ui/layouts/EditPageLayout.tsx
var import_react41 = require("@remix-run/react");
var import_jsx_dev_runtime44 = require("react/jsx-dev-runtime");
function EditPageLayout({ title, menu, buttons, children, withHome = !0, tabs }) {
  let params = (0, import_react41.useParams)(), home = params.tenant ? `/app/${params.tenant}/dashboard` : "/admin/dashboard";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "mx-auto max-w-5xl space-y-3 px-4 pb-6 pt-3 sm:px-6 lg:px-8 xl:max-w-7xl 2xl:max-w-screen-2xl", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "space-y-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "flex items-center justify-between space-x-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("h1", { className: "flex flex-1 items-center truncate text-xl font-medium", children: title }, void 0, !1, {
          fileName: "app/components/ui/layouts/EditPageLayout.tsx",
          lineNumber: 24,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "flex items-center space-x-2", children: buttons }, void 0, !1, {
          fileName: "app/components/ui/layouts/EditPageLayout.tsx",
          lineNumber: 25,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/ui/layouts/EditPageLayout.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      menu && /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(BreadcrumbSimple, { home: withHome ? home : void 0, menu }, void 0, !1, {
        fileName: "app/components/ui/layouts/EditPageLayout.tsx",
        lineNumber: 28,
        columnNumber: 18
      }, this),
      tabs && /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(Tabs, { tabs, className: "flex-grow" }, void 0, !1, {
        fileName: "app/components/ui/layouts/EditPageLayout.tsx",
        lineNumber: 30,
        columnNumber: 18
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ui/layouts/EditPageLayout.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    children
  ] }, void 0, !0, {
    fileName: "app/components/ui/layouts/EditPageLayout.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

// app/components/ui/modals/ActionResultModal.tsx
var import_react42 = require("react"), import_react43 = require("@headlessui/react"), import_clsx17 = __toESM(require("clsx")), import_jsx_dev_runtime45 = require("react/jsx-dev-runtime");
function ActionResultModal({ actionResult, className, actionData, showSuccess = !0, showError = !0, onClosed }) {
  let [data, setData] = (0, import_react42.useState)(), [open, setOpen] = (0, import_react42.useState)(!1), [status, setStatus] = (0, import_react42.useState)(actionResult);
  return (0, import_react42.useEffect)(() => {
    setStatus(actionResult);
  }, [actionResult]), (0, import_react42.useEffect)(() => {
    (actionData == null ? void 0 : actionData.error) && showError ? setStatus({ error: { description: actionData.error } }) : (actionData == null ? void 0 : actionData.success) && showSuccess && setStatus({ success: { description: actionData.success } });
  }, [actionData, showError, showSuccess]), (0, import_react42.useEffect)(() => {
    status != null && status.success ? (setData({
      title: status.success.title ?? "Success",
      description: status.success.description,
      closeText: status.success.closeText ?? "Close"
    }), setOpen(!0)) : status != null && status.error && (setData({
      title: status.error.title ?? "Error",
      description: status.error.description,
      closeText: status.error.closeText ?? "Close"
    }), setOpen(!0));
  }, [status]), /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_react43.Transition.Root, { show: open, as: import_react42.Fragment, children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_react43.Dialog, { as: "div", className: (0, import_clsx17.default)(className, "fixed inset-0 z-10 overflow-y-auto"), onClose: () => setOpen(!1), children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
      import_react43.Transition.Child,
      {
        as: import_react42.Fragment,
        enter: "ease-out duration-300",
        enterFrom: "opacity-0",
        enterTo: "opacity-100",
        leave: "ease-in duration-200",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_react43.Dialog.Overlay, { className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" }, void 0, !1, {
          fileName: "app/components/ui/modals/ActionResultModal.tsx",
          lineNumber: 65,
          columnNumber: 13
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/ui/modals/ActionResultModal.tsx",
        lineNumber: 56,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("span", { className: "hidden sm:inline-block sm:h-screen sm:align-middle", "aria-hidden": "true", children: "\u200B" }, void 0, !1, {
      fileName: "app/components/ui/modals/ActionResultModal.tsx",
      lineNumber: 69,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
      import_react43.Transition.Child,
      {
        as: import_react42.Fragment,
        enter: "ease-out duration-300",
        enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
        enterTo: "opacity-100 translate-y-0 sm:scale-100",
        leave: "ease-in duration-200",
        leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
        leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "inline-block w-full transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left align-bottom shadow-xl transition-all sm:my-8 sm:max-w-sm sm:p-6 sm:align-middle", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { children: [
            (status == null ? void 0 : status.success) && /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                className: "h-6 w-6 text-green-600",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                strokeWidth: "2",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }, void 0, !1, {
                  fileName: "app/components/ui/modals/ActionResultModal.tsx",
                  lineNumber: 93,
                  columnNumber: 23
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/components/ui/modals/ActionResultModal.tsx",
                lineNumber: 85,
                columnNumber: 21
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/ui/modals/ActionResultModal.tsx",
              lineNumber: 84,
              columnNumber: 19
            }, this),
            (status == null ? void 0 : status.error) && /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                className: "h-6 w-6 text-red-600",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                strokeWidth: "2",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/ui/modals/ActionResultModal.tsx",
                    lineNumber: 107,
                    columnNumber: 23
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/components/ui/modals/ActionResultModal.tsx",
                lineNumber: 99,
                columnNumber: 21
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/ui/modals/ActionResultModal.tsx",
              lineNumber: 98,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "mt-3 text-center sm:mt-5", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_react43.Dialog.Title, { as: "h3", className: "text-lg font-medium leading-6 text-gray-900", children: (data == null ? void 0 : data.title) ?? "" }, void 0, !1, {
                fileName: "app/components/ui/modals/ActionResultModal.tsx",
                lineNumber: 116,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("p", { className: "text-sm text-gray-500", children: (data == null ? void 0 : data.description) ?? "" }, void 0, !1, {
                fileName: "app/components/ui/modals/ActionResultModal.tsx",
                lineNumber: 120,
                columnNumber: 21
              }, this) }, void 0, !1, {
                fileName: "app/components/ui/modals/ActionResultModal.tsx",
                lineNumber: 119,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/ui/modals/ActionResultModal.tsx",
              lineNumber: 115,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/ui/modals/ActionResultModal.tsx",
            lineNumber: 82,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "mt-5 sm:mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
            "button",
            {
              type: "button",
              className: (0, import_clsx17.default)(
                "inline-flex w-full justify-center rounded-md border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-sm",
                (status == null ? void 0 : status.success) && "bg-teal-600 hover:bg-teal-700 focus:ring-teal-500",
                (status == null ? void 0 : status.error) && "bg-gray-600 hover:bg-gray-700 focus:ring-gray-500"
              ),
              onClick: () => {
                setOpen(!1), onClosed && onClosed();
              },
              children: (data == null ? void 0 : data.closeText) ?? "Close"
            },
            void 0,
            !1,
            {
              fileName: "app/components/ui/modals/ActionResultModal.tsx",
              lineNumber: 125,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/ui/modals/ActionResultModal.tsx",
            lineNumber: 124,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/ui/modals/ActionResultModal.tsx",
          lineNumber: 81,
          columnNumber: 13
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/ui/modals/ActionResultModal.tsx",
        lineNumber: 72,
        columnNumber: 11
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/ui/modals/ActionResultModal.tsx",
    lineNumber: 55,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/ui/modals/ActionResultModal.tsx",
    lineNumber: 54,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/ui/modals/ActionResultModal.tsx",
    lineNumber: 53,
    columnNumber: 5
  }, this);
}

// app/components/ui/slideOvers/SlideOverWideEmpty.tsx
var import_react44 = require("react"), import_react45 = require("@headlessui/react");

// app/components/ui/icons/XIcon.tsx
var import_jsx_dev_runtime46 = require("react/jsx-dev-runtime");
function XIcon2({ className }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("svg", { className, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
    "path",
    {
      fillRule: "evenodd",
      d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
      clipRule: "evenodd"
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/icons/XIcon.tsx",
      lineNumber: 4,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/ui/icons/XIcon.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/components/ui/slideOvers/SlideOverWideEmpty.tsx
var import_clsx18 = __toESM(require("clsx")), import_jsx_dev_runtime47 = require("react/jsx-dev-runtime");
function SlideOverWideEmpty({
  title,
  description,
  open,
  children,
  onClose,
  className,
  buttons,
  withTitle = !0,
  withClose = !0,
  overflowYScroll
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_react45.Transition.Root, { show: open, as: import_react44.Fragment, children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_react45.Dialog, { as: "div", className: "relative", onClose, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
      import_react45.Transition.Child,
      {
        as: import_react44.Fragment,
        enter: "ease-in-out duration-500",
        enterFrom: "opacity-0",
        enterTo: "opacity-100",
        leave: "ease-in-out duration-500",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" }, void 0, !1, {
          fileName: "app/components/ui/slideOvers/SlideOverWideEmpty.tsx",
          lineNumber: 41,
          columnNumber: 11
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/ui/slideOvers/SlideOverWideEmpty.tsx",
        lineNumber: 32,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { className: "fixed inset-0 z-10 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { className: "absolute inset-0 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { className: "pointer-events-none fixed inset-y-0 right-0 flex max-w-full sm:pl-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
      import_react45.Transition.Child,
      {
        as: import_react44.Fragment,
        enter: "transform transition ease-in-out duration-500 sm:duration-300",
        enterFrom: "translate-x-full",
        enterTo: "translate-x-0",
        leave: "transform transition ease-in-out duration-500 sm:duration-300",
        leaveFrom: "translate-x-0",
        leaveTo: "translate-x-full",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
          import_react45.Dialog.Panel,
          {
            className: (0, import_clsx18.default)("pointer-events-auto w-screen max-w-2xl overflow-auto border border-gray-200 text-gray-800 shadow-lg", className),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { className: "flex h-full flex-col overflow-y-auto bg-white pt-6 shadow-xl", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { className: "px-4 sm:px-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { className: "flex items-start justify-between", children: [
                withTitle ? /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { className: "flex flex-col", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_react45.Dialog.Title, { className: "text-lg font-medium text-gray-900", children: title }, void 0, !1, {
                    fileName: "app/components/ui/slideOvers/SlideOverWideEmpty.tsx",
                    lineNumber: 64,
                    columnNumber: 29
                  }, this),
                  description && /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("p", { className: "mt-1 text-sm text-gray-500", children: description }, void 0, !1, {
                    fileName: "app/components/ui/slideOvers/SlideOverWideEmpty.tsx",
                    lineNumber: 65,
                    columnNumber: 45
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/ui/slideOvers/SlideOverWideEmpty.tsx",
                  lineNumber: 63,
                  columnNumber: 27
                }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
                  "button",
                  {
                    type: "button",
                    className: "rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2",
                    onClick: onClose,
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("span", { className: "sr-only", children: "Close panel" }, void 0, !1, {
                        fileName: "app/components/ui/slideOvers/SlideOverWideEmpty.tsx",
                        lineNumber: 74,
                        columnNumber: 31
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
                        "svg",
                        {
                          className: "h-6 w-6",
                          "aria-hidden": "true",
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          strokeWidth: 1.5,
                          stroke: "currentColor",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" }, void 0, !1, {
                            fileName: "app/components/ui/slideOvers/SlideOverWideEmpty.tsx",
                            lineNumber: 84,
                            columnNumber: 33
                          }, this)
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/components/ui/slideOvers/SlideOverWideEmpty.tsx",
                          lineNumber: 75,
                          columnNumber: 31
                        },
                        this
                      )
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "app/components/ui/slideOvers/SlideOverWideEmpty.tsx",
                    lineNumber: 69,
                    columnNumber: 29
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/components/ui/slideOvers/SlideOverWideEmpty.tsx",
                  lineNumber: 68,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { className: "ml-3 flex h-7 items-center space-x-4", children: [
                  buttons,
                  withClose && /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
                    "button",
                    {
                      type: "button",
                      className: "rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2",
                      onClick: onClose,
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("span", { className: "sr-only", children: "Close panel" }, void 0, !1, {
                          fileName: "app/components/ui/slideOvers/SlideOverWideEmpty.tsx",
                          lineNumber: 98,
                          columnNumber: 31
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(XIcon2, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, !1, {
                          fileName: "app/components/ui/slideOvers/SlideOverWideEmpty.tsx",
                          lineNumber: 99,
                          columnNumber: 31
                        }, this)
                      ]
                    },
                    void 0,
                    !0,
                    {
                      fileName: "app/components/ui/slideOvers/SlideOverWideEmpty.tsx",
                      lineNumber: 93,
                      columnNumber: 29
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "app/components/ui/slideOvers/SlideOverWideEmpty.tsx",
                  lineNumber: 90,
                  columnNumber: 25
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/ui/slideOvers/SlideOverWideEmpty.tsx",
                lineNumber: 61,
                columnNumber: 23
              }, this) }, void 0, !1, {
                fileName: "app/components/ui/slideOvers/SlideOverWideEmpty.tsx",
                lineNumber: 60,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { className: (0, import_clsx18.default)("relative mt-6 flex-1 border-t bg-gray-50 px-4 pb-6 pt-5 sm:px-6", overflowYScroll && "overflow-y-scroll"), children }, void 0, !1, {
                fileName: "app/components/ui/slideOvers/SlideOverWideEmpty.tsx",
                lineNumber: 106,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/ui/slideOvers/SlideOverWideEmpty.tsx",
              lineNumber: 59,
              columnNumber: 19
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/ui/slideOvers/SlideOverWideEmpty.tsx",
            lineNumber: 56,
            columnNumber: 17
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/components/ui/slideOvers/SlideOverWideEmpty.tsx",
        lineNumber: 47,
        columnNumber: 15
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/ui/slideOvers/SlideOverWideEmpty.tsx",
      lineNumber: 46,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/ui/slideOvers/SlideOverWideEmpty.tsx",
      lineNumber: 45,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/ui/slideOvers/SlideOverWideEmpty.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ui/slideOvers/SlideOverWideEmpty.tsx",
    lineNumber: 31,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/ui/slideOvers/SlideOverWideEmpty.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

// app/modules/knowledgeBase/components/bases/KbArticleForm.tsx
var import_clsx24 = __toESM(require("clsx")), import_react56 = require("react");

// app/components/ui/input/InputText.tsx
var import_clsx20 = __toESM(require("clsx")), import_react46 = require("react");

// app/components/ui/tooltips/HintTooltip.tsx
var import_clsx19 = __toESM(require("clsx")), import_jsx_dev_runtime48 = require("react/jsx-dev-runtime");
function HintTooltip({ text, alwaysVisible }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("div", { className: "group relative flex flex-col items-center", children: [
    !alwaysVisible && /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("svg", { className: "h-4 w-4 text-gray-500", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(
      "path",
      {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z",
        clipRule: "evenodd"
      },
      void 0,
      !1,
      {
        fileName: "app/components/ui/tooltips/HintTooltip.tsx",
        lineNumber: 13,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/ui/tooltips/HintTooltip.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("div", { className: (0, import_clsx19.default)(alwaysVisible ? "" : "hidden", "absolute bottom-0 mb-6 w-40 flex-col items-center group-hover:flex sm:w-72 md:w-96"), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("span", { className: "whitespace-no-wrap relative z-10 bg-black p-2 text-xs leading-none text-white shadow-lg", children: text }, void 0, !1, {
        fileName: "app/components/ui/tooltips/HintTooltip.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("div", { className: "-mt-2 h-3 w-3 rotate-45 bg-black" }, void 0, !1, {
        fileName: "app/components/ui/tooltips/HintTooltip.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ui/tooltips/HintTooltip.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ui/tooltips/HintTooltip.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/components/ui/input/InputText.tsx
var import_react47 = __toESM(require("@monaco-editor/react")), import_jsx_dev_runtime49 = require("react/jsx-dev-runtime"), InputText = ({
  id,
  name,
  title,
  withLabel = !0,
  value,
  setValue,
  className,
  classNameBg,
  help,
  disabled = !1,
  readOnly = !1,
  required = !1,
  minLength,
  maxLength,
  autoComplete,
  withTranslation = !1,
  translationParams = [],
  placeholder,
  pattern,
  hint,
  rows,
  button,
  lowercase,
  uppercase,
  type = "text",
  darkMode,
  icon,
  editor,
  editorLanguage,
  editorHideLineNumbers,
  editorTheme = "vs-dark",
  editorFontSize,
  onBlur,
  borderless,
  editorSize = "sm",
  autoFocus,
  isError,
  isSuccess
}, ref) => {
  let [actualValue, setActualValue] = (0, import_react46.useState)(value ?? "");
  (0, import_react46.useEffect)(() => {
    setActualValue(value ?? "");
  }, [value]), (0, import_react46.useEffect)(() => {
    onChange && onChange(actualValue);
  }, [actualValue]), (0, import_react46.useImperativeHandle)(ref, () => ({ input }));
  let input = (0, import_react46.useRef)(null), textArea = (0, import_react46.useRef)(null);
  function onChange(value2) {
    setValue && setValue(lowercase ? value2.toLowerCase() : uppercase ? value2.toUpperCase() : value2);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: (0, import_clsx20.default)(className, !darkMode && "text-gray-800"), children: [
    withLabel && /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("label", { htmlFor: name, className: "mb-1 flex justify-between space-x-2 truncate text-xs font-medium text-gray-600", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "flex items-center space-x-1 truncate", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "flex space-x-1 truncate", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "truncate", children: title }, void 0, !1, {
            fileName: "app/components/ui/input/InputText.tsx",
            lineNumber: 129,
            columnNumber: 15
          }, this),
          required && /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "ml-1 text-red-500", children: "*" }, void 0, !1, {
            fileName: "app/components/ui/input/InputText.tsx",
            lineNumber: 130,
            columnNumber: 28
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/ui/input/InputText.tsx",
          lineNumber: 128,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "", children: help && /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(HintTooltip, { text: help }, void 0, !1, {
          fileName: "app/components/ui/input/InputText.tsx",
          lineNumber: 132,
          columnNumber: 40
        }, this) }, void 0, !1, {
          fileName: "app/components/ui/input/InputText.tsx",
          lineNumber: 132,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/ui/input/InputText.tsx",
        lineNumber: 127,
        columnNumber: 11
      }, this),
      hint
    ] }, void 0, !0, {
      fileName: "app/components/ui/input/InputText.tsx",
      lineNumber: 126,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: (0, import_clsx20.default)("relative flex w-full rounded-md"), children: editor === "monaco" && editorLanguage ? /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_jsx_dev_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("textarea", { hidden: !0, readOnly: !0, name, value: actualValue }, void 0, !1, {
        fileName: "app/components/ui/input/InputText.tsx",
        lineNumber: 150,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(
        import_react47.default,
        {
          theme: editorTheme,
          className: (0, import_clsx20.default)(
            "block w-full min-w-0 flex-1 rounded-md border-gray-300 focus:border-accent-500 focus:ring-accent-500 sm:text-sm",
            editorSize === "sm" && "h-32",
            editorSize === "md" && "h-64",
            editorSize === "lg" && "h-96",
            editorSize === "auto" && "h-auto",
            editorSize === "full" && "h-full",
            editorSize === "screen" && "h-screen",
            className,
            classNameBg,
            editorHideLineNumbers && "-ml-10",
            borderless && "border-transparent"
          ),
          defaultLanguage: editorLanguage,
          language: editorLanguage,
          options: {
            fontSize: editorFontSize,
            renderValidationDecorations: "off"
          },
          value: actualValue,
          onChange: (e) => setActualValue((e == null ? void 0 : e.toString()) ?? "")
        },
        void 0,
        !1,
        {
          fileName: "app/components/ui/input/InputText.tsx",
          lineNumber: 151,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/ui/input/InputText.tsx",
      lineNumber: 149,
      columnNumber: 11
    }, this) : rows ? /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(
      "textarea",
      {
        rows,
        ref: textArea,
        id: id ?? name,
        name,
        autoComplete,
        required,
        minLength,
        maxLength,
        value: actualValue,
        onChange: (e) => setActualValue(e.currentTarget.value),
        disabled,
        readOnly,
        placeholder,
        autoFocus,
        className: (0, import_clsx20.default)(
          "block w-full min-w-0 flex-1 rounded-md border-gray-300 focus:border-accent-500 focus:ring-accent-500 sm:text-sm",
          className,
          classNameBg,
          disabled || readOnly ? "cursor-not-allowed bg-gray-100" : "hover:bg-gray-50 focus:bg-gray-50",
          borderless && "border-transparent",
          isError && "border-red-300 bg-red-100 text-red-900",
          isSuccess && "bg-real-100 border-real-300 text-real-900"
        )
      },
      void 0,
      !1,
      {
        fileName: "app/components/ui/input/InputText.tsx",
        lineNumber: 215,
        columnNumber: 11
      },
      this
    ) : /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_jsx_dev_runtime49.Fragment, { children: [
      icon && /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(EntityIcon, { className: "h-5 w-5 text-gray-400", icon }, void 0, !1, {
        fileName: "app/components/ui/input/InputText.tsx",
        lineNumber: 180,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/ui/input/InputText.tsx",
        lineNumber: 179,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(
        "input",
        {
          ref: input,
          type,
          id: id ?? name,
          name,
          autoComplete,
          required,
          minLength,
          maxLength,
          value: actualValue,
          onChange: (e) => setActualValue(e.currentTarget.value),
          onBlur,
          disabled,
          readOnly,
          placeholder,
          pattern: pattern !== "" && pattern !== void 0 ? pattern : void 0,
          autoFocus,
          className: (0, import_clsx20.default)(
            "block w-full min-w-0 flex-1 rounded-md border-gray-300 focus:border-accent-500 focus:ring-accent-500 sm:text-sm",
            className,
            classNameBg,
            disabled || readOnly ? "cursor-not-allowed bg-gray-100" : "hover:bg-gray-50 focus:bg-gray-50",
            icon && "pl-10",
            borderless && "border-transparent",
            isError && "border-red-300 bg-red-100 text-red-900",
            isSuccess && "bg-real-100 border-real-300 text-real-900"
          )
        },
        void 0,
        !1,
        {
          fileName: "app/components/ui/input/InputText.tsx",
          lineNumber: 183,
          columnNumber: 13
        },
        this
      ),
      button
    ] }, void 0, !0, {
      fileName: "app/components/ui/input/InputText.tsx",
      lineNumber: 177,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/ui/input/InputText.tsx",
      lineNumber: 147,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ui/input/InputText.tsx",
    lineNumber: 124,
    columnNumber: 5
  }, this);
}, InputText_default = (0, import_react46.forwardRef)(InputText);

// app/modules/novel/ui/editor/index.tsx
var import_react53 = require("react"), import_react54 = require("@tiptap/react");

// app/modules/novel/lib/utils/editor.ts
var import_react_hot_toast = require("react-hot-toast"), handleImageUpload = (file, view, event) => {
  file.type.includes("image/") ? file.size / 1024 / 1024 > 50 ? import_react_hot_toast.toast.error("File size too big (max 50MB).") : import_react_hot_toast.toast.promise(
    fetch("/api/ai/upload", {
      method: "POST",
      headers: {
        "content-type": (file == null ? void 0 : file.type) || "application/octet-stream",
        "x-filename": (file == null ? void 0 : file.name) || "image.png"
      },
      body: file
    }).then(async (res) => {
      if (res.status === 200) {
        let { url } = await res.json(), image = new Image();
        image.src = url, image.onload = () => {
          insertImage(url);
        };
      } else if (res.status === 401) {
        let reader = new FileReader();
        throw reader.onload = (e) => {
          var _a;
          insertImage((_a = e.target) == null ? void 0 : _a.result);
        }, reader.readAsDataURL(file), new Error("`BLOB_READ_WRITE_TOKEN` environment variable not found, reading image locally instead.");
      } else
        throw new Error("Error uploading image. Please try again.");
    }),
    {
      loading: "Uploading image...",
      success: "Image uploaded successfully.",
      error: (e) => e.message
    }
  ) : import_react_hot_toast.toast.error("File type not supported.");
  let insertImage = (url) => {
    if (event instanceof ClipboardEvent)
      return view.dispatch(
        view.state.tr.replaceSelectionWith(
          view.state.schema.nodes.image.create({
            src: url,
            alt: file.name,
            title: file.name
          })
        )
      );
    if (event instanceof DragEvent) {
      let { schema } = view.state, coordinates = view.posAtCoords({
        left: event.clientX,
        top: event.clientY
      }), node = schema.nodes.image.create({
        src: url,
        alt: file.name,
        title: file.name
      }), transaction = view.state.tr.insert((coordinates == null ? void 0 : coordinates.pos) || 0, node);
      return view.dispatch(transaction);
    } else if (event instanceof Event)
      return view.dispatch(
        view.state.tr.replaceSelectionWith(
          view.state.schema.nodes.image.create({
            src: url,
            alt: file.name,
            title: file.name
          })
        )
      );
  };
};

// app/modules/novel/ui/editor/props.ts
var TiptapEditorProps = {
  attributes: {
    class: "prose-lg prose-headings:font-display focus:outline-none"
  },
  handleDOMEvents: {
    keydown: (_view, event) => {
      if (["ArrowUp", "ArrowDown", "Enter"].includes(event.key) && document.querySelector("#slash-command"))
        return !0;
    }
  },
  handlePaste: (view, event, _slice) => {
    if (event.clipboardData && event.clipboardData.files && event.clipboardData.files[0]) {
      event.preventDefault();
      let file = event.clipboardData.files[0];
      return handleImageUpload(file, view, event);
    }
    return !1;
  },
  handleDrop: (view, event, _slice, moved) => {
    if (!moved && event.dataTransfer && event.dataTransfer.files && event.dataTransfer.files[0]) {
      event.preventDefault();
      let file = event.dataTransfer.files[0];
      return handleImageUpload(file, view, event);
    }
    return !1;
  }
};

// app/modules/novel/ui/editor/extensions/index.tsx
var import_starter_kit = __toESM(require("@tiptap/starter-kit")), import_extension_horizontal_rule = __toESM(require("@tiptap/extension-horizontal-rule")), import_extension_link = __toESM(require("@tiptap/extension-link")), import_extension_image = __toESM(require("@tiptap/extension-image")), import_extension_placeholder = __toESM(require("@tiptap/extension-placeholder")), import_extension_underline = __toESM(require("@tiptap/extension-underline")), import_extension_text_style = __toESM(require("@tiptap/extension-text-style")), import_extension_color = require("@tiptap/extension-color");

// app/modules/novel/ui/editor/extensions/slash-command.tsx
var import_react49 = require("react"), import_core = require("@tiptap/core"), import_suggestion = __toESM(require("@tiptap/suggestion")), import_react50 = require("@tiptap/react");

// app/modules/novel/lib/ai/react/useCompletion.ts
var import_react48 = require("react"), import_mutation = __toESM(require("swr/mutation")), import_swr = __toESM(require("swr"));

// app/modules/novel/lib/ai/react/utils.ts
var import_nanoid = require("nanoid"), nanoid = (0, import_nanoid.customAlphabet)("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", 7);
function createChunkDecoder() {
  let decoder = new TextDecoder();
  return function(chunk) {
    return chunk ? decoder.decode(chunk, { stream: !0 }) : "";
  };
}

// app/modules/novel/lib/ai/react/useCompletion.ts
function useCompletion({
  api,
  id,
  initialCompletion = "",
  initialInput = "",
  headers,
  body,
  onResponse,
  onFinish,
  onError: onError2
}) {
  let completionId = id, { data, mutate } = (0, import_swr.default)([api, completionId], null, {
    fallbackData: initialCompletion
  }), completion = data, [abortController, setAbortController] = (0, import_react48.useState)(null), extraMetadataRef = (0, import_react48.useRef)({
    headers,
    body
  });
  (0, import_react48.useEffect)(() => {
    extraMetadataRef.current = {
      headers,
      body
    };
  }, [headers, body]);
  let { error, trigger, isMutating } = (0, import_mutation.default)(
    [api, completionId],
    async (_, { arg }) => {
      try {
        let { prompt, options: options2 } = arg, abortController2 = new AbortController();
        setAbortController(abortController2), mutate("", !1);
        let res = await fetch(api, {
          method: "POST",
          body: JSON.stringify({
            prompt,
            ...extraMetadataRef.current.body,
            ...options2 == null ? void 0 : options2.body
          }),
          headers: {
            ...extraMetadataRef.current.headers,
            ...options2 == null ? void 0 : options2.headers
          },
          signal: abortController2.signal
        }).catch((err) => {
          throw err;
        });
        if (onResponse)
          try {
            await onResponse(res);
          } catch (err) {
            throw err;
          }
        if (!res.ok)
          throw new Error(await res.text() || "Failed to fetch the chat response.");
        if (!res.body)
          throw new Error("The response body is empty.");
        let result = "", reader = res.body.getReader(), decoder = createChunkDecoder();
        for (; ; ) {
          let { done, value } = await reader.read();
          if (done)
            break;
          if (result += decoder(value), mutate(result, !1), abortController2 === null) {
            reader.cancel();
            break;
          }
        }
        return onFinish && onFinish(prompt, result), setAbortController(null), result;
      } catch (err) {
        if (err.name === "AbortError")
          return setAbortController(null), null;
        throw onError2 && err instanceof Error && onError2(err), err;
      }
    },
    {
      populateCache: !1,
      revalidate: !1
    }
  ), stop = (0, import_react48.useCallback)(() => {
    abortController && (abortController.abort(), setAbortController(null));
  }, [abortController]), setCompletion = (0, import_react48.useCallback)(
    (completion2) => {
      mutate(completion2, !1);
    },
    [mutate]
  ), complete = (0, import_react48.useCallback)(
    async (prompt, options2) => trigger({
      prompt,
      options: options2
    }),
    [trigger]
  ), [input, setInput] = (0, import_react48.useState)(initialInput), handleSubmit = (0, import_react48.useCallback)(
    (e) => {
      if (e.preventDefault(), !!input)
        return complete(input);
    },
    [input, complete]
  );
  return {
    completion,
    complete,
    error,
    setCompletion,
    stop,
    input,
    setInput,
    handleInputChange: (e) => {
      setInput(e.target.value);
    },
    handleSubmit,
    isLoading: isMutating
  };
}

// app/modules/novel/ui/editor/extensions/slash-command.tsx
var import_tippy = __toESM(require("tippy.js")), import_lucide_react = require("lucide-react");

// app/modules/novel/ui/shared/loading-circle.tsx
var import_jsx_dev_runtime50 = require("react/jsx-dev-runtime");
function LoadingCircle({ dimensions }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(
    "svg",
    {
      "aria-hidden": "true",
      className: `${dimensions || "h-4 w-4"} animate-spin fill-stone-600 text-stone-200`,
      viewBox: "0 0 100 101",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(
          "path",
          {
            d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
            fill: "currentColor"
          },
          void 0,
          !1,
          {
            fileName: "app/modules/novel/ui/shared/loading-circle.tsx",
            lineNumber: 12,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(
          "path",
          {
            d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
            fill: "currentFill"
          },
          void 0,
          !1,
          {
            fileName: "app/modules/novel/ui/shared/loading-circle.tsx",
            lineNumber: 16,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/modules/novel/ui/shared/loading-circle.tsx",
      lineNumber: 3,
      columnNumber: 5
    },
    this
  );
}

// app/modules/novel/ui/editor/extensions/slash-command.tsx
var import_react_hot_toast2 = require("react-hot-toast");

// app/modules/novel/ui/shared/magic.tsx
var import_jsx_dev_runtime51 = require("react/jsx-dev-runtime");
function Magic({ className }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(
    "svg",
    {
      width: "469",
      height: "469",
      viewBox: "0 0 469 469",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      shapeRendering: "geometricPrecision",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.5",
      className,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(
          "path",
          {
            d: "M237.092 62.3004L266.754 71.4198C267.156 71.5285 267.51 71.765 267.765 72.0934C268.02 72.4218 268.161 72.8243 268.166 73.2399C268.172 73.6555 268.042 74.0616 267.796 74.3967C267.55 74.7318 267.201 74.9777 266.803 75.097L237.141 84.3145C236.84 84.4058 236.566 84.5699 236.344 84.7922C236.121 85.0146 235.957 85.2883 235.866 85.5893L226.747 115.252C226.638 115.653 226.401 116.008 226.073 116.263C225.745 116.517 225.342 116.658 224.926 116.664C224.511 116.669 224.105 116.539 223.77 116.293C223.435 116.047 223.189 115.699 223.069 115.301L213.852 85.6383C213.761 85.3374 213.597 85.0636 213.374 84.8412C213.152 84.6189 212.878 84.4548 212.577 84.3635L182.914 75.2441C182.513 75.1354 182.158 74.8989 181.904 74.5705C181.649 74.2421 181.508 73.8396 181.503 73.424C181.497 73.0084 181.627 72.6023 181.873 72.2672C182.119 71.9321 182.467 71.6863 182.865 71.5669L212.528 62.3494C212.829 62.2582 213.103 62.0941 213.325 61.8717C213.547 61.6494 213.712 61.3756 213.803 61.0747L222.922 31.4121C223.031 31.0109 223.267 30.656 223.596 30.4013C223.924 30.1465 224.327 30.0057 224.742 30.0002C225.158 29.9946 225.564 30.1247 225.899 30.3706C226.234 30.6165 226.48 30.9649 226.599 31.363L235.817 61.0257C235.908 61.3266 236.072 61.6003 236.295 61.8227C236.517 62.0451 236.791 62.2091 237.092 62.3004Z",
            fill: "currentColor"
          },
          void 0,
          !1,
          {
            fileName: "app/modules/novel/ui/shared/magic.tsx",
            lineNumber: 16,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(
          "path",
          {
            d: "M155.948 155.848L202.771 168.939C203.449 169.131 204.045 169.539 204.47 170.101C204.895 170.663 205.125 171.348 205.125 172.052C205.125 172.757 204.895 173.442 204.47 174.004C204.045 174.566 203.449 174.974 202.771 175.166L155.899 188.06C155.361 188.209 154.87 188.496 154.475 188.891C154.079 189.286 153.793 189.777 153.644 190.316L140.553 237.138C140.361 237.816 139.953 238.413 139.391 238.838C138.829 239.262 138.144 239.492 137.44 239.492C136.735 239.492 136.05 239.262 135.488 238.838C134.927 238.413 134.519 237.816 134.327 237.138L121.432 190.267C121.283 189.728 120.997 189.237 120.601 188.842C120.206 188.446 119.715 188.16 119.177 188.011L72.3537 174.92C71.676 174.728 71.0795 174.32 70.6547 173.759C70.2299 173.197 70 172.512 70 171.807C70 171.103 70.2299 170.418 70.6547 169.856C71.0795 169.294 71.676 168.886 72.3537 168.694L119.226 155.799C119.764 155.65 120.255 155.364 120.65 154.969C121.046 154.573 121.332 154.082 121.481 153.544L134.572 106.721C134.764 106.043 135.172 105.447 135.734 105.022C136.295 104.597 136.981 104.367 137.685 104.367C138.389 104.367 139.075 104.597 139.637 105.022C140.198 105.447 140.606 106.043 140.798 106.721L153.693 153.593C153.842 154.131 154.128 154.622 154.524 155.018C154.919 155.413 155.41 155.699 155.948 155.848Z",
            fill: "currentColor"
          },
          void 0,
          !1,
          {
            fileName: "app/modules/novel/ui/shared/magic.tsx",
            lineNumber: 20,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(
          "path",
          {
            d: "M386.827 289.992C404.33 292.149 403.84 305.828 386.876 307.299C346.623 310.829 298.869 316.271 282.199 360.005C274.844 379.192 269.942 403.2 267.49 432.029C267.427 432.846 267.211 433.626 266.856 434.319C266.501 435.012 266.015 435.602 265.431 436.05C254.988 444.041 251.212 434.186 250.183 425.606C239.2 332.353 214.588 316.909 124.668 306.122C123.892 306.031 123.151 305.767 122.504 305.35C121.857 304.933 121.322 304.375 120.942 303.72C116.399 295.679 119.324 291.038 129.718 289.796C224.688 278.47 236.062 262.83 250.183 169.331C252.177 156.355 257.259 154.083 265.431 162.516C266.51 163.593 267.202 165.099 267.392 166.782C279.257 258.564 293.328 278.617 386.827 289.992Z",
            fill: "currentColor"
          },
          void 0,
          !1,
          {
            fileName: "app/modules/novel/ui/shared/magic.tsx",
            lineNumber: 24,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/modules/novel/ui/shared/magic.tsx",
      lineNumber: 3,
      columnNumber: 5
    },
    this
  );
}

// app/modules/novel/ui/editor/extensions/slash-command.tsx
var import_jsx_dev_runtime52 = require("react/jsx-dev-runtime"), CommandExtension = import_core.Extension.create({
  name: "slash-command",
  addOptions() {
    return {
      suggestion: {
        char: "/",
        command: ({ editor, range, props }) => {
          props.command({ editor, range });
        }
      }
    };
  },
  addProseMirrorPlugins() {
    return [
      (0, import_suggestion.default)({
        editor: this.editor,
        ...this.options.suggestion
      })
    ];
  }
}), getSuggestionItems = ({ query }) => [
  {
    title: "Continue writing",
    description: "Use AI to expand your thoughts.",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(Magic, { className: "w-7 text-black" }, void 0, !1, {
      fileName: "app/modules/novel/ui/editor/extensions/slash-command.tsx",
      lineNumber: 52,
      columnNumber: 13
    }, this)
  },
  {
    title: "Text",
    description: "Just start typing with plain text.",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(import_lucide_react.Text, { size: 18 }, void 0, !1, {
      fileName: "app/modules/novel/ui/editor/extensions/slash-command.tsx",
      lineNumber: 66,
      columnNumber: 13
    }, this),
    command: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).toggleNode("paragraph", "paragraph").run();
    }
  },
  {
    title: "Heading 1",
    description: "Big section heading.",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(import_lucide_react.Heading1, { size: 18 }, void 0, !1, {
      fileName: "app/modules/novel/ui/editor/extensions/slash-command.tsx",
      lineNumber: 74,
      columnNumber: 13
    }, this),
    command: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).setNode("heading", { level: 1 }).run();
    }
  },
  {
    title: "Heading 2",
    description: "Medium section heading.",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(import_lucide_react.Heading2, { size: 18 }, void 0, !1, {
      fileName: "app/modules/novel/ui/editor/extensions/slash-command.tsx",
      lineNumber: 82,
      columnNumber: 13
    }, this),
    command: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).setNode("heading", { level: 2 }).run();
    }
  },
  {
    title: "Heading 3",
    description: "Small section heading.",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(import_lucide_react.Heading3, { size: 18 }, void 0, !1, {
      fileName: "app/modules/novel/ui/editor/extensions/slash-command.tsx",
      lineNumber: 90,
      columnNumber: 13
    }, this),
    command: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).setNode("heading", { level: 3 }).run();
    }
  },
  {
    title: "Bullet List",
    description: "Create a simple bullet list.",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(import_lucide_react.List, { size: 18 }, void 0, !1, {
      fileName: "app/modules/novel/ui/editor/extensions/slash-command.tsx",
      lineNumber: 98,
      columnNumber: 13
    }, this),
    command: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).toggleBulletList().run();
    }
  },
  {
    title: "Numbered List",
    description: "Create a list with numbering.",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(import_lucide_react.ListOrdered, { size: 18 }, void 0, !1, {
      fileName: "app/modules/novel/ui/editor/extensions/slash-command.tsx",
      lineNumber: 106,
      columnNumber: 13
    }, this),
    command: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).toggleOrderedList().run();
    }
  },
  {
    title: "Quote",
    description: "Capture a quote.",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(import_lucide_react.TextQuote, { size: 18 }, void 0, !1, {
      fileName: "app/modules/novel/ui/editor/extensions/slash-command.tsx",
      lineNumber: 114,
      columnNumber: 13
    }, this),
    command: ({ editor, range }) => editor.chain().focus().deleteRange(range).toggleNode("paragraph", "paragraph").toggleBlockquote().run()
  },
  {
    title: "Code",
    description: "Capture a code snippet.",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(import_lucide_react.Code, { size: 18 }, void 0, !1, {
      fileName: "app/modules/novel/ui/editor/extensions/slash-command.tsx",
      lineNumber: 120,
      columnNumber: 13
    }, this),
    command: ({ editor, range }) => editor.chain().focus().deleteRange(range).toggleCodeBlock().run()
  },
  {
    title: "Image",
    description: "Upload an image from your computer.",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(import_lucide_react.Image, { size: 18 }, void 0, !1, {
      fileName: "app/modules/novel/ui/editor/extensions/slash-command.tsx",
      lineNumber: 126,
      columnNumber: 13
    }, this),
    command: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).run();
      let input = document.createElement("input");
      input.type = "file", input.accept = "image/*", input.onchange = async (event) => {
        var _a;
        if ((_a = input.files) != null && _a.length) {
          let file = input.files[0];
          return handleImageUpload(file, editor.view, event);
        }
      }, input.click();
    }
  },
  {
    title: "Divider",
    description: "Insert a divider.",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("hr", { className: "h-1 w-5" }, void 0, !1, {
      fileName: "app/modules/novel/ui/editor/extensions/slash-command.tsx",
      lineNumber: 145,
      columnNumber: 13
    }, this),
    command: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).setHorizontalRule().run();
    }
  }
].filter((item) => typeof query == "string" && query.length > 0 ? item.title.toLowerCase().includes(query.toLowerCase()) : !0), updateScrollView = (container, item) => {
  let containerHeight = container.offsetHeight, itemHeight = item ? item.offsetHeight : 0, top = item.offsetTop, bottom = top + itemHeight;
  top < container.scrollTop ? container.scrollTop -= container.scrollTop - top + 5 : bottom > containerHeight + container.scrollTop && (container.scrollTop += bottom - containerHeight - container.scrollTop + 5);
}, CommandList = ({ items, command, editor, range }) => {
  let [selectedIndex, setSelectedIndex] = (0, import_react49.useState)(0), { complete, isLoading } = useCompletion({
    id: "novel",
    api: "/api/ai/generate",
    onResponse: (response) => {
      if (response.status === 429) {
        import_react_hot_toast2.toast.error("You have reached your request limit for the day.");
        return;
      }
      editor.chain().focus().deleteRange(range).run();
    },
    onFinish: (_prompt, completion) => {
      editor.commands.setTextSelection({
        from: range.from,
        to: range.from + completion.length
      });
    },
    onError: () => {
      import_react_hot_toast2.toast.error("Something went wrong.");
    }
  }), selectItem = (0, import_react49.useCallback)(
    (index) => {
      let item = items[index];
      if (item)
        if (item.title === "Continue writing") {
          let text = editor.getText();
          complete(text);
        } else
          command(item);
    },
    [complete, command, editor, items]
  );
  (0, import_react49.useEffect)(() => {
    let navigationKeys = ["ArrowUp", "ArrowDown", "Enter"], onKeyDown = (e) => {
      if (navigationKeys.includes(e.key))
        return e.preventDefault(), e.key === "ArrowUp" ? (setSelectedIndex((selectedIndex + items.length - 1) % items.length), !0) : e.key === "ArrowDown" ? (setSelectedIndex((selectedIndex + 1) % items.length), !0) : e.key === "Enter" ? (selectItem(selectedIndex), !0) : !1;
    };
    return document.addEventListener("keydown", onKeyDown), () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [items, selectedIndex, setSelectedIndex, selectItem]), (0, import_react49.useEffect)(() => {
    setSelectedIndex(0);
  }, [items]);
  let commandListContainer = (0, import_react49.useRef)(null);
  return (0, import_react49.useLayoutEffect)(() => {
    let container = commandListContainer == null ? void 0 : commandListContainer.current, item = container == null ? void 0 : container.children[selectedIndex];
    item && container && updateScrollView(container, item);
  }, [selectedIndex]), items.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(
    "div",
    {
      id: "slash-command",
      ref: commandListContainer,
      className: "z-50 h-auto max-h-[330px] w-72 overflow-y-auto scroll-smooth rounded-md border border-stone-200 bg-white px-1 py-2 shadow-md transition-all",
      children: items.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(
        "button",
        {
          type: "button",
          className: `flex w-full items-center space-x-2 rounded-md px-2 py-1 text-left text-sm text-stone-900 hover:bg-stone-100 ${index === selectedIndex ? "bg-stone-100 text-stone-900" : ""}`,
          onClick: () => selectItem(index),
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("div", { className: "flex h-10 w-10 items-center justify-center rounded-md border border-stone-200 bg-white", children: item.title === "Continue writing" && isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(LoadingCircle, {}, void 0, !1, {
              fileName: "app/modules/novel/ui/editor/extensions/slash-command.tsx",
              lineNumber: 273,
              columnNumber: 65
            }, this) : item.icon }, void 0, !1, {
              fileName: "app/modules/novel/ui/editor/extensions/slash-command.tsx",
              lineNumber: 272,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("p", { className: "font-medium", children: item.title }, void 0, !1, {
                fileName: "app/modules/novel/ui/editor/extensions/slash-command.tsx",
                lineNumber: 276,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("p", { className: "text-xs text-stone-500", children: item.description }, void 0, !1, {
                fileName: "app/modules/novel/ui/editor/extensions/slash-command.tsx",
                lineNumber: 277,
                columnNumber: 15
              }, this)
            ] }, void 0, !0, {
              fileName: "app/modules/novel/ui/editor/extensions/slash-command.tsx",
              lineNumber: 275,
              columnNumber: 13
            }, this)
          ]
        },
        index,
        !0,
        {
          fileName: "app/modules/novel/ui/editor/extensions/slash-command.tsx",
          lineNumber: 264,
          columnNumber: 11
        },
        this
      ))
    },
    void 0,
    !1,
    {
      fileName: "app/modules/novel/ui/editor/extensions/slash-command.tsx",
      lineNumber: 257,
      columnNumber: 5
    },
    this
  ) : null;
}, renderItems = () => {
  let component = null, popup = null;
  return {
    onStart: (props) => {
      component = new import_react50.ReactRenderer(CommandList, {
        props,
        editor: props.editor
      }), popup = (0, import_tippy.default)("body", {
        getReferenceClientRect: props.clientRect,
        appendTo: () => document.body,
        content: component.element,
        showOnCreate: !0,
        interactive: !0,
        trigger: "manual",
        placement: "bottom-start"
      });
    },
    onUpdate: (props) => {
      component == null || component.updateProps(props), popup && popup[0].setProps({
        getReferenceClientRect: props.clientRect
      });
    },
    onKeyDown: (props) => {
      var _a;
      return props.event.key === "Escape" ? (popup == null || popup[0].hide(), !0) : (_a = component == null ? void 0 : component.ref) == null ? void 0 : _a.onKeyDown(props);
    },
    onExit: () => {
      popup == null || popup[0].destroy(), component == null || component.destroy();
    }
  };
}, SlashCommand = CommandExtension.configure({
  suggestion: {
    items: getSuggestionItems,
    render: renderItems
  }
}), slash_command_default = SlashCommand;

// app/modules/novel/ui/editor/extensions/index.tsx
var import_core2 = require("@tiptap/core"), TiptapExtensions = [
  import_starter_kit.default.configure({
    bulletList: {
      HTMLAttributes: {
        class: "list-disc list-outside leading-3"
      }
    },
    orderedList: {
      HTMLAttributes: {
        class: "list-decimal list-outside leading-3"
      }
    },
    listItem: {
      HTMLAttributes: {
        class: "leading-normal"
      }
    },
    blockquote: {
      HTMLAttributes: {
        class: "border-l-4 border-stone-700"
      }
    },
    codeBlock: {
      HTMLAttributes: {
        class: "rounded-sm bg-stone-100 p-5 font-mono font-medium text-stone-800"
      }
    },
    code: {
      HTMLAttributes: {
        class: "rounded-md bg-stone-200 px-1.5 py-1 font-mono font-medium text-black"
      }
    },
    horizontalRule: !1,
    dropcursor: {
      color: "#DBEAFE",
      width: 4
    },
    gapcursor: !1
  }),
  import_extension_horizontal_rule.default.extend({
    addInputRules() {
      return [
        new import_core2.InputRule({
          find: /^(?:---|—-|___\s|\*\*\*\s)$/,
          handler: ({ state, range, match }) => {
            let attributes = {}, { tr } = state, start = range.from, end = range.to;
            tr.insert(start - 1, this.type.create(attributes)).delete(tr.mapping.map(start), tr.mapping.map(end));
          }
        })
      ];
    }
  }).configure({
    HTMLAttributes: {
      class: "mt-4 mb-6 border-t border-stone-300"
    }
  }),
  import_extension_link.default.configure({
    HTMLAttributes: {
      class: "text-stone-600 underline underline-offset-[3px] hover:text-stone-700 transition-colors cursor-pointer"
    }
  }),
  import_extension_image.default.configure({
    allowBase64: !0,
    HTMLAttributes: {
      class: "rounded-lg border border-stone-200"
    }
  }),
  import_extension_placeholder.default.configure({
    placeholder: ({ node }) => node.type.name === "heading" ? `Heading ${node.attrs.level}` : "Press '/' for commands, or '++' for AI autocomplete...",
    includeChildren: !0
  }),
  slash_command_default,
  import_extension_underline.default,
  import_extension_text_style.default,
  import_extension_color.Color
];

// app/modules/novel/ui/editor/index.tsx
var import_use_debounce = require("use-debounce");
var import_react_hot_toast3 = require("react-hot-toast");

// app/modules/novel/ui/editor/components/EditorBubbleMenu.tsx
var import_react51 = require("@tiptap/react"), import_clsx23 = __toESM(require("clsx")), import_react52 = require("react"), import_lucide_react4 = require("lucide-react");

// app/modules/novel/ui/editor/components/NodeSelector.tsx
var import_clsx21 = __toESM(require("clsx")), import_lucide_react2 = require("lucide-react"), import_jsx_dev_runtime53 = require("react/jsx-dev-runtime"), NodeSelector = ({ editor, isOpen, setIsOpen }) => {
  let items = [
    {
      name: "Text",
      icon: import_lucide_react2.TextIcon,
      command: () => editor.chain().focus().toggleNode("paragraph", "paragraph").run(),
      isActive: () => editor.isActive("paragraph") && !editor.isActive("bulletList") && !editor.isActive("orderedList")
    },
    {
      name: "Heading 1",
      icon: import_lucide_react2.Heading1,
      command: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      isActive: () => editor.isActive("heading", { level: 1 })
    },
    {
      name: "Heading 2",
      icon: import_lucide_react2.Heading2,
      command: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      isActive: () => editor.isActive("heading", { level: 2 })
    },
    {
      name: "Heading 3",
      icon: import_lucide_react2.Heading3,
      command: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      isActive: () => editor.isActive("heading", { level: 3 })
    },
    {
      name: "Bullet List",
      icon: import_lucide_react2.ListOrdered,
      command: () => editor.chain().focus().toggleBulletList().run(),
      isActive: () => editor.isActive("bulletList")
    },
    {
      name: "Numbered List",
      icon: import_lucide_react2.ListOrdered,
      command: () => editor.chain().focus().toggleOrderedList().run(),
      isActive: () => editor.isActive("orderedList")
    },
    {
      name: "Quote",
      icon: import_lucide_react2.TextQuote,
      command: () => editor.chain().focus().toggleNode("paragraph", "paragraph").toggleBlockquote().run(),
      isActive: () => editor.isActive("blockquote")
    },
    {
      name: "Code",
      icon: import_lucide_react2.Code,
      command: () => editor.chain().focus().toggleCodeBlock().run(),
      isActive: () => editor.isActive("codeBlock")
    }
  ], activeItem = items.filter((item) => item.isActive()).pop() ?? {
    name: "Multiple"
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("div", { className: "relative h-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(
      "button",
      {
        className: "flex h-full items-center gap-1 p-2 text-sm font-medium text-stone-600 hover:bg-stone-100 active:bg-stone-200",
        type: "button",
        onClick: () => setIsOpen(!isOpen),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("span", { children: activeItem == null ? void 0 : activeItem.name }, void 0, !1, {
            fileName: "app/modules/novel/ui/editor/components/NodeSelector.tsx",
            lineNumber: 78,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(import_lucide_react2.ChevronDown, { className: "h-4 w-4" }, void 0, !1, {
            fileName: "app/modules/novel/ui/editor/components/NodeSelector.tsx",
            lineNumber: 80,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/modules/novel/ui/editor/components/NodeSelector.tsx",
        lineNumber: 73,
        columnNumber: 7
      },
      this
    ),
    isOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("section", { className: "fixed top-full z-[99999] mt-1 flex w-48 flex-col overflow-hidden rounded border border-stone-200 bg-white p-1 shadow-xl animate-in fade-in slide-in-from-top-1", children: items.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(
      "button",
      {
        type: "button",
        onClick: () => {
          item.command(), setIsOpen(!1);
        },
        className: (0, import_clsx21.default)("flex items-center justify-between rounded-sm px-2 py-1 text-sm text-stone-600 hover:bg-stone-100", {
          "text-blue-600": item.isActive()
        }),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("div", { className: "rounded-sm border border-stone-200 p-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(item.icon, { className: "h-3 w-3" }, void 0, !1, {
              fileName: "app/modules/novel/ui/editor/components/NodeSelector.tsx",
              lineNumber: 99,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/modules/novel/ui/editor/components/NodeSelector.tsx",
              lineNumber: 98,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("span", { children: item.name }, void 0, !1, {
              fileName: "app/modules/novel/ui/editor/components/NodeSelector.tsx",
              lineNumber: 101,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/modules/novel/ui/editor/components/NodeSelector.tsx",
            lineNumber: 97,
            columnNumber: 15
          }, this),
          activeItem.name === item.name && /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(import_lucide_react2.Check, { className: "h-4 w-4" }, void 0, !1, {
            fileName: "app/modules/novel/ui/editor/components/NodeSelector.tsx",
            lineNumber: 103,
            columnNumber: 49
          }, this)
        ]
      },
      index,
      !0,
      {
        fileName: "app/modules/novel/ui/editor/components/NodeSelector.tsx",
        lineNumber: 86,
        columnNumber: 13
      },
      this
    )) }, void 0, !1, {
      fileName: "app/modules/novel/ui/editor/components/NodeSelector.tsx",
      lineNumber: 84,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/modules/novel/ui/editor/components/NodeSelector.tsx",
    lineNumber: 72,
    columnNumber: 5
  }, this);
};

// app/modules/novel/ui/editor/components/ColorSelector.tsx
var import_clsx22 = __toESM(require("clsx")), import_lucide_react3 = require("lucide-react"), import_jsx_dev_runtime54 = require("react/jsx-dev-runtime"), ColorSelector = ({ editor, isOpen, setIsOpen }) => {
  let items = [
    {
      name: "Default",
      color: "#000000"
    },
    {
      name: "Purple",
      color: "#9333EA"
    },
    {
      name: "Red",
      color: "#E00000"
    },
    {
      name: "Blue",
      color: "#2563EB"
    },
    {
      name: "Green",
      color: "#008A00"
    },
    {
      name: "Orange",
      color: "#FFA500"
    },
    {
      name: "Pink",
      color: "#BA4081"
    },
    {
      name: "Gray",
      color: "#A8A29E"
    }
  ], activeItem = items.find(({ color }) => editor.isActive("textStyle", { color }));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("div", { className: "relative h-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(
      "button",
      {
        type: "button",
        className: "flex h-full items-center gap-1 p-2 text-sm font-medium text-stone-600 hover:bg-stone-100 active:bg-stone-200",
        onClick: () => setIsOpen(!isOpen),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("span", { style: { color: (activeItem == null ? void 0 : activeItem.color) || "#000000" }, children: "A" }, void 0, !1, {
            fileName: "app/modules/novel/ui/editor/components/ColorSelector.tsx",
            lineNumber: 62,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(import_lucide_react3.ChevronDown, { className: "h-4 w-4 " }, void 0, !1, {
            fileName: "app/modules/novel/ui/editor/components/ColorSelector.tsx",
            lineNumber: 64,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/modules/novel/ui/editor/components/ColorSelector.tsx",
        lineNumber: 57,
        columnNumber: 7
      },
      this
    ),
    isOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("section", { className: "fixed top-full z-[99999] mt-1 flex w-48 flex-col overflow-hidden rounded border border-stone-200 bg-white p-1 shadow-xl animate-in fade-in slide-in-from-top-1", children: items.map(({ name, color }, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(
      "button",
      {
        type: "button",
        onClick: () => {
          editor.chain().focus().setColor(color).run(), setIsOpen(!1);
        },
        className: (0, import_clsx22.default)("flex items-center justify-between rounded-sm px-2 py-1 text-sm text-stone-600 hover:bg-stone-100", {
          "text-blue-600": editor.isActive("textStyle", { color })
        }),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("div", { className: "rounded-sm border border-stone-200 px-1 py-px font-medium", style: { color }, children: "A" }, void 0, !1, {
              fileName: "app/modules/novel/ui/editor/components/ColorSelector.tsx",
              lineNumber: 82,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("span", { children: name }, void 0, !1, {
              fileName: "app/modules/novel/ui/editor/components/ColorSelector.tsx",
              lineNumber: 85,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/modules/novel/ui/editor/components/ColorSelector.tsx",
            lineNumber: 81,
            columnNumber: 15
          }, this),
          editor.isActive("textStyle", { color }) && /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(import_lucide_react3.Check, { className: "h-4 w-4" }, void 0, !1, {
            fileName: "app/modules/novel/ui/editor/components/ColorSelector.tsx",
            lineNumber: 87,
            columnNumber: 59
          }, this)
        ]
      },
      index,
      !0,
      {
        fileName: "app/modules/novel/ui/editor/components/ColorSelector.tsx",
        lineNumber: 70,
        columnNumber: 13
      },
      this
    )) }, void 0, !1, {
      fileName: "app/modules/novel/ui/editor/components/ColorSelector.tsx",
      lineNumber: 68,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/modules/novel/ui/editor/components/ColorSelector.tsx",
    lineNumber: 56,
    columnNumber: 5
  }, this);
};

// app/modules/novel/ui/editor/components/EditorBubbleMenu.tsx
var import_jsx_dev_runtime55 = require("react/jsx-dev-runtime"), EditorBubbleMenu = (props) => {
  let items = [
    {
      name: "bold",
      isActive: () => props.editor.isActive("bold"),
      command: () => props.editor.chain().focus().toggleBold().run(),
      icon: import_lucide_react4.BoldIcon
    },
    {
      name: "italic",
      isActive: () => props.editor.isActive("italic"),
      command: () => props.editor.chain().focus().toggleItalic().run(),
      icon: import_lucide_react4.ItalicIcon
    },
    {
      name: "underline",
      isActive: () => props.editor.isActive("underline"),
      command: () => props.editor.chain().focus().toggleUnderline().run(),
      icon: import_lucide_react4.UnderlineIcon
    },
    {
      name: "strike",
      isActive: () => props.editor.isActive("strike"),
      command: () => props.editor.chain().focus().toggleStrike().run(),
      icon: import_lucide_react4.StrikethroughIcon
    },
    {
      name: "code",
      isActive: () => props.editor.isActive("code"),
      command: () => props.editor.chain().focus().toggleCode().run(),
      icon: import_lucide_react4.CodeIcon
    }
  ], bubbleMenuProps = {
    ...props,
    shouldShow: ({ editor }) => editor.isActive("image") ? !1 : editor.view.state.selection.content().size > 0,
    tippyOptions: {
      moveTransition: "transform 0.15s ease-out",
      onHidden: () => {
        setIsNodeSelectorOpen(!1), setIsColorSelectorOpen(!1);
      }
    }
  }, [isNodeSelectorOpen, setIsNodeSelectorOpen] = (0, import_react52.useState)(!1), [isColorSelectorOpen, setIsColorSelectorOpen] = (0, import_react52.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(import_react51.BubbleMenu, { ...bubbleMenuProps, className: "flex overflow-hidden rounded border border-stone-200 bg-white shadow-xl", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(
      NodeSelector,
      {
        editor: props.editor,
        isOpen: isNodeSelectorOpen,
        setIsOpen: () => {
          setIsNodeSelectorOpen(!isNodeSelectorOpen), setIsColorSelectorOpen(!1);
        }
      },
      void 0,
      !1,
      {
        fileName: "app/modules/novel/ui/editor/components/EditorBubbleMenu.tsx",
        lineNumber: 75,
        columnNumber: 7
      },
      this
    ),
    items.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("button", { onClick: item.command, type: "button", className: "p-2 text-stone-600 hover:bg-stone-100 active:bg-stone-200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(
      item.icon,
      {
        className: (0, import_clsx23.default)("h-4 w-4", {
          "text-blue-500": item.isActive()
        })
      },
      void 0,
      !1,
      {
        fileName: "app/modules/novel/ui/editor/components/EditorBubbleMenu.tsx",
        lineNumber: 86,
        columnNumber: 11
      },
      this
    ) }, index, !1, {
      fileName: "app/modules/novel/ui/editor/components/EditorBubbleMenu.tsx",
      lineNumber: 85,
      columnNumber: 9
    }, this)),
    /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(
      ColorSelector,
      {
        editor: props.editor,
        isOpen: isColorSelectorOpen,
        setIsOpen: () => {
          setIsColorSelectorOpen(!isColorSelectorOpen), setIsNodeSelectorOpen(!1);
        }
      },
      void 0,
      !1,
      {
        fileName: "app/modules/novel/ui/editor/components/EditorBubbleMenu.tsx",
        lineNumber: 93,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/modules/novel/ui/editor/components/EditorBubbleMenu.tsx",
    lineNumber: 74,
    columnNumber: 5
  }, this);
};

// app/modules/novel/ui/editor/index.tsx
var import_jsx_dev_runtime56 = require("react/jsx-dev-runtime");
function NovelEditor({ content, onChange }) {
  let [saveStatus, setSaveStatus] = (0, import_react53.useState)("Saved"), [hydrated, setHydrated] = (0, import_react53.useState)(!1), debouncedUpdates = (0, import_use_debounce.useDebouncedCallback)(async ({ editor: editor2 }) => {
    let json25 = editor2.getJSON(), html = editor2.getHTML(), text = editor2.getText();
    setSaveStatus("Saving..."), onChange({
      json: json25,
      html,
      text
    }), setTimeout(() => {
      setSaveStatus("Saved");
    }, 500);
  }, 750), editor = (0, import_react54.useEditor)({
    extensions: TiptapExtensions,
    editorProps: TiptapEditorProps,
    onUpdate: (e) => {
      setSaveStatus("Unsaved");
      let selection = e.editor.state.selection;
      e.editor.state.doc.textBetween(selection.from - 2, selection.from, `
`) === "++" && !isLoading ? (e.editor.commands.deleteRange({
        from: selection.from - 2,
        to: selection.from
      }), complete(e.editor.getText())) : debouncedUpdates(e);
    },
    autofocus: "start"
  }), { complete, completion, isLoading, stop } = useCompletion({
    id: "novel",
    api: "/api/ai/generate",
    onResponse: (response) => {
      if (response.status === 429) {
        import_react_hot_toast3.toast.error("You have reached your request limit for the day.");
        return;
      }
    },
    onFinish: (_prompt, completion2) => {
      editor == null || editor.commands.setTextSelection({
        from: editor.state.selection.from - completion2.length,
        to: editor.state.selection.from
      });
    },
    onError: () => {
      import_react_hot_toast3.toast.error("Something went wrong.");
    }
  }), prev = (0, import_react53.useRef)("");
  return (0, import_react53.useEffect)(() => {
    let diff = completion.slice(prev.current.length);
    prev.current = completion, editor == null || editor.commands.insertContent(diff, {
      parseOptions: {
        preserveWhitespace: "full"
      }
    });
  }, [isLoading, editor, completion]), (0, import_react53.useEffect)(() => {
    let onKeyDown = (e) => {
      (e.key === "Escape" || e.metaKey && e.key === "z") && (stop(), e.key === "Escape" && (editor == null || editor.commands.deleteRange({
        from: editor.state.selection.from - completion.length,
        to: editor.state.selection.from
      })), editor == null || editor.commands.insertContent("++"));
    }, mousedownHandler = (e) => {
      e.preventDefault(), e.stopPropagation(), stop(), window.confirm("AI writing paused. Continue?") && complete((editor == null ? void 0 : editor.getText()) || "");
    };
    return isLoading ? (document.addEventListener("keydown", onKeyDown), window.addEventListener("mousedown", mousedownHandler)) : (document.removeEventListener("keydown", onKeyDown), window.removeEventListener("mousedown", mousedownHandler)), () => {
      document.removeEventListener("keydown", onKeyDown), window.removeEventListener("mousedown", mousedownHandler);
    };
  }, [stop, isLoading, editor, complete, completion.length]), (0, import_react53.useEffect)(() => {
    editor && content && !hydrated && (editor.commands.setContent(content), setHydrated(!0));
  }, [editor, content, hydrated]), /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(
    "div",
    {
      onClick: () => {
        editor == null || editor.chain().focus().run();
      },
      className: "relative min-h-[500px] w-full max-w-screen-lg border-stone-200 bg-white p-12 px-8 sm:mb-[calc(20vh)] sm:rounded-lg sm:border sm:px-12 sm:shadow-lg",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)("div", { className: "absolute right-5 top-5 mb-5 rounded-lg bg-stone-100 px-2 py-1 text-sm text-stone-400", children: saveStatus }, void 0, !1, {
          fileName: "app/modules/novel/ui/editor/index.tsx",
          lineNumber: 150,
          columnNumber: 7
        }, this),
        editor ? /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_jsx_dev_runtime56.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_react54.EditorContent, { editor }, void 0, !1, {
            fileName: "app/modules/novel/ui/editor/index.tsx",
            lineNumber: 154,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(EditorBubbleMenu, { editor }, void 0, !1, {
            fileName: "app/modules/novel/ui/editor/index.tsx",
            lineNumber: 155,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/modules/novel/ui/editor/index.tsx",
          lineNumber: 153,
          columnNumber: 9
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_jsx_dev_runtime56.Fragment, {}, void 0, !1, {
          fileName: "app/modules/novel/ui/editor/index.tsx",
          lineNumber: 158,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/modules/novel/ui/editor/index.tsx",
      lineNumber: 144,
      columnNumber: 5
    },
    this
  );
}

// app/utils/hooks/use-local-storage.ts
var import_react55 = require("react"), useLocalStorage = (key, initialValue) => {
  let [storedValue, setStoredValue] = (0, import_react55.useState)(initialValue);
  return (0, import_react55.useEffect)(() => {
    if (key) {
      let item = window.localStorage.getItem(key);
      item && setStoredValue(JSON.parse(item));
    }
  }, [key]), [storedValue, (value) => {
    setStoredValue(value), key && window.localStorage.setItem(key, JSON.stringify(value));
  }];
}, use_local_storage_default = useLocalStorage;

// app/modules/knowledgeBase/components/bases/KbArticleForm.tsx
var import_jsx_dev_runtime57 = require("react/jsx-dev-runtime");
function KbArticleForm({ item }) {
  let [content, setContent] = use_local_storage_default(item.id, item.contentDraft), [contentType, setContentType] = (0, import_react56.useState)((item == null ? void 0 : item.contentType) ?? "wysiwyg");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("div", { className: "space-y-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("div", { className: "grid gap-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("div", { className: "space-y-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("div", { className: "flex justify-between space-x-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("div", { className: "flex space-x-1 items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("button", { type: "button", onClick: () => setContentType("wysiwyg"), className: "text-xs hover:underline text-gray-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("div", { className: (0, import_clsx24.default)(contentType === "wysiwyg" ? "font-bold" : ""), children: "WYSIWYG" }, void 0, !1, {
        fileName: "app/modules/knowledgeBase/components/bases/KbArticleForm.tsx",
        lineNumber: 20,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/modules/knowledgeBase/components/bases/KbArticleForm.tsx",
        lineNumber: 19,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("div", { children: "\u2022" }, void 0, !1, {
        fileName: "app/modules/knowledgeBase/components/bases/KbArticleForm.tsx",
        lineNumber: 22,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("button", { type: "button", onClick: () => setContentType("markdown"), className: "text-xs hover:underline text-gray-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("div", { className: (0, import_clsx24.default)(contentType === "markdown" ? "font-bold" : ""), children: "Markdown" }, void 0, !1, {
        fileName: "app/modules/knowledgeBase/components/bases/KbArticleForm.tsx",
        lineNumber: 24,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/modules/knowledgeBase/components/bases/KbArticleForm.tsx",
        lineNumber: 23,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/modules/knowledgeBase/components/bases/KbArticleForm.tsx",
      lineNumber: 18,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/modules/knowledgeBase/components/bases/KbArticleForm.tsx",
      lineNumber: 16,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("input", { name: "contentType", value: contentType, readOnly: !0, hidden: !0 }, void 0, !1, {
      fileName: "app/modules/knowledgeBase/components/bases/KbArticleForm.tsx",
      lineNumber: 28,
      columnNumber: 11
    }, this),
    contentType === "wysiwyg" ? /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("input", { type: "hidden", name: "content", value: content, readOnly: !0, hidden: !0 }, void 0, !1, {
        fileName: "app/modules/knowledgeBase/components/bases/KbArticleForm.tsx",
        lineNumber: 31,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(NovelEditor, { content, onChange: (e) => setContent(e.html ?? "") }, void 0, !1, {
        fileName: "app/modules/knowledgeBase/components/bases/KbArticleForm.tsx",
        lineNumber: 32,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/modules/knowledgeBase/components/bases/KbArticleForm.tsx",
      lineNumber: 30,
      columnNumber: 13
    }, this) : contentType === "markdown" ? /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(
      InputText_default,
      {
        className: "col-span-12",
        rows: 6,
        editor: "monaco",
        editorLanguage: "markdown",
        editorTheme: "vs-dark",
        editorSize: "screen",
        editorFontSize: 14,
        name: "content",
        value: content,
        setValue: (e) => setContent(e.toString())
      },
      void 0,
      !1,
      {
        fileName: "app/modules/knowledgeBase/components/bases/KbArticleForm.tsx",
        lineNumber: 36,
        columnNumber: 13
      },
      this
    ) : null
  ] }, void 0, !0, {
    fileName: "app/modules/knowledgeBase/components/bases/KbArticleForm.tsx",
    lineNumber: 15,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/modules/knowledgeBase/components/bases/KbArticleForm.tsx",
    lineNumber: 14,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/modules/knowledgeBase/components/bases/KbArticleForm.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/modules/knowledgeBase/service/KnowledgeBasePermissionsService.ts
var import_node9 = require("@remix-run/node");
async function hasPermission({ action: action18 }) {
  if (process.env.LOGGED_AS_ADMIN !== "true")
    throw (0, import_node9.json)({ message: "DEMO CANNOT BE UPDATED" }, { status: 400 });
}
var KnowledgeBasePermissionsService_default = {
  hasPermission
};

// app/routes/admin/knowledge-base/bases.$slug/articles.$lang.$id.edit.tsx
var import_jsx_dev_runtime58 = require("react/jsx-dev-runtime"), loader6 = async ({ params }) => {
  let knowledgeBase = await KnowledgeBaseService_default.get({
    slug: params.slug
  });
  if (!knowledgeBase)
    return (0, import_node10.redirect)("/admin/knowledge-base/bases");
  let item = await getKbArticleById(params.id);
  return item ? (0, import_node10.json)({
    knowledgeBase,
    item
  }) : (0, import_node10.redirect)(`/admin/knowledge-base/bases/${params.slug}/articles`);
}, action4 = async ({ request, params }) => {
  var _a, _b, _c;
  let form = await request.formData(), action18 = ((_a = form.get("action")) == null ? void 0 : _a.toString()) ?? "";
  await KnowledgeBasePermissionsService_default.hasPermission({ action: action18 });
  let item = await getKbArticleById(params.id);
  if (!item)
    return (0, import_node10.json)({ error: "Article not found" }, { status: 400 });
  if (action18 === "edit") {
    let content = ((_b = form.get("content")) == null ? void 0 : _b.toString()) ?? "", contentType = ((_c = form.get("contentType")) == null ? void 0 : _c.toString()) ?? "";
    return await updateKnowledgeBaseArticle(item.id, {
      contentDraft: content,
      contentType
    }), (0, import_node10.redirect)(`/admin/knowledge-base/bases/${params.slug}/articles/${params.lang}/${params.id}`);
  }
  return (0, import_node10.json)({ error: "Invalid action" }, { status: 400 });
};
function articles_lang_id_edit_default() {
  let data = (0, import_remix_typedjson5.useTypedLoaderData)(), actionData = (0, import_remix_typedjson5.useTypedActionData)(), params = (0, import_react57.useParams)(), outlet = (0, import_react57.useOutlet)(), navigate = (0, import_react57.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_react57.Form, { method: "post", className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("input", { type: "hidden", readOnly: !0, name: "action", value: "edit" }, void 0, !1, {
      fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.$id.edit.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(
      EditPageLayout,
      {
        title: `${data.item.title}`,
        withHome: !1,
        menu: [
          { title: "Knowledge Bases", routePath: "/admin/knowledge-base/bases" },
          { title: "Articles", routePath: `/admin/knowledge-base/bases/${params.slug}/articles` },
          { title: params.lang, routePath: `/admin/knowledge-base/bases/${params.slug}/articles/${params.lang}` },
          {
            title: data.item.title,
            routePath: `/admin/knowledge-base/bases/${params.slug}/articles/${params.lang}/${params.id}`
          }
        ],
        buttons: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_jsx_dev_runtime58.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(ButtonSecondary, { to: `/admin/knowledge-base/bases/${params.slug}/articles/${params.lang}/${params.id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("div", { children: "Cancel" }, void 0, !1, {
            fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.$id.edit.tsx",
            lineNumber: 90,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.$id.edit.tsx",
            lineNumber: 89,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(LoadingButton_default, { type: "submit", children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("div", { children: "Save draft" }, void 0, !1, {
            fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.$id.edit.tsx",
            lineNumber: 93,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.$id.edit.tsx",
            lineNumber: 92,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.$id.edit.tsx",
          lineNumber: 88,
          columnNumber: 11
        }, this),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("div", { className: "space-y-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(KbArticleForm, { item: data.item }, void 0, !1, {
            fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.$id.edit.tsx",
            lineNumber: 99,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.$id.edit.tsx",
            lineNumber: 98,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(ActionResultModal, { actionData, showSuccess: !1 }, void 0, !1, {
            fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.$id.edit.tsx",
            lineNumber: 102,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(
            SlideOverWideEmpty,
            {
              title: "Article settings",
              open: !!outlet,
              onClose: () => {
                navigate(".", { replace: !0 });
              },
              className: "sm:max-w-sm",
              overflowYScroll: !0,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("div", { className: "-mx-1 -mt-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("div", { className: "space-y-4", children: outlet }, void 0, !1, {
                fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.$id.edit.tsx",
                lineNumber: 114,
                columnNumber: 13
              }, this) }, void 0, !1, {
                fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.$id.edit.tsx",
                lineNumber: 113,
                columnNumber: 11
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.$id.edit.tsx",
              lineNumber: 104,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.$id.edit.tsx",
        lineNumber: 75,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.$id.edit.tsx",
    lineNumber: 73,
    columnNumber: 5
  }, this);
}

// app/routes/admin/knowledge-base/bases.$slug/articles.$lang.$id.tsx
var articles_lang_id_exports = {};
__export(articles_lang_id_exports, {
  action: () => action5,
  default: () => articles_lang_id_default,
  loader: () => loader7
});
var import_node11 = require("@remix-run/node"), import_react58 = require("@remix-run/react"), import_remix_typedjson6 = require("remix-typedjson");
var import_jsx_dev_runtime59 = require("react/jsx-dev-runtime"), loader7 = async ({ params }) => {
  let knowledgeBase = await KnowledgeBaseService_default.get({
    slug: params.slug
  });
  if (!knowledgeBase)
    return (0, import_node11.redirect)("/admin/knowledge-base/bases");
  let item = await KnowledgeBaseService_default.getArticleById({
    kb: knowledgeBase,
    id: params.id
  });
  return item ? (0, import_node11.json)({
    knowledgeBase,
    item
  }) : (0, import_node11.redirect)(`/admin/knowledge-base/bases/${params.slug}/articles`);
}, action5 = async ({ request, params }) => {
  var _a;
  let action18 = ((_a = (await request.formData()).get("action")) == null ? void 0 : _a.toString()) ?? "";
  await KnowledgeBasePermissionsService_default.hasPermission({ action: action18 });
  let item = await getKbArticleById(params.id);
  if (!item)
    return (0, import_node11.json)({ error: "Article not found" }, { status: 400 });
  if (action18 === "togglePublish") {
    if (!item.categoryId)
      return (0, import_node11.json)({ error: "Article must have a category. Go to settings to set one." }, { status: 400 });
    let publishedAt = item.publishedAt, contentPublished = item.contentPublished;
    return item.publishedAt ? publishedAt = null : (publishedAt = new Date(), contentPublished = item.contentDraft), await updateKnowledgeBaseArticle(item.id, {
      publishedAt,
      contentPublished
    }), (0, import_node11.json)({ success: !0 });
  }
  return (0, import_node11.json)({ error: "Invalid action" }, { status: 400 });
};
function articles_lang_id_default() {
  let data = (0, import_remix_typedjson6.useTypedLoaderData)(), actionData = (0, import_remix_typedjson6.useTypedActionData)(), params = (0, import_react58.useParams)(), outlet = (0, import_react58.useOutlet)(), navigate = (0, import_react58.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(import_react58.Form, { method: "post", className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)("input", { type: "hidden", readOnly: !0, name: "action", value: "togglePublish" }, void 0, !1, {
      fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.$id.tsx",
      lineNumber: 86,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(
      EditPageLayout,
      {
        title: `${data.item.title}`,
        withHome: !1,
        menu: [
          { title: "Knowledge Bases", routePath: "/admin/knowledge-base/bases" },
          { title: "Articles", routePath: `/admin/knowledge-base/bases/${params.slug}/articles` },
          { title: params.lang, routePath: `/admin/knowledge-base/bases/${params.slug}/articles/${params.lang}` },
          {
            title: data.item.title,
            routePath: `/admin/knowledge-base/bases/${params.slug}/articles/${params.lang}/${params.id}`
          }
        ],
        buttons: /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(import_jsx_dev_runtime59.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(ButtonSecondary, { to: "settings", children: /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)("div", { children: "Settings" }, void 0, !1, {
            fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.$id.tsx",
            lineNumber: 102,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.$id.tsx",
            lineNumber: 101,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(ButtonSecondary, { to: "edit", children: /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)("div", { children: "Edit latest" }, void 0, !1, {
            fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.$id.tsx",
            lineNumber: 105,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.$id.tsx",
            lineNumber: 104,
            columnNumber: 13
          }, this),
          data.item.publishedAt && /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(ButtonSecondary, { to: data.item.href, target: "_blank", children: /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)("div", { children: "Preview" }, void 0, !1, {
            fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.$id.tsx",
            lineNumber: 109,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.$id.tsx",
            lineNumber: 108,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(ButtonPrimary, { type: "submit", destructive: !!data.item.publishedAt, children: data.item.publishedAt ? /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)("div", { children: "Unpublish" }, void 0, !1, {
            fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.$id.tsx",
            lineNumber: 113,
            columnNumber: 40
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)("div", { children: "Publish" }, void 0, !1, {
            fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.$id.tsx",
            lineNumber: 113,
            columnNumber: 63
          }, this) }, void 0, !1, {
            fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.$id.tsx",
            lineNumber: 112,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.$id.tsx",
          lineNumber: 100,
          columnNumber: 11
        }, this),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)("div", { className: "space-y-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)("div", { className: "space-y-3 max-w-2xl mx-auto py-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(KbArticleContent, { item: data.item, content: data.item.contentDraft }, void 0, !1, {
            fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.$id.tsx",
            lineNumber: 120,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.$id.tsx",
            lineNumber: 119,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.$id.tsx",
            lineNumber: 118,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(ActionResultModal, { actionData, showSuccess: !1 }, void 0, !1, {
            fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.$id.tsx",
            lineNumber: 124,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(
            SlideOverWideEmpty,
            {
              title: "Article settings",
              open: !!outlet,
              onClose: () => {
                navigate(".", { replace: !0 });
              },
              className: "sm:max-w-sm",
              overflowYScroll: !0,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)("div", { className: "-mx-1 -mt-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)("div", { className: "space-y-4", children: outlet }, void 0, !1, {
                fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.$id.tsx",
                lineNumber: 136,
                columnNumber: 13
              }, this) }, void 0, !1, {
                fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.$id.tsx",
                lineNumber: 135,
                columnNumber: 11
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.$id.tsx",
              lineNumber: 126,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.$id.tsx",
        lineNumber: 87,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.$id.tsx",
    lineNumber: 85,
    columnNumber: 5
  }, this);
}

// app/routes/admin/knowledge-base/bases.$slug/articles.$lang.$id/settings.tsx
var settings_exports = {};
__export(settings_exports, {
  action: () => action6,
  default: () => settings_default,
  loader: () => loader8
});
var import_node12 = require("@remix-run/node"), import_react68 = require("@remix-run/react"), import_react69 = require("react"), import_remix_typedjson7 = require("remix-typedjson");

// app/components/ui/modals/ConfirmModal.tsx
var import_react59 = require("react"), import_react60 = require("@headlessui/react"), import_clsx25 = __toESM(require("clsx")), import_jsx_dev_runtime60 = require("react/jsx-dev-runtime"), ConfirmModal = (props, ref) => {
  let [open, setOpen] = (0, import_react59.useState)(!1), [title, setTitle] = (0, import_react59.useState)(), [value, setValue] = (0, import_react59.useState)(), [description, setDescription] = (0, import_react59.useState)(), [inputString, setInputString] = (0, import_react59.useState)(""), [yesTitle, setYesTitle] = (0, import_react59.useState)(""), [noTitle, setNoTitle] = (0, import_react59.useState)(""), cancelButtonRef = (0, import_react59.useRef)(null), inputValue = (0, import_react59.useRef)();
  (0, import_react59.useEffect)(() => {
    setTitle("Confirm".toString());
  }, []);
  function no() {
    setOpen(!1), props.onNo && props.onNo();
  }
  function yes() {
    setOpen(!1), props.onYes && props.onYes(value ?? inputString);
  }
  (0, import_react59.useImperativeHandle)(ref, () => ({ show, setValue }));
  function show(_question, _yesTitle = "Confirm".toString(), _noTitle = "Back".toString(), _description, _inputString) {
    setTitle(_question.toString()), _yesTitle && setYesTitle(_yesTitle), _noTitle && setNoTitle(_noTitle), _description && setDescription(_description), setTimeout(() => {
      (props.inputType === "email" || props.inputType === "string" || props.inputType === "slug") && inputValue.current && (inputValue.current.focus(), inputValue.current.select());
    }, 0), setOpen(!0), setInputString(_inputString);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(import_react60.Transition.Root, { show: open, as: import_react59.Fragment, children: /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(import_react60.Dialog, { as: "div", className: "fixed inset-0 z-50 overflow-y-auto", initialFocus: cancelButtonRef, onClose: setOpen, children: /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("div", { className: "flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(
      import_react60.Transition.Child,
      {
        as: import_react59.Fragment,
        enter: "ease-out duration-300",
        enterFrom: "opacity-0",
        enterTo: "opacity-100",
        leave: "ease-in duration-200",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(import_react60.Dialog.Overlay, { className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" }, void 0, !1, {
          fileName: "app/components/ui/modals/ConfirmModal.tsx",
          lineNumber: 90,
          columnNumber: 13
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/ui/modals/ConfirmModal.tsx",
        lineNumber: 81,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("span", { className: "hidden sm:inline-block sm:h-screen sm:align-middle", "aria-hidden": "true", children: "\u200B" }, void 0, !1, {
      fileName: "app/components/ui/modals/ConfirmModal.tsx",
      lineNumber: 94,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(
      import_react60.Transition.Child,
      {
        as: import_react59.Fragment,
        enter: "ease-out duration-300",
        enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
        enterTo: "opacity-100 translate-y-0 sm:scale-100",
        leave: "ease-in duration-200",
        leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
        leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("div", { className: "inline-block w-full transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8 sm:max-w-lg sm:p-6 sm:align-middle", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("div", { className: "mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-yellow-300 bg-yellow-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                className: "h-6 w-6 text-yellow-600",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                strokeWidth: "2",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/ui/modals/ConfirmModal.tsx",
                    lineNumber: 117,
                    columnNumber: 21
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/components/ui/modals/ConfirmModal.tsx",
                lineNumber: 109,
                columnNumber: 19
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/ui/modals/ConfirmModal.tsx",
              lineNumber: 108,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("div", { className: "mt-3 text-center sm:mt-5", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(import_react60.Dialog.Title, { as: "h3", className: "text-lg font-medium leading-6 text-gray-900", children: title }, void 0, !1, {
                fileName: "app/components/ui/modals/ConfirmModal.tsx",
                lineNumber: 125,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("p", { className: "text-sm text-gray-500", children: description }, void 0, !1, {
                fileName: "app/components/ui/modals/ConfirmModal.tsx",
                lineNumber: 129,
                columnNumber: 21
              }, this) }, void 0, !1, {
                fileName: "app/components/ui/modals/ConfirmModal.tsx",
                lineNumber: 128,
                columnNumber: 19
              }, this),
              props.inputType === "email" && /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("div", { className: "mt-4", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("label", { htmlFor: "value", className: "block text-sm font-medium text-gray-700" }, void 0, !1, {
                  fileName: "app/components/ui/modals/ConfirmModal.tsx",
                  lineNumber: 133,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("div", { className: "relative mt-1 rounded-md shadow-sm", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("div", { className: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("svg", { className: "h-5 w-5 text-gray-400", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("path", { d: "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" }, void 0, !1, {
                      fileName: "app/components/ui/modals/ConfirmModal.tsx",
                      lineNumber: 138,
                      columnNumber: 29
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("path", { d: "M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" }, void 0, !1, {
                      fileName: "app/components/ui/modals/ConfirmModal.tsx",
                      lineNumber: 139,
                      columnNumber: 29
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/components/ui/modals/ConfirmModal.tsx",
                    lineNumber: 137,
                    columnNumber: 27
                  }, this) }, void 0, !1, {
                    fileName: "app/components/ui/modals/ConfirmModal.tsx",
                    lineNumber: 135,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(
                    "input",
                    {
                      value: inputString,
                      onChange: (e) => setInputString(e.target.value),
                      ref: inputValue,
                      type: "value",
                      name: "email",
                      id: "email",
                      className: "block w-full rounded-md border-gray-300 pl-10 focus:border-gray-500 focus:ring-gray-500 sm:text-sm",
                      placeholder: "your@email.com"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/ui/modals/ConfirmModal.tsx",
                      lineNumber: 142,
                      columnNumber: 25
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "app/components/ui/modals/ConfirmModal.tsx",
                  lineNumber: 134,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/ui/modals/ConfirmModal.tsx",
                lineNumber: 132,
                columnNumber: 21
              }, this),
              props.inputType === "string" && /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("div", { className: "mt-4", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("label", { htmlFor: "value", className: "block text-sm font-medium text-gray-700" }, void 0, !1, {
                  fileName: "app/components/ui/modals/ConfirmModal.tsx",
                  lineNumber: 157,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("div", { className: "relative mt-1 rounded-md shadow-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(
                  "input",
                  {
                    value: inputString,
                    onChange: (e) => setInputString(e.target.value),
                    ref: inputValue,
                    type: "text",
                    name: "value",
                    id: "value",
                    className: "block w-full rounded-md border-gray-300 focus:border-gray-500 focus:ring-gray-500 sm:text-sm",
                    placeholder: props.placeholder
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/ui/modals/ConfirmModal.tsx",
                    lineNumber: 159,
                    columnNumber: 25
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/components/ui/modals/ConfirmModal.tsx",
                  lineNumber: 158,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/ui/modals/ConfirmModal.tsx",
                lineNumber: 156,
                columnNumber: 21
              }, this),
              props.inputType === "slug" && /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("div", { className: "mt-4", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("label", { htmlFor: "value", className: "block text-sm font-medium text-gray-700" }, void 0, !1, {
                  fileName: "app/components/ui/modals/ConfirmModal.tsx",
                  lineNumber: 174,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("div", { className: "relative mt-1 rounded-md shadow-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(
                  "input",
                  {
                    value: inputString,
                    onChange: (e) => setInputString(e.target.value.toLowerCase()),
                    ref: inputValue,
                    type: "text",
                    name: "value",
                    id: "value",
                    className: "block w-full rounded-md border-gray-300 focus:border-gray-500 focus:ring-gray-500 sm:text-sm",
                    placeholder: props.placeholder
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/ui/modals/ConfirmModal.tsx",
                    lineNumber: 176,
                    columnNumber: 25
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/components/ui/modals/ConfirmModal.tsx",
                  lineNumber: 175,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/ui/modals/ConfirmModal.tsx",
                lineNumber: 173,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/ui/modals/ConfirmModal.tsx",
              lineNumber: 124,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/ui/modals/ConfirmModal.tsx",
            lineNumber: 107,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("div", { className: "mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(
              "button",
              {
                type: "button",
                className: (0, import_clsx25.default)(
                  "inline-flex w-full justify-center rounded-md border border-transparent px-4 py-2 text-base  font-medium text-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 sm:col-start-2 sm:text-sm",
                  props.destructive ? "bg-red-600 hover:bg-red-700 focus:ring-red-500" : "bg-accent-600 hover:bg-accent-700 focus:ring-accent-500"
                ),
                onClick: yes,
                children: yesTitle
              },
              void 0,
              !1,
              {
                fileName: "app/components/ui/modals/ConfirmModal.tsx",
                lineNumber: 192,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(
              "button",
              {
                type: "button",
                className: "mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm",
                onClick: no,
                ref: cancelButtonRef,
                children: noTitle
              },
              void 0,
              !1,
              {
                fileName: "app/components/ui/modals/ConfirmModal.tsx",
                lineNumber: 202,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/ui/modals/ConfirmModal.tsx",
            lineNumber: 191,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/ui/modals/ConfirmModal.tsx",
          lineNumber: 106,
          columnNumber: 13
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/ui/modals/ConfirmModal.tsx",
        lineNumber: 97,
        columnNumber: 11
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/ui/modals/ConfirmModal.tsx",
    lineNumber: 80,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/ui/modals/ConfirmModal.tsx",
    lineNumber: 79,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/ui/modals/ConfirmModal.tsx",
    lineNumber: 78,
    columnNumber: 5
  }, this);
}, ConfirmModal_default = (0, import_react59.forwardRef)(ConfirmModal);

// app/modules/knowledgeBase/components/bases/KbArticleSettingsForm.tsx
var import_react66 = require("@remix-run/react"), import_react67 = require("react");

// app/components/ui/input/InputCheckboxWithDescription.tsx
var import_clsx26 = __toESM(require("clsx")), import_react61 = require("react");
var import_jsx_dev_runtime61 = require("react/jsx-dev-runtime");
function InputCheckboxWithDescription({ name, title, value, setValue, description, className, help, disabled = !1, autoFocus }) {
  let [checked, setChecked] = (0, import_react61.useState)(value ?? !1);
  return (0, import_react61.useEffect)(() => {
    value !== checked && setChecked(value ?? !1);
  }, [value]), (0, import_react61.useEffect)(() => {
    setValue && value !== checked && setValue(checked);
  }, [checked]), /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)("div", { className: (0, import_clsx26.default)("relative flex items-start pb-4 pt-2", className), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)("div", { className: "min-w-0 flex-1 text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)("label", { htmlFor: name, className: "cursor-pointer select-none", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)("div", { className: "font-medium text-gray-700", children: title }, void 0, !1, {
        fileName: "app/components/ui/input/InputCheckboxWithDescription.tsx",
        lineNumber: 37,
        columnNumber: 11
      }, this),
      help && /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)(HintTooltip, { text: help }, void 0, !1, {
        fileName: "app/components/ui/input/InputCheckboxWithDescription.tsx",
        lineNumber: 39,
        columnNumber: 20
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)("div", { id: name + "-description", className: "text-gray-400", children: description }, void 0, !1, {
        fileName: "app/components/ui/input/InputCheckboxWithDescription.tsx",
        lineNumber: 41,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ui/input/InputCheckboxWithDescription.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/ui/input/InputCheckboxWithDescription.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)("div", { className: "ml-3 flex h-5 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)(
      "input",
      {
        id: name,
        "aria-describedby": name + "-description",
        name,
        type: "checkbox",
        checked,
        onChange: (e) => {
          setChecked(e.target.checked);
        },
        disabled,
        autoFocus,
        className: (0, import_clsx26.default)(disabled && "cursor-not-allowed bg-gray-100", "h-4 w-4 cursor-pointer rounded border-gray-300 text-accent-600 focus:ring-accent-500")
      },
      void 0,
      !1,
      {
        fileName: "app/components/ui/input/InputCheckboxWithDescription.tsx",
        lineNumber: 47,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/ui/input/InputCheckboxWithDescription.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ui/input/InputCheckboxWithDescription.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}

// app/components/ui/input/InputSelector.tsx
var import_react62 = require("react"), import_react63 = require("react"), import_react64 = require("@headlessui/react"), import_react65 = require("@remix-run/react");

// app/components/ui/badges/ColorBadge.tsx
var import_clsx28 = __toESM(require("clsx"));

// app/utils/shared/ColorUtils.ts
var import_clsx27 = __toESM(require("clsx"));
function getColors(main) {
  return main ? [
    2 /* GRAY */,
    5 /* RED */,
    6 /* ORANGE */,
    8 /* YELLOW */,
    10 /* GREEN */,
    12 /* TEAL */,
    13 /* CYAN */,
    14 /* SKY */,
    15 /* BLUE */,
    16 /* INDIGO */,
    17 /* VIOLET */,
    18 /* PURPLE */,
    19 /* FUCHSIA */,
    20 /* PINK */,
    21 /* ROSE */
  ] : [
    1 /* SLATE */,
    2 /* GRAY */,
    3 /* NEUTRAL */,
    4 /* STONE */,
    5 /* RED */,
    6 /* ORANGE */,
    7 /* AMBER */,
    8 /* YELLOW */,
    9 /* LIME */,
    10 /* GREEN */,
    11 /* EMERALD */,
    12 /* TEAL */,
    13 /* CYAN */,
    14 /* SKY */,
    15 /* BLUE */,
    16 /* INDIGO */,
    17 /* VIOLET */,
    18 /* PURPLE */,
    19 /* FUCHSIA */,
    20 /* PINK */,
    21 /* ROSE */
  ];
}
function getBadgeColor(itemColor, strong) {
  switch (itemColor) {
    case 0 /* UNDEFINED */:
      return (0, import_clsx27.default)("bg-gray-50 border border-gray-200 text-gray-600", strong && "bg-gray-400 border-gray-900 text-gray-900");
    case 1 /* SLATE */:
      return (0, import_clsx27.default)("bg-slate-50 border border-slate-200 text-slate-600", strong && "bg-slate-400 border-slate-900 text-slate-900");
    case 2 /* GRAY */:
      return (0, import_clsx27.default)("bg-gray-50 border border-gray-200 text-gray-600", strong && "bg-gray-400 border-gray-900 text-gray-900");
    case 3 /* NEUTRAL */:
      return (0, import_clsx27.default)("bg-neutral-50 border border-neutral-200 text-neutral-600", strong && "bg-neutral-400 border-neutral-900 text-neutral-900");
    case 4 /* STONE */:
      return (0, import_clsx27.default)("bg-stone-50 border border-stone-200 text-stone-600", strong && "bg-stone-400 border-stone-900 text-stone-900");
    case 5 /* RED */:
      return (0, import_clsx27.default)("bg-red-50 border border-red-200 text-red-600", strong && "bg-red-400 border-red-900 text-red-900");
    case 6 /* ORANGE */:
      return (0, import_clsx27.default)("bg-orange-50 border border-orange-200 text-orange-600", strong && "bg-orange-400 border-orange-900 text-orange-900");
    case 7 /* AMBER */:
      return (0, import_clsx27.default)("bg-amber-50 border border-amber-200 text-amber-600", strong && "bg-amber-400 border-amber-900 text-amber-900");
    case 8 /* YELLOW */:
      return (0, import_clsx27.default)("bg-yellow-50 border border-yellow-200 text-yellow-600", strong && "bg-yellow-400 border-yellow-900 text-yellow-900");
    case 9 /* LIME */:
      return (0, import_clsx27.default)("bg-lime-50 border border-lime-200 text-lime-600", strong && "bg-lime-400 border-lime-900 text-lime-900");
    case 10 /* GREEN */:
      return (0, import_clsx27.default)("bg-green-50 border border-green-200 text-green-600", strong && "bg-green-400 border-green-900 text-green-900");
    case 11 /* EMERALD */:
      return (0, import_clsx27.default)("bg-emerald-50 border border-emerald-200 text-emerald-600", strong && "bg-emerald-400 border-emerald-900 text-emerald-900");
    case 12 /* TEAL */:
      return (0, import_clsx27.default)("bg-teal-50 border border-teal-200 text-teal-600", strong && "bg-teal-400 border-teal-900 text-teal-900");
    case 13 /* CYAN */:
      return (0, import_clsx27.default)("bg-cyan-50 border border-cyan-200 text-cyan-600", strong && "bg-cyan-400 border-cyan-900 text-cyan-900");
    case 14 /* SKY */:
      return (0, import_clsx27.default)("bg-sky-50 border border-sky-200 text-sky-600", strong && "bg-sky-400 border-sky-900 text-sky-900");
    case 15 /* BLUE */:
      return (0, import_clsx27.default)("bg-blue-50 border border-blue-200 text-blue-600", strong && "bg-blue-400 border-blue-900 text-blue-900");
    case 16 /* INDIGO */:
      return (0, import_clsx27.default)("bg-indigo-50 border border-indigo-200 text-indigo-600", strong && "bg-indigo-400 border-indigo-900 text-indigo-900");
    case 17 /* VIOLET */:
      return (0, import_clsx27.default)("bg-violet-50 border border-violet-200 text-violet-600", strong && "bg-violet-400 border-violet-900 text-violet-900");
    case 18 /* PURPLE */:
      return (0, import_clsx27.default)("bg-purple-50 border border-purple-200 text-purple-600", strong && "bg-purple-400 border-purple-900 text-purple-900");
    case 19 /* FUCHSIA */:
      return (0, import_clsx27.default)("bg-fuchsia-50 border border-fuchsia-200 text-fuchsia-600", strong && "bg-fuchsia-400 border-fuchsia-900 text-fuchsia-900");
    case 20 /* PINK */:
      return (0, import_clsx27.default)("bg-pink-50 border border-pink-200 text-pink-600", strong && "bg-pink-400 border-pink-900 text-pink-900");
    case 21 /* ROSE */:
      return (0, import_clsx27.default)("bg-rose-50 border border-rose-200 text-rose-600", strong && "bg-rose-400 border-rose-900 text-rose-900");
  }
  return "";
}

// app/components/ui/badges/ColorBadge.tsx
var import_jsx_dev_runtime62 = require("react/jsx-dev-runtime");
function ColorBadge({ color }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("span", { className: (0, import_clsx28.default)(" inline-flex flex-shrink-0 items-center rounded-full p-1 text-xs font-medium", getBadgeColor(color)), children: /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("svg", { className: "h-2 w-2", fill: "currentColor", viewBox: "0 0 8 8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("circle", { cx: 4, cy: 4, r: 3 }, void 0, !1, {
    fileName: "app/components/ui/badges/ColorBadge.tsx",
    lineNumber: 13,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/ui/badges/ColorBadge.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/ui/badges/ColorBadge.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/components/ui/input/InputSelector.tsx
var import_clsx29 = __toESM(require("clsx")), import_jsx_dev_runtime63 = require("react/jsx-dev-runtime"), InputSelector = ({
  name,
  title,
  value,
  options: options2,
  disabled,
  setValue,
  className,
  withSearch = !0,
  withLabel = !0,
  withColors = !1,
  selectPlaceholder,
  onNew,
  required,
  onNewRoute,
  help,
  hint,
  icon,
  borderless,
  darkMode,
  autoFocus,
  readOnly
}, ref) => {
  let button = (0, import_react62.useRef)(null), inputSearch = (0, import_react62.useRef)(null), [selected, setSelected] = (0, import_react63.useState)(), [searchInput, setSearchInput] = (0, import_react63.useState)("");
  (0, import_react63.useEffect)(() => {
    let selected2 = options2 == null ? void 0 : options2.find((f) => f.value === value);
    setSelected(selected2);
  }, [options2, value]), (0, import_react63.useEffect)(() => {
    selected && setValue && value !== (selected == null ? void 0 : selected.value) && setValue(selected == null ? void 0 : selected.value);
  }, [selected]), (0, import_react62.useImperativeHandle)(ref, () => ({ focus }));
  function focus() {
    setTimeout(() => {
      var _a, _b;
      (_a = button.current) == null || _a.focus(), (_b = button.current) == null || _b.click();
    }, 1);
  }
  let filteredItems = () => options2 ? options2.filter(
    (f) => {
      var _a, _b;
      return ((_a = f.name) == null ? void 0 : _a.toString().toUpperCase().includes(searchInput.toUpperCase())) || ((_b = f.value) == null ? void 0 : _b.toString().toUpperCase().includes(searchInput.toUpperCase()));
    }
  ) : [];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)(import_react64.Listbox, { value: selected, onChange: setSelected, disabled: disabled || readOnly, children: ({ open }) => /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("div", { className: (0, import_clsx29.default)(className, darkMode ? "text-gray-800 dark:text-gray-50" : "text-gray-800"), children: [
    withLabel && title && /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)(import_react64.Listbox.Label, { htmlFor: name, className: "mb-1 flex justify-between space-x-2 text-xs font-medium text-gray-600", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("div", { className: " flex items-center space-x-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("div", { className: "truncate", children: [
          title,
          required && /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("span", { className: "ml-1 text-red-500", children: "*" }, void 0, !1, {
            fileName: "app/components/ui/input/InputSelector.tsx",
            lineNumber: 108,
            columnNumber: 32
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/ui/input/InputSelector.tsx",
          lineNumber: 106,
          columnNumber: 17
        }, this),
        help && /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)(HintTooltip, { text: help }, void 0, !1, {
          fileName: "app/components/ui/input/InputSelector.tsx",
          lineNumber: 111,
          columnNumber: 26
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/ui/input/InputSelector.tsx",
        lineNumber: 105,
        columnNumber: 15
      }, this),
      hint
    ] }, void 0, !0, {
      fileName: "app/components/ui/input/InputSelector.tsx",
      lineNumber: 104,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("div", { className: "relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)(
        import_react64.Listbox.Button,
        {
          autoFocus,
          type: "button",
          ref: button,
          className: (0, import_clsx29.default)(
            "relative w-full cursor-default rounded-md border border-gray-300 py-2 pl-3 pr-10 text-left shadow-sm focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500 sm:text-sm",
            darkMode ? "text-gray-800 dark:text-gray-50" : "text-gray-800",
            disabled || readOnly ? "cursor-not-allowed bg-gray-100" : "bg-white hover:bg-gray-50 focus:bg-gray-50",
            borderless && "border-transparent",
            darkMode && "dark:border-gray-800 dark:bg-gray-800"
          ),
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("input", { type: "hidden", readOnly: !0, name, value: (selected == null ? void 0 : selected.value) ?? "" }, void 0, !1, {
              fileName: "app/components/ui/input/InputSelector.tsx",
              lineNumber: 130,
              columnNumber: 15
            }, this),
            icon && /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("div", { className: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)(EntityIcon, { className: "h-5 w-5 text-gray-400", icon }, void 0, !1, {
              fileName: "app/components/ui/input/InputSelector.tsx",
              lineNumber: 134,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/components/ui/input/InputSelector.tsx",
              lineNumber: 133,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("span", { className: "inline-flex w-full items-center space-x-2 truncate", children: [
              withColors && selected && /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)(ColorBadge, { color: (selected == null ? void 0 : selected.color) ?? 0 /* UNDEFINED */ }, void 0, !1, {
                fileName: "app/components/ui/input/InputSelector.tsx",
                lineNumber: 139,
                columnNumber: 44
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("div", { className: "truncate", children: selected ? /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("span", { children: selected == null ? void 0 : selected.name }, void 0, !1, {
                fileName: "app/components/ui/input/InputSelector.tsx",
                lineNumber: 141,
                columnNumber: 31
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("span", { className: "text-sm text-gray-500", children: [
                selectPlaceholder ?? "Select",
                "..."
              ] }, void 0, !0, {
                fileName: "app/components/ui/input/InputSelector.tsx",
                lineNumber: 141,
                columnNumber: 63
              }, this) }, void 0, !1, {
                fileName: "app/components/ui/input/InputSelector.tsx",
                lineNumber: 140,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/ui/input/InputSelector.tsx",
              lineNumber: 138,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("span", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5 text-gray-400", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)(
              "path",
              {
                fillRule: "evenodd",
                d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
                clipRule: "evenodd"
              },
              void 0,
              !1,
              {
                fileName: "app/components/ui/input/InputSelector.tsx",
                lineNumber: 146,
                columnNumber: 19
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/ui/input/InputSelector.tsx",
              lineNumber: 145,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/components/ui/input/InputSelector.tsx",
              lineNumber: 144,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/ui/input/InputSelector.tsx",
          lineNumber: 118,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)(import_react64.Transition, { show: open, as: import_react63.Fragment, leave: "transition ease-in duration-100", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)(
        import_react64.Listbox.Options,
        {
          className: (0, import_clsx29.default)(
            "absolute z-10 mt-1 max-h-72 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
            darkMode && "dark:bg-gray-800"
          ),
          children: [
            (withSearch || onNew || onNewRoute) && /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("div", { className: "flex rounded-md p-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("div", { className: "relative flex flex-grow items-stretch focus-within:z-10", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("div", { className: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5 text-gray-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }, void 0, !1, {
                  fileName: "app/components/ui/input/InputSelector.tsx",
                  lineNumber: 169,
                  columnNumber: 27
                }, this) }, void 0, !1, {
                  fileName: "app/components/ui/input/InputSelector.tsx",
                  lineNumber: 168,
                  columnNumber: 25
                }, this) }, void 0, !1, {
                  fileName: "app/components/ui/input/InputSelector.tsx",
                  lineNumber: 167,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)(
                  "input",
                  {
                    ref: inputSearch,
                    id: "search",
                    autoComplete: "off",
                    placeholder: "Search...",
                    value: searchInput,
                    onChange: (e) => setSearchInput(e.target.value),
                    className: "block w-full rounded-none rounded-l-md border border-gray-300 bg-white px-3 py-2 pl-10 text-sm focus:border-accent-300 focus:outline-none focus:ring-gray-300 sm:text-sm"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/ui/input/InputSelector.tsx",
                    lineNumber: 172,
                    columnNumber: 23
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/components/ui/input/InputSelector.tsx",
                lineNumber: 166,
                columnNumber: 21
              }, this),
              onNew && /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)(
                "button",
                {
                  title: "New",
                  type: "button",
                  onClick: onNew,
                  className: "relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-gray-300 bg-gray-50 px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 6v6m0 0v6m0-6h6m-6 0H6" }, void 0, !1, {
                    fileName: "app/components/ui/input/InputSelector.tsx",
                    lineNumber: 190,
                    columnNumber: 27
                  }, this) }, void 0, !1, {
                    fileName: "app/components/ui/input/InputSelector.tsx",
                    lineNumber: 189,
                    columnNumber: 25
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/components/ui/input/InputSelector.tsx",
                  lineNumber: 183,
                  columnNumber: 23
                },
                this
              ),
              onNewRoute && /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)(
                import_react65.Link,
                {
                  to: onNewRoute,
                  className: "relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-gray-300 bg-gray-50 px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 6v6m0 0v6m0-6h6m-6 0H6" }, void 0, !1, {
                    fileName: "app/components/ui/input/InputSelector.tsx",
                    lineNumber: 201,
                    columnNumber: 27
                  }, this) }, void 0, !1, {
                    fileName: "app/components/ui/input/InputSelector.tsx",
                    lineNumber: 200,
                    columnNumber: 25
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/components/ui/input/InputSelector.tsx",
                  lineNumber: 196,
                  columnNumber: 23
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/ui/input/InputSelector.tsx",
              lineNumber: 165,
              columnNumber: 19
            }, this),
            filteredItems().map((item, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)(
              import_react64.Listbox.Option,
              {
                disabled: item.disabled,
                className: ({ active }) => (0, import_clsx29.default)(
                  "relative cursor-default select-none py-2 pl-3 pr-9",
                  !item.disabled && active && "bg-accent-600 text-white",
                  !item.disabled && !active && "text-gray-900",
                  item.disabled && "cursor-not-allowed bg-gray-100 text-gray-400",
                  darkMode && !item.disabled && active && "dark:bg-accent-500 dark:text-black",
                  darkMode && !item.disabled && !active && "dark:text-gray-50",
                  darkMode && item.disabled && "cursor-not-allowed dark:bg-gray-900 dark:text-gray-600"
                ),
                value: item,
                children: ({ selected: selected2, active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)(import_jsx_dev_runtime63.Fragment, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
                    withColors && item.color !== void 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)(ColorBadge, { color: item.color }, void 0, !1, {
                      fileName: "app/components/ui/input/InputSelector.tsx",
                      lineNumber: 228,
                      columnNumber: 70
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("div", { className: (0, import_clsx29.default)(selected2 ? "font-semibold" : "font-normal", "truncate"), children: item.name }, void 0, !1, {
                      fileName: "app/components/ui/input/InputSelector.tsx",
                      lineNumber: 229,
                      columnNumber: 27
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/components/ui/input/InputSelector.tsx",
                    lineNumber: 227,
                    columnNumber: 25
                  }, this),
                  selected2 ? /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("span", { className: (0, import_clsx29.default)(active ? "text-white" : "text-accent-600", "absolute inset-y-0 right-0 flex items-center pr-4"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)(
                    "path",
                    {
                      fillRule: "evenodd",
                      d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                      clipRule: "evenodd"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/ui/input/InputSelector.tsx",
                      lineNumber: 235,
                      columnNumber: 31
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "app/components/ui/input/InputSelector.tsx",
                    lineNumber: 234,
                    columnNumber: 29
                  }, this) }, void 0, !1, {
                    fileName: "app/components/ui/input/InputSelector.tsx",
                    lineNumber: 233,
                    columnNumber: 27
                  }, this) : null
                ] }, void 0, !0, {
                  fileName: "app/components/ui/input/InputSelector.tsx",
                  lineNumber: 226,
                  columnNumber: 23
                }, this)
              },
              idx,
              !1,
              {
                fileName: "app/components/ui/input/InputSelector.tsx",
                lineNumber: 209,
                columnNumber: 19
              },
              this
            )),
            withSearch && filteredItems().length === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("div", { className: "px-3 py-2 text-sm text-gray-400", children: "There are no records" }, void 0, !1, {
              fileName: "app/components/ui/input/InputSelector.tsx",
              lineNumber: 248,
              columnNumber: 64
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/ui/input/InputSelector.tsx",
          lineNumber: 156,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/ui/input/InputSelector.tsx",
        lineNumber: 155,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ui/input/InputSelector.tsx",
      lineNumber: 117,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ui/input/InputSelector.tsx",
    lineNumber: 102,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/ui/input/InputSelector.tsx",
    lineNumber: 100,
    columnNumber: 5
  }, this);
}, InputSelector_default = (0, import_react62.forwardRef)(InputSelector);

// app/modules/knowledgeBase/components/bases/KbArticleSettingsForm.tsx
var import_jsx_dev_runtime64 = require("react/jsx-dev-runtime");
function KbArticleSettingsForm({
  categories,
  item,
  onDelete
}) {
  let navigation = (0, import_react66.useNavigation)(), inputTitle = (0, import_react67.useRef)(null), [categoryId, setCategoryId] = (0, import_react67.useState)((item == null ? void 0 : item.categoryId) ?? ""), [category, setCategory] = (0, import_react67.useState)(void 0), [sectionId, setSectionId] = (0, import_react67.useState)((item == null ? void 0 : item.sectionId) ?? ""), [slug, setSlug] = (0, import_react67.useState)((item == null ? void 0 : item.slug) ?? ""), [title, setTitle] = (0, import_react67.useState)((item == null ? void 0 : item.title) ?? ""), [description, setDescription] = (0, import_react67.useState)((item == null ? void 0 : item.description) ?? ""), [seoImage, setSeoImage] = (0, import_react67.useState)((item == null ? void 0 : item.seoImage) ?? ""), [isFeatured, setIsFeatured] = (0, import_react67.useState)(!!(item != null && item.featuredOrder));
  return (0, import_react67.useEffect)(() => {
    let slug2 = UrlUtils_default.slugify(title);
    setSlug(slug2);
  }, [title]), (0, import_react67.useEffect)(() => {
    setCategory(categories.find((f) => f.id === categoryId));
  }, [categories, categoryId]), /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(import_react66.Form, { method: "post", className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("input", { name: "action", value: "edit", readOnly: !0, hidden: !0 }, void 0, !1, {
      fileName: "app/modules/knowledgeBase/components/bases/KbArticleSettingsForm.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { className: "space-y-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { className: "grid gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(InputText_default, { ref: inputTitle, name: "title", title: "Title", value: title, setValue: setTitle, required: !0 }, void 0, !1, {
        fileName: "app/modules/knowledgeBase/components/bases/KbArticleSettingsForm.tsx",
        lineNumber: 48,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(InputText_default, { name: "slug", title: "Slug", value: slug, setValue: setSlug, required: !0 }, void 0, !1, {
        fileName: "app/modules/knowledgeBase/components/bases/KbArticleSettingsForm.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(
        InputText_default,
        {
          rows: 2,
          name: "description",
          title: "Description",
          value: description,
          setValue: setDescription,
          maxLength: 300
        },
        void 0,
        !1,
        {
          fileName: "app/modules/knowledgeBase/components/bases/KbArticleSettingsForm.tsx",
          lineNumber: 50,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(
        InputSelector_default,
        {
          name: "categoryId",
          title: "Category",
          value: categoryId,
          setValue: (e) => setCategoryId(e == null ? void 0 : e.toString()),
          options: categories.map((f) => ({
            value: f.id,
            name: f.title
          }))
        },
        void 0,
        !1,
        {
          fileName: "app/modules/knowledgeBase/components/bases/KbArticleSettingsForm.tsx",
          lineNumber: 60,
          columnNumber: 11
        },
        this
      ),
      category && category.sections.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(
        InputSelector_default,
        {
          name: "sectionId",
          title: "Section",
          value: sectionId,
          setValue: (e) => setSectionId(e == null ? void 0 : e.toString()),
          options: category.sections.map((f) => ({
            value: f.id,
            name: f.title
          }))
        },
        void 0,
        !1,
        {
          fileName: "app/modules/knowledgeBase/components/bases/KbArticleSettingsForm.tsx",
          lineNumber: 74,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(InputText_default, { name: "image", title: "SEO Image", value: seoImage, setValue: setSeoImage }, void 0, !1, {
        fileName: "app/modules/knowledgeBase/components/bases/KbArticleSettingsForm.tsx",
        lineNumber: 88,
        columnNumber: 11
      }, this),
      seoImage && /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("img", { className: "overflow-hidden rounded-lg shadow-xl xl:border-b xl:border-gray-200", src: seoImage, alt: title }, void 0, !1, {
        fileName: "app/modules/knowledgeBase/components/bases/KbArticleSettingsForm.tsx",
        lineNumber: 92,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/modules/knowledgeBase/components/bases/KbArticleSettingsForm.tsx",
        lineNumber: 91,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(
        InputCheckboxWithDescription,
        {
          name: "isFeatured",
          title: "Featured",
          value: isFeatured,
          setValue: setIsFeatured,
          description: "Displayed on the homepage."
        },
        void 0,
        !1,
        {
          fileName: "app/modules/knowledgeBase/components/bases/KbArticleSettingsForm.tsx",
          lineNumber: 96,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/modules/knowledgeBase/components/bases/KbArticleSettingsForm.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/modules/knowledgeBase/components/bases/KbArticleSettingsForm.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { className: "mt-5 flex justify-between space-x-2 sm:mt-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(ButtonSecondary, { disabled: navigation.state === "submitting", type: "button", className: "w-full", onClick: onDelete, destructive: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { children: "Delete" }, void 0, !1, {
        fileName: "app/modules/knowledgeBase/components/bases/KbArticleSettingsForm.tsx",
        lineNumber: 109,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/modules/knowledgeBase/components/bases/KbArticleSettingsForm.tsx",
        lineNumber: 108,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/modules/knowledgeBase/components/bases/KbArticleSettingsForm.tsx",
        lineNumber: 107,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { className: "flex space-x-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(LoadingButton_default, { actionName: "edit", type: "submit", disabled: navigation.state === "submitting", children: "Save" }, void 0, !1, {
        fileName: "app/modules/knowledgeBase/components/bases/KbArticleSettingsForm.tsx",
        lineNumber: 113,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/modules/knowledgeBase/components/bases/KbArticleSettingsForm.tsx",
        lineNumber: 112,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/modules/knowledgeBase/components/bases/KbArticleSettingsForm.tsx",
      lineNumber: 106,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/modules/knowledgeBase/components/bases/KbArticleSettingsForm.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}

// app/routes/admin/knowledge-base/bases.$slug/articles.$lang.$id/settings.tsx
var import_jsx_dev_runtime65 = require("react/jsx-dev-runtime"), loader8 = async ({ params }) => {
  let knowledgeBase = await KnowledgeBaseService_default.get({
    slug: params.slug
  });
  if (!knowledgeBase)
    return (0, import_node12.redirect)("/admin/knowledge-base/bases");
  let item = await getKbArticleById(params.id);
  if (!item)
    return (0, import_node12.redirect)(`/admin/knowledge-base/bases/${params.slug}/articles`);
  let categories = await getAllKnowledgeBaseCategories({
    knowledgeBaseSlug: knowledgeBase.slug,
    language: params.lang
  });
  return (0, import_node12.json)({
    knowledgeBase,
    item,
    categories
  });
}, action6 = async ({ request, params }) => {
  var _a, _b, _c, _d, _e, _f, _g;
  let form = await request.formData(), action18 = ((_a = form.get("action")) == null ? void 0 : _a.toString()) ?? "";
  await KnowledgeBasePermissionsService_default.hasPermission({ action: action18 });
  let kb = await KnowledgeBaseService_default.get({ slug: params.slug }), item = await getKbArticleById(params.id);
  if (!item)
    return (0, import_node12.json)({ error: "Article not found" }, { status: 400 });
  if (action18 === "edit") {
    let categoryId = ((_b = form.get("categoryId")) == null ? void 0 : _b.toString()) ?? null, sectionId = ((_c = form.get("sectionId")) == null ? void 0 : _c.toString()) ?? null, slug = ((_d = form.get("slug")) == null ? void 0 : _d.toString()) ?? "", title = ((_e = form.get("title")) == null ? void 0 : _e.toString()) ?? "", description = ((_f = form.get("description")) == null ? void 0 : _f.toString()) ?? "", seoImage = ((_g = form.get("seoImage")) == null ? void 0 : _g.toString()) ?? "", isFeatured = Boolean(form.get("isFeatured")), existing = await getKbArticleBySlug({
      knowledgeBaseId: kb.id,
      slug,
      language: params.lang
    });
    if (existing && existing.id !== item.id)
      return (0, import_node12.json)({ error: "Slug already exists" }, { status: 400 });
    let featuredOrder = item.featuredOrder;
    if (isFeatured) {
      if (!item.featuredOrder) {
        let featuredArticles = await KnowledgeBaseService_default.getFeaturedArticles({
          kb,
          params: {}
        }), maxOrder = 0;
        featuredArticles.length > 0 && (maxOrder = Math.max(...featuredArticles.map((p) => p.featuredOrder ?? 0))), featuredOrder = maxOrder + 1;
      }
    } else
      featuredOrder = null;
    return await updateKnowledgeBaseArticle(item.id, {
      categoryId: categoryId != null && categoryId.length ? categoryId : null,
      sectionId: sectionId != null && sectionId.length ? sectionId : null,
      slug,
      title,
      description,
      order: 0,
      language: params.lang,
      featuredOrder,
      author: "",
      seoImage
    }), (0, import_node12.redirect)(`/admin/knowledge-base/bases/${kb.slug}/articles/${params.lang}/${item.id}`);
  } else if (action18 === "delete")
    return await deleteKnowledgeBaseArticle(item.id), (0, import_node12.redirect)(`/admin/knowledge-base/bases/${kb.slug}/articles/${params.lang}`);
  return (0, import_node12.json)({ error: "Invalid action" }, { status: 400 });
};
function settings_default() {
  let data = (0, import_remix_typedjson7.useTypedLoaderData)(), submit = (0, import_react68.useSubmit)(), confirmDelete = (0, import_react69.useRef)(null);
  function onDelete() {
    var _a;
    (_a = confirmDelete.current) == null || _a.show("Delete article", "Delete", "Cancel", `Are you sure you want to delete the article "${data.item.title}"?`);
  }
  function onConfirmedDelete() {
    let form = new FormData();
    form.set("action", "delete"), submit(form, {
      method: "post"
    });
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)(KbArticleSettingsForm, { categories: data.categories, item: data.item, onDelete }, void 0, !1, {
      fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.$id/settings.tsx",
      lineNumber: 134,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)(ConfirmModal_default, { ref: confirmDelete, onYes: onConfirmedDelete, destructive: !0 }, void 0, !1, {
      fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.$id/settings.tsx",
      lineNumber: 136,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.$id/settings.tsx",
    lineNumber: 133,
    columnNumber: 5
  }, this);
}

// app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx
var categories_lang_exports = {};
__export(categories_lang_exports, {
  action: () => action7,
  default: () => categories_lang_default,
  loader: () => loader9
});
var import_solid = require("@heroicons/react/20/solid"), import_node13 = require("@remix-run/node"), import_react71 = require("@remix-run/react"), import_react72 = require("react"), import_remix_typedjson8 = require("remix-typedjson");

// app/components/ui/icons/DocumentDuplicateIconFilled.tsx
var import_jsx_dev_runtime66 = require("react/jsx-dev-runtime");
function DocumentDuplicateIconFilled({ className }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime66.jsxDEV)("svg", { className, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime66.jsxDEV)("path", { d: "M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 013.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0121 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 017.5 16.125V3.375z" }, void 0, !1, {
      fileName: "app/components/ui/icons/DocumentDuplicateIconFilled.tsx",
      lineNumber: 4,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime66.jsxDEV)("path", { d: "M15 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0017.25 7.5h-1.875A.375.375 0 0115 7.125V5.25zM4.875 6H6v10.125A3.375 3.375 0 009.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V7.875C3 6.839 3.84 6 4.875 6z" }, void 0, !1, {
      fileName: "app/components/ui/icons/DocumentDuplicateIconFilled.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ui/icons/DocumentDuplicateIconFilled.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/components/ui/icons/FolderIconFilled.tsx
var import_jsx_dev_runtime67 = require("react/jsx-dev-runtime");
function FolderIconFilled({ className }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)("svg", { className, fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", width: "50", height: "50", viewBox: "0 0 50 50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)("path", { d: "M 5 4 C 3.346 4 2 5.346 2 7 L 2 13 L 3 13 L 47 13 L 48 13 L 48 11 C 48 9.346 46.654 8 45 8 L 18.044922 8.0058594 C 17.765922 7.9048594 17.188906 6.9861875 16.878906 6.4921875 C 16.111906 5.2681875 15.317 4 14 4 L 5 4 z M 3 15 C 2.448 15 2 15.448 2 16 L 2 43 C 2 44.657 3.343 46 5 46 L 45 46 C 46.657 46 48 44.657 48 43 L 48 16 C 48 15.448 47.552 15 47 15 L 3 15 z" }, void 0, !1, {
    fileName: "app/components/ui/icons/FolderIconFilled.tsx",
    lineNumber: 4,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/ui/icons/FolderIconFilled.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/components/ui/icons/PlusIcon.tsx
var import_jsx_dev_runtime68 = require("react/jsx-dev-runtime");
function PlusIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)("svg", { className, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 4v16m8-8H4" }, void 0, !1, {
    fileName: "app/components/ui/icons/PlusIcon.tsx",
    lineNumber: 4,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/ui/icons/PlusIcon.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/components/ui/sort/OrderListButtons.tsx
var import_clsx30 = __toESM(require("clsx")), import_react70 = require("@remix-run/react"), import_jsx_dev_runtime69 = require("react/jsx-dev-runtime");
function OrderListButtons({ index, items, editable = !0, actionName = "set-orders", formData }) {
  let submit = (0, import_react70.useSubmit)(), loading = (0, import_react70.useNavigation)().state === "submitting";
  function changeOrder(forward) {
    if (index === void 0)
      return;
    let form = new FormData(), currentItem = items[index], nextItem, prevItem;
    forward ? items.length > index + 1 && (nextItem = items[index + 1]) : index - 1 >= 0 && (prevItem = items[index - 1]), items.forEach((item, idx) => {
      let order = 0;
      currentItem.id === item.id ? order = idx + (forward ? 1 : -1) + 1 : (prevItem == null ? void 0 : prevItem.id) === item.id ? (order = idx + (forward ? 0 : 1) + 1, form.append("orders[]", JSON.stringify({ id: item.id, order: order.toString() }))) : (nextItem == null ? void 0 : nextItem.id) === item.id ? (order = idx + (forward ? -1 : 0) + 1, form.append("orders[]", JSON.stringify({ id: item.id, order: order.toString() }))) : (order = idx + 1, form.append("orders[]", JSON.stringify({ id: item.id, order: order.toString() }))), form.append("orders[]", JSON.stringify({ id: item.id, order: order.toString() }));
    }), form.set("action", actionName), formData && Object.entries(formData).forEach(([key, value]) => {
      form.set(key, value);
    }), submit(form, {
      method: "post"
    });
  }
  function isLastItem() {
    return index === items.length - 1;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)(import_jsx_dev_runtime69.Fragment, { children: index !== void 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)("div", { className: "flex items-center space-x-1 truncate", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)(
      "button",
      {
        title: "Move up",
        type: "button",
        onClick: () => changeOrder(!1),
        className: (0, import_clsx30.default)(
          index <= 0 || !editable || loading ? " cursor-not-allowed bg-gray-100 text-gray-300" : "hover:bg-gray-100 hover:text-gray-800",
          "h-4 w-4 bg-gray-50 px-0.5 py-0.5 text-gray-500 focus:outline-none"
        ),
        disabled: index <= 0 || !editable || loading,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-3 w-3", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)(
          "path",
          {
            fillRule: "evenodd",
            d: "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",
            clipRule: "evenodd"
          },
          void 0,
          !1,
          {
            fileName: "app/components/ui/sort/OrderListButtons.tsx",
            lineNumber: 86,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/ui/sort/OrderListButtons.tsx",
          lineNumber: 85,
          columnNumber: 13
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/ui/sort/OrderListButtons.tsx",
        lineNumber: 75,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)(
      "button",
      {
        title: "Move down",
        type: "button",
        onClick: () => changeOrder(!0),
        className: (0, import_clsx30.default)(
          isLastItem() || !editable || loading ? " cursor-not-allowed bg-gray-100 text-gray-300" : "hover:bg-gray-100 hover:text-gray-800",
          "h-4 w-4 bg-gray-50 px-0.5 py-0.5 text-gray-500 focus:outline-none"
        ),
        disabled: isLastItem() || !editable || loading,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-3 w-3", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)(
          "path",
          {
            fillRule: "evenodd",
            d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
            clipRule: "evenodd"
          },
          void 0,
          !1,
          {
            fileName: "app/components/ui/sort/OrderListButtons.tsx",
            lineNumber: 104,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/ui/sort/OrderListButtons.tsx",
          lineNumber: 103,
          columnNumber: 13
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/ui/sort/OrderListButtons.tsx",
        lineNumber: 93,
        columnNumber: 11
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/ui/sort/OrderListButtons.tsx",
    lineNumber: 74,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/ui/sort/OrderListButtons.tsx",
    lineNumber: 72,
    columnNumber: 5
  }, this);
}

// app/modules/knowledgeBase/db/kbCategorySections.db.server.ts
async function getKbCategorySectionById(id) {
  return await db.knowledgeBaseCategorySection.findUnique({
    where: { id },
    include: {
      articles: { select: { id: !0, order: !0, title: !0 } }
    }
  });
}
async function createKnowledgeBaseCategorySection(data) {
  return await db.knowledgeBaseCategorySection.create({
    data: {
      categoryId: data.categoryId,
      order: data.order,
      title: data.title,
      description: data.description
    }
  });
}
async function updateKnowledgeBaseCategorySection(id, data) {
  return await db.knowledgeBaseCategorySection.update({
    where: { id },
    data: {
      order: data.order,
      title: data.title,
      description: data.description
    }
  });
}
async function deleteKnowledgeBaseCategorySection(id) {
  return await db.knowledgeBaseCategorySection.delete({
    where: { id }
  });
}

// app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx
var import_jsx_dev_runtime70 = require("react/jsx-dev-runtime"), loader9 = async ({ params }) => {
  let knowledgeBase = await KnowledgeBaseService_default.get({
    slug: params.slug
  });
  if (!knowledgeBase)
    return (0, import_node13.redirect)("/admin/knowledge-base/bases");
  let items = await getAllKnowledgeBaseCategories({
    knowledgeBaseSlug: params.slug,
    language: params.lang
  });
  return (0, import_node13.json)({
    knowledgeBase,
    items
  });
}, action7 = async ({ request, params }) => {
  var _a, _b, _c, _d;
  let form = await request.formData(), action18 = ((_a = form.get("action")) == null ? void 0 : _a.toString()) ?? "";
  await KnowledgeBasePermissionsService_default.hasPermission({ action: action18 });
  let kb = await KnowledgeBaseService_default.get({ slug: params.slug });
  if (action18 === "set-orders") {
    let items = form.getAll("orders[]").map((f) => JSON.parse(f.toString()));
    return await Promise.all(
      items.map(async ({ id, order }) => {
        await updateKnowledgeBaseCategory(id, {
          order: Number(order)
        });
      })
    ), (0, import_node13.json)({ updated: !0 });
  } else if (action18 === "set-section-orders") {
    let items = form.getAll("orders[]").map((f) => JSON.parse(f.toString()));
    return await Promise.all(
      items.map(async ({ id, order }) => {
        await updateKnowledgeBaseCategorySection(id, {
          order: Number(order)
        });
      })
    ), (0, import_node13.json)({ updated: !0 });
  } else if (action18 === "delete-category") {
    let id = ((_b = form.get("id")) == null ? void 0 : _b.toString()) ?? "";
    return await getKbCategoryById(id) ? (await deleteKnowledgeBaseCategory(id), (0, import_node13.json)({ deleted: !0 })) : (0, import_node13.json)({ error: "Category not found" }, { status: 400 });
  } else if (action18 === "delete-section") {
    let id = ((_c = form.get("id")) == null ? void 0 : _c.toString()) ?? "";
    return await getKbCategorySectionById(id) ? (await deleteKnowledgeBaseCategorySection(id), (0, import_node13.json)({ deleted: !0 })) : (0, import_node13.json)({ error: "Section not found" }, { status: 400 });
  } else if (action18 === "duplicate")
    try {
      let categoryId = ((_d = form.get("id")) == null ? void 0 : _d.toString()) ?? "";
      return await KnowledgeBaseService_default.duplicateCategory({ kb, language: params.lang, categoryId }), (0, import_node13.json)({ duplicated: !0 });
    } catch (e) {
      return (0, import_node13.json)({ error: e.message }, { status: 400 });
    }
  return (0, import_node13.json)({ error: "Invalid action" }, { status: 400 });
};
function categories_lang_default() {
  let data = (0, import_remix_typedjson8.useTypedLoaderData)(), actionData = (0, import_remix_typedjson8.useTypedActionData)(), params = (0, import_react71.useParams)(), outlet = (0, import_react71.useOutlet)(), navigate = (0, import_react71.useNavigate)(), submit = (0, import_react71.useSubmit)(), location = (0, import_react71.useLocation)(), [toggledCategories, setToggledCategories] = (0, import_react72.useState)([]), confirmDeleteCategory = (0, import_react72.useRef)(null), confirmDeleteSection = (0, import_react72.useRef)(null);
  function onDelete(item) {
    var _a, _b;
    (_a = confirmDeleteCategory.current) == null || _a.setValue(item), (_b = confirmDeleteCategory.current) == null || _b.show("Delete category", "Delete", "Cancel", `Are you sure you want to delete the category "${item.title}"?`);
  }
  function onConfirmedDeleteCategory(item) {
    let form = new FormData();
    form.set("action", "delete-category"), form.set("id", item.id), submit(form, {
      method: "post"
    });
  }
  function onDeleteSection(item) {
    var _a, _b;
    (_a = confirmDeleteSection.current) == null || _a.setValue(item), (_b = confirmDeleteSection.current) == null || _b.show("Delete section", "Delete", "Cancel", `Are you sure you want to delete the section "${item.title}"?`);
  }
  function onConfirmedDeleteSection(item) {
    let form = new FormData();
    form.set("action", "delete-section"), form.set("id", item.id), submit(form, {
      method: "post"
    });
  }
  function onDuplicate(item) {
    let form = new FormData();
    form.set("action", "duplicate"), form.set("id", item.id), submit(form, {
      method: "post"
    });
  }
  function getOutletTitle() {
    return location.pathname.includes("/sections/") ? params.section ? "Edit section" : "Create section" : params.id ? "Edit category" : "Create category";
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(
    EditPageLayout,
    {
      title: `Categories (${KnowledgeBaseUtils_default.getLanguageName(params.lang)})`,
      withHome: !1,
      menu: [
        { title: "Knowledge Bases", routePath: "/admin/knowledge-base/bases" },
        { title: "Categories", routePath: `/admin/knowledge-base/bases/${params.slug}/categories` },
        { title: params.lang, routePath: `/admin/knowledge-base/bases/${params.slug}/categories/${params.lang}` }
      ],
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { className: "space-y-2", children: [
          data.items.map((item, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { className: "space-y-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { className: "rounded-md border border-gray-300 bg-white px-4 py-1 shadow-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { className: "space-y-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { className: "flex items-center justify-between space-x-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { className: "flex items-center space-x-2 truncate", children: /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { className: " flex items-center space-x-3 truncate", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { className: "hidden flex-shrink-0 sm:flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(OrderListButtons, { index: idx, items: data.items, editable: !0 }, void 0, !1, {
                  fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
                  lineNumber: 203,
                  columnNumber: 27
                }, this) }, void 0, !1, {
                  fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
                  lineNumber: 202,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { className: "flex items-center space-x-2 truncate text-sm text-gray-800", children: /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { className: "flex items-baseline space-x-1 truncate", children: /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { className: "flex flex-col", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { className: "flex items-baseline space-x-1", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { children: [
                      item.title,
                      item.sections.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("span", { className: "ml-1 truncate text-xs", children: [
                        "(",
                        item.sections.length === 1 ? "1 section" : `${item.sections.length} sections`,
                        ")"
                      ] }, void 0, !0, {
                        fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
                        lineNumber: 212,
                        columnNumber: 37
                      }, this)
                    ] }, void 0, !0, {
                      fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
                      lineNumber: 209,
                      columnNumber: 33
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { children: "\u2022" }, void 0, !1, {
                      fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
                      lineNumber: 217,
                      columnNumber: 33
                    }, this),
                    item.articles.filter((f) => f.publishedAt && !f.sectionId).length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { className: "truncate text-xs text-gray-400", children: item.articles.filter((f) => f.publishedAt).map((article) => article.title).join(", ") }, void 0, !1, {
                      fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
                      lineNumber: 219,
                      columnNumber: 35
                    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { className: "truncate text-xs text-gray-400", children: "No articles" }, void 0, !1, {
                      fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
                      lineNumber: 226,
                      columnNumber: 35
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
                    lineNumber: 208,
                    columnNumber: 31
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { className: "text-xs text-gray-500", children: item.description }, void 0, !1, {
                    fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
                    lineNumber: 229,
                    columnNumber: 31
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
                  lineNumber: 207,
                  columnNumber: 29
                }, this) }, void 0, !1, {
                  fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
                  lineNumber: 206,
                  columnNumber: 27
                }, this) }, void 0, !1, {
                  fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
                  lineNumber: 205,
                  columnNumber: 25
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
                lineNumber: 201,
                columnNumber: 23
              }, this) }, void 0, !1, {
                fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
                lineNumber: 200,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { className: "flex flex-shrink-0 space-x-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { className: "flex items-center space-x-1 truncate p-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      setToggledCategories((prev) => prev.includes(item.id) ? prev.filter((f) => f !== item.id) : [...prev, item.id]);
                    },
                    className: "group flex items-center rounded-md border border-transparent p-2 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-1",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(FolderIconFilled, { className: "h-4 w-4 text-gray-300 hover:text-gray-500" }, void 0, !1, {
                      fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
                      lineNumber: 250,
                      columnNumber: 27
                    }, this)
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
                    lineNumber: 238,
                    columnNumber: 25
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(
                  import_react71.Link,
                  {
                    to: item.id,
                    className: "group flex items-center rounded-md border border-transparent p-2 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-1",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(import_solid.PencilIcon, { className: "h-4 w-4 text-gray-300 group-hover:text-gray-500" }, void 0, !1, {
                      fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
                      lineNumber: 256,
                      columnNumber: 27
                    }, this)
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
                    lineNumber: 252,
                    columnNumber: 25
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(
                  "button",
                  {
                    type: "button",
                    onClick: () => onDuplicate(item),
                    className: "group flex items-center rounded-md border border-transparent p-2 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-1",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(DocumentDuplicateIconFilled, { className: "h-4 w-4 text-gray-300 hover:text-gray-500" }, void 0, !1, {
                      fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
                      lineNumber: 263,
                      columnNumber: 27
                    }, this)
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
                    lineNumber: 258,
                    columnNumber: 25
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(
                  "button",
                  {
                    type: "button",
                    className: "group flex items-center rounded-md border border-transparent p-2 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-1",
                    onClick: () => onDelete(item),
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(import_solid.TrashIcon, { className: "h-4 w-4 text-gray-300 group-hover:text-gray-500" }, void 0, !1, {
                      fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
                      lineNumber: 270,
                      columnNumber: 27
                    }, this)
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
                    lineNumber: 265,
                    columnNumber: 25
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
                lineNumber: 237,
                columnNumber: 23
              }, this) }, void 0, !1, {
                fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
                lineNumber: 236,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
              lineNumber: 199,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
              lineNumber: 198,
              columnNumber: 17
            }, this),
            toggledCategories.includes(item.id) && /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(CategorySections, { category: item, onDeleteSection }, void 0, !1, {
              fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
              lineNumber: 276,
              columnNumber: 57
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
            lineNumber: 197,
            columnNumber: 15
          }, this) }, idx, !1, {
            fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
            lineNumber: 196,
            columnNumber: 13
          }, this)),
          /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(
            import_react71.Link,
            {
              to: "new",
              className: "relative block w-full rounded-lg border-2 border-dashed border-gray-300 px-12 py-6 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-theme-500 focus:ring-offset-2",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(PlusIcon, { className: "mx-auto h-5 text-gray-900" }, void 0, !1, {
                  fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
                  lineNumber: 285,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("span", { className: "mt-2 block text-sm font-medium text-gray-900", children: "Add new category" }, void 0, !1, {
                  fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
                  lineNumber: 286,
                  columnNumber: 11
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
              lineNumber: 281,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
          lineNumber: 193,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(ConfirmModal_default, { ref: confirmDeleteCategory, onYes: onConfirmedDeleteCategory, destructive: !0 }, void 0, !1, {
          fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
          lineNumber: 290,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(ConfirmModal_default, { ref: confirmDeleteSection, onYes: onConfirmedDeleteSection, destructive: !0 }, void 0, !1, {
          fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
          lineNumber: 291,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(ActionResultModal, { actionData, showSuccess: !1 }, void 0, !1, {
          fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
          lineNumber: 292,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(
          SlideOverWideEmpty,
          {
            title: getOutletTitle(),
            open: !!outlet,
            onClose: () => {
              navigate(".", { replace: !0 });
            },
            className: "sm:max-w-sm",
            overflowYScroll: !0,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { className: "-mx-1 -mt-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { className: "space-y-4", children: outlet }, void 0, !1, {
              fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
              lineNumber: 304,
              columnNumber: 11
            }, this) }, void 0, !1, {
              fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
              lineNumber: 303,
              columnNumber: 9
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
            lineNumber: 294,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
      lineNumber: 184,
      columnNumber: 5
    },
    this
  );
}
function CategorySections({
  category,
  onDeleteSection
}) {
  function getSectionArticles(id) {
    return category.articles.filter((f) => f.sectionId === id && f.publishedAt);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { className: "space-y-2 pb-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { className: "space-y-2 bg-slate-50 border border-slate-100 rounded-md w-full px-4 py-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { className: "space-y-2", children: [
    category.sections.map((item, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { className: "rounded-md border border-gray-300 bg-white px-4 py-1 shadow-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { className: "space-y-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { className: "flex items-center justify-between space-x-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { className: "flex items-center space-x-2 truncate", children: /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { className: " flex items-center space-x-3 truncate", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { className: "hidden flex-shrink-0 sm:flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(
          OrderListButtons,
          {
            formData: {
              categoryId: item.id
            },
            actionName: "set-section-orders",
            index: idx,
            items: category.sections,
            editable: !0
          },
          void 0,
          !1,
          {
            fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
            lineNumber: 334,
            columnNumber: 27
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
          lineNumber: 333,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { className: "flex items-center space-x-2 truncate text-sm text-gray-800", children: /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { className: "flex items-baseline space-x-1 truncate", children: /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { className: "flex items-baseline space-x-1", children: [
            item.title,
            /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { children: "\u2022" }, void 0, !1, {
              fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
              lineNumber: 349,
              columnNumber: 33
            }, this),
            getSectionArticles(item.id).length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { className: "truncate text-xs text-gray-400", children: getSectionArticles(item.id).map((f) => f.title).join(", ") }, void 0, !1, {
              fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
              lineNumber: 351,
              columnNumber: 35
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { className: "truncate text-xs text-gray-400", children: "No articles" }, void 0, !1, {
              fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
              lineNumber: 357,
              columnNumber: 35
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
            lineNumber: 347,
            columnNumber: 31
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { className: "text-xs text-gray-500", children: item.description }, void 0, !1, {
            fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
            lineNumber: 360,
            columnNumber: 31
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
          lineNumber: 346,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
          lineNumber: 345,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
          lineNumber: 344,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
        lineNumber: 332,
        columnNumber: 23
      }, this) }, void 0, !1, {
        fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
        lineNumber: 331,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { className: "flex flex-shrink-0 space-x-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { className: "flex items-center space-x-1 truncate p-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(
          import_react71.Link,
          {
            to: `${category.id}/sections/${item.id}`,
            className: "group flex items-center rounded-md border border-transparent p-2 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-1",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(import_solid.PencilIcon, { className: "h-4 w-4 text-gray-300 group-hover:text-gray-500" }, void 0, !1, {
              fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
              lineNumber: 373,
              columnNumber: 27
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
            lineNumber: 369,
            columnNumber: 25
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(
          "button",
          {
            type: "button",
            className: "group flex items-center rounded-md border border-transparent p-2 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-1",
            onClick: () => onDeleteSection(item),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(import_solid.TrashIcon, { className: "h-4 w-4 text-gray-300 group-hover:text-gray-500" }, void 0, !1, {
              fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
              lineNumber: 380,
              columnNumber: 27
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
            lineNumber: 375,
            columnNumber: 25
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
        lineNumber: 368,
        columnNumber: 23
      }, this) }, void 0, !1, {
        fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
        lineNumber: 367,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
      lineNumber: 330,
      columnNumber: 19
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
      lineNumber: 329,
      columnNumber: 17
    }, this) }, idx, !1, {
      fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
      lineNumber: 328,
      columnNumber: 15
    }, this)),
    /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(
      import_react71.Link,
      {
        to: `${category.id}/sections/new`,
        className: "relative block w-full rounded-lg border-2 border-dashed border-gray-200 px-12 py-4 text-center hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-theme-500 focus:ring-offset-2",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("span", { className: "block text-xs font-medium text-gray-600", children: "Add section" }, void 0, !1, {
          fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
          lineNumber: 393,
          columnNumber: 13
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
        lineNumber: 389,
        columnNumber: 11
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
    lineNumber: 325,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
    lineNumber: 324,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang.tsx",
    lineNumber: 322,
    columnNumber: 5
  }, this);
}

// app/routes/admin/knowledge-base/bases.$slug/categories.$lang/$id.sections.$section.tsx
var id_sections_section_exports = {};
__export(id_sections_section_exports, {
  action: () => action8,
  default: () => id_sections_section_default,
  loader: () => loader10
});
var import_node14 = require("@remix-run/node"), import_react83 = require("@remix-run/react"), import_remix_typedjson9 = require("remix-typedjson");

// app/modules/knowledgeBase/components/bases/KbCategorySectionForm.tsx
var import_react81 = require("@remix-run/react"), import_react82 = require("react");

// app/components/ui/tables/TableSimple.tsx
var import_clsx36 = __toESM(require("clsx")), import_react79 = require("@remix-run/react");

// app/components/ui/buttons/ButtonTertiary.tsx
var import_clsx31 = __toESM(require("clsx"));
var import_jsx_dev_runtime71 = require("react/jsx-dev-runtime");
function ButtonTertiary({ className = "", type = "button", onClick, disabled, destructive, to, target, children, reloadDocument }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)("span", { children: (() => !to || disabled ? /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)(
    "button",
    {
      onClick,
      type,
      disabled,
      className: (0, import_clsx31.default)(
        className,
        "mx-1 my-2 inline-flex items-center space-x-2 border-b border-transparent text-sm font-medium focus:rounded-md focus:outline-none focus:ring-2 focus:ring-accent-300 focus:ring-offset-2",
        disabled ? "cursor-not-allowed opacity-75" : "hover:border-dotted",
        !destructive && "border-b text-theme-700 ",
        destructive && "text-red-600",
        !disabled && !destructive && !className && "hover:text-theme-800 focus:text-theme-900 ",
        !disabled && destructive && "hover:border-red-300 hover:text-red-800 focus:text-red-900"
      ),
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/buttons/ButtonTertiary.tsx",
      lineNumber: 23,
      columnNumber: 13
    },
    this
  ) : /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)(
    LinkOrAhref,
    {
      reloadDocument,
      to,
      target,
      className: (0, import_clsx31.default)(
        className,
        "mx-1 my-2 inline-flex items-center space-x-2 border-b border-transparent text-sm font-medium focus:rounded-md focus:outline-none focus:ring-2 focus:ring-accent-300 focus:ring-offset-2",
        disabled ? "cursor-not-allowed opacity-75" : " hover:border-dotted",
        !destructive && "border-b text-theme-700 ",
        destructive && "text-red-600",
        !disabled && !destructive && !className && "hover:text-theme-800 focus:text-theme-900 ",
        !disabled && destructive && "hover:border-red-300 hover:text-red-800 focus:text-red-900"
      ),
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/buttons/ButtonTertiary.tsx",
      lineNumber: 42,
      columnNumber: 13
    },
    this
  ))() }, void 0, !1, {
    fileName: "app/components/ui/buttons/ButtonTertiary.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/components/ui/tables/TablePagination.tsx
var import_react76 = require("react"), import_react77 = require("@remix-run/react");

// app/components/ui/modals/Modal.tsx
var import_react73 = require("react"), import_react74 = require("@headlessui/react"), import_clsx32 = __toESM(require("clsx")), import_jsx_dev_runtime72 = require("react/jsx-dev-runtime");
function Modal({ className, children, open, setOpen, size = "3xl", padding = "sm" }) {
  function onClose() {
    setOpen(!1);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(import_react74.Transition.Root, { show: open, as: import_react73.Fragment, children: /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(import_react74.Dialog, { as: "div", className: "fixed inset-0 z-20 overflow-y-auto text-gray-800", onClose, children: /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)("div", { className: "flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(
      import_react74.Transition.Child,
      {
        as: import_react73.Fragment,
        enter: "ease-out duration-300",
        enterFrom: "opacity-0",
        enterTo: "opacity-100",
        leave: "ease-in duration-200",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(import_react74.Dialog.Overlay, { className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" }, void 0, !1, {
          fileName: "app/components/ui/modals/Modal.tsx",
          lineNumber: 30,
          columnNumber: 13
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/ui/modals/Modal.tsx",
        lineNumber: 21,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)("span", { className: "hidden sm:inline-block sm:h-screen sm:align-middle", "aria-hidden": "true", children: "\u200B" }, void 0, !1, {
      fileName: "app/components/ui/modals/Modal.tsx",
      lineNumber: 34,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(
      import_react74.Transition.Child,
      {
        as: import_react73.Fragment,
        enter: "ease-out duration-300",
        enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
        enterTo: "opacity-100 translate-y-0 sm:scale-100",
        leave: "ease-in duration-200",
        leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
        leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(
          "div",
          {
            className: (0, import_clsx32.default)(
              className,
              "relative inline-block w-full transform overflow-visible rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:align-middle",
              padding === "sm" && "px-4 pb-4 pt-5 sm:my-8 sm:p-6",
              size === "sm" && "sm:max-w-sm",
              size === "md" && "sm:max-w-md",
              size === "lg" && "sm:max-w-lg",
              size === "xl" && "sm:max-w-xl",
              size === "2xl" && "sm:max-w-2xl",
              size === "3xl" && "sm:max-w-3xl",
              size === "4xl" && "sm:max-w-4xl",
              size === "5xl" && "sm:max-w-5xl",
              size === "6xl" && "sm:max-w-6xl",
              size === "7xl" && "sm:max-w-7xl",
              size === "full" && "sm:max-w-full"
            ),
            children
          },
          void 0,
          !1,
          {
            fileName: "app/components/ui/modals/Modal.tsx",
            lineNumber: 46,
            columnNumber: 13
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/components/ui/modals/Modal.tsx",
        lineNumber: 37,
        columnNumber: 11
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/ui/modals/Modal.tsx",
    lineNumber: 20,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/ui/modals/Modal.tsx",
    lineNumber: 19,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/ui/modals/Modal.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/application/Constants.ts
var PAGE_SIZE_OPTIONS = [5, 10, 25, 50, 100], Constants_default = {
  DEFAULT_PAGE_SIZE: 10,
  MAX_PAGE_SIZE: 100,
  MAX_EXPORT_PAGE_SIZE: 1e5,
  PAGE_SIZE_OPTIONS
};

// app/components/ui/tables/TablePagination.tsx
var import_clsx34 = __toESM(require("clsx"));

// app/components/ui/input/InputNumber.tsx
var import_clsx33 = __toESM(require("clsx")), import_react75 = require("react");
var import_jsx_dev_runtime73 = require("react/jsx-dev-runtime"), InputNumber = ({
  name,
  title,
  withLabel = !0,
  value,
  setValue,
  className,
  hint,
  help,
  disabled = !1,
  readOnly = !1,
  required = !1,
  min = 0,
  max,
  step,
  placeholder,
  icon,
  borderless,
  autoFocus,
  canUnset
}, ref) => {
  (0, import_react75.useImperativeHandle)(ref, () => ({ input }));
  let input = (0, import_react75.useRef)(null), [actualValue, setActualValue] = (0, import_react75.useState)(value);
  return (0, import_react75.useEffect)(() => {
    setActualValue(value);
  }, [value]), (0, import_react75.useEffect)(() => {
    setValue && actualValue && setValue(actualValue);
  }, [actualValue]), /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)("div", { className: (0, import_clsx33.default)(className, "text-gray-800"), children: [
    withLabel && /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)("label", { htmlFor: name, className: "mb-1 flex justify-between space-x-2 text-xs font-medium text-gray-600", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)("div", { className: " flex items-center space-x-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)("div", { className: "truncate", children: [
          title,
          required && /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)("span", { className: "ml-1 text-red-500", children: "*" }, void 0, !1, {
            fileName: "app/components/ui/input/InputNumber.tsx",
            lineNumber: 78,
            columnNumber: 28
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/ui/input/InputNumber.tsx",
          lineNumber: 76,
          columnNumber: 13
        }, this),
        help && /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)(HintTooltip, { text: help }, void 0, !1, {
          fileName: "app/components/ui/input/InputNumber.tsx",
          lineNumber: 81,
          columnNumber: 22
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/ui/input/InputNumber.tsx",
        lineNumber: 75,
        columnNumber: 11
      }, this),
      canUnset && !required && !disabled && !readOnly && actualValue !== void 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)("button", { type: "button", onClick: () => setActualValue(void 0), className: "text-xs text-gray-500", children: "Clear" }, void 0, !1, {
        fileName: "app/components/ui/input/InputNumber.tsx",
        lineNumber: 84,
        columnNumber: 13
      }, this),
      hint
    ] }, void 0, !0, {
      fileName: "app/components/ui/input/InputNumber.tsx",
      lineNumber: 74,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)("div", { className: (0, import_clsx33.default)("relative flex w-full rounded-md"), children: [
      icon && /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)("div", { className: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)(EntityIcon, { className: "h-5 w-5 text-gray-400", icon }, void 0, !1, {
        fileName: "app/components/ui/input/InputNumber.tsx",
        lineNumber: 94,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/ui/input/InputNumber.tsx",
        lineNumber: 93,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)(
        "input",
        {
          ref: input,
          type: "number",
          id: name,
          name,
          required,
          min,
          max,
          value: actualValue ?? "",
          onChange: (e) => setActualValue(Number(e.currentTarget.value)),
          step,
          placeholder,
          disabled,
          readOnly,
          autoFocus,
          className: (0, import_clsx33.default)(
            "block w-full min-w-0 flex-1 rounded-md border-gray-300 focus:border-accent-500 focus:ring-accent-500 sm:text-sm",
            className,
            disabled || readOnly ? "cursor-not-allowed bg-gray-100" : "hover:bg-gray-50 focus:bg-gray-50",
            icon && "pl-10",
            borderless && "border-transparent"
          )
        },
        void 0,
        !1,
        {
          fileName: "app/components/ui/input/InputNumber.tsx",
          lineNumber: 97,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/ui/input/InputNumber.tsx",
      lineNumber: 91,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ui/input/InputNumber.tsx",
    lineNumber: 72,
    columnNumber: 5
  }, this);
}, InputNumber_default = (0, import_react75.forwardRef)(InputNumber);

// app/components/ui/tables/TablePagination.tsx
var import_jsx_dev_runtime74 = require("react/jsx-dev-runtime");
function TablePagination({ page, pageSize, totalItems, totalPages }) {
  let [state, setState] = (0, import_react76.useState)({ page, pageSize }), [from, setFrom] = (0, import_react76.useState)(0), [to, setTo] = (0, import_react76.useState)(0), navigation = (0, import_react77.useNavigation)(), loading = navigation.state === "loading" || navigation.state === "submitting", [searchParams, setSearchParams] = (0, import_react77.useSearchParams)(), [showPageSizeModal, setShowPageSizeModal] = (0, import_react76.useState)(!1), [showPageNumberModal, setShowPageNumberModal] = (0, import_react76.useState)(!1);
  return (0, import_react76.useEffect)(() => {
    setFrom(page * pageSize - pageSize + 1);
    let to2 = page * pageSize;
    to2 > totalItems && (to2 = totalItems), setTo(to2);
  }, [page, pageSize, totalItems]), (0, import_react76.useEffect)(() => {
    var _a, _b, _c, _d;
    let pageSizeParam = ((_a = searchParams.get("pageSize")) == null ? void 0 : _a.toString()) ?? Constants_default.DEFAULT_PAGE_SIZE.toString(), pageParam = ((_b = searchParams.get("page")) == null ? void 0 : _b.toString()) ?? "1";
    (state.page.toString() !== pageParam || ((_c = state.pageSize) == null ? void 0 : _c.toString()) !== pageSizeParam) && (state.page.toString() !== pageParam && searchParams.set("page", state.page.toString()), ((_d = state.pageSize) == null ? void 0 : _d.toString()) !== pageSizeParam && (state.pageSize ? searchParams.set("pageSize", state.pageSize.toString()) : searchParams.delete("pageSize")), setSearchParams(searchParams));
  }, [state]), /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(
    "div",
    {
      className: "flex items-center justify-end border-t bg-gray-50 px-4 py-3 text-xs uppercase tracking-wide text-gray-500 sm:justify-between",
      "aria-label": "Pagination",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)("div", { className: "hidden sm:block", children: totalItems > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)("button", { type: "button", onClick: () => setShowPageSizeModal(!0), className: "uppercase hover:underline", children: [
          "Showing",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)("span", { className: "font-medium", children: totalItems === 0 ? 0 : from }, void 0, !1, {
            fileName: "app/components/ui/tables/TablePagination.tsx",
            lineNumber: 66,
            columnNumber: 25
          }, this),
          " ",
          "To",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)("span", { className: "font-medium", children: to }, void 0, !1, {
            fileName: "app/components/ui/tables/TablePagination.tsx",
            lineNumber: 66,
            columnNumber: 99
          }, this),
          " ",
          "Of",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)("span", { className: "font-medium", children: totalItems }, void 0, !1, {
            fileName: "app/components/ui/tables/TablePagination.tsx",
            lineNumber: 67,
            columnNumber: 13
          }, this),
          " ",
          "Results"
        ] }, void 0, !0, {
          fileName: "app/components/ui/tables/TablePagination.tsx",
          lineNumber: 65,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/components/ui/tables/TablePagination.tsx",
          lineNumber: 63,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(
            "select",
            {
              id: "pageSize",
              name: "pageSize",
              className: (0, import_clsx34.default)(
                "inline-flex items-center justify-center rounded border border-gray-200 bg-white text-xs focus:border-accent-500 focus:ring-accent-500",
                page === 1 || loading ? "cursor-not-allowed opacity-90" : "hover:border-gray-300 hover:bg-gray-50"
              ),
              onChange: (e) => setState({ ...state, pageSize: Number(e.target.value) }),
              value: state.pageSize,
              children: [void 0, ...Constants_default.PAGE_SIZE_OPTIONS].map((f, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)("option", { value: Number(f ?? Constants_default.DEFAULT_PAGE_SIZE), className: "lowercase", children: [
                f === void 0 ? Constants_default.DEFAULT_PAGE_SIZE : f,
                " ",
                "Per page".toLowerCase()
              ] }, idx, !0, {
                fileName: "app/components/ui/tables/TablePagination.tsx",
                lineNumber: 84,
                columnNumber: 15
              }, this))
            },
            void 0,
            !1,
            {
              fileName: "app/components/ui/tables/TablePagination.tsx",
              lineNumber: 72,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)("div", { className: "inline-flex items-center justify-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(
              "button",
              {
                type: "button",
                disabled: page === 1 || loading,
                onClick: () => setState({ ...state, page: page - 1 }),
                className: (0, import_clsx34.default)(
                  "inline-flex h-8 w-8 items-center justify-center rounded border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-gray-500",
                  page === 1 || loading ? "cursor-not-allowed opacity-90" : "hover:border-gray-300 hover:bg-gray-50"
                ),
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-3 w-3", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(
                  "path",
                  {
                    fillRule: "evenodd",
                    d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
                    clipRule: "evenodd"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/ui/tables/TablePagination.tsx",
                    lineNumber: 101,
                    columnNumber: 15
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/components/ui/tables/TablePagination.tsx",
                  lineNumber: 100,
                  columnNumber: 13
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/components/ui/tables/TablePagination.tsx",
                lineNumber: 91,
                columnNumber: 11
              },
              this
            ),
            showPageNumberModal ? /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(
              "input",
              {
                type: "number",
                min: 1,
                max: totalPages,
                disabled: totalPages <= 1,
                value: state.page,
                onChange: (e) => setState({ ...state, page: parseInt(e.target.value) }),
                onBlur: () => setShowPageNumberModal(!1),
                className: "block w-full min-w-0 flex-1 rounded border-gray-200 text-xs focus:border-accent-500 focus:ring-accent-500"
              },
              void 0,
              !1,
              {
                fileName: "app/components/ui/tables/TablePagination.tsx",
                lineNumber: 110,
                columnNumber: 13
              },
              this
            ) : /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)("button", { type: "button", onClick: () => setShowPageSizeModal(!0), className: (0, import_clsx34.default)("uppercase hover:underline"), children: [
              page,
              /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)("span", { className: "mx-0.25", children: "/" }, void 0, !1, {
                fileName: "app/components/ui/tables/TablePagination.tsx",
                lineNumber: 123,
                columnNumber: 15
              }, this),
              totalPages === 0 ? 1 : totalPages
            ] }, void 0, !0, {
              fileName: "app/components/ui/tables/TablePagination.tsx",
              lineNumber: 121,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(
              "button",
              {
                type: "button",
                className: (0, import_clsx34.default)(
                  "inline-flex h-8 w-8 items-center justify-center rounded border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-gray-500",
                  page >= totalPages || loading ? "cursor-not-allowed opacity-90" : "hover:border-gray-300 hover:bg-gray-50"
                ),
                disabled: page >= totalPages || loading,
                onClick: () => setState({ ...state, page: page + 1 }),
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-3 w-3", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(
                  "path",
                  {
                    fillRule: "evenodd",
                    d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                    clipRule: "evenodd"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/ui/tables/TablePagination.tsx",
                    lineNumber: 138,
                    columnNumber: 15
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/components/ui/tables/TablePagination.tsx",
                  lineNumber: 137,
                  columnNumber: 13
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/components/ui/tables/TablePagination.tsx",
                lineNumber: 128,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/ui/tables/TablePagination.tsx",
            lineNumber: 90,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/ui/tables/TablePagination.tsx",
          lineNumber: 71,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(Modal, { className: "sm:max-w-xs", open: showPageSizeModal, setOpen: setShowPageSizeModal, children: /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(
          PageOptionsForm,
          {
            page: state.page,
            pageSize: state.pageSize,
            totalItems,
            onChange: (e) => {
              setState({
                page: e.currentPage,
                pageSize: e.pageSize
              }), setShowPageSizeModal(!1);
            }
          },
          void 0,
          !1,
          {
            fileName: "app/components/ui/tables/TablePagination.tsx",
            lineNumber: 149,
            columnNumber: 9
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/ui/tables/TablePagination.tsx",
          lineNumber: 148,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/ui/tables/TablePagination.tsx",
      lineNumber: 59,
      columnNumber: 5
    },
    this
  );
}
function PageOptionsForm({
  page,
  pageSize,
  onChange,
  totalItems
}) {
  let [totalPages, setTotalPages] = (0, import_react76.useState)(0), [state, setState] = (0, import_react76.useState)({ currentPage: page, pageSize });
  (0, import_react76.useEffect)(() => {
    totalItems && setTotalPages(Math.ceil(totalItems / (state.pageSize || Constants_default.DEFAULT_PAGE_SIZE)));
  }, [state.pageSize, totalItems]);
  function handleSubmit(e) {
    e.stopPropagation(), e.preventDefault(), onChange(state);
  }
  function onReset() {
    onChange({ currentPage: 1, pageSize: void 0 });
  }
  function existingChanges() {
    return state.pageSize !== Constants_default.DEFAULT_PAGE_SIZE || state.currentPage !== 1;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)("form", { onSubmit: handleSubmit, className: "space-y-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(
      InputSelector_default,
      {
        withSearch: !1,
        title: "Page Size",
        value: state.pageSize,
        setValue: (e) => setState({ ...state, pageSize: Number(e) }),
        options: [void 0, ...Constants_default.PAGE_SIZE_OPTIONS].map((size) => ({
          value: size,
          name: size === void 0 ? "Default" : size.toString()
        }))
      },
      void 0,
      !1,
      {
        fileName: "app/components/ui/tables/TablePagination.tsx",
        lineNumber: 200,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/ui/tables/TablePagination.tsx",
      lineNumber: 199,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(
      InputNumber_default,
      {
        title: "Page",
        hint: /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)("div", { className: "text-gray-600", children: [
          "Total pages",
          ": ",
          totalPages
        ] }, void 0, !0, {
          fileName: "app/components/ui/tables/TablePagination.tsx",
          lineNumber: 217,
          columnNumber: 13
        }, this),
        value: state.currentPage,
        min: 1,
        max: totalPages,
        setValue: (e) => setState({ ...state, currentPage: Number(e) })
      },
      void 0,
      !1,
      {
        fileName: "app/components/ui/tables/TablePagination.tsx",
        lineNumber: 214,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/ui/tables/TablePagination.tsx",
      lineNumber: 213,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)("div", { className: "flex justify-between space-x-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(ButtonSecondary, { disabled: !existingChanges(), onClick: onReset, className: "flex justify-center text-center", children: "Reset" }, void 0, !1, {
        fileName: "app/components/ui/tables/TablePagination.tsx",
        lineNumber: 228,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(ButtonPrimary, { type: "submit", className: "flex justify-center text-center", children: "Apply" }, void 0, !1, {
        fileName: "app/components/ui/tables/TablePagination.tsx",
        lineNumber: 231,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ui/tables/TablePagination.tsx",
      lineNumber: 227,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ui/tables/TablePagination.tsx",
    lineNumber: 198,
    columnNumber: 5
  }, this);
}

// app/components/ui/tables/TableSimple.tsx
var import_react80 = require("react");

// app/components/ui/icons/DownArrow.tsx
var import_jsx_dev_runtime75 = require("react/jsx-dev-runtime");
function DownArrow({ className = "h-4 w-4" }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("svg", { className, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)(
    "path",
    {
      fillRule: "evenodd",
      d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
      clipRule: "evenodd"
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/icons/DownArrow.tsx",
      lineNumber: 4,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/ui/icons/DownArrow.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/components/ui/icons/UpArrow.tsx
var import_jsx_dev_runtime76 = require("react/jsx-dev-runtime");
function UpArrow({ className = "h-4 w-4" }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime76.jsxDEV)("svg", { className, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime76.jsxDEV)(
    "path",
    {
      fillRule: "evenodd",
      d: "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",
      clipRule: "evenodd"
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/icons/UpArrow.tsx",
      lineNumber: 4,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/ui/icons/UpArrow.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/helpers/RowDisplayValueHelper.tsx
var import_react78 = require("@remix-run/react");

// app/components/ui/input/InputSelect.tsx
var import_clsx35 = __toESM(require("clsx")), import_jsx_dev_runtime77 = require("react/jsx-dev-runtime");
function InputSelect({
  name,
  title,
  withLabel = !0,
  value,
  options: options2,
  setValue,
  className,
  required,
  disabled,
  help,
  hint,
  borderless,
  autoFocus
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime77.jsxDEV)("div", { className: (0, import_clsx35.default)(className, "w-full flex-grow text-gray-800"), children: [
    withLabel && title && /* @__PURE__ */ (0, import_jsx_dev_runtime77.jsxDEV)("label", { htmlFor: name, className: "flex justify-between space-x-2 truncate text-xs font-medium text-gray-600", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime77.jsxDEV)("div", { className: "flex items-center space-x-1 truncate", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime77.jsxDEV)("div", { className: "flex space-x-1 truncate", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime77.jsxDEV)("div", { className: "truncate", children: title }, void 0, !1, {
            fileName: "app/components/ui/input/InputSelect.tsx",
            lineNumber: 41,
            columnNumber: 15
          }, this),
          required && /* @__PURE__ */ (0, import_jsx_dev_runtime77.jsxDEV)("div", { className: "ml-1 text-red-500", children: "*" }, void 0, !1, {
            fileName: "app/components/ui/input/InputSelect.tsx",
            lineNumber: 42,
            columnNumber: 28
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/ui/input/InputSelect.tsx",
          lineNumber: 40,
          columnNumber: 13
        }, this),
        help && /* @__PURE__ */ (0, import_jsx_dev_runtime77.jsxDEV)(HintTooltip, { text: help }, void 0, !1, {
          fileName: "app/components/ui/input/InputSelect.tsx",
          lineNumber: 45,
          columnNumber: 22
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/ui/input/InputSelect.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, this),
      hint
    ] }, void 0, !0, {
      fileName: "app/components/ui/input/InputSelect.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime77.jsxDEV)("div", { className: (0, import_clsx35.default)(withLabel && title && "mt-1"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime77.jsxDEV)(
      "select",
      {
        id: name,
        name,
        value,
        onChange: (e) => setValue ? setValue(e.currentTarget.value) : {},
        autoFocus,
        className: (0, import_clsx35.default)(
          "block w-full min-w-0 flex-1 rounded-md border-gray-300 focus:border-accent-500 focus:ring-accent-500 sm:text-sm",
          className,
          disabled ? "cursor-not-allowed bg-gray-100" : "hover:bg-gray-50 focus:bg-gray-50",
          borderless && "border-transparent"
        ),
        disabled,
        children: options2.map((item, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime77.jsxDEV)("option", { value: item.value, disabled: item.disabled, children: item.name }, idx, !1, {
          fileName: "app/components/ui/input/InputSelect.tsx",
          lineNumber: 67,
          columnNumber: 15
        }, this))
      },
      void 0,
      !1,
      {
        fileName: "app/components/ui/input/InputSelect.tsx",
        lineNumber: 51,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/ui/input/InputSelect.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ui/input/InputSelect.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}

// app/helpers/RowDisplayValueHelper.tsx
var import_jsx_dev_runtime78 = require("react/jsx-dev-runtime");
function displayRowValue(header, item, idxRow) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)(import_jsx_dev_runtime78.Fragment, { children: header.setValue ? /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)(import_jsx_dev_runtime78.Fragment, { children: header.type === void 0 || header.type === 0 /* TEXT */ ? /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)(
    InputText_default,
    {
      borderless: header.inputBorderless,
      withLabel: !1,
      name: header.name,
      title: header.title,
      value: header.value(item, idxRow),
      disabled: header.editable && !header.editable(item, idxRow),
      setValue: (e) => {
        header.setValue && header.setValue(e, idxRow);
      },
      required: !header.inputOptional
    },
    void 0,
    !1,
    {
      fileName: "app/helpers/RowDisplayValueHelper.tsx",
      lineNumber: 24,
      columnNumber: 13
    },
    this
  ) : header.type === 1 /* NUMBER */ ? /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)(
    InputNumber_default,
    {
      borderless: header.inputBorderless,
      withLabel: !1,
      name: header.name,
      title: header.title,
      value: header.value(item, idxRow),
      disabled: header.editable && !header.editable(item),
      setValue: (e) => {
        header.setValue && header.setValue(e, idxRow);
      },
      required: !header.inputOptional,
      step: header.inputNumberStep
    },
    void 0,
    !1,
    {
      fileName: "app/helpers/RowDisplayValueHelper.tsx",
      lineNumber: 39,
      columnNumber: 13
    },
    this
  ) : header.type === 2 /* SELECT */ ? /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)(
    InputSelect,
    {
      borderless: header.inputBorderless,
      withLabel: !1,
      name: header.name,
      title: header.title,
      value: header.value(item, idxRow),
      setValue: (e) => {
        header.setValue && header.setValue(Number(e), idxRow);
      },
      options: header.options ?? [],
      required: !header.inputOptional,
      disabled: header.editable && !header.editable(item)
    },
    void 0,
    !1,
    {
      fileName: "app/helpers/RowDisplayValueHelper.tsx",
      lineNumber: 55,
      columnNumber: 13
    },
    this
  ) : /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)(import_jsx_dev_runtime78.Fragment, {}, void 0, !1, {
    fileName: "app/helpers/RowDisplayValueHelper.tsx",
    lineNumber: 71,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/helpers/RowDisplayValueHelper.tsx",
    lineNumber: 22,
    columnNumber: 9
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)(import_jsx_dev_runtime78.Fragment, { children: header.href !== void 0 && header.href(item) ? /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)(import_react78.Link, { to: header.href(item) ?? "", className: "rounded-md border-b border-dashed border-transparent hover:border-gray-400 focus:bg-gray-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)("span", { children: header.formattedValue ? header.formattedValue(item, idxRow) : header.value(item, idxRow) }, void 0, !1, {
    fileName: "app/helpers/RowDisplayValueHelper.tsx",
    lineNumber: 15,
    columnNumber: 15
  }, this) }, void 0, !1, {
    fileName: "app/helpers/RowDisplayValueHelper.tsx",
    lineNumber: 14,
    columnNumber: 13
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)("span", { children: header.formattedValue ? header.formattedValue(item, idxRow) : header.value(item, idxRow) }, void 0, !1, {
    fileName: "app/helpers/RowDisplayValueHelper.tsx",
    lineNumber: 18,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/helpers/RowDisplayValueHelper.tsx",
    lineNumber: 12,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/helpers/RowDisplayValueHelper.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
var RowDisplayValueHelper_default = {
  displayRowValue
};

// app/components/ui/tables/TableSimple.tsx
var import_jsx_dev_runtime79 = require("react/jsx-dev-runtime");
function TableSimple(props) {
  let [showChild, setShowChild] = (0, import_react80.useState)(!1);
  return (0, import_react80.useEffect)(() => {
    setShowChild(!0);
  }, []), showChild ? /* @__PURE__ */ (0, import_jsx_dev_runtime79.jsxDEV)(Table, { ...props }, void 0, !1, {
    fileName: "app/components/ui/tables/TableSimple.tsx",
    lineNumber: 40,
    columnNumber: 10
  }, this) : null;
}
function Table({
  headers,
  items,
  actions = [],
  pagination,
  onClickRoute,
  selectedRows,
  onSelected,
  className,
  padding = "px-2 py-2",
  noRecords,
  emptyState
}) {
  let navigate = (0, import_react79.useNavigate)(), [searchParams, setSearchParams] = (0, import_react79.useSearchParams)(), [sortBy, setSortBy] = (0, import_react80.useState)();
  (0, import_react80.useEffect)(() => {
    let sort = searchParams.get("sort"), sortObject = ((sort == null ? void 0 : sort.split(",")) ?? []).map((s) => {
      let order = "asc";
      return s.startsWith("-") && (order = "desc"), { by: s.replace("-", ""), order };
    });
    setSortBy(sortObject);
  }, [searchParams]);
  function toggleSelected(_, item) {
    !selectedRows || !onSelected || (selectedRows.includes(item) ? onSelected(selectedRows.filter((i) => i !== item)) : onSelected([...selectedRows, item]));
  }
  let checkbox = (0, import_react80.useRef)(null), [checked, setChecked] = (0, import_react80.useState)(!1), [indeterminate, setIndeterminate] = (0, import_react80.useState)(!1);
  (0, import_react80.useLayoutEffect)(() => {
    if (!selectedRows || !onSelected)
      return;
    let isIndeterminate = selectedRows.length > 0 && selectedRows.length < items.length;
    setChecked(selectedRows.length === items.length && items.length > 0), setIndeterminate(isIndeterminate), checkbox.current.indeterminate = isIndeterminate;
  }, [onSelected, selectedRows]);
  function toggleAll() {
    !selectedRows || !onSelected || (onSelected(checked || indeterminate ? [] : items), setChecked(!checked && !indeterminate), setIndeterminate(!1));
  }
  function onHeaderClick(header) {
    if (!header.sortBy)
      return;
    let currentSort = sortBy == null ? void 0 : sortBy.find((s) => s.by === header.sortBy), newSort = header.sortBy;
    (currentSort == null ? void 0 : currentSort.order) === "asc" && (newSort = `-${header.sortBy}`), searchParams.set("sort", newSort), setSearchParams(searchParams);
  }
  function getSortDirection(header) {
    if (!header.sortBy)
      return;
    let currentSort = sortBy == null ? void 0 : sortBy.find((s) => s.by === header.sortBy);
    if (!!currentSort)
      return currentSort.order;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime79.jsxDEV)("div", { className: "shadow-xs w-full overflow-hidden rounded-lg border border-gray-200", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime79.jsxDEV)("div", { className: "w-full overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime79.jsxDEV)("table", { className: "whitespace-no-wrap w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime79.jsxDEV)("thead", { className: "bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime79.jsxDEV)("tr", { className: "border-b bg-gray-50 text-left text-xs font-semibold tracking-wide text-gray-500", children: [
        actions.filter((f) => f.firstColumn).length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime79.jsxDEV)("th", { scope: "col", className: "px-2 py-1" }, void 0, !1, {
          fileName: "app/components/ui/tables/TableSimple.tsx",
          lineNumber: 146,
          columnNumber: 67
        }, this),
        onSelected && /* @__PURE__ */ (0, import_jsx_dev_runtime79.jsxDEV)("th", { scope: "col", className: "relative w-12 px-6 py-5 sm:w-16 sm:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime79.jsxDEV)(
          "input",
          {
            title: "Select all",
            ref: checkbox,
            type: "checkbox",
            className: "absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-theme-600 focus:ring-theme-500 sm:left-6",
            checked,
            onChange: toggleAll
          },
          void 0,
          !1,
          {
            fileName: "app/components/ui/tables/TableSimple.tsx",
            lineNumber: 149,
            columnNumber: 19
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/ui/tables/TableSimple.tsx",
          lineNumber: 148,
          columnNumber: 17
        }, this),
        headers.map((header, idxHeader) => /* @__PURE__ */ (0, import_jsx_dev_runtime79.jsxDEV)(
          "th",
          {
            scope: "col",
            onClick: () => onHeaderClick(header),
            className: (0, import_clsx36.default)(
              idxHeader === 0 && actions.filter((f) => f.firstColumn).length === 0 && "pl-3",
              "whitespace-nowrap px-2 py-2 tracking-wider",
              header.breakpoint === "sm" && "hidden sm:table-cell",
              header.breakpoint === "md" && "mg:table-cell hidden",
              header.breakpoint === "lg" && "hidden lg:table-cell",
              header.breakpoint === "xl" && "hidden xl:table-cell",
              header.breakpoint === "2xl" && "hidden 2xl:table-cell",
              header.sortBy && "cursor-pointer"
            ),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime79.jsxDEV)(
              "div",
              {
                className: (0, import_clsx36.default)(
                  "group flex space-x-2",
                  !header.align && "justify-between",
                  header.align === "right" && "justify-end",
                  header.align === "center" && "justify-center",
                  header.align === "left" && "justify-start"
                ),
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime79.jsxDEV)("div", { className: (0, import_clsx36.default)(header.className, "truncate"), children: header.title }, void 0, !1, {
                    fileName: "app/components/ui/tables/TableSimple.tsx",
                    lineNumber: 185,
                    columnNumber: 23
                  }, this),
                  header.sortBy && /* @__PURE__ */ (0, import_jsx_dev_runtime79.jsxDEV)("div", { className: "text text-gray-500 group-hover:text-gray-800", children: getSortDirection(header) === "desc" ? /* @__PURE__ */ (0, import_jsx_dev_runtime79.jsxDEV)(DownArrow, { className: "h-4 w-4" }, void 0, !1, {
                    fileName: "app/components/ui/tables/TableSimple.tsx",
                    lineNumber: 189,
                    columnNumber: 29
                  }, this) : getSortDirection(header) === "asc" && /* @__PURE__ */ (0, import_jsx_dev_runtime79.jsxDEV)(UpArrow, { className: "h-4 w-4" }, void 0, !1, {
                    fileName: "app/components/ui/tables/TableSimple.tsx",
                    lineNumber: 191,
                    columnNumber: 67
                  }, this) }, void 0, !1, {
                    fileName: "app/components/ui/tables/TableSimple.tsx",
                    lineNumber: 187,
                    columnNumber: 25
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/components/ui/tables/TableSimple.tsx",
                lineNumber: 176,
                columnNumber: 21
              },
              this
            )
          },
          idxHeader,
          !1,
          {
            fileName: "app/components/ui/tables/TableSimple.tsx",
            lineNumber: 161,
            columnNumber: 19
          },
          this
        )),
        actions.filter((f) => !f.firstColumn).length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime79.jsxDEV)("th", { scope: "col", className: "px-2 py-1" }, void 0, !1, {
          fileName: "app/components/ui/tables/TableSimple.tsx",
          lineNumber: 199,
          columnNumber: 68
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/ui/tables/TableSimple.tsx",
        lineNumber: 145,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/ui/tables/TableSimple.tsx",
        lineNumber: 144,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime79.jsxDEV)("tbody", { className: "divide-y divide-gray-200 bg-white", children: items.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime79.jsxDEV)("tr", { className: "text-gray-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime79.jsxDEV)("td", { colSpan: headers.length + actions.length + (onSelected ? 1 : 0), className: "text-center", children: noRecords ?? /* @__PURE__ */ (0, import_jsx_dev_runtime79.jsxDEV)("div", { className: "p-3 text-sm text-gray-500", children: emptyState ? /* @__PURE__ */ (0, import_jsx_dev_runtime79.jsxDEV)("div", { className: "space-y-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime79.jsxDEV)("div", { className: "font-medium", children: emptyState.title }, void 0, !1, {
          fileName: "app/components/ui/tables/TableSimple.tsx",
          lineNumber: 212,
          columnNumber: 27
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime79.jsxDEV)("div", { children: emptyState.description }, void 0, !1, {
          fileName: "app/components/ui/tables/TableSimple.tsx",
          lineNumber: 213,
          columnNumber: 27
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/ui/tables/TableSimple.tsx",
        lineNumber: 211,
        columnNumber: 25
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime79.jsxDEV)("span", { children: "No records found" }, void 0, !1, {
        fileName: "app/components/ui/tables/TableSimple.tsx",
        lineNumber: 209,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/components/ui/tables/TableSimple.tsx",
        lineNumber: 207,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/components/ui/tables/TableSimple.tsx",
        lineNumber: 205,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/ui/tables/TableSimple.tsx",
        lineNumber: 204,
        columnNumber: 15
      }, this) : items.map((item, idxRow) => /* @__PURE__ */ (0, import_jsx_dev_runtime79.jsxDEV)(
        "tr",
        {
          onClick: () => {
            onClickRoute !== void 0 && navigate(onClickRoute(idxRow, item));
          },
          className: "group text-gray-700",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime79.jsxDEV)(ActionsCells, { actions: actions.filter((f) => f.firstColumn), className, item, idxRow }, void 0, !1, {
              fileName: "app/components/ui/tables/TableSimple.tsx",
              lineNumber: 232,
              columnNumber: 21
            }, this),
            onSelected && /* @__PURE__ */ (0, import_jsx_dev_runtime79.jsxDEV)("td", { className: "relative w-12 px-6 text-gray-700 sm:w-16 sm:px-8", children: [
              (selectedRows == null ? void 0 : selectedRows.includes(item)) && /* @__PURE__ */ (0, import_jsx_dev_runtime79.jsxDEV)("div", { className: "absolute inset-y-0 left-0 w-0.5 bg-theme-600" }, void 0, !1, {
                fileName: "app/components/ui/tables/TableSimple.tsx",
                lineNumber: 235,
                columnNumber: 58
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime79.jsxDEV)("div", { className: "flex items-center space-x-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime79.jsxDEV)(
                "input",
                {
                  title: "Select",
                  type: "checkbox",
                  className: "absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-theme-600 focus:ring-theme-500 sm:left-6",
                  checked: selectedRows == null ? void 0 : selectedRows.includes(item),
                  onChange: (e) => {
                    toggleSelected(idxRow, item);
                  }
                },
                void 0,
                !1,
                {
                  fileName: "app/components/ui/tables/TableSimple.tsx",
                  lineNumber: 237,
                  columnNumber: 27
                },
                this
              ) }, void 0, !1, {
                fileName: "app/components/ui/tables/TableSimple.tsx",
                lineNumber: 236,
                columnNumber: 25
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/ui/tables/TableSimple.tsx",
              lineNumber: 234,
              columnNumber: 23
            }, this),
            headers.map((header, idxHeader) => /* @__PURE__ */ (0, import_jsx_dev_runtime79.jsxDEV)(
              "td",
              {
                className: (0, import_clsx36.default)(
                  idxHeader === 0 && actions.filter((f) => f.firstColumn).length === 0 && "pl-4",
                  "whitespace-nowrap text-sm text-gray-700",
                  header.className,
                  padding ?? "px-2 py-2",
                  header.breakpoint === "sm" && "hidden sm:table-cell",
                  header.breakpoint === "md" && "mg:table-cell hidden",
                  header.breakpoint === "lg" && "hidden lg:table-cell",
                  header.breakpoint === "xl" && "hidden xl:table-cell",
                  header.breakpoint === "2xl" && "hidden 2xl:table-cell",
                  className && className(idxRow, item)
                ),
                children: RowDisplayValueHelper_default.displayRowValue(header, item, idxRow)
              },
              idxHeader,
              !1,
              {
                fileName: "app/components/ui/tables/TableSimple.tsx",
                lineNumber: 251,
                columnNumber: 25
              },
              this
            )),
            /* @__PURE__ */ (0, import_jsx_dev_runtime79.jsxDEV)(ActionsCells, { actions: actions.filter((f) => !f.firstColumn), className, item, idxRow }, void 0, !1, {
              fileName: "app/components/ui/tables/TableSimple.tsx",
              lineNumber: 270,
              columnNumber: 21
            }, this)
          ]
        },
        idxRow,
        !0,
        {
          fileName: "app/components/ui/tables/TableSimple.tsx",
          lineNumber: 223,
          columnNumber: 19
        },
        this
      )) }, void 0, !1, {
        fileName: "app/components/ui/tables/TableSimple.tsx",
        lineNumber: 202,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ui/tables/TableSimple.tsx",
      lineNumber: 143,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/ui/tables/TableSimple.tsx",
      lineNumber: 142,
      columnNumber: 7
    }, this),
    pagination && /* @__PURE__ */ (0, import_jsx_dev_runtime79.jsxDEV)(TablePagination, { totalItems: pagination.totalItems, totalPages: pagination.totalPages, page: pagination.page, pageSize: pagination.pageSize }, void 0, !1, {
      fileName: "app/components/ui/tables/TableSimple.tsx",
      lineNumber: 287,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ui/tables/TableSimple.tsx",
    lineNumber: 141,
    columnNumber: 5
  }, this);
}
function ActionsCells({
  item,
  actions,
  idxRow,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime79.jsxDEV)(import_jsx_dev_runtime79.Fragment, { children: actions && actions.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime79.jsxDEV)("td", { className: (0, import_clsx36.default)("whitespace-nowrap px-2 py-1", className && className(idxRow, item)), children: /* @__PURE__ */ (0, import_jsx_dev_runtime79.jsxDEV)("div", { className: "flex space-x-2", children: actions.filter((f) => !f.hidden || !f.hidden(item)).map((action18, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime79.jsxDEV)(
    ButtonTertiary,
    {
      disabled: action18.disabled !== void 0 ? action18.disabled(item) : action18.disabled,
      destructive: action18.renderIsDestructive !== void 0 ? action18.renderIsDestructive(item) : action18.destructive,
      onClick: () => {
        action18.onClick && action18.onClick(idxRow, item);
      },
      to: action18.onClickRoute && action18.onClickRoute(idxRow, item),
      target: action18.onClickRouteTarget,
      children: action18.renderTitle ? action18.renderTitle(item) : action18.title
    },
    idx,
    !1,
    {
      fileName: "app/components/ui/tables/TableSimple.tsx",
      lineNumber: 313,
      columnNumber: 19
    },
    this
  )) }, void 0, !1, {
    fileName: "app/components/ui/tables/TableSimple.tsx",
    lineNumber: 308,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/components/ui/tables/TableSimple.tsx",
    lineNumber: 307,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/ui/tables/TableSimple.tsx",
    lineNumber: 305,
    columnNumber: 5
  }, this);
}

// app/modules/knowledgeBase/components/articles/KbSortArticles.tsx
var import_jsx_dev_runtime80 = require("react/jsx-dev-runtime");
function KbSortArticles({
  items
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime80.jsxDEV)("div", { className: "space-y-1", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime80.jsxDEV)("label", { className: "block text-xs font-medium text-gray-600", children: "Articles" }, void 0, !1, {
      fileName: "app/modules/knowledgeBase/components/articles/KbSortArticles.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime80.jsxDEV)(
      TableSimple,
      {
        items,
        headers: [
          {
            name: "order",
            title: "",
            value: (i, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime80.jsxDEV)(OrderListButtons, { index: idx, items, editable: !0 }, void 0, !1, {
              fileName: "app/modules/knowledgeBase/components/articles/KbSortArticles.tsx",
              lineNumber: 22,
              columnNumber: 32
            }, this)
          },
          {
            name: "title",
            title: "Title",
            value: (item) => item.title
          }
        ]
      },
      void 0,
      !1,
      {
        fileName: "app/modules/knowledgeBase/components/articles/KbSortArticles.tsx",
        lineNumber: 16,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/modules/knowledgeBase/components/articles/KbSortArticles.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// app/modules/knowledgeBase/components/bases/KbCategorySectionForm.tsx
var import_jsx_dev_runtime81 = require("react/jsx-dev-runtime");
function KbCategorySectionForm({
  knowledgeBase,
  category,
  language,
  item,
  onDelete
}) {
  let navigation = (0, import_react81.useNavigation)(), navigate = (0, import_react81.useNavigate)(), mainInput = (0, import_react82.useRef)(null);
  (0, import_react82.useEffect)(() => {
    setTimeout(() => {
      var _a, _b;
      (_b = (_a = mainInput.current) == null ? void 0 : _a.input.current) == null || _b.focus();
    }, 100);
  }, []);
  let [title, setTitle] = (0, import_react82.useState)((item == null ? void 0 : item.title) || ""), [description, setDescription] = (0, import_react82.useState)((item == null ? void 0 : item.description) || "");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime81.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime81.jsxDEV)(import_react81.Form, { method: "post", className: "inline-block w-full overflow-hidden p-1 text-left align-bottom sm:align-middle", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime81.jsxDEV)("input", { type: "hidden", name: "action", value: item ? "edit" : "new" }, void 0, !1, {
      fileName: "app/modules/knowledgeBase/components/bases/KbCategorySectionForm.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime81.jsxDEV)("div", { className: "space-y-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime81.jsxDEV)(InputText_default, { ref: mainInput, autoFocus: !0, name: "title", title: "Title", value: title, setValue: setTitle, required: !0 }, void 0, !1, {
        fileName: "app/modules/knowledgeBase/components/bases/KbCategorySectionForm.tsx",
        lineNumber: 44,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime81.jsxDEV)(InputText_default, { name: "description", title: "Description", value: description, setValue: setDescription }, void 0, !1, {
        fileName: "app/modules/knowledgeBase/components/bases/KbCategorySectionForm.tsx",
        lineNumber: 45,
        columnNumber: 11
      }, this),
      item && /* @__PURE__ */ (0, import_jsx_dev_runtime81.jsxDEV)(KbSortArticles, { items: item.articles.sort((a, b) => a.order - b.order) }, void 0, !1, {
        fileName: "app/modules/knowledgeBase/components/bases/KbCategorySectionForm.tsx",
        lineNumber: 46,
        columnNumber: 20
      }, this)
    ] }, void 0, !0, {
      fileName: "app/modules/knowledgeBase/components/bases/KbCategorySectionForm.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime81.jsxDEV)("div", { className: "mt-5 flex justify-between space-x-2 sm:mt-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime81.jsxDEV)("div", { children: onDelete && /* @__PURE__ */ (0, import_jsx_dev_runtime81.jsxDEV)(ButtonSecondary, { disabled: navigation.state === "submitting", type: "button", className: "w-full", onClick: onDelete, destructive: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime81.jsxDEV)("div", { children: "Delete" }, void 0, !1, {
        fileName: "app/modules/knowledgeBase/components/bases/KbCategorySectionForm.tsx",
        lineNumber: 52,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/modules/knowledgeBase/components/bases/KbCategorySectionForm.tsx",
        lineNumber: 51,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/modules/knowledgeBase/components/bases/KbCategorySectionForm.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime81.jsxDEV)("div", { className: "flex space-x-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime81.jsxDEV)(ButtonSecondary, { onClick: () => navigate(`/admin/knowledge-base/bases/${knowledgeBase.slug}/${language}`), children: "Cancel" }, void 0, !1, {
          fileName: "app/modules/knowledgeBase/components/bases/KbCategorySectionForm.tsx",
          lineNumber: 57,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime81.jsxDEV)(LoadingButton_default, { actionName: item ? "edit" : "new", type: "submit", disabled: navigation.state === "submitting", children: "Save" }, void 0, !1, {
          fileName: "app/modules/knowledgeBase/components/bases/KbCategorySectionForm.tsx",
          lineNumber: 58,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/modules/knowledgeBase/components/bases/KbCategorySectionForm.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/modules/knowledgeBase/components/bases/KbCategorySectionForm.tsx",
      lineNumber: 48,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/modules/knowledgeBase/components/bases/KbCategorySectionForm.tsx",
    lineNumber: 41,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/modules/knowledgeBase/components/bases/KbCategorySectionForm.tsx",
    lineNumber: 40,
    columnNumber: 5
  }, this);
}

// app/routes/admin/knowledge-base/bases.$slug/categories.$lang/$id.sections.$section.tsx
var import_jsx_dev_runtime82 = require("react/jsx-dev-runtime"), loader10 = async ({ params }) => {
  let knowledgeBase = await KnowledgeBaseService_default.get({
    slug: params.slug
  }), category = await getKbCategoryById(params.id);
  if (!category)
    return (0, import_node14.redirect)(`/admin/knowledge-base/bases/${params.slug}/categories/${params.lang}`);
  let item = await getKbCategorySectionById(params.section);
  return item ? (0, import_node14.json)({
    knowledgeBase,
    category,
    item
  }) : (0, import_node14.redirect)(`/admin/knowledge-base/bases/${params.slug}/categories/${params.lang}/${params.id}`);
}, action8 = async ({ request, params }) => {
  var _a, _b, _c, _d;
  let form = await request.formData(), action18 = (_a = form.get("action")) == null ? void 0 : _a.toString();
  await KnowledgeBasePermissionsService_default.hasPermission({ action: action18 });
  let item = await getKbCategorySectionById(params.section);
  if (!item)
    return (0, import_node14.redirect)(`/admin/knowledge-base/bases/${params.slug}/${params.lang}/${params.id}`);
  if (action18 === "edit") {
    let order = Number(((_b = form.get("order")) == null ? void 0 : _b.toString()) ?? ""), title = ((_c = form.get("title")) == null ? void 0 : _c.toString()) ?? "", description = ((_d = form.get("description")) == null ? void 0 : _d.toString()) ?? "";
    try {
      await updateKnowledgeBaseCategorySection(item.id, {
        order,
        title,
        description
      });
    } catch (e) {
      return (0, import_node14.json)({ error: e.message }, { status: 400 });
    }
    return (0, import_node14.redirect)(`/admin/knowledge-base/bases/${params.slug}/categories/${params.lang}`);
  } else {
    if (action18 === "delete")
      return await deleteKnowledgeBaseCategorySection(item.id), (0, import_node14.redirect)(`/admin/knowledge-base/bases/${params.slug}/categories/${params.lang}`);
    if (action18 === "set-orders") {
      let items = form.getAll("orders[]").map((f) => JSON.parse(f.toString()));
      return await Promise.all(
        items.map(async ({ id, order }) => {
          await updateKnowledgeBaseArticle(id, {
            order: Number(order)
          });
        })
      ), (0, import_node14.json)({ updated: !0 });
    } else
      return (0, import_node14.json)({ error: "Invalid form" }, { status: 400 });
  }
};
function id_sections_section_default() {
  let data = (0, import_remix_typedjson9.useTypedLoaderData)(), submit = (0, import_react83.useSubmit)(), params = (0, import_react83.useParams)();
  function onDelete() {
    let form = new FormData();
    form.set("action", "delete"), submit(form, {
      method: "post"
    });
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)(KbCategorySectionForm, { knowledgeBase: data.knowledgeBase, category: data.category, language: params.lang, item: data.item, onDelete }, void 0, !1, {
    fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang/$id.sections.$section.tsx",
    lineNumber: 104,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang/$id.sections.$section.tsx",
    lineNumber: 103,
    columnNumber: 5
  }, this);
}

// app/routes/admin/knowledge-base/bases.$slug/categories.$lang/$id.sections.new.tsx
var id_sections_new_exports = {};
__export(id_sections_new_exports, {
  action: () => action9,
  default: () => id_sections_new_default,
  loader: () => loader11
});
var import_node15 = require("@remix-run/node"), import_react84 = require("@remix-run/react"), import_remix_typedjson10 = require("remix-typedjson");
var import_jsx_dev_runtime83 = require("react/jsx-dev-runtime"), loader11 = async ({ params }) => {
  let knowledgeBase = await KnowledgeBaseService_default.get({
    slug: params.slug
  }), category = await getKbCategoryById(params.id);
  return category ? (0, import_node15.json)({
    knowledgeBase,
    category
  }) : (0, import_node15.redirect)(`/admin/knowledge-base/bases/${params.slug}/categories/${params.lang}`);
}, action9 = async ({ request, params }) => {
  var _a, _b, _c;
  let form = await request.formData(), action18 = (_a = form.get("action")) == null ? void 0 : _a.toString();
  await KnowledgeBasePermissionsService_default.hasPermission({ action: action18 });
  let category = await getKbCategoryById(params.id);
  if (!category)
    return (0, import_node15.redirect)(`/admin/knowledge-base/bases/${params.slug}/categories/${params.lang}`);
  if (action18 === "new") {
    let title = ((_b = form.get("title")) == null ? void 0 : _b.toString()) ?? "", description = ((_c = form.get("description")) == null ? void 0 : _c.toString()) ?? "", maxOrder = 0;
    category.sections.length > 0 && (maxOrder = Math.max(...category.sections.map((i) => i.order)));
    try {
      await createKnowledgeBaseCategorySection({
        categoryId: category.id,
        order: maxOrder + 1,
        title,
        description
      });
    } catch (e) {
      return (0, import_node15.json)({ error: e.message }, { status: 400 });
    }
    return (0, import_node15.redirect)(`/admin/knowledge-base/bases/${params.slug}/categories/${params.lang}`);
  } else
    return (0, import_node15.json)({ error: "Invalid form" }, { status: 400 });
};
function id_sections_new_default() {
  let data = (0, import_remix_typedjson10.useTypedLoaderData)(), params = (0, import_react84.useParams)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime83.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime83.jsxDEV)(KbCategorySectionForm, { knowledgeBase: data.knowledgeBase, category: data.category, language: params.lang }, void 0, !1, {
    fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang/$id.sections.new.tsx",
    lineNumber: 73,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang/$id.sections.new.tsx",
    lineNumber: 72,
    columnNumber: 5
  }, this);
}

// app/routes/admin/knowledge-base/bases.$slug/categories.$lang/$id.tsx
var id_exports = {};
__export(id_exports, {
  action: () => action10,
  default: () => id_default,
  loader: () => loader12
});
var import_node16 = require("@remix-run/node"), import_react87 = require("@remix-run/react"), import_remix_typedjson11 = require("remix-typedjson");

// app/modules/knowledgeBase/components/bases/KbCategoryForm.tsx
var import_react85 = require("@remix-run/react"), import_react86 = require("react");
var import_jsx_dev_runtime84 = require("react/jsx-dev-runtime");
function KbCategoryForm({
  knowledgeBase,
  language,
  item,
  onDelete
}) {
  let navigation = (0, import_react85.useNavigation)(), navigate = (0, import_react85.useNavigate)(), mainInput = (0, import_react86.useRef)(null);
  (0, import_react86.useEffect)(() => {
    setTimeout(() => {
      var _a, _b;
      (_b = (_a = mainInput.current) == null ? void 0 : _a.input.current) == null || _b.focus();
    }, 100);
  }, []);
  let [slug, setSlug] = (0, import_react86.useState)((item == null ? void 0 : item.slug) || ""), [title, setTitle] = (0, import_react86.useState)((item == null ? void 0 : item.title) || ""), [description, setDescription] = (0, import_react86.useState)((item == null ? void 0 : item.description) || ""), [icon, setIcon] = (0, import_react86.useState)(
    (item == null ? void 0 : item.icon) || ""
  ), [seoImage, setSeoImage] = (0, import_react86.useState)((item == null ? void 0 : item.seoImage) || "");
  return (0, import_react86.useEffect)(() => {
    item || setSlug(UrlUtils_default.slugify(title.toLowerCase()));
  }, [item, title]), /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(import_react85.Form, { method: "post", className: "inline-block w-full overflow-hidden p-1 text-left align-bottom sm:align-middle", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("input", { type: "hidden", name: "action", value: item ? "edit" : "new" }, void 0, !1, {
      fileName: "app/modules/knowledgeBase/components/bases/KbCategoryForm.tsx",
      lineNumber: 54,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("div", { className: "space-y-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(InputText_default, { ref: mainInput, autoFocus: !0, name: "title", title: "Title", value: title, setValue: setTitle, required: !0 }, void 0, !1, {
        fileName: "app/modules/knowledgeBase/components/bases/KbCategoryForm.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(InputText_default, { name: "slug", title: "Slug", value: slug, setValue: setSlug, required: !0 }, void 0, !1, {
        fileName: "app/modules/knowledgeBase/components/bases/KbCategoryForm.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(InputText_default, { name: "description", title: "Description", value: description, setValue: setDescription }, void 0, !1, {
        fileName: "app/modules/knowledgeBase/components/bases/KbCategoryForm.tsx",
        lineNumber: 58,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(
        InputText_default,
        {
          name: "icon",
          title: "Icon",
          value: icon,
          setValue: (e) => setIcon(e.toString() ?? ""),
          hint: "svg or url",
          button: /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("div", { className: "absolute inset-y-0 right-0 flex py-0.5 pr-0.5 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("kbd", { className: "inline-flex w-10 items-center justify-center rounded border border-gray-300 bg-gray-50 px-1 text-center font-sans text-xs font-medium text-gray-500", children: icon ? /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(EntityIcon, { className: "h-7 w-7 text-gray-600", icon, title }, void 0, !1, {
            fileName: "app/modules/knowledgeBase/components/bases/KbCategoryForm.tsx",
            lineNumber: 81,
            columnNumber: 27
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("span", { className: "text-red-600", children: "?" }, void 0, !1, {
            fileName: "app/modules/knowledgeBase/components/bases/KbCategoryForm.tsx",
            lineNumber: 81,
            columnNumber: 104
          }, this) }, void 0, !1, {
            fileName: "app/modules/knowledgeBase/components/bases/KbCategoryForm.tsx",
            lineNumber: 80,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/modules/knowledgeBase/components/bases/KbCategoryForm.tsx",
            lineNumber: 79,
            columnNumber: 15
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/modules/knowledgeBase/components/bases/KbCategoryForm.tsx",
          lineNumber: 72,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(InputText_default, { name: "seoImage", title: "SEO Image", value: seoImage, setValue: setSeoImage, hint: "url" }, void 0, !1, {
        fileName: "app/modules/knowledgeBase/components/bases/KbCategoryForm.tsx",
        lineNumber: 86,
        columnNumber: 11
      }, this),
      seoImage && /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("div", { className: "col-span-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("img", { className: "overflow-hidden rounded-lg shadow-xl xl:border-b xl:border-gray-200", src: seoImage, alt: title }, void 0, !1, {
        fileName: "app/modules/knowledgeBase/components/bases/KbCategoryForm.tsx",
        lineNumber: 89,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/modules/knowledgeBase/components/bases/KbCategoryForm.tsx",
        lineNumber: 88,
        columnNumber: 13
      }, this),
      item && /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(KbSortArticles, { items: item.articles.filter((f) => !f.sectionId).sort((a, b) => a.order - b.order) }, void 0, !1, {
        fileName: "app/modules/knowledgeBase/components/bases/KbCategoryForm.tsx",
        lineNumber: 93,
        columnNumber: 20
      }, this)
    ] }, void 0, !0, {
      fileName: "app/modules/knowledgeBase/components/bases/KbCategoryForm.tsx",
      lineNumber: 55,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("div", { className: "mt-5 flex justify-between space-x-2 sm:mt-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("div", { children: onDelete && /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(ButtonSecondary, { disabled: navigation.state === "submitting", type: "button", className: "w-full", onClick: onDelete, destructive: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("div", { children: "Delete" }, void 0, !1, {
        fileName: "app/modules/knowledgeBase/components/bases/KbCategoryForm.tsx",
        lineNumber: 99,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/modules/knowledgeBase/components/bases/KbCategoryForm.tsx",
        lineNumber: 98,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/modules/knowledgeBase/components/bases/KbCategoryForm.tsx",
        lineNumber: 96,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("div", { className: "flex space-x-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(ButtonSecondary, { onClick: () => navigate(`/admin/knowledge-base/bases/${knowledgeBase.slug}/categories/${language}`), children: "Cancel" }, void 0, !1, {
          fileName: "app/modules/knowledgeBase/components/bases/KbCategoryForm.tsx",
          lineNumber: 104,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(LoadingButton_default, { actionName: item ? "edit" : "new", type: "submit", disabled: navigation.state === "submitting", children: "Save" }, void 0, !1, {
          fileName: "app/modules/knowledgeBase/components/bases/KbCategoryForm.tsx",
          lineNumber: 105,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/modules/knowledgeBase/components/bases/KbCategoryForm.tsx",
        lineNumber: 103,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/modules/knowledgeBase/components/bases/KbCategoryForm.tsx",
      lineNumber: 95,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/modules/knowledgeBase/components/bases/KbCategoryForm.tsx",
    lineNumber: 53,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/modules/knowledgeBase/components/bases/KbCategoryForm.tsx",
    lineNumber: 52,
    columnNumber: 5
  }, this);
}

// app/routes/admin/knowledge-base/bases.$slug/categories.$lang/$id.tsx
var import_jsx_dev_runtime85 = require("react/jsx-dev-runtime"), loader12 = async ({ params }) => {
  let knowledgeBase = await KnowledgeBaseService_default.get({
    slug: params.slug
  }), item = await getKbCategoryById(params.id);
  return item ? (0, import_node16.json)({
    knowledgeBase,
    item
  }) : (0, import_node16.redirect)(`/admin/knowledge-base/bases/${params.slug}/categories/${params.lang}`);
}, action10 = async ({ request, params }) => {
  var _a, _b, _c, _d, _e, _f;
  let form = await request.formData(), action18 = (_a = form.get("action")) == null ? void 0 : _a.toString();
  await KnowledgeBasePermissionsService_default.hasPermission({ action: action18 });
  let knowledgeBase = await KnowledgeBaseService_default.get({
    slug: params.slug
  }), item = await getKbCategoryById(params.id);
  if (!item)
    return (0, import_node16.redirect)(`/admin/knowledge-base/bases/${params.slug}/categories/${params.lang}`);
  if (action18 === "edit") {
    let slug = ((_b = form.get("slug")) == null ? void 0 : _b.toString()) ?? "", title = ((_c = form.get("title")) == null ? void 0 : _c.toString()) ?? "", description = ((_d = form.get("description")) == null ? void 0 : _d.toString()) ?? "", icon = ((_e = form.get("icon")) == null ? void 0 : _e.toString()) ?? "", seoImage = ((_f = form.get("seoImage")) == null ? void 0 : _f.toString()) ?? "", existing = await getKbCategoryBySlug({
      knowledgeBaseId: knowledgeBase.id,
      slug,
      language: params.lang
    });
    if (existing && existing.id !== item.id)
      return (0, import_node16.json)({ error: "Slug already exists" }, { status: 400 });
    try {
      await updateKnowledgeBaseCategory(item.id, {
        slug,
        title,
        description,
        icon,
        language: params.lang,
        seoImage
      });
    } catch (e) {
      return (0, import_node16.json)({ error: e.message }, { status: 400 });
    }
    return (0, import_node16.redirect)(`/admin/knowledge-base/bases/${params.slug}/categories/${params.lang}`);
  } else {
    if (action18 === "delete")
      return await deleteKnowledgeBaseCategory(item.id), (0, import_node16.redirect)(`/admin/knowledge-base/bases/${params.slug}/categories/${params.lang}`);
    if (action18 === "set-orders") {
      let items = form.getAll("orders[]").map((f) => JSON.parse(f.toString()));
      return await Promise.all(
        items.map(async ({ id, order }) => {
          await updateKnowledgeBaseArticle(id, {
            order: Number(order)
          });
        })
      ), (0, import_node16.json)({ updated: !0 });
    } else
      return (0, import_node16.json)({ error: "Invalid form" }, { status: 400 });
  }
};
function id_default() {
  let data = (0, import_remix_typedjson11.useTypedLoaderData)(), submit = (0, import_react87.useSubmit)(), params = (0, import_react87.useParams)();
  function onDelete() {
    let form = new FormData();
    form.set("action", "delete"), submit(form, {
      method: "post"
    });
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime85.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime85.jsxDEV)(KbCategoryForm, { knowledgeBase: data.knowledgeBase, language: params.lang, item: data.item, onDelete }, void 0, !1, {
    fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang/$id.tsx",
    lineNumber: 115,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang/$id.tsx",
    lineNumber: 114,
    columnNumber: 5
  }, this);
}

// app/routes/admin/knowledge-base/bases.$slug/categories.$lang/new.tsx
var new_exports = {};
__export(new_exports, {
  action: () => action11,
  default: () => new_default,
  loader: () => loader13
});
var import_node17 = require("@remix-run/node"), import_react88 = require("@remix-run/react"), import_remix_typedjson12 = require("remix-typedjson");
var import_jsx_dev_runtime86 = require("react/jsx-dev-runtime"), loader13 = async ({ params }) => {
  let data = {
    knowledgeBase: await KnowledgeBaseService_default.get({
      slug: params.slug
    })
  };
  return (0, import_node17.json)(data);
}, action11 = async ({ request, params }) => {
  var _a, _b, _c, _d, _e, _f;
  let form = await request.formData(), action18 = (_a = form.get("action")) == null ? void 0 : _a.toString();
  await KnowledgeBasePermissionsService_default.hasPermission({ action: action18 });
  let knowledgeBase = await KnowledgeBaseService_default.get({
    slug: params.slug
  });
  if (action18 === "new") {
    let slug = ((_b = form.get("slug")) == null ? void 0 : _b.toString()) ?? "", title = ((_c = form.get("title")) == null ? void 0 : _c.toString()) ?? "", description = ((_d = form.get("description")) == null ? void 0 : _d.toString()) ?? "", icon = ((_e = form.get("icon")) == null ? void 0 : _e.toString()) ?? "", seoImage = ((_f = form.get("seoImage")) == null ? void 0 : _f.toString()) ?? "", allCategories = await getAllKnowledgeBaseCategories({
      knowledgeBaseSlug: params.slug,
      language: params.lang
    }), maxOrder = 0;
    if (allCategories.length > 0 && (maxOrder = Math.max(...allCategories.map((i) => i.order))), await getKbCategoryBySlug({
      knowledgeBaseId: knowledgeBase.id,
      slug,
      language: params.lang
    }))
      return (0, import_node17.json)({ error: "Slug already exists" }, { status: 400 });
    try {
      await createKnowledgeBaseCategory({
        knowledgeBaseId: knowledgeBase.id,
        slug,
        title,
        description,
        icon,
        language: params.lang,
        seoImage,
        order: maxOrder + 1
      });
    } catch (e) {
      return (0, import_node17.json)({ error: e.message }, { status: 400 });
    }
    return (0, import_node17.redirect)(`/admin/knowledge-base/bases/${params.slug}/categories/${params.lang}`);
  } else
    return (0, import_node17.json)({ error: "Invalid form" }, { status: 400 });
};
function new_default() {
  let data = (0, import_remix_typedjson12.useTypedLoaderData)(), params = (0, import_react88.useParams)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime86.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime86.jsxDEV)(KbCategoryForm, { knowledgeBase: data.knowledgeBase, language: params.lang }, void 0, !1, {
    fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang/new.tsx",
    lineNumber: 84,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.$lang/new.tsx",
    lineNumber: 83,
    columnNumber: 5
  }, this);
}

// app/routes/admin/knowledge-base/bases.$slug/articles.$lang.tsx
var articles_lang_exports = {};
__export(articles_lang_exports, {
  action: () => action12,
  default: () => articles_lang_default,
  loader: () => loader14
});
var import_node18 = require("@remix-run/node"), import_react96 = require("@remix-run/react"), import_remix_typedjson13 = require("remix-typedjson");

// app/components/ui/badges/SimpleBadge.tsx
var import_clsx37 = __toESM(require("clsx"));
var import_jsx_dev_runtime87 = require("react/jsx-dev-runtime");
function SimpleBadge({ title, color, className, children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime87.jsxDEV)("div", { className: (0, import_clsx37.default)(className, "inline-flex items-center rounded-md px-1 py-0 text-xs font-bold", getBadgeColor(color)), children: title ?? children }, void 0, !1, {
    fileName: "app/components/ui/badges/SimpleBadge.tsx",
    lineNumber: 13,
    columnNumber: 10
  }, this);
}

// app/components/ui/input/InputCheckbox.tsx
var import_react89 = require("@headlessui/react"), import_clsx38 = __toESM(require("clsx")), import_react90 = require("react");
var import_jsx_dev_runtime88 = require("react/jsx-dev-runtime"), InputCheckbox = ({ name, title, withLabel = !0, value, setValue, className, required, disabled, asToggle, readOnly, hint, help, icon, autoFocus }, ref) => {
  (0, import_react90.useImperativeHandle)(ref, () => ({ input }));
  let input = (0, import_react90.useRef)(null), [actualValue, setActualValue] = (0, import_react90.useState)(value ?? !1);
  return (0, import_react90.useEffect)(() => {
    setActualValue(value ?? !1);
  }, [value]), (0, import_react90.useEffect)(() => {
    setValue && actualValue !== value && setValue(actualValue);
  }, [actualValue]), /* @__PURE__ */ (0, import_jsx_dev_runtime88.jsxDEV)("div", { className: (0, import_clsx38.default)(className, "text-gray-800"), children: [
    withLabel && title && /* @__PURE__ */ (0, import_jsx_dev_runtime88.jsxDEV)("label", { htmlFor: name, className: "mb-1 flex justify-between space-x-2 text-xs font-medium text-gray-600", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime88.jsxDEV)("div", { className: " flex items-center space-x-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime88.jsxDEV)("div", { className: "truncate", children: [
          title,
          required && /* @__PURE__ */ (0, import_jsx_dev_runtime88.jsxDEV)("span", { className: "ml-1 text-red-500", children: "*" }, void 0, !1, {
            fileName: "app/components/ui/input/InputCheckbox.tsx",
            lineNumber: 54,
            columnNumber: 28
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/ui/input/InputCheckbox.tsx",
          lineNumber: 52,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime88.jsxDEV)("div", { className: "", children: help && /* @__PURE__ */ (0, import_jsx_dev_runtime88.jsxDEV)(HintTooltip, { text: help }, void 0, !1, {
          fileName: "app/components/ui/input/InputCheckbox.tsx",
          lineNumber: 56,
          columnNumber: 40
        }, this) }, void 0, !1, {
          fileName: "app/components/ui/input/InputCheckbox.tsx",
          lineNumber: 56,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/ui/input/InputCheckbox.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, this),
      hint
    ] }, void 0, !0, {
      fileName: "app/components/ui/input/InputCheckbox.tsx",
      lineNumber: 50,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime88.jsxDEV)("div", { className: (0, import_clsx38.default)("relative flex w-full rounded-md"), children: [
      icon && /* @__PURE__ */ (0, import_jsx_dev_runtime88.jsxDEV)("div", { className: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime88.jsxDEV)(EntityIcon, { className: "h-5 w-5 text-gray-400", icon }, void 0, !1, {
        fileName: "app/components/ui/input/InputCheckbox.tsx",
        lineNumber: 64,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/ui/input/InputCheckbox.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime88.jsxDEV)("input", { type: "hidden", readOnly: !0, name, value: actualValue === !0 ? "true" : "false" }, void 0, !1, {
        fileName: "app/components/ui/input/InputCheckbox.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      asToggle ? /* @__PURE__ */ (0, import_jsx_dev_runtime88.jsxDEV)(
        import_react89.Switch,
        {
          checked: actualValue,
          onChange: setActualValue,
          disabled: disabled || readOnly,
          autoFocus,
          className: (0, import_clsx38.default)(
            actualValue ? "bg-teal-600" : "bg-gray-200",
            "relative inline-flex h-5 w-8 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2",
            icon && "pl-10",
            disabled && "cursor-not-allowed"
          ),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime88.jsxDEV)(
            "span",
            {
              "aria-hidden": "true",
              className: (0, import_clsx38.default)(
                actualValue ? "translate-x-3" : "translate-x-0",
                "pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
              )
            },
            void 0,
            !1,
            {
              fileName: "app/components/ui/input/InputCheckbox.tsx",
              lineNumber: 81,
              columnNumber: 13
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/components/ui/input/InputCheckbox.tsx",
          lineNumber: 69,
          columnNumber: 11
        },
        this
      ) : /* @__PURE__ */ (0, import_jsx_dev_runtime88.jsxDEV)(
        "input",
        {
          type: "checkbox",
          id: name,
          name,
          readOnly,
          onChange: (e) => setActualValue(e.target.checked),
          disabled: disabled || readOnly,
          autoFocus,
          checked: actualValue,
          className: (0, import_clsx38.default)(
            (disabled || readOnly) && "cursor-not-allowed bg-gray-100",
            "mt-1 h-6 w-6 cursor-pointer rounded border-gray-300 text-accent-800 focus:ring-accent-500",
            className,
            icon && "pl-10"
          )
        },
        void 0,
        !1,
        {
          fileName: "app/components/ui/input/InputCheckbox.tsx",
          lineNumber: 90,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/ui/input/InputCheckbox.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ui/input/InputCheckbox.tsx",
    lineNumber: 48,
    columnNumber: 5
  }, this);
}, InputCheckbox_default = (0, import_react90.forwardRef)(InputCheckbox);

// app/components/ui/input/InputFilters.tsx
var import_react93 = require("@headlessui/react"), import_clsx41 = __toESM(require("clsx")), import_react94 = require("react"), import_react95 = require("@remix-run/react");

// app/utils/shared/KeypressUtils.ts
var import_react91 = require("react");
function useOuterClick(callback) {
  let callbackRef = (0, import_react91.useRef)(), innerRef = (0, import_react91.useRef)();
  return (0, import_react91.useEffect)(() => {
    callbackRef.current = callback;
  }), (0, import_react91.useEffect)(() => {
    return document.addEventListener("click", handleClick), () => document.removeEventListener("click", handleClick);
    function handleClick(e) {
      innerRef.current && callbackRef.current && !innerRef.current.contains(e.target) && callbackRef.current(e);
    }
  }, []), innerRef;
}

// app/utils/shared/ObjectUtils.ts
function updateItemByIdx(items, setItems, index, itemAttributes) {
  index !== -1 && setItems([...items.slice(0, index), Object.assign({}, items[index], itemAttributes), ...items.slice(index + 1)]);
}

// app/components/ui/icons/FilterEmptyIcon.tsx
var import_jsx_dev_runtime89 = require("react/jsx-dev-runtime");
function FilterEmptyIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime89.jsxDEV)("svg", { className, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ (0, import_jsx_dev_runtime89.jsxDEV)(
    "path",
    {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/icons/FilterEmptyIcon.tsx",
      lineNumber: 4,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/ui/icons/FilterEmptyIcon.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/components/ui/icons/FilterFilledIcon.tsx
var import_jsx_dev_runtime90 = require("react/jsx-dev-runtime");
function FilterFilledIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime90.jsxDEV)("svg", { className, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime90.jsxDEV)(
    "path",
    {
      fillRule: "evenodd",
      d: "M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z",
      clipRule: "evenodd"
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/icons/FilterFilledIcon.tsx",
      lineNumber: 4,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/ui/icons/FilterFilledIcon.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/components/ui/input/InputCheckboxInline.tsx
var import_clsx39 = __toESM(require("clsx")), import_react92 = require("react");
var import_jsx_dev_runtime91 = require("react/jsx-dev-runtime"), InputCheckboxInline = ({ name, title, value, setValue, description, className, help, required, disabled = !1, readOnly, autoFocus }, ref) => {
  (0, import_react92.useImperativeHandle)(ref, () => ({ input }));
  let input = (0, import_react92.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime91.jsxDEV)("div", { className: (0, import_clsx39.default)(className, "text-gray-800"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime91.jsxDEV)("div", { className: "relative flex cursor-pointer select-none items-start sm:col-span-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime91.jsxDEV)("div", { className: "flex h-5 cursor-pointer items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime91.jsxDEV)(
      "input",
      {
        type: "checkbox",
        id: name,
        name,
        checked: value,
        onChange: (e) => {
          setValue == null || setValue(e.target.checked);
        },
        disabled,
        readOnly,
        autoFocus,
        className: (0, import_clsx39.default)(
          (disabled || readOnly) && "cursor-not-allowed bg-gray-100",
          "h-4 w-4 cursor-pointer rounded border-gray-300 text-theme-600 focus:ring-theme-500"
        )
      },
      void 0,
      !1,
      {
        fileName: "app/components/ui/input/InputCheckboxInline.tsx",
        lineNumber: 32,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/ui/input/InputCheckboxInline.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime91.jsxDEV)("div", { className: "ml-3 text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime91.jsxDEV)("label", { htmlFor: name, className: "cursor-pointer font-medium text-gray-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime91.jsxDEV)("div", { className: " flex items-center space-x-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime91.jsxDEV)("div", { children: [
        title,
        description,
        required && /* @__PURE__ */ (0, import_jsx_dev_runtime91.jsxDEV)("span", { className: "ml-1 text-red-500", children: "*" }, void 0, !1, {
          fileName: "app/components/ui/input/InputCheckboxInline.tsx",
          lineNumber: 55,
          columnNumber: 30
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/ui/input/InputCheckboxInline.tsx",
        lineNumber: 52,
        columnNumber: 15
      }, this),
      help && /* @__PURE__ */ (0, import_jsx_dev_runtime91.jsxDEV)(HintTooltip, { text: help }, void 0, !1, {
        fileName: "app/components/ui/input/InputCheckboxInline.tsx",
        lineNumber: 58,
        columnNumber: 24
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ui/input/InputCheckboxInline.tsx",
      lineNumber: 51,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/ui/input/InputCheckboxInline.tsx",
      lineNumber: 50,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/ui/input/InputCheckboxInline.tsx",
      lineNumber: 49,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ui/input/InputCheckboxInline.tsx",
    lineNumber: 30,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/ui/input/InputCheckboxInline.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}, InputCheckboxInline_default = (0, import_react92.forwardRef)(InputCheckboxInline);

// app/components/ui/input/InputSearch.tsx
var import_clsx40 = __toESM(require("clsx"));
var import_jsx_dev_runtime92 = require("react/jsx-dev-runtime");
function InputSearch({ value, setValue, onNew, onNewRoute, placeholder, className, disabled }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime92.jsxDEV)("div", { className: (0, import_clsx40.default)("flex justify-between space-x-2", className), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime92.jsxDEV)("div", { className: "relative flex w-full flex-auto items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime92.jsxDEV)("div", { className: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 focus-within:z-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime92.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime92.jsxDEV)(
        "path",
        {
          fillRule: "evenodd",
          d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
          clipRule: "evenodd"
        },
        void 0,
        !1,
        {
          fileName: "app/components/ui/input/InputSearch.tsx",
          lineNumber: 20,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/ui/input/InputSearch.tsx",
        lineNumber: 19,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/ui/input/InputSearch.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime92.jsxDEV)(
        "input",
        {
          type: "text",
          name: "search",
          id: "search",
          className: "block w-full rounded-md border-gray-300 pl-10 focus:border-theme-500 focus:ring-theme-500 sm:text-sm",
          placeholder: placeholder ?? "Search...",
          value,
          onChange: (e) => setValue(e.target.value),
          autoComplete: "off",
          disabled
        },
        void 0,
        !1,
        {
          fileName: "app/components/ui/input/InputSearch.tsx",
          lineNumber: 27,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/ui/input/InputSearch.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    onNew && /* @__PURE__ */ (0, import_jsx_dev_runtime92.jsxDEV)(ButtonPrimary, { onClick: onNew, children: "New" }, void 0, !1, {
      fileName: "app/components/ui/input/InputSearch.tsx",
      lineNumber: 39,
      columnNumber: 17
    }, this),
    onNewRoute && /* @__PURE__ */ (0, import_jsx_dev_runtime92.jsxDEV)(ButtonPrimary, { to: onNewRoute, children: "New" }, void 0, !1, {
      fileName: "app/components/ui/input/InputSearch.tsx",
      lineNumber: 40,
      columnNumber: 22
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ui/input/InputSearch.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

// app/components/ui/input/InputFilters.tsx
var import_jsx_dev_runtime93 = require("react/jsx-dev-runtime");
function InputFilters({ filters, withSearch = !0 }) {
  let [searchParams, setSearchParams] = (0, import_react95.useSearchParams)(), [opened, setOpened] = (0, import_react94.useState)(!1), [items, setItems] = (0, import_react94.useState)([]), [filteredItems, setFilteredItems] = (0, import_react94.useState)(0), [searchInput, setSearchInput] = (0, import_react94.useState)("");
  (0, import_react94.useEffect)(() => {
    let items2 = filters.map((item) => {
      let value = searchParams.get(item.name) ?? void 0;
      return {
        ...item,
        selected: value !== void 0,
        value
      };
    });
    setItems(items2), setSearchInput(searchParams.get("q") ?? "");
  }, [filters]), (0, import_react94.useEffect)(() => {
    let appliedFilters = [];
    items.forEach((item) => {
      (searchParams.get(item.name) ?? void 0) && appliedFilters.push(item);
    }), setFilteredItems(withSearch ? appliedFilters.length + (searchParams.get("q") ? 1 : 0) : appliedFilters.length);
  }, [items, searchInput, searchParams, withSearch]);
  function onClear() {
    setOpened(!1), items.forEach((item) => {
      searchParams.delete(item.name), item.selected = !1, item.value = void 0;
    }), setItems(items), searchParams.delete("page"), searchParams.delete("q"), setSearchInput(""), setSearchParams(searchParams);
  }
  function onSubmit(e) {
    e.preventDefault(), items.forEach((item) => {
      var _a;
      item.selected && item.value ? searchParams.set(item.name, ((_a = item.value) == null ? void 0 : _a.toString()) ?? "") : searchParams.delete(item.name);
    }), searchInput ? searchParams.set("q", searchInput) : searchParams.delete("q"), searchParams.delete("page"), setSearchParams(searchParams), setOpened(!1);
  }
  let clickOutside = useOuterClick(() => setOpened(!1));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(import_react94.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { ref: clickOutside, className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(
      "button",
      {
        onClick: () => setOpened(!opened),
        className: "relative z-0 inline-flex rounded-md text-sm shadow-sm hover:bg-gray-50 focus:z-10 focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(
            "span",
            {
              className: (0, import_clsx41.default)(
                "relative inline-flex items-center space-x-2 border border-gray-300 bg-white px-3 py-3 text-sm font-medium text-gray-600 sm:py-2",
                filteredItems === 0 ? "rounded-md" : "rounded-l-md"
              ),
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { children: [
                  filteredItems === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(FilterEmptyIcon, { className: "h-3 w-3" }, void 0, !1, {
                    fileName: "app/components/ui/input/InputFilters.tsx",
                    lineNumber: 146,
                    columnNumber: 39
                  }, this),
                  filteredItems > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(FilterFilledIcon, { className: "h-3 w-3" }, void 0, !1, {
                    fileName: "app/components/ui/input/InputFilters.tsx",
                    lineNumber: 147,
                    columnNumber: 37
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/ui/input/InputFilters.tsx",
                  lineNumber: 145,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { className: "hidden sm:block", children: "Filters" }, void 0, !1, {
                  fileName: "app/components/ui/input/InputFilters.tsx",
                  lineNumber: 149,
                  columnNumber: 13
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/ui/input/InputFilters.tsx",
              lineNumber: 139,
              columnNumber: 11
            },
            this
          ),
          filteredItems > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(
            "span",
            {
              className: (0, import_clsx41.default)(
                "relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 px-3 py-2 font-medium sm:text-sm",
                filteredItems > 0 ? "bg-theme-50 text-theme-500" : "bg-white text-gray-700"
              ),
              children: filteredItems
            },
            void 0,
            !1,
            {
              fileName: "app/components/ui/input/InputFilters.tsx",
              lineNumber: 152,
              columnNumber: 13
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/ui/input/InputFilters.tsx",
        lineNumber: 135,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(
      import_react93.Transition,
      {
        as: import_react94.Fragment,
        show: opened,
        enter: "transition ease-out duration-100",
        enterFrom: "transform opacity-0 scale-95",
        enterTo: "transform opacity-100 scale-100",
        leave: "transition ease-in duration-75",
        leaveFrom: "transform opacity-100 scale-100",
        leaveTo: "transform opacity-0 scale-95",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(
          import_react95.Form,
          {
            onSubmit,
            method: "get",
            className: "absolute right-0 z-40 mt-2 w-64 origin-top-right divide-y divide-gray-200 overflow-visible rounded-md bg-gray-50 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { className: "flex items-center justify-between px-2 py-2 text-sm", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(
                  "button",
                  {
                    type: "button",
                    onClick: onClear,
                    className: "rounded-md border border-gray-300 bg-white px-2 py-0.5 hover:bg-gray-50 focus:z-10 focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500",
                    children: "Clear"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/ui/input/InputFilters.tsx",
                    lineNumber: 179,
                    columnNumber: 15
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { className: "font-bold", children: "Filters" }, void 0, !1, {
                  fileName: "app/components/ui/input/InputFilters.tsx",
                  lineNumber: 186,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(
                  "button",
                  {
                    type: "submit",
                    className: "rounded-md border border-gray-300 bg-accent-800 px-2 py-0.5 text-white hover:bg-accent-900 focus:z-10 focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500",
                    children: "Apply"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/ui/input/InputFilters.tsx",
                    lineNumber: 187,
                    columnNumber: 15
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/components/ui/input/InputFilters.tsx",
                lineNumber: 178,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { className: "divide-y divide-gray-200 rounded-b-md bg-white text-sm", children: [
                withSearch && /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { className: "p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(InputSearch, { value: searchInput, setValue: setSearchInput, placeholder: "Search all..." }, void 0, !1, {
                  fileName: "app/components/ui/input/InputFilters.tsx",
                  lineNumber: 197,
                  columnNumber: 19
                }, this) }, void 0, !1, {
                  fileName: "app/components/ui/input/InputFilters.tsx",
                  lineNumber: 196,
                  columnNumber: 17
                }, this),
                items.map((filter, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { className: "divide-y divide-gray-200", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { className: "divide-y divide-gray-300 px-2 py-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(
                    InputCheckboxInline_default,
                    {
                      name: "filter-" + filter.name,
                      title: filter.title,
                      value: filter.selected,
                      setValue: (e) => {
                        updateItemByIdx(items, setItems, idx, {
                          selected: Boolean(e)
                        });
                      }
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/ui/input/InputFilters.tsx",
                      lineNumber: 204,
                      columnNumber: 23
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "app/components/ui/input/InputFilters.tsx",
                    lineNumber: 203,
                    columnNumber: 21
                  }, this),
                  filter.selected && /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { className: "bg-gray-50 px-2 py-1", children: filter.options && filter.options.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { className: "flex items-center space-x-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(
                    InputSelector_default,
                    {
                      withSearch: !filter.hideSearch,
                      name: filter.name,
                      title: "",
                      withColors: !0,
                      options: filter.options.map((item) => ({
                        value: item.value,
                        name: item.name ? item.name : item.value,
                        color: item.color
                      })),
                      value: filter.value,
                      withLabel: !1,
                      setValue: (e) => {
                        updateItemByIdx(items, setItems, idx, {
                          value: e
                        });
                      },
                      className: "w-full pb-1"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/ui/input/InputFilters.tsx",
                      lineNumber: 219,
                      columnNumber: 29
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "app/components/ui/input/InputFilters.tsx",
                    lineNumber: 218,
                    columnNumber: 27
                  }, this) : filter.isBoolean ? /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { className: "flex items-center space-x-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(
                    InputSelector_default,
                    {
                      withSearch: !filter.hideSearch,
                      name: filter.name,
                      title: "",
                      options: [
                        { name: "Yes", value: "true" },
                        { name: "No", value: "false" }
                      ],
                      value: filter.value,
                      withLabel: !1,
                      setValue: (e) => {
                        updateItemByIdx(items, setItems, idx, {
                          value: e
                        });
                      },
                      className: "w-full pb-1"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/ui/input/InputFilters.tsx",
                      lineNumber: 243,
                      columnNumber: 29
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "app/components/ui/input/InputFilters.tsx",
                    lineNumber: 242,
                    columnNumber: 27
                  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { className: "flex-shrink-0 truncate text-gray-500", children: "contains" }, void 0, !1, {
                      fileName: "app/components/ui/input/InputFilters.tsx",
                      lineNumber: 263,
                      columnNumber: 29
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(
                      "input",
                      {
                        type: "text",
                        name: filter.name,
                        autoComplete: "off",
                        className: "block w-full min-w-0 flex-1 rounded-md border-gray-300 p-1 text-sm focus:border-accent-500 focus:ring-accent-500",
                        required: !0,
                        value: filter.value ?? "",
                        onChange: (e) => {
                          updateItemByIdx(items, setItems, idx, {
                            value: e.currentTarget.value
                          });
                        }
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/components/ui/input/InputFilters.tsx",
                        lineNumber: 264,
                        columnNumber: 29
                      },
                      this
                    )
                  ] }, void 0, !0, {
                    fileName: "app/components/ui/input/InputFilters.tsx",
                    lineNumber: 262,
                    columnNumber: 27
                  }, this) }, void 0, !1, {
                    fileName: "app/components/ui/input/InputFilters.tsx",
                    lineNumber: 216,
                    columnNumber: 23
                  }, this)
                ] }, filter.name, !0, {
                  fileName: "app/components/ui/input/InputFilters.tsx",
                  lineNumber: 202,
                  columnNumber: 19
                }, this))
              ] }, void 0, !0, {
                fileName: "app/components/ui/input/InputFilters.tsx",
                lineNumber: 194,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/ui/input/InputFilters.tsx",
            lineNumber: 173,
            columnNumber: 11
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/components/ui/input/InputFilters.tsx",
        lineNumber: 163,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/ui/input/InputFilters.tsx",
    lineNumber: 134,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/ui/input/InputFilters.tsx",
    lineNumber: 133,
    columnNumber: 5
  }, this);
}

// app/helpers/RowPaginationHelper.ts
function getPaginationFromCurrentUrl(urlSearchParams) {
  return {
    page: getPageFromCurrentUrl(urlSearchParams),
    pageSize: getPageSizeFromCurrentUrl(urlSearchParams),
    sortedBy: [],
    query: getSearchQueryFromCurrentUrl(urlSearchParams)
  };
}
function getFiltersFromCurrentUrl(request, properties) {
  let url = new URL(request.url);
  return properties.forEach((property) => {
    let params = url.searchParams.get(property.name);
    property.value = params ?? null, property.isNumber && property.value && isNaN(Number(property.value)) && (property.value = null);
  }), { query: url.searchParams.get("q") ?? void 0, properties };
}
function getPageFromCurrentUrl(urlSearchParams) {
  let page = 1, paramsPage = urlSearchParams.get("page");
  return paramsPage && (page = Number(paramsPage)), page <= 0 && (page = 1), page;
}
function getPageSizeFromCurrentUrl(urlSearchParams) {
  let pageSize = Constants_default.DEFAULT_PAGE_SIZE, paramsPageSize = urlSearchParams.get("pageSize");
  return paramsPageSize && (pageSize = Number(paramsPageSize)), pageSize > Constants_default.MAX_PAGE_SIZE && (pageSize = Constants_default.MAX_PAGE_SIZE), pageSize;
}
function getSearchQueryFromCurrentUrl(urlSearchParams) {
  var _a;
  return ((_a = urlSearchParams.get("q")) == null ? void 0 : _a.toString()) ?? "";
}

// app/routes/admin/knowledge-base/bases.$slug/articles.$lang.tsx
var import_jsx_dev_runtime94 = require("react/jsx-dev-runtime"), loader14 = async ({ request, params }) => {
  var _a, _b, _c;
  let knowledgeBase = await KnowledgeBaseService_default.get({
    slug: params.slug
  });
  if (!knowledgeBase)
    return (0, import_node18.redirect)("/admin/knowledge-base/bases");
  let urlSearchParams = new URL(request.url).searchParams, currentPagination = getPaginationFromCurrentUrl(urlSearchParams), filterableProperties = [
    {
      name: "title",
      title: "Title"
    },
    {
      name: "description",
      title: "Description"
    },
    {
      name: "categoryId",
      title: "Category",
      options: [
        { value: "null", name: "{null}" },
        ...(await getAllKnowledgeBaseCategories({ knowledgeBaseSlug: knowledgeBase.slug, language: params.lang })).map((item) => ({
          value: item.id,
          name: item.title
        }))
      ]
    }
  ], filters = getFiltersFromCurrentUrl(request, filterableProperties), filtered = {
    title: ((_a = filters.properties.find((f) => f.name === "title")) == null ? void 0 : _a.value) ?? filters.query ?? void 0,
    description: ((_b = filters.properties.find((f) => f.name === "description")) == null ? void 0 : _b.value) ?? filters.query ?? void 0,
    categoryId: ((_c = filters.properties.find((f) => f.name === "categoryId")) == null ? void 0 : _c.value) ?? void 0
  }, { items, pagination } = await getAllKnowledgeBaseArticlesWithPagination({
    knowledgeBaseSlug: params.slug,
    language: params.lang,
    pagination: currentPagination,
    filters: {
      title: filtered.title,
      description: filtered.description,
      categoryId: filtered.categoryId === "null" ? null : filtered.categoryId
    }
  });
  return (0, import_node18.json)({
    knowledgeBase,
    items,
    pagination,
    filterableProperties
  });
}, action12 = async ({ request, params }) => {
  var _a, _b, _c, _d;
  let form = await request.formData(), action18 = ((_a = form.get("action")) == null ? void 0 : _a.toString()) ?? "";
  await KnowledgeBasePermissionsService_default.hasPermission({ action: action18 });
  let kb = await KnowledgeBaseService_default.get({ slug: params.slug });
  if (action18 === "new") {
    let allArticles = await getAllKnowledgeBaseArticles({
      knowledgeBaseSlug: kb.slug,
      language: params.lang
    }), { slug, maxOrder, number } = KnowledgeBaseUtils_default.getAvailableArticleSlug({
      allArticles,
      initialSlug: "untitled"
    }), created = await createKnowledgeBaseArticle({
      knowledgeBaseId: kb.id,
      categoryId: null,
      sectionId: null,
      slug,
      title: `Untitled ${number}`,
      description: "",
      order: maxOrder + 1,
      contentDraft: "",
      contentPublished: "",
      contentType: "wysiwyg",
      language: params.lang,
      featuredOrder: null,
      author: "",
      seoImage: "",
      publishedAt: null
    });
    return (0, import_node18.redirect)(`/admin/knowledge-base/bases/${kb.slug}/articles/${params.lang}/${created.id}/edit`);
  } else if (action18 === "set-orders") {
    let items = form.getAll("orders[]").map((f) => JSON.parse(f.toString()));
    return await Promise.all(
      items.map(async ({ id, order }) => {
        await updateKnowledgeBaseCategory(id, {
          order: Number(order)
        });
      })
    ), (0, import_node18.json)({ updated: !0 });
  } else if (action18 === "set-section-orders") {
    let items = form.getAll("orders[]").map((f) => JSON.parse(f.toString()));
    return await Promise.all(
      items.map(async ({ id, order }) => {
        await updateKnowledgeBaseCategorySection(id, {
          order: Number(order)
        });
      })
    ), (0, import_node18.json)({ updated: !0 });
  } else if (action18 === "duplicate")
    try {
      let id = ((_b = form.get("id")) == null ? void 0 : _b.toString()) ?? "", item = await KnowledgeBaseService_default.duplicateArticle({ kb, language: params.lang, articleId: id });
      return (0, import_node18.redirect)(`/admin/knowledge-base/bases/${kb.slug}/articles/${params.lang}/${item.id}`);
    } catch (e) {
      return (0, import_node18.json)({ error: e.message }, { status: 400 });
    }
  else if (action18 === "toggle") {
    let id = ((_c = form.get("id")) == null ? void 0 : _c.toString()) ?? "", isFeatured = ((_d = form.get("isFeatured")) == null ? void 0 : _d.toString()) === "true", item = await getKbArticleById(id);
    if (!item)
      return (0, import_node18.json)({ error: "Not found" }, { status: 404 });
    let featuredOrder = item.featuredOrder;
    if (isFeatured) {
      if (!item.featuredOrder) {
        let featuredArticles = await KnowledgeBaseService_default.getFeaturedArticles({
          kb,
          params: {}
        }), maxOrder = 0;
        featuredArticles.length > 0 && (maxOrder = Math.max(...featuredArticles.map((p) => p.featuredOrder ?? 0))), featuredOrder = maxOrder + 1;
      }
    } else
      featuredOrder = null;
    return await updateKnowledgeBaseArticle(item.id, {
      featuredOrder
    }), (0, import_node18.json)({ success: "Updated" });
  }
  return (0, import_node18.json)({ error: "Invalid action" }, { status: 400 });
};
function articles_lang_default() {
  let data = (0, import_remix_typedjson13.useTypedLoaderData)(), actionData = (0, import_remix_typedjson13.useTypedActionData)(), params = (0, import_react96.useParams)(), outlet = (0, import_react96.useOutlet)(), navigate = (0, import_react96.useNavigate)(), submit = (0, import_react96.useSubmit)();
  function onDuplicate(item) {
    let form = new FormData();
    form.set("action", "duplicate"), form.set("id", item.id), submit(form, {
      method: "post"
    });
  }
  function onToggle(item, isFeatured) {
    let form = new FormData();
    form.set("action", "toggle"), form.set("isFeatured", isFeatured ? "true" : "false"), form.set("id", item.id.toString()), submit(form, {
      method: "post"
    });
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)(
    EditPageLayout,
    {
      title: `Articles (${KnowledgeBaseUtils_default.getLanguageName(params.lang)})`,
      withHome: !1,
      menu: [
        { title: "Knowledge Bases", routePath: "/admin/knowledge-base/bases" },
        { title: "Articles", routePath: `/admin/knowledge-base/bases/${params.slug}/articles` },
        { title: params.lang, routePath: `/admin/knowledge-base/bases/${params.slug}/articles/${params.lang}` }
      ],
      buttons: /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)(import_jsx_dev_runtime94.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)(InputFilters, { filters: data.filterableProperties }, void 0, !1, {
          fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.tsx",
          lineNumber: 236,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)(
          ButtonPrimary,
          {
            onClick: () => {
              let form = new FormData();
              form.set("action", "new"), submit(form, {
                method: "post"
              });
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)("div", { children: "New" }, void 0, !1, {
                fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.tsx",
                lineNumber: 246,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)(PlusIcon, { className: "h-5 w-5" }, void 0, !1, {
                fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.tsx",
                lineNumber: 247,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.tsx",
            lineNumber: 237,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.tsx",
        lineNumber: 235,
        columnNumber: 9
      }, this),
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)("div", { className: "space-y-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)(
          TableSimple,
          {
            items: data.items,
            pagination: data.pagination,
            actions: [
              {
                title: "Settings",
                onClickRoute: (_, item) => `${item.id}/settings`
              },
              {
                title: "Duplicate",
                onClick: (_, item) => onDuplicate(item)
              },
              {
                title: "Edit",
                onClickRoute: (_, item) => `${item.id}`
              }
            ],
            headers: [
              {
                name: "status",
                title: "Status",
                value: (i) => /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)("div", { children: i.publishedAt ? /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)(SimpleBadge, { title: "Published", color: 12 /* TEAL */ }, void 0, !1, {
                  fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.tsx",
                  lineNumber: 275,
                  columnNumber: 92
                }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)(SimpleBadge, { title: "Draft", color: 2 /* GRAY */ }, void 0, !1, {
                  fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.tsx",
                  lineNumber: 275,
                  columnNumber: 40
                }, this) }, void 0, !1, {
                  fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.tsx",
                  lineNumber: 275,
                  columnNumber: 17
                }, this)
              },
              {
                name: "title",
                title: "Title",
                className: "w-full",
                value: (i) => /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)("div", { className: "space-y-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)("div", { className: "font-medium", children: i.title }, void 0, !1, {
                  fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.tsx",
                  lineNumber: 289,
                  columnNumber: 19
                }, this) }, void 0, !1, {
                  fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.tsx",
                  lineNumber: 288,
                  columnNumber: 17
                }, this)
              },
              {
                name: "category",
                title: "Category",
                value: (i) => /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)("div", { children: i.category ? /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)("div", { children: [
                  i.category.title,
                  i.section ? ` / ${i.section.title}` : ""
                ] }, void 0, !0, {
                  fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.tsx",
                  lineNumber: 302,
                  columnNumber: 21
                }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)(import_react96.Link, { to: `${i.id}/settings`, className: "text-gray-500 text-xs italic hover:underline", children: "No category" }, void 0, !1, {
                  fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.tsx",
                  lineNumber: 307,
                  columnNumber: 21
                }, this) }, void 0, !1, {
                  fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.tsx",
                  lineNumber: 300,
                  columnNumber: 17
                }, this)
              },
              {
                name: "views",
                title: "Views",
                value: (i) => i._count.views
              },
              {
                name: "upvotes",
                title: "Upvotes",
                value: (i) => i._count.upvotes
              },
              {
                name: "downvotes",
                title: "Downvotes",
                value: (i) => i._count.downvotes
              },
              {
                name: "featured",
                title: "Featured",
                value: (i) => /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)(InputCheckbox_default, { asToggle: !0, value: !!i.featuredOrder, setValue: (checked) => onToggle(i, Boolean(checked)) }, void 0, !1, {
                  fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.tsx",
                  lineNumber: 333,
                  columnNumber: 24
                }, this)
              }
            ]
          },
          void 0,
          !1,
          {
            fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.tsx",
            lineNumber: 253,
            columnNumber: 9
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.tsx",
          lineNumber: 252,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)(ActionResultModal, { actionData, showSuccess: !1 }, void 0, !1, {
          fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.tsx",
          lineNumber: 340,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)(
          SlideOverWideEmpty,
          {
            title: "Article settings",
            open: !!outlet,
            onClose: () => {
              navigate(".", { replace: !0 });
            },
            className: "sm:max-w-sm",
            overflowYScroll: !0,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)("div", { className: "-mx-1 -mt-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)("div", { className: "space-y-4", children: outlet }, void 0, !1, {
              fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.tsx",
              lineNumber: 352,
              columnNumber: 11
            }, this) }, void 0, !1, {
              fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.tsx",
              lineNumber: 351,
              columnNumber: 9
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.tsx",
            lineNumber: 342,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.$lang.tsx",
      lineNumber: 226,
      columnNumber: 5
    },
    this
  );
}

// app/routes/admin/knowledge-base/bases.$slug/categories.tsx
var categories_exports = {};
__export(categories_exports, {
  default: () => categories_default,
  loader: () => loader15
});
var import_node19 = require("@remix-run/node"), import_react97 = require("@remix-run/react"), import_remix_typedjson14 = require("remix-typedjson");
var import_jsx_dev_runtime95 = require("react/jsx-dev-runtime"), loader15 = async ({ params }) => {
  let knowledgeBase = await KnowledgeBaseService_default.get({
    slug: params.slug
  });
  if (!knowledgeBase)
    return (0, import_node19.redirect)("/admin/knowledge-base/bases");
  let items = await getAllKnowledgeBaseCategories({
    knowledgeBaseSlug: params.slug,
    language: void 0
  });
  return (0, import_node19.json)({
    knowledgeBase,
    items
  });
};
function categories_default() {
  let data = (0, import_remix_typedjson14.useTypedLoaderData)(), params = (0, import_react97.useParams)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime95.jsxDEV)(
    EditPageLayout,
    {
      title: "Categories",
      withHome: !1,
      menu: [
        { title: "Knowledge Bases", routePath: "/admin/knowledge-base/bases" },
        { title: "Categories", routePath: `/admin/knowledge-base/bases/${params.slug}/categories` }
      ],
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime95.jsxDEV)("div", { className: "space-y-2", children: data.knowledgeBase.languages.map((f) => /* @__PURE__ */ (0, import_jsx_dev_runtime95.jsxDEV)("div", { className: "space-y-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime95.jsxDEV)(
        import_react97.Link,
        {
          to: f,
          className: "relative block rounded-lg border-2 border-dashed border-gray-300 px-12 py-6 text-center hover:border-gray-400 focus:outline-none focus:border-solid space-y-2",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime95.jsxDEV)("div", { className: "font-bold", children: KnowledgeBaseUtils_default.getLanguageName(f) }, void 0, !1, {
              fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.tsx",
              lineNumber: 52,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime95.jsxDEV)("div", { className: "text-sm", children: [
              data.items.filter((x) => x.language === f).length,
              " categories"
            ] }, void 0, !0, {
              fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.tsx",
              lineNumber: 53,
              columnNumber: 17
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.tsx",
          lineNumber: 48,
          columnNumber: 15
        },
        this
      ) }, f, !1, {
        fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.tsx",
        lineNumber: 47,
        columnNumber: 13
      }, this)) }, void 0, !1, {
        fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.tsx",
        lineNumber: 44,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/admin/knowledge-base/bases.$slug/categories.tsx",
      lineNumber: 36,
      columnNumber: 5
    },
    this
  );
}

// app/routes/admin/knowledge-base/bases.$slug/articles.tsx
var articles_exports = {};
__export(articles_exports, {
  default: () => articles_default,
  loader: () => loader16
});
var import_node20 = require("@remix-run/node"), import_react98 = require("@remix-run/react"), import_remix_typedjson15 = require("remix-typedjson");
var import_jsx_dev_runtime96 = require("react/jsx-dev-runtime"), loader16 = async ({ params }) => {
  let knowledgeBase = await KnowledgeBaseService_default.get({
    slug: params.slug
  });
  if (!knowledgeBase)
    return (0, import_node20.redirect)("/admin/knowledge-base/bases");
  let items = await getAllKnowledgeBaseArticles({
    knowledgeBaseSlug: params.slug,
    language: void 0
  });
  return (0, import_node20.json)({
    knowledgeBase,
    items
  });
};
function articles_default() {
  let data = (0, import_remix_typedjson15.useTypedLoaderData)(), params = (0, import_react98.useParams)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)(
    EditPageLayout,
    {
      title: "Articles",
      withHome: !1,
      menu: [
        { title: "Knowledge Bases", routePath: "/admin/knowledge-base/bases" },
        { title: "Articles", routePath: `/admin/knowledge-base/bases/${params.slug}/articles` }
      ],
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)("div", { className: "space-y-2", children: data.knowledgeBase.languages.map((f) => /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)("div", { className: "space-y-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)(
        import_react98.Link,
        {
          to: f,
          className: "relative block rounded-lg border-2 border-dashed border-gray-300 px-12 py-6 text-center hover:border-gray-400 focus:outline-none focus:border-solid space-y-2",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)("div", { className: "font-bold", children: KnowledgeBaseUtils_default.getLanguageName(f) }, void 0, !1, {
              fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.tsx",
              lineNumber: 51,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)("div", { className: "text-sm", children: [
              data.items.filter((x) => x.language === f).length,
              " articles"
            ] }, void 0, !0, {
              fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.tsx",
              lineNumber: 52,
              columnNumber: 17
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.tsx",
          lineNumber: 47,
          columnNumber: 15
        },
        this
      ) }, f, !1, {
        fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.tsx",
        lineNumber: 46,
        columnNumber: 13
      }, this)) }, void 0, !1, {
        fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.tsx",
        lineNumber: 43,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/admin/knowledge-base/bases.$slug/articles.tsx",
      lineNumber: 35,
      columnNumber: 5
    },
    this
  );
}

// app/routes/admin/knowledge-base/bases.import.tsx
var bases_import_exports = {};
__export(bases_import_exports, {
  ErrorBoundary: () => ErrorBoundary5,
  action: () => action13,
  default: () => AdminEntityTemplatesManual,
  loader: () => loader17
});
var import_node21 = require("@remix-run/node"), import_react99 = require("@remix-run/react"), import_react100 = require("react"), import_remix_typedjson16 = require("remix-typedjson");

// app/modules/knowledgeBase/components/templates/PreviewKbsTemplate.tsx
var import_jsx_dev_runtime97 = require("react/jsx-dev-runtime");
function PreviewKbsTemplate({ template }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)("div", { className: "space-y-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)("h3", { className: "font-medium", children: "Knowledge Bases" }, void 0, !1, {
      fileName: "app/modules/knowledgeBase/components/templates/PreviewKbsTemplate.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)(
      TableSimple,
      {
        items: template.knowledgeBases,
        headers: [
          { name: "slug", title: "Slug", value: (i) => i.slug },
          {
            name: "title",
            title: "Title",
            value: (i) => /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)("div", { className: "flex-col", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)("div", { children: i.title }, void 0, !1, {
                fileName: "app/modules/knowledgeBase/components/templates/PreviewKbsTemplate.tsx",
                lineNumber: 17,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)("div", { className: "text-xs text-gray-500", children: i.description }, void 0, !1, {
                fileName: "app/modules/knowledgeBase/components/templates/PreviewKbsTemplate.tsx",
                lineNumber: 18,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/modules/knowledgeBase/components/templates/PreviewKbsTemplate.tsx",
              lineNumber: 16,
              columnNumber: 15
            }, this)
          },
          { name: "enabled", title: "Enabled", value: (i) => i.enabled }
        ]
      },
      void 0,
      !1,
      {
        fileName: "app/modules/knowledgeBase/components/templates/PreviewKbsTemplate.tsx",
        lineNumber: 8,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)("h3", { className: "font-medium", children: "Categories" }, void 0, !1, {
      fileName: "app/modules/knowledgeBase/components/templates/PreviewKbsTemplate.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)(
      TableSimple,
      {
        items: template.categories,
        headers: [
          { name: "slug", title: "Slug", value: (i) => i.slug },
          {
            name: "title",
            title: "Title",
            value: (i) => /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)("div", { className: "flex-col", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)("div", { children: i.title }, void 0, !1, {
                fileName: "app/modules/knowledgeBase/components/templates/PreviewKbsTemplate.tsx",
                lineNumber: 36,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)("div", { className: "text-xs text-gray-500", children: i.description }, void 0, !1, {
                fileName: "app/modules/knowledgeBase/components/templates/PreviewKbsTemplate.tsx",
                lineNumber: 37,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/modules/knowledgeBase/components/templates/PreviewKbsTemplate.tsx",
              lineNumber: 35,
              columnNumber: 15
            }, this)
          },
          {
            name: "sections",
            title: "Sections",
            value: (i) => i.sections.map((s) => s.title).join(", ")
          },
          { name: "knowledgeBase", title: "Knowledge Base", value: (i) => i.knowledgeBaseSlug }
        ]
      },
      void 0,
      !1,
      {
        fileName: "app/modules/knowledgeBase/components/templates/PreviewKbsTemplate.tsx",
        lineNumber: 27,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)("h3", { className: "font-medium", children: "Articles" }, void 0, !1, {
      fileName: "app/modules/knowledgeBase/components/templates/PreviewKbsTemplate.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)(
      TableSimple,
      {
        items: template.articles,
        headers: [
          { name: "slug", title: "Slug", value: (i) => i.slug },
          {
            name: "title",
            title: "Title",
            value: (i) => /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)("div", { className: "flex-col", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)("div", { children: i.title }, void 0, !1, {
                fileName: "app/modules/knowledgeBase/components/templates/PreviewKbsTemplate.tsx",
                lineNumber: 60,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)("div", { className: "text-xs text-gray-500", children: i.description }, void 0, !1, {
                fileName: "app/modules/knowledgeBase/components/templates/PreviewKbsTemplate.tsx",
                lineNumber: 61,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/modules/knowledgeBase/components/templates/PreviewKbsTemplate.tsx",
              lineNumber: 59,
              columnNumber: 15
            }, this)
          },
          { name: "knowledgeBase", title: "Knowledge Base", value: (i) => i.knowledgeBaseSlug }
        ]
      },
      void 0,
      !1,
      {
        fileName: "app/modules/knowledgeBase/components/templates/PreviewKbsTemplate.tsx",
        lineNumber: 51,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/modules/knowledgeBase/components/templates/PreviewKbsTemplate.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/modules/knowledgeBase/service/KnowledgeBaseTemplatesService.ts
async function getTemplate() {
  var _a, _b;
  let template = {
    knowledgeBases: [],
    categories: [],
    articles: []
  }, allKbs = await getAllKnowledgeBases();
  for (let kb of allKbs) {
    template.knowledgeBases.push({
      slug: kb.slug,
      title: kb.title,
      description: kb.description,
      defaultLanguage: kb.defaultLanguage,
      layout: kb.layout,
      color: kb.color,
      enabled: kb.enabled,
      languages: JSON.parse(kb.languages),
      links: JSON.parse(kb.links),
      logo: kb.logo,
      seoImage: kb.seoImage
    });
    let allCategories = await getAllKnowledgeBaseCategories({
      knowledgeBaseSlug: kb.slug,
      language: void 0
    });
    for (let category of allCategories)
      template.categories.push({
        knowledgeBaseSlug: kb.slug,
        slug: category.slug,
        order: category.order,
        title: category.title,
        description: category.description,
        icon: category.icon,
        language: category.language,
        seoImage: category.seoImage,
        sections: category.sections.map((section) => ({
          order: section.order,
          title: section.title,
          description: section.description
        }))
      });
    let allArticles = await getAllKnowledgeBaseArticles({
      knowledgeBaseSlug: kb.slug,
      language: void 0
    });
    for (let article of allArticles)
      template.articles.push({
        knowledgeBaseSlug: kb.slug,
        categorySlug: ((_a = article.category) == null ? void 0 : _a.slug) ?? null,
        categorySectionOrder: ((_b = article.section) == null ? void 0 : _b.order) ?? null,
        slug: article.slug,
        title: article.title,
        description: article.description,
        order: article.order,
        contentDraft: article.contentDraft,
        contentPublished: article.contentPublished,
        contentType: article.contentType,
        language: article.language,
        featuredOrder: article.featuredOrder,
        seoImage: article.seoImage,
        publishedAt: article.publishedAt ? article.publishedAt.toISOString() : null,
        relatedArticles: article.relatedArticles.map((relatedArticle) => ({
          slug: relatedArticle.slug
        }))
      });
  }
  return template;
}
async function importKbs(template) {
  let created = {
    kbs: 0,
    categories: 0,
    sections: 0,
    articles: 0
  }, updated = {
    kbs: 0,
    categories: 0,
    sections: 0,
    articles: 0
  };
  for (let kb of template.knowledgeBases) {
    let existing = await getKnowledgeBaseBySlug(kb.slug);
    existing ? (await updateKnowledgeBase(existing.id, {
      slug: kb.slug,
      title: kb.title,
      description: kb.description,
      defaultLanguage: kb.defaultLanguage,
      layout: kb.layout,
      color: kb.color,
      enabled: kb.enabled,
      languages: JSON.stringify(kb.languages),
      links: JSON.stringify(kb.links),
      logo: kb.logo,
      seoImage: kb.seoImage
    }), updated.kbs++) : (existing = await createKnowledgeBase({
      slug: kb.slug,
      title: kb.title,
      description: kb.description,
      defaultLanguage: kb.defaultLanguage,
      layout: kb.layout,
      color: kb.color,
      enabled: kb.enabled,
      languages: JSON.stringify(kb.languages),
      links: JSON.stringify(kb.links),
      logo: kb.logo,
      seoImage: kb.seoImage
    }), created.kbs++);
    for (let category of template.categories.filter((c) => c.knowledgeBaseSlug === kb.slug)) {
      let existingCategory = await getKbCategoryBySlug({
        knowledgeBaseId: existing.id,
        slug: category.slug,
        language: category.language
      });
      existingCategory ? (await updateKnowledgeBaseCategory(existingCategory.id, {
        title: category.title,
        order: category.order,
        description: category.description,
        icon: category.icon,
        language: category.language,
        seoImage: category.seoImage
      }), updated.categories++) : (existingCategory = await createKnowledgeBaseCategory({
        knowledgeBaseId: existing.id,
        slug: category.slug,
        title: category.title,
        order: category.order,
        description: category.description,
        icon: category.icon,
        language: category.language,
        seoImage: category.seoImage
      }), created.categories++);
      for (let section of category.sections) {
        let existingSection = null;
        existingCategory && (existingSection = existingCategory.sections.find((s) => s.order === section.order) ?? null), existingSection ? (await updateKnowledgeBaseCategorySection(existingSection.id, {
          title: section.title,
          description: section.description
        }), updated.sections++) : (await createKnowledgeBaseCategorySection({
          categoryId: (existingCategory == null ? void 0 : existingCategory.id) ?? null,
          order: section.order,
          title: section.title,
          description: section.description
        }), created.sections++);
      }
    }
    for (let article of template.articles.filter((a) => a.knowledgeBaseSlug === kb.slug)) {
      let existingArticle = await getKbArticleBySlug({
        knowledgeBaseId: existing.id,
        slug: article.slug,
        language: article.language
      }), category = null, sectionId = null;
      if (article.categorySlug && (category = await getKbCategoryBySlug({
        knowledgeBaseId: existing.id,
        slug: article.categorySlug,
        language: article.language
      }), category && article.categorySectionOrder)) {
        let section = category.sections.find((s) => s.order === article.categorySectionOrder);
        section && (sectionId = section.id);
      }
      existingArticle ? (await updateKnowledgeBaseArticle(existingArticle.id, {
        categoryId: (category == null ? void 0 : category.id) ?? null,
        sectionId,
        slug: article.slug,
        title: article.title,
        description: article.description,
        order: article.order,
        contentDraft: article.contentDraft,
        contentPublished: article.contentPublished,
        contentType: article.contentType,
        language: article.language,
        featuredOrder: article.featuredOrder,
        author: "",
        seoImage: article.seoImage,
        publishedAt: article.publishedAt ? new Date(article.publishedAt) : null
      }), updated.articles++) : (existingArticle = await createKnowledgeBaseArticle({
        knowledgeBaseId: existing.id,
        categoryId: (category == null ? void 0 : category.id) ?? null,
        sectionId,
        slug: article.slug,
        title: article.title,
        description: article.description,
        order: article.order,
        contentDraft: article.contentDraft,
        contentPublished: article.contentPublished,
        contentType: article.contentType,
        language: article.language,
        featuredOrder: article.featuredOrder,
        author: "",
        seoImage: article.seoImage,
        publishedAt: article.publishedAt ? new Date(article.publishedAt) : null
      }), created.articles++);
    }
  }
  return {
    created,
    updated
  };
}
var KnowledgeBaseTemplatesService_default = {
  getTemplate,
  importKbs
};

// app/modules/knowledgeBase/utils/DefaultKbsTemplate.ts
var SAMPLE = {
  knowledgeBases: [],
  categories: [],
  articles: []
}, DefaultKbsTemplate_default = {
  SAMPLE
};

// app/routes/admin/knowledge-base/bases.import.tsx
var import_jsx_dev_runtime98 = require("react/jsx-dev-runtime"), loader17 = async () => (0, import_node21.json)({}), success = (data) => (0, import_node21.json)(data, { status: 200 }), badRequest = (data) => (0, import_node21.json)(data, { status: 400 }), action13 = async ({ request }) => {
  var _a, _b, _c;
  let form = await request.formData(), action18 = (_a = form.get("action")) == null ? void 0 : _a.toString();
  if (await KnowledgeBasePermissionsService_default.hasPermission({ action: action18 }), action18 === "preview")
    try {
      let data = {
        previewTemplate: JSON.parse(((_b = form.get("configuration")) == null ? void 0 : _b.toString()) ?? "{}")
      };
      return success(data);
    } catch (error) {
      return badRequest({ error: error.message });
    }
  else if (action18 === "create")
    try {
      let template = JSON.parse(((_c = form.get("configuration")) == null ? void 0 : _c.toString()) ?? "{}"), status = await KnowledgeBaseTemplatesService_default.importKbs(template), messages = [];
      return messages.push(`Knowledge bases (${status.created.kbs} created, ${status.updated.kbs} updated)`), messages.push(`Articles (${status.created.articles} created, ${status.updated.articles} updated)`), messages.push(`Categories (${status.created.categories} created, ${status.updated.categories} updated)`), messages.push(`Category Sections (${status.created.sections} created, ${status.updated.sections} updated)`), success({
        success: messages
      });
    } catch (error) {
      return badRequest({ error: error.message });
    }
  else
    return badRequest({ error: "Invalid form" });
}, defaultTemplates = [{ title: "Sample", template: DefaultKbsTemplate_default.SAMPLE }];
function AdminEntityTemplatesManual() {
  let actionData = (0, import_remix_typedjson16.useTypedActionData)(), [configuration, setConfiguration] = (0, import_react100.useState)("");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime98.jsxDEV)(
    EditPageLayout,
    {
      title: "Upload a JSON configuration",
      withHome: !1,
      menu: [
        { title: "Knowledge Bases", routePath: "/admin/knowledge-base/bases" },
        { title: "Import", routePath: "/admin/knowledge-base/bases/import" }
      ],
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime98.jsxDEV)("div", { className: "md:border-t md:border-gray-200 md:py-2", children: actionData != null && actionData.error ? /* @__PURE__ */ (0, import_jsx_dev_runtime98.jsxDEV)(import_jsx_dev_runtime98.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime98.jsxDEV)("p", { id: "form-error-message", className: "py-2 text-sm text-rose-500", role: "alert", children: actionData.error }, void 0, !1, {
        fileName: "app/routes/admin/knowledge-base/bases.import.tsx",
        lineNumber: 80,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/admin/knowledge-base/bases.import.tsx",
        lineNumber: 79,
        columnNumber: 11
      }, this) : actionData != null && actionData.success ? /* @__PURE__ */ (0, import_jsx_dev_runtime98.jsxDEV)(import_jsx_dev_runtime98.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime98.jsxDEV)("div", { id: "form-success-message", className: "text-text-500 py-2 text-sm space-y-1", role: "alert", children: actionData.success.map((f) => /* @__PURE__ */ (0, import_jsx_dev_runtime98.jsxDEV)("div", { children: f }, f, !1, {
          fileName: "app/routes/admin/knowledge-base/bases.import.tsx",
          lineNumber: 88,
          columnNumber: 17
        }, this)) }, void 0, !1, {
          fileName: "app/routes/admin/knowledge-base/bases.import.tsx",
          lineNumber: 86,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime98.jsxDEV)(import_react99.Link, { to: "/admin/knowledge-base/bases", className: "text-sm font-medium text-theme-600 underline hover:text-theme-500", children: "Back to knowledge bases" }, void 0, !1, {
          fileName: "app/routes/admin/knowledge-base/bases.import.tsx",
          lineNumber: 91,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin/knowledge-base/bases.import.tsx",
        lineNumber: 85,
        columnNumber: 11
      }, this) : (actionData == null ? void 0 : actionData.previewTemplate) === void 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime98.jsxDEV)(import_jsx_dev_runtime98.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime98.jsxDEV)(import_react99.Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime98.jsxDEV)("input", { type: "hidden", name: "action", value: "preview", readOnly: !0 }, void 0, !1, {
          fileName: "app/routes/admin/knowledge-base/bases.import.tsx",
          lineNumber: 98,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime98.jsxDEV)("div", { className: "space-y-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime98.jsxDEV)("div", { className: "flex space-x-2", children: defaultTemplates.map((t) => /* @__PURE__ */ (0, import_jsx_dev_runtime98.jsxDEV)(
            "button",
            {
              type: "button",
              onClick: () => setConfiguration(JSON.stringify(t.template, null, "	")),
              className: "inline-flex items-center rounded border border-transparent bg-theme-100 px-2.5 py-1.5 text-xs font-medium text-theme-700 hover:bg-theme-200 focus:outline-none focus:ring-2 focus:ring-theme-500 focus:ring-offset-2",
              children: t.title
            },
            t.title,
            !1,
            {
              fileName: "app/routes/admin/knowledge-base/bases.import.tsx",
              lineNumber: 102,
              columnNumber: 21
            },
            this
          )) }, void 0, !1, {
            fileName: "app/routes/admin/knowledge-base/bases.import.tsx",
            lineNumber: 100,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime98.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime98.jsxDEV)(
            InputText_default,
            {
              name: "configuration",
              title: "Configuration",
              editor: "monaco",
              editorLanguage: "json",
              value: configuration,
              setValue: setConfiguration,
              editorSize: "lg"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/knowledge-base/bases.import.tsx",
              lineNumber: 113,
              columnNumber: 19
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/admin/knowledge-base/bases.import.tsx",
            lineNumber: 112,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime98.jsxDEV)("div", { className: "flex justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime98.jsxDEV)(LoadingButton_default, { type: "submit", children: "Preview" }, void 0, !1, {
            fileName: "app/routes/admin/knowledge-base/bases.import.tsx",
            lineNumber: 124,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/admin/knowledge-base/bases.import.tsx",
            lineNumber: 123,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/admin/knowledge-base/bases.import.tsx",
          lineNumber: 99,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin/knowledge-base/bases.import.tsx",
        lineNumber: 97,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/admin/knowledge-base/bases.import.tsx",
        lineNumber: 96,
        columnNumber: 11
      }, this) : (actionData == null ? void 0 : actionData.previewTemplate) !== void 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime98.jsxDEV)(import_jsx_dev_runtime98.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime98.jsxDEV)(import_react99.Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime98.jsxDEV)("input", { type: "hidden", name: "action", value: "create", readOnly: !0 }, void 0, !1, {
          fileName: "app/routes/admin/knowledge-base/bases.import.tsx",
          lineNumber: 133,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime98.jsxDEV)("input", { type: "hidden", name: "configuration", value: configuration, readOnly: !0 }, void 0, !1, {
          fileName: "app/routes/admin/knowledge-base/bases.import.tsx",
          lineNumber: 134,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime98.jsxDEV)("div", { className: "space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime98.jsxDEV)(PreviewKbsTemplate, { template: actionData.previewTemplate }, void 0, !1, {
            fileName: "app/routes/admin/knowledge-base/bases.import.tsx",
            lineNumber: 136,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime98.jsxDEV)("div", { className: "flex justify-end space-x-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime98.jsxDEV)(LoadingButton_default, { type: "submit", children: /* @__PURE__ */ (0, import_jsx_dev_runtime98.jsxDEV)("span", { children: "Import" }, void 0, !1, {
            fileName: "app/routes/admin/knowledge-base/bases.import.tsx",
            lineNumber: 139,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/routes/admin/knowledge-base/bases.import.tsx",
            lineNumber: 138,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/admin/knowledge-base/bases.import.tsx",
            lineNumber: 137,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/admin/knowledge-base/bases.import.tsx",
          lineNumber: 135,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin/knowledge-base/bases.import.tsx",
        lineNumber: 132,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/admin/knowledge-base/bases.import.tsx",
        lineNumber: 131,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/admin/knowledge-base/bases.import.tsx",
        lineNumber: 77,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/admin/knowledge-base/bases.import.tsx",
      lineNumber: 69,
      columnNumber: 5
    },
    this
  );
}
function ErrorBoundary5() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime98.jsxDEV)(ServerError2, {}, void 0, !1, {
    fileName: "app/routes/admin/knowledge-base/bases.import.tsx",
    lineNumber: 153,
    columnNumber: 10
  }, this);
}

// app/routes/admin/knowledge-base/danger.tsx
var danger_exports = {};
__export(danger_exports, {
  action: () => action14,
  default: () => AdminSettingsDanger,
  meta: () => meta5
});
var import_node22 = require("@remix-run/node"), import_react101 = require("@remix-run/react"), import_react102 = require("react");
var import_jsx_dev_runtime99 = require("react/jsx-dev-runtime"), meta5 = () => [{ title: "Danger" }], action14 = async ({ request }) => {
  var _a;
  let action18 = (_a = (await request.formData()).get("action")) == null ? void 0 : _a.toString();
  return await KnowledgeBasePermissionsService_default.hasPermission({ action: action18 }), action18 === "reset-all-data" ? (await db.knowledgeBaseCategory.deleteMany({}), await db.knowledgeBaseArticle.deleteMany({}), await db.knowledgeBase.deleteMany({}), (0, import_node22.json)({ success: "Reset successful" })) : (0, import_node22.json)({ error: "Invalid form" }, { status: 400 });
};
function AdminSettingsDanger() {
  let actionData = (0, import_react101.useActionData)(), [actionResult, setActionResult] = (0, import_react102.useState)();
  return (0, import_react102.useEffect)(() => {
    actionData != null && actionData.error ? setActionResult({ error: { description: actionData.error } }) : actionData != null && actionData.success && setActionResult({ success: { description: actionData.success } });
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)("div", { className: "flex-1 overflow-x-auto xl:overflow-y-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)("div", { className: "mx-auto max-w-5xl px-4 py-4 sm:px-6 lg:px-8 lg:py-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)("h1", { className: "text-3xl font-bold tracking-tight text-gray-900", children: "Danger" }, void 0, !1, {
        fileName: "app/routes/admin/knowledge-base/danger.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)(import_react101.Form, { method: "post", className: "divide-y-gray-200 mt-6 space-y-8 divide-y", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)("input", { name: "action", value: "reset-all-data", hidden: !0, readOnly: !0 }, void 0, !1, {
          fileName: "app/routes/admin/knowledge-base/danger.tsx",
          lineNumber: 46,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)("div", { className: "grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)("div", { className: "sm:col-span-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)("h2", { className: "text-xl font-medium text-gray-900", children: "Reset all data" }, void 0, !1, {
            fileName: "app/routes/admin/knowledge-base/danger.tsx",
            lineNumber: 49,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)("p", { className: "mt-1 text-sm text-gray-500", children: "Delete all knowledge base data" }, void 0, !1, {
            fileName: "app/routes/admin/knowledge-base/danger.tsx",
            lineNumber: 50,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/admin/knowledge-base/danger.tsx",
          lineNumber: 48,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/admin/knowledge-base/danger.tsx",
          lineNumber: 47,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)("div", { className: "flex justify-end pt-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)(ButtonPrimary, { destructive: !0, type: "submit", children: "Reset all data" }, void 0, !1, {
          fileName: "app/routes/admin/knowledge-base/danger.tsx",
          lineNumber: 55,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/admin/knowledge-base/danger.tsx",
          lineNumber: 54,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin/knowledge-base/danger.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin/knowledge-base/danger.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)(ActionResultModal, { actionResult }, void 0, !1, {
      fileName: "app/routes/admin/knowledge-base/danger.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin/knowledge-base/danger.tsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
}

// app/routes/admin/knowledge-base/bases.tsx
var bases_exports = {};
__export(bases_exports, {
  action: () => action15,
  default: () => CampaignsListRoute,
  loader: () => loader18,
  meta: () => meta6
});
var import_node23 = require("@remix-run/node");
var import_remix_typedjson17 = require("remix-typedjson"), import_react105 = require("@remix-run/react");

// app/components/ui/tabs/TabsWithIcons.tsx
var import_react103 = require("@remix-run/react"), import_clsx42 = __toESM(require("clsx")), import_react104 = require("react"), import_jsx_dev_runtime100 = require("react/jsx-dev-runtime");
function TabsWithIcons({ tabs, className, justify }) {
  var _a;
  let navigate = (0, import_react103.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime100.jsxDEV)("div", { className, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime100.jsxDEV)("div", { className: (0, import_clsx42.default)(tabs.length <= 5 && "sm:hidden"), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime100.jsxDEV)("label", { htmlFor: "tabs", className: "sr-only", children: "Select" }, void 0, !1, {
        fileName: "app/components/ui/tabs/TabsWithIcons.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime100.jsxDEV)(
        "select",
        {
          id: "tabs",
          name: "tabs",
          className: "block w-full rounded-md border-gray-300 focus:border-accent-500 focus:ring-accent-500",
          value: (_a = tabs.find((tab) => tab.current)) == null ? void 0 : _a.name,
          onChange: (e) => {
            let tab = tabs.find((tab2) => tab2.name === e.target.value);
            tab != null && tab.href ? navigate(tab.href) : tab != null && tab.onClick && tab.onClick();
          },
          children: tabs.map((tab) => /* @__PURE__ */ (0, import_jsx_dev_runtime100.jsxDEV)("option", { value: tab.name, children: tab.name }, tab.name, !1, {
            fileName: "app/components/ui/tabs/TabsWithIcons.tsx",
            lineNumber: 42,
            columnNumber: 13
          }, this))
        },
        void 0,
        !1,
        {
          fileName: "app/components/ui/tabs/TabsWithIcons.tsx",
          lineNumber: 27,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/ui/tabs/TabsWithIcons.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime100.jsxDEV)("div", { className: (0, import_clsx42.default)(tabs.length <= 5 ? "hidden sm:block" : "hidden"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime100.jsxDEV)("div", { className: "border-b border-gray-200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime100.jsxDEV)(
      "nav",
      {
        className: (0, import_clsx42.default)(
          "-mb-px flex space-x-4",
          justify === "start" && "justify-start",
          justify === "center" && "justify-center",
          justify === "end" && "justify-end",
          justify === "between" && "justify-between"
        ),
        "aria-label": "Tabs",
        children: tabs.map((tab, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime100.jsxDEV)(import_react104.Fragment, { children: [
          tab.href && /* @__PURE__ */ (0, import_jsx_dev_runtime100.jsxDEV)(
            import_react103.Link,
            {
              to: tab.href,
              className: (0, import_clsx42.default)(
                tab.current ? "border-accent-500 text-accent-600" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                "group inline-flex items-center space-x-2 border-b-2 py-2 px-1 text-sm font-medium",
                tab.className
              ),
              "aria-current": tab.current ? "page" : void 0,
              children: [
                tab.icon,
                /* @__PURE__ */ (0, import_jsx_dev_runtime100.jsxDEV)("div", { className: "truncate", children: tab.name }, void 0, !1, {
                  fileName: "app/components/ui/tabs/TabsWithIcons.tsx",
                  lineNumber: 74,
                  columnNumber: 21
                }, this)
              ]
            },
            tab.name,
            !0,
            {
              fileName: "app/components/ui/tabs/TabsWithIcons.tsx",
              lineNumber: 63,
              columnNumber: 19
            },
            this
          ),
          tab.onClick && /* @__PURE__ */ (0, import_jsx_dev_runtime100.jsxDEV)(
            "button",
            {
              type: "button",
              onClick: tab.onClick,
              className: (0, import_clsx42.default)(
                tab.current ? "border-accent-500 text-accent-600" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                "group inline-flex w-full items-center space-x-2 border-b-2 py-2 px-1 text-sm font-medium",
                tab.className
              ),
              "aria-current": tab.current ? "page" : void 0,
              children: [
                tab.icon,
                /* @__PURE__ */ (0, import_jsx_dev_runtime100.jsxDEV)("div", { className: "truncate", children: tab.name }, void 0, !1, {
                  fileName: "app/components/ui/tabs/TabsWithIcons.tsx",
                  lineNumber: 89,
                  columnNumber: 21
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/ui/tabs/TabsWithIcons.tsx",
              lineNumber: 78,
              columnNumber: 19
            },
            this
          )
        ] }, idx, !0, {
          fileName: "app/components/ui/tabs/TabsWithIcons.tsx",
          lineNumber: 61,
          columnNumber: 15
        }, this))
      },
      void 0,
      !1,
      {
        fileName: "app/components/ui/tabs/TabsWithIcons.tsx",
        lineNumber: 50,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/ui/tabs/TabsWithIcons.tsx",
      lineNumber: 49,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/ui/tabs/TabsWithIcons.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ui/tabs/TabsWithIcons.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// app/components/ui/dates/DateCell.tsx
var import_clsx43 = __toESM(require("clsx"));
var import_jsx_dev_runtime101 = require("react/jsx-dev-runtime");
function DateCell({ date, displays = ["ymd", "ago"] }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime101.jsxDEV)(import_jsx_dev_runtime101.Fragment, { children: date && /* @__PURE__ */ (0, import_jsx_dev_runtime101.jsxDEV)("div", { title: DateUtils_default.dateYMDHMS(date), className: "flex flex-col", children: [
    displays.includes("ymd") && /* @__PURE__ */ (0, import_jsx_dev_runtime101.jsxDEV)("div", { children: DateUtils_default.dateYMD(date) }, void 0, !1, {
      fileName: "app/components/ui/dates/DateCell.tsx",
      lineNumber: 9,
      columnNumber: 40
    }, this),
    displays.includes("dm") && /* @__PURE__ */ (0, import_jsx_dev_runtime101.jsxDEV)("div", { children: DateUtils_default.dateDM(date) }, void 0, !1, {
      fileName: "app/components/ui/dates/DateCell.tsx",
      lineNumber: 10,
      columnNumber: 39
    }, this),
    displays.includes("ago") && /* @__PURE__ */ (0, import_jsx_dev_runtime101.jsxDEV)("div", { className: (0, import_clsx43.default)(displays.length > 1 && "text-xs"), children: DateUtils_default.dateAgo(date) }, void 0, !1, {
      fileName: "app/components/ui/dates/DateCell.tsx",
      lineNumber: 11,
      columnNumber: 40
    }, this),
    displays.includes("mdy") && /* @__PURE__ */ (0, import_jsx_dev_runtime101.jsxDEV)("div", { children: DateUtils_default.dateMonthDayYear(date) }, void 0, !1, {
      fileName: "app/components/ui/dates/DateCell.tsx",
      lineNumber: 12,
      columnNumber: 40
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ui/dates/DateCell.tsx",
    lineNumber: 8,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/ui/dates/DateCell.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/routes/admin/knowledge-base/bases.tsx
var import_jsx_dev_runtime102 = require("react/jsx-dev-runtime"), loader18 = async ({ request }) => {
  let data = {
    metatags: [{ title: "Knowledge Base" }],
    items: await KnowledgeBaseService_default.getAll({}),
    template: await KnowledgeBaseTemplatesService_default.getTemplate()
  };
  return (0, import_node23.json)(data);
}, meta6 = ({ data }) => data == null ? void 0 : data.metatags, action15 = async ({ request, params }) => {
  var _a, _b, _c;
  let form = await request.formData(), action18 = (_a = form.get("action")) == null ? void 0 : _a.toString();
  if (await KnowledgeBasePermissionsService_default.hasPermission({ action: action18 }), action18 === "toggle") {
    let id = ((_b = form.get("id")) == null ? void 0 : _b.toString()) ?? "", enabled = ((_c = form.get("enabled")) == null ? void 0 : _c.toString()) === "true";
    return await KnowledgeBaseService_default.getById(id) ? (await updateKnowledgeBase(id, {
      enabled
    }), (0, import_node23.json)({ success: "Updated" })) : (0, import_node23.json)({ error: "Not found" }, { status: 404 });
  } else
    return (0, import_node23.json)({ error: "Invalid form" }, { status: 400 });
};
function CampaignsListRoute() {
  let data = (0, import_remix_typedjson17.useTypedLoaderData)(), submit = (0, import_react105.useSubmit)(), [searchParams] = (0, import_react105.useSearchParams)();
  function countStatus(enabled) {
    return enabled === void 0 ? data.items.length : data.items.filter((item) => item.enabled === enabled).length;
  }
  function onToggle(item, enabled) {
    let form = new FormData();
    form.set("action", "toggle"), form.set("enabled", enabled ? "true" : "false"), form.set("id", item.id.toString()), submit(form, {
      method: "post"
    });
  }
  function filteredItems() {
    return searchParams.get("status") === "active" ? data.items.filter((item) => item.enabled) : searchParams.get("status") === "inactive" ? data.items.filter((item) => !item.enabled) : data.items;
  }
  function onExport() {
    let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data.template, null, "	")), downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr), downloadAnchorNode.setAttribute("download", "kbs.json"), document.body.appendChild(downloadAnchorNode), downloadAnchorNode.click(), downloadAnchorNode.remove();
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime102.jsxDEV)("div", { className: "mx-auto mb-12 max-w-5xl space-y-5 px-4 py-4 sm:px-6 lg:px-8 xl:max-w-7xl", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime102.jsxDEV)("div", { className: "flex items-center justify-between space-x-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime102.jsxDEV)("div", { className: "flex-grow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime102.jsxDEV)(
        TabsWithIcons,
        {
          tabs: [
            {
              name: `All ${countStatus() ? `(${countStatus()})` : ""}`,
              href: "?",
              current: !searchParams.get("status") || searchParams.get("status") === "all"
            },
            {
              name: `Active ${countStatus(!0) ? `(${countStatus(!0)})` : ""}`,
              href: "?status=active",
              current: searchParams.get("status") === "active"
            },
            {
              name: `Inactive ${countStatus(!1) ? `(${countStatus(!1)})` : ""}`,
              href: "?status=inactive",
              current: searchParams.get("status") === "inactive"
            }
          ]
        },
        void 0,
        !1,
        {
          fileName: "app/routes/admin/knowledge-base/bases.tsx",
          lineNumber: 103,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/admin/knowledge-base/bases.tsx",
        lineNumber: 102,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime102.jsxDEV)("div", { className: "flex space-x-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime102.jsxDEV)(ButtonSecondary, { to: "import", children: "Import" }, void 0, !1, {
          fileName: "app/routes/admin/knowledge-base/bases.tsx",
          lineNumber: 124,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime102.jsxDEV)(ButtonSecondary, { onClick: onExport, children: "Export" }, void 0, !1, {
          fileName: "app/routes/admin/knowledge-base/bases.tsx",
          lineNumber: 125,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime102.jsxDEV)(ButtonPrimary, { to: "new", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime102.jsxDEV)("div", { children: "New" }, void 0, !1, {
            fileName: "app/routes/admin/knowledge-base/bases.tsx",
            lineNumber: 127,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime102.jsxDEV)(PlusIcon, { className: "h-5 w-5" }, void 0, !1, {
            fileName: "app/routes/admin/knowledge-base/bases.tsx",
            lineNumber: 128,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/admin/knowledge-base/bases.tsx",
          lineNumber: 126,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin/knowledge-base/bases.tsx",
        lineNumber: 123,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin/knowledge-base/bases.tsx",
      lineNumber: 101,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime102.jsxDEV)(
      TableSimple,
      {
        items: filteredItems(),
        actions: [
          {
            title: "Categories",
            onClickRoute: (_, i) => `${i.slug}/categories`
          },
          {
            title: "Preview",
            onClickRoute: (_, i) => `/${i.slug}`,
            onClickRouteTarget: "_blank"
          },
          {
            title: "Edit",
            onClickRoute: (_, i) => `${i.id}`
          }
        ],
        headers: [
          {
            name: "status",
            title: "Status",
            value: (i) => /* @__PURE__ */ (0, import_jsx_dev_runtime102.jsxDEV)(InputCheckbox_default, { asToggle: !0, value: i.enabled, setValue: (checked) => onToggle(i, Boolean(checked)) }, void 0, !1, {
              fileName: "app/routes/admin/knowledge-base/bases.tsx",
              lineNumber: 155,
              columnNumber: 22
            }, this)
          },
          {
            name: "title",
            title: "Title",
            className: "w-full",
            value: (i) => /* @__PURE__ */ (0, import_jsx_dev_runtime102.jsxDEV)("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime102.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime102.jsxDEV)("div", { className: "text-base font-bold", children: i.title }, void 0, !1, {
                  fileName: "app/routes/admin/knowledge-base/bases.tsx",
                  lineNumber: 165,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime102.jsxDEV)(SimpleBadge, { title: "/" + i.slug, color: i.color }, void 0, !1, {
                  fileName: "app/routes/admin/knowledge-base/bases.tsx",
                  lineNumber: 166,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/admin/knowledge-base/bases.tsx",
                lineNumber: 164,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime102.jsxDEV)("div", { className: "flex items-center space-x-2 text-sm text-gray-500", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime102.jsxDEV)(import_react105.Link, { to: `${i.slug}/articles`, className: "hover:underline", children: [
                  i.count.articles,
                  " articles"
                ] }, void 0, !0, {
                  fileName: "app/routes/admin/knowledge-base/bases.tsx",
                  lineNumber: 169,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime102.jsxDEV)("div", { children: "\u2022" }, void 0, !1, {
                  fileName: "app/routes/admin/knowledge-base/bases.tsx",
                  lineNumber: 172,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime102.jsxDEV)(import_react105.Link, { to: `${i.slug}/categories`, className: "hover:underline", children: [
                  i.count.categories,
                  " categories"
                ] }, void 0, !0, {
                  fileName: "app/routes/admin/knowledge-base/bases.tsx",
                  lineNumber: 173,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/admin/knowledge-base/bases.tsx",
                lineNumber: 168,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/admin/knowledge-base/bases.tsx",
              lineNumber: 163,
              columnNumber: 15
            }, this)
          },
          {
            name: "views",
            title: "Views",
            value: (i) => i.count.views
          },
          {
            name: "updatedAt",
            title: "Updated at",
            value: (i) => /* @__PURE__ */ (0, import_jsx_dev_runtime102.jsxDEV)(DateCell, { date: i.updatedAt }, void 0, !1, {
              fileName: "app/routes/admin/knowledge-base/bases.tsx",
              lineNumber: 188,
              columnNumber: 27
            }, this)
          }
        ],
        noRecords: /* @__PURE__ */ (0, import_jsx_dev_runtime102.jsxDEV)("div", { className: "p-12 text-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime102.jsxDEV)("h3", { className: "mt-1 text-sm font-medium text-gray-900", children: "No knowledge bases" }, void 0, !1, {
            fileName: "app/routes/admin/knowledge-base/bases.tsx",
            lineNumber: 193,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime102.jsxDEV)("p", { className: "mt-1 text-sm text-gray-500", children: "Get started by creating a new knowledge base." }, void 0, !1, {
            fileName: "app/routes/admin/knowledge-base/bases.tsx",
            lineNumber: 194,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/admin/knowledge-base/bases.tsx",
          lineNumber: 192,
          columnNumber: 11
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/admin/knowledge-base/bases.tsx",
        lineNumber: 133,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime102.jsxDEV)(import_react105.Outlet, {}, void 0, !1, {
      fileName: "app/routes/admin/knowledge-base/bases.tsx",
      lineNumber: 199,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin/knowledge-base/bases.tsx",
    lineNumber: 100,
    columnNumber: 5
  }, this);
}

// app/routes/admin/knowledge-base/bases/$id.tsx
var id_exports2 = {};
__export(id_exports2, {
  action: () => action16,
  default: () => id_default2,
  loader: () => loader19
});
var import_node24 = require("@remix-run/node"), import_react112 = require("@remix-run/react"), import_react113 = require("react"), import_remix_typedjson18 = require("remix-typedjson");

// app/modules/knowledgeBase/components/bases/KnowledgeBaseForm.tsx
var import_react110 = require("@remix-run/react"), import_react111 = require("react");

// app/components/ui/input/InputCombobox.tsx
var import_react106 = require("react"), import_react107 = require("react"), import_react108 = require("@headlessui/react"), import_react109 = require("@remix-run/react");
var import_clsx44 = __toESM(require("clsx")), import_jsx_dev_runtime103 = require("react/jsx-dev-runtime"), InputCombobox = ({
  name,
  title,
  value,
  options: options2,
  disabled,
  onChange,
  className,
  withSearch = !0,
  withLabel = !0,
  withColors = !1,
  selectPlaceholder,
  onNew,
  required,
  onNewRoute,
  help,
  hint,
  icon,
  borderless,
  darkMode,
  autoFocus,
  readOnly,
  renderHiddenInputValue,
  prefix
}, ref) => {
  let button = (0, import_react106.useRef)(null), inputSearch = (0, import_react106.useRef)(null), [selected, setSelected] = (0, import_react107.useState)(value || []), [searchInput, setSearchInput] = (0, import_react107.useState)("");
  (0, import_react107.useEffect)(() => {
    value && !isEqual(selected.sort(), value == null ? void 0 : value.sort()) && setSelected(value);
  }, [value]), (0, import_react107.useEffect)(() => {
    onChange && !isEqual(selected.sort(), value == null ? void 0 : value.sort()) && onChange(selected);
  }, [selected]);
  function isEqual(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
  }
  (0, import_react106.useImperativeHandle)(ref, () => ({ focus }));
  function focus() {
    setTimeout(() => {
      var _a, _b;
      (_a = button.current) == null || _a.focus(), (_b = button.current) == null || _b.click();
    }, 1);
  }
  let filteredItems = () => options2 ? options2.filter(
    (f) => {
      var _a, _b;
      return ((_a = f.name) == null ? void 0 : _a.toString().toUpperCase().includes(searchInput.toUpperCase())) || ((_b = f.value) == null ? void 0 : _b.toString().toUpperCase().includes(searchInput.toUpperCase()));
    }
  ) : [];
  function getSelectedOptions() {
    return options2.filter((f) => {
      var _a;
      return selected.includes(((_a = f.value) == null ? void 0 : _a.toString()) ?? "");
    });
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(import_react108.Combobox, { multiple: !0, value: selected, onChange: setSelected, disabled: disabled || readOnly, children: ({ open }) => /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)("div", { className: (0, import_clsx44.default)(className, "text-gray-800", darkMode && "dark:text-gray-50"), children: [
    withLabel && title && /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(import_react108.Combobox.Label, { htmlFor: name, className: "mb-1 flex justify-between space-x-2 text-xs font-medium text-gray-600", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)("div", { className: " flex items-center space-x-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)("div", { className: "truncate", children: [
          title,
          required && /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)("span", { className: "ml-1 text-red-500", children: "*" }, void 0, !1, {
            fileName: "app/components/ui/input/InputCombobox.tsx",
            lineNumber: 129,
            columnNumber: 32
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/ui/input/InputCombobox.tsx",
          lineNumber: 127,
          columnNumber: 17
        }, this),
        help && /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(HintTooltip, { text: help }, void 0, !1, {
          fileName: "app/components/ui/input/InputCombobox.tsx",
          lineNumber: 132,
          columnNumber: 26
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/ui/input/InputCombobox.tsx",
        lineNumber: 126,
        columnNumber: 15
      }, this),
      hint
    ] }, void 0, !0, {
      fileName: "app/components/ui/input/InputCombobox.tsx",
      lineNumber: 125,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)("div", { className: "relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(
        import_react108.Combobox.Button,
        {
          autoFocus,
          type: "button",
          ref: button,
          className: (0, import_clsx44.default)(
            "relative w-full cursor-default rounded-md border border-gray-300 py-2 pl-3 pr-10 text-left shadow-sm focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500 sm:text-sm",
            disabled || readOnly ? "cursor-not-allowed bg-gray-100" : "bg-white hover:bg-gray-50 focus:bg-gray-50",
            borderless && "border-transparent",
            darkMode && "dark:border-gray-800 dark:bg-gray-800"
          ),
          children: [
            icon && /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)("div", { className: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(EntityIcon, { className: "h-5 w-5 text-gray-400", icon }, void 0, !1, {
              fileName: "app/components/ui/input/InputCombobox.tsx",
              lineNumber: 152,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/components/ui/input/InputCombobox.tsx",
              lineNumber: 151,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)("span", { className: "inline-flex w-full items-center space-x-2 truncate", children: /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)("div", { className: "truncate", children: selected.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)("span", { children: [
              prefix ?? "",
              getSelectedOptions().map((f) => f.name ?? f.value).join(", ")
            ] }, void 0, !0, {
              fileName: "app/components/ui/input/InputCombobox.tsx",
              lineNumber: 161,
              columnNumber: 21
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)("span", { className: "text-sm text-gray-500", children: [
              selectPlaceholder ?? "Select",
              "..."
            ] }, void 0, !0, {
              fileName: "app/components/ui/input/InputCombobox.tsx",
              lineNumber: 168,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/components/ui/input/InputCombobox.tsx",
              lineNumber: 158,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/components/ui/input/InputCombobox.tsx",
              lineNumber: 156,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)("span", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5 text-gray-400", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(
              "path",
              {
                fillRule: "evenodd",
                d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
                clipRule: "evenodd"
              },
              void 0,
              !1,
              {
                fileName: "app/components/ui/input/InputCombobox.tsx",
                lineNumber: 174,
                columnNumber: 19
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/ui/input/InputCombobox.tsx",
              lineNumber: 173,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/components/ui/input/InputCombobox.tsx",
              lineNumber: 172,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/ui/input/InputCombobox.tsx",
          lineNumber: 139,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(import_react108.Transition, { show: open, as: import_react107.Fragment, leave: "transition ease-in duration-100", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(
        import_react108.Combobox.Options,
        {
          onBlur: () => setSearchInput(""),
          className: (0, import_clsx44.default)(
            "absolute z-10 mt-1 max-h-72 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
            darkMode && "dark:bg-gray-800"
          ),
          children: [
            (withSearch || onNew || onNewRoute) && /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)("div", { className: "flex rounded-md p-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)("div", { className: "relative flex flex-grow items-stretch focus-within:z-10", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)("div", { className: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5 text-gray-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }, void 0, !1, {
                  fileName: "app/components/ui/input/InputCombobox.tsx",
                  lineNumber: 197,
                  columnNumber: 27
                }, this) }, void 0, !1, {
                  fileName: "app/components/ui/input/InputCombobox.tsx",
                  lineNumber: 196,
                  columnNumber: 25
                }, this) }, void 0, !1, {
                  fileName: "app/components/ui/input/InputCombobox.tsx",
                  lineNumber: 195,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(
                  "input",
                  {
                    ref: inputSearch,
                    id: "search",
                    autoComplete: "off",
                    placeholder: "Search...",
                    value: searchInput,
                    onChange: (e) => setSearchInput(e.target.value),
                    className: "block w-full rounded-none rounded-l-md border border-gray-300 bg-white px-3 py-2 pl-10 text-sm focus:border-accent-300 focus:outline-none focus:ring-gray-300 sm:text-sm"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/ui/input/InputCombobox.tsx",
                    lineNumber: 200,
                    columnNumber: 23
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/components/ui/input/InputCombobox.tsx",
                lineNumber: 194,
                columnNumber: 21
              }, this),
              onNew && /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(
                "button",
                {
                  title: "New",
                  type: "button",
                  onClick: onNew,
                  className: "relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-gray-300 bg-gray-50 px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 6v6m0 0v6m0-6h6m-6 0H6" }, void 0, !1, {
                    fileName: "app/components/ui/input/InputCombobox.tsx",
                    lineNumber: 218,
                    columnNumber: 27
                  }, this) }, void 0, !1, {
                    fileName: "app/components/ui/input/InputCombobox.tsx",
                    lineNumber: 217,
                    columnNumber: 25
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/components/ui/input/InputCombobox.tsx",
                  lineNumber: 211,
                  columnNumber: 23
                },
                this
              ),
              onNewRoute && /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(
                import_react109.Link,
                {
                  to: onNewRoute,
                  className: "relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-gray-300 bg-gray-50 px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 6v6m0 0v6m0-6h6m-6 0H6" }, void 0, !1, {
                    fileName: "app/components/ui/input/InputCombobox.tsx",
                    lineNumber: 229,
                    columnNumber: 27
                  }, this) }, void 0, !1, {
                    fileName: "app/components/ui/input/InputCombobox.tsx",
                    lineNumber: 228,
                    columnNumber: 25
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/components/ui/input/InputCombobox.tsx",
                  lineNumber: 224,
                  columnNumber: 23
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/ui/input/InputCombobox.tsx",
              lineNumber: 193,
              columnNumber: 19
            }, this),
            filteredItems().map((item, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(
              import_react108.Combobox.Option,
              {
                disabled: item.disabled,
                className: ({ active }) => (0, import_clsx44.default)(
                  "relative cursor-default select-none py-2 pl-3 pr-9",
                  !item.disabled && active && "bg-accent-600 text-white",
                  !item.disabled && !active && "text-gray-900",
                  item.disabled && "cursor-not-allowed bg-gray-100 text-gray-400",
                  darkMode && !item.disabled && active && "dark:bg-accent-500 dark:text-black",
                  darkMode && !item.disabled && !active && "dark:text-gray-50",
                  darkMode && item.disabled && "cursor-not-allowed dark:bg-gray-900 dark:text-gray-600"
                ),
                value: item.value,
                children: ({ selected: selected2, active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(import_jsx_dev_runtime103.Fragment, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
                    withColors && item.color !== void 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(ColorBadge, { color: item.color }, void 0, !1, {
                      fileName: "app/components/ui/input/InputCombobox.tsx",
                      lineNumber: 256,
                      columnNumber: 70
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)("div", { className: (0, import_clsx44.default)(selected2 ? "font-semibold" : "font-normal", "truncate"), children: item.name || item.value }, void 0, !1, {
                      fileName: "app/components/ui/input/InputCombobox.tsx",
                      lineNumber: 257,
                      columnNumber: 27
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/components/ui/input/InputCombobox.tsx",
                    lineNumber: 255,
                    columnNumber: 25
                  }, this),
                  selected2 ? /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)("span", { className: (0, import_clsx44.default)(active ? "text-white" : "text-accent-600", "absolute inset-y-0 right-0 flex items-center pr-4"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(
                    "path",
                    {
                      fillRule: "evenodd",
                      d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                      clipRule: "evenodd"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/ui/input/InputCombobox.tsx",
                      lineNumber: 263,
                      columnNumber: 31
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "app/components/ui/input/InputCombobox.tsx",
                    lineNumber: 262,
                    columnNumber: 29
                  }, this) }, void 0, !1, {
                    fileName: "app/components/ui/input/InputCombobox.tsx",
                    lineNumber: 261,
                    columnNumber: 27
                  }, this) : null
                ] }, void 0, !0, {
                  fileName: "app/components/ui/input/InputCombobox.tsx",
                  lineNumber: 254,
                  columnNumber: 23
                }, this)
              },
              idx,
              !1,
              {
                fileName: "app/components/ui/input/InputCombobox.tsx",
                lineNumber: 237,
                columnNumber: 19
              },
              this
            )),
            withSearch && filteredItems().length === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)("div", { className: "px-3 py-2 text-sm text-gray-400", children: "There are no records." }, void 0, !1, {
              fileName: "app/components/ui/input/InputCombobox.tsx",
              lineNumber: 276,
              columnNumber: 64
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/ui/input/InputCombobox.tsx",
          lineNumber: 184,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/ui/input/InputCombobox.tsx",
        lineNumber: 183,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ui/input/InputCombobox.tsx",
      lineNumber: 138,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ui/input/InputCombobox.tsx",
    lineNumber: 117,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/ui/input/InputCombobox.tsx",
    lineNumber: 115,
    columnNumber: 5
  }, this);
}, InputCombobox_default = (0, import_react106.forwardRef)(InputCombobox);

// app/components/ui/sort/OrderIndexButtons.tsx
var import_clsx45 = __toESM(require("clsx")), import_jsx_dev_runtime104 = require("react/jsx-dev-runtime");
function OrderIndexButtons({ idx, items, editable = !0, onChange, className }) {
  function changeOrder(forward) {
    let currentItem = items[idx], nextItem, prevItem;
    forward ? items.length > idx + 1 && (nextItem = items[idx + 1]) : idx - 1 >= 0 && (prevItem = items[idx - 1]);
    let newOrders = items.map((item, idx2) => {
      let order = 0;
      return currentItem.idx === item.idx ? order = idx2 + (forward ? 1 : -1) + 1 : (prevItem == null ? void 0 : prevItem.idx) === item.idx ? order = idx2 + (forward ? 0 : 1) + 1 : (nextItem == null ? void 0 : nextItem.idx) === item.idx ? order = idx2 + (forward ? -1 : 0) + 1 : order = idx2 + 1, { ...item, order };
    });
    onChange(newOrders);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime104.jsxDEV)("div", { className: (0, import_clsx45.default)("flex items-center space-x-1 truncate", className), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime104.jsxDEV)(
      "button",
      {
        type: "button",
        onClick: (e) => {
          e.stopPropagation(), changeOrder(!1);
        },
        className: (0, import_clsx45.default)(
          !editable || idx <= 0 ? " cursor-not-allowed bg-gray-100 text-gray-300" : "hover:bg-gray-100 hover:text-gray-800",
          "h-4 w-4 bg-gray-50 px-0.5 py-0.5 text-gray-500 focus:outline-none"
        ),
        disabled: !editable || idx <= 0,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime104.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-3 w-3", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime104.jsxDEV)(
          "path",
          {
            fillRule: "evenodd",
            d: "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",
            clipRule: "evenodd"
          },
          void 0,
          !1,
          {
            fileName: "app/components/ui/sort/OrderIndexButtons.tsx",
            lineNumber: 60,
            columnNumber: 11
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/ui/sort/OrderIndexButtons.tsx",
          lineNumber: 59,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/ui/sort/OrderIndexButtons.tsx",
        lineNumber: 47,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime104.jsxDEV)(
      "button",
      {
        type: "button",
        onClick: (e) => {
          e.stopPropagation(), changeOrder(!0);
        },
        className: (0, import_clsx45.default)(
          !editable || idx >= items.length - 1 ? " cursor-not-allowed bg-gray-100 text-gray-300" : "hover:bg-gray-100 hover:text-gray-800",
          "h-4 w-4 bg-gray-50 px-0.5 py-0.5 text-gray-500 focus:outline-none"
        ),
        disabled: !editable || idx >= items.length - 1,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime104.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-3 w-3", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime104.jsxDEV)(
          "path",
          {
            fillRule: "evenodd",
            d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
            clipRule: "evenodd"
          },
          void 0,
          !1,
          {
            fileName: "app/components/ui/sort/OrderIndexButtons.tsx",
            lineNumber: 80,
            columnNumber: 11
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/ui/sort/OrderIndexButtons.tsx",
          lineNumber: 79,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/ui/sort/OrderIndexButtons.tsx",
        lineNumber: 67,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/ui/sort/OrderIndexButtons.tsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
}

// app/modules/knowledgeBase/components/bases/KbNavLinksTable.tsx
var import_jsx_dev_runtime105 = require("react/jsx-dev-runtime");
function KbNavLinksTable({
  items,
  setItems
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime105.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime105.jsxDEV)("div", { className: "mb-1 flex items-center justify-between space-x-2 text-xs", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime105.jsxDEV)("label", { className: "font-medium text-gray-600", children: "Nav links" }, void 0, !1, {
        fileName: "app/modules/knowledgeBase/components/bases/KbNavLinksTable.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime105.jsxDEV)("button", { type: "button", onClick: () => setItems([]), className: "text-gray-500 hover:text-gray-700", children: "Clear" }, void 0, !1, {
        fileName: "app/modules/knowledgeBase/components/bases/KbNavLinksTable.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/modules/knowledgeBase/components/bases/KbNavLinksTable.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime105.jsxDEV)("div", { className: "", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime105.jsxDEV)(
        TableSimple,
        {
          items: items.sort((a, b) => a.order - b.order),
          headers: [
            {
              name: "order",
              title: "",
              value: (item, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime105.jsxDEV)(
                OrderIndexButtons,
                {
                  idx,
                  items: items.map((f, idx2) => ({
                    idx: idx2,
                    order: f.order
                  })),
                  onChange: (newItems) => {
                    setItems(
                      newItems.map((f, i) => ({ ...items[i], order: f.order }))
                    );
                  }
                },
                void 0,
                !1,
                {
                  fileName: "app/modules/knowledgeBase/components/bases/KbNavLinksTable.tsx",
                  lineNumber: 37,
                  columnNumber: 17
                },
                this
              )
            },
            {
              name: "title",
              title: "Title",
              value: (item) => item.name,
              editable: () => !0,
              setValue: (value, idx) => setItems((e) => e.map((item, i) => i === idx ? { ...item, name: value } : item))
            },
            {
              name: "href",
              title: "Link",
              value: (item) => item.href,
              editable: () => !0,
              setValue: (value, idx) => setItems((e) => e.map((item, i) => i === idx ? { ...item, href: value } : item))
            }
          ]
        },
        void 0,
        !1,
        {
          fileName: "app/modules/knowledgeBase/components/bases/KbNavLinksTable.tsx",
          lineNumber: 30,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime105.jsxDEV)(
        "button",
        {
          type: "button",
          onClick: () => {
            setItems([...items, { name: "Link " + (items.length + 1), href: "/", order: items.length + 1 }]);
          },
          className: "mt-2 flex items-center space-x-1 rounded-md border border-gray-300 bg-white px-2 py-1 text-xs text-gray-600 hover:bg-gray-100 focus:text-gray-800 focus:ring focus:ring-gray-300 focus:ring-offset-1",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime105.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime105.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 6v6m0 0v6m0-6h6m-6 0H6" }, void 0, !1, {
              fileName: "app/modules/knowledgeBase/components/bases/KbNavLinksTable.tsx",
              lineNumber: 79,
              columnNumber: 13
            }, this) }, void 0, !1, {
              fileName: "app/modules/knowledgeBase/components/bases/KbNavLinksTable.tsx",
              lineNumber: 78,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime105.jsxDEV)("span", { className: "font-medium uppercase", children: "Add" }, void 0, !1, {
              fileName: "app/modules/knowledgeBase/components/bases/KbNavLinksTable.tsx",
              lineNumber: 81,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/modules/knowledgeBase/components/bases/KbNavLinksTable.tsx",
          lineNumber: 71,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/modules/knowledgeBase/components/bases/KbNavLinksTable.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/modules/knowledgeBase/components/bases/KbNavLinksTable.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

// app/modules/knowledgeBase/components/bases/KnowledgeBaseForm.tsx
var import_clsx46 = __toESM(require("clsx"));
var import_jsx_dev_runtime106 = require("react/jsx-dev-runtime");
function KnowledgeBaseForm({ item, onDelete }) {
  let navigation = (0, import_react110.useNavigation)(), navigate = (0, import_react110.useNavigate)(), mainInput = (0, import_react111.useRef)(null);
  (0, import_react111.useEffect)(() => {
    setTimeout(() => {
      var _a, _b;
      (_b = (_a = mainInput.current) == null ? void 0 : _a.input.current) == null || _b.focus();
    }, 100);
  }, []);
  let [slug, setSlug] = (0, import_react111.useState)((item == null ? void 0 : item.slug) || ""), [title, setTitle] = (0, import_react111.useState)((item == null ? void 0 : item.title) || ""), [description, setDescription] = (0, import_react111.useState)((item == null ? void 0 : item.description) || ""), [defaultLanguage, setDefaultLanguage] = (0, import_react111.useState)((item == null ? void 0 : item.defaultLanguage) || "en"), [layout, setLayout] = (0, import_react111.useState)((item == null ? void 0 : item.layout) || "list"), [color, setColor] = (0, import_react111.useState)((item == null ? void 0 : item.color) || 15 /* BLUE */), [enabled, setEnabled] = (0, import_react111.useState)((item == null ? void 0 : item.enabled) ?? !1), [languages, setLanguages] = (0, import_react111.useState)((item == null ? void 0 : item.languages) || []), [logo, setLogo] = (0, import_react111.useState)((item == null ? void 0 : item.logo) || "dark"), [seoImage, setSeoImage] = (0, import_react111.useState)((item == null ? void 0 : item.seoImage) || ""), [links2, setLinks] = (0, import_react111.useState)((item == null ? void 0 : item.links) || []);
  return (0, import_react111.useEffect)(() => {
    item || setSlug(UrlUtils_default.slugify(title.toLowerCase()));
  }, [item, title]), /* @__PURE__ */ (0, import_jsx_dev_runtime106.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime106.jsxDEV)(
    SlideOverWideEmpty,
    {
      title: item ? "Edit" : "Create",
      description: item ? "Edit knowledge base" : "Create knowledge base",
      open: !0,
      onClose: () => {
        navigate("/admin/knowledge-base/bases");
      },
      className: "sm:max-w-md",
      overflowYScroll: !0,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime106.jsxDEV)(import_react110.Form, { method: "post", className: "inline-block w-full overflow-hidden p-1 text-left align-bottom sm:align-middle", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime106.jsxDEV)("input", { type: "hidden", name: "action", value: item ? "edit" : "new" }, void 0, !1, {
          fileName: "app/modules/knowledgeBase/components/bases/KnowledgeBaseForm.tsx",
          lineNumber: 69,
          columnNumber: 11
        }, this),
        links2.map((item2, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime106.jsxDEV)("input", { type: "hidden", name: "links[]", value: JSON.stringify(item2) }, index, !1, {
          fileName: "app/modules/knowledgeBase/components/bases/KnowledgeBaseForm.tsx",
          lineNumber: 71,
          columnNumber: 20
        }, this)),
        /* @__PURE__ */ (0, import_jsx_dev_runtime106.jsxDEV)("div", { className: "space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime106.jsxDEV)(InputText_default, { ref: mainInput, autoFocus: !0, name: "title", title: "Title", value: title, setValue: setTitle, required: !0 }, void 0, !1, {
            fileName: "app/modules/knowledgeBase/components/bases/KnowledgeBaseForm.tsx",
            lineNumber: 75,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime106.jsxDEV)(InputText_default, { name: "slug", title: "Slug", value: slug, setValue: setSlug, required: !0 }, void 0, !1, {
            fileName: "app/modules/knowledgeBase/components/bases/KnowledgeBaseForm.tsx",
            lineNumber: 76,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime106.jsxDEV)(InputText_default, { name: "description", title: "Description", value: description, setValue: setDescription }, void 0, !1, {
            fileName: "app/modules/knowledgeBase/components/bases/KnowledgeBaseForm.tsx",
            lineNumber: 77,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime106.jsxDEV)("div", { children: [
            languages == null ? void 0 : languages.map((item2, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime106.jsxDEV)("input", { type: "hidden", name: "languages[]", value: item2 }, idx, !1, {
              fileName: "app/modules/knowledgeBase/components/bases/KnowledgeBaseForm.tsx",
              lineNumber: 80,
              columnNumber: 24
            }, this)),
            /* @__PURE__ */ (0, import_jsx_dev_runtime106.jsxDEV)(
              InputCombobox_default,
              {
                name: "languages",
                title: "Languages",
                value: languages,
                onChange: (e) => setLanguages(e),
                options: KnowledgeBaseUtils_default.supportedLanguages
              },
              void 0,
              !1,
              {
                fileName: "app/modules/knowledgeBase/components/bases/KnowledgeBaseForm.tsx",
                lineNumber: 82,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/modules/knowledgeBase/components/bases/KnowledgeBaseForm.tsx",
            lineNumber: 78,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime106.jsxDEV)(
            InputSelect,
            {
              name: "defaultLanguage",
              title: "Default language",
              value: defaultLanguage,
              setValue: (e) => setDefaultLanguage((e == null ? void 0 : e.toString()) || "en"),
              options: languages.map((item2) => ({
                value: item2,
                name: item2
              }))
            },
            void 0,
            !1,
            {
              fileName: "app/modules/knowledgeBase/components/bases/KnowledgeBaseForm.tsx",
              lineNumber: 90,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime106.jsxDEV)(
            InputSelect,
            {
              name: "layout",
              title: "Layout",
              value: layout,
              setValue: (e) => setLayout((e == null ? void 0 : e.toString()) || "list"),
              options: [
                {
                  value: "list",
                  name: "List"
                },
                {
                  value: "articles",
                  name: "Articles"
                },
                {
                  value: "grid",
                  name: "Grid"
                }
              ]
            },
            void 0,
            !1,
            {
              fileName: "app/modules/knowledgeBase/components/bases/KnowledgeBaseForm.tsx",
              lineNumber: 102,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime106.jsxDEV)(
            InputSelector_default,
            {
              name: "color",
              title: "Color",
              value: color,
              setValue: (e) => setColor(e),
              options: getColors().map((color2) => ({
                name: /* @__PURE__ */ (0, import_jsx_dev_runtime106.jsxDEV)(ColorBadge, { color: color2 }, void 0, !1, {
                  fileName: "app/modules/knowledgeBase/components/bases/KnowledgeBaseForm.tsx",
                  lineNumber: 130,
                  columnNumber: 27
                }, this),
                value: color2
              })) ?? []
            },
            void 0,
            !1,
            {
              fileName: "app/modules/knowledgeBase/components/bases/KnowledgeBaseForm.tsx",
              lineNumber: 122,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime106.jsxDEV)(
            InputText_default,
            {
              name: "logo",
              title: "Logo",
              value: logo,
              setValue: setLogo,
              hint: "light, dark or url",
              button: /* @__PURE__ */ (0, import_jsx_dev_runtime106.jsxDEV)("div", { className: "absolute inset-y-0 right-0 flex py-0.5 pr-0.5 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime106.jsxDEV)(
                "kbd",
                {
                  className: (0, import_clsx46.default)(
                    "inline-flex w-auto items-center justify-center rounded border border-gray-300 px-1 text-center font-sans text-xs font-medium text-gray-500",
                    ColorBackgroundUtils_default.getBg700(color)
                  ),
                  children: logo === "light" ? /* @__PURE__ */ (0, import_jsx_dev_runtime106.jsxDEV)("img", { className: "h-7 w-auto", src: logo_light_default, alt: "Logo" }, void 0, !1, {
                    fileName: "app/modules/knowledgeBase/components/bases/KnowledgeBaseForm.tsx",
                    lineNumber: 152,
                    columnNumber: 23
                  }, this) : logo === "dark" ? /* @__PURE__ */ (0, import_jsx_dev_runtime106.jsxDEV)("img", { className: "h-7 w-auto", src: logo_dark_default, alt: "Logo" }, void 0, !1, {
                    fileName: "app/modules/knowledgeBase/components/bases/KnowledgeBaseForm.tsx",
                    lineNumber: 154,
                    columnNumber: 23
                  }, this) : logo.startsWith("http") ? /* @__PURE__ */ (0, import_jsx_dev_runtime106.jsxDEV)("img", { className: "h-7 w-auto", src: logo, alt: "Logo" }, void 0, !1, {
                    fileName: "app/modules/knowledgeBase/components/bases/KnowledgeBaseForm.tsx",
                    lineNumber: 156,
                    columnNumber: 23
                  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime106.jsxDEV)("div", { className: "italic text-white", children: "Invalid" }, void 0, !1, {
                    fileName: "app/modules/knowledgeBase/components/bases/KnowledgeBaseForm.tsx",
                    lineNumber: 158,
                    columnNumber: 23
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/modules/knowledgeBase/components/bases/KnowledgeBaseForm.tsx",
                  lineNumber: 145,
                  columnNumber: 19
                },
                this
              ) }, void 0, !1, {
                fileName: "app/modules/knowledgeBase/components/bases/KnowledgeBaseForm.tsx",
                lineNumber: 144,
                columnNumber: 17
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/modules/knowledgeBase/components/bases/KnowledgeBaseForm.tsx",
              lineNumber: 137,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime106.jsxDEV)(InputText_default, { name: "seoImage", title: "SEO Image", value: seoImage, setValue: setSeoImage, hint: "url" }, void 0, !1, {
            fileName: "app/modules/knowledgeBase/components/bases/KnowledgeBaseForm.tsx",
            lineNumber: 164,
            columnNumber: 13
          }, this),
          seoImage && /* @__PURE__ */ (0, import_jsx_dev_runtime106.jsxDEV)("div", { className: "col-span-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime106.jsxDEV)("img", { className: "overflow-hidden rounded-lg shadow-xl xl:border-b xl:border-gray-200", src: seoImage, alt: title }, void 0, !1, {
            fileName: "app/modules/knowledgeBase/components/bases/KnowledgeBaseForm.tsx",
            lineNumber: 167,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/modules/knowledgeBase/components/bases/KnowledgeBaseForm.tsx",
            lineNumber: 166,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime106.jsxDEV)(
            InputCheckboxWithDescription,
            {
              name: "enabled",
              title: "Enabled",
              value: enabled,
              setValue: setEnabled,
              description: "If disabled, the knowledge base will not be accessible."
            },
            void 0,
            !1,
            {
              fileName: "app/modules/knowledgeBase/components/bases/KnowledgeBaseForm.tsx",
              lineNumber: 171,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime106.jsxDEV)(KbNavLinksTable, { items: links2, setItems: setLinks }, void 0, !1, {
            fileName: "app/modules/knowledgeBase/components/bases/KnowledgeBaseForm.tsx",
            lineNumber: 179,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/modules/knowledgeBase/components/bases/KnowledgeBaseForm.tsx",
          lineNumber: 74,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime106.jsxDEV)("div", { className: "mt-5 flex justify-between space-x-2 sm:mt-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime106.jsxDEV)("div", { children: onDelete && /* @__PURE__ */ (0, import_jsx_dev_runtime106.jsxDEV)(ButtonSecondary, { disabled: navigation.state === "submitting", type: "button", className: "w-full", onClick: onDelete, destructive: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime106.jsxDEV)("div", { children: "Delete" }, void 0, !1, {
            fileName: "app/modules/knowledgeBase/components/bases/KnowledgeBaseForm.tsx",
            lineNumber: 185,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/modules/knowledgeBase/components/bases/KnowledgeBaseForm.tsx",
            lineNumber: 184,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/modules/knowledgeBase/components/bases/KnowledgeBaseForm.tsx",
            lineNumber: 182,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime106.jsxDEV)("div", { className: "flex space-x-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime106.jsxDEV)(ButtonSecondary, { onClick: () => navigate("/admin/knowledge-base/bases"), children: "Cancel" }, void 0, !1, {
              fileName: "app/modules/knowledgeBase/components/bases/KnowledgeBaseForm.tsx",
              lineNumber: 190,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime106.jsxDEV)(LoadingButton_default, { actionName: item ? "edit" : "new", type: "submit", disabled: navigation.state === "submitting", children: "Save" }, void 0, !1, {
              fileName: "app/modules/knowledgeBase/components/bases/KnowledgeBaseForm.tsx",
              lineNumber: 191,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/modules/knowledgeBase/components/bases/KnowledgeBaseForm.tsx",
            lineNumber: 189,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/modules/knowledgeBase/components/bases/KnowledgeBaseForm.tsx",
          lineNumber: 181,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/modules/knowledgeBase/components/bases/KnowledgeBaseForm.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/modules/knowledgeBase/components/bases/KnowledgeBaseForm.tsx",
      lineNumber: 58,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/modules/knowledgeBase/components/bases/KnowledgeBaseForm.tsx",
    lineNumber: 57,
    columnNumber: 5
  }, this);
}

// app/routes/admin/knowledge-base/bases/$id.tsx
var import_jsx_dev_runtime107 = require("react/jsx-dev-runtime"), loader19 = async ({ params }) => {
  let item = await KnowledgeBaseService_default.getById(params.id);
  return item ? (0, import_node24.json)({
    item
  }) : (0, import_node24.redirect)("/admin/knowledge-base/bases");
}, action16 = async ({ request, params }) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  let form = await request.formData(), action18 = (_a = form.get("action")) == null ? void 0 : _a.toString();
  await KnowledgeBasePermissionsService_default.hasPermission({ action: action18 });
  let item = await KnowledgeBaseService_default.getById(params.id);
  if (!item)
    return (0, import_node24.redirect)("/admin/knowledge-base/bases");
  if (action18 === "edit") {
    let slug = ((_b = form.get("slug")) == null ? void 0 : _b.toString()) ?? "", title = ((_c = form.get("title")) == null ? void 0 : _c.toString()) ?? "", description = ((_d = form.get("description")) == null ? void 0 : _d.toString()) ?? "", defaultLanguage = ((_e = form.get("defaultLanguage")) == null ? void 0 : _e.toString()) ?? "", layout = ((_f = form.get("layout")) == null ? void 0 : _f.toString()) ?? "", color = Number(((_g = form.get("color")) == null ? void 0 : _g.toString()) ?? ""), enabled = Boolean(form.get("enabled")), languages = form.getAll("languages[]").map((l) => l.toString()), links2 = form.getAll("links[]").map((l) => JSON.parse(l.toString())), logo = ((_h = form.get("logo")) == null ? void 0 : _h.toString()) ?? "", seoImage = ((_i = form.get("seoImage")) == null ? void 0 : _i.toString()) ?? "";
    if (languages.length === 0)
      return (0, import_node24.json)({ error: "At least one language is required" }, { status: 400 });
    let existing = await getKnowledgeBaseBySlug(slug);
    if (existing && existing.id !== item.id)
      return (0, import_node24.json)({ error: "Slug already exists" }, { status: 400 });
    try {
      await updateKnowledgeBase(item.id, {
        slug,
        title,
        description,
        defaultLanguage,
        layout,
        color,
        enabled,
        languages: JSON.stringify(languages),
        links: JSON.stringify(links2),
        logo,
        seoImage
      });
    } catch (e) {
      return (0, import_node24.json)({ error: e.message }, { status: 400 });
    }
    return (0, import_node24.redirect)("/admin/knowledge-base/bases");
  } else if (action18 === "delete")
    try {
      return await KnowledgeBaseService_default.del(item), (0, import_node24.redirect)("/admin/knowledge-base/bases");
    } catch (e) {
      return (0, import_node24.json)({ error: e.message }, { status: 400 });
    }
  else
    return (0, import_node24.json)({ error: "Invalid form" }, { status: 400 });
};
function id_default2() {
  let data = (0, import_remix_typedjson18.useTypedLoaderData)(), actionData = (0, import_remix_typedjson18.useTypedActionData)(), submit = (0, import_react112.useSubmit)(), confirmDelete = (0, import_react113.useRef)(null);
  function onDelete() {
    var _a;
    (_a = confirmDelete.current) == null || _a.show("Delete article", "Delete", "Cancel", `Are you sure you want to delete the article "${data.item.title}"?`);
  }
  function onConfirmedDelete() {
    let form = new FormData();
    form.set("action", "delete"), submit(form, {
      method: "post"
    });
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime107.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime107.jsxDEV)(KnowledgeBaseForm, { item: data.item, onDelete }, void 0, !1, {
      fileName: "app/routes/admin/knowledge-base/bases/$id.tsx",
      lineNumber: 115,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime107.jsxDEV)(ConfirmModal_default, { ref: confirmDelete, onYes: onConfirmedDelete, destructive: !0 }, void 0, !1, {
      fileName: "app/routes/admin/knowledge-base/bases/$id.tsx",
      lineNumber: 117,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime107.jsxDEV)(ActionResultModal, { actionData, showSuccess: !1 }, void 0, !1, {
      fileName: "app/routes/admin/knowledge-base/bases/$id.tsx",
      lineNumber: 118,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin/knowledge-base/bases/$id.tsx",
    lineNumber: 114,
    columnNumber: 5
  }, this);
}

// app/routes/admin/knowledge-base/bases/new.tsx
var new_exports2 = {};
__export(new_exports2, {
  action: () => action17,
  default: () => new_default2
});
var import_node25 = require("@remix-run/node"), import_react114 = require("@remix-run/react"), import_remix_typedjson19 = require("remix-typedjson");
var import_jsx_dev_runtime108 = require("react/jsx-dev-runtime"), action17 = async ({ request, params }) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  let form = await request.formData(), action18 = (_a = form.get("action")) == null ? void 0 : _a.toString();
  if (await KnowledgeBasePermissionsService_default.hasPermission({ action: action18 }), action18 === "new") {
    let slug = ((_b = form.get("slug")) == null ? void 0 : _b.toString()) ?? "", title = ((_c = form.get("title")) == null ? void 0 : _c.toString()) ?? "", description = ((_d = form.get("description")) == null ? void 0 : _d.toString()) ?? "", defaultLanguage = ((_e = form.get("defaultLanguage")) == null ? void 0 : _e.toString()) ?? "", layout = ((_f = form.get("layout")) == null ? void 0 : _f.toString()) ?? "", color = Number(((_g = form.get("color")) == null ? void 0 : _g.toString()) ?? ""), enabled = Boolean(form.get("enabled")), languages = form.getAll("languages[]").map((l) => l.toString()), links2 = form.getAll("links[]").map((l) => JSON.parse(l.toString())), logo = ((_h = form.get("logo")) == null ? void 0 : _h.toString()) ?? "", seoImage = ((_i = form.get("seoImage")) == null ? void 0 : _i.toString()) ?? "";
    if (languages.length === 0)
      return (0, import_node25.json)({ error: "At least one language is required" }, { status: 400 });
    if (await getKnowledgeBaseBySlug(slug))
      return (0, import_node25.json)({ error: "Slug already exists" }, { status: 400 });
    try {
      await createKnowledgeBase({
        slug,
        title,
        description,
        defaultLanguage,
        layout,
        color,
        enabled,
        languages: JSON.stringify(languages),
        links: JSON.stringify(links2),
        logo,
        seoImage
      });
    } catch (e) {
      return (0, import_node25.json)({ error: e.message }, { status: 400 });
    }
    return (0, import_node25.redirect)("/admin/knowledge-base/bases");
  } else
    return (0, import_node25.json)({ error: "Invalid form" }, { status: 400 });
};
function new_default2() {
  let actionData = (0, import_remix_typedjson19.useTypedActionData)(), submit = (0, import_react114.useSubmit)();
  function onDelete() {
    let form = new FormData();
    form.set("action", "delete"), submit(form, {
      method: "post"
    });
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime108.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime108.jsxDEV)(KnowledgeBaseForm, { onDelete }, void 0, !1, {
      fileName: "app/routes/admin/knowledge-base/bases/new.tsx",
      lineNumber: 76,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime108.jsxDEV)(ActionResultModal, { actionData, showSuccess: !1 }, void 0, !1, {
      fileName: "app/routes/admin/knowledge-base/bases/new.tsx",
      lineNumber: 78,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin/knowledge-base/bases/new.tsx",
    lineNumber: 75,
    columnNumber: 5
  }, this);
}

// app/routes/admin/knowledge-base/index.tsx
var knowledge_base_exports2 = {};
__export(knowledge_base_exports2, {
  default: () => knowledge_base_default2,
  loader: () => loader20,
  meta: () => meta7
});
var import_node26 = require("@remix-run/node"), import_react115 = require("@remix-run/react");

// app/utils/shared/NumberUtils.ts
var import_numeral = __toESM(require("numeral")), defaultCurrencySymbol = "$";
var numberFormat = (value) => {
  try {
    return (0, import_numeral.default)(value).format("0,0");
  } catch {
    return value == null ? void 0 : value.toString();
  }
}, decimalFormat = (value) => {
  try {
    return (0, import_numeral.default)(value).format("0,0.00");
  } catch {
    return value == null ? void 0 : value.toString();
  }
}, intFormat = (value) => {
  try {
    return (0, import_numeral.default)(value).format("0,0");
  } catch {
    return value == null ? void 0 : value.toString();
  }
}, pad = (num, size) => {
  let s = "000000000" + num;
  return s.substring(s.length - size);
}, custom = (value, format) => {
  try {
    return (0, import_numeral.default)(value).format(format);
  } catch {
    return value == null ? void 0 : value.toString();
  }
}, NumberUtils_default = {
  numberFormat,
  decimalFormat,
  intFormat,
  pad,
  defaultCurrencySymbol,
  custom
};

// app/routes/admin/knowledge-base/index.tsx
var import_jsx_dev_runtime109 = require("react/jsx-dev-runtime"), loader20 = async () => {
  let data = {
    metatags: [{ title: "Knowledge Base" }],
    summary: {
      kbsTotal: await countKnowledgeBases(),
      articlesTotal: await countKnowledgeBaseArticles(),
      categoriesTotal: await countKnowledgeBaseCategories(),
      kbsViews: await countAllKbsViews(),
      articlesViews: await countAllKbsArticleViews(),
      articlesUpvotes: await countAllKbsArticleUpvotes(),
      articlesDownvotes: await countAllKbsArticleDownvotes()
    }
  };
  return (0, import_node26.json)(data);
}, meta7 = ({ data }) => data == null ? void 0 : data.metatags;
function knowledge_base_default2() {
  let data = (0, import_react115.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime109.jsxDEV)("div", { className: "mx-auto mb-12 max-w-5xl space-y-5 px-4 py-4 sm:px-6 lg:px-8 xl:max-w-7xl", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime109.jsxDEV)("div", { className: "border-b border-gray-200 pb-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime109.jsxDEV)("h3", { className: "text-lg font-medium leading-6 text-gray-900", children: "Overview" }, void 0, !1, {
      fileName: "app/routes/admin/knowledge-base/index.tsx",
      lineNumber: 51,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin/knowledge-base/index.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime109.jsxDEV)("dl", { className: "grid gap-2 sm:grid-cols-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime109.jsxDEV)(SummaryCard, { title: "Knowledge Bases", value: data.summary.kbsTotal }, void 0, !1, {
        fileName: "app/routes/admin/knowledge-base/index.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime109.jsxDEV)(SummaryCard, { title: "Articles", value: data.summary.articlesTotal }, void 0, !1, {
        fileName: "app/routes/admin/knowledge-base/index.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime109.jsxDEV)(SummaryCard, { title: "Categories", value: data.summary.categoriesTotal }, void 0, !1, {
        fileName: "app/routes/admin/knowledge-base/index.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime109.jsxDEV)(SummaryCard, { title: "Articles Views", value: data.summary.articlesViews }, void 0, !1, {
        fileName: "app/routes/admin/knowledge-base/index.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime109.jsxDEV)(SummaryCard, { title: "Articles Upvotes", value: data.summary.articlesUpvotes }, void 0, !1, {
        fileName: "app/routes/admin/knowledge-base/index.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime109.jsxDEV)(SummaryCard, { title: "Articles Downvotes", value: data.summary.articlesDownvotes }, void 0, !1, {
        fileName: "app/routes/admin/knowledge-base/index.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin/knowledge-base/index.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin/knowledge-base/index.tsx",
    lineNumber: 49,
    columnNumber: 5
  }, this);
}
function SummaryCard({ title, value }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime109.jsxDEV)("div", { className: "overflow-hidden rounded-lg bg-white px-4 py-3 shadow ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime109.jsxDEV)("dt", { className: "truncate text-xs font-medium uppercase text-gray-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime109.jsxDEV)("div", { children: title }, void 0, !1, {
      fileName: "app/routes/admin/knowledge-base/index.tsx",
      lineNumber: 69,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin/knowledge-base/index.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime109.jsxDEV)("dd", { className: "mt-1 truncate text-2xl font-semibold text-gray-900", children: NumberUtils_default.intFormat(value) }, void 0, !1, {
      fileName: "app/routes/admin/knowledge-base/index.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin/knowledge-base/index.tsx",
    lineNumber: 67,
    columnNumber: 5
  }, this);
}

// app/routes/admin/index.tsx
var admin_exports2 = {};
__export(admin_exports2, {
  default: () => admin_default2
});
var import_jsx_dev_runtime110 = require("react/jsx-dev-runtime");
function admin_default2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime110.jsxDEV)("div", { className: "prose p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime110.jsxDEV)(
    "div",
    {
      dangerouslySetInnerHTML: {
        __html: marked(`
### What is Archieve KB?

This is the Knowledge Base feature of Archieve KB.
### Features

- **WYSIWYG** editor: [Tiptap](https://tiptap.dev/) editor with AI-powered suggestions
- **Multi-knowlege-base** support: Create multiple knowledge bases for different purposes.
- **Multi-language** support: Add categories and articles in multiple languages.
- **Simple Analytics**: Views, Upvotes, and Downvotes tracking.
- **Image storage** with Supabase: Upload article images to [Supabase](https://supabase.io) Storage.
- **SEO**: Add SEO title, description, and image to your articles.
- **Article Duplication**: Duplicate articles so you don't start from scratch.
- **Article Drafts**: Save your articles as drafts and publish them when you're ready.
- **Import and Export**: Don't lose your data, import and export your knowledge bases.

### License

Licensed under the MIT License.

`)
      }
    },
    void 0,
    !1,
    {
      fileName: "app/routes/admin/index.tsx",
      lineNumber: 6,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/admin/index.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  ErrorBoundary: () => ErrorBoundary6,
  default: () => Index4,
  loader: () => loader21
});
var import_node27 = require("@remix-run/node"), import_react120 = require("@remix-run/react"), import_remix_typedjson20 = require("remix-typedjson");

// app/components/Header.tsx
var import_react117 = require("react"), import_react118 = require("@headlessui/react"), import_outline = require("@heroicons/react/24/outline"), import_react119 = require("@remix-run/react");

// app/components/brand/Icon.tsx
var import_clsx47 = __toESM(require("clsx")), import_react116 = require("@remix-run/react");

// app/assets/img/icon-light.png
var icon_light_default = "/build/_assets/icon-light-I2QEXXH7.png";

// app/components/brand/Icon.tsx
var import_jsx_dev_runtime111 = require("react/jsx-dev-runtime");
function Icon({ className = "", size = "h-9" }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime111.jsxDEV)(import_react116.Link, { to: "/", className: (0, import_clsx47.default)(className, "flex"), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime111.jsxDEV)("img", { className: (0, import_clsx47.default)(size, "hidden w-auto dark:block"), src: icon_light_default, alt: "Logo" }, void 0, !1, {
      fileName: "app/components/brand/Icon.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime111.jsxDEV)("img", { className: (0, import_clsx47.default)(size, "w-auto dark:hidden"), src: icon_light_default, alt: "Logo" }, void 0, !1, {
      fileName: "app/components/brand/Icon.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/brand/Icon.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/components/Header.tsx
var import_jsx_dev_runtime112 = require("react/jsx-dev-runtime");
function Header() {
  let [mobileMenuOpen, setMobileMenuOpen] = (0, import_react117.useState)(!1), [navigation] = (0, import_react117.useState)([
    { name: "Home", href: "/" }
  ]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime112.jsxDEV)("header", { className: "bg-gray-50", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime112.jsxDEV)("nav", { className: "mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8", "aria-label": "Global", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime112.jsxDEV)("div", { className: "flex lg:flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime112.jsxDEV)(import_react119.Link, { to: "/", className: "-m-1.5 p-1.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime112.jsxDEV)(import_jsx_dev_runtime112.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime112.jsxDEV)(Logo, { className: "hidden lg:block", size: "h-9" }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 22,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime112.jsxDEV)(Icon, { className: "lg:hidden", size: "h-9" }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 23,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Header.tsx",
        lineNumber: 21,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 20,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime112.jsxDEV)("div", { className: "flex lg:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime112.jsxDEV)(
        "button",
        {
          type: "button",
          className: "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700",
          onClick: () => setMobileMenuOpen(!0),
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime112.jsxDEV)("span", { className: "sr-only", children: "Open main menu" }, void 0, !1, {
              fileName: "app/components/Header.tsx",
              lineNumber: 33,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime112.jsxDEV)(import_outline.Bars3Icon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, !1, {
              fileName: "app/components/Header.tsx",
              lineNumber: 34,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/Header.tsx",
          lineNumber: 28,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime112.jsxDEV)("div", { className: "hidden lg:flex lg:gap-x-12", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime112.jsxDEV)(import_react119.Link, { to: item.href, className: "text-sm font-semibold leading-6 text-gray-900", children: item.name }, item.name, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 39,
        columnNumber: 13
      }, this)) }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime112.jsxDEV)("div", { className: "hidden lg:flex lg:flex-1 lg:justify-end lg:space-x-4 lg:items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime112.jsxDEV)(import_react119.Link, { to: "/admin", className: "text-sm font-semibold leading-6 text-gray-900", children: [
        "Admin ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime112.jsxDEV)("span", { "aria-hidden": "true", children: "\u2192" }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 46,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Header.tsx",
        lineNumber: 45,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Header.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime112.jsxDEV)(import_react118.Dialog, { as: "div", className: "lg:hidden", open: mobileMenuOpen, onClose: setMobileMenuOpen, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime112.jsxDEV)("div", { className: "fixed inset-0 z-10" }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime112.jsxDEV)(import_react118.Dialog.Panel, { className: "fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime112.jsxDEV)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime112.jsxDEV)(import_react119.Link, { to: "/", className: "-m-1.5 p-1.5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime112.jsxDEV)("span", { className: "sr-only", children: "Archieve KB" }, void 0, !1, {
              fileName: "app/components/Header.tsx",
              lineNumber: 55,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime112.jsxDEV)(Icon, { className: "h-8" }, void 0, !1, {
              fileName: "app/components/Header.tsx",
              lineNumber: 57,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Header.tsx",
            lineNumber: 54,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime112.jsxDEV)("button", { type: "button", className: "-m-2.5 rounded-md p-2.5 text-gray-700", onClick: () => setMobileMenuOpen(!1), children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime112.jsxDEV)("span", { className: "sr-only", children: "Close menu" }, void 0, !1, {
              fileName: "app/components/Header.tsx",
              lineNumber: 60,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime112.jsxDEV)(import_outline.XMarkIcon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, !1, {
              fileName: "app/components/Header.tsx",
              lineNumber: 61,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Header.tsx",
            lineNumber: 59,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Header.tsx",
          lineNumber: 53,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime112.jsxDEV)("div", { className: "mt-6 flow-root", children: /* @__PURE__ */ (0, import_jsx_dev_runtime112.jsxDEV)("div", { className: "-my-6 divide-y divide-gray-500/10", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime112.jsxDEV)("div", { className: "space-y-2 py-6", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime112.jsxDEV)(
            import_react119.Link,
            {
              to: item.href,
              className: "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50",
              children: item.name
            },
            item.name,
            !1,
            {
              fileName: "app/components/Header.tsx",
              lineNumber: 68,
              columnNumber: 19
            },
            this
          )) }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 66,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime112.jsxDEV)("div", { className: "py-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime112.jsxDEV)(import_react119.Link, { to: "/admin", className: "-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50", children: "Admin" }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 79,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 77,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Header.tsx",
          lineNumber: 65,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 64,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Header.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Header.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Header.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var import_jsx_dev_runtime113 = require("react/jsx-dev-runtime"), loader21 = async () => {
  let data = {
    knowledgeBases: await KnowledgeBaseService_default.getAll({ enabled: !0 })
  };
  return (0, import_node27.json)(data);
};
function Index4() {
  let data = (0, import_remix_typedjson20.useTypedLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime113.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime113.jsxDEV)(Header, {}, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime113.jsxDEV)("div", { className: "relative mx-auto flex flex-col items-center justify-center space-y-8 py-6 px-8 max-w-5xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime113.jsxDEV)("h1", { className: "text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl", children: "Archieve KB" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime113.jsxDEV)("p", { className: "text-center text-2xl text-gray-800", children: "Organize your knowledge bases with categories and articles" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime113.jsxDEV)("div", { className: "mt-10 flex items-center justify-center gap-x-6 w-full max-w-md", children: data.knowledgeBases.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime113.jsxDEV)("div", { children: "No knowledge bases found" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 31,
        columnNumber: 13
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime113.jsxDEV)("div", { className: "space-y-6 flex flex-col w-full", children: data.knowledgeBases.map((kb, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime113.jsxDEV)(
        import_react120.Link,
        {
          to: `/${kb == null ? void 0 : kb.slug}`,
          className: "text-lg relative block rounded-lg border-2 border-dashed border-gray-300 px-12 py-6 text-center hover:border-gray-400 focus:outline-none focus:border-solid",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime113.jsxDEV)("div", { className: "flex items-center space-x-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime113.jsxDEV)("div", { className: "flex-grow", children: [
            kb.title,
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime113.jsxDEV)("span", { className: "text-gray-500 text-sm" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 43,
              columnNumber: 36
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 42,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 41,
            columnNumber: 21
          }, this)
        },
        kb.slug,
        !1,
        {
          fileName: "app/routes/index.tsx",
          lineNumber: 36,
          columnNumber: 19
        },
        this
      )) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 33,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
function ErrorBoundary6() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime113.jsxDEV)(ServerError, {}, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 58,
    columnNumber: 10
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "afe8eaf8", entry: { module: "/build/entry.client-VYBMY5M7.js", imports: ["/build/_shared/chunk-F6BDN6DI.js", "/build/_shared/chunk-UEF5622E.js", "/build/_shared/chunk-TKJ56M4R.js", "/build/_shared/chunk-T46ZX52X.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-WPZKQP2B.js", imports: ["/build/_shared/chunk-YZL5EPTV.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$slug.($lang)": { id: "routes/$slug.($lang)", parentId: "root", path: ":slug/:lang?", index: void 0, caseSensitive: void 0, module: "/build/routes/$slug.($lang)-4BDF5UBH.js", imports: ["/build/_shared/chunk-G7YK4E4X.js", "/build/_shared/chunk-7DRDZPCD.js", "/build/_shared/chunk-4BCRGU6P.js", "/build/_shared/chunk-BXJOJZ6F.js", "/build/_shared/chunk-WQR2CT3A.js", "/build/_shared/chunk-GLWWVLQP.js", "/build/_shared/chunk-KT2KT7KP.js", "/build/_shared/chunk-LEXNYWDR.js", "/build/_shared/chunk-5SUPQYJE.js", "/build/_shared/chunk-77DOWEWK.js", "/build/_shared/chunk-F4XNRYN3.js", "/build/_shared/chunk-HLHB2XRP.js", "/build/_shared/chunk-6OU4J75P.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/$slug.($lang).articles.$article": { id: "routes/$slug.($lang).articles.$article", parentId: "root", path: ":slug/:lang?/articles/:article", index: void 0, caseSensitive: void 0, module: "/build/routes/$slug.($lang).articles.$article-WDN2VDWY.js", imports: ["/build/_shared/chunk-2FPQ64TN.js", "/build/_shared/chunk-DVSOHV6S.js", "/build/_shared/chunk-W34Q662J.js", "/build/_shared/chunk-32A55DVW.js", "/build/_shared/chunk-BXJOJZ6F.js", "/build/_shared/chunk-WQR2CT3A.js", "/build/_shared/chunk-GLWWVLQP.js", "/build/_shared/chunk-KT2KT7KP.js", "/build/_shared/chunk-LEXNYWDR.js", "/build/_shared/chunk-5SUPQYJE.js", "/build/_shared/chunk-77DOWEWK.js", "/build/_shared/chunk-F4XNRYN3.js", "/build/_shared/chunk-3CZPTTMZ.js", "/build/_shared/chunk-HLHB2XRP.js", "/build/_shared/chunk-6OU4J75P.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/$slug.($lang).categories.$category": { id: "routes/$slug.($lang).categories.$category", parentId: "root", path: ":slug/:lang?/categories/:category", index: void 0, caseSensitive: void 0, module: "/build/routes/$slug.($lang).categories.$category-AXH4N6VZ.js", imports: ["/build/_shared/chunk-32A55DVW.js", "/build/_shared/chunk-G7YK4E4X.js", "/build/_shared/chunk-7DRDZPCD.js", "/build/_shared/chunk-4BCRGU6P.js", "/build/_shared/chunk-GLWWVLQP.js", "/build/_shared/chunk-KT2KT7KP.js", "/build/_shared/chunk-LEXNYWDR.js", "/build/_shared/chunk-5SUPQYJE.js", "/build/_shared/chunk-77DOWEWK.js", "/build/_shared/chunk-F4XNRYN3.js", "/build/_shared/chunk-3CZPTTMZ.js", "/build/_shared/chunk-HLHB2XRP.js", "/build/_shared/chunk-6OU4J75P.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/admin": { id: "routes/admin", parentId: "root", path: "admin", index: void 0, caseSensitive: void 0, module: "/build/routes/admin-ASU33Q3J.js", imports: ["/build/_shared/chunk-WCRDTLRB.js", "/build/_shared/chunk-PDFECUU5.js", "/build/_shared/chunk-MQJJFYDS.js", "/build/_shared/chunk-SPXL2D7W.js", "/build/_shared/chunk-3CZPTTMZ.js", "/build/_shared/chunk-HLHB2XRP.js", "/build/_shared/chunk-6OU4J75P.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/index": { id: "routes/admin/index", parentId: "routes/admin", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/admin/index-X4DLPM4V.js", imports: ["/build/_shared/chunk-DVSOHV6S.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/knowledge-base": { id: "routes/admin/knowledge-base", parentId: "routes/admin", path: "knowledge-base", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/knowledge-base-MJDZFX4M.js", imports: ["/build/_shared/chunk-42J64ETF.js", "/build/_shared/chunk-MYHMIGSC.js", "/build/_shared/chunk-5SUPQYJE.js", "/build/_shared/chunk-77DOWEWK.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/admin/knowledge-base/bases": { id: "routes/admin/knowledge-base/bases", parentId: "routes/admin/knowledge-base", path: "bases", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/knowledge-base/bases-7MDZKMDR.js", imports: ["/build/_shared/chunk-FKSWAYI7.js", "/build/_shared/chunk-V6AO6MVN.js", "/build/_shared/chunk-VETZYZSA.js", "/build/_shared/chunk-N6FKCDEO.js", "/build/_shared/chunk-E2MEN3UG.js", "/build/_shared/chunk-AIL3Y3SN.js", "/build/_shared/chunk-AHB5NUPE.js", "/build/_shared/chunk-NQVL3JC2.js", "/build/_shared/chunk-W34Q662J.js", "/build/_shared/chunk-7DRDZPCD.js", "/build/_shared/chunk-4BCRGU6P.js", "/build/_shared/chunk-YZL5EPTV.js", "/build/_shared/chunk-PDFECUU5.js", "/build/_shared/chunk-MQJJFYDS.js", "/build/_shared/chunk-SPXL2D7W.js", "/build/_shared/chunk-6OU4J75P.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/knowledge-base/bases.$slug/articles": { id: "routes/admin/knowledge-base/bases.$slug/articles", parentId: "routes/admin/knowledge-base", path: "bases/:slug/articles", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/knowledge-base/bases.$slug/articles-KGMG5X76.js", imports: ["/build/_shared/chunk-GNWM2AVD.js", "/build/_shared/chunk-ZVVANLS7.js", "/build/_shared/chunk-32A55DVW.js", "/build/_shared/chunk-F4XNRYN3.js", "/build/_shared/chunk-YZL5EPTV.js", "/build/_shared/chunk-3CZPTTMZ.js", "/build/_shared/chunk-6OU4J75P.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/knowledge-base/bases.$slug/articles.$lang": { id: "routes/admin/knowledge-base/bases.$slug/articles.$lang", parentId: "routes/admin/knowledge-base", path: "bases/:slug/articles/:lang", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/knowledge-base/bases.$slug/articles.$lang-VYZ52DRB.js", imports: ["/build/_shared/chunk-FKSWAYI7.js", "/build/_shared/chunk-VETZYZSA.js", "/build/_shared/chunk-GNWM2AVD.js", "/build/_shared/chunk-537CJWXF.js", "/build/_shared/chunk-DTP5YZIZ.js", "/build/_shared/chunk-4SGUX4ZU.js", "/build/_shared/chunk-ZVVANLS7.js", "/build/_shared/chunk-N6FKCDEO.js", "/build/_shared/chunk-E2MEN3UG.js", "/build/_shared/chunk-AIL3Y3SN.js", "/build/_shared/chunk-AHB5NUPE.js", "/build/_shared/chunk-OQJIRZLG.js", "/build/_shared/chunk-NQVL3JC2.js", "/build/_shared/chunk-32A55DVW.js", "/build/_shared/chunk-7DRDZPCD.js", "/build/_shared/chunk-4BCRGU6P.js", "/build/_shared/chunk-F4XNRYN3.js", "/build/_shared/chunk-YZL5EPTV.js", "/build/_shared/chunk-PDFECUU5.js", "/build/_shared/chunk-MQJJFYDS.js", "/build/_shared/chunk-SPXL2D7W.js", "/build/_shared/chunk-3CZPTTMZ.js", "/build/_shared/chunk-6OU4J75P.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/knowledge-base/bases.$slug/articles.$lang.$id": { id: "routes/admin/knowledge-base/bases.$slug/articles.$lang.$id", parentId: "routes/admin/knowledge-base", path: "bases/:slug/articles/:lang/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/knowledge-base/bases.$slug/articles.$lang.$id-SXBCD225.js", imports: ["/build/_shared/chunk-GNWM2AVD.js", "/build/_shared/chunk-537CJWXF.js", "/build/_shared/chunk-DTP5YZIZ.js", "/build/_shared/chunk-ZVVANLS7.js", "/build/_shared/chunk-AHB5NUPE.js", "/build/_shared/chunk-NQVL3JC2.js", "/build/_shared/chunk-2FPQ64TN.js", "/build/_shared/chunk-DVSOHV6S.js", "/build/_shared/chunk-W34Q662J.js", "/build/_shared/chunk-32A55DVW.js", "/build/_shared/chunk-7DRDZPCD.js", "/build/_shared/chunk-4BCRGU6P.js", "/build/_shared/chunk-YZL5EPTV.js", "/build/_shared/chunk-MQJJFYDS.js", "/build/_shared/chunk-SPXL2D7W.js", "/build/_shared/chunk-3CZPTTMZ.js", "/build/_shared/chunk-6OU4J75P.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/knowledge-base/bases.$slug/articles.$lang.$id.edit": { id: "routes/admin/knowledge-base/bases.$slug/articles.$lang.$id.edit", parentId: "routes/admin/knowledge-base", path: "bases/:slug/articles/:lang/:id/edit", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/knowledge-base/bases.$slug/articles.$lang.$id.edit-NM3FN2RQ.js", imports: ["/build/_shared/chunk-GNWM2AVD.js", "/build/_shared/chunk-537CJWXF.js", "/build/_shared/chunk-DTP5YZIZ.js", "/build/_shared/chunk-ZVVANLS7.js", "/build/_shared/chunk-QBZ3YRAH.js", "/build/_shared/chunk-AIL3Y3SN.js", "/build/_shared/chunk-AHB5NUPE.js", "/build/_shared/chunk-NQVL3JC2.js", "/build/_shared/chunk-32A55DVW.js", "/build/_shared/chunk-7DRDZPCD.js", "/build/_shared/chunk-4BCRGU6P.js", "/build/_shared/chunk-YZL5EPTV.js", "/build/_shared/chunk-PDFECUU5.js", "/build/_shared/chunk-MQJJFYDS.js", "/build/_shared/chunk-SPXL2D7W.js", "/build/_shared/chunk-3CZPTTMZ.js", "/build/_shared/chunk-6OU4J75P.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/knowledge-base/bases.$slug/articles.$lang.$id/settings": { id: "routes/admin/knowledge-base/bases.$slug/articles.$lang.$id/settings", parentId: "routes/admin/knowledge-base/bases.$slug/articles.$lang.$id", path: "settings", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/knowledge-base/bases.$slug/articles.$lang.$id/settings-WNPC633L.js", imports: ["/build/_shared/chunk-WK5W4NNR.js", "/build/_shared/chunk-4QF76PYA.js", "/build/_shared/chunk-E2MEN3UG.js", "/build/_shared/chunk-QBZ3YRAH.js", "/build/_shared/chunk-AIL3Y3SN.js", "/build/_shared/chunk-OQJIRZLG.js", "/build/_shared/chunk-PDFECUU5.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/knowledge-base/bases.$slug/categories": { id: "routes/admin/knowledge-base/bases.$slug/categories", parentId: "routes/admin/knowledge-base", path: "bases/:slug/categories", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/knowledge-base/bases.$slug/categories-T3PPIO2F.js", imports: ["/build/_shared/chunk-GNWM2AVD.js", "/build/_shared/chunk-OQJIRZLG.js", "/build/_shared/chunk-32A55DVW.js", "/build/_shared/chunk-F4XNRYN3.js", "/build/_shared/chunk-YZL5EPTV.js", "/build/_shared/chunk-3CZPTTMZ.js", "/build/_shared/chunk-6OU4J75P.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/knowledge-base/bases.$slug/categories.$lang": { id: "routes/admin/knowledge-base/bases.$slug/categories.$lang", parentId: "routes/admin/knowledge-base", path: "bases/:slug/categories/:lang", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/knowledge-base/bases.$slug/categories.$lang-UMUVMPZA.js", imports: ["/build/_shared/chunk-VETZYZSA.js", "/build/_shared/chunk-GNWM2AVD.js", "/build/_shared/chunk-537CJWXF.js", "/build/_shared/chunk-DTP5YZIZ.js", "/build/_shared/chunk-4QF76PYA.js", "/build/_shared/chunk-4SGUX4ZU.js", "/build/_shared/chunk-CXR4U3KY.js", "/build/_shared/chunk-OQJIRZLG.js", "/build/_shared/chunk-NQVL3JC2.js", "/build/_shared/chunk-32A55DVW.js", "/build/_shared/chunk-F4XNRYN3.js", "/build/_shared/chunk-YZL5EPTV.js", "/build/_shared/chunk-MQJJFYDS.js", "/build/_shared/chunk-SPXL2D7W.js", "/build/_shared/chunk-3CZPTTMZ.js", "/build/_shared/chunk-6OU4J75P.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/knowledge-base/bases.$slug/categories.$lang/$id": { id: "routes/admin/knowledge-base/bases.$slug/categories.$lang/$id", parentId: "routes/admin/knowledge-base/bases.$slug/categories.$lang", path: ":id", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/knowledge-base/bases.$slug/categories.$lang/$id-SITZCGDS.js", imports: ["/build/_shared/chunk-KFLSKEQE.js", "/build/_shared/chunk-ZVVANLS7.js", "/build/_shared/chunk-35AH7SPI.js", "/build/_shared/chunk-N6FKCDEO.js", "/build/_shared/chunk-E2MEN3UG.js", "/build/_shared/chunk-QBZ3YRAH.js", "/build/_shared/chunk-AIL3Y3SN.js", "/build/_shared/chunk-AHB5NUPE.js", "/build/_shared/chunk-7DRDZPCD.js", "/build/_shared/chunk-4BCRGU6P.js", "/build/_shared/chunk-PDFECUU5.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/knowledge-base/bases.$slug/categories.$lang/$id.sections.$section": { id: "routes/admin/knowledge-base/bases.$slug/categories.$lang/$id.sections.$section", parentId: "routes/admin/knowledge-base/bases.$slug/categories.$lang", path: ":id/sections/:section", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/knowledge-base/bases.$slug/categories.$lang/$id.sections.$section-VFG7OAD6.js", imports: ["/build/_shared/chunk-2AXTBQWV.js", "/build/_shared/chunk-ZVVANLS7.js", "/build/_shared/chunk-35AH7SPI.js", "/build/_shared/chunk-N6FKCDEO.js", "/build/_shared/chunk-E2MEN3UG.js", "/build/_shared/chunk-QBZ3YRAH.js", "/build/_shared/chunk-AIL3Y3SN.js", "/build/_shared/chunk-AHB5NUPE.js", "/build/_shared/chunk-7DRDZPCD.js", "/build/_shared/chunk-4BCRGU6P.js", "/build/_shared/chunk-PDFECUU5.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/knowledge-base/bases.$slug/categories.$lang/$id.sections.new": { id: "routes/admin/knowledge-base/bases.$slug/categories.$lang/$id.sections.new", parentId: "routes/admin/knowledge-base/bases.$slug/categories.$lang", path: ":id/sections/new", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/knowledge-base/bases.$slug/categories.$lang/$id.sections.new-W3XHW7PL.js", imports: ["/build/_shared/chunk-2AXTBQWV.js", "/build/_shared/chunk-35AH7SPI.js", "/build/_shared/chunk-N6FKCDEO.js", "/build/_shared/chunk-E2MEN3UG.js", "/build/_shared/chunk-QBZ3YRAH.js", "/build/_shared/chunk-AIL3Y3SN.js", "/build/_shared/chunk-AHB5NUPE.js", "/build/_shared/chunk-7DRDZPCD.js", "/build/_shared/chunk-4BCRGU6P.js", "/build/_shared/chunk-PDFECUU5.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/knowledge-base/bases.$slug/categories.$lang/new": { id: "routes/admin/knowledge-base/bases.$slug/categories.$lang/new", parentId: "routes/admin/knowledge-base/bases.$slug/categories.$lang", path: "new", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/knowledge-base/bases.$slug/categories.$lang/new-7SLKQGFK.js", imports: ["/build/_shared/chunk-KFLSKEQE.js", "/build/_shared/chunk-35AH7SPI.js", "/build/_shared/chunk-N6FKCDEO.js", "/build/_shared/chunk-E2MEN3UG.js", "/build/_shared/chunk-QBZ3YRAH.js", "/build/_shared/chunk-AIL3Y3SN.js", "/build/_shared/chunk-AHB5NUPE.js", "/build/_shared/chunk-7DRDZPCD.js", "/build/_shared/chunk-4BCRGU6P.js", "/build/_shared/chunk-PDFECUU5.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/knowledge-base/bases.import": { id: "routes/admin/knowledge-base/bases.import", parentId: "routes/admin/knowledge-base", path: "bases/import", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/knowledge-base/bases.import-UJOGYUOY.js", imports: ["/build/_shared/chunk-GNWM2AVD.js", "/build/_shared/chunk-N6FKCDEO.js", "/build/_shared/chunk-E2MEN3UG.js", "/build/_shared/chunk-QBZ3YRAH.js", "/build/_shared/chunk-AIL3Y3SN.js", "/build/_shared/chunk-AHB5NUPE.js", "/build/_shared/chunk-NQVL3JC2.js", "/build/_shared/chunk-32A55DVW.js", "/build/_shared/chunk-7DRDZPCD.js", "/build/_shared/chunk-4BCRGU6P.js", "/build/_shared/chunk-YZL5EPTV.js", "/build/_shared/chunk-PDFECUU5.js", "/build/_shared/chunk-MQJJFYDS.js", "/build/_shared/chunk-SPXL2D7W.js", "/build/_shared/chunk-3CZPTTMZ.js", "/build/_shared/chunk-6OU4J75P.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/admin/knowledge-base/bases/$id": { id: "routes/admin/knowledge-base/bases/$id", parentId: "routes/admin/knowledge-base/bases", path: ":id", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/knowledge-base/bases/$id-XRR2XPGI.js", imports: ["/build/_shared/chunk-EPWTPT7R.js", "/build/_shared/chunk-WK5W4NNR.js", "/build/_shared/chunk-537CJWXF.js", "/build/_shared/chunk-DTP5YZIZ.js", "/build/_shared/chunk-4QF76PYA.js", "/build/_shared/chunk-QBZ3YRAH.js", "/build/_shared/chunk-LEXNYWDR.js", "/build/_shared/chunk-77DOWEWK.js", "/build/_shared/chunk-F4XNRYN3.js", "/build/_shared/chunk-3CZPTTMZ.js", "/build/_shared/chunk-HLHB2XRP.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/knowledge-base/bases/new": { id: "routes/admin/knowledge-base/bases/new", parentId: "routes/admin/knowledge-base/bases", path: "new", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/knowledge-base/bases/new-4A3NGLCX.js", imports: ["/build/_shared/chunk-EPWTPT7R.js", "/build/_shared/chunk-WK5W4NNR.js", "/build/_shared/chunk-537CJWXF.js", "/build/_shared/chunk-DTP5YZIZ.js", "/build/_shared/chunk-QBZ3YRAH.js", "/build/_shared/chunk-LEXNYWDR.js", "/build/_shared/chunk-77DOWEWK.js", "/build/_shared/chunk-F4XNRYN3.js", "/build/_shared/chunk-3CZPTTMZ.js", "/build/_shared/chunk-HLHB2XRP.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/knowledge-base/danger": { id: "routes/admin/knowledge-base/danger", parentId: "routes/admin/knowledge-base", path: "danger", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/knowledge-base/danger-37E55KKK.js", imports: ["/build/_shared/chunk-DTP5YZIZ.js", "/build/_shared/chunk-AHB5NUPE.js", "/build/_shared/chunk-NQVL3JC2.js", "/build/_shared/chunk-4BCRGU6P.js", "/build/_shared/chunk-MQJJFYDS.js", "/build/_shared/chunk-SPXL2D7W.js", "/build/_shared/chunk-6OU4J75P.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/knowledge-base/index": { id: "routes/admin/knowledge-base/index", parentId: "routes/admin/knowledge-base", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/admin/knowledge-base/index-YH7GIWKI.js", imports: ["/build/_shared/chunk-V6AO6MVN.js", "/build/_shared/chunk-ZVVANLS7.js", "/build/_shared/chunk-OQJIRZLG.js", "/build/_shared/chunk-WQR2CT3A.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api.ai/generate": { id: "routes/api.ai/generate", parentId: "root", path: "api/ai/generate", index: void 0, caseSensitive: void 0, module: "/build/routes/api.ai/generate-USBJXB7Y.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api.ai/upload": { id: "routes/api.ai/upload", parentId: "root", path: "api/ai/upload", index: void 0, caseSensitive: void 0, module: "/build/routes/api.ai/upload-C27E2IH6.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-2WVLTR2Z.js", imports: ["/build/_shared/chunk-NQVL3JC2.js", "/build/_shared/chunk-KT2KT7KP.js", "/build/_shared/chunk-5SUPQYJE.js", "/build/_shared/chunk-77DOWEWK.js", "/build/_shared/chunk-SPXL2D7W.js", "/build/_shared/chunk-6OU4J75P.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-AFE8EAF8.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !0, unstable_vanillaExtract: !1, v2_errorBoundary: !0, v2_meta: !0, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/$slug.($lang).categories.$category": {
    id: "routes/$slug.($lang).categories.$category",
    parentId: "root",
    path: ":slug/:lang?/categories/:category",
    index: void 0,
    caseSensitive: void 0,
    module: slug_lang_categories_category_exports
  },
  "routes/$slug.($lang).articles.$article": {
    id: "routes/$slug.($lang).articles.$article",
    parentId: "root",
    path: ":slug/:lang?/articles/:article",
    index: void 0,
    caseSensitive: void 0,
    module: slug_lang_articles_article_exports
  },
  "routes/api.ai/generate": {
    id: "routes/api.ai/generate",
    parentId: "root",
    path: "api/ai/generate",
    index: void 0,
    caseSensitive: void 0,
    module: generate_exports
  },
  "routes/$slug.($lang)": {
    id: "routes/$slug.($lang)",
    parentId: "root",
    path: ":slug/:lang?",
    index: void 0,
    caseSensitive: void 0,
    module: slug_lang_exports
  },
  "routes/api.ai/upload": {
    id: "routes/api.ai/upload",
    parentId: "root",
    path: "api/ai/upload",
    index: void 0,
    caseSensitive: void 0,
    module: upload_exports
  },
  "routes/admin": {
    id: "routes/admin",
    parentId: "root",
    path: "admin",
    index: void 0,
    caseSensitive: void 0,
    module: admin_exports
  },
  "routes/admin/knowledge-base": {
    id: "routes/admin/knowledge-base",
    parentId: "routes/admin",
    path: "knowledge-base",
    index: void 0,
    caseSensitive: void 0,
    module: knowledge_base_exports
  },
  "routes/admin/knowledge-base/bases.$slug/articles.$lang.$id.edit": {
    id: "routes/admin/knowledge-base/bases.$slug/articles.$lang.$id.edit",
    parentId: "routes/admin/knowledge-base",
    path: "bases/:slug/articles/:lang/:id/edit",
    index: void 0,
    caseSensitive: void 0,
    module: articles_lang_id_edit_exports
  },
  "routes/admin/knowledge-base/bases.$slug/articles.$lang.$id": {
    id: "routes/admin/knowledge-base/bases.$slug/articles.$lang.$id",
    parentId: "routes/admin/knowledge-base",
    path: "bases/:slug/articles/:lang/:id",
    index: void 0,
    caseSensitive: void 0,
    module: articles_lang_id_exports
  },
  "routes/admin/knowledge-base/bases.$slug/articles.$lang.$id/settings": {
    id: "routes/admin/knowledge-base/bases.$slug/articles.$lang.$id/settings",
    parentId: "routes/admin/knowledge-base/bases.$slug/articles.$lang.$id",
    path: "settings",
    index: void 0,
    caseSensitive: void 0,
    module: settings_exports
  },
  "routes/admin/knowledge-base/bases.$slug/categories.$lang": {
    id: "routes/admin/knowledge-base/bases.$slug/categories.$lang",
    parentId: "routes/admin/knowledge-base",
    path: "bases/:slug/categories/:lang",
    index: void 0,
    caseSensitive: void 0,
    module: categories_lang_exports
  },
  "routes/admin/knowledge-base/bases.$slug/categories.$lang/$id.sections.$section": {
    id: "routes/admin/knowledge-base/bases.$slug/categories.$lang/$id.sections.$section",
    parentId: "routes/admin/knowledge-base/bases.$slug/categories.$lang",
    path: ":id/sections/:section",
    index: void 0,
    caseSensitive: void 0,
    module: id_sections_section_exports
  },
  "routes/admin/knowledge-base/bases.$slug/categories.$lang/$id.sections.new": {
    id: "routes/admin/knowledge-base/bases.$slug/categories.$lang/$id.sections.new",
    parentId: "routes/admin/knowledge-base/bases.$slug/categories.$lang",
    path: ":id/sections/new",
    index: void 0,
    caseSensitive: void 0,
    module: id_sections_new_exports
  },
  "routes/admin/knowledge-base/bases.$slug/categories.$lang/$id": {
    id: "routes/admin/knowledge-base/bases.$slug/categories.$lang/$id",
    parentId: "routes/admin/knowledge-base/bases.$slug/categories.$lang",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports
  },
  "routes/admin/knowledge-base/bases.$slug/categories.$lang/new": {
    id: "routes/admin/knowledge-base/bases.$slug/categories.$lang/new",
    parentId: "routes/admin/knowledge-base/bases.$slug/categories.$lang",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  },
  "routes/admin/knowledge-base/bases.$slug/articles.$lang": {
    id: "routes/admin/knowledge-base/bases.$slug/articles.$lang",
    parentId: "routes/admin/knowledge-base",
    path: "bases/:slug/articles/:lang",
    index: void 0,
    caseSensitive: void 0,
    module: articles_lang_exports
  },
  "routes/admin/knowledge-base/bases.$slug/categories": {
    id: "routes/admin/knowledge-base/bases.$slug/categories",
    parentId: "routes/admin/knowledge-base",
    path: "bases/:slug/categories",
    index: void 0,
    caseSensitive: void 0,
    module: categories_exports
  },
  "routes/admin/knowledge-base/bases.$slug/articles": {
    id: "routes/admin/knowledge-base/bases.$slug/articles",
    parentId: "routes/admin/knowledge-base",
    path: "bases/:slug/articles",
    index: void 0,
    caseSensitive: void 0,
    module: articles_exports
  },
  "routes/admin/knowledge-base/bases.import": {
    id: "routes/admin/knowledge-base/bases.import",
    parentId: "routes/admin/knowledge-base",
    path: "bases/import",
    index: void 0,
    caseSensitive: void 0,
    module: bases_import_exports
  },
  "routes/admin/knowledge-base/danger": {
    id: "routes/admin/knowledge-base/danger",
    parentId: "routes/admin/knowledge-base",
    path: "danger",
    index: void 0,
    caseSensitive: void 0,
    module: danger_exports
  },
  "routes/admin/knowledge-base/bases": {
    id: "routes/admin/knowledge-base/bases",
    parentId: "routes/admin/knowledge-base",
    path: "bases",
    index: void 0,
    caseSensitive: void 0,
    module: bases_exports
  },
  "routes/admin/knowledge-base/bases/$id": {
    id: "routes/admin/knowledge-base/bases/$id",
    parentId: "routes/admin/knowledge-base/bases",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports2
  },
  "routes/admin/knowledge-base/bases/new": {
    id: "routes/admin/knowledge-base/bases/new",
    parentId: "routes/admin/knowledge-base/bases",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports2
  },
  "routes/admin/knowledge-base/index": {
    id: "routes/admin/knowledge-base/index",
    parentId: "routes/admin/knowledge-base",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: knowledge_base_exports2
  },
  "routes/admin/index": {
    id: "routes/admin/index",
    parentId: "routes/admin",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: admin_exports2
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
