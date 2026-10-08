const Parent = React.createElement("div", {id : "parent"},
    React.createElement("div", {id : "child"}),
    React.createElement("h1", {id : "heading"}, "This is h1 tag"),
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Parent);