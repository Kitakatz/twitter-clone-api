
export default (_: any, __: any, next: any) => {
  console.log('Middleware');
  next();
}