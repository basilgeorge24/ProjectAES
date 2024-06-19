function encrypt() {
  const plainText = document.getElementById("plainText").value;
  const key = document.getElementById("encryptionKey").value;
  if (plainText && key) {
    const cipherText = CryptoJS.AES.encrypt(plainText, key).toString();
    document.getElementById("cipherText").value = cipherText;
  } else {
    alert("Please enter both plain text and key.");
  }
}

function decrypt() {
  const cipherText = document.getElementById("cipherTextToDecrypt").value;
  const key = document.getElementById("decryptionKey").value;

  try {
    // Attempt to decrypt the cipher text
    const decrypted = CryptoJS.AES.decrypt(cipherText, key);
    // Convert the decrypted data to a UTF-8 string
    const decryptedText = decrypted.toString(CryptoJS.enc.Utf8);

    // Check if the result is empty, if so, still display it
    if (decryptedText) {
      document.getElementById("decryptedText").value = decryptedText;
    } else {
      // If the decryption results in an empty string, convert to gibberish output
      document.getElementById("decryptedText").value = decrypted.toString(
        CryptoJS.enc.Base64
      );
    }
  } catch (error) {
    // Display the raw decrypted data even if an error occurs
    document.getElementById("decryptedText").value =
      "Decryption failed, possibly incorrect key";
  }
}
