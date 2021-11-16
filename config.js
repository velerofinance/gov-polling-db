const {
  makeRawLogExtractors,
} = require("spock-etl/lib/core/processors/extractors/instances/rawEventDataExtractor");

const mkrTransformer = require("./transformers/MkrTransformer");
const mkrBalanceTransformer = require("./transformers/MkrBalanceTransformer");
const chiefBalanceTransformer = require("./transformers/ChiefBalanceTransformer");
const pollingTransformerImport = require("./transformers/PollingTransformer");
const pollingTransformer = pollingTransformerImport.default;
const dsChiefTransformer = require("./transformers/DsChiefTransformer");
const voteProxyFactoryTransformer = require("./transformers/VoteProxyFactoryTransformer");
const esmTransformer = require("./transformers/EsmTransformer");
const voteDelegateFactoryTransformer = require("./transformers/VoteDelegateFactoryTransformer");

//mainnet
const MKR_ADDRESS = "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2";
const VOTING_CONTRACT_ADDRESS = pollingTransformerImport.VOTING_CONTRACT_ADDRESS;
const SECOND_VOTING_CONTRACT_ADDRESS = "0xD3A9FE267852281a1e6307a1C37CDfD76d39b133";
const DSCHIEF_ADDRESS = "0x9eF05f7F6deB616fd37aC3c959a2dDD25A54E4F5";
const VOTE_PROXY_FACTORY_ADDRESS = "0x868ba9aeacA5B73c7C27F3B01588bf4F1339F2bC";
const ESM_ADDRESS = "0x29CfBd381043D00a98fD9904a431015Fef07af2f";
const DSCHIEF_12_ADDRESS = "0x0a3f6849f78076aefaDf113F5BED87720274dDC0";
const VOTE_PROXY_FACTORY_12_ADDRESS = "0x6FCD258af181B3221073A96dD90D1f7AE7eEc408";
const VOTE_DELEGATE_FACTORY_ADDRESS = "0xD897F108670903D1d6070fcf818f9db3615AF272";

//kovan
const MKR_KOVAN_ADDRESS = "0xaaf64bfcc32d0f15873a02163e7e500671a4ffcd";
const VOTING_CONTRACT_KOVAN_ADDRESS = pollingTransformerImport.VOTING_CONTRACT_KOVAN_ADDRESS;
const SECOND_VOTING_CONTRACT_KOVAN_ADDRESS = "0xD931E7c869618dB6FD30cfE4e89248CAA091Ea5f";
const DSCHIEF_KOVAN_ADDRESS = "0xbbffc76e94b34f72d96d054b31f6424249c1337d";
const VOTE_PROXY_FACTORY_KOVAN_ADDRESS = "0x3e08741a68c2d964d172793cd0ad14292f658cd8";
const ESM_ADDRESS_KOVAN = "0xD5D728446275B0A12E4a4038527974b92353B4a9";
const DSCHIEF_12_KOVAN_ADDRESS = '0x27E0c9567729Ea6e3241DE74B3dE499b7ddd3fe6';
const VOTE_PROXY_FACTORY_12_KOVAN_ADDRESS = "0x1400798AA746457E467A1eb9b3F3f72C25314429";
const VOTE_DELEGATE_FACTORY_KOVAN_ADDRESS = "0x1740F3bD55b1900C816A0071F8972C201566e3a3";

//velas
const MKR_VELAS_ADDRESS = "0xd12f7A98C0d740E7Ec82E8caF94EB79C56D1B623";
const VOTING_CONTRACT_VELAS_ADDRESS = pollingTransformerImport.VOTING_CONTRACT_VELAS_ADDRESS;
const SECOND_VOTING_CONTRACT_VELAS_ADDRESS = "0xA4263A7C5b39266e669fD8bB142B923345bb9A1b";
const DSCHIEF_VELAS_ADDRESS = "0xA8008c5F9a0915A51C429544D52d24128fEe0B93";
const VOTE_PROXY_FACTORY_VELAS_ADDRESS = "0x748e8510562481F591A8b32A1ac86bB414F81162";
const ESM_ADDRESS_VELAS = "0x63aCA4a3FF50AF881566113552Ac7f87c221C09D";
const DSCHIEF_12_VELAS_ADDRESS = '0xA8008c5F9a0915A51C429544D52d24128fEe0B93';
const VOTE_PROXY_FACTORY_12_VELAS_ADDRESS = "0x748e8510562481F591A8b32A1ac86bB414F81162";
const VOTE_DELEGATE_FACTORY_VELAS_ADDRESS = "0x8B0Df303b9d5d50C5c41dDF8AF76EfD807e76ab1";

