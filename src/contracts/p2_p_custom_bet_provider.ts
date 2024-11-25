import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'address',
				name: 'mainToken',
				type: 'address',
			},
			{
				internalType: 'address[]',
				name: 'owners',
				type: 'address[]',
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
				name: 'newOwner',
				type: 'address',
			},
		],
		name: 'AddOwner',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'newAlterToken',
				type: 'address',
			},
		],
		name: 'ChangeAlterToken',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'timestampExpirationDelay',
				type: 'uint256',
			},
		],
		name: 'ChangeTimestampDelay',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'previousAlternativeFee',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'newAlternativeFee',
				type: 'uint256',
			},
		],
		name: 'CompanyAlterFeeChanged',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'previousCompanyFee',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'newCompanyFee',
				type: 'uint256',
			},
		],
		name: 'CompanyFeeChanged',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'previousCompany',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'newCompany',
				type: 'address',
			},
		],
		name: 'CompanyTransferred',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'betId',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'client',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'joinIdRef',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'mainTokenRefunded',
				type: 'uint256',
			},
		],
		name: 'CustomBetCancelled',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'betId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'string',
				name: 'finalValue',
				type: 'string',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'targetSideWon',
				type: 'bool',
			},
		],
		name: 'CustomBetClosed',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'id',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'string',
				name: 'eventId',
				type: 'string',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'hidden',
				type: 'bool',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'lockTime',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'expirationTime',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'string',
				name: 'targetValue',
				type: 'string',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'targetSide',
				type: 'bool',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'coefficient',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'creator',
				type: 'address',
			},
		],
		name: 'CustomBetCreated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'bool',
				name: 'side',
				type: 'bool',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'mainAmount',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'client',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'betId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'joinId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'joinIdRef',
				type: 'uint256',
			},
		],
		name: 'CustomBetJoined',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'betId',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'client',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'mainTokenRefunded',
				type: 'uint256',
			},
		],
		name: 'CustomBetRefunded',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'betId',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'client',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'useAlterFee',
				type: 'bool',
			},
		],
		name: 'CustomPrizeTaken',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'targetAddress',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'isAlternative',
				type: 'bool',
			},
		],
		name: 'FeeTaken',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'ownerToRemove',
				type: 'address',
			},
		],
		name: 'RemoveOwner',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'newSwapRouter',
				type: 'address',
			},
		],
		name: 'SetRouter',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'string',
				name: 'code',
				type: 'string',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'votingNumber',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'passed',
				type: 'bool',
			},
		],
		name: 'VotingResult',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'string',
				name: 'code',
				type: 'string',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'votingNumber',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'initiator',
				type: 'address',
			},
		],
		name: 'VotingStarted',
		type: 'event',
	},
	{
		inputs: [],
		name: 'acquireNewAlternativeToken',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'acquireNewOwner',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'acquireOwnerToRemove',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'acquireTakeFee',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'acquireTransferCompany',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'addOwnerVoting',
		outputs: [
			{
				internalType: 'address',
				name: 'newOwner',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'createdDate',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'votingCode',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'betId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'joinIdRef',
				type: 'uint256',
			},
		],
		name: 'cancelCustomJoin',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'changeAlterToken',
		outputs: [
			{
				internalType: 'address',
				name: 'newAlterToken',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'createdDate',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'votingCode',
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
				name: 'alternativeToken',
				type: 'address',
			},
		],
		name: 'changeAlternativeTokenStart',
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
		name: 'clientBetsLength',
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
		name: 'close',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'betId',
				type: 'uint256',
			},
			{
				internalType: 'string',
				name: 'finalValue',
				type: 'string',
			},
			{
				internalType: 'bool',
				name: 'targetSideWon',
				type: 'bool',
			},
		],
		name: 'closeCustomBet',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'company',
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
				components: [
					{
						internalType: 'string',
						name: 'eventId',
						type: 'string',
					},
					{
						internalType: 'bool',
						name: 'hidden',
						type: 'bool',
					},
					{
						internalType: 'uint256',
						name: 'lockTime',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'expirationTime',
						type: 'uint256',
					},
					{
						internalType: 'string',
						name: 'targetValue',
						type: 'string',
					},
					{
						internalType: 'bool',
						name: 'targetSide',
						type: 'bool',
					},
					{
						internalType: 'uint256',
						name: 'coefficient',
						type: 'uint256',
					},
				],
				internalType: 'struct CustomDTOs.CreateCustomRequest',
				name: 'createRequest',
				type: 'tuple',
			},
			{
				components: [
					{
						internalType: 'bool',
						name: 'side',
						type: 'bool',
					},
					{
						internalType: 'uint256',
						name: 'amount',
						type: 'uint256',
					},
				],
				internalType: 'struct CustomDTOs.JoinCustomRequest',
				name: 'joinRequest',
				type: 'tuple',
			},
		],
		name: 'createCustomBet',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'customBetIdCounter',
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
				internalType: 'bool',
				name: 'enable',
				type: 'bool',
			},
		],
		name: 'enableAlternativeToken',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getAlternativeFee',
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
		name: 'getAlternativeIERC20Token',
		outputs: [
			{
				internalType: 'contract IERC20',
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
				name: 'client',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'offset',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'size',
				type: 'uint256',
			},
		],
		name: 'getClientBets',
		outputs: [
			{
				internalType: 'uint256[]',
				name: '',
				type: 'uint256[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getCompanyFee',
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
				name: 'token',
				type: 'address',
			},
		],
		name: 'getCompanyFeeBalance',
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
				internalType: 'uint256',
				name: 'betId',
				type: 'uint256',
			},
		],
		name: 'getCustomBet',
		outputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'id',
						type: 'uint256',
					},
					{
						internalType: 'string',
						name: 'eventId',
						type: 'string',
					},
					{
						internalType: 'bool',
						name: 'hidden',
						type: 'bool',
					},
					{
						internalType: 'uint256',
						name: 'lockTime',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'expirationTime',
						type: 'uint256',
					},
					{
						internalType: 'string',
						name: 'targetValue',
						type: 'string',
					},
					{
						internalType: 'bool',
						name: 'targetSide',
						type: 'bool',
					},
					{
						internalType: 'uint256',
						name: 'coefficient',
						type: 'uint256',
					},
					{
						internalType: 'string',
						name: 'finalValue',
						type: 'string',
					},
					{
						internalType: 'bool',
						name: 'targetSideWon',
						type: 'bool',
					},
				],
				internalType: 'struct CustomDTOs.CustomBet',
				name: '',
				type: 'tuple',
			},
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
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'client',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'betId',
				type: 'uint256',
			},
		],
		name: 'getCustomClientJoins',
		outputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'id',
						type: 'uint256',
					},
					{
						internalType: 'address',
						name: 'client',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'freeAmount',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'lockedAmount',
						type: 'uint256',
					},
					{
						internalType: 'bool',
						name: 'targetSide',
						type: 'bool',
					},
					{
						internalType: 'uint256',
						name: 'joinRefId',
						type: 'uint256',
					},
				],
				internalType: 'struct CustomDTOs.JoinCustomBetClient[]',
				name: '',
				type: 'tuple[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'betId',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'client',
				type: 'address',
			},
		],
		name: 'getCustomWonAmount',
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
		name: 'getMainIERC20Token',
		outputs: [
			{
				internalType: 'contract IERC20',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getTimestampExpirationDelay',
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
		name: 'isAlternativeTokenEnabled',
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
				internalType: 'uint256',
				name: 'betId',
				type: 'uint256',
			},
			{
				components: [
					{
						internalType: 'bool',
						name: 'side',
						type: 'bool',
					},
					{
						internalType: 'uint256',
						name: 'amount',
						type: 'uint256',
					},
				],
				internalType: 'struct CustomDTOs.JoinCustomRequest',
				name: 'joinRequest',
				type: 'tuple',
			},
		],
		name: 'joinCustomBet',
		outputs: [],
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
		name: 'ownerAddStart',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'ownerToRemove',
				type: 'address',
			},
		],
		name: 'ownerToRemoveStart',
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
		name: 'owners',
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
				internalType: 'uint256',
				name: 'betId',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'client',
				type: 'address',
			},
		],
		name: 'refundCustomBet',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'removeOwnerVoting',
		outputs: [
			{
				internalType: 'address',
				name: 'ownerToRemove',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'createdDate',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'votingCode',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'alternativeFee',
				type: 'uint256',
			},
		],
		name: 'setAlternativeFeeFee',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'companyFee',
				type: 'uint256',
			},
		],
		name: 'setCompanyFee',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'router',
				type: 'address',
			},
		],
		name: 'setRouter',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'timestampExpirationDelay',
				type: 'uint256',
			},
		],
		name: 'setTimestampExpirationDelay',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'swapRouter',
		outputs: [
			{
				internalType: 'contract SwapRouter',
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
				internalType: 'uint256',
				name: 'betId',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'client',
				type: 'address',
			},
			{
				internalType: 'bool',
				name: 'useAlterFee',
				type: 'bool',
			},
		],
		name: 'takeCustomPrize',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'targetAddress',
				type: 'address',
			},
			{
				internalType: 'bool',
				name: 'isAlternative',
				type: 'bool',
			},
		],
		name: 'takeFeeStart',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'takeFeeVoting',
		outputs: [
			{
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'targetAddress',
				type: 'address',
			},
			{
				internalType: 'bool',
				name: 'isAlternative',
				type: 'bool',
			},
			{
				internalType: 'uint256',
				name: 'createdDate',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'votingCode',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'totalOwners',
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
				name: 'newCompany',
				type: 'address',
			},
		],
		name: 'transferCompanyStart',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'transferCompanyVoting',
		outputs: [
			{
				internalType: 'address',
				name: 'newCompanyAddress',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'createdDate',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'votingCode',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'voteNegative',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'votePositive',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
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
		name: 'voted',
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
		name: 'votingActive',
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
		name: 'votingInfo',
		outputs: [
			{
				internalType: 'address',
				name: 'initiator',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'currentNumberOfVotesPositive',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'currentNumberOfVotesNegative',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'startedDate',
				type: 'uint256',
			},
			{
				internalType: 'string',
				name: 'votingCode',
				type: 'string',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
] as const
const P2_P_CUSTOM_BET_PROVIDER: Contract<typeof abi> = {
	name: 'P2 P Custom Bet Provider',
	address: '0x3d1b2cf77ac7cc2309601b6e78cb695cbac3c7fe',
	is_deprecated: false,
	created_at: 1732063603,
	abi: abi,
}
export default P2_P_CUSTOM_BET_PROVIDER
