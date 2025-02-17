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
				internalType: 'address',
				name: 'admin',
				type: 'address',
			},
		],
		name: 'ErrAdminOfAnyActivePoolForbidden',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrCallerMustBeValidatorContract',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'addr',
				type: 'address',
			},
			{
				internalType: 'string',
				name: 'extraInfo',
				type: 'string',
			},
		],
		name: 'ErrCannotInitTransferRON',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrCannotTransferRON',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'poolAddr',
				type: 'address',
			},
		],
		name: 'ErrInactivePool',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrInsufficientBalance',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrInsufficientDelegatingAmount',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrInsufficientStakingAmount',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrInvalidArrays',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrInvalidCommissionRate',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrInvalidPoolShare',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrOnlyPoolAdminAllowed',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrPoolAdminForbidden',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrRecipientRevert',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrStakingAmountLeft',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrThreeInteractionAddrsNotEqual',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrThreeOperationAddrsNotDistinct',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrUndelegateTooEarly',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrUndelegateZeroAmount',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrUnstakeTooEarly',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrUnstakeZeroAmount',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrZeroCodeContract',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrZeroValue',
		type: 'error',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'minRate',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'maxRate',
				type: 'uint256',
			},
		],
		name: 'CommissionRateRangeUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'minSecs',
				type: 'uint256',
			},
		],
		name: 'CooldownSecsToUndelegateUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'delegator',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'consensuAddr',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'Delegated',
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
				internalType: 'uint256',
				name: 'threshold',
				type: 'uint256',
			},
		],
		name: 'MinValidatorStakingAmountUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'validator',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'admin',
				type: 'address',
			},
		],
		name: 'PoolApproved',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'period',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'poolAddr',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'shares',
				type: 'uint256',
			},
		],
		name: 'PoolSharesUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address[]',
				name: 'validator',
				type: 'address[]',
			},
		],
		name: 'PoolsDeprecated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'period',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address[]',
				name: 'poolAddrs',
				type: 'address[]',
			},
		],
		name: 'PoolsUpdateConflicted',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'period',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address[]',
				name: 'poolAddrs',
				type: 'address[]',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: 'rewards',
				type: 'uint256[]',
			},
		],
		name: 'PoolsUpdateFailed',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'period',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address[]',
				name: 'poolAddrs',
				type: 'address[]',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: 'aRps',
				type: 'uint256[]',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: 'shares',
				type: 'uint256[]',
			},
		],
		name: 'PoolsUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'poolAddr',
				type: 'address',
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
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'RewardClaimed',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'consensuAddr',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'Staked',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'validator',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'recipient',
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
				internalType: 'uint256',
				name: 'contractBalance',
				type: 'uint256',
			},
		],
		name: 'StakingAmountDeductFailed',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'validator',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'admin',
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
				internalType: 'uint256',
				name: 'contractBalance',
				type: 'uint256',
			},
		],
		name: 'StakingAmountTransferFailed',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'delegator',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'consensuAddr',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'Undelegated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'consensuAddr',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'Unstaked',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'poolAddr',
				type: 'address',
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
				name: 'debited',
				type: 'uint256',
			},
		],
		name: 'UserRewardUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		name: 'ValidatorContractUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'secs',
				type: 'uint256',
			},
		],
		name: 'WaitingSecsToRevokeUpdated',
		type: 'event',
	},
	{
		stateMutability: 'payable',
		type: 'fallback',
	},
	{
		inputs: [],
		name: 'DEFAULT_ADDITION_GAS',
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
		name: 'PERIOD_DURATION',
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
				name: '_candidateAdmin',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_consensusAddr',
				type: 'address',
			},
			{
				internalType: 'address payable',
				name: '_treasuryAddr',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_bridgeOperatorAddr',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_commissionRate',
				type: 'uint256',
			},
		],
		name: 'applyValidatorCandidate',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: '_consensusAddrs',
				type: 'address[]',
			},
			{
				internalType: 'uint256[]',
				name: '_amounts',
				type: 'uint256[]',
			},
		],
		name: 'bulkUndelegate',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: '_consensusAddrList',
				type: 'address[]',
			},
		],
		name: 'claimRewards',
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
		inputs: [],
		name: 'cooldownSecsToUndelegate',
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
				name: '_consensusAddr',
				type: 'address',
			},
		],
		name: 'delegate',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: '_consensusAddrList',
				type: 'address[]',
			},
			{
				internalType: 'address',
				name: '_consensusAddrDst',
				type: 'address',
			},
		],
		name: 'delegateRewards',
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
				name: '_consensusAddr',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_amount',
				type: 'uint256',
			},
		],
		name: 'execDeductStakingAmount',
		outputs: [
			{
				internalType: 'uint256',
				name: '_actualDeductingAmount',
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
				name: '_pools',
				type: 'address[]',
			},
			{
				internalType: 'uint256',
				name: '_newPeriod',
				type: 'uint256',
			},
		],
		name: 'execDeprecatePools',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: '_consensusAddrs',
				type: 'address[]',
			},
			{
				internalType: 'uint256[]',
				name: '_rewards',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256',
				name: '_period',
				type: 'uint256',
			},
		],
		name: 'execRecordRewards',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getCommissionRateRange',
		outputs: [
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
				internalType: 'address[]',
				name: '_pools',
				type: 'address[]',
			},
		],
		name: 'getManySelfStakings',
		outputs: [
			{
				internalType: 'uint256[]',
				name: '_selfStakings',
				type: 'uint256[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: '_poolAddrs',
				type: 'address[]',
			},
			{
				internalType: 'address[]',
				name: '_userList',
				type: 'address[]',
			},
		],
		name: 'getManyStakingAmounts',
		outputs: [
			{
				internalType: 'uint256[]',
				name: '_stakingAmounts',
				type: 'uint256[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: '_poolList',
				type: 'address[]',
			},
		],
		name: 'getManyStakingTotals',
		outputs: [
			{
				internalType: 'uint256[]',
				name: '_stakingAmounts',
				type: 'uint256[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_poolAdminAddr',
				type: 'address',
			},
		],
		name: 'getPoolAddressOf',
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
				name: '_poolAddr',
				type: 'address',
			},
		],
		name: 'getPoolDetail',
		outputs: [
			{
				internalType: 'address',
				name: '_admin',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_stakingAmount',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_stakingTotal',
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
				name: '_poolAddr',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_user',
				type: 'address',
			},
		],
		name: 'getReward',
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
				name: '_user',
				type: 'address',
			},
			{
				internalType: 'address[]',
				name: '_poolAddrList',
				type: 'address[]',
			},
		],
		name: 'getRewards',
		outputs: [
			{
				internalType: 'uint256[]',
				name: '_rewards',
				type: 'uint256[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_poolAddr',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_user',
				type: 'address',
			},
		],
		name: 'getStakingAmount',
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
				name: '_poolAddr',
				type: 'address',
			},
		],
		name: 'getStakingTotal',
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
				name: '__validatorContract',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '__minValidatorStakingAmount',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '__maxCommissionRate',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '__cooldownSecsToUndelegate',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '__waitingSecsToRevoke',
				type: 'uint256',
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
				name: '_poolAdminAddr',
				type: 'address',
			},
		],
		name: 'isAdminOfActivePool',
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
		name: 'minValidatorStakingAmount',
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
				name: '_consensusAddrSrc',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_consensusAddrDst',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_amount',
				type: 'uint256',
			},
		],
		name: 'redelegate',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_consensusAddr',
				type: 'address',
			},
		],
		name: 'requestEmergencyExit',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_consensusAddr',
				type: 'address',
			},
		],
		name: 'requestRenounce',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_consensusAddr',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_effectiveDaysOnwards',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_commissionRate',
				type: 'uint256',
			},
		],
		name: 'requestUpdateCommissionRate',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_minRate',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_maxRate',
				type: 'uint256',
			},
		],
		name: 'setCommissionRateRange',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_cooldownSecs',
				type: 'uint256',
			},
		],
		name: 'setCooldownSecsToUndelegate',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_threshold',
				type: 'uint256',
			},
		],
		name: 'setMinValidatorStakingAmount',
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
		],
		name: 'setValidatorContract',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_secs',
				type: 'uint256',
			},
		],
		name: 'setWaitingSecsToRevoke',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_consensusAddr',
				type: 'address',
			},
		],
		name: 'stake',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_consensusAddr',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_amount',
				type: 'uint256',
			},
		],
		name: 'undelegate',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_consensusAddr',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_amount',
				type: 'uint256',
			},
		],
		name: 'unstake',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'validatorContract',
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
		name: 'waitingSecsToRevoke',
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
		stateMutability: 'payable',
		type: 'receive',
	},
] as const
const STAKING_3: Contract<typeof abi> = {
	name: 'Staking',
	address: '0x9b0e61e629eb44875cff534de0c176078cac502f',
	is_deprecated: false,
	created_at: 1684207637,
	abi: abi,
}
export default STAKING_3
