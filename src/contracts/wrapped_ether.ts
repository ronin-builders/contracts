export const WRAPPED_ETHER = {
	name: 'Wrapped Ether',
	address: '0xc99a6a985ed2cac1ef41640596c5a5f9f4e19ef5',
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
					indexed: true,
					internalType: 'address',
					name: '_minter',
					type: 'address',
				},
			],
			name: 'MinterAdded',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: '_minter',
					type: 'address',
				},
			],
			name: 'MinterRemoved',
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
			constant: false,
			inputs: [
				{
					internalType: 'address[]',
					name: '_addedMinters',
					type: 'address[]',
				},
			],
			name: 'addMinters',
			outputs: [],
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
			constant: false,
			inputs: [
				{
					internalType: 'contract IERC20Receiver',
					name: '_spender',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '_value',
					type: 'uint256',
				},
				{
					internalType: 'bytes',
					name: '_data',
					type: 'bytes',
				},
			],
			name: 'approveAndCall',
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
					internalType: 'contract IERC20PayableReceiver',
					name: '_spender',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '_value',
					type: 'uint256',
				},
				{
					internalType: 'bytes',
					name: '_data',
					type: 'bytes',
				},
			],
			name: 'approveAndCallPayable',
			outputs: [
				{
					internalType: 'bool',
					name: '_success',
					type: 'bool',
				},
			],
			payable: true,
			stateMutability: 'payable',
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
			constant: true,
			inputs: [
				{
					internalType: 'address',
					name: '_addr',
					type: 'address',
				},
			],
			name: 'isMinter',
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
			name: 'mint',
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
			name: 'minter',
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
			constant: true,
			inputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			name: 'minters',
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
			constant: false,
			inputs: [
				{
					internalType: 'address[]',
					name: '_removedMinters',
					type: 'address[]',
				},
			],
			name: 'removeMinters',
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
	],
}
