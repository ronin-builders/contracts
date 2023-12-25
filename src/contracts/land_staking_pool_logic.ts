import { Contract } from '@/contract'
export const LAND_STAKING_POOL_LOGIC: Contract = {
	name: 'Land Staking Pool Logic',
	address: '0x91ca55a641fc7e75ebc427b2127496f94998d28d',
	abi: [
		{
			inputs: [],
			stateMutability: 'nonpayable',
			type: 'constructor',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: '_user',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: '_token',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'uint256',
					name: '_tokenId',
					type: 'uint256',
				},
			],
			name: 'EmergencyUnstaked',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'uint8',
					name: 'version',
					type: 'uint8',
				},
			],
			name: 'Initialized',
			type: 'event',
		},
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
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'address',
					name: 'account',
					type: 'address',
				},
			],
			name: 'Paused',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: '_user',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: '_token',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'uint256',
					name: '_tokenId',
					type: 'uint256',
				},
			],
			name: 'RewardClaimed',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: '_user',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: '_token',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'uint256',
					name: '_tokenId',
					type: 'uint256',
				},
			],
			name: 'Staked',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'address',
					name: 'account',
					type: 'address',
				},
			],
			name: 'Unpaused',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: '_user',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: '_token',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'uint256',
					name: '_tokenId',
					type: 'uint256',
				},
			],
			name: 'Unstaked',
			type: 'event',
		},
		{
			inputs: [],
			name: 'claimPendingRewards',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'emergencyUnstake',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '_amount',
					type: 'uint256',
				},
			],
			name: 'emergencyUnstakeSome',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_user',
					type: 'address',
				},
			],
			name: 'getPendingRewards',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'getRewardToken',
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
					internalType: 'address',
					name: '_user',
					type: 'address',
				},
			],
			name: 'getStakedLandTypes',
			outputs: [
				{
					internalType: 'uint256[5]',
					name: '',
					type: 'uint256[5]',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_user',
					type: 'address',
				},
			],
			name: 'getStakedLands',
			outputs: [
				{
					internalType: 'uint256[]',
					name: '',
					type: 'uint256[]',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_user',
					type: 'address',
				},
			],
			name: 'getStakingAmount',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'getStakingToken',
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
			name: 'getStakingTotal',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'getTotalStakedPerLandType',
			outputs: [
				{
					internalType: 'uint256[5]',
					name: '',
					type: 'uint256[5]',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_admin',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_managerContract',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_landContract',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_landTypeContract',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_rewardToken',
					type: 'address',
				},
			],
			name: 'initialize',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'landContract',
			outputs: [
				{
					internalType: 'contract IERC721',
					name: '',
					type: 'address',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'landTypeContract',
			outputs: [
				{
					internalType: 'contract ILand',
					name: '',
					type: 'address',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'managerContract',
			outputs: [
				{
					internalType: 'contract ILandStakingManager',
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
			name: 'pause',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'paused',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
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
			inputs: [],
			name: 'rewardToken',
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
					internalType: 'uint256[]',
					name: '_tokenIds',
					type: 'uint256[]',
				},
			],
			name: 'stake',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			name: 'stakedBy',
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
			name: 'totalStaked',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			name: 'totalStakedPerLandType',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
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
			inputs: [],
			name: 'unpause',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256[]',
					name: '_tokenIds',
					type: 'uint256[]',
				},
			],
			name: 'unstake',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'unstakeAll',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '_amount',
					type: 'uint256',
				},
			],
			name: 'unstakeSome',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			name: 'userInfo',
			outputs: [
				{
					internalType: 'uint256',
					name: 'amountStaked',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
	],
}
