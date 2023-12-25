import { Contract } from '@/contract'
export const WRAPPED_RON: Contract = {
	name: 'Wrapped RON',
	address: '0xe514d9deb7966c8be0ca922de8a064264ea6bcd4',
	abi: [
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
					indexed: true,
					internalType: 'address',
					name: '_oldAdmin',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: '_newAdmin',
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
					name: '_oldAdmin',
					type: 'address',
				},
			],
			name: 'AdminRemoved',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: '_owner',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: '_spender',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: '_value',
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
					indexed: false,
					internalType: 'address',
					name: 'sender',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'value',
					type: 'uint256',
				},
			],
			name: 'Deposit',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: '_spender',
					type: 'address',
				},
			],
			name: 'SpenderUnwhitelisted',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: '_spender',
					type: 'address',
				},
			],
			name: 'SpenderWhitelisted',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: '_from',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: '_to',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: '_value',
					type: 'uint256',
				},
			],
			name: 'Transfer',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'address',
					name: 'sender',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'value',
					type: 'uint256',
				},
			],
			name: 'Withdrawal',
			type: 'event',
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
			inputs: [
				{
					internalType: 'address',
					name: '_owner',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_spender',
					type: 'address',
				},
			],
			name: 'allowance',
			outputs: [
				{
					internalType: 'uint256',
					name: '_value',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'address',
					name: '_spender',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '_value',
					type: 'uint256',
				},
			],
			name: 'approve',
			outputs: [
				{
					internalType: 'bool',
					name: '_success',
					type: 'bool',
				},
			],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: true,
			inputs: [
				{
					internalType: 'address',
					name: '',
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
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'address',
					name: '_newAdmin',
					type: 'address',
				},
			],
			name: 'changeAdmin',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'decimals',
			outputs: [
				{
					internalType: 'uint8',
					name: '',
					type: 'uint8',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: false,
			inputs: [],
			name: 'deposit',
			outputs: [],
			payable: true,
			stateMutability: 'payable',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'name',
			outputs: [
				{
					internalType: 'string',
					name: '',
					type: 'string',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: false,
			inputs: [],
			name: 'removeAdmin',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'symbol',
			outputs: [
				{
					internalType: 'string',
					name: '',
					type: 'string',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'totalSupply',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'address',
					name: '_to',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '_value',
					type: 'uint256',
				},
			],
			name: 'transfer',
			outputs: [
				{
					internalType: 'bool',
					name: '_success',
					type: 'bool',
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
					name: '_from',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_to',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '_value',
					type: 'uint256',
				},
			],
			name: 'transferFrom',
			outputs: [
				{
					internalType: 'bool',
					name: '_success',
					type: 'bool',
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
					name: '_spender',
					type: 'address',
				},
			],
			name: 'unwhitelist',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'address',
					name: '_spender',
					type: 'address',
				},
			],
			name: 'whitelist',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: true,
			inputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			name: 'whitelisted',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'uint256',
					name: 'wad',
					type: 'uint256',
				},
			],
			name: 'withdraw',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
	],
}
