import { ENCRYPTION_KEY_BITS } from "../constants";
import { blobToArrayBuffer } from "./blob";
export const IV_LENGTH_BYTES = 12;
export const createIV = () => {
    const arr = new Uint8Array(IV_LENGTH_BYTES);
    return window.crypto.getRandomValues(arr);
};
export const generateEncryptionKey = async (returnAs) => {
    const key = await window.crypto.subtle.generateKey({
        name: "AES-GCM",
        length: ENCRYPTION_KEY_BITS,
    }, true, // extractable
    ["encrypt", "decrypt"]);
    return (returnAs === "cryptoKey"
        ? key
        : (await window.crypto.subtle.exportKey("jwk", key)).k);
};
export const getCryptoKey = (key, usage) => window.crypto.subtle.importKey("jwk", {
    alg: "A128GCM",
    ext: true,
    k: key,
    key_ops: ["encrypt", "decrypt"],
    kty: "oct",
}, {
    name: "AES-GCM",
    length: ENCRYPTION_KEY_BITS,
}, false, // extractable
[usage]);
export const encryptData = async (key, data) => {
    const importedKey = typeof key === "string" ? await getCryptoKey(key, "encrypt") : key;
    const iv = createIV();
    const buffer = typeof data === "string"
        ? new TextEncoder().encode(data)
        : data instanceof Uint8Array
            ? data
            : data instanceof Blob
                ? await blobToArrayBuffer(data)
                : data;
    // We use symmetric encryption. AES-GCM is the recommended algorithm and
    // includes checks that the ciphertext has not been modified by an attacker.
    const encryptedBuffer = await window.crypto.subtle.encrypt({
        name: "AES-GCM",
        iv,
    }, importedKey, buffer);
    return { encryptedBuffer, iv };
};
export const decryptData = async (iv, encrypted, privateKey) => {
    const key = await getCryptoKey(privateKey, "decrypt");
    return window.crypto.subtle.decrypt({
        name: "AES-GCM",
        iv,
    }, key, encrypted);
};
