import { Contract } from '@/contract'
const C_ERC20_PROXY: Contract = {
	name: 'C Erc20 Proxy',
	address: '0x446450d57b4f26691b6cfac92badba5c8d875a4e',
	is_deprecated: false,
	updated_at: 1707575171,
	abi: [
		{
			inputs: [
				{
					internalType: 'address',
					name: 'underlying_',
					type: 'address',
				},
				{
					internalType: 'contract ComptrollerInterface',
					name: 'comptroller_',
					type: 'address',
				},
				{
					internalType: 'contract InterestRateModel',
					name: 'interestRateModel_',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'initialExchangeRateMantissa_',
					type: 'uint256',
				},
				{
					internalType: 'string',
					name: 'name_',
					type: 'string',
				},
				{
					internalType: 'string',
					name: 'symbol_',
					type: 'string',
				},
				{
					internalType: 'uint8',
					name: 'decimals_',
					type: 'uint8',
				},
				{
					internalType: 'address payable',
					name: 'admin_',
					type: 'address',
				},
				{
					internalType: 'address',
					name: 'implementation_',
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
					indexed: false,
					internalType: 'address',
					name: 'oldImplementation',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'newImplementation',
					type: 'address',
				},
			],
			name: 'NewImplementation',
			type: 'event',
		},
		{
			payable: true,
			stateMutability: 'payable',
			type: 'fallback',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'address',
					name: 'implementation_',
					type: 'address',
				},
			],
			name: '_setImplementation',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'accrualBlockNumber',
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
			name: 'admin',
			outputs: [
				{
					internalType: 'address payable',
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
			name: 'borrowIndex',
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
			name: 'comptroller',
			outputs: [
				{
					internalType: 'contract ComptrollerInterface',
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
			name: 'decimals',
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
			inputs: [],
			name: 'implementation',
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
			name: 'interestRateModel',
			outputs: [
				{
					internalType: 'contract InterestRateModel',
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
			name: 'name',
			outputs: [
				{
					internalType: 'string',
					name: '',
					type: 'string',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'pendingAdmin',
			outputs: [
				{
					internalType: 'address payable',
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
			name: 'protocolSeizeShareMantissa',
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
			name: 'reserveFactorMantissa',
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
			name: 'symbol',
			outputs: [
				{
					internalType: 'string',
					name: '',
					type: 'string',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'totalBorrows',
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
			name: 'totalReserves',
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
			name: 'totalSupply',
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
			name: 'underlying',
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
	],
}
export default C_ERC20_PROXY
