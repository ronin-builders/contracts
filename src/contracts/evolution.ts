import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'contract IBurnableERC721[]',
				name: '_burnNFTs',
				type: 'address[]',
			},
			{
				internalType: 'contract IERC721[]',
				name: '_evolutionNFTs',
				type: 'address[]',
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
				internalType: 'address',
				name: 'user',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'contract IBurnableERC721',
				name: 'burnNFT',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: 'burnNftId',
				type: 'uint256[]',
			},
			{
				indexed: false,
				internalType: 'contract IERC721',
				name: 'evolutionNFT',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'evolutionNftId',
				type: 'uint256',
			},
		],
		name: 'Evoluted',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'contract IBurnableERC721',
				name: 'burnNFT',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'contract IERC721',
				name: 'evolutionNFT',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'avaliable',
				type: 'bool',
			},
		],
		name: 'NewEvolutionDirection',
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
		inputs: [
			{
				internalType: 'contract IBurnableERC721',
				name: '_burnNFT',
				type: 'address',
			},
			{
				internalType: 'contract IERC721',
				name: '_evolutionNFT',
				type: 'address',
			},
		],
		name: 'addEvolutionDirection',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'contract IBurnableERC721',
				name: '_burnNFT',
				type: 'address',
			},
			{
				internalType: 'contract IERC721',
				name: '_evolutionNFT',
				type: 'address',
			},
		],
		name: 'delEvolutionDirection',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'contract IBurnableERC721',
				name: '_burnNFT',
				type: 'address',
			},
			{
				internalType: 'uint256[]',
				name: '_burnNftIds',
				type: 'uint256[]',
			},
			{
				internalType: 'contract IERC721',
				name: '_evolutionNFT',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_evolutionNftId',
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
		name: 'evolution',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'contract IBurnableERC721',
				name: '',
				type: 'address',
			},
			{
				internalType: 'contract IERC721',
				name: '',
				type: 'address',
			},
		],
		name: 'evolutionDirection',
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
const EVOLUTION: Contract<typeof abi> = {
	name: 'Evolution',
	address: '0x4525db8c82d1e83eae54085aa535c4303c27feca',
	is_deprecated: false,
	created_at: 1721400558,
	abi: abi,
}
export default EVOLUTION
