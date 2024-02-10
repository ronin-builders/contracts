import { Contract } from '@/contract'
const CREATE_CALL: Contract = {
	name: 'Create Call',
	address: '0x7cbb62eaa69f79e6873cd1ecb2392971036cfaa4',
	is_deprecated: false,
	updated_at: 0,
	abi: [
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'address',
					name: 'newContract',
					type: 'address',
				},
			],
			name: 'ContractCreation',
			type: 'event',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'value',
					type: 'uint256',
				},
				{
					internalType: 'bytes',
					name: 'deploymentData',
					type: 'bytes',
				},
			],
			name: 'performCreate',
			outputs: [
				{
					internalType: 'address',
					name: 'newContract',
					type: 'address',
				},
			],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'value',
					type: 'uint256',
				},
				{
					internalType: 'bytes',
					name: 'deploymentData',
					type: 'bytes',
				},
				{
					internalType: 'bytes32',
					name: 'salt',
					type: 'bytes32',
				},
			],
			name: 'performCreate2',
			outputs: [
				{
					internalType: 'address',
					name: 'newContract',
					type: 'address',
				},
			],
			stateMutability: 'nonpayable',
			type: 'function',
		},
	],
}
export default CREATE_CALL
