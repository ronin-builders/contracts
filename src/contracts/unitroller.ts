import { Contract } from '@/contract'
const abi = [
	{
		inputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'error',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'info',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'detail',
				type: 'uint256',
			},
		],
		name: 'Failure',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'oldAdmin',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'newAdmin',
				type: 'address',
			},
		],
		name: 'NewAdmin',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'oldImplementation',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'newImplementation',
				type: 'address',
			},
		],
		name: 'NewImplementation',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'oldPendingAdmin',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'newPendingAdmin',
				type: 'address',
			},
		],
		name: 'NewPendingAdmin',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'oldPendingImplementation',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'newPendingImplementation',
				type: 'address',
			},
		],
		name: 'NewPendingImplementation',
		type: 'event',
	},
	{
		payable: true,
		stateMutability: 'payable',
		type: 'fallback',
	},
	{
		constant: false,
		inputs: [],
		name: '_acceptAdmin',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [],
		name: '_acceptImplementation',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'newPendingAdmin',
				type: 'address',
			},
		],
		name: '_setPendingAdmin',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'newPendingImplementation',
				type: 'address',
			},
		],
		name: '_setPendingImplementation',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'admin',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'comptrollerImplementation',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'pendingAdmin',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'pendingComptrollerImplementation',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
] as const
const UNITROLLER: Contract<typeof abi> = {
	name: 'Unitroller',
	address: '0x9e8fd99fc64cd2ff4b5846361a7ec457f2b3808e',
	is_deprecated: false,
	updated_at: 1707758809,
	abi: abi,
}
export default UNITROLLER
