require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'gloom private boil suggest name rice rural equip hope brand fortune ghost'; 
let testAccounts = [
"0x36ef8c168c6e5b859985568cd2a348c464c2049166ae1c948e3bb53f1b0d6e62",
"0xa893d91ca2da7388ff718f2f28e35c950be6e981934be273998482711c698e2c",
"0x0cbb4e28a42e84e572d4fab65918b18c582b557e80d8117ba3678135a19b748e",
"0x6d4e3def2522e824d477fdb29f8093d035602905df57460f8514f7b79289dd7f",
"0x9029a4e0ac295bea99de512dd968f03dff1012245bbbb5181f6362031c89860a",
"0xb31b5852fd362ae38d10f8154d31c69fcfaac4a1c3f0bb57c7f41c3d2b42e40d",
"0x1a77b063cf8bd1bd893fedee7086f0603964bb390892aa6230aecf445aae0e07",
"0x37f2e9e45d5e4f86adacb2a66ced031beca6695de7d3455df21235ae44504408",
"0xb2ea2049d055fdb3dc9faf749fa44af39b9fa413d15caf3db87d4535b3d7b127",
"0x0a6fb9eebe935966643fdc53412eadef383d8f01480b25e9786b49ae8ba21d98"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


