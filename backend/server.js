import express from 'express';
import morgan from 'morgan';
import timeout from 'express-timeout-handler';
import { json, urlencoded } from 'body-parser';
import core from './core/core';

/*
 
 ███████╗███████╗████████╗██╗   ██╗██████╗ 
 ██╔════╝██╔════╝╚══██╔══╝██║   ██║██╔══██╗
 ███████╗█████╗     ██║   ██║   ██║██████╔╝
 ╚════██║██╔══╝     ██║   ██║   ██║██╔═══╝ 
 ███████║███████╗   ██║   ╚██████╔╝██║     
 ╚══════╝╚══════╝   ╚═╝    ╚═════╝ ╚═╝     
                                           
 
*/

const app = express();

app.use(morgan('dev'));

app.use(json());
app.use(urlencoded({ extended: true }));

app.use(
	timeout.handler({
		timeout: 30000,
		onTimeout: function(req, res) {
			res.status(503).send('Request timeout. Please retry again later');
		},
	})
);
/*
 
 ██████╗  ██████╗ ██╗   ██╗████████╗███████╗███████╗
 ██╔══██╗██╔═══██╗██║   ██║╚══██╔══╝██╔════╝██╔════╝
 ██████╔╝██║   ██║██║   ██║   ██║   █████╗  ███████╗
 ██╔══██╗██║   ██║██║   ██║   ██║   ██╔══╝  ╚════██║
 ██║  ██║╚██████╔╝╚██████╔╝   ██║   ███████╗███████║
 ╚═╝  ╚═╝ ╚═════╝  ╚═════╝    ╚═╝   ╚══════╝╚══════╝
                                                    
 
*/

core.generateAllProducts();

// THIS IS HERE FOR REFERENCE TO ANYONE WHO WANTS TO KNOW
// HOW THE CORE WORKS...

// let Product = core.genBaseProduct('Burger');
// Product.variants.push(core.genProduct('Cheese Burger'));
// Product.variants.push(core.genProduct('Hamburger Burger'));

// Product.images = [
// 	{
// 		src:
// 			'https://www.thecocktaildb.com/images/media/drink/l74qo91582480316.jpg',
// 	},
// ];

// core.addProduct(Product);

app.listen(8080, () => {
	console.log('RUNNING ON PORT 8080');
});
