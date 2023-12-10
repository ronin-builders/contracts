export const ERC20_STAKING_MANAGER = {
	name: 'ERC20 Staking Manager',
	address: '0xe1147ff24e404ba38202ea4aee04191ef0890db2',
	abi: [
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: '_oldAdmin',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: '_newAdmin',
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
					name: '_oldAdmin',
					type: 'address',
				},
			],
			name: 'AdminRemoved',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'uint256',
					name: '_new',
					type: 'uint256',
				},
				{
					indexed: true,
					internalType: 'uint256',
					name: '_old',
					type: 'uint256',
				},
			],
			name: 'MinClaimedTimeWindowUpdated',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'contract IERC20StakingPool',
					name: '_pool',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: '_accumulatedPerShare',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: '_lastSyncedBlock',
					type: 'uint256',
				},
			],
			name: 'PoolSynced',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'contract IERC20StakingPool',
					name: '_pool',
					type: 'address',
				},
			],
			name: 'PoolWhitelisted',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'contract IERC20StakingPool',
					name: '_pool',
					type: 'address',
				},
				{
					components: [
						{
							internalType: 'uint256',
							name: 'fromBlock',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'rewardPerBlock',
							type: 'uint256',
						},
					],
					indexed: false,
					internalType: 'struct IERC20StakingManager.BlockReward[]',
					name: '_blockRewards',
					type: 'tuple[]',
				},
			],
			name: 'RewardPerBlockUpdated',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'contract IERC20StakingPool',
					name: '_pool',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'address',
					name: '_user',
					type: 'address',
				},
				{
					components: [
						{
							internalType: 'uint256',
							name: 'debitedRewards',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'creditedRewards',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'lastClaimedTimestamp',
							type: 'uint256',
						},
					],
					indexed: false,
					internalType: 'struct IERC20StakingManager.UserReward',
					name: '_rewardInfo',
					type: 'tuple',
				},
			],
			name: 'UserRewardUpdated',
			type: 'event',
		},
		{
			payable: true,
			stateMutability: 'payable',
			type: 'fallback',
		},
		{
			constant: true,
			inputs: [],
			name: 'WRON',
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
			name: 'admin',
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
					name: '_user',
					type: 'address',
				},
			],
			name: 'allocateRewards',
			outputs: [
				{
					internalType: 'contract IERC20',
					name: '_rewardToken',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '_earnedRewards',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: true,
			inputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			name: 'blockRewards',
			outputs: [
				{
					internalType: 'uint256',
					name: 'fromBlock',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'rewardPerBlock',
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
					internalType: 'contract IERC20StakingPool',
					name: '_pool',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_user',
					type: 'address',
				},
			],
			name: 'canObtainRewards',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
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
					name: '_newAdmin',
					type: 'address',
				},
			],
			name: 'changeAdmin',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: true,
			inputs: [
				{
					internalType: 'contract IERC20StakingPool',
					name: '_pool',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '_blockNumber',
					type: 'uint256',
				},
			],
			name: 'getBlockReward',
			outputs: [
				{
					internalType: 'uint256',
					name: '_reward',
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
			name: 'getChainID',
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
					internalType: 'contract IERC20StakingPool',
					name: '_pool',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '_fromBlock',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '_toBlock',
					type: 'uint256',
				},
			],
			name: 'getIntervalRewards',
			outputs: [
				{
					internalType: 'uint256',
					name: '_result',
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
					internalType: 'contract IERC20StakingPool',
					name: '_pool',
					type: 'address',
				},
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
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [
				{
					internalType: 'contract IERC20StakingPool',
					name: '_pool',
					type: 'address',
				},
			],
			name: 'getPoolInfo',
			outputs: [
				{
					components: [
						{
							internalType: 'contract IERC20',
							name: 'stakingToken',
							type: 'address',
						},
						{
							internalType: 'contract IERC20',
							name: 'rewardToken',
							type: 'address',
						},
						{
							internalType: 'uint256',
							name: 'accumulatedRewardsPerShare',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'lastSyncedBlock',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'startedAtBlock',
							type: 'uint256',
						},
					],
					internalType: 'struct IERC20StakingManager.Pool',
					name: '',
					type: 'tuple',
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
					internalType: 'contract IERC20StakingPool',
					name: '_pool',
					type: 'address',
				},
			],
			name: 'isPoolStarted',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
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
					internalType: 'contract IERC20StakingPool',
					name: '_pool',
					type: 'address',
				},
			],
			name: 'isPoolWhitelisted',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'minClaimedTimeWindow',
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
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			name: 'poolInfo',
			outputs: [
				{
					internalType: 'contract IERC20',
					name: 'stakingToken',
					type: 'address',
				},
				{
					internalType: 'contract IERC20',
					name: 'rewardToken',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'accumulatedRewardsPerShare',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'lastSyncedBlock',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'startedAtBlock',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: false,
			inputs: [],
			name: 'removeAdmin',
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
					name: '_user',
					type: 'address',
				},
			],
			name: 'resetRewards',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'contract IERC20StakingPool',
					name: '_pool',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '_fromBlock',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '_rewardPerBlock',
					type: 'uint256',
				},
			],
			name: 'setFutureBlockReward',
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
					name: '_minClaimedTimeWindow',
					type: 'uint256',
				},
			],
			name: 'setMinClaimedTimeWindow',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'contract IERC20StakingPool',
					name: '_pool',
					type: 'address',
				},
			],
			name: 'syncPool',
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
					name: '_user',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '_newStakingAmount',
					type: 'uint256',
				},
			],
			name: 'syncRewardInfo',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'contract IERC20StakingPool[]',
					name: '_pools',
					type: 'address[]',
				},
				{
					internalType: 'uint256[]',
					name: '_startedAtBlocks',
					type: 'uint256[]',
				},
				{
					internalType: 'uint256[]',
					name: '_rewardPerBlocks',
					type: 'uint256[]',
				},
			],
			name: 'updateUnstartedPools',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: true,
			inputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			name: 'userRewardInfo',
			outputs: [
				{
					internalType: 'uint256',
					name: 'debitedRewards',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'creditedRewards',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'lastClaimedTimestamp',
					type: 'uint256',
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
					internalType: 'contract IERC20StakingPool[]',
					name: '_pools',
					type: 'address[]',
				},
				{
					internalType: 'uint256[]',
					name: '_startedAtBlocks',
					type: 'uint256[]',
				},
				{
					internalType: 'uint256[]',
					name: '_rewardPerBlocks',
					type: 'uint256[]',
				},
			],
			name: 'whitelistPools',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: false,
			inputs: [],
			name: 'withdrawEther',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'contract IERC20',
					name: '_token',
					type: 'address',
				},
			],
			name: 'withdrawToken',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
	],
}
