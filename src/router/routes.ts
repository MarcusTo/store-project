name: ROUTE_PATHS.CART,
component: () => import("@/views/CartView.vue"),
},
{
path: ROUTE_PATHS.NEW_USED_IPHONE,
name: ROUTE_PATHS.NEW_USED_IPHONE,
component: () => import("@/views/NewUsed.vue"),
props: true,
},
{
path: ROUTE_PATHS.NEW_IPHONE,
name: ROUTE_PATHS.NEW_IPHONE,
component: () => import("@/views/NewIphoneView.vue"),
props: true, // Enable props
},
{
path: ROUTE_PATHS.USED_IPHONE,
name: ROUTE_PATHS.USED_IPHONE,
component: () => import("@/views/UsedIphoneView.vue"),
props: true, // Enable props
},
];

export default routes;