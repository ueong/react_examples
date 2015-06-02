var PersonTable = React.createClass({
	getInitialState: function() {
		return {
			data: [
				{id: 1, fname: "Simon", lname: "Bailey"},
				{id: 2, fname: "Simon", lname: "Bailey"},
				{id: 3, fname: "Simon", lname: "Bailey"},
				{id: 4, fname: "Simon", lname: "Bailey"},
				{id: 5, fname: "Simon", lname: "Bailey"},
				{id: 6, fname: "Simon", lname: "Bailey"},
				{id: 7, fname: "Simon", lname: "Bailey"},
				{id: 8, fname: "Simon", lname: "Bailey"},
				{id: 9, fname: "Simon", lname: "Bailey"},
				{id: 10, fname: "Simon", lname: "Bailey"},
				{id: 11, fname: "Simon", lname: "Bailey"},
				{id: 12, fname: "Simon", lname: "Bailey"},
				{id: 13, fname: "Simon", lname: "Bailey"},
				{id: 14, fname: "Simon", lname: "Bailey"},
				{id: 15, fname: "Simon", lname: "Bailey"},
				{id: 16, fname: "Simon", lname: "Bailey"},
				{id: 17, fname: "Simon", lname: "Bailey"},
				{id: 18, fname: "Simon", lname: "Bailey"},
			]
		};
	},
	render: function() {
		var rows = this.state.data.map(function(person, i){
			return <PersonRow data={person} key={i} />
		})
		return (
			<table>{rows}</table>
		);
	}
});

var PersonRow = React.createClass({
	render: function() {
		return (
			<tr>
				<td>{this.props.data.id}</td>
				<td>{this.props.data.fname}</td>
				<td>{this.props.data.lname}</td>
			</tr>
		);

	}
});

React.render(<PersonTable />, document.body);