//velastestnet
const MKR_VELASTESTNET_ADDRESS = "0x7809B1861e10c86d02957b776deB23847168e230";
const VOTING_CONTRACT_VELASTESTNET_ADDRESS = pollingTransformerImport.VOTING_CONTRACT_VELASTESTNET_ADDRESS;
const SECOND_VOTING_CONTRACT_VELASTESTNET_ADDRESS = "0x279B55B72a3d7ff13BBBc29713397a8687c58C00";
const DSCHIEF_VELASTESTNET_ADDRESS = "0xD866F0422fa0EC6aCa99e8af8a5FF5DA913A3ccD";
const VOTE_PROXY_FACTORY_VELASTESTNET_ADDRESS = "0x9E07de2Ac566d4a2d5Ceae843396a6CcD083c799";
const ESM_ADDRESS_VELASTESTNET = "0x52f827a8975Cd56F82E375cf06291CF8A8029694";
const DSCHIEF_12_VELASTESTNET_ADDRESS = '0xD866F0422fa0EC6aCa99e8af8a5FF5DA913A3ccD';
const VOTE_PROXY_FACTORY_12_VELASTESTNET_ADDRESS = "0x9E07de2Ac566d4a2d5Ceae843396a6CcD083c799";
const VOTE_DELEGATE_FACTORY_VELASTESTNET_ADDRESS = "0x4947BDb54aA272a8d6bEFeef1E0e4755f08FF74F";


const kovan = {
  startingBlock: 5216304,
  extractors: [
    ...makeRawLogExtractors([
      VOTING_CONTRACT_KOVAN_ADDRESS,
      SECOND_VOTING_CONTRACT_KOVAN_ADDRESS,
      MKR_KOVAN_ADDRESS,
      DSCHIEF_KOVAN_ADDRESS,
      VOTE_PROXY_FACTORY_KOVAN_ADDRESS,
      DSCHIEF_12_KOVAN_ADDRESS,
      VOTE_PROXY_FACTORY_12_KOVAN_ADDRESS,
      ESM_ADDRESS_KOVAN,
      VOTE_DELEGATE_FACTORY_KOVAN_ADDRESS,
    ]),
  ],
  transformers: [
    pollingTransformer(VOTING_CONTRACT_KOVAN_ADDRESS),
    pollingTransformer(SECOND_VOTING_CONTRACT_KOVAN_ADDRESS),
    mkrTransformer(MKR_KOVAN_ADDRESS),
    mkrBalanceTransformer(MKR_KOVAN_ADDRESS),
    dsChiefTransformer(DSCHIEF_KOVAN_ADDRESS),
    chiefBalanceTransformer(DSCHIEF_KOVAN_ADDRESS),
    voteProxyFactoryTransformer(VOTE_PROXY_FACTORY_KOVAN_ADDRESS),
    dsChiefTransformer(DSCHIEF_12_KOVAN_ADDRESS, '_v1.2'),
    chiefBalanceTransformer(DSCHIEF_12_KOVAN_ADDRESS, '_v1.2'),
    voteProxyFactoryTransformer(VOTE_PROXY_FACTORY_12_KOVAN_ADDRESS, '_v1.2'),
    esmTransformer(ESM_ADDRESS_KOVAN),
    voteDelegateFactoryTransformer(VOTE_DELEGATE_FACTORY_KOVAN_ADDRESS),
  ],
  migrations: {
    mkr: "./migrations",
  },
  api: {
    whitelisting: {
      enabled: false,
    },
    responseCaching: {
      enabled: false,
      duration: "15 seconds",
    },
  },
};

const mainnet = {
  startingBlock: 4620855,
  extractors: [
    ...makeRawLogExtractors([
      VOTING_CONTRACT_ADDRESS,
      SECOND_VOTING_CONTRACT_ADDRESS,
      MKR_ADDRESS,
      DSCHIEF_ADDRESS,
      VOTE_PROXY_FACTORY_ADDRESS,
      DSCHIEF_12_ADDRESS,
      VOTE_PROXY_FACTORY_12_ADDRESS,
      ESM_ADDRESS,
      VOTE_DELEGATE_FACTORY_ADDRESS,
    ]),
  ],
  transformers: [
    pollingTransformer(VOTING_CONTRACT_ADDRESS),
    pollingTransformer(SECOND_VOTING_CONTRACT_ADDRESS),
    mkrTransformer(MKR_ADDRESS),
    mkrBalanceTransformer(MKR_ADDRESS),
    dsChiefTransformer(DSCHIEF_ADDRESS),
    chiefBalanceTransformer(DSCHIEF_ADDRESS),
    voteProxyFactoryTransformer(VOTE_PROXY_FACTORY_ADDRESS),
    dsChiefTransformer(DSCHIEF_12_ADDRESS, '_v1.2'),
    chiefBalanceTransformer(DSCHIEF_12_ADDRESS, '_v1.2'),
    voteProxyFactoryTransformer(VOTE_PROXY_FACTORY_12_ADDRESS, '_v1.2'),
    esmTransformer(ESM_ADDRESS),
    voteDelegateFactoryTransformer(VOTE_DELEGATE_FACTORY_ADDRESS),
  ],
  migrations: {
    mkr: "./migrations",
  },
  api: {
    whitelisting: {
      enabled: false,
    },
    responseCaching: {
      enabled: false,
      duration: "15 seconds"
    },
  },
};

