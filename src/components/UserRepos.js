var React = require('react');

var UserRepos = React.createClass({
  getInitialState: function() {
    return {
      reposCount: 0,
    }
  },
  componentWillReceiveProps: function(props) {
    this.setState({reposCount: props.repos.length});
  },
  render: function() {
    var repos = this.props.repos.map(function(repo, key) {
      return (
        <div key={key} className="thumbnail border">
          <div className="caption">
            <h3 className="title-User">{repo.name}
              <span className="badge">{repo.stargazers_count} STARS</span>
            </h3>
            <p>{repo.description}</p>
            <p>
              <a href={repo.html_url} target="_blank" className="btn btn-primary button" role="button">Repository</a>
              <a href={repo.html_url + '/issues'} target="_blank" className="btn btn-default" role="button">Issues ({repo.open_issues}) </a>
            </p>
          </div>
        </div>
      );
    });

    return (
      <div>
        <span className="badge blue spann">Listing  {this.state.reposCount} repositories</span>
        {repos}
      </div>
    );
  }
});

module.exports = UserRepos;
