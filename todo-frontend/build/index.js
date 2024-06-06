var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// tailwind.config.js
var require_tailwind_config = __commonJS({
  "tailwind.config.js"(exports, module2) {
    init_react();
    module2.exports = {
      content: ["./src/**/*.{js,jsx,ts,tsx}"],
      theme: {
        extend: {
          colors: {
            primary: {
              400: "#191933",
              600: "#10101d"
            },
            secondary: "#ee9ca7",
            light: "#ffffff80"
          },
          boxShadow: {
            checkbox: "0 0 0 3px rgba(238, 156, 167, 0.2)",
            button: "0 0 12px rgba(238, 156, 167,0.4)"
          },
          spacing: {
            7.5: "30px"
          }
        }
      },
      plugins: []
    };
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
var import_server2 = __toESM(require("@twind/with-remix/server"));
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  markup = (0, import_server2.default)(markup);
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/akshaysharma/Desktop/todo-frontend/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  meta: () => meta
});
init_react();
var import_remix2 = __toESM(require_remix());
var import_with_remix = __toESM(require("@twind/with-remix"));

// twind.config.js
init_react();
var import_twind = require("twind");
var import_preset_autoprefix = __toESM(require("@twind/preset-autoprefix"));
var import_preset_tailwind = __toESM(require("@twind/preset-tailwind"));
var import_tailwind_config = __toESM(require_tailwind_config());
var twind_config_default = (0, import_twind.defineConfig)(__spreadProps(__spreadValues({}, import_tailwind_config.default), {
  presets: [(0, import_preset_autoprefix.default)(), (0, import_preset_tailwind.default)()]
}));

// route:/Users/akshaysharma/Desktop/todo-frontend/app/root.tsx
(0, import_with_remix.default)(twind_config_default);
var meta = () => {
  return { title: "New Remix App" };
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
}

// route:/Users/akshaysharma/Desktop/todo-frontend/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
init_react();
var import_react2 = require("react");

// app/api/api.ts
init_react();
var import_axios = __toESM(require("axios"));
var API_BASE_URL = "http://localhost:5000/api";
var fetchTodos = async () => {
  try {
    const response = await import_axios.default.get(`${API_BASE_URL}/todo`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch todos:", error);
    throw error;
  }
};
var addTodo = async (todo) => {
  try {
    console.log("fxcgfhjgfdcg", todo);
    const response = await import_axios.default.post(`${API_BASE_URL}/todo`, todo);
    return response.data;
  } catch (error) {
    console.error("Failed to add todo:", error);
    throw error;
  }
};
var updateTodo = async (updatedTodo) => {
  try {
    console.log("bad reques", updatedTodo);
    const response = await import_axios.default.put(`${API_BASE_URL}/todo`, updatedTodo, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    return response.data;
  } catch (error) {
    console.error("Failed to update todo:", error);
    throw error;
  }
};
var deleteTodo = async (id) => {
  try {
    await import_axios.default.delete(`${API_BASE_URL}/todo/${id}`);
  } catch (error) {
    console.error("Failed to delete todo:", error);
    throw error;
  }
};

// app/components/Todo.tsx
init_react();

// app/assets/edit.svg
var edit_default = "/build/_assets/edit-FCXHMVTR.svg";

// app/assets/trash.svg
var trash_default = "/build/_assets/trash-D5SXFJQL.svg";

// app/components/Todo.tsx
var import_react = require("react");
function Todo(props) {
  const { todo, setFetchAgain, fetchAgain, setNewTask, setTitle, setDescription, setEditTask, setId } = props;
  const [render, setRender] = (0, import_react.useState)(true);
  const updateStatus = (updatedTodo) => {
    updatedTodo.status = !updatedTodo.status;
    console.log("Updating Todo:", updatedTodo);
    updateTodo(updatedTodo).then((response) => {
      setRender(!render);
      console.log("Update Successful:", response);
    }).catch((error) => {
      console.error("Failed to update todo status:", error);
      updatedTodo.status = !updatedTodo.status;
    });
  };
  const deleteTask = (id, event) => {
    event.stopPropagation();
    console.log("Delete Task:", id);
    deleteTodo(id).then((response) => {
      setFetchAgain(!fetchAgain);
      console.log("Update Successful:", response);
    }).catch((error) => {
      console.error("Failed to update todo status:", error);
    });
  };
  const editTask = (todo2) => {
    setId(todo2.id);
    setTitle(todo2.title);
    setDescription(todo2.description);
    setNewTask(true);
    setEditTask(true);
  };
  return /* @__PURE__ */ React.createElement("li", {
    className: "relative flex items-center text-white bg-gray-700 mb-3 p-2 rounded-lg",
    key: todo.id,
    onClick: () => editTask(todo)
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: `input-${todo.id}`,
    className: "group cursor-pointer flex items-center"
  }, /* @__PURE__ */ React.createElement("input", {
    id: `input-${todo.id}`,
    className: "appearance-none w-3.5 h-3.5 mr-2 border rounded-full ease-linear duration-400 group-hover:shadow-checkbox group-hover:border-secondary checked:border-secondary checked:bg-secondary",
    type: "checkbox",
    checked: todo.status,
    onChange: () => updateStatus(todo)
  }), /* @__PURE__ */ React.createElement("span", {
    className: `mr-2 ${todo.status ? "line-through text-light" : ""}`
  }, todo.title)), /* @__PURE__ */ React.createElement("div", {
    className: "ml-auto flex space-x-2"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "text-white",
    onClick: (event) => {
      event.stopPropagation();
      editTask(todo);
    }
  }, /* @__PURE__ */ React.createElement("img", {
    src: edit_default,
    alt: "edit"
  })), /* @__PURE__ */ React.createElement("button", {
    className: "text-white",
    onClick: (event) => deleteTask(todo.id, event)
  }, /* @__PURE__ */ React.createElement("img", {
    src: trash_default,
    alt: "delete"
  }))));
}

// app/assets/leftarrow.svg
var leftarrow_default = "/build/_assets/leftarrow-4XWTK66G.svg";

// app/assets/rightarrow.svg
var rightarrow_default = "/build/_assets/rightarrow-BG27MMPE.svg";

// app/components/AddTask.tsx
init_react();
function AddTask(props) {
  const { handleSubmit, title, setTitle, description, setDescription } = props;
  return /* @__PURE__ */ React.createElement("form", {
    className: "text-white flex gap-1 w-full mb-4"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "todo",
    className: "flex-1 mr-1"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "hidden"
  }, "Todo"), /* @__PURE__ */ React.createElement("input", {
    className: "w-full text-inherit px-1 py-2 border-0 border-b border-white bg-transparent outline-0",
    type: "text",
    name: "todo",
    placeholder: "Add Title",
    value: title,
    onChange: (e) => setTitle(e.target.value)
  }), /* @__PURE__ */ React.createElement("input", {
    className: "w-full text-inherit px-1 py-2 border-0 border-b border-white bg-transparent outline-0",
    type: "text",
    name: "todo",
    placeholder: "Add Description",
    value: description,
    onChange: (e) => setDescription(e.target.value)
  })));
}
var AddTask_default = AddTask;

