import { Contract } from '@/contract'
const RNS_UNIFIED_PROXY: Contract = {
	name: 'RNS Unified Proxy',
	address: '0x67c409dab0ee741a1b1be874bd1333234cfdbf44',
	is_deprecated: false,
	updated_at: 1707575152,
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
			stateMutability: 'payable',
			type: 'receive',
		},
	],
}
export default RNS_UNIFIED_PROXY
