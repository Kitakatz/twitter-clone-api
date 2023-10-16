import { Request } from "express";
import CryptoJS from "crypto-js";

/**
 * @name createFingerprint 
 * @description - Returns a fingerprint created from a combination of headers which are unique and represent the client's machine.
 * @param Request - The request object from the client and Express.
 */

type Fingerprint = string;

const createFingerprint = (request: Request): Fingerprint => {
  const rawFingerprint: string = (request.headers["sec-ch-ua"] || "")
    + (request.headers["user-agent"] || "")
    + (request.headers["sec-ch-ua-platform"] || "")
    + (request.headers["accept-language"] || "");

  const fingerprintHash = CryptoJS.SHA256(rawFingerprint).toString(CryptoJS.enc.Hex);

  return fingerprintHash;
};

export default createFingerprint;