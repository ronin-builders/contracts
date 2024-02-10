import { Contract } from '@/contract'
const WILD_FOREST_TOKEN: Contract = {
	name: 'Wild Forest Token',
	address: '0x363c3b97152e161cea85e0e5dc52dfdca01a2db1',
	is_deprecated: false,
	updated_at: 1707575171,
	abi: [
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'initialSupply',
					type: 'uint256',
				},
				{
					internalType: 'string',
					name: 'name',
					type: 'string',
				},
				{
					internalType: 'string',
					name: 'symbol',
					type: 'string',
				},
				{
					internalType: 'address',
					name: 'ownerAddress',
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
					indexed: true,
					internalType: 'address',
					name: 'owner',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'spender',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'value',
					type: 'uint256',
				},
			],
			name: 'Approval',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'from',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'to',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'value',
					type: 'uint256',
				},
			],
			name: 'Transfer',
			type: 'event',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'owner',
					type: 'address',
				},
				{
					internalType: 'address',
					name: 'spender',
					type: 'address',
				},
			],
			name: 'allowance',
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
					name: 'spender',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'amount',
					type: 'uint256',
				},
			],
			name: 'approve',
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
					name: 'account',
					type: 'address',
				},
			],
			name: 'balanceOf',
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
			name: 'decimals',
			outputs: [
				{
					internalType: 'uint8',
					name: '',
					type: 'uint8',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'spender',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'subtractedValue',
					type: 'uint256',
				},
			],
			name: 'decreaseAllowance',
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
					name: 'spender',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'addedValue',
					type: 'uint256',
				},
			],
			name: 'increaseAllowance',
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
			inputs: [],
			name: 'name',
			outputs: [
				{
					internalType: 'string',
					name: '',
					type: 'string',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'symbol',
			outputs: [
				{
					internalType: 'string',
					name: '',
					type: 'string',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'totalSupply',
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
					name: 'to',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'amount',
					type: 'uint256',
				},
			],
			name: 'transfer',
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
					name: 'from',
					type: 'address',
				},
				{
					internalType: 'address',
					name: 'to',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'amount',
					type: 'uint256',
				},
			],
			name: 'transferFrom',
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
	],
}
export default WILD_FOREST_TOKEN
