export const SIDECHAIN_GATEWAY_MANAGER = {
	name: 'Sidechain Gateway Manager',
	address: '0xdfe976b707c84551b78e687d11ac6eb1334ec8b1',
	abi: [
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
			inputs: [],
			name: 'Paused',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'uint256',
					name: '_withdrawalId',
					type: 'uint256',
				},
				{
					indexed: true,
					internalType: 'address',
					name: '_owner',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: '_tokenAddress',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'address',
					name: '_mainchainAddress',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint32',
					name: '_standard',
					type: 'uint32',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: '_tokenNumber',
					type: 'uint256',
				},
			],
			name: 'RequestTokenWithdrawalSigAgain',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'uint256',
					name: 'depositId',
					type: 'uint256',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'owner',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'tokenAddress',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'tokenNumber',
					type: 'uint256',
				},
			],
			name: 'TokenDeposited',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'uint256',
					name: '_withdrawId',
					type: 'uint256',
				},
				{
					indexed: true,
					internalType: 'address',
					name: '_owner',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: '_tokenAddress',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'address',
					name: '_mainchainAddress',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint32',
					name: '_standard',
					type: 'uint32',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: '_tokenNumber',
					type: 'uint256',
				},
			],
			name: 'TokenWithdrew',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [],
			name: 'Unpaused',
			type: 'event',
		},
		{
			payable: false,
			stateMutability: 'nonpayable',
			type: 'fallback',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'uint256',
					name: '_withdrawalId',
					type: 'uint256',
				},
			],
			name: 'acknowledWithdrawalOnMainchain',
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
			constant: false,
			inputs: [
				{
					internalType: 'uint256[]',
					name: '_withdrawalIds',
					type: 'uint256[]',
				},
			],
			name: 'batchAcknowledWithdrawalOnMainchain',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'uint256[]',
					name: '_depositIds',
					type: 'uint256[]',
				},
				{
					internalType: 'address[]',
					name: '_owners',
					type: 'address[]',
				},
				{
					internalType: 'address[]',
					name: '_tokens',
					type: 'address[]',
				},
				{
					internalType: 'uint32[]',
					name: '_standards',
					type: 'uint32[]',
				},
				{
					internalType: 'uint256[]',
					name: '_tokenNumbers',
					type: 'uint256[]',
				},
			],
			name: 'batchDepositERCTokenFor',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'uint256[]',
					name: '_withdrawalIds',
					type: 'uint256[]',
				},
				{
					internalType: 'bool[]',
					name: '_shouldReplaces',
					type: 'bool[]',
				},
				{
					internalType: 'bytes[]',
					name: '_sigs',
					type: 'bytes[]',
				},
			],
			name: 'batchSubmitWithdrawalSignatures',
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
			constant: false,
			inputs: [
				{
					internalType: 'uint256',
					name: '_depositId',
					type: 'uint256',
				},
				{
					internalType: 'address',
					name: '_owner',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_token',
					type: 'address',
				},
				{
					internalType: 'uint32',
					name: '_standard',
					type: 'uint32',
				},
				{
					internalType: 'uint256',
					name: '_tokenNumber',
					type: 'uint256',
				},
			],
			name: 'depositERCTokenFor',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
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
			name: 'deposits',
			outputs: [
				{
					internalType: 'address',
					name: 'owner',
					type: 'address',
				},
				{
					internalType: 'address',
					name: 'tokenAddress',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'tokenNumber',
					type: 'uint256',
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
			],
			name: 'getPendingWithdrawals',
			outputs: [
				{
					internalType: 'uint256[]',
					name: 'ids',
					type: 'uint256[]',
				},
				{
					components: [
						{
							internalType: 'address',
							name: 'owner',
							type: 'address',
						},
						{
							internalType: 'address',
							name: 'tokenAddress',
							type: 'address',
						},
						{
							internalType: 'address',
							name: 'mainchainAddress',
							type: 'address',
						},
						{
							internalType: 'uint32',
							name: 'standard',
							type: 'uint32',
						},
						{
							internalType: 'uint256',
							name: 'tokenNumber',
							type: 'uint256',
						},
					],
					internalType: 'struct SidechainGatewayStorage.WithdrawalEntry[]',
					name: 'entries',
					type: 'tuple[]',
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
					name: '_withdrawalId',
					type: 'uint256',
				},
			],
			name: 'getWithdrawalSignatures',
			outputs: [
				{
					internalType: 'address[]',
					name: '_signers',
					type: 'address[]',
				},
				{
					internalType: 'bytes[]',
					name: '_sigs',
					type: 'bytes[]',
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
					name: '_withdrawalId',
					type: 'uint256',
				},
			],
			name: 'getWithdrawalSigners',
			outputs: [
				{
					internalType: 'address[]',
					name: '',
					type: 'address[]',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'maxPendingWithdrawal',
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
			inputs: [],
			name: 'pause',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'paused',
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
			inputs: [],
			name: 'registry',
			outputs: [
				{
					internalType: 'contract Registry',
					name: '',
					type: 'address',
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
					internalType: 'uint256',
					name: '_withdrawalId',
					type: 'uint256',
				},
			],
			name: 'requestSignatureAgain',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'uint256',
					name: '_withdrawalId',
					type: 'uint256',
				},
				{
					internalType: 'bool',
					name: '_shouldReplace',
					type: 'bool',
				},
				{
					internalType: 'bytes',
					name: '_sig',
					type: 'bytes',
				},
			],
			name: 'submitWithdrawalSignatures',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: false,
			inputs: [],
			name: 'unpause',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'uint256',
					name: '_maxPendingWithdrawal',
					type: 'uint256',
				},
			],
			name: 'updateMaxPendingWithdrawal',
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
					name: '_registry',
					type: 'address',
				},
			],
			name: 'updateRegistry',
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
					name: '_token',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '_amount',
					type: 'uint256',
				},
			],
			name: 'withdrawERC20',
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
					name: '_owner',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_token',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '_amount',
					type: 'uint256',
				},
			],
			name: 'withdrawERC20For',
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
					name: '_token',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '_tokenId',
					type: 'uint256',
				},
			],
			name: 'withdrawERC721',
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
					internalType: 'uint256',
					name: '_amount',
					type: 'uint256',
				},
			],
			name: 'withdrawETH',
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
			name: 'withdrawalCount',
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
					name: '_owner',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_token',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '_tokenId',
					type: 'uint256',
				},
			],
			name: 'withdrawalERC721For',
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
			inputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			name: 'withdrawalSig',
			outputs: [
				{
					internalType: 'bytes',
					name: '',
					type: 'bytes',
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
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			name: 'withdrawalSigners',
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
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			name: 'withdrawals',
			outputs: [
				{
					internalType: 'address',
					name: 'owner',
					type: 'address',
				},
				{
					internalType: 'address',
					name: 'tokenAddress',
					type: 'address',
				},
				{
					internalType: 'address',
					name: 'mainchainAddress',
					type: 'address',
				},
				{
					internalType: 'uint32',
					name: 'standard',
					type: 'uint32',
				},
				{
					internalType: 'uint256',
					name: 'tokenNumber',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
	],
}
