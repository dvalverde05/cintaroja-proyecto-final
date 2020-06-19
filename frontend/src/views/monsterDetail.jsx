import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MonsterDetail({ ...props }) {
	const [monsterInfo, setMonster] = useState({});

	// eslint-disable-next-line react-hooks/exhaustive-deps
	async function getMonsterDetail(monster) {
		axios.get(`http://localhost:3001/monsters/${monster}`)
			.then(res => {
				setMonster(res.data);
			})
			.catch(() => {
				props.history.push('/404');
			})
	};

	useEffect(() => {
		const monster = props.match.params.name;
		console.log(monster)
		if (monster) {
			getMonsterDetail(monster);
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[]);

	return (
		<div className="container py-5">
			{monsterInfo ?
				<div className="row">
					<div className="col-sm-12">
						<div className="card shadow">
							<div className="card-body">
								<div className="d-flex align-items-start">
									<div className="d-flex align-items-start w-50">
										<img src={monsterInfo['icon_path']} alt="" className="mr-3 monster-pic-detail" />
										<div>
											<h2 className="mb-1">{monsterInfo.name}</h2>
											<div className="text-left">
												<p className="m-0"><small>{monsterInfo.type && monsterInfo.type.tid}</small></p>
												<div className="d-flex align-items-center my-1">
													<img src={`/images/icon-${monsterInfo.class && monsterInfo.class.tid}.svg`} alt="" className="icon-class my-1 mr-2" />
													<p className="m-0"><small>{monsterInfo.class && monsterInfo.class.tid}</small></p>
												</div>
												{monsterInfo.attribute &&
													<div className="d-flex align-items-center">
														<img src={`/images/icon-${monsterInfo.attribute.tid}.png`} alt="" className="icon-class my-1 mr-2" />
														<small>{monsterInfo.attribute.tid}</small>
													</div>
												}
											</div>
										</div>
									</div>
									<div className="w-50 pr-5">
										<h6>Rank Stats</h6>
										<div className="row">
											<div className="col-sm-6">
												<p className="mb-1"><small className="font-weight-bold">Unawakened</small></p>
												{monsterInfo['rank_stats'] && Object.keys(monsterInfo['statsfix'][0]).map((stat, index) =>
													<div key={`unawakened-stat-${stat}`}>
														<div className="d-flex align-items-center">
															<p> <small>{stat}: {monsterInfo['statsfix'][0][stat]}</small></p>
														</div>
													</div>
												)}
											</div>
											<div className="col-sm-6">
												<p className="mb-1"><small className="font-weight-bold">Awakened</small></p>
												{monsterInfo['rank_stats'] && Object.keys(monsterInfo['statsfix'][1]).map((stat, index) =>
													<div key={`awakened-stat-${stat}`}>
														<div className="d-flex align-items-center">
															<p> <small>{stat}: {monsterInfo['statsfix'][1][stat]}</small></p>
														</div>
													</div>
												)}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-12">
						<h3 className="font-weight-bold mt-5 text-white">Skills</h3>
					</div>
					{monsterInfo.skills && monsterInfo.skills.map(skill =>
						<div className="col-sm-12 my-4">
							<div className="card shadow">
								<div className="card-body">
									<h5>{skill.name}</h5>
									<div className="d-flex align-items-start">
										<div className="w-25">
											<img src={skill['icon_path']} alt={skill.name} className="icon-skill" />
										</div>
										<div className="w-75">
											<p>{skill.desc}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
				: <h1>No data!</h1>
			}
		</div>
	);
}

export default MonsterDetail;
