import React from 'react';
import { Link } from "react-router-dom";

function Card({ item }) {
  return (
    <div className="main-card shadow mb-4">
			<Link to={`/monsters/${item.name}`}>
				<div className="card-body previous-card">
					<div className="d-flex align-items-start">
						<div className="mr-3 card-image">
							<img src={item.icon_path} alt={`picture_${item.name}`} className="w-100" />
						</div>
						<div className="text-left">
							<p className="m-0">{item.name} <span>({item.type.tid})</span></p>
							<div className="d-flex align-items-center my-1">
								<img src={`/images/icon-${item.class.tid}.svg`} alt="" className="icon-class mr-2" />
								<p className="m-0"><small>{item.class.tid}</small></p>
							</div>
						</div>
					</div>
				</div>
			</Link>
    </div>
  );
}

export default Card;
