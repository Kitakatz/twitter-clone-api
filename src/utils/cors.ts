import cors from 'cors';

const Cors = (server: any) => {
  server.use(cors({ 
    credentials: true,
    origin: 'http://localhost:3000'
  }));
};

export default Cors;