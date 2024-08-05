import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'contract IMintableERC721V5',
				name: '_nft',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_startAt',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_finishAt',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '_verifier',
				type: 'address',
			},
		],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'nonce',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'user',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'nftId',
				type: 'uint256',
			},
		],
		name: 'Claim',
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
				internalType: 'address',
				name: 'oldVerifier',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'newVerifier',
				type: 'address',
			},
		],
		name: 'VerifierChanged',
		type: 'event',
	},
	{
		inputs: [],
		name: 'acceptOwner',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'finishAt',
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
				internalType: 'uint256',
				name: '_num',
				type: 'uint256',
			},
			{
				internalType: 'uint8',
				name: '_v',
				type: 'uint8',
			},
			{
				internalType: 'bytes32',
				name: '_r',
				type: 'bytes32',
			},
			{
				internalType: 'bytes32',
				name: '_s',
				type: 'bytes32',
			},
		],
		name: 'mint',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'nft',
		outputs: [
			{
				internalType: 'contract IMintableERC721V5',
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
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'nonces',
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
		name: 'renounceOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_addr',
				type: 'address',
			},
		],
		name: 'setPendingOwner',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_verifier',
				type: 'address',
			},
		],
		name: 'setVerifier',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'startAt',
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
		inputs: [],
		name: 'totalMintNum',
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
		inputs: [],
		name: 'verifier',
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
] as const
const CLASSIC_CLAIM: Contract<typeof abi> = {
	name: 'Classic Claim',
	address: '0x85bd5e10e8e527bb99a3bde12a36377a834f5e28',
	is_deprecated: false,
	created_at: 1721400258,
	abi: abi,
}
export default CLASSIC_CLAIM
