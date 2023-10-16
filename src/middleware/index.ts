import consoleLog from "./consoleLog";
import checkSession from './checkSession';
import verifyToken from './verifyToken';

interface MiddeWareTypes {
  consoleLog: (req: any, res: any, next: any) => void;
  checkSession: (req: any, res: any, next: any) => void;
  verifyToken: (req: any, res: any, next: any) => void;
};

const MiddleWare: MiddeWareTypes = {
  consoleLog: consoleLog,
  checkSession: checkSession,
  verifyToken: verifyToken
};

export default MiddleWare;