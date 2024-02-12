import { Contract } from '@/contract'
const PROXY_ADMIN: Contract = {
	name: 'Proxy Admin',
	address: '0xa3e7d085e65cb0b916f6717da876b7be5cc92f03',
	is_deprecated: false,
	updated_at: 1707575160,
	abi: [
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'previousOwner',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'newOwner',
					type: 'address',
				},
			],
			name: 'OwnershipTransferred',
			type: 'event',
		},
		{
			inputs: [
				{
					internalType: 'contract TransparentUpgradeableProxy',
					name: 'proxy',
					type: 'address',
				},
				{
					internalType: 'address',
					name: 'newAdmin',
					type: 'address',
				},
			],
			name: 'changeProxyAdmin',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'contract TransparentUpgradeableProxy',
					name: 'proxy',
					type: 'address',
				},
			],
			name: 'getProxyAdmin',
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
					internalType: 'contract TransparentUpgradeableProxy',
					name: 'proxy',
					type: 'address',
				},
			],
			name: 'getProxyImplementation',
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
			name: 'owner',
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
			name: 'renounceOwnership',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'newOwner',
					type: 'address',
				},
			],
			name: 'transferOwnership',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'contract TransparentUpgradeableProxy',
					name: 'proxy',
					type: 'address',
				},
				{
					internalType: 'address',
					name: 'implementation',
					type: 'address',
				},
			],
			name: 'upgrade',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'contract TransparentUpgradeableProxy',
					name: 'proxy',
					type: 'address',
				},
				{
					internalType: 'address',
					name: 'implementation',
					type: 'address',
				},
				{
					internalType: 'bytes',
					name: 'data',
					type: 'bytes',
				},
			],
			name: 'upgradeAndCall',
			outputs: [],
			stateMutability: 'payable',
			type: 'function',
		},
	],
}
export default PROXY_ADMIN
