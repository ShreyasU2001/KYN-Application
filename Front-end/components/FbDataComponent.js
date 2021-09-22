import React, { Component } from "react";

class FbDataComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: "",
		};
	}

	componentDidMount() {
		const user = JSON.parse(localStorage.getItem("user"));
		if (user) {
			this.setState({ user: user });
		}
	}
	render() {
		const UserScreen = ({ user }) => (
			<>
				<div
					style={{
						display: "flex-column",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<img
						src={user.picture.data.url}
						height="10%"
						width="10%"
						alt="avatar"
						style={{ borderRadius: "50%" }}
					/>
					<h1>Welcome {user.name}!</h1>
					<p>{user.email}</p>
				</div>
			</>
		);
		return (
			<div>
				{this.state.user && (
					<div className="card col-md-6 offset-md-3 offset-md-3 border-primary">
						<UserScreen user={this.state.user} />
					</div>
				)}
			</div>
		);
	}
}

export default FbDataComponent;