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
				internalType: 'enum RoleAccess',
				name: 'infoType',
				type: 'uint8',
			},
			{
				internalType: 'uint256',
				name: 'value',
				type: 'uint256',
			},
		],
		name: 'ErrDuplicatedInfo',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'bytes',
				name: 'pubkey',
				type: 'bytes',
			},
		],
		name: 'ErrDuplicatedPubkey',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrExistentProfile',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrIdAndConsensusDiffer',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrNonExistentProfile',
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
				internalType: 'enum RoleAccess',
				name: 'infoType',
				type: 'uint8',
			},
		],
		name: 'ErrZeroAddress',
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
		name: 'ErrZeroPubkey',
		type: 'error',
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
				internalType: 'address',
				name: 'id',
				type: 'address',
			},
		],
		name: 'ProfileAdded',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'id',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'enum RoleAccess',
				name: 'addressType',
				type: 'uint8',
			},
		],
		name: 'ProfileAddressChanged',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'id',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'bytes',
				name: 'pubkey',
				type: 'bytes',
			},
		],
		name: 'PubkeyChanged',
		type: 'event',
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'address',
						name: 'id',
						type: 'address',
					},
					{
						internalType: 'address',
						name: 'consensus',
						type: 'address',
					},
					{
						internalType: 'address',
						name: 'admin',
						type: 'address',
					},
					{
						internalType: 'address payable',
						name: 'treasury',
						type: 'address',
					},
					{
						internalType: 'address',
						name: 'governor',
						type: 'address',
					},
					{
						internalType: 'bytes',
						name: 'pubkey',
						type: 'bytes',
					},
				],
				internalType: 'struct IProfile.CandidateProfile',
				name: 'profile',
				type: 'tuple',
			},
		],
		name: 'addNewProfile',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'id',
				type: 'address',
			},
			{
				internalType: 'bytes',
				name: 'pubkey',
				type: 'bytes',
			},
		],
		name: 'changePubkey',
		outputs: [],
		stateMutability: 'nonpayable',
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
				internalType: 'address',
				name: 'id',
				type: 'address',
			},
		],
		name: 'getId2Profile',
		outputs: [
			{
				components: [
					{
						internalType: 'address',
						name: 'id',
						type: 'address',
					},
					{
						internalType: 'address',
						name: 'consensus',
						type: 'address',
					},
					{
						internalType: 'address',
						name: 'admin',
						type: 'address',
					},
					{
						internalType: 'address payable',
						name: 'treasury',
						type: 'address',
					},
					{
						internalType: 'address',
						name: 'governor',
						type: 'address',
					},
					{
						internalType: 'bytes',
						name: 'pubkey',
						type: 'bytes',
					},
				],
				internalType: 'struct IProfile.CandidateProfile',
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
				name: 'validatorContract',
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
		name: 'migrateMainnetV2',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'address',
						name: 'id',
						type: 'address',
					},
					{
						internalType: 'address',
						name: 'consensus',
						type: 'address',
					},
					{
						internalType: 'address',
						name: 'admin',
						type: 'address',
					},
					{
						internalType: 'address payable',
						name: 'treasury',
						type: 'address',
					},
					{
						internalType: 'address',
						name: 'governor',
						type: 'address',
					},
					{
						internalType: 'bytes',
						name: 'pubkey',
						type: 'bytes',
					},
				],
				internalType: 'struct IProfile.CandidateProfile',
				name: 'profile',
				type: 'tuple',
			},
		],
		name: 'registerProfile',
		outputs: [],
		stateMutability: 'nonpayable',
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
] as const
const PROFILE: Contract<typeof abi> = {
	name: 'Profile',
	address: '0x3ec92e7a835bb58832df64e7f8206467e07d54a3',
	is_deprecated: false,
	updated_at: 1709796680,
	abi: abi,
}
export default PROFILE
