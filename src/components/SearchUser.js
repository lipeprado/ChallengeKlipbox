var React = require('react');
var GitApi = require('../services/GitApi');

var SearchUser = React.createClass({
	handleSubmit: function(e){

		e.preventDefault();


		GitApi.getByUsername(this.refs.username.value).then(function(response){
		this.props.updateUser(response.data);
		}.bind(this));

		GitApi.getReposByUsername(this.refs.username.value).then(function(response){
		this.props.updateRepos(response.data);
		}.bind(this));
	},
	render: function () {
		return(
			<div className="container">
					<h1 className="flow-text">Encontre no Github</h1>
					<div className="row">
						<form onSubmit={this.handleSubmit}>
							<div className="form-group">
								<input type="text" ref="username" placeholder="Ex: lipeprado, artisansolucoesweb..."
								className="form-control" required/>
							</div>
                            <button className="btn  btn-primary" >Buscar
                  </button>


						</form>
					</div>

				</div>


		);
	}
});

module.exports = SearchUser;