// route:/Users/akshaysharma/Desktop/todo-frontend/app/routes/index.tsx
function Index() {
  const [todos, setTodos] = (0, import_react2.useState)([]);
  const [page, setPage] = (0, import_react2.useState)(1);
  const [title, setTitle] = (0, import_react2.useState)("");
  const [description, setDescription] = (0, import_react2.useState)("");
  const [fetchAgain, setFetchAgain] = (0, import_react2.useState)(false);
  const [newTask, setNewTask] = (0, import_react2.useState)(false);
  const [editTask, setEditTask] = (0, import_react2.useState)(false);
  const [id, setId] = (0, import_react2.useState)("");
  (0, import_react2.useEffect)(() => {
    fetchTodos().then((fetchedTodos) => {
      setTodos(fetchedTodos);
      if (fetchedTodos.length === 0) {
        setNewTask(true);
      }
    }).catch(console.error);
  }, [fetchAgain]);
  function handleSubmit(e) {
    e.preventDefault();
    const createTodo = {
      title,
      description
    };
    addTodo(createTodo).then((response) => {
      setFetchAgain(!fetchAgain);
      console.log("Update Successful:", response);
    }).catch((error) => {
      console.error("Failed to update todo status:", error);
    });
    setNewTask(false);
    clearForm();
  }
  const updateTask = () => {
    const updatedTodo = {
      id,
      title,
      description
    };
    console.log("Updating Todo:", updatedTodo);
    updateTodo(updatedTodo).then((response) => {
      setFetchAgain(!fetchAgain);
      console.log("Update Successful:", response);
    }).catch((error) => {
      console.error("Failed to update todo status:", error);
    });
    setEditTask(false);
    setNewTask(false);
    clearForm();
  };
  function clearForm() {
    setTitle("");
    setDescription("");
  }
  const todosPerPage = 5;
  const startIndex = (page - 1) * todosPerPage;
  const currentTodos = todos.slice(startIndex, startIndex + todosPerPage);
  const totalPages = Math.ceil(todos.length / todosPerPage);
  return /* @__PURE__ */ React.createElement("main", {
    className: "app-container bg-gradient-to-r from-green-400 to-blue-500 flex h-screen justify-end relative"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-1 gap-1 m-auto bg-gray-800 rounded-lg shadow-lg p-6 w-1/3 text-white relative"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 gap-1"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-semibold mb-4 col-span-1"
  }, "TODO LIST"), newTask ? /* @__PURE__ */ React.createElement(React.Fragment, null) : /* @__PURE__ */ React.createElement("button", {
    className: "bg-gray-700 text-white font-semibold py-2 px-4 border border-gray-700 rounded-md mb-4 col-span-1 transition duration-300 hover:bg-gray-900 hover:text-white",
    onClick: () => setNewTask(true)
  }, "Add New Task")), /* @__PURE__ */ React.createElement("hr", {
    className: "col-span-1 border-gray-600 mb-4"
  }), /* @__PURE__ */ React.createElement("ul", {
    className: "todos col-span-1 space-y-3"
  }, newTask ? /* @__PURE__ */ React.createElement(AddTask_default, {
    title,
    description,
    setTitle,
    setDescription
  }) : /* @__PURE__ */ React.createElement(React.Fragment, null, currentTodos.map((todo) => /* @__PURE__ */ React.createElement(Todo, {
    key: todo.id,
    todo,
    fetchAgain,
    setFetchAgain,
    setNewTask,
    setTitle,
    setDescription,
    setEditTask,
    setId
  })))), newTask ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "bg-gray-700 text-white font-semibold py-2 px-4 border border-gray-700 rounded-md transition duration-300 hover:bg-gray-900 hover:text-white mt-4",
    onClick: () => setNewTask(false)
  }, "Cancel"), editTask ? /* @__PURE__ */ React.createElement("button", {
    className: "bg-gray-700 text-white font-semibold py-2 px-4 border border-gray-700 rounded-md transition duration-300 hover:bg-gray-900 hover:text-white mt-4 right-4 absolute",
    onClick: updateTask
  }, "Update") : /* @__PURE__ */ React.createElement("button", {
    className: "bg-gray-700 text-white font-semibold py-2 px-4 border border-gray-700 rounded-md transition duration-300 hover:bg-gray-900 hover:text-white mt-4 right-4 absolute",
    onClick: handleSubmit
  }, "Create"))) : /* @__PURE__ */ React.createElement(React.Fragment, null, totalPages > 1 ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("hr", {
    className: "col-span-1 border-gray-600 mt-4"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-center mt-4 items-center"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-center"
  }, "Page ", page, " of ", totalPages)), /* @__PURE__ */ React.createElement("div", {
    className: "absolute bottom-4 right-4 flex space-x-4"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "bg-gray-700 text-white font-semibold py-2 px-4 border border-gray-700 rounded-md transition duration-300 hover:bg-gray-900 hover:text-white",
    onClick: () => setPage(page - 1),
    disabled: page <= 1
  }, /* @__PURE__ */ React.createElement("img", {
    src: leftarrow_default,
    alt: "previous"
  })), /* @__PURE__ */ React.createElement("button", {
    className: "bg-gray-700 text-white font-semibold py-2 px-4 border border-gray-700 rounded-md transition duration-300 hover:bg-gray-900 hover:text-white",
    onClick: () => setPage(page + 1),
    disabled: page >= totalPages
  }, /* @__PURE__ */ React.createElement("img", {
    src: rightarrow_default,
    alt: "next"
  })))) : /* @__PURE__ */ React.createElement(React.Fragment, null))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "e5975e54", "entry": { "module": "/build/entry.client-ZUQTQTXE.js", "imports": ["/build/_shared/chunk-XC3YNH2V.js", "/build/_shared/chunk-K3AZYGPX.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-CVKIZGFZ.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-R2GIKZFK.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-E5975E54.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi90YWlsd2luZC5jb25maWcuanMiLCAiPHN0ZGluPiIsICJzZXJ2ZXItZW50cnktbW9kdWxlOkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZCIsICIuLi9hcHAvZW50cnkuc2VydmVyLnRzeCIsICJyb3V0ZTovVXNlcnMvYWtzaGF5c2hhcm1hL0Rlc2t0b3AvdG9kby1mcm9udGVuZC9hcHAvcm9vdC50c3giLCAiLi4vdHdpbmQuY29uZmlnLmpzIiwgInJvdXRlOi9Vc2Vycy9ha3NoYXlzaGFybWEvRGVza3RvcC90b2RvLWZyb250ZW5kL2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgIi4uL2FwcC9hcGkvYXBpLnRzIiwgIi4uL2FwcC9jb21wb25lbnRzL1RvZG8udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0FkZFRhc2sudHN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcblxuIiwgIm1vZHVsZS5leHBvcnRzID0ge1xuICBjb250ZW50OiBbJy4vc3JjLyoqLyoue2pzLGpzeCx0cyx0c3h9J10sXG4gIHRoZW1lOiB7XG4gICAgZXh0ZW5kOiB7XG4gICAgICBjb2xvcnM6IHtcbiAgICAgICAgcHJpbWFyeToge1xuICAgICAgICAgIDQwMDogJyMxOTE5MzMnLFxuICAgICAgICAgIDYwMDogJyMxMDEwMWQnLFxuICAgICAgICB9LFxuICAgICAgICBzZWNvbmRhcnk6ICcjZWU5Y2E3JyxcbiAgICAgICAgbGlnaHQ6ICcjZmZmZmZmODAnLFxuICAgICAgfSxcbiAgICAgIGJveFNoYWRvdzoge1xuICAgICAgICBjaGVja2JveDogJzAgMCAwIDNweCByZ2JhKDIzOCwgMTU2LCAxNjcsIDAuMiknLFxuICAgICAgICBidXR0b246ICcwIDAgMTJweCByZ2JhKDIzOCwgMTU2LCAxNjcsMC40KScsXG4gICAgICB9LFxuICAgICAgc3BhY2luZzoge1xuICAgICAgICA3LjU6ICczMHB4JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgcGx1Z2luczogW10sXG59O1xuIiwgImV4cG9ydCAqIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjsiLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL2Frc2hheXNoYXJtYS9EZXNrdG9wL3RvZG8tZnJvbnRlbmQvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL2Frc2hheXNoYXJtYS9EZXNrdG9wL3RvZG8tZnJvbnRlbmQvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9ha3NoYXlzaGFybWEvRGVza3RvcC90b2RvLWZyb250ZW5kL2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IGlubGluZSBmcm9tICdAdHdpbmQvd2l0aC1yZW1peC9zZXJ2ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dCxcbikge1xuICBsZXQgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz4pO1xuXG4gIC8vIEFkZCB0d2luZCBzdHlsZXMgdG8gdGhlIG1hcmt1cFxuICBtYXJrdXAgPSBpbmxpbmUobWFya3VwKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KCdDb250ZW50LVR5cGUnLCAndGV4dC9odG1sJyk7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZSgnPCFET0NUWVBFIGh0bWw+JyArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHsgTGlua3MsIExpdmVSZWxvYWQsIE1ldGEsIE91dGxldCwgU2NyaXB0cywgU2Nyb2xsUmVzdG9yYXRpb24gfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCBpbnN0YWxsIGZyb20gJ0B0d2luZC93aXRoLXJlbWl4JztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vdHdpbmQuY29uZmlnJztcblxuaW5zdGFsbChjb25maWcpO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4geyB0aXRsZTogJ05ldyBSZW1peCBBcHAnIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICA8TGl2ZVJlbG9hZCAvPlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd0d2luZCc7XG5pbXBvcnQgcHJlc2V0QXV0b3ByZWZpeCBmcm9tICdAdHdpbmQvcHJlc2V0LWF1dG9wcmVmaXgnO1xuaW1wb3J0IHByZXNldFRhaWx3aW5kIGZyb20gJ0B0d2luZC9wcmVzZXQtdGFpbHdpbmQnO1xuaW1wb3J0IHRhaWx3aW5kQ29uZmlnIGZyb20gJy4vdGFpbHdpbmQuY29uZmlnLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgLi4udGFpbHdpbmRDb25maWcsXG4gIHByZXNldHM6IFtwcmVzZXRBdXRvcHJlZml4KCksIHByZXNldFRhaWx3aW5kKCldLFxufSk7XG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRvZG9JdGVtLCBhZGRUb2RvLCBmZXRjaFRvZG9zLCB1cGRhdGVUb2RvIH0gZnJvbSAnfi9hcGkvYXBpJztcbmltcG9ydCBUb2RvIGZyb20gJ34vY29tcG9uZW50cy9Ub2RvJztcbmltcG9ydCBsZWZ0QXJyb3cgZnJvbSAnLi4vYXNzZXRzL2xlZnRhcnJvdy5zdmcnO1xuaW1wb3J0IHJpZ2h0QXJyb3cgZnJvbSAnLi4vYXNzZXRzL3JpZ2h0YXJyb3cuc3ZnJztcbmltcG9ydCBBZGRUYXNrIGZyb20gJ34vY29tcG9uZW50cy9BZGRUYXNrJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGU8VG9kb0l0ZW1bXT4oW10pO1xuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZmV0Y2hBZ2Fpbiwgc2V0RmV0Y2hBZ2Fpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtuZXdUYXNrLCBzZXROZXdUYXNrXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2VkaXRUYXNrLCBzZXRFZGl0VGFza10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpZCwgc2V0SWRdID0gdXNlU3RhdGUoJycpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hUb2RvcygpXG4gICAgICAudGhlbihmZXRjaGVkVG9kb3MgPT4ge1xuICAgICAgICBzZXRUb2RvcyhmZXRjaGVkVG9kb3MpO1xuICAgICAgICBpZiAoZmV0Y2hlZFRvZG9zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHNldE5ld1Rhc2sodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goY29uc29sZS5lcnJvcik7XG4gIH0sIFtmZXRjaEFnYWluXSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGU6IGFueSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBjcmVhdGVUb2RvID0ge1xuICAgICAgdGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICB9O1xuICAgIGFkZFRvZG8oY3JlYXRlVG9kbylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgc2V0RmV0Y2hBZ2FpbighZmV0Y2hBZ2Fpbik7XG4gICAgICAgIGNvbnNvbGUubG9nKCdVcGRhdGUgU3VjY2Vzc2Z1bDonLCByZXNwb25zZSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHVwZGF0ZSB0b2RvIHN0YXR1czonLCBlcnJvcik7XG4gICAgICB9KTtcbiAgICBzZXROZXdUYXNrKGZhbHNlKTtcbiAgICBjbGVhckZvcm0oKTtcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZVRhc2sgPSAoKSA9PiB7XG4gICAgY29uc3QgdXBkYXRlZFRvZG8gPSB7XG4gICAgICBpZCxcbiAgICAgIHRpdGxlLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZygnVXBkYXRpbmcgVG9kbzonLCB1cGRhdGVkVG9kbyk7IC8vIERlYnVnIHN0YXRlbWVudFxuICAgIHVwZGF0ZVRvZG8odXBkYXRlZFRvZG8pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIHNldEZldGNoQWdhaW4oIWZldGNoQWdhaW4pO1xuICAgICAgICBjb25zb2xlLmxvZygnVXBkYXRlIFN1Y2Nlc3NmdWw6JywgcmVzcG9uc2UpOyAvLyBEZWJ1ZyBzdGF0ZW1lbnRcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gdXBkYXRlIHRvZG8gc3RhdHVzOicsIGVycm9yKTtcbiAgICAgIH0pO1xuICAgIHNldEVkaXRUYXNrKGZhbHNlKTtcbiAgICBzZXROZXdUYXNrKGZhbHNlKTtcbiAgICBjbGVhckZvcm0oKTtcbiAgfTtcblxuICBmdW5jdGlvbiBjbGVhckZvcm0oKSB7XG4gICAgc2V0VGl0bGUoJycpO1xuICAgIHNldERlc2NyaXB0aW9uKCcnKTtcbiAgfVxuXG4gIGNvbnN0IHRvZG9zUGVyUGFnZSA9IDU7XG4gIGNvbnN0IHN0YXJ0SW5kZXggPSAocGFnZSAtIDEpICogdG9kb3NQZXJQYWdlO1xuICBjb25zdCBjdXJyZW50VG9kb3MgPSB0b2Rvcy5zbGljZShzdGFydEluZGV4LCBzdGFydEluZGV4ICsgdG9kb3NQZXJQYWdlKTtcbiAgY29uc3QgdG90YWxQYWdlcyA9IE1hdGguY2VpbCh0b2Rvcy5sZW5ndGggLyB0b2Rvc1BlclBhZ2UpO1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiYXBwLWNvbnRhaW5lciBiZy1ncmFkaWVudC10by1yIGZyb20tZ3JlZW4tNDAwIHRvLWJsdWUtNTAwIGZsZXggaC1zY3JlZW4ganVzdGlmeS1lbmQgcmVsYXRpdmVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBnYXAtMSBtLWF1dG8gYmctZ3JheS04MDAgcm91bmRlZC1sZyBzaGFkb3ctbGcgcC02IHctMS8zIHRleHQtd2hpdGUgcmVsYXRpdmVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC0xXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGQgbWItNCBjb2wtc3Bhbi0xXCI+VE9ETyBMSVNUPC9oMj5cbiAgICAgICAgICB7bmV3VGFzayA/IChcbiAgICAgICAgICAgIDw+PC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS03MDAgdGV4dC13aGl0ZSBmb250LXNlbWlib2xkIHB5LTIgcHgtNCBib3JkZXIgYm9yZGVyLWdyYXktNzAwIHJvdW5kZWQtbWQgbWItNCBjb2wtc3Bhbi0xIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGhvdmVyOmJnLWdyYXktOTAwIGhvdmVyOnRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXROZXdUYXNrKHRydWUpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBZGQgTmV3IFRhc2tcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwiY29sLXNwYW4tMSBib3JkZXItZ3JheS02MDAgbWItNFwiIC8+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0b2RvcyBjb2wtc3Bhbi0xIHNwYWNlLXktM1wiPlxuICAgICAgICAgIHtuZXdUYXNrID8gKFxuICAgICAgICAgICAgPEFkZFRhc2sgdGl0bGU9e3RpdGxlfSBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259IHNldFRpdGxlPXtzZXRUaXRsZX0gc2V0RGVzY3JpcHRpb249e3NldERlc2NyaXB0aW9ufSAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICB7Y3VycmVudFRvZG9zLm1hcCh0b2RvID0+IChcbiAgICAgICAgICAgICAgICA8VG9kb1xuICAgICAgICAgICAgICAgICAga2V5PXt0b2RvLmlkfVxuICAgICAgICAgICAgICAgICAgdG9kbz17dG9kb31cbiAgICAgICAgICAgICAgICAgIGZldGNoQWdhaW49e2ZldGNoQWdhaW59XG4gICAgICAgICAgICAgICAgICBzZXRGZXRjaEFnYWluPXtzZXRGZXRjaEFnYWlufVxuICAgICAgICAgICAgICAgICAgc2V0TmV3VGFzaz17c2V0TmV3VGFza31cbiAgICAgICAgICAgICAgICAgIHNldFRpdGxlPXtzZXRUaXRsZX1cbiAgICAgICAgICAgICAgICAgIHNldERlc2NyaXB0aW9uPXtzZXREZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgIHNldEVkaXRUYXNrPXtzZXRFZGl0VGFza31cbiAgICAgICAgICAgICAgICAgIHNldElkPXtzZXRJZH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIHtuZXdUYXNrID8gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktNzAwIHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCBweS0yIHB4LTQgYm9yZGVyIGJvcmRlci1ncmF5LTcwMCByb3VuZGVkLW1kIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGhvdmVyOmJnLWdyYXktOTAwIGhvdmVyOnRleHQtd2hpdGUgbXQtNFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TmV3VGFzayhmYWxzZSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAge2VkaXRUYXNrID8gKFxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktNzAwIHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCBweS0yIHB4LTQgYm9yZGVyIGJvcmRlci1ncmF5LTcwMCByb3VuZGVkLW1kIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGhvdmVyOmJnLWdyYXktOTAwIGhvdmVyOnRleHQtd2hpdGUgbXQtNCByaWdodC00IGFic29sdXRlXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3VwZGF0ZVRhc2t9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgVXBkYXRlXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS03MDAgdGV4dC13aGl0ZSBmb250LXNlbWlib2xkIHB5LTIgcHgtNCBib3JkZXIgYm9yZGVyLWdyYXktNzAwIHJvdW5kZWQtbWQgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgaG92ZXI6YmctZ3JheS05MDAgaG92ZXI6dGV4dC13aGl0ZSBtdC00IHJpZ2h0LTQgYWJzb2x1dGVcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIENyZWF0ZVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIHt0b3RhbFBhZ2VzID4gMSA/IChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiY29sLXNwYW4tMSBib3JkZXItZ3JheS02MDAgbXQtNFwiIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG10LTQgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICBQYWdlIHtwYWdlfSBvZiB7dG90YWxQYWdlc31cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS00IHJpZ2h0LTQgZmxleCBzcGFjZS14LTRcIj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS03MDAgdGV4dC13aGl0ZSBmb250LXNlbWlib2xkIHB5LTIgcHgtNCBib3JkZXIgYm9yZGVyLWdyYXktNzAwIHJvdW5kZWQtbWQgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgaG92ZXI6YmctZ3JheS05MDAgaG92ZXI6dGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFBhZ2UocGFnZSAtIDEpfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17cGFnZSA8PSAxfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bGVmdEFycm93fSBhbHQ9XCJwcmV2aW91c1wiIC8+XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS03MDAgdGV4dC13aGl0ZSBmb250LXNlbWlib2xkIHB5LTIgcHgtNCBib3JkZXIgYm9yZGVyLWdyYXktNzAwIHJvdW5kZWQtbWQgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgaG92ZXI6YmctZ3JheS05MDAgaG92ZXI6dGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFBhZ2UocGFnZSArIDEpfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17cGFnZSA+PSB0b3RhbFBhZ2VzfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmlnaHRBcnJvd30gYWx0PVwibmV4dFwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8PjwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgYXhpb3MsIHsgQXhpb3NSZXNwb25zZSB9IGZyb20gJ2F4aW9zJztcblxuY29uc3QgQVBJX0JBU0VfVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGknO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRvZG9JdGVtIHtcbiAgaWQ/OiBzdHJpbmc7XG4gIHVzZXJpZD86IG51bWJlcjtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBzdGF0dXM/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hUb2RvcyA9IGFzeW5jICgpOiBQcm9taXNlPFRvZG9JdGVtW10+ID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZTogQXhpb3NSZXNwb25zZTxUb2RvSXRlbVtdPiA9IGF3YWl0IGF4aW9zLmdldChgJHtBUElfQkFTRV9VUkx9L3RvZG9gKTtcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggdG9kb3M6JywgZXJyb3IpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgYWRkVG9kbyA9IGFzeW5jICh0b2RvOiBUb2RvSXRlbSk6IFByb21pc2U8VG9kb0l0ZW0+ID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zb2xlLmxvZygnZnhjZ2ZoamdmZGNnJywgdG9kbyk7XG4gICAgY29uc3QgcmVzcG9uc2U6IEF4aW9zUmVzcG9uc2U8VG9kb0l0ZW0+ID0gYXdhaXQgYXhpb3MucG9zdChgJHtBUElfQkFTRV9VUkx9L3RvZG9gLCB0b2RvKTtcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gYWRkIHRvZG86JywgZXJyb3IpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlVG9kbyA9IGFzeW5jICh1cGRhdGVkVG9kbzogVG9kb0l0ZW0pOiBQcm9taXNlPFRvZG9JdGVtPiA9PiB7XG4gIHRyeSB7XG4gICAgY29uc29sZS5sb2coJ2JhZCByZXF1ZXMnLCB1cGRhdGVkVG9kbyk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wdXQoYCR7QVBJX0JBU0VfVVJMfS90b2RvYCwgdXBkYXRlZFRvZG8sIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHVwZGF0ZSB0b2RvOicsIGVycm9yKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVRvZG8gPSBhc3luYyAoaWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuICB0cnkge1xuICAgIGF3YWl0IGF4aW9zLmRlbGV0ZShgJHtBUElfQkFTRV9VUkx9L3RvZG8vJHtpZH1gKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZGVsZXRlIHRvZG86JywgZXJyb3IpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuIiwgIi8vIHRvZG8gZmlsZVxuaW1wb3J0IHsgVG9kb0l0ZW0sIGRlbGV0ZVRvZG8sIHVwZGF0ZVRvZG8gfSBmcm9tICd+L2FwaS9hcGknO1xuaW1wb3J0IGVkaXQgZnJvbSAnLi4vYXNzZXRzL2VkaXQuc3ZnJztcbmltcG9ydCB0cmFzaCBmcm9tICcuLi9hc3NldHMvdHJhc2guc3ZnJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2RvKHByb3BzOiBhbnkpIHtcbiAgY29uc3QgeyB0b2RvLCBzZXRGZXRjaEFnYWluLCBmZXRjaEFnYWluLCBzZXROZXdUYXNrLCBzZXRUaXRsZSwgc2V0RGVzY3JpcHRpb24sIHNldEVkaXRUYXNrLCBzZXRJZCB9ID0gcHJvcHM7XG4gIGNvbnN0IFtyZW5kZXIsIHNldFJlbmRlcl0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCB1cGRhdGVTdGF0dXMgPSAodXBkYXRlZFRvZG86IGFueSkgPT4ge1xuICAgIHVwZGF0ZWRUb2RvLnN0YXR1cyA9ICF1cGRhdGVkVG9kby5zdGF0dXM7XG4gICAgY29uc29sZS5sb2coJ1VwZGF0aW5nIFRvZG86JywgdXBkYXRlZFRvZG8pOyAvLyBEZWJ1ZyBzdGF0ZW1lbnRcbiAgICB1cGRhdGVUb2RvKHVwZGF0ZWRUb2RvKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBzZXRSZW5kZXIoIXJlbmRlcik7XG4gICAgICAgIGNvbnNvbGUubG9nKCdVcGRhdGUgU3VjY2Vzc2Z1bDonLCByZXNwb25zZSk7IC8vIERlYnVnIHN0YXRlbWVudFxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byB1cGRhdGUgdG9kbyBzdGF0dXM6JywgZXJyb3IpO1xuICAgICAgICB1cGRhdGVkVG9kby5zdGF0dXMgPSAhdXBkYXRlZFRvZG8uc3RhdHVzO1xuICAgICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlVGFzayA9IChpZDogc3RyaW5nLCBldmVudDogYW55KSA9PiB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IC8vIFByZXZlbnQgZXZlbnQgcHJvcGFnYXRpb25cbiAgICBjb25zb2xlLmxvZygnRGVsZXRlIFRhc2s6JywgaWQpOyAvLyBEZWJ1ZyBzdGF0ZW1lbnRcbiAgICBkZWxldGVUb2RvKGlkKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBzZXRGZXRjaEFnYWluKCFmZXRjaEFnYWluKTtcbiAgICAgICAgY29uc29sZS5sb2coJ1VwZGF0ZSBTdWNjZXNzZnVsOicsIHJlc3BvbnNlKTsgLy8gRGVidWcgc3RhdGVtZW50XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHVwZGF0ZSB0b2RvIHN0YXR1czonLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zdCBlZGl0VGFzayA9ICh0b2RvOiBUb2RvSXRlbSkgPT4ge1xuICAgIHNldElkKHRvZG8uaWQpO1xuICAgIHNldFRpdGxlKHRvZG8udGl0bGUpO1xuICAgIHNldERlc2NyaXB0aW9uKHRvZG8uZGVzY3JpcHRpb24pO1xuICAgIHNldE5ld1Rhc2sodHJ1ZSk7XG4gICAgc2V0RWRpdFRhc2sodHJ1ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8bGlcbiAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggaXRlbXMtY2VudGVyIHRleHQtd2hpdGUgYmctZ3JheS03MDAgbWItMyBwLTIgcm91bmRlZC1sZ1wiXG4gICAgICBrZXk9e3RvZG8uaWR9XG4gICAgICBvbkNsaWNrPXsoKSA9PiBlZGl0VGFzayh0b2RvKX1cbiAgICA+XG4gICAgICA8bGFiZWwgaHRtbEZvcj17YGlucHV0LSR7dG9kby5pZH1gfSBjbGFzc05hbWU9XCJncm91cCBjdXJzb3ItcG9pbnRlciBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBpZD17YGlucHV0LSR7dG9kby5pZH1gfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImFwcGVhcmFuY2Utbm9uZSB3LTMuNSBoLTMuNSBtci0yIGJvcmRlciByb3VuZGVkLWZ1bGwgZWFzZS1saW5lYXIgZHVyYXRpb24tNDAwIGdyb3VwLWhvdmVyOnNoYWRvdy1jaGVja2JveCBncm91cC1ob3Zlcjpib3JkZXItc2Vjb25kYXJ5IGNoZWNrZWQ6Ym9yZGVyLXNlY29uZGFyeSBjaGVja2VkOmJnLXNlY29uZGFyeVwiXG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICBjaGVja2VkPXt0b2RvLnN0YXR1c31cbiAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gdXBkYXRlU3RhdHVzKHRvZG8pfVxuICAgICAgICAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Btci0yICR7dG9kby5zdGF0dXMgPyAnbGluZS10aHJvdWdoIHRleHQtbGlnaHQnIDogJyd9YH0+e3RvZG8udGl0bGV9PC9zcGFuPlxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtYXV0byBmbGV4IHNwYWNlLXgtMlwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiXG4gICAgICAgICAgb25DbGljaz17ZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBlZGl0VGFzayh0b2RvKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGltZyBzcmM9e2VkaXR9IGFsdD1cImVkaXRcIiAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCIgb25DbGljaz17ZXZlbnQgPT4gZGVsZXRlVGFzayh0b2RvLmlkLCBldmVudCl9PlxuICAgICAgICAgIDxpbWcgc3JjPXt0cmFzaH0gYWx0PVwiZGVsZXRlXCIgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2xpPlxuICApO1xufVxuIiwgImZ1bmN0aW9uIEFkZFRhc2socHJvcHM6IGFueSkge1xuICBjb25zdCB7IGhhbmRsZVN1Ym1pdCwgdGl0bGUsIHNldFRpdGxlLCBkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb24gfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxmb3JtIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZmxleCBnYXAtMSB3LWZ1bGwgbWItNFwiPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0b2RvXCIgY2xhc3NOYW1lPVwiZmxleC0xIG1yLTFcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuXCI+VG9kbzwvc3Bhbj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtaW5oZXJpdCBweC0xIHB5LTIgYm9yZGVyLTAgYm9yZGVyLWIgYm9yZGVyLXdoaXRlIGJnLXRyYW5zcGFyZW50IG91dGxpbmUtMFwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9XCJ0b2RvXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBUaXRsZVwiXG4gICAgICAgICAgdmFsdWU9e3RpdGxlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtaW5oZXJpdCBweC0xIHB5LTIgYm9yZGVyLTAgYm9yZGVyLWIgYm9yZGVyLXdoaXRlIGJnLXRyYW5zcGFyZW50IG91dGxpbmUtMFwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9XCJ0b2RvXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBEZXNjcmlwdGlvblwiXG4gICAgICAgICAgdmFsdWU9e2Rlc2NyaXB0aW9ufVxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgIDwvbGFiZWw+XG4gICAgPC9mb3JtPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBZGRUYXNrO1xuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6J2U1OTc1ZTU0JywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC1aVVFUUVRYRS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstWEMzWU5IMlYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1LM0FaWUdQWC5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtQ1ZLSVpHRlouanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1SMkdJS1pGSy5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC1FNTk3NUU1NC5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFBQTtBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsb0NBQW9DO0FBQUEsTUFDakUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxz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
