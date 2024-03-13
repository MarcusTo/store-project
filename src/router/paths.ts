export enum ROUTE_PATHS {
  HOME = "/",
  
  PRODUCTS = "/products",
  PRODUCT_DETAILS = "/products/:id",
  
  IPHONE = "/iphone", 
  NEW_USED_IPHONE= "/iphone/new-or-used/:productName/:productId",
  NEW_IPHONE="/iphone/new/:productName/:productId",
  USED_IPHONE="/iphone/used/:productName/:productId",

  AIRPODS = "/airpods",
  NEW_USED_AIRPODS= "/airpods/new-or-used/:productName/:productId",
  NEW_AIRPODS="/airpods/new/:productName/:productId",
  USED_AIRPODS="/airpods/used/:productName/:productId",

  MAC = "/mac",
  NEW_USED_MAC= "/mac/new-or-used/:productName/:productId",
  NEW_MAC="/mac/new/:productName/:productId",
  USED_MAC="/mac/used/:productName/:productId",
  
  SERVICES = "/services",
  CART = "/cartView",
  TO_CART= "/added-to-cart",
  CHECKOUT = "/checkout",
  LOGIN = "/login",
  REGISTER = "/register",
  ORDERS = "/orders",

  
  ABOUT = "/about",
  CONTACT = "/contact",
}

export default { ROUTE_PATHS };
