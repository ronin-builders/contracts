import { Contract } from '@/contract'
const abi = [
	{
		inputs: [],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'floor',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'ceiling',
				type: 'uint256',
			},
		],
		name: 'ErrCeilingNotHigherThanFloor',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'requestHash',
				type: 'bytes32',
			},
		],
		name: 'ErrDuplicateRequestHash',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrGetFinalizedFromCoordinatorFailed',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'estimatedRandomFee',
				type: 'uint256',
			},
		],
		name: 'ErrInsufficientRandomFee',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrInvalidChestCategoryLength',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrInvalidNonce',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrInvalidNonceForCancelled',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrInvalidPrizeCategory',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'enum RequestStatus',
				name: 'status',
				type: 'uint8',
			},
		],
		name: 'ErrInvalidRequestStatus',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrInvalidSignature',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'slipAmount',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'totalChestAmount',
				type: 'uint256',
			},
		],
		name: 'ErrInvalidSlipAmount',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrInvalidStatusToCancelRequest',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrInvalidTotalProbabilities',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrNotFoundAxieVault',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'requestHash',
				type: 'bytes32',
			},
		],
		name: 'ErrRequestNotFound',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrSignatureExpired',
		type: 'error',
	},
	{
		inputs: [],
		name: 'OnlyCoordinatorCanFulfill',
		type: 'error',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'axieContract',
				type: 'address',
			},
		],
		name: 'AxieContractUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'requestHash',
				type: 'bytes32',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'axieVault',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'rewarded',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'totalAxieRewards',
				type: 'uint256',
			},
		],
		name: 'AxieVaultRanOut',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'axieVault',
				type: 'address',
			},
		],
		name: 'AxieVaultUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'consumableERC1155',
				type: 'address',
			},
		],
		name: 'ConsumableERC1155ContractUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'requestHash',
				type: 'bytes32',
			},
			{
				components: [
					{
						internalType: 'enum ChestCategory',
						name: 'category',
						type: 'uint8',
					},
					{
						internalType: 'uint256',
						name: 'amount',
						type: 'uint256',
					},
				],
				indexed: false,
				internalType: 'struct Chest[]',
				name: 'chests',
				type: 'tuple[]',
			},
			{
				components: [
					{
						internalType: 'uint256',
						name: 'cocoAmt',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'premiumCocoAmt',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'spiritShellAmt',
						type: 'uint256',
					},
				],
				indexed: false,
				internalType: 'struct RewardPot',
				name: 'pot',
				type: 'tuple',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: 'axieRewards',
				type: 'uint256[]',
			},
		],
		name: 'GachaRollFulfilled',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'requestHash',
				type: 'bytes32',
			},
			{
				components: [
					{
						internalType: 'enum ChestCategory',
						name: 'category',
						type: 'uint8',
					},
					{
						internalType: 'uint256',
						name: 'amount',
						type: 'uint256',
					},
				],
				indexed: false,
				internalType: 'struct Chest[]',
				name: 'chests',
				type: 'tuple[]',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'nonce',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'expireTimestamp',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'slipAmount',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'requester',
				type: 'address',
			},
		],
		name: 'GachaRollRequested',
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
				indexed: false,
				internalType: 'address',
				name: 'materialContract',
				type: 'address',
			},
		],
		name: 'MaterialContractUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'maxGasForFulfillment',
				type: 'uint256',
			},
		],
		name: 'MaxGasForFulfillmentUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'requestHash',
				type: 'bytes32',
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
				name: 'id',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'MintConsumableFailed',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'requestHash',
				type: 'bytes32',
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
				name: 'id',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'MintMaterialFailed',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
		],
		name: 'Paused',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				components: [
					{
						internalType: 'uint8',
						name: 'class',
						type: 'uint8',
					},
					{
						internalType: 'uint256',
						name: 'rate',
						type: 'uint256',
					},
				],
				indexed: false,
				internalType: 'struct ProbabilityUtils.Rate[][]',
				name: 'prizeProbability',
				type: 'tuple[][]',
			},
		],
		name: 'PrizeProbabilityUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'quantity',
				type: 'uint256',
			},
		],
		name: 'QuantityForMintPrizeUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'requestHash',
				type: 'bytes32',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'rewarded',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'totalAxieRewards',
				type: 'uint256',
			},
		],
		name: 'RewardingAxiesCorrupted',
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
				indexed: true,
				internalType: 'bytes32',
				name: 'requestHash',
				type: 'bytes32',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'user',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'nonce',
				type: 'uint256',
			},
			{
				components: [
					{
						internalType: 'address',
						name: 'requester',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'slipAmount',
						type: 'uint256',
					},
					{
						components: [
							{
								internalType: 'enum ChestCategory',
								name: 'category',
								type: 'uint8',
							},
							{
								internalType: 'uint256',
								name: 'amount',
								type: 'uint256',
							},
						],
						internalType: 'struct Chest[]',
						name: 'chests',
						type: 'tuple[]',
					},
					{
						internalType: 'enum RequestStatus',
						name: 'status',
						type: 'uint8',
					},
				],
				indexed: false,
				internalType: 'struct RequestInfo',
				name: 'requestInfo',
				type: 'tuple',
			},
		],
		name: 'RollCancelled',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'requestHash',
				type: 'bytes32',
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
				name: 'id',
				type: 'uint256',
			},
		],
		name: 'TransferAxieFailed',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
		],
		name: 'Unpaused',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'user',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'nonce',
				type: 'uint256',
			},
		],
		name: 'UserNonceIncreased',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'newCoordinator',
				type: 'address',
			},
		],
		name: 'VRFCoordinatorAddressUpdated',
		type: 'event',
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
		name: 'DEFAULT_GAS_PRICE',
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
		name: 'TYPE_HASH',
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
				internalType: 'uint256',
				name: 'nonce',
				type: 'uint256',
			},
		],
		name: 'cancelRoll',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'rollNum',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'gasPrice',
				type: 'uint256',
			},
		],
		name: 'estimateFee',
		outputs: [
			{
				internalType: 'uint256',
				name: 'estimatedFee',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'callbackGasLimit',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getAxieContract',
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
		name: 'getAxieVault',
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
		name: 'getConsumableERC1155Contract',
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
		name: 'getMaterialContract',
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
		name: 'getMaxGasForFulfillment',
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
		name: 'getPrizeProbability',
		outputs: [
			{
				components: [
					{
						internalType: 'uint8',
						name: 'class',
						type: 'uint8',
					},
					{
						internalType: 'uint256',
						name: 'rate',
						type: 'uint256',
					},
				],
				internalType: 'struct ProbabilityUtils.Rate[][]',
				name: 'prizeProbabilities',
				type: 'tuple[][]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getQuantityForMintPrize',
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
				name: 'user',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'nonce',
				type: 'uint256',
			},
		],
		name: 'getRequestHash',
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
				name: 'requestHash',
				type: 'bytes32',
			},
		],
		name: 'getRequestInfo',
		outputs: [
			{
				components: [
					{
						internalType: 'address',
						name: 'requester',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'slipAmount',
						type: 'uint256',
					},
					{
						components: [
							{
								internalType: 'enum ChestCategory',
								name: 'category',
								type: 'uint8',
							},
							{
								internalType: 'uint256',
								name: 'amount',
								type: 'uint256',
							},
						],
						internalType: 'struct Chest[]',
						name: 'chests',
						type: 'tuple[]',
					},
					{
						internalType: 'enum RequestStatus',
						name: 'status',
						type: 'uint8',
					},
				],
				internalType: 'struct RequestInfo',
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
		inputs: [
			{
				internalType: 'address',
				name: 'user',
				type: 'address',
			},
		],
		name: 'getUserNonce',
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
				internalType: 'address',
				name: 'admin',
				type: 'address',
			},
			{
				internalType: 'address[]',
				name: 'operators',
				type: 'address[]',
			},
			{
				internalType: 'address',
				name: 'axieContract',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'materialContract',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'consumableERC1155',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'axieVault',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'maxGasForFulfillment',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'quantityForMintPrize',
				type: 'uint256',
			},
			{
				components: [
					{
						internalType: 'uint8',
						name: 'class',
						type: 'uint8',
					},
					{
						internalType: 'uint256',
						name: 'rate',
						type: 'uint256',
					},
				],
				internalType: 'struct ProbabilityUtils.Rate[][]',
				name: 'prizeProbability',
				type: 'tuple[][]',
			},
			{
				internalType: 'address',
				name: 'vrfCoordinator_',
				type: 'address',
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
				name: 'user',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'nonce',
				type: 'uint256',
			},
		],
		name: 'isCancelableRequest',
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
		name: 'pause',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'paused',
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
				internalType: 'bytes32',
				name: 'reqHash',
				type: 'bytes32',
			},
			{
				internalType: 'uint256',
				name: 'randomSeed',
				type: 'uint256',
			},
		],
		name: 'rawFulfillRandomSeed',
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
				components: [
					{
						internalType: 'enum ChestCategory',
						name: 'category',
						type: 'uint8',
					},
					{
						internalType: 'uint256',
						name: 'amount',
						type: 'uint256',
					},
				],
				internalType: 'struct Chest[]',
				name: 'chests',
				type: 'tuple[]',
			},
			{
				internalType: 'uint256',
				name: 'nonce',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'expireTimestamp',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'slipAmount',
				type: 'uint256',
			},
			{
				internalType: 'bytes',
				name: 'signature',
				type: 'bytes',
			},
		],
		name: 'roll',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'axieContract',
				type: 'address',
			},
		],
		name: 'setAxieContract',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'axieVault',
				type: 'address',
			},
		],
		name: 'setAxieVault',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'consumableERC1155',
				type: 'address',
			},
		],
		name: 'setConsumableERC1155Contract',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'materialContract',
				type: 'address',
			},
		],
		name: 'setMaterialContract',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'maxGasForFulfillment',
				type: 'uint256',
			},
		],
		name: 'setMaxGasForFulfillment',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'uint8',
						name: 'class',
						type: 'uint8',
					},
					{
						internalType: 'uint256',
						name: 'rate',
						type: 'uint256',
					},
				],
				internalType: 'struct ProbabilityUtils.Rate[][]',
				name: 'prizeProbability',
				type: 'tuple[][]',
			},
		],
		name: 'setPrizeProbability',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'quantity',
				type: 'uint256',
			},
		],
		name: 'setQuantityForMintPrize',
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
		inputs: [],
		name: 'unpause',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'vrfCoordinator',
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
const GACHA_MACHINE_1: Contract<typeof abi> = {
	name: 'Gacha Machine',
	address: '0x44ac41de42f6f79f80b2f877762a84970132dafb',
	is_deprecated: false,
	created_at: 1704271628,
	abi: abi,
}
export default GACHA_MACHINE_1
