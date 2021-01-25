import BigNumber from 'bignumber.js';
import { oneEther, oneRay, RAY, ZERO_ADDRESS } from '../../helpers/constants';
import { ICommonConfiguration, EthereumNetwork, eEthereumNetwork } from '../../helpers/types';

const MOCK_CHAINLINK_AGGREGATORS_PRICES = {
  AG: oneEther.multipliedBy('0.003620948469').toFixed(),
  WXDAI: oneEther.multipliedBy('0.00369068412860').toFixed(),
  HNY: oneEther.multipliedBy('2.508581').toFixed(),
  WETH: oneEther.toFixed(),
  WBTC: oneEther.multipliedBy('47.332685').toFixed(),
  USD: '5848466240000000',
};
// ----------------
// PROTOCOL GLOBAL PARAMS
// ----------------

export const CommonsConfig: ICommonConfiguration = {
  MarketId: 'Commons',
  ProviderId: 0,
  ProtocolGlobalParams: {
    TokenDistributorPercentageBase: '10000',
    MockUsdPriceInWei: '5848466240000000',
    UsdAddress: '0x10F7Fc1F91Ba351f9C629c5947AD69bD03C05b96',
    NilAddress: '0x0000000000000000000000000000000000000000',
    OneAddress: '0x0000000000000000000000000000000000000001',
    AaveReferral: '0',
  },

  // ----------------
  // COMMON PROTOCOL PARAMS ACROSS POOLS AND NETWORKS
  // ----------------

  Mocks: {
    AllAssetsInitialPrices: {
      ...MOCK_CHAINLINK_AGGREGATORS_PRICES,
    },
  },
  LendingRateOracleRatesCommon: {
    HNY: {
      borrowRate: oneRay.multipliedBy(0.03).toFixed(),
    },
    WBTC: {
      borrowRate: oneRay.multipliedBy(0.03).toFixed(),
    },
    WETH: {
      borrowRate: oneRay.multipliedBy(0.03).toFixed(),
    },
    WXDAI: {
      borrowRate: oneRay.multipliedBy(0.039).toFixed(),
    },
  },
  // ----------------
  // COMMON PROTOCOL ADDRESSES ACROSS POOLS
  // ----------------

  // If PoolAdmin/emergencyAdmin is set, will take priority over PoolAdminIndex/emergencyAdminIndex
  PoolAdmin: {
    [eEthereumNetwork.coverage]: undefined,
    [eEthereumNetwork.buidlerevm]: undefined,
    [eEthereumNetwork.coverage]: undefined,
    [eEthereumNetwork.hardhat]: undefined,
    [eEthereumNetwork.kovan]: undefined,
    [eEthereumNetwork.ropsten]: undefined,
    [eEthereumNetwork.main]: undefined,
    [eEthereumNetwork.tenderlyMain]: undefined,
  },
  PoolAdminIndex: 0,
  EmergencyAdmin: {
    [eEthereumNetwork.hardhat]: undefined,
    [eEthereumNetwork.coverage]: undefined,
    [eEthereumNetwork.buidlerevm]: undefined,
    [eEthereumNetwork.kovan]: undefined,
    [eEthereumNetwork.ropsten]: undefined,
    [eEthereumNetwork.main]: undefined,
    [eEthereumNetwork.tenderlyMain]: undefined,
  },
  EmergencyAdminIndex: 1,
  ProviderRegistry: {
    [eEthereumNetwork.kovan]: '0xaE88624C894668E1bBABc9AFE87E8CA0fb74eC2a',
    [eEthereumNetwork.ropsten]: '0xaE88624C894668E1bBABc9AFE87E8CA0fb74eC2a',
    [eEthereumNetwork.main]: '',
    [eEthereumNetwork.coverage]: '',
    [eEthereumNetwork.hardhat]: '',
    [eEthereumNetwork.buidlerevm]: '',
    [eEthereumNetwork.tenderlyMain]: '',
  },
  ProviderRegistryOwner: {
    [eEthereumNetwork.kovan]: '0x2d206Fd0C7c76016234810232159b05562608A42',
    [eEthereumNetwork.ropsten]: '0x2d206Fd0C7c76016234810232159b05562608A42',
    [eEthereumNetwork.main]: '',
    [eEthereumNetwork.coverage]: '',
    [eEthereumNetwork.hardhat]: '',
    [eEthereumNetwork.buidlerevm]: '',
    [eEthereumNetwork.tenderlyMain]: '',
  },
  LendingRateOracle: {
    [eEthereumNetwork.coverage]: '',
    [eEthereumNetwork.hardhat]: '',
    [eEthereumNetwork.buidlerevm]: '',
    [eEthereumNetwork.kovan]: '0xfA554E36eEfa3388704D01F5f3cf44aD62c826d6',
    [eEthereumNetwork.ropsten]: '0x3c74d9795C35164D9d4c118437b46a34525faC01',
    [eEthereumNetwork.main]: '',
    [eEthereumNetwork.tenderlyMain]: '',
  },
  TokenDistributor: {
    [eEthereumNetwork.coverage]: '',
    [eEthereumNetwork.buidlerevm]: '',
    [eEthereumNetwork.hardhat]: '',
    [EthereumNetwork.kovan]: '',
    [EthereumNetwork.ropsten]: '',
    [EthereumNetwork.main]: '',
    [EthereumNetwork.tenderlyMain]: '',
  },
  AaveOracle: {
    [eEthereumNetwork.coverage]: '',
    [eEthereumNetwork.hardhat]: '',
    [eEthereumNetwork.buidlerevm]: '',
    [EthereumNetwork.kovan]: '0xa22db3b3Dd9B1206356a3E868cB2a603CBA68b1b',
    [EthereumNetwork.ropsten]: "0x4Fa2b39aA593fc4c931C5db89DaBBF9083Bc855f",
    [EthereumNetwork.main]: '',
    [EthereumNetwork.tenderlyMain]: '',
  },
  FallbackOracle: {
    [eEthereumNetwork.coverage]: '',
    [eEthereumNetwork.hardhat]: '',
    [eEthereumNetwork.buidlerevm]: '',
    [EthereumNetwork.kovan]: '0x50913E8E1c650E790F8a1E741FF9B1B1bB251dfe',
    [EthereumNetwork.ropsten]: '0xAD1a978cdbb8175b2eaeC47B01404f8AEC5f4F0d',
    [EthereumNetwork.main]: ZERO_ADDRESS,
    [EthereumNetwork.tenderlyMain]: ZERO_ADDRESS,
  },
  ChainlinkAggregator: {
    [eEthereumNetwork.coverage]: {},
    [eEthereumNetwork.hardhat]: {},
    [eEthereumNetwork.buidlerevm]: {},
    [EthereumNetwork.kovan]: {
      AG: '0xd04647B7CB523bb9f26730E9B6dE1174db7591Ad', // actually AAVE
      WXDAI: '0x22B58f1EbEDfCA50feF632bD73368b2FdA96D541', // actually DAI
      HNY: '0x0B156192e04bAD92B6C1C13cf8739d14D78D5701', // actually MKR
      WBTC: '0xF7904a295A029a3aBDFFB6F12755974a958C7C25',
      USD: '0x9326BFA02ADD2366b30bacB125260Af641031331',
    },
    [EthereumNetwork.ropsten]: {
      BAT: '0xafd8186c962daf599f171b8600f3e19af7b52c92',
      BUSD: '0x0A32D96Ff131cd5c3E0E5AAB645BF009Eda61564',
      DAI: '0x64b8e49baded7bfb2fd5a9235b2440c0ee02971b',
      KNC: '0x19d97ceb36624a31d827032d8216dd2eb15e9845',
      LINK: '0xb8c99b98913bE2ca4899CdcaF33a3e519C20EeEc',
      MANA: '0xDab909dedB72573c626481fC98CEE1152b81DEC2',
      MKR: '0x811B1f727F8F4aE899774B568d2e72916D91F392',
      SNX: '0xA95674a8Ed9aa9D2E445eb0024a9aa05ab44f6bf',
      SUSD: '0xe054b4aee7ac7645642dd52f1c892ff0128c98f0',
      TUSD: '0x523ac85618df56e940534443125ef16daf785620',
      USDC: '0xe1480303dde539e2c241bdc527649f37c9cbef7d',
      USDT: '0xc08fe0c4d97ccda6b40649c6da621761b628c288',
      WBTC: '0x5b8B87A0abA4be247e660B0e0143bB30Cdf566AF',
      ZRX: '0x1d0052e4ae5b4ae4563cbac50edc3627ca0460d7',
      USD: '0x8468b2bDCE073A157E560AA4D9CcF6dB1DB98507',
    },
    [EthereumNetwork.main]: {
      AAVE: '0x6Df09E975c830ECae5bd4eD9d90f3A95a4f88012',
      BAT: '0x0d16d4528239e9ee52fa531af613AcdB23D88c94',
      BUSD: '0x614715d2Af89E6EC99A233818275142cE88d1Cfd',
      DAI: '0x773616E4d11A78F511299002da57A0a94577F1f4',
      ENJ: '0x24D9aB51950F3d62E9144fdC2f3135DAA6Ce8D1B',
      KNC: '0x656c0544eF4C98A6a98491833A89204Abb045d6b',
      LINK: '0xDC530D9457755926550b59e8ECcdaE7624181557',
      MANA: '0x82A44D92D6c329826dc557c5E1Be6ebeC5D5FeB9',
      MKR: '0x24551a8Fb2A7211A25a17B1481f043A8a8adC7f2',
      REN: '0x3147D7203354Dc06D9fd350c7a2437bcA92387a4',
      SNX: '0x79291A9d692Df95334B1a0B3B4AE6bC606782f8c',
      SUSD: '0x8e0b7e6062272B5eF4524250bFFF8e5Bd3497757',
      TUSD: '0x3886BA987236181D98F2401c507Fb8BeA7871dF2',
      UNI: '0xD6aA3D25116d8dA79Ea0246c4826EB951872e02e',
      USDC: '0x986b5E1e1755e3C2440e960477f25201B0a8bbD4',
      USDT: '0xEe9F2375b4bdF6387aa8265dD4FB8F16512A1d46',
      WBTC: '0xdeb288F737066589598e9214E782fa5A8eD689e8',
      YFI: '0x7c5d4F8345e66f68099581Db340cd65B078C41f4',
      ZRX: '0x2Da4983a622a8498bb1a21FaE9D8F6C664939962',
      USD: '0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419',
    },
    [EthereumNetwork.tenderlyMain]: {
      AAVE: '0x6Df09E975c830ECae5bd4eD9d90f3A95a4f88012',
      BAT: '0x0d16d4528239e9ee52fa531af613AcdB23D88c94',
      BUSD: '0x614715d2Af89E6EC99A233818275142cE88d1Cfd',
      DAI: '0x773616E4d11A78F511299002da57A0a94577F1f4',
      ENJ: '0x24D9aB51950F3d62E9144fdC2f3135DAA6Ce8D1B',
      KNC: '0x656c0544eF4C98A6a98491833A89204Abb045d6b',
      LINK: '0xDC530D9457755926550b59e8ECcdaE7624181557',
      MANA: '0x82A44D92D6c329826dc557c5E1Be6ebeC5D5FeB9',
      MKR: '0x24551a8Fb2A7211A25a17B1481f043A8a8adC7f2',
      REN: '0x3147D7203354Dc06D9fd350c7a2437bcA92387a4',
      SNX: '0x79291A9d692Df95334B1a0B3B4AE6bC606782f8c',
      SUSD: '0x8e0b7e6062272B5eF4524250bFFF8e5Bd3497757',
      TUSD: '0x3886BA987236181D98F2401c507Fb8BeA7871dF2',
      UNI: '0xD6aA3D25116d8dA79Ea0246c4826EB951872e02e',
      USDC: '0x986b5E1e1755e3C2440e960477f25201B0a8bbD4',
      USDT: '0xEe9F2375b4bdF6387aa8265dD4FB8F16512A1d46',
      WBTC: '0xdeb288F737066589598e9214E782fa5A8eD689e8',
      YFI: '0x7c5d4F8345e66f68099581Db340cd65B078C41f4',
      ZRX: '0x2Da4983a622a8498bb1a21FaE9D8F6C664939962',
      USD: '0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419',
    },
  },
  ReserveAssets: {
    [eEthereumNetwork.coverage]: {},
    [eEthereumNetwork.hardhat]: {},
    [eEthereumNetwork.buidlerevm]: {},
    [EthereumNetwork.main]: {},
    [EthereumNetwork.kovan]: {},
    [EthereumNetwork.ropsten]: {},
    [EthereumNetwork.tenderlyMain]: {},
  },
  ReservesConfig: {},
  ATokenDomainSeparator: {
    [eEthereumNetwork.coverage]:
      '0x95b73a72c6ecf4ccbbba5178800023260bad8e75cdccdb8e4827a2977a37c820',
    [eEthereumNetwork.hardhat]:
      '0xbae024d959c6a022dc5ed37294cd39c141034b2ae5f02a955cce75c930a81bf5',
    [eEthereumNetwork.buidlerevm]:
      '0xbae024d959c6a022dc5ed37294cd39c141034b2ae5f02a955cce75c930a81bf5',
    [eEthereumNetwork.kovan]: '',
    [eEthereumNetwork.ropsten]: '',
    [eEthereumNetwork.main]: '',
    [eEthereumNetwork.tenderlyMain]: '',
  },
  WETH: {
    [eEthereumNetwork.coverage]: '', // deployed in local evm
    [eEthereumNetwork.hardhat]: '', // deployed in local evm
    [eEthereumNetwork.buidlerevm]: '', // deployed in local evm
    [eEthereumNetwork.kovan]: '0xd0a1e359811322d97991e03f863a0c30c2cf029c',
    [eEthereumNetwork.ropsten]: '0xc778417e063141139fce010982780140aa0cd5ab',
    [eEthereumNetwork.main]: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    [eEthereumNetwork.tenderlyMain]: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
  },
  ReserveFactorTreasuryAddress: {
    [eEthereumNetwork.coverage]: '',
    [eEthereumNetwork.hardhat]: '',
    [eEthereumNetwork.buidlerevm]: '',
    [eEthereumNetwork.kovan]: '0x2d206Fd0C7c76016234810232159b05562608A42',
    [eEthereumNetwork.ropsten]: '',
    [eEthereumNetwork.main]: '',
    [eEthereumNetwork.tenderlyMain]: '',
  },
};
