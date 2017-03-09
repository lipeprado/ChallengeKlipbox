var React = require('react');

var UserRepos = require('./UserRepos');

function UserInfo(props) {
  var userInfo = props.user ?
    (
      <div className="box row">
        <div className="col s2 box-user">
          <img className="img-circle" src={props.user.avatar_url} alt="avatar" width="140" height="140" />
          <h2 className="title-User">{props.user.login}</h2>
          <p className="name-User">{props.user.name}</p>
          <span className="badge blue span">Followers: {props.user.followers} / Following: {props.user.following}</span>
          <p><a className="btn btn-default" href={props.user.html_url} target="_blank" role="button">View details</a></p>
        </div>
        <div className="col s10">
          <UserRepos repos={props.repos} />
        </div>
      </div>
    ) : null;

    return userInfo;
}

UserInfo.propTypes = {
  user: React.PropTypes.object,
  repos: React.PropTypes.array,
};

module.exports = UserInfo;
