import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'address',
				name: 'allowed',
				type: 'address',
			},
		],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		inputs: [],
		name: 'AllowedCannotBeSelf',
		type: 'error',
	},
	{
		inputs: [],
		name: 'DeploymentFailed',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'expected',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'actual',
				type: 'address',
			},
		],
		name: 'ExpectedAddressNotMatch',
		type: 'error',
	},
	{
		inputs: [],
		name: 'NullAddress',
		type: 'error',
	},
	{
		inputs: [],
		name: 'UnauthorizedDelegateCall',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'expected',
				type: 'address',
			},
			{
				internalType: 'bytes',
				name: 'args',
				type: 'bytes',
			},
		],
		name: 'deploy',
		outputs: [
			{
				internalType: 'address',
				name: 'instance',
				type: 'address',
			},
		],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getCreationCode',
		outputs: [
			{
				internalType: 'bytes',
				name: '',
				type: 'bytes',
			},
		],
		stateMutability: 'pure',
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
const ERC721_COMMON_FACTORY: Contract<typeof abi> = {
	name: 'ERC721 Common Factory',
	address: '0xb4a277ab54c6c9de3f8fac1eded9165585ef5d54',
	is_deprecated: false,
	created_at: 1729071335,
	abi: abi,
}
export default ERC721_COMMON_FACTORY
