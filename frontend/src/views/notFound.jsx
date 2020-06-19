import React from 'react';
import { Link } from 'react-router-dom';
function NotFound() {
	return (
		<div className="bg-white">
			<div className="container py-5 text-center">
				<h1 className="display-1 font-weight-bold my-4">404</h1>
				<img src="/images/404_5.gif" alt="" />
				<div className="my-5">
					<Link to="/" className="btn btn-warning btn-lg px-4 text-white">Go Back</Link>
				</div>
			</div>
		</div>
	);
}

export default NotFound;
