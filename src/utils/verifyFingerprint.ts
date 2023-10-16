import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";

/**
 * @name verifyFingerprint
 * @author - Andrew Kita
 * @description - Uses a json web token and fingerprint to compare the users client fingerprint to the json web token fingerprint.
 * @param token - A json web token.
 * @param fingerprint - A hashed fingerprint.
 * @lastUpdated - September 29th 2023 18:18
 */

const verifyFingerprint = (token: string, fingerprint: string): boolean => {
  const JWT_SECRET: string = process.env.JWT_SECRET ? process.env.JWT_SECRET : "";

  const decoded = jwt.verify(token, JWT_SECRET);

  //review this line ****
  // if the type is and object then return ""
  // && typeof
  const jwtFingerprintHash: string = typeof decoded === 'object' ? decoded.fingerprint : "";

  const clientFingerprint: string = fingerprint;
  const clientFingerprintHash = CryptoJS.SHA256(clientFingerprint).toString(CryptoJS.enc.Hex);

  if (jwtFingerprintHash !== clientFingerprintHash) return false;

  return true;
};

//look into cryptojs more EX: 'SHA256' 

export default verifyFingerprint;