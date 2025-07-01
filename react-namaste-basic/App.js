const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I am h1 tage")
  )
);

const element = React.createElement(
  "h1",
  {
    id: "heading",
  },
  "Namaste React"
);

ReactDOM.render(parent, document.getElementById("root"));
