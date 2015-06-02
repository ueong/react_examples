var App = React.createClass({displayName: "App",
	render:function(){
		return (
			React.createElement("div", null, 
				React.createElement("b", null, "BOLD"), 
				React.createElement("h1", null, "Hello World")
			)
			)
	}
});

React.render(React.createElement(App, null), document.body);