import { Contract } from '@/contract'
const abi = [
	{
		inputs: [],
		stateMutability: 'payable',
		type: 'constructor',
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
		inputs: [
			{
				internalType: 'bytes4',
				name: 'msgSig',
				type: 'bytes4',
			},
		],
		name: 'ErrLengthMismatch',
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
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'enum IBridgeSlashEvents.Tier',
				name: 'tier',
				type: 'uint8',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'bridgeOperator',
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
				name: 'slashUntilPeriod',
				type: 'uint256',
			},
		],
		name: 'BridgeSlashed',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [],
		name: 'BridgeTrackingIncorrectlyResponded',
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
				internalType: 'uint256',
				name: 'period',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'bridgeOperator',
				type: 'address',
			},
		],
		name: 'RemovalRequested',
		type: 'event',
	},
	{
		inputs: [],
		name: 'MINIMUM_VOTE_THRESHOLD',
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
		name: 'REMOVE_DURATION_THRESHOLD',
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
		name: 'TIER_1_PENALTY_DURATION',
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
		name: 'TIER_2_PENALTY_DURATION',
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
				internalType: 'address[]',
				name: 'operators',
				type: 'address[]',
			},
			{
				internalType: 'uint256[]',
				name: 'ballots',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256',
				name: 'totalBallot',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'totalVote',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'period',
				type: 'uint256',
			},
		],
		name: 'execSlashBridgeOperators',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: 'bridgeOperators',
				type: 'address[]',
			},
		],
		name: 'getAddedPeriodOf',
		outputs: [
			{
				internalType: 'uint256[]',
				name: 'addedPeriods',
				type: 'uint256[]',
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
		inputs: [],
		name: 'getPenaltyDurations',
		outputs: [
			{
				internalType: 'uint256[]',
				name: 'penaltyDurations',
				type: 'uint256[]',
			},
		],
		stateMutability: 'pure',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'ballot',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'totalVote',
				type: 'uint256',
			},
		],
		name: 'getSlashTier',
		outputs: [
			{
				internalType: 'enum IBridgeSlashEvents.Tier',
				name: 'tier',
				type: 'uint8',
			},
		],
		stateMutability: 'pure',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: 'bridgeOperators',
				type: 'address[]',
			},
		],
		name: 'getSlashUntilPeriodOf',
		outputs: [
			{
				internalType: 'uint256[]',
				name: 'untilPeriods',
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
				name: 'validatorContract',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'bridgeManagerContract',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'bridgeTrackingContract',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'dposGA',
				type: 'address',
			},
		],
		name: 'initialize',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'initializeREP2',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: 'bridgeOperators',
				type: 'address[]',
			},
			{
				internalType: 'uint96[]',
				name: '',
				type: 'uint96[]',
			},
			{
				internalType: 'bool[]',
				name: 'addeds',
				type: 'bool[]',
			},
		],
		name: 'onBridgeOperatorsAdded',
		outputs: [
			{
				internalType: 'bytes4',
				name: '',
				type: 'bytes4',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: '',
				type: 'address[]',
			},
			{
				internalType: 'bool[]',
				name: '',
				type: 'bool[]',
			},
		],
		name: 'onBridgeOperatorsRemoved',
		outputs: [
			{
				internalType: 'bytes4',
				name: '',
				type: 'bytes4',
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
		stateMutability: 'pure',
		type: 'function',
	},
] as const
const BRIDGE_SLASH: Contract<typeof abi> = {
	name: 'Bridge Slash',
	address: '0xfc274ec92bbb1a1472884558d1b5caac6f8220ee',
	is_deprecated: false,
	created_at: 1722410264,
	abi: abi,
}
export default BRIDGE_SLASH
