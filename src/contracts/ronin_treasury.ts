import { Contract } from '@/contract'
export const RONIN_TREASURY: Contract = {
	name: 'Ronin Treasury',
	address: '0x22cefc91e9b7c0f3890ebf9527ea89053490694e',
	abi: [
		{
			inputs: [
				{
					internalType: 'address',
					name: '_singleton',
					type: 'address',
				},
			],
			stateMutability: 'nonpayable',
			type: 'constructor',
		},
		{
			stateMutability: 'payable',
			type: 'fallback',
		},
	],
}
