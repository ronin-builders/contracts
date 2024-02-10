import { Contract } from '@/contract'
const JUMP_RATE_MODEL_V2: Contract = {
	name: 'Jump Rate Model V2',
	address: '0xcbb6dcdd897a3c1917100c651b1e5715f8beba5d',
	is_deprecated: false,
	updated_at: 1707575160,
	abi: [
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'baseRatePerYear',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'multiplierPerYear',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'jumpMultiplierPerYear',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'kink_',
					type: 'uint256',
				},
				{
					internalType: 'address',
					name: 'owner_',
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
					internalType: 'uint256',
					name: 'baseRatePerBlock',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'multiplierPerBlock',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'jumpMultiplierPerBlock',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'kink',
					type: 'uint256',
				},
			],
			name: 'NewInterestParams',
			type: 'event',
		},
		{
			constant: true,
			inputs: [],
			name: 'baseRatePerBlock',
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
			name: 'blocksPerYear',
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
			inputs: [
				{
					internalType: 'uint256',
					name: 'cash',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'borrows',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'reserves',
					type: 'uint256',
				},
			],
			name: 'getBorrowRate',
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
			inputs: [
				{
					internalType: 'uint256',
					name: 'cash',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'borrows',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'reserves',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'reserveFactorMantissa',
					type: 'uint256',
				},
			],
			name: 'getSupplyRate',
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
			name: 'jumpMultiplierPerBlock',
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
			name: 'kink',
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
			name: 'multiplierPerBlock',
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
					internalType: 'uint256',
					name: 'blocksPerYear_',
					type: 'uint256',
				},
			],
			name: 'updateBlocksPerYear',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'uint256',
					name: 'baseRatePerYear',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'multiplierPerYear',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'jumpMultiplierPerYear',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'kink_',
					type: 'uint256',
				},
			],
			name: 'updateJumpRateModel',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: true,
			inputs: [
				{
					internalType: 'uint256',
					name: 'cash',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'borrows',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'reserves',
					type: 'uint256',
				},
			],
			name: 'utilizationRate',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'pure',
			type: 'function',
		},
	],
}
export default JUMP_RATE_MODEL_V2
