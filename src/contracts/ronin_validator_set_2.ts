import { Contract } from '@/contract'
const abi = [
	{
		inputs: [],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		inputs: [],
		name: 'ErrAlreadyRequestedEmergencyExit',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrAlreadyRequestedRevokingCandidate',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrAlreadyRequestedUpdatingCommissionRate',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrAlreadyWrappedEpoch',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrAtEndOfEpochOnly',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrCallPrecompiled',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrCallerMustBeCoinbase',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'validator',
				type: 'address',
			},
		],
		name: 'ErrCannotBailout',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'enum ContractType',
				name: 'contractType',
				type: 'uint8',
			},
		],
		name: 'ErrContractTypeNotFound',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrExceedsMaxNumberOfCandidate',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrExistentCandidate',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'candidateAdminAddr',
				type: 'address',
			},
		],
		name: 'ErrExistentCandidateAdmin',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'treasuryAddr',
				type: 'address',
			},
		],
		name: 'ErrExistentTreasury',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'bytes4',
				name: 'msgSig',
				type: 'bytes4',
			},
			{
				internalType: 'uint256',
				name: 'currentBalance',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'sendAmount',
				type: 'uint256',
			},
		],
		name: 'ErrInsufficientBalance',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrInvalidCommissionRate',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrInvalidEffectiveDaysOnwards',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrInvalidMaxPrioritizedValidatorNumber',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrInvalidMinEffectiveDaysOnwards',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'cid',
				type: 'address',
			},
		],
		name: 'ErrLockedFundMightBeRecycled',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'cid',
				type: 'address',
			},
		],
		name: 'ErrLockedFundReleaseInfoNotFound',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrNonExistentCandidate',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'bytes4',
				name: 'msgSig',
				type: 'bytes4',
			},
		],
		name: 'ErrRecipientRevert',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrTrustedOrgCannotRenounce',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'bytes4',
				name: 'msgSig',
				type: 'bytes4',
			},
			{
				internalType: 'enum RoleAccess',
				name: 'expectedRole',
				type: 'uint8',
			},
		],
		name: 'ErrUnauthorized',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrUnauthorizedReceiveRON',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'bytes4',
				name: 'msgSig',
				type: 'bytes4',
			},
			{
				internalType: 'enum ContractType',
				name: 'expectedContractType',
				type: 'uint8',
			},
			{
				internalType: 'address',
				name: 'actual',
				type: 'address',
			},
		],
		name: 'ErrUnexpectedInternalCall',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'addr',
				type: 'address',
			},
		],
		name: 'ErrZeroCodeContract',
		type: 'error',
	},
	{
		inputs: [],
		name: 'NonExistentRecyclingInfo',
		type: 'error',
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
				internalType: 'uint256',
				name: 'epoch',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address[]',
				name: 'cids',
				type: 'address[]',
			},
		],
		name: 'BlockProducerSetUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'cid',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'rewardAmount',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'enum ICoinbaseExecution.BlockRewardDeprecatedType',
				name: 'deprecatedType',
				type: 'uint8',
			},
		],
		name: 'BlockRewardDeprecated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'cid',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'submittedAmount',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'bonusAmount',
				type: 'uint256',
			},
		],
		name: 'BlockRewardSubmitted',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'cid',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'bridgeOperator',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'recipientAddr',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'BridgeOperatorRewardDistributed',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'cid',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'bridgeOperator',
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
		name: 'BridgeOperatorRewardDistributionFailed',
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
				internalType: 'uint256',
				name: 'epoch',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address[]',
				name: 'bridgeOperators',
				type: 'address[]',
			},
		],
		name: 'BridgeOperatorSetUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'cid',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'treasuryAddr',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'admin',
				type: 'address',
			},
		],
		name: 'CandidateGranted',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'cid',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'revokingTimestamp',
				type: 'uint256',
			},
		],
		name: 'CandidateRevokingTimestampUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'cid',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'topupDeadline',
				type: 'uint256',
			},
		],
		name: 'CandidateTopupDeadlineUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address[]',
				name: 'cids',
				type: 'address[]',
			},
		],
		name: 'CandidatesRevoked',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'cid',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'effectiveTimestamp',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'rate',
				type: 'uint256',
			},
		],
		name: 'CommissionRateUpdateScheduled',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'cid',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'rate',
				type: 'uint256',
			},
		],
		name: 'CommissionRateUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'enum ContractType',
				name: 'contractType',
				type: 'uint8',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'addr',
				type: 'address',
			},
		],
		name: 'ContractUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'recipientAddr',
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
				name: 'balance',
				type: 'uint256',
			},
		],
		name: 'DeprecatedRewardRecycleFailed',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'recipientAddr',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'DeprecatedRewardRecycled',
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
		],
		name: 'EmergencyExitLockedAmountUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'cid',
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
				name: 'unlockedAmount',
				type: 'uint256',
			},
		],
		name: 'EmergencyExitLockedFundReleased',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'cid',
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
				name: 'unlockedAmount',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'contractBalance',
				type: 'uint256',
			},
		],
		name: 'EmergencyExitLockedFundReleasingFailed',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'cid',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'lockedAmount',
				type: 'uint256',
			},
		],
		name: 'EmergencyExitRequested',
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
		],
		name: 'EmergencyExpiryDurationUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'cid',
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
		],
		name: 'FastFinalityRewardDistributed',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'cid',
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
		name: 'FastFinalityRewardDistributionFailed',
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
				name: '',
				type: 'uint256',
			},
		],
		name: 'MaxPrioritizedValidatorNumberUpdated',
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
		name: 'MaxValidatorCandidateUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'MaxValidatorNumberUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'numOfDays',
				type: 'uint256',
			},
		],
		name: 'MinEffectiveDaysOnwardsUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'cid',
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
		],
		name: 'MiningRewardDistributed',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'cid',
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
		name: 'MiningRewardDistributionFailed',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'totalAmount',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address[]',
				name: 'cids',
				type: 'address[]',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: 'amounts',
				type: 'uint256[]',
			},
		],
		name: 'StakingRewardDistributed',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'totalAmount',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address[]',
				name: 'cids',
				type: 'address[]',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: 'amounts',
				type: 'uint256[]',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'contractBalance',
				type: 'uint256',
			},
		],
		name: 'StakingRewardDistributionFailed',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'cid',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'period',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'jailedUntil',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'deductedStakingAmount',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'blockProducerRewardDeprecated',
				type: 'bool',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'bridgeOperatorRewardDeprecated',
				type: 'bool',
			},
		],
		name: 'ValidatorPunished',
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
				name: 'cids',
				type: 'address[]',
			},
		],
		name: 'ValidatorSetUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'cid',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'period',
				type: 'uint256',
			},
		],
		name: 'ValidatorUnjailed',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'periodNumber',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'epochNumber',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'periodEnding',
				type: 'bool',
			},
		],
		name: 'WrappedUpEpoch',
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
				internalType: 'TConsensus',
				name: 'consensus',
				type: 'address',
			},
		],
		name: 'checkJailed',
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
				internalType: 'TConsensus',
				name: 'addr',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'blockNum',
				type: 'uint256',
			},
		],
		name: 'checkJailedAtBlock',
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
				internalType: 'TConsensus[]',
				name: 'consensusList',
				type: 'address[]',
			},
		],
		name: 'checkManyJailed',
		outputs: [
			{
				internalType: 'bool[]',
				name: '',
				type: 'bool[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: 'candidateIds',
				type: 'address[]',
			},
		],
		name: 'checkManyJailedById',
		outputs: [
			{
				internalType: 'bool[]',
				name: '',
				type: 'bool[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'TConsensus',
				name: 'consensus',
				type: 'address',
			},
		],
		name: 'checkMiningRewardDeprecated',
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
				internalType: 'TConsensus',
				name: 'consensus',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'period',
				type: 'uint256',
			},
		],
		name: 'checkMiningRewardDeprecatedAtPeriod',
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
		name: 'currentPeriod',
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
		name: 'currentPeriodStartAtBlock',
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
		name: 'emergencyExitLockedAmount',
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
		name: 'emergencyExpiryDuration',
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
				name: '_block',
				type: 'uint256',
			},
		],
		name: 'epochEndingAt',
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
				name: '_block',
				type: 'uint256',
			},
		],
		name: 'epochOf',
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
				name: 'candidateAdmin',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'cid',
				type: 'address',
			},
			{
				internalType: 'address payable',
				name: 'treasuryAddr',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'commissionRate',
				type: 'uint256',
			},
		],
		name: 'execApplyValidatorCandidate',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'validatorId',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'period',
				type: 'uint256',
			},
		],
		name: 'execBailOut',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'cid',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'newAdmin',
				type: 'address',
			},
		],
		name: 'execChangeAdminAddr',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'cid',
				type: 'address',
			},
			{
				internalType: 'TConsensus',
				name: 'newConsensusAddr',
				type: 'address',
			},
		],
		name: 'execChangeConsensusAddr',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'cid',
				type: 'address',
			},
			{
				internalType: 'address payable',
				name: 'newTreasury',
				type: 'address',
			},
		],
		name: 'execChangeTreasuryAddr',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'cid',
				type: 'address',
			},
			{
				internalType: 'address payable',
				name: 'recipient',
				type: 'address',
			},
		],
		name: 'execReleaseLockedFundForEmergencyExitRequest',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'cid',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'secLeftToRevoke',
				type: 'uint256',
			},
		],
		name: 'execRequestEmergencyExit',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'cid',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'secsLeft',
				type: 'uint256',
			},
		],
		name: 'execRequestRenounceCandidate',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'cid',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'effectiveDaysOnwards',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'commissionRate',
				type: 'uint256',
			},
		],
		name: 'execRequestUpdateCommissionRate',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'validatorId',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'newJailedUntil',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'slashAmount',
				type: 'uint256',
			},
			{
				internalType: 'bool',
				name: 'cannotBailout',
				type: 'bool',
			},
		],
		name: 'execSlash',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getBlockProducerIds',
		outputs: [
			{
				internalType: 'address[]',
				name: 'cids',
				type: 'address[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getBlockProducers',
		outputs: [
			{
				internalType: 'TConsensus[]',
				name: 'consensusList',
				type: 'address[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'TConsensus',
				name: 'consensus',
				type: 'address',
			},
		],
		name: 'getCandidateInfo',
		outputs: [
			{
				components: [
					{
						internalType: 'address',
						name: '__shadowedAdmin',
						type: 'address',
					},
					{
						internalType: 'TConsensus',
						name: '__shadowedConsensus',
						type: 'address',
					},
					{
						internalType: 'address payable',
						name: '__shadowedTreasury',
						type: 'address',
					},
					{
						internalType: 'address',
						name: '____deprecatedBridgeOperatorAddr',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'commissionRate',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'revokingTimestamp',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'topupDeadline',
						type: 'uint256',
					},
				],
				internalType: 'struct ICandidateManager.ValidatorCandidate',
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
				internalType: 'address',
				name: 'cid',
				type: 'address',
			},
		],
		name: 'getCandidateInfoById',
		outputs: [
			{
				components: [
					{
						internalType: 'address',
						name: '__shadowedAdmin',
						type: 'address',
					},
					{
						internalType: 'TConsensus',
						name: '__shadowedConsensus',
						type: 'address',
					},
					{
						internalType: 'address payable',
						name: '__shadowedTreasury',
						type: 'address',
					},
					{
						internalType: 'address',
						name: '____deprecatedBridgeOperatorAddr',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'commissionRate',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'revokingTimestamp',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'topupDeadline',
						type: 'uint256',
					},
				],
				internalType: 'struct ICandidateManager.ValidatorCandidate',
				name: '',
				type: 'tuple',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getCandidateInfos',
		outputs: [
			{
				components: [
					{
						internalType: 'address',
						name: '__shadowedAdmin',
						type: 'address',
					},
					{
						internalType: 'TConsensus',
						name: '__shadowedConsensus',
						type: 'address',
					},
					{
						internalType: 'address payable',
						name: '__shadowedTreasury',
						type: 'address',
					},
					{
						internalType: 'address',
						name: '____deprecatedBridgeOperatorAddr',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'commissionRate',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'revokingTimestamp',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'topupDeadline',
						type: 'uint256',
					},
				],
				internalType: 'struct ICandidateManager.ValidatorCandidate[]',
				name: 'list',
				type: 'tuple[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'TConsensus',
				name: 'consensus',
				type: 'address',
			},
		],
		name: 'getCommissionChangeSchedule',
		outputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'effectiveTimestamp',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'commissionRate',
						type: 'uint256',
					},
				],
				internalType: 'struct ICandidateManager.CommissionSchedule',
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
				internalType: 'enum ContractType',
				name: 'contractType',
				type: 'uint8',
			},
		],
		name: 'getContract',
		outputs: [
			{
				internalType: 'address',
				name: 'contract_',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'TConsensus',
				name: 'consensus',
				type: 'address',
			},
		],
		name: 'getEmergencyExitInfo',
		outputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'lockedAmount',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'recyclingAt',
						type: 'uint256',
					},
				],
				internalType: 'struct ICommonInfo.EmergencyExitInfo',
				name: '_info',
				type: 'tuple',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'TConsensus',
				name: 'consensus',
				type: 'address',
			},
		],
		name: 'getJailedTimeLeft',
		outputs: [
			{
				internalType: 'bool',
				name: 'isJailed_',
				type: 'bool',
			},
			{
				internalType: 'uint256',
				name: 'blockLeft_',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'epochLeft_',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'TConsensus',
				name: 'consensus',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_blockNum',
				type: 'uint256',
			},
		],
		name: 'getJailedTimeLeftAtBlock',
		outputs: [
			{
				internalType: 'bool',
				name: 'isJailed_',
				type: 'bool',
			},
			{
				internalType: 'uint256',
				name: 'blockLeft_',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'epochLeft_',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getLastUpdatedBlock',
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
		name: 'getValidatorCandidateIds',
		outputs: [
			{
				internalType: 'address[]',
				name: '',
				type: 'address[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getValidatorCandidates',
		outputs: [
			{
				internalType: 'TConsensus[]',
				name: '',
				type: 'address[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getValidatorIds',
		outputs: [
			{
				internalType: 'address[]',
				name: 'cids',
				type: 'address[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getValidators',
		outputs: [
			{
				internalType: 'TConsensus[]',
				name: 'consensusList',
				type: 'address[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '__slashIndicatorContract',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '__stakingContract',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '__stakingVestingContract',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '__maintenanceContract',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '__roninTrustedOrganizationContract',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '__maxValidatorNumber',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '__maxValidatorCandidate',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '__maxPrioritizedValidatorNumber',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '__minEffectiveDaysOnwards',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '__numberOfBlocksInEpoch',
				type: 'uint256',
			},
			{
				internalType: 'uint256[2]',
				name: '__emergencyExitConfigs',
				type: 'uint256[2]',
			},
		],
		name: 'initialize',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'initializeV2',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'fastFinalityTrackingContract',
				type: 'address',
			},
		],
		name: 'initializeV3',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'profileContract',
				type: 'address',
			},
		],
		name: 'initializeV4',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'TConsensus',
				name: 'consensusAddr',
				type: 'address',
			},
		],
		name: 'isBlockProducer',
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
				name: 'id',
				type: 'address',
			},
		],
		name: 'isBlockProducerById',
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
				internalType: 'TConsensus',
				name: 'consensusAddr',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'admin',
				type: 'address',
			},
		],
		name: 'isCandidateAdmin',
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
				name: 'candidateId',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'admin',
				type: 'address',
			},
		],
		name: 'isCandidateAdminById',
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
		name: 'isPeriodEnding',
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
				internalType: 'TConsensus',
				name: 'consensus',
				type: 'address',
			},
		],
		name: 'isValidatorCandidate',
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
		name: 'maxPrioritizedValidatorNumber',
		outputs: [
			{
				internalType: 'uint256',
				name: '_maximumPrioritizedValidatorNumber',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'maxValidatorCandidate',
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
		name: 'maxValidatorNumber',
		outputs: [
			{
				internalType: 'uint256',
				name: '_maximumValidatorNumber',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'minEffectiveDaysOnward',
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
		name: 'numberOfBlocksInEpoch',
		outputs: [
			{
				internalType: 'uint256',
				name: '_numberOfBlocks',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'precompilePickValidatorSetAddress',
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
		name: 'precompileSortValidatorsAddress',
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
				internalType: 'enum ContractType',
				name: 'contractType',
				type: 'uint8',
			},
			{
				internalType: 'address',
				name: 'addr',
				type: 'address',
			},
		],
		name: 'setContract',
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
		],
		name: 'setEmergencyExitLockedAmount',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'duration',
				type: 'uint256',
			},
		],
		name: 'setEmergencyExpiryDuration',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_number',
				type: 'uint256',
			},
		],
		name: 'setMaxPrioritizedValidatorNumber',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_number',
				type: 'uint256',
			},
		],
		name: 'setMaxValidatorCandidate',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_max',
				type: 'uint256',
			},
		],
		name: 'setMaxValidatorNumber',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_numOfDays',
				type: 'uint256',
			},
		],
		name: 'setMinEffectiveDaysOnwards',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'submitBlockReward',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'totalBlockProducer',
		outputs: [
			{
				internalType: 'uint256',
				name: 'total',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'totalDeprecatedReward',
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
				name: '_epoch',
				type: 'uint256',
			},
		],
		name: 'tryGetPeriodOfEpoch',
		outputs: [
			{
				internalType: 'bool',
				name: '_filled',
				type: 'bool',
			},
			{
				internalType: 'uint256',
				name: '_periodNumber',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'validatorCount',
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
		name: 'wrapUpEpoch',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		stateMutability: 'payable',
		type: 'receive',
	},
] as const
const RONIN_VALIDATOR_SET_2: Contract<typeof abi> = {
	name: 'Ronin Validator Set',
	address: '0x475d6005d57d1b93cb4acf7866ddc16925097e88',
	is_deprecated: false,
	created_at: 1709535712,
	abi: abi,
}
export default RONIN_VALIDATOR_SET_2
