export const API_ENDPOINTS = {
  ///front page
  FRONTPAGE: '/site/index',

  OFFER: '/offer/page',
  SEARCH: '/offer/search',
  SEARCH_FILTER: '/offer/filters',
  CATEGORIES: 'categories',
  REVIEWS: 'offer/page/reviews',
  RECOMMENDATION: 'offer/page/recommendation',

  //voucher
  voucherlist: '/voucher/items',
  viewVoucher: '/voucher/item',
  sendVoucherData: 'voucher/checkout',
  sendVoucherPay: '/voucher/payment',


  // wishlist
  listWishlist: '/user/profile/wishlist',
  createShared: '/user/profile/wishlist/share-create',
  DeleteWishlist: '/user/profile/wishlist/delete',
  listWishitemView:'/user/profile/wishlist/show',
  listWishitemShared:'/wishlist/share-view',
  addwishlistItem:'/user/profile/wishlist/item/create',
  removeItemWishlist:'/user/profile/wishlist/item/delete',
  createWishlist: '/user/profile/wishlist/create',
  userWishlistUpdate: '/user/profile/wishlist/update',

  /** cart booking **/
  CartPriceCheck: '/booking/check/date',
  cartInfo: '/booking/card/info',
  cartData: '/booking/card/details',
  installment: '/booking/card/installment',
  getRooms: '/booking/room/show',
  addRoom: (querystring) => `/booking/room/add?${querystring}`,
  removeRoom: (querystring) => `/booking/room/delete?${querystring}`,

  getExtras: (querystring) => `/booking/extra/show?${querystring}`,
  addExtras: (querystring) => `/booking/extra/add?${querystring}`,
  removeExtras: (querystring) => `/booking/extra/delete?${querystring}`,

  getInfo: (querystring) => `/booking/customerdata/show?${querystring}`,
  submitBooking: (querystring) => `/booking/customerdata/create?${querystring}`,
  paymentCode: (querystring) => `/booking/paymentCode?${querystring}`,
  paymentCheck: (querystring) => `/booking/paymentCheck?${querystring}`,
  paymentLink: (querystring) => `/booking/paymentLink?${querystring}`,
  paymentSofort: (querystring) => `/booking/paymentSofort?${querystring}`,
  paymentKlarna: (querystring) => `/booking/paymentKlarna?${querystring}`,
  paymentPaypal: (querystring) => `/booking/paymentPaypal?${querystring}`,

  /** auth **/
  LOGIN: '/auth/login/phone',
  LoginSocial: '/auth/login-social/callbacklogin',
  MoBileOtpLogin: '/auth/confirm/code',
  AuthResendOtp: '/auth/confirm/code',
  AuthLoginEmail: '/auth/login/email',
  AuthRegister: '/auth/register/email',
  CountryList: '/nationalities',
  CategoryAndLevel: '/user/profile/category',
  UpdateProfileInfo: '/user/profile/update',
  SENDNOTIF: '/user/profile/newslatter',
  LOGOUT: '/user/profile/auth/logout',
  DEACTIVE: '/user/profile/auth/dective',
  DELETE: '/user/profile/delete',
  CHANGEPASS: '/user/profile/auth/changepassword',

  /** user **/
  UserInfo: '/user/profile/info',
  bookingView: '/user/profile/booking',
  BookingList: '/user/profile/booking',
  arrivalSend: '/user/profile/booking/customdata',
  reportBook: '/user/profile/booking/conflict',
  updateProfilePhoto: '/user/profile/photo/update',
  removeProfilePhoto: '/user/profile/photo/remove',
  /**TRIPFINDER **/

  SEARCHTRIPFINDER: "/offer/trip-finder",

  /** blog **/
  blogFrontPage: '/blog/front/index',
  blogView: '/blog/front/post',
  typeList: '/user/profile/booking/conflict/type',
  cancelingView: '/user/profile/booking/cancelation/info',
  blogCategories: '/blog/front/categories',
  blogSendComment: '/blog/front/comment-add',
  blogListComment: '/blog/front/comments',
  blogCategoryPost: '/blog/front/posts',
  /** provider **/
  ProviderView: (querystring) => `/provider/info/${querystring}`,
  ProviderReview: (querystring) => `/provider/review/${querystring}`,

};
