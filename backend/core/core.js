import fetch from 'node-fetch';
import Shopify from 'shopify-api-node';
import faker from 'faker';
import _ from 'lodash';

// THIS IS WHERE THE FUN HAPPENS

class core {
	constructor() {
		this.connection = this.connect();
		this.breeds = [];
		this.subBreeds = {};
		this.everything = [];
	}

	connect() {
		console.log('connecting');
		return new Shopify({
			shopName: 'arkadeshowcase2',
			apiKey: '9d42aafe89ef2225c03bd5710cc7e128',
			password: '519630da5acea3d6cbe230977035584a',
		});
	}

	getAllIngredients() {
		return new fetch(
			`https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`
		);
	}

	getAllCocktailsForIngredient(ingredient) {
		return new fetch(
			`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
		);
	}

	getAllIngredients() {
		return new fetch(
			`https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`
		);
	}

	generateAllProducts() {
		this.getAllIngredients()
			.then(res => res.json())
			.then(body => {
				body.drinks.forEach(async ingredient => {
					setTimeout(() => {
						// We are going to make a base product...
						let Product = this.genBaseProduct(
							ingredient.strIngredient1,
							ingredient.strDrinkThumb || ''
						);

						// We are now going to get all the cocktails you can make with that ingredient...
						// These will be our variants.

						this.getAllCocktailsForIngredient(Product.title)
							.then(res => res.json())
							.then(secondBody => {
								secondBody.drinks.map((drink, id) => {
									Product.variants.push(
										this.genProduct(drink.strDrink, id)
									);
								});
							})
							.then(() => {
								this.addProduct(Product);
							});
					}, 10000);
				});
			});
	}

	genBaseProduct(name, image) {
		return {
			title: name,
			body_html: 'Tipsy Tipsy',
			vendor: 'ArkadeShowcase',
			product_type: 'Drink',
			tags: [],
			variants: [],
			images: [
				{
					src: `${
						image.length >= 2
							? image
							: 'https://www.thecocktaildb.com/images/media/drink/sbffau1504389764.jpg'
					}`,
				},
			],
		};
	}

	genProduct(name, id) {
		let variant = {
			price: faker.finance.account(),
		};
		variant[`option1`] = name;

		return variant;
	}

	addProducts() {
		try {
			this.createProductList()
				.then(() => {
					this.breeds.forEach(breed => {
						this.connection.product
							.create({
								title: breed,
								body_html: 'Look at this cute puppy',
								vendor: 'ArkadeShowcase',
								product_type: 'Dog',
								tags: [],
							})
							.then(resultingProduct => {
								// This is where we now generate the variants, for
								// the ID of the product we just made.

								const { id } = resultingProduct;

								this.subBreeds[breed].map(subBreed =>
									this.connection.productVariant
										.create(id, subBreed)
										.catch(error => {
											if (error) {
												console.log('ERROR IN VARIANT');
												console.log(error);
											}
										})
								);
							});
					});
				})
				.then(() => console.log('done'));
		} catch (error) {
			console.log(error.response.body);
		}

		return this;
	}

	addProduct(Product, tries = 0) {
		this.connection.product
			.create(Product)
			.then(result => {
				const { id, title } = result;
				// this.addImageToVariants(result.variants, result.images);
				console.log(`ADDED ::: ${title}`);
			})
			.catch(error => {
				if (error) {
					// To handle this error, we are going to wait 4 seconds and try again...
					// a total of 5 times.
					if (!(tries >= 5)) {
						setTimeout(() => {
							this.addProduct(Product, (tries += 1));
						}, 4000);
					} else {
						console.log('\tERROR ::: ' + Product.title);
					}
				}
			});
	}
}

const singleton = new core();

export default singleton;
