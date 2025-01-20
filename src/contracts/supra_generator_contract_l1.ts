import { Contract } from '@/contract'
const abi = [
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'previousAdmin',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'newAdmin',
				type: 'address',
			},
		],
		name: 'AdminChanged',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'beacon',
				type: 'address',
			},
		],
		name: 'BeaconUpgraded',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'freeNodeWallet',
				type: 'address',
			},
		],
		name: 'FreeNodeRemovedFromWhitelist',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'freeNodeWalletAddress',
				type: 'address',
			},
		],
		name: 'FreeNodeWhitelisted',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint8',
				name: 'version',
				type: 'uint8',
			},
		],
		name: 'Initialized',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address[]',
				name: 'freeNodeWallets',
				type: 'address[]',
			},
		],
		name: 'MultipleFreeNodesWhitelisted',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'nonce',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'clientWalletAddress',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'timestamp',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'status',
				type: 'bool',
			},
			{
				indexed: false,
				internalType: 'bytes',
				name: 'data',
				type: 'bytes',
			},
		],
		name: 'NonceProcessed',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'previousOwner',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'newOwner',
				type: 'address',
			},
		],
		name: 'OwnershipTransferStarted',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'previousOwner',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'newOwner',
				type: 'address',
			},
		],
		name: 'OwnershipTransferred',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: '_timestamp',
				type: 'uint256',
			},
		],
		name: 'PublicKeyUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'nonce',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'instanceId',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'callerContract',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'string',
				name: 'functionName',
				type: 'string',
			},
			{
				indexed: false,
				internalType: 'uint8',
				name: 'rngCount',
				type: 'uint8',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'numConfirmations',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'clientSeed',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'clientWalletAddress',
				type: 'address',
			},
		],
		name: 'RequestGenerated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'implementation',
				type: 'address',
			},
		],
		name: 'Upgraded',
		type: 'event',
	},
	{
		inputs: [],
		name: 'acceptOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: '_freeNodeWallets',
				type: 'address[]',
			},
		],
		name: 'addFreeNodeToWhitelistBulk',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_freeNodeWallet',
				type: 'address',
			},
		],
		name: 'addFreeNodeToWhitelistSingle',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'depositContract',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'domain',
		outputs: [
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'gasAfterPaymentCalculation',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_nonce',
				type: 'uint256',
			},
			{
				internalType: 'bytes32',
				name: '_bhash',
				type: 'bytes32',
			},
			{
				internalType: 'bytes',
				name: '_message',
				type: 'bytes',
			},
			{
				internalType: 'uint256[2]',
				name: '_signature',
				type: 'uint256[2]',
			},
			{
				internalType: 'uint8',
				name: '_rngCount',
				type: 'uint8',
			},
			{
				internalType: 'uint256',
				name: '_clientSeed',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '_callerContract',
				type: 'address',
			},
			{
				internalType: 'string',
				name: '_func',
				type: 'string',
			},
			{
				internalType: 'address',
				name: '_clientWalletAddress',
				type: 'address',
			},
		],
		name: 'generateRngCallback',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
			{
				internalType: 'bytes',
				name: '',
				type: 'bytes',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: '_domain',
				type: 'bytes32',
			},
			{
				internalType: 'address',
				name: '_supraRouterContract',
				type: 'address',
			},
			{
				internalType: 'uint256[4]',
				name: '_publicKey',
				type: 'uint256[4]',
			},
			{
				internalType: 'uint256',
				name: '_instanceId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_blsPreCompileGasCost',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_gasAfterPaymentCalculation',
				type: 'uint256',
			},
		],
		name: 'initialize',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'instanceId',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_freeNodeWallet',
				type: 'address',
			},
		],
		name: 'isFreeNodeWhitelisted',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'listAllWhitelistedFreeNodes',
		outputs: [
			{
				internalType: 'address[]',
				name: '',
				type: 'address[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'owner',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'pendingOwner',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'proxiableUUID',
		outputs: [
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'publicKey',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_freeNodeWallet',
				type: 'address',
			},
		],
		name: 'removeFreeNodeFromWhitelist',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'renounceOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_nonce',
				type: 'uint256',
			},
			{
				internalType: 'string',
				name: '_functionName',
				type: 'string',
			},
			{
				internalType: 'uint8',
				name: '_rngCount',
				type: 'uint8',
			},
			{
				internalType: 'address',
				name: '_callerContract',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_numConfirmations',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_clientSeed',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '_clientWalletAddress',
				type: 'address',
			},
		],
		name: 'rngRequest',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_newGas',
				type: 'uint256',
			},
		],
		name: 'setGasAfterPaymentCalculation',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'supraRouterContract',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'newOwner',
				type: 'address',
			},
		],
		name: 'transferOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_newDepositSC',
				type: 'address',
			},
		],
		name: 'updateDepositContract',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256[4]',
				name: '_publicKey',
				type: 'uint256[4]',
			},
		],
		name: 'updatePublicKey',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'newImplementation',
				type: 'address',
			},
		],
		name: 'upgradeTo',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'newImplementation',
				type: 'address',
			},
			{
				internalType: 'bytes',
				name: 'data',
				type: 'bytes',
			},
		],
		name: 'upgradeToAndCall',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
] as const
const SUPRA_GENERATOR_CONTRACT_L1: Contract<typeof abi> = {
	name: 'Supra Generator Contract L1',
	address: '0x10bd092e77134ab72ea5413811265158ddf7985e',
	is_deprecated: false,
	created_at: 1736774342,
	abi: abi,
}
export default SUPRA_GENERATOR_CONTRACT_L1
