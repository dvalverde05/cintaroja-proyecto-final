import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import axios from 'axios';

function Home() {
	const baseUrl = 'http://localhost:3001/monsters';
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [filterBy, setFilter] = useState('All');

	async function getMonsters() {
		setLoading(true);
		const result = await axios.get(baseUrl);
		setData(result.data.results);
		setLoading(false);
	};

	async function filterElementFnc(element) {
		setFilter(element)
		if (element !== 'All') {
			setLoading(true);
			const result = await axios.get(`${baseUrl}/attribute/${element}`);
			setData(result.data);
			setLoading(false);
		} else {
			getMonsters();
		}
	}

	async function filterClassFnc(monsterClass) {
		setFilter(monsterClass)
		if (monsterClass !== 'All') {
			setLoading(true);
			const result = await axios.get(`${baseUrl}/class/${monsterClass}`);
			setData(result.data);
			setLoading(false);
		} else {
			getMonsters();
		}
	}

	useEffect(() => {
		getMonsters();
	}, []);

	if (loading) {
		return <h1>Loading...</h1>
	}
	else {
		return (
			<div className="home-bg">
				<div className="container py-5">
					<div className="row">
						<div className="col-sm-12 offset-md-8 col-md-4 mb-4 text-right">
							<div className="input-group mb-3 d-flex align-items-center justify-content-end">
								<h6 className="text-white m-0 mr-3">Sort by</h6>
								<button className="btn btn-outline-secondary dropdown-toggle bg-white text-primary" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{filterBy}</button>
								<div className="dropdown-menu">
									<p><small className="px-2 font-weight-bold">Monster Element</small></p>
									<button className="btn border-0 dropdown-item" onClick={() => filterElementFnc('All')}>All</button>
									<button className="btn border-0 dropdown-item" onClick={() => filterElementFnc('water')}>Water</button>
									<button className="btn border-0 dropdown-item" onClick={() => filterElementFnc('fire')}>Fire</button>
									<button className="btn border-0 dropdown-item" onClick={() => filterElementFnc('light')}>Light</button>
									<button className="btn border-0 dropdown-item" onClick={() => filterElementFnc('earth')}>Earth</button>
									<button className="btn border-0 dropdown-item" onClick={() => filterElementFnc('dark')}>Dark</button>

									<div role="separator" className="dropdown-divider"></div>
									<p><small className="px-2 font-weight-bold">Monster Class</small></p>
									<button className="btn border-0 dropdown-item" onClick={() => filterClassFnc('ATTACK')}>Attack</button>
									<button className="btn border-0 dropdown-item" onClick={() => filterClassFnc('SUPPORT')}>Support</button>
									<button className="btn border-0 dropdown-item" onClick={() => filterClassFnc('DEFENSE')}>Defense</button>
									<button className="btn border-0 dropdown-item" onClick={() => filterClassFnc('HP')}>HP</button>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						{!loading && data && data.map(item =>
							<div className="col-sm-12 col-md-6 col-lg-4" key={item.id}>
								<Card item={item} />
							</div>
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
