export enum ROUTE_PATHS {
  HOME = "/",
  
  PRODUCTS = "/products",
  PRODUCT_DETAILS = "/products/:id",

  CART = "/cart",
  CHECKOUT = "/checkout",
  
  LOGIN = "/login",
  REGISTER = "/register",
  
  PROFILE = "/profile",
  
  ORDERS = "/orders",
  
  ABOUT = "/about",
  CONTACT = "/contact",
}
export enum ROUTE_PATHS_NO_REGEX {
//   POLICIES = "/form/policies/",
//   METRICS = "/form/metrics/",
//   ARAT = "/form/arat/",
//   DOFP = "/form/dofp/",
//   MIRAO = "/form/mirao/",
}

export default { ROUTE_PATHS };
