import { Contract } from '@/contract'
const APEIRON_APOSTLE_SEASON_MINTING_CALLER_PROXY: Contract = {
	name: 'Apeiron Apostle Season Minting Caller Proxy',
	address: '0x078eb21f0b25f3c0bb532057b2f07ce20307d533',
	is_deprecated: false,
	updated_at: 1707575171,
	abi: [
		{
			inputs: [
				{
					internalType: 'address',
					name: '_logic',
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
export default APEIRON_APOSTLE_SEASON_MINTING_CALLER_PROXY
