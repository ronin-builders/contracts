import { Contract } from '@/contract'
const LAND_DELEGATION_PROXY: Contract = {
	name: 'Land Delegation Proxy',
	address: '0x4ec37b7f8fce7cd2a96839b3c97f3d034ffb52c2',
	is_deprecated: true,
	updated_at: 1707575158,
	abi: [
		{
			inputs: [
				{
					internalType: 'address',
					name: '_logic',
					type: 'address',
				},
				{
					internalType: 'address',
					name: 'admin_',
					type: 'address',
				},
				{
					internalType: 'bytes',
					name: '_data',
					type: 'bytes',
				},
			],
			stateMutability: 'payable',
			type: 'constructor',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'address',
					name: 'previousAdmin',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'newAdmin',
					type: 'address',
				},
			],
			name: 'AdminChanged',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'beacon',
					type: 'address',
				},
			],
			name: 'BeaconUpgraded',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'implementation',
					type: 'address',
				},
			],
			name: 'Upgraded',
			type: 'event',
		},
		{
			stateMutability: 'payable',
			type: 'fallback',
		},
		{
			inputs: [],
			name: 'admin',
			outputs: [
				{
					internalType: 'address',
					name: 'admin_',
					type: 'address',
				},
			],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'newAdmin',
					type: 'address',
				},
			],
			name: 'changeAdmin',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'implementation',
			outputs: [
				{
					internalType: 'address',
					name: 'implementation_',
					type: 'address',
				},
			],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'newImplementation',
					type: 'address',
				},
			],
			name: 'upgradeTo',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'newImplementation',
					type: 'address',
				},
				{
					internalType: 'bytes',
					name: 'data',
					type: 'bytes',
				},
			],
			name: 'upgradeToAndCall',
			outputs: [],
			stateMutability: 'payable',
			type: 'function',
		},
		{
			stateMutability: 'payable',
			type: 'receive',
		},
	],
}
export default LAND_DELEGATION_PROXY
