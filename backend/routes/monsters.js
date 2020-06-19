const monsters = (app, fs) => {
	const dataPath = "./data/monsters.json";

	app.get("/monsters", (req, res) => {
		fs.readFile(dataPath, "utf8", (err, data) => {
			if (err) {
				throw err;
			}
			res.send(JSON.parse(data));
		});
	});

	app.get("/monsters/:name", (req, res) => {
		let name = req.params["name"];
		const monsterPath = `./data/${name}.json`;

		fs.access(monsterPath, fs.F_OK, (err) => {
			if (err) {
				res.status(404).send({ error: 'Monster not found' });
				return
			}
			fs.readFile(monsterPath, "utf8", (err, data) => {
				if (err) {
					res.status(404).send({ error: 'Monster not found' });
					throw err;
				}
				res.send(JSON.parse(data));
			})
		})
	});

	app.get("/monsters/attribute/:element", (req, res) => {
		const element = req.params["element"];
		fs.readFile(dataPath, "utf8", (err, data) => {
			if (err) {
				throw err;
			}
			const info = JSON.parse(data);
			const filterData = info.results.filter(item => item.attribute.tid === element.toUpperCase());
			res.send(filterData);
		});
	});

	app.get("/monsters/class/:type", (req, res) => {
		const type = req.params["type"];
		fs.readFile(dataPath, "utf8", (err, data) => {
			if (err) {
				throw err;
			}
			const info = JSON.parse(data);
			const filterData = info.results.filter(item => item.class.tid === type.toUpperCase());
			res.send(filterData);
		});
	});
};

module.exports = monsters;