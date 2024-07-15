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
				internalType: 'bytes32',
				name: 'commitment',
				type: 'bytes32',
			},
		],
		name: 'CommitmentTooNew',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'commitment',
				type: 'bytes32',
			},
		],
		name: 'CommitmentTooOld',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'uint64',
				name: 'duration',
				type: 'uint64',
			},
		],
		name: 'DurationTooShort',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'string',
				name: 'name',
				type: 'string',
			},
			{
				internalType: 'address',
				name: 'requestOwner',
				type: 'address',
			},
			{
				internalType: 'bool',
				name: 'nameProtected',
				type: 'bool',
			},
			{
				internalType: 'bool',
				name: 'ownerWhitelisted',
				type: 'bool',
			},
		],
		name: 'ErrInvalidRegisterProtectedName',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'string',
				name: 'name',
				type: 'string',
			},
		],
		name: 'ErrRequestedForProtectedName',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InsufficientValue',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidArrayLength',
		type: 'error',
	},
	{
		inputs: [],
		name: 'MaxCommitmentAgeTooHigh',
		type: 'error',
	},
	{
		inputs: [],
		name: 'MaxCommitmentAgeTooLow',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'string',
				name: 'name',
				type: 'string',
			},
		],
		name: 'NameNotAvailable',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ResolverRequiredWhenDataSupplied',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'node',
				type: 'bytes32',
			},
		],
		name: 'Unauthorized',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'commitment',
				type: 'bytes32',
			},
		],
		name: 'UnexpiredCommitmentExists',
		type: 'error',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'operator',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'minCommitmentAge',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'maxCommitmentAge',
				type: 'uint256',
			},
		],
		name: 'CommitmentAgeUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'operator',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'contract INSDomainPrice',
				name: 'newDomainPrice',
				type: 'address',
			},
		],
		name: 'DomainPriceUpdated',
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
				name: 'operator',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'duration',
				type: 'uint256',
			},
		],
		name: 'MinRegistrationDurationUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'string',
				name: 'name',
				type: 'string',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'id',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'ronPrice',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'usdPrice',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint64',
				name: 'expires',
				type: 'uint64',
			},
		],
		name: 'NameRegistered',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'string',
				name: 'name',
				type: 'string',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'id',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'cost',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint64',
				name: 'expires',
				type: 'uint64',
			},
		],
		name: 'NameRenewed',
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
				indexed: true,
				internalType: 'address',
				name: 'operator',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: 'ids',
				type: 'uint256[]',
			},
			{
				indexed: false,
				internalType: 'address[]',
				name: 'owners',
				type: 'address[]',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'status',
				type: 'bool',
			},
		],
		name: 'ProtectedNamesWhitelisted',
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
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
		],
		name: 'Unpaused',
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
		name: 'MIN_DOMAIN_LENGTH',
		outputs: [
			{
				internalType: 'uint8',
				name: '',
				type: 'uint8',
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
		name: 'PAUSER_ROLE',
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
				internalType: 'string',
				name: 'name',
				type: 'string',
			},
		],
		name: 'available',
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
				internalType: 'uint256[]',
				name: 'ids',
				type: 'uint256[]',
			},
			{
				internalType: 'address[]',
				name: 'owners',
				type: 'address[]',
			},
			{
				internalType: 'bool',
				name: 'status',
				type: 'bool',
			},
		],
		name: 'bulkWhitelistProtectedNames',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'commitment',
				type: 'bytes32',
			},
		],
		name: 'commit',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'string',
				name: 'name',
				type: 'string',
			},
			{
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
			{
				internalType: 'uint64',
				name: 'duration',
				type: 'uint64',
			},
			{
				internalType: 'bytes32',
				name: 'secret',
				type: 'bytes32',
			},
			{
				internalType: 'address',
				name: 'resolver',
				type: 'address',
			},
			{
				internalType: 'bytes[]',
				name: 'data',
				type: 'bytes[]',
			},
			{
				internalType: 'bool',
				name: 'reverseRecord',
				type: 'bool',
			},
		],
		name: 'computeCommitment',
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
				internalType: 'string',
				name: 'name',
				type: 'string',
			},
		],
		name: 'computeId',
		outputs: [
			{
				internalType: 'uint256',
				name: 'id',
				type: 'uint256',
			},
		],
		stateMutability: 'pure',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getCommitmentAgeRange',
		outputs: [
			{
				internalType: 'uint256',
				name: 'minCommitmentAge',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'maxCommitmentAge',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getMinRegistrationDuration',
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
		name: 'getNameChecker',
		outputs: [
			{
				internalType: 'contract INameChecker',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getPriceOracle',
		outputs: [
			{
				internalType: 'contract INSDomainPrice',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getRNSUnified',
		outputs: [
			{
				internalType: 'contract INSUnified',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getReverseRegistrar',
		outputs: [
			{
				internalType: 'contract INSReverseRegistrar',
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
		name: 'getTreasury',
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
				internalType: 'uint256',
				name: 'id',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
		],
		name: 'getWhitelistProtectedNameStatus',
		outputs: [
			{
				internalType: 'bool',
				name: 'status',
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
				internalType: 'address',
				name: 'pauser',
				type: 'address',
			},
			{
				internalType: 'address payable',
				name: 'treasury',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'maxCommitmentAge',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'minCommitmentAge',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'minRegistrationDuration',
				type: 'uint256',
			},
			{
				internalType: 'contract INSUnified',
				name: 'rnsUnified',
				type: 'address',
			},
			{
				internalType: 'contract INameChecker',
				name: 'nameChecker',
				type: 'address',
			},
			{
				internalType: 'contract INSDomainPrice',
				name: 'priceOracle',
				type: 'address',
			},
			{
				internalType: 'contract INSReverseRegistrar',
				name: 'reverseRegistrar',
				type: 'address',
			},
		],
		name: 'initialize',
		outputs: [],
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
				internalType: 'string',
				name: 'name',
				type: 'string',
			},
			{
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
			{
				internalType: 'uint64',
				name: 'duration',
				type: 'uint64',
			},
			{
				internalType: 'bytes32',
				name: 'secret',
				type: 'bytes32',
			},
			{
				internalType: 'address',
				name: 'resolver',
				type: 'address',
			},
			{
				internalType: 'bytes[]',
				name: 'data',
				type: 'bytes[]',
			},
			{
				internalType: 'bool',
				name: 'reverseRecord',
				type: 'bool',
			},
		],
		name: 'register',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'string',
				name: 'name',
				type: 'string',
			},
			{
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
			{
				internalType: 'uint64',
				name: 'duration',
				type: 'uint64',
			},
			{
				internalType: 'address',
				name: 'resolver',
				type: 'address',
			},
			{
				internalType: 'bytes[]',
				name: 'data',
				type: 'bytes[]',
			},
			{
				internalType: 'bool',
				name: 'reverseRecord',
				type: 'bool',
			},
		],
		name: 'registerProtectedName',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'string',
				name: 'name',
				type: 'string',
			},
			{
				internalType: 'uint64',
				name: 'duration',
				type: 'uint64',
			},
		],
		name: 'renew',
		outputs: [],
		stateMutability: 'payable',
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
				internalType: 'string',
				name: 'name',
				type: 'string',
			},
			{
				internalType: 'uint64',
				name: 'duration',
				type: 'uint64',
			},
		],
		name: 'rentPrice',
		outputs: [
			{
				internalType: 'uint256',
				name: 'usdPrice',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'ronPrice',
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
		name: 'revokeRole',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'minCommitmentAge',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'maxCommitmentAge',
				type: 'uint256',
			},
		],
		name: 'setCommitmentAge',
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
		name: 'setMinRegistrationDuration',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'contract INSDomainPrice',
				name: 'priceOracle',
				type: 'address',
			},
		],
		name: 'setPriceOracle',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address payable',
				name: 'addr',
				type: 'address',
			},
		],
		name: 'setTreasury',
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
		inputs: [
			{
				internalType: 'string',
				name: 'name',
				type: 'string',
			},
		],
		name: 'valid',
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
] as const
const RON_REGISTRAR_CONTROLLER: Contract<typeof abi> = {
	name: 'RON Registrar Controller',
	address: '0x7df2732b400ed050c0cfde58a0dbd870c0502792',
	is_deprecated: false,
	created_at: 1699254612,
	abi: abi,
}
export default RON_REGISTRAR_CONTROLLER
