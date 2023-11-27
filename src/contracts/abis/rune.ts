export const RUNE_ABI = [
	{
		constant: false,
		inputs: [],
		name: '',
		outputs: null,
		payable: false,
		stateMutability: 'nonpayable',
		type: 'constructor',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'account',
				type: 'address',
				indexed: true,
			},
			{
				internal_type: '',
				name: 'operator',
				type: 'address',
				indexed: true,
			},
			{
				internal_type: '',
				name: 'approved',
				type: 'bool',
				indexed: false,
			},
		],
		name: 'ApprovalForAll',
		outputs: null,
		payable: false,
		stateMutability: '',
		type: 'event',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'version',
				type: 'uint8',
				indexed: false,
			},
		],
		name: 'Initialized',
		outputs: null,
		payable: false,
		stateMutability: '',
		type: 'event',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'account',
				type: 'address',
				indexed: false,
			},
		],
		name: 'Paused',
		outputs: null,
		payable: false,
		stateMutability: '',
		type: 'event',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'role',
				type: 'bytes32',
				indexed: true,
			},
			{
				internal_type: '',
				name: 'previousAdminRole',
				type: 'bytes32',
				indexed: true,
			},
			{
				internal_type: '',
				name: 'newAdminRole',
				type: 'bytes32',
				indexed: true,
			},
		],
		name: 'RoleAdminChanged',
		outputs: null,
		payable: false,
		stateMutability: '',
		type: 'event',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'role',
				type: 'bytes32',
				indexed: true,
			},
			{
				internal_type: '',
				name: 'account',
				type: 'address',
				indexed: true,
			},
			{
				internal_type: '',
				name: 'sender',
				type: 'address',
				indexed: true,
			},
		],
		name: 'RoleGranted',
		outputs: null,
		payable: false,
		stateMutability: '',
		type: 'event',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'role',
				type: 'bytes32',
				indexed: true,
			},
			{
				internal_type: '',
				name: 'account',
				type: 'address',
				indexed: true,
			},
			{
				internal_type: '',
				name: 'sender',
				type: 'address',
				indexed: true,
			},
		],
		name: 'RoleRevoked',
		outputs: null,
		payable: false,
		stateMutability: '',
		type: 'event',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'operator',
				type: 'address',
				indexed: true,
			},
			{
				internal_type: '',
				name: 'from',
				type: 'address',
				indexed: true,
			},
			{
				internal_type: '',
				name: 'to',
				type: 'address',
				indexed: true,
			},
			{
				internal_type: '',
				name: 'ids',
				type: 'uint256[]',
				indexed: false,
			},
			{
				internal_type: '',
				name: 'values',
				type: 'uint256[]',
				indexed: false,
			},
		],
		name: 'TransferBatch',
		outputs: null,
		payable: false,
		stateMutability: '',
		type: 'event',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'operator',
				type: 'address',
				indexed: true,
			},
			{
				internal_type: '',
				name: 'from',
				type: 'address',
				indexed: true,
			},
			{
				internal_type: '',
				name: 'to',
				type: 'address',
				indexed: true,
			},
			{
				internal_type: '',
				name: 'id',
				type: 'uint256',
				indexed: false,
			},
			{
				internal_type: '',
				name: 'value',
				type: 'uint256',
				indexed: false,
			},
		],
		name: 'TransferSingle',
		outputs: null,
		payable: false,
		stateMutability: '',
		type: 'event',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'value',
				type: 'string',
				indexed: false,
			},
			{
				internal_type: '',
				name: 'id',
				type: 'uint256',
				indexed: true,
			},
		],
		name: 'URI',
		outputs: null,
		payable: false,
		stateMutability: '',
		type: 'event',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'account',
				type: 'address',
				indexed: false,
			},
		],
		name: 'Unpaused',
		outputs: null,
		payable: false,
		stateMutability: '',
		type: 'event',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [],
		name: 'DEFAULT_ADMIN_ROLE',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'bytes32',
				indexed: false,
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [],
		name: 'MINTER_ROLE',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'bytes32',
				indexed: false,
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [],
		name: 'PAUSER_ROLE',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'bytes32',
				indexed: false,
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'account',
				type: 'address',
				indexed: false,
			},
			{
				internal_type: '',
				name: 'id',
				type: 'uint256',
				indexed: false,
			},
		],
		name: 'balanceOf',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'uint256',
				indexed: false,
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'accounts',
				type: 'address[]',
				indexed: false,
			},
			{
				internal_type: '',
				name: 'ids',
				type: 'uint256[]',
				indexed: false,
			},
		],
		name: 'balanceOfBatch',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'uint256[]',
				indexed: false,
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'account',
				type: 'address',
				indexed: false,
			},
			{
				internal_type: '',
				name: 'id',
				type: 'uint256',
				indexed: false,
			},
			{
				internal_type: '',
				name: 'value',
				type: 'uint256',
				indexed: false,
			},
		],
		name: 'burn',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'account',
				type: 'address',
				indexed: false,
			},
			{
				internal_type: '',
				name: 'ids',
				type: 'uint256[]',
				indexed: false,
			},
			{
				internal_type: '',
				name: 'values',
				type: 'uint256[]',
				indexed: false,
			},
		],
		name: 'burnBatch',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'role',
				type: 'bytes32',
				indexed: false,
			},
		],
		name: 'getRoleAdmin',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'bytes32',
				indexed: false,
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'role',
				type: 'bytes32',
				indexed: false,
			},
			{
				internal_type: '',
				name: 'index',
				type: 'uint256',
				indexed: false,
			},
		],
		name: 'getRoleMember',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'address',
				indexed: false,
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'role',
				type: 'bytes32',
				indexed: false,
			},
		],
		name: 'getRoleMemberCount',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'uint256',
				indexed: false,
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'role',
				type: 'bytes32',
				indexed: false,
			},
			{
				internal_type: '',
				name: 'account',
				type: 'address',
				indexed: false,
			},
		],
		name: 'grantRole',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'role',
				type: 'bytes32',
				indexed: false,
			},
			{
				internal_type: '',
				name: 'account',
				type: 'address',
				indexed: false,
			},
		],
		name: 'hasRole',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'bool',
				indexed: false,
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'name_',
				type: 'string',
				indexed: false,
			},
			{
				internal_type: '',
				name: 'symbol_',
				type: 'string',
				indexed: false,
			},
			{
				internal_type: '',
				name: '_admin',
				type: 'address',
				indexed: false,
			},
			{
				internal_type: '',
				name: '_minters',
				type: 'address[]',
				indexed: false,
			},
		],
		name: 'initialize',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'account',
				type: 'address',
				indexed: false,
			},
			{
				internal_type: '',
				name: 'operator',
				type: 'address',
				indexed: false,
			},
		],
		name: 'isApprovedForAll',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'bool',
				indexed: false,
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'to',
				type: 'address',
				indexed: false,
			},
			{
				internal_type: '',
				name: 'id',
				type: 'uint256',
				indexed: false,
			},
			{
				internal_type: '',
				name: 'amount',
				type: 'uint256',
				indexed: false,
			},
			{
				internal_type: '',
				name: 'data',
				type: 'bytes',
				indexed: false,
			},
		],
		name: 'mint',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'to',
				type: 'address',
				indexed: false,
			},
			{
				internal_type: '',
				name: 'ids',
				type: 'uint256[]',
				indexed: false,
			},
			{
				internal_type: '',
				name: 'amounts',
				type: 'uint256[]',
				indexed: false,
			},
			{
				internal_type: '',
				name: 'data',
				type: 'bytes',
				indexed: false,
			},
		],
		name: 'mintBatch',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [],
		name: 'name',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'string',
				indexed: false,
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [],
		name: 'pause',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [],
		name: 'paused',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'bool',
				indexed: false,
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'role',
				type: 'bytes32',
				indexed: false,
			},
			{
				internal_type: '',
				name: 'account',
				type: 'address',
				indexed: false,
			},
		],
		name: 'renounceRole',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'role',
				type: 'bytes32',
				indexed: false,
			},
			{
				internal_type: '',
				name: 'account',
				type: 'address',
				indexed: false,
			},
		],
		name: 'revokeRole',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'from',
				type: 'address',
				indexed: false,
			},
			{
				internal_type: '',
				name: 'to',
				type: 'address',
				indexed: false,
			},
			{
				internal_type: '',
				name: 'ids',
				type: 'uint256[]',
				indexed: false,
			},
			{
				internal_type: '',
				name: 'amounts',
				type: 'uint256[]',
				indexed: false,
			},
			{
				internal_type: '',
				name: 'data',
				type: 'bytes',
				indexed: false,
			},
		],
		name: 'safeBatchTransferFrom',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'from',
				type: 'address',
				indexed: false,
			},
			{
				internal_type: '',
				name: 'to',
				type: 'address',
				indexed: false,
			},
			{
				internal_type: '',
				name: 'id',
				type: 'uint256',
				indexed: false,
			},
			{
				internal_type: '',
				name: 'amount',
				type: 'uint256',
				indexed: false,
			},
			{
				internal_type: '',
				name: 'data',
				type: 'bytes',
				indexed: false,
			},
		],
		name: 'safeTransferFrom',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'operator',
				type: 'address',
				indexed: false,
			},
			{
				internal_type: '',
				name: 'approved',
				type: 'bool',
				indexed: false,
			},
		],
		name: 'setApprovalForAll',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'interfaceId',
				type: 'bytes4',
				indexed: false,
			},
		],
		name: 'supportsInterface',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'bool',
				indexed: false,
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [],
		name: 'symbol',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'string',
				indexed: false,
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [],
		name: 'unpause',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: '',
				type: 'uint256',
				indexed: false,
			},
		],
		name: 'uri',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'string',
				indexed: false,
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		anonymous: false,
	},
]
