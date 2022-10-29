export const Routes = {
  home: '/',
  blog: `/blog`,
  tripfinder: `/tripfinder`,
  blogView: (alias) => `/blog/view/${encodeURIComponent(alias)}`,

};
