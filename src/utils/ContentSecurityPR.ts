const ContentSecurityPr = (server: any) => {
  server.use((_: any, response: any, next: any) => {
    response.setHeader(
      'Content-Security-Policy-Report-Only', 
      "default-src 'self'; script-src 'self'; style-src 'self'; font-src 'self'; img-src 'self'; frame-src 'self'"
    );

    next();
  });
};

export default ContentSecurityPr;