const velas = {
  startingBlock: 68886,
  extractors: [
    ...makeRawLogExtractors([
      VOTING_CONTRACT_VELAS_ADDRESS,
      SECOND_VOTING_CONTRACT_VELAS_ADDRESS,
      MKR_VELAS_ADDRESS,
      DSCHIEF_VELAS_ADDRESS,
      VOTE_PROXY_FACTORY_VELAS_ADDRESS,
      ESM_ADDRESS_VELAS,
      VOTE_DELEGATE_FACTORY_VELAS_ADDRESS,
    ]),
  ],
  transformers: [
    pollingTransformer(VOTING_CONTRACT_VELAS_ADDRESS),
    pollingTransformer(SECOND_VOTING_CONTRACT_VELAS_ADDRESS),
    mkrTransformer(MKR_VELAS_ADDRESS),
    mkrBalanceTransformer(MKR_VELAS_ADDRESS),
    dsChiefTransformer(DSCHIEF_VELAS_ADDRESS),
    chiefBalanceTransformer(DSCHIEF_VELAS_ADDRESS),
    voteProxyFactoryTransformer(VOTE_PROXY_FACTORY_VELAS_ADDRESS),
    // dsChiefTransformer(DSCHIEF_12_ADDRESS, '_v1.2'),
    // chiefBalanceTransformer(DSCHIEF_12_ADDRESS, '_v1.2'),
    // voteProxyFactoryTransformer(VOTE_PROXY_FACTORY_12_ADDRESS, '_v1.2'),
    esmTransformer(ESM_ADDRESS_VELAS),
    voteDelegateFactoryTransformer(VOTE_DELEGATE_FACTORY_VELAS_ADDRESS),
  ],
  migrations: {
    mkr: "./migrations",
  },
  api: {
    whitelisting: {
      enabled: false,
    },
    responseCaching: {
      enabled: false,
      duration: "15 seconds"
    },
  },
};

const velastestnet = {
  startingBlock: 1385733,
  extractors: [
    ...makeRawLogExtractors([
      VOTING_CONTRACT_VELASTESTNET_ADDRESS,
      SECOND_VOTING_CONTRACT_VELASTESTNET_ADDRESS,
      MKR_VELASTESTNET_ADDRESS,
      DSCHIEF_VELASTESTNET_ADDRESS,
      VOTE_PROXY_FACTORY_VELASTESTNET_ADDRESS,
      ESM_ADDRESS_VELASTESTNET,
      VOTE_DELEGATE_FACTORY_VELASTESTNET_ADDRESS,
    ]),
  ],
  transformers: [
    pollingTransformer(VOTING_CONTRACT_VELASTESTNET_ADDRESS),
    pollingTransformer(SECOND_VOTING_CONTRACT_VELASTESTNET_ADDRESS),
    mkrTransformer(MKR_VELASTESTNET_ADDRESS),
    mkrBalanceTransformer(MKR_VELASTESTNET_ADDRESS),
    dsChiefTransformer(DSCHIEF_VELASTESTNET_ADDRESS),
    chiefBalanceTransformer(DSCHIEF_VELASTESTNET_ADDRESS),
    voteProxyFactoryTransformer(VOTE_PROXY_FACTORY_VELASTESTNET_ADDRESS),
    // dsChiefTransformer(DSCHIEF_12_ADDRESS, '_v1.2'),
    // chiefBalanceTransformer(DSCHIEF_12_ADDRESS, '_v1.2'),
    // voteProxyFactoryTransformer(VOTE_PROXY_FACTORY_12_ADDRESS, '_v1.2'),
    esmTransformer(ESM_ADDRESS_VELASTESTNET),
    voteDelegateFactoryTransformer(VOTE_DELEGATE_FACTORY_VELASTESTNET_ADDRESS),
  ],
  migrations: {
    mkr: "./migrations",
  },
  api: {
    whitelisting: {
      enabled: false,
    },
    responseCaching: {
      enabled: false,
      duration: "15 seconds"
    },
  },
};

let config;
switch (process.env.VL_CHAIN_NAME) {
  case "mainnet":
    console.log("Using mainnet config");
    config = mainnet;
    break
  case "kovan":
    console.log("Using kovan config");
    config = kovan;
    break
  case "velas":
    console.log("Using velas config");
    config = velas;
    break
  case "velastestnet":
    console.log("Using velastestnet config");
    config = velastestnet;
    break
}
// if (process.env.VL_CHAIN_NAME === "mainnet") {
//   console.log("Using mainnet config");
//   config = mainnet;
// } else {
//   console.log("Using kovan config");
//   config = kovan;
// }

module.exports.default = config;
