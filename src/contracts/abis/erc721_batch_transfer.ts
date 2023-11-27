export const ERC721_BATCH_TRANSFER_ABI = [
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: '_tokenContract',
				type: 'address',
				indexed: false,
			},
			{
				internal_type: '',
				name: '_ids',
				type: 'uint256[]',
				indexed: false,
			},
			{
				internal_type: '',
				name: '_recipients',
				type: 'address[]',
				indexed: false,
			},
		],
		name: 'safeBatchTransfer',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: '_tokenContract',
				type: 'address',
				indexed: false,
			},
			{
				internal_type: '',
				name: '_ids',
				type: 'uint256[]',
				indexed: false,
			},
			{
				internal_type: '',
				name: '_recipient',
				type: 'address',
				indexed: false,
			},
		],
		name: 'safeBatchTransfer',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
]
