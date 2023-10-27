import cors from 'cors';
import express from 'express';


const ContentSecurityPr = () => {
  const server = express();
  server.use((_, response) => {
    response.setHeader(
      'Content-Security-Policy-Report-Only', 
      "default-src 'self'; script-src 'self'; style-src 'self'; font-src 'self'; img-src 'self'; frame-src 'self'"
    );
  });

  server.use(cors({ 
    credentials: true,
    origin: 'http://localhost:3000'
  }));
};

export default ContentSecurityPr;