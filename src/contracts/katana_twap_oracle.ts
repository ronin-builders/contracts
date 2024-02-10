import { Contract } from '@/contract'
const KATANA_TWAP_ORACLE: Contract = {
	name: 'Katana TWAP Oracle',
	address: '0x3ea08443db91f3cbf1fbcad2b2d1ca3f4c582fbf',
	is_deprecated: false,
	updated_at: 1707575159,
	abi: [
		{
			inputs: [
				{
					internalType: 'address',
					name: '_router',
					type: 'address',
				},
			],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'constructor',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'newAdmin',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'previousAdmin',
					type: 'address',
				},
			],
			name: 'NewAdmin',
			type: 'event',
		},
		{
			constant: true,
			inputs: [],
			name: 'baseDecimals',
			outputs: [
				{
					internalType: 'uint8',
					name: '',
					type: 'uint8',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [
				{
					internalType: 'address',
					name: 'cToken',
					type: 'address',
				},
			],
			name: 'getUnderlyingDecimals',
			outputs: [
				{
					internalType: 'uint8',
					name: '',
					type: 'uint8',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [
				{
					internalType: 'contract CTokenInterface',
					name: 'cToken',
					type: 'address',
				},
			],
			name: 'getUnderlyingPrice',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'owner',
			outputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'router',
			outputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'address',
					name: 'newAdmin',
					type: 'address',
				},
			],
			name: 'setAdmin',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'address',
					name: 'cToken',
					type: 'address',
				},
				{
					internalType: 'address',
					name: 'input',
					type: 'address',
				},
				{
					internalType: 'address',
					name: 'output',
					type: 'address',
				},
			],
			name: 'setKatanaPair',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
	],
}
export default KATANA_TWAP_ORACLE
