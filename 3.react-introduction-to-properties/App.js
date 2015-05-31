var App = React.createClass({
	render:function(){
		var txt = this.props.txt
		return (
			<div>
				<b>BOLD</b>
				<h1>{txt}</h1>
			</div>
			);
	},
	getDefaultProps: function() {
		return {
			txt: 'this is a defalut prop'
		};
	},
	propTypes: {
		txt: React.PropTypes.string,
		cat: React.PropTypes.number.isRequired
	},
});

React.render(<App cat={5} />, document.body);