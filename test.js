const { addresses, PublicKey } = require("./ecc/src/PublicKey");

let pubKey = PublicKey.fromPublicKeyString("CYB5bxCtbzMhTVxeep7iR5eKFq1MzgWFeyk8rExgdEXiowfAKSBhX", "CYB")
let address = addresses(pubKey, "CYB");

console.log("ADD: ", address);