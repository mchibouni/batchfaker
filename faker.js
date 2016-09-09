var faker = require('faker');
var express = require('express')
var app = express();

app.get('/products', function(req, res) {

	var size = req.query.size || 10;

	if (isNaN(parseInt(size))){
		size = 10;
	}

	var result = {
		'products': []
	};

	for (var i = 0; i <= size; i++) {
		result.products.push({
			color: faker.commerce.color(),
			category: faker.commerce.department(),
			productName: faker.commerce.productName(),
			price: faker.commerce.price(),
			tag: faker.commerce.productAdjective(),
			productMaterial: faker.commerce.productMaterial(),
			imageUrl: faker.image.technics(),
			createdAt : new Date()
		});
	}

	res.json(result);

})

app.listen(3000);
