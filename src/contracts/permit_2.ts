import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'deadline',
				type: 'uint256',
			},
		],
		name: 'AllowanceExpired',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ExcessiveInvalidation',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'InsufficientAllowance',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'maxAmount',
				type: 'uint256',
			},
		],
		name: 'InvalidAmount',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidContractSignature',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidNonce',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidSignature',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidSignatureLength',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidSigner',
		type: 'error',
	},
	{
		inputs: [],
		name: 'LengthMismatch',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'signatureDeadline',
				type: 'uint256',
			},
		],
		name: 'SignatureExpired',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
		],
		name: 'SpenderIsNotPermitted',
		type: 'error',
	},
	{
		anonymous: false,
		inputs: [],
		name: 'AllSpendersPermitted',
		type: 'event',
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
				name: 'token',
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
				internalType: 'uint160',
				name: 'amount',
				type: 'uint160',
			},
			{
				indexed: false,
				internalType: 'uint48',
				name: 'expiration',
				type: 'uint48',
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
				name: 'owner',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'token',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'spender',
				type: 'address',
			},
		],
		name: 'Lockdown',
		type: 'event',
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
				name: 'token',
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
				internalType: 'uint48',
				name: 'newNonce',
				type: 'uint48',
			},
			{
				indexed: false,
				internalType: 'uint48',
				name: 'oldNonce',
				type: 'uint48',
			},
		],
		name: 'NonceInvalidation',
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
				indexed: true,
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'token',
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
				internalType: 'uint160',
				name: 'amount',
				type: 'uint160',
			},
			{
				indexed: false,
				internalType: 'uint48',
				name: 'expiration',
				type: 'uint48',
			},
			{
				indexed: false,
				internalType: 'uint48',
				name: 'nonce',
				type: 'uint48',
			},
		],
		name: 'Permit',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'caller',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'permitFlag',
				type: 'bool',
			},
		],
		name: 'SpenderPermitUpdated',
		type: 'event',
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
				indexed: false,
				internalType: 'uint256',
				name: 'word',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'mask',
				type: 'uint256',
			},
		],
		name: 'UnorderedNonceInvalidation',
		type: 'event',
	},
	{
		inputs: [],
		name: 'DOMAIN_SEPARATOR',
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
				internalType: 'address',
				name: '',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		name: 'allowance',
		outputs: [
			{
				internalType: 'uint160',
				name: 'amount',
				type: 'uint160',
			},
			{
				internalType: 'uint48',
				name: 'expiration',
				type: 'uint48',
			},
			{
				internalType: 'uint48',
				name: 'nonce',
				type: 'uint48',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'token',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'spender',
				type: 'address',
			},
			{
				internalType: 'uint160',
				name: 'amount',
				type: 'uint160',
			},
			{
				internalType: 'uint48',
				name: 'expiration',
				type: 'uint48',
			},
		],
		name: 'approve',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'areAllSpendersPermitted',
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
		inputs: [
			{
				internalType: 'address',
				name: 'token',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'spender',
				type: 'address',
			},
			{
				internalType: 'uint48',
				name: 'newNonce',
				type: 'uint48',
			},
		],
		name: 'invalidateNonces',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'wordPos',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'mask',
				type: 'uint256',
			},
		],
		name: 'invalidateUnorderedNonces',
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
		name: 'isPermittedSpender',
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
		inputs: [
			{
				components: [
					{
						internalType: 'address',
						name: 'token',
						type: 'address',
					},
					{
						internalType: 'address',
						name: 'spender',
						type: 'address',
					},
				],
				internalType: 'struct IAllowanceTransfer.TokenSpenderPair[]',
				name: 'approvals',
				type: 'tuple[]',
			},
		],
		name: 'lockdown',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'nonceBitmap',
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
		inputs: [
			{
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
			{
				components: [
					{
						components: [
							{
								internalType: 'address',
								name: 'token',
								type: 'address',
							},
							{
								internalType: 'uint160',
								name: 'amount',
								type: 'uint160',
							},
							{
								internalType: 'uint48',
								name: 'expiration',
								type: 'uint48',
							},
							{
								internalType: 'uint48',
								name: 'nonce',
								type: 'uint48',
							},
						],
						internalType: 'struct IAllowanceTransfer.PermitDetails[]',
						name: 'details',
						type: 'tuple[]',
					},
					{
						internalType: 'address',
						name: 'spender',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'sigDeadline',
						type: 'uint256',
					},
				],
				internalType: 'struct IAllowanceTransfer.PermitBatch',
				name: 'permitBatch',
				type: 'tuple',
			},
			{
				internalType: 'bytes',
				name: 'signature',
				type: 'bytes',
			},
		],
		name: 'permit',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
			{
				components: [
					{
						components: [
							{
								internalType: 'address',
								name: 'token',
								type: 'address',
							},
							{
								internalType: 'uint160',
								name: 'amount',
								type: 'uint160',
							},
							{
								internalType: 'uint48',
								name: 'expiration',
								type: 'uint48',
							},
							{
								internalType: 'uint48',
								name: 'nonce',
								type: 'uint48',
							},
						],
						internalType: 'struct IAllowanceTransfer.PermitDetails',
						name: 'details',
						type: 'tuple',
					},
					{
						internalType: 'address',
						name: 'spender',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'sigDeadline',
						type: 'uint256',
					},
				],
				internalType: 'struct IAllowanceTransfer.PermitSingle',
				name: 'permitSingle',
				type: 'tuple',
			},
			{
				internalType: 'bytes',
				name: 'signature',
				type: 'bytes',
			},
		],
		name: 'permit',
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
			{
				internalType: 'bool',
				name: 'isPermitted',
				type: 'bool',
			},
		],
		name: 'permitSpender',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
					{
						components: [
							{
								internalType: 'address',
								name: 'token',
								type: 'address',
							},
							{
								internalType: 'uint256',
								name: 'amount',
								type: 'uint256',
							},
						],
						internalType: 'struct ISignatureTransfer.TokenPermissions',
						name: 'permitted',
						type: 'tuple',
					},
					{
						internalType: 'uint256',
						name: 'nonce',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'deadline',
						type: 'uint256',
					},
				],
				internalType: 'struct ISignatureTransfer.PermitTransferFrom',
				name: 'permit',
				type: 'tuple',
			},
			{
				components: [
					{
						internalType: 'address',
						name: 'to',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'requestedAmount',
						type: 'uint256',
					},
				],
				internalType: 'struct ISignatureTransfer.SignatureTransferDetails',
				name: 'transferDetails',
				type: 'tuple',
			},
			{
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
			{
				internalType: 'bytes',
				name: 'signature',
				type: 'bytes',
			},
		],
		name: 'permitTransferFrom',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
					{
						components: [
							{
								internalType: 'address',
								name: 'token',
								type: 'address',
							},
							{
								internalType: 'uint256',
								name: 'amount',
								type: 'uint256',
							},
						],
						internalType: 'struct ISignatureTransfer.TokenPermissions[]',
						name: 'permitted',
						type: 'tuple[]',
					},
					{
						internalType: 'uint256',
						name: 'nonce',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'deadline',
						type: 'uint256',
					},
				],
				internalType: 'struct ISignatureTransfer.PermitBatchTransferFrom',
				name: 'permit',
				type: 'tuple',
			},
			{
				components: [
					{
						internalType: 'address',
						name: 'to',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'requestedAmount',
						type: 'uint256',
					},
				],
				internalType: 'struct ISignatureTransfer.SignatureTransferDetails[]',
				name: 'transferDetails',
				type: 'tuple[]',
			},
			{
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
			{
				internalType: 'bytes',
				name: 'signature',
				type: 'bytes',
			},
		],
		name: 'permitTransferFrom',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
					{
						components: [
							{
								internalType: 'address',
								name: 'token',
								type: 'address',
							},
							{
								internalType: 'uint256',
								name: 'amount',
								type: 'uint256',
							},
						],
						internalType: 'struct ISignatureTransfer.TokenPermissions',
						name: 'permitted',
						type: 'tuple',
					},
					{
						internalType: 'uint256',
						name: 'nonce',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'deadline',
						type: 'uint256',
					},
				],
				internalType: 'struct ISignatureTransfer.PermitTransferFrom',
				name: 'permit',
				type: 'tuple',
			},
			{
				components: [
					{
						internalType: 'address',
						name: 'to',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'requestedAmount',
						type: 'uint256',
					},
				],
				internalType: 'struct ISignatureTransfer.SignatureTransferDetails',
				name: 'transferDetails',
				type: 'tuple',
			},
			{
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
			{
				internalType: 'bytes32',
				name: 'witness',
				type: 'bytes32',
			},
			{
				internalType: 'string',
				name: 'witnessTypeString',
				type: 'string',
			},
			{
				internalType: 'bytes',
				name: 'signature',
				type: 'bytes',
			},
		],
		name: 'permitWitnessTransferFrom',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
					{
						components: [
							{
								internalType: 'address',
								name: 'token',
								type: 'address',
							},
							{
								internalType: 'uint256',
								name: 'amount',
								type: 'uint256',
							},
						],
						internalType: 'struct ISignatureTransfer.TokenPermissions[]',
						name: 'permitted',
						type: 'tuple[]',
					},
					{
						internalType: 'uint256',
						name: 'nonce',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'deadline',
						type: 'uint256',
					},
				],
				internalType: 'struct ISignatureTransfer.PermitBatchTransferFrom',
				name: 'permit',
				type: 'tuple',
			},
			{
				components: [
					{
						internalType: 'address',
						name: 'to',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'requestedAmount',
						type: 'uint256',
					},
				],
				internalType: 'struct ISignatureTransfer.SignatureTransferDetails[]',
				name: 'transferDetails',
				type: 'tuple[]',
			},
			{
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
			{
				internalType: 'bytes32',
				name: 'witness',
				type: 'bytes32',
			},
			{
				internalType: 'string',
				name: 'witnessTypeString',
				type: 'string',
			},
			{
				internalType: 'bytes',
				name: 'signature',
				type: 'bytes',
			},
		],
		name: 'permitWitnessTransferFrom',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'renounceOwnership',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
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
						internalType: 'uint160',
						name: 'amount',
						type: 'uint160',
					},
					{
						internalType: 'address',
						name: 'token',
						type: 'address',
					},
				],
				internalType: 'struct IAllowanceTransfer.AllowanceTransferDetails[]',
				name: 'transferDetails',
				type: 'tuple[]',
			},
		],
		name: 'transferFrom',
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
				internalType: 'uint160',
				name: 'amount',
				type: 'uint160',
			},
			{
				internalType: 'address',
				name: 'token',
				type: 'address',
			},
		],
		name: 'transferFrom',
		stateMutability: 'nonpayable',
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
		stateMutability: 'nonpayable',
		type: 'function',
	},
] as const
const PERMIT_2: Contract<typeof abi> = {
	name: 'Permit 2',
	address: '0x771ca29e483df5447e20a89e0f00e1daf09ef534',
	is_deprecated: false,
	created_at: 1732164718,
	abi: abi,
}
export default PERMIT_2
