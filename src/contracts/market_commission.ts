import { Contract } from '@/contract'
export const MARKET_COMMISSION: Contract = {
	name: 'Market Commission',
	address: '0xbe03b95427d243a19177c22d7728bd11f1895de6',
	abi: [
		{
			inputs: [],
			stateMutability: 'nonpayable',
			type: 'constructor',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'marketContract',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'token',
					type: 'address',
				},
				{
					components: [
						{
							components: [
								{
									internalType: 'address payable',
									name: 'owner',
									type: 'address',
								},
								{
									internalType: 'uint256',
									name: 'ratio',
									type: 'uint256',
								},
							],
							internalType: 'struct IMarketCommission.Commission[]',
							name: 'others',
							type: 'tuple[]',
						},
						{
							internalType: 'uint256',
							name: 'axieInfinityRatio',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'skyMavisRatio',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'roninRatio',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'sumRatios',
							type: 'uint256',
						},
					],
					indexed: false,
					internalType: 'struct IMarketCommission.CommissionSchema',
					name: 'schema',
					type: 'tuple',
				},
			],
			name: 'CommissionSchemaUpdated',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'address[]',
					name: 'addresses',
					type: 'address[]',
				},
				{
					indexed: false,
					internalType: 'uint256[]',
					name: 'percentages',
					type: 'uint256[]',
				},
			],
			name: 'CutPercentagesUpdated',
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
					indexed: true,
					internalType: 'address',
					name: 'skyMavisTreasury',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'axieInfinityTreasury',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'roninNetworkTreasury',
					type: 'address',
				},
			],
			name: 'MarketTreasuryAddressesUpdated',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'bytes32',
					name: 'role',
					type: 'bytes32',
				},
				{
					indexed: true,
					internalType: 'bytes32',
					name: 'previousAdminRole',
					type: 'bytes32',
				},
				{
					indexed: true,
					internalType: 'bytes32',
					name: 'newAdminRole',
					type: 'bytes32',
				},
			],
			name: 'RoleAdminChanged',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'bytes32',
					name: 'role',
					type: 'bytes32',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'account',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'sender',
					type: 'address',
				},
			],
			name: 'RoleGranted',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'bytes32',
					name: 'role',
					type: 'bytes32',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'account',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'sender',
					type: 'address',
				},
			],
			name: 'RoleRevoked',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'contract IERC20',
					name: 'token',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'oldReserve',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'newReserve',
					type: 'uint256',
				},
			],
			name: 'TotalReserveSynced',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'address',
					name: 'addr',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'contract IERC20',
					name: 'token',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'amount',
					type: 'uint256',
				},
			],
			name: 'UserReserveClaimed',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'address',
					name: 'addr',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'contract IERC20',
					name: 'token',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'amount',
					type: 'uint256',
				},
			],
			name: 'UserReserveUpdated',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'contract IWRON',
					name: 'wron',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'contract IWRONHelper',
					name: 'wronHelper',
					type: 'address',
				},
			],
			name: 'WRONConfigUpdated',
			type: 'event',
		},
		{
			stateMutability: 'payable',
			type: 'fallback',
		},
		{
			inputs: [],
			name: 'DEFAULT_ADMIN_ROLE',
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
			name: 'MARKET_CONTRACT_ROLE',
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
			name: 'MAX_PERCENTAGE',
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
			name: 'OPERATOR_ROLE',
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
			name: 'WRON',
			outputs: [
				{
					internalType: 'contract IWRON',
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
					internalType: 'contract IERC20',
					name: '_token',
					type: 'address',
				},
			],
			name: 'claimPendingReserve',
			outputs: [
				{
					internalType: 'uint256',
					name: '_amount',
					type: 'uint256',
				},
			],
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
				{
					internalType: 'contract IERC20',
					name: '_token',
					type: 'address',
				},
			],
			name: 'claimPendingReserveFor',
			outputs: [
				{
					internalType: 'uint256',
					name: '_amount',
					type: 'uint256',
				},
			],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address[]',
					name: '_addresses',
					type: 'address[]',
				},
			],
			name: 'clearCutPercentages',
			outputs: [],
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
			],
			name: 'cutPercentage',
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
					name: '_marketContract',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_token',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '_total',
					type: 'uint256',
				},
				{
					internalType: 'address payable',
					name: '_seller',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_referralAddr',
					type: 'address',
				},
				{
					internalType: 'bool',
					name: '_autoTransferReferralReward',
					type: 'bool',
				},
				{
					internalType: 'bool',
					name: '_referralFeature',
					type: 'bool',
				},
			],
			name: 'getAllocations',
			outputs: [
				{
					components: [
						{
							internalType: 'enum IMarketCommission.AllocType',
							name: 'allocType',
							type: 'uint8',
						},
						{
							internalType: 'address payable',
							name: 'recipient',
							type: 'address',
						},
						{
							internalType: 'address',
							name: 'owner',
							type: 'address',
						},
						{
							internalType: 'uint256',
							name: 'ratio',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'value',
							type: 'uint256',
						},
					],
					internalType: 'struct IMarketCommission.Allocation[]',
					name: '_allocs',
					type: 'tuple[]',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_marketContract',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_token',
					type: 'address',
				},
			],
			name: 'getCommissionSchema',
			outputs: [
				{
					components: [
						{
							components: [
								{
									internalType: 'address payable',
									name: 'owner',
									type: 'address',
								},
								{
									internalType: 'uint256',
									name: 'ratio',
									type: 'uint256',
								},
							],
							internalType: 'struct IMarketCommission.Commission[]',
							name: 'others',
							type: 'tuple[]',
						},
						{
							internalType: 'uint256',
							name: 'axieInfinityRatio',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'skyMavisRatio',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'roninRatio',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'sumRatios',
							type: 'uint256',
						},
					],
					internalType: 'struct IMarketCommission.CommissionSchema',
					name: '',
					type: 'tuple',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'role',
					type: 'bytes32',
				},
			],
			name: 'getRoleAdmin',
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
					internalType: 'bytes32',
					name: 'role',
					type: 'bytes32',
				},
				{
					internalType: 'uint256',
					name: 'index',
					type: 'uint256',
				},
			],
			name: 'getRoleMember',
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
					internalType: 'bytes32',
					name: 'role',
					type: 'bytes32',
				},
			],
			name: 'getRoleMemberCount',
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
			name: 'getTreasuryAddresses',
			outputs: [
				{
					internalType: 'address',
					name: '_skyMavisTreasuryAddr',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_axieInfinityTreasuryAddr',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_roninNetworkTreasuryAddr',
					type: 'address',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'role',
					type: 'bytes32',
				},
				{
					internalType: 'address',
					name: 'account',
					type: 'address',
				},
			],
			name: 'grantRole',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'role',
					type: 'bytes32',
				},
				{
					internalType: 'address',
					name: 'account',
					type: 'address',
				},
			],
			name: 'hasRole',
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
					internalType: 'contract IWRON',
					name: '_wron',
					type: 'address',
				},
				{
					internalType: 'contract IWRONHelper',
					name: '_wronHelper',
					type: 'address',
				},
				{
					internalType: 'address payable',
					name: '_skyMavisTreasuryAddr',
					type: 'address',
				},
				{
					internalType: 'address payable',
					name: '_axieInfinityTreasuryAddr',
					type: 'address',
				},
				{
					internalType: 'address payable',
					name: '_roninNetworkTreasuryAddr',
					type: 'address',
				},
				{
					internalType: 'address[]',
					name: '_markets',
					type: 'address[]',
				},
				{
					internalType: 'address[]',
					name: '_operators',
					type: 'address[]',
				},
			],
			name: 'initialize',
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
				{
					internalType: 'contract IERC20',
					name: '_token',
					type: 'address',
				},
			],
			name: 'pendingReserve',
			outputs: [
				{
					internalType: 'uint256',
					name: '_amount',
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
					name: '_addr',
					type: 'address',
				},
			],
			name: 'recordRONIncreased',
			outputs: [
				{
					internalType: 'uint256',
					name: '_amount',
					type: 'uint256',
				},
			],
			stateMutability: 'payable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_addr',
					type: 'address',
				},
				{
					internalType: 'contract IERC20',
					name: '_token',
					type: 'address',
				},
			],
			name: 'recordReserveIncreased',
			outputs: [
				{
					internalType: 'uint256',
					name: '_amount',
					type: 'uint256',
				},
			],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'role',
					type: 'bytes32',
				},
				{
					internalType: 'address',
					name: 'account',
					type: 'address',
				},
			],
			name: 'renounceRole',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'role',
					type: 'bytes32',
				},
				{
					internalType: 'address',
					name: 'account',
					type: 'address',
				},
			],
			name: 'revokeRole',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_marketContract',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_token',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '_skyMavisRatio',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '_axieInfinityRatio',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '_roninRatio',
					type: 'uint256',
				},
				{
					components: [
						{
							internalType: 'address payable',
							name: 'owner',
							type: 'address',
						},
						{
							internalType: 'uint256',
							name: 'ratio',
							type: 'uint256',
						},
					],
					internalType: 'struct IMarketCommission.Commission[]',
					name: '_otherCommissions',
					type: 'tuple[]',
				},
			],
			name: 'setCommissionSchema',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address[]',
					name: '_addresses',
					type: 'address[]',
				},
				{
					internalType: 'uint256[]',
					name: '_percentages',
					type: 'uint256[]',
				},
			],
			name: 'setCutPercentages',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address payable',
					name: '_skyMavisTreasuryAddr',
					type: 'address',
				},
				{
					internalType: 'address payable',
					name: '_axieInfinityTreasuryAddr',
					type: 'address',
				},
				{
					internalType: 'address payable',
					name: '_roninNetworkTreasuryAddr',
					type: 'address',
				},
			],
			name: 'setTreasuryAddresses',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'contract IWRON',
					name: '_wron',
					type: 'address',
				},
				{
					internalType: 'contract IWRONHelper',
					name: '_wronHelper',
					type: 'address',
				},
			],
			name: 'setWRONConfig',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes4',
					name: 'interfaceId',
					type: 'bytes4',
				},
			],
			name: 'supportsInterface',
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
					internalType: 'contract IERC20',
					name: '',
					type: 'address',
				},
			],
			name: 'totalReserve',
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
					name: '',
					type: 'address',
				},
				{
					internalType: 'contract IERC20',
					name: '',
					type: 'address',
				},
			],
			name: 'userReserve',
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
			name: 'wronHelper',
			outputs: [
				{
					internalType: 'contract IWRONHelper',
					name: '',
					type: 'address',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			stateMutability: 'payable',
			type: 'receive',
		},
	],
}
