import { Router } from 'express';
import core from '../core/core';

const router = Router();

router.get('/products', async (req, res) => {
	let result = await core.connection.product.list({ limit: 100 });
	res.json(result);
});

export default router;
