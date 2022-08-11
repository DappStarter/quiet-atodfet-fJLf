require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize flock tribe stock riot rural mimic grace pave army genius'; 
let testAccounts = [
"0xfc4bcaa00d497c3051afbf4cbbf198426958be2026aadf6ce43d07b9ea4993cf",
"0x5cf7ad1df03ae15432561ed6a50fbd1be085e3fee67adc1f32acf44667612462",
"0xf49ea9879eaf88927508d0a83ef0a90b8f42d83924ec6da3560b89060c8373aa",
"0xa5e650c61f41f33da4cddb0b12ea3e09d5a4b0bce8b89d5aebb4c1ca9db406f0",
"0x1cb36aadcbd0d289ccc69bd254573d2f488091095fbf7138a0227932a5e6a13d",
"0xe30fcba47d509eb9ec96c321bce5747e352d3c728ae5751ffc5034b8cc6ffff0",
"0x712e7311057245bd849582a2d58488b037cb3280743726633c7042a9e40befac",
"0x62d6ee2332799e921ff2e3df73cd1dc773e61a570bd3a5c914bfcc73c4be04c8",
"0x7f455e198380d65001db4524b9a82c691a2b192e85dc04a5ec5b80a56cd92e33",
"0x54c08412d199a1093d4149da56dff73f4ae254cc45b88fcce52d73861791aa58"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


