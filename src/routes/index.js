import express from 'express'
import aboutRoute from './about.route.js'
import blogRoute from './blog.route.js'
import blogDetailsRoute from './blogDetails.route.js'
import checkOutRoute from './checkOut.route.js'
import contactRoute from './contact.route.js'
import shopRoute from './shop.route.js'
import shopDetailsRoute from './shopDetails.route.js'
import shoppingCartRoute from './shoppingCart.route.js'

const router = express.Router()

const defaultRoutes = [
    {
        path: '/shop',
        route: shopRoute,
    },
    {
        path: '/about',
        route: aboutRoute,
    },
    {
        path: '/shop-details',
        route: shopDetailsRoute,
    },
    {
        path: '/shopping-cart',
        route: shoppingCartRoute,
    },
    {
        path: '/checkout',
        route: checkOutRoute,
    },
    {
        path: '/blog',
        route: blogRoute,
    },
    {
        path: 'blog-details',
        route: blogDetailsRoute,
    },
    {
        path: '/contact',
        route: contactRoute,
    },
    {
        path: '/',
        route: (req, res) => {
            res.render('index');
        },
    },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route)
})

export default router