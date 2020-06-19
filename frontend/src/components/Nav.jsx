import React from 'react';
import { Link } from "react-router-dom";

function Nav({ item }) {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<span className="navbar-brand">Summoners War</span>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item mr-4">
						<Link to="/">Home</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Nav;