export const PYTH_UPGRADABLE = {
	name: 'Pyth Upgradable',
	address: '0xa2aa501b19aff244d90cc15a4cf739d2725b5729',
	abi: [
		{
			inputs: [],
			stateMutability: 'nonpayable',
			type: 'constructor',
		},
		{
			inputs: [],
			name: 'InsufficientFee',
			type: 'error',
		},
		{
			inputs: [],
			name: 'InvalidArgument',
			type: 'error',
		},
		{
			inputs: [],
			name: 'InvalidGovernanceDataSource',
			type: 'error',
		},
		{
			inputs: [],
			name: 'InvalidGovernanceMessage',
			type: 'error',
		},
		{
			inputs: [],
			name: 'InvalidGovernanceTarget',
			type: 'error',
		},
		{
			inputs: [],
			name: 'InvalidUpdateData',
			type: 'error',
		},
		{
			inputs: [],
			name: 'InvalidUpdateDataSource',
			type: 'error',
		},
		{
			inputs: [],
			name: 'InvalidWormholeAddressToSet',
			type: 'error',
		},
		{
			inputs: [],
			name: 'InvalidWormholeVaa',
			type: 'error',
		},
		{
			inputs: [],
			name: 'NoFreshUpdate',
			type: 'error',
		},
		{
			inputs: [],
			name: 'OldGovernanceMessage',
			type: 'error',
		},
		{
			inputs: [],
			name: 'PriceFeedNotFound',
			type: 'error',
		},
		{
			inputs: [],
			name: 'PriceFeedNotFoundWithinRange',
			type: 'error',
		},
		{
			inputs: [],
			name: 'StalePrice',
			type: 'error',
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
					indexed: false,
					internalType: 'uint16',
					name: 'chainId',
					type: 'uint16',
				},
				{
					indexed: false,
					internalType: 'uint64',
					name: 'sequenceNumber',
					type: 'uint64',
				},
			],
			name: 'BatchPriceFeedUpdate',
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
			name: 'ContractUpgraded',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					components: [
						{
							internalType: 'uint16',
							name: 'chainId',
							type: 'uint16',
						},
						{
							internalType: 'bytes32',
							name: 'emitterAddress',
							type: 'bytes32',
						},
					],
					indexed: false,
					internalType: 'struct PythInternalStructs.DataSource[]',
					name: 'oldDataSources',
					type: 'tuple[]',
				},
				{
					components: [
						{
							internalType: 'uint16',
							name: 'chainId',
							type: 'uint16',
						},
						{
							internalType: 'bytes32',
							name: 'emitterAddress',
							type: 'bytes32',
						},
					],
					indexed: false,
					internalType: 'struct PythInternalStructs.DataSource[]',
					name: 'newDataSources',
					type: 'tuple[]',
				},
			],
			name: 'DataSourcesSet',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'uint256',
					name: 'oldFee',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'newFee',
					type: 'uint256',
				},
			],
			name: 'FeeSet',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					components: [
						{
							internalType: 'uint16',
							name: 'chainId',
							type: 'uint16',
						},
						{
							internalType: 'bytes32',
							name: 'emitterAddress',
							type: 'bytes32',
						},
					],
					indexed: false,
					internalType: 'struct PythInternalStructs.DataSource',
					name: 'oldDataSource',
					type: 'tuple',
				},
				{
					components: [
						{
							internalType: 'uint16',
							name: 'chainId',
							type: 'uint16',
						},
						{
							internalType: 'bytes32',
							name: 'emitterAddress',
							type: 'bytes32',
						},
					],
					indexed: false,
					internalType: 'struct PythInternalStructs.DataSource',
					name: 'newDataSource',
					type: 'tuple',
				},
				{
					indexed: false,
					internalType: 'uint64',
					name: 'initialSequence',
					type: 'uint64',
				},
			],
			name: 'GovernanceDataSourceSet',
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
					indexed: true,
					internalType: 'bytes32',
					name: 'id',
					type: 'bytes32',
				},
				{
					indexed: false,
					internalType: 'uint64',
					name: 'publishTime',
					type: 'uint64',
				},
				{
					indexed: false,
					internalType: 'int64',
					name: 'price',
					type: 'int64',
				},
				{
					indexed: false,
					internalType: 'uint64',
					name: 'conf',
					type: 'uint64',
				},
			],
			name: 'PriceFeedUpdate',
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
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'uint256',
					name: 'oldValidPeriod',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'newValidPeriod',
					type: 'uint256',
				},
			],
			name: 'ValidPeriodSet',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'address',
					name: 'oldWormholeAddress',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'newWormholeAddress',
					type: 'address',
				},
			],
			name: 'WormholeAddressSet',
			type: 'event',
		},
		{
			inputs: [],
			name: 'chainId',
			outputs: [
				{
					internalType: 'uint16',
					name: '',
					type: 'uint16',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes',
					name: 'encodedVM',
					type: 'bytes',
				},
			],
			name: 'executeGovernanceInstruction',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'id',
					type: 'bytes32',
				},
			],
			name: 'getEmaPrice',
			outputs: [
				{
					components: [
						{
							internalType: 'int64',
							name: 'price',
							type: 'int64',
						},
						{
							internalType: 'uint64',
							name: 'conf',
							type: 'uint64',
						},
						{
							internalType: 'int32',
							name: 'expo',
							type: 'int32',
						},
						{
							internalType: 'uint256',
							name: 'publishTime',
							type: 'uint256',
						},
					],
					internalType: 'struct PythStructs.Price',
					name: 'price',
					type: 'tuple',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'id',
					type: 'bytes32',
				},
				{
					internalType: 'uint256',
					name: 'age',
					type: 'uint256',
				},
			],
			name: 'getEmaPriceNoOlderThan',
			outputs: [
				{
					components: [
						{
							internalType: 'int64',
							name: 'price',
							type: 'int64',
						},
						{
							internalType: 'uint64',
							name: 'conf',
							type: 'uint64',
						},
						{
							internalType: 'int32',
							name: 'expo',
							type: 'int32',
						},
						{
							internalType: 'uint256',
							name: 'publishTime',
							type: 'uint256',
						},
					],
					internalType: 'struct PythStructs.Price',
					name: 'price',
					type: 'tuple',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'id',
					type: 'bytes32',
				},
			],
			name: 'getEmaPriceUnsafe',
			outputs: [
				{
					components: [
						{
							internalType: 'int64',
							name: 'price',
							type: 'int64',
						},
						{
							internalType: 'uint64',
							name: 'conf',
							type: 'uint64',
						},
						{
							internalType: 'int32',
							name: 'expo',
							type: 'int32',
						},
						{
							internalType: 'uint256',
							name: 'publishTime',
							type: 'uint256',
						},
					],
					internalType: 'struct PythStructs.Price',
					name: 'price',
					type: 'tuple',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'id',
					type: 'bytes32',
				},
			],
			name: 'getPrice',
			outputs: [
				{
					components: [
						{
							internalType: 'int64',
							name: 'price',
							type: 'int64',
						},
						{
							internalType: 'uint64',
							name: 'conf',
							type: 'uint64',
						},
						{
							internalType: 'int32',
							name: 'expo',
							type: 'int32',
						},
						{
							internalType: 'uint256',
							name: 'publishTime',
							type: 'uint256',
						},
					],
					internalType: 'struct PythStructs.Price',
					name: 'price',
					type: 'tuple',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'id',
					type: 'bytes32',
				},
				{
					internalType: 'uint256',
					name: 'age',
					type: 'uint256',
				},
			],
			name: 'getPriceNoOlderThan',
			outputs: [
				{
					components: [
						{
							internalType: 'int64',
							name: 'price',
							type: 'int64',
						},
						{
							internalType: 'uint64',
							name: 'conf',
							type: 'uint64',
						},
						{
							internalType: 'int32',
							name: 'expo',
							type: 'int32',
						},
						{
							internalType: 'uint256',
							name: 'publishTime',
							type: 'uint256',
						},
					],
					internalType: 'struct PythStructs.Price',
					name: 'price',
					type: 'tuple',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'id',
					type: 'bytes32',
				},
			],
			name: 'getPriceUnsafe',
			outputs: [
				{
					components: [
						{
							internalType: 'int64',
							name: 'price',
							type: 'int64',
						},
						{
							internalType: 'uint64',
							name: 'conf',
							type: 'uint64',
						},
						{
							internalType: 'int32',
							name: 'expo',
							type: 'int32',
						},
						{
							internalType: 'uint256',
							name: 'publishTime',
							type: 'uint256',
						},
					],
					internalType: 'struct PythStructs.Price',
					name: 'price',
					type: 'tuple',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes[]',
					name: 'updateData',
					type: 'bytes[]',
				},
			],
			name: 'getUpdateFee',
			outputs: [
				{
					internalType: 'uint256',
					name: 'feeAmount',
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
					name: 'updateDataSize',
					type: 'uint256',
				},
			],
			name: 'getUpdateFee',
			outputs: [
				{
					internalType: 'uint256',
					name: 'feeAmount',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'getValidTimePeriod',
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
			name: 'governanceDataSource',
			outputs: [
				{
					components: [
						{
							internalType: 'uint16',
							name: 'chainId',
							type: 'uint16',
						},
						{
							internalType: 'bytes32',
							name: 'emitterAddress',
							type: 'bytes32',
						},
					],
					internalType: 'struct PythInternalStructs.DataSource',
					name: '',
					type: 'tuple',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'governanceDataSourceIndex',
			outputs: [
				{
					internalType: 'uint32',
					name: '',
					type: 'uint32',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					components: [
						{
							internalType: 'uint16',
							name: 'chainId',
							type: 'uint16',
						},
						{
							internalType: 'bytes32',
							name: 'emitterAddress',
							type: 'bytes32',
						},
					],
					internalType: 'struct PythInternalStructs.DataSource',
					name: 'ds',
					type: 'tuple',
				},
			],
			name: 'hashDataSource',
			outputs: [
				{
					internalType: 'bytes32',
					name: '',
					type: 'bytes32',
				},
			],
			stateMutability: 'pure',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'wormhole',
					type: 'address',
				},
				{
					internalType: 'uint16[]',
					name: 'dataSourceEmitterChainIds',
					type: 'uint16[]',
				},
				{
					internalType: 'bytes32[]',
					name: 'dataSourceEmitterAddresses',
					type: 'bytes32[]',
				},
				{
					internalType: 'uint16',
					name: 'governanceEmitterChainId',
					type: 'uint16',
				},
				{
					internalType: 'bytes32',
					name: 'governanceEmitterAddress',
					type: 'bytes32',
				},
				{
					internalType: 'uint64',
					name: 'governanceInitialSequence',
					type: 'uint64',
				},
				{
					internalType: 'uint256',
					name: 'validTimePeriodSeconds',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'singleUpdateFeeInWei',
					type: 'uint256',
				},
			],
			name: 'initialize',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint16',
					name: 'dataSourceChainId',
					type: 'uint16',
				},
				{
					internalType: 'bytes32',
					name: 'dataSourceEmitterAddress',
					type: 'bytes32',
				},
			],
			name: 'isValidDataSource',
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
			inputs: [
				{
					internalType: 'uint16',
					name: 'governanceChainId',
					type: 'uint16',
				},
				{
					internalType: 'bytes32',
					name: 'governanceEmitterAddress',
					type: 'bytes32',
				},
			],
			name: 'isValidGovernanceDataSource',
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
			name: 'lastExecutedGovernanceSequence',
			outputs: [
				{
					internalType: 'uint64',
					name: '',
					type: 'uint64',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'priceId',
					type: 'bytes32',
				},
			],
			name: 'latestPriceInfoPublishTime',
			outputs: [
				{
					internalType: 'uint64',
					name: '',
					type: 'uint64',
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
			inputs: [
				{
					internalType: 'bytes',
					name: 'encodedPayload',
					type: 'bytes',
				},
			],
			name: 'parseAuthorizeGovernanceDataSourceTransferPayload',
			outputs: [
				{
					components: [
						{
							internalType: 'bytes',
							name: 'claimVaa',
							type: 'bytes',
						},
					],
					internalType: 'struct PythGovernanceInstructions.AuthorizeGovernanceDataSourceTransferPayload',
					name: 'sgds',
					type: 'tuple',
				},
			],
			stateMutability: 'pure',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes',
					name: 'encodedInstruction',
					type: 'bytes',
				},
			],
			name: 'parseGovernanceInstruction',
			outputs: [
				{
					components: [
						{
							internalType: 'enum PythGovernanceInstructions.GovernanceModule',
							name: 'module',
							type: 'uint8',
						},
						{
							internalType: 'enum PythGovernanceInstructions.GovernanceAction',
							name: 'action',
							type: 'uint8',
						},
						{
							internalType: 'uint16',
							name: 'targetChainId',
							type: 'uint16',
						},
						{
							internalType: 'bytes',
							name: 'payload',
							type: 'bytes',
						},
					],
					internalType: 'struct PythGovernanceInstructions.GovernanceInstruction',
					name: 'gi',
					type: 'tuple',
				},
			],
			stateMutability: 'pure',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes[]',
					name: 'updateData',
					type: 'bytes[]',
				},
				{
					internalType: 'bytes32[]',
					name: 'priceIds',
					type: 'bytes32[]',
				},
				{
					internalType: 'uint64',
					name: 'minPublishTime',
					type: 'uint64',
				},
				{
					internalType: 'uint64',
					name: 'maxPublishTime',
					type: 'uint64',
				},
			],
			name: 'parsePriceFeedUpdates',
			outputs: [
				{
					components: [
						{
							internalType: 'bytes32',
							name: 'id',
							type: 'bytes32',
						},
						{
							components: [
								{
									internalType: 'int64',
									name: 'price',
									type: 'int64',
								},
								{
									internalType: 'uint64',
									name: 'conf',
									type: 'uint64',
								},
								{
									internalType: 'int32',
									name: 'expo',
									type: 'int32',
								},
								{
									internalType: 'uint256',
									name: 'publishTime',
									type: 'uint256',
								},
							],
							internalType: 'struct PythStructs.Price',
							name: 'price',
							type: 'tuple',
						},
						{
							components: [
								{
									internalType: 'int64',
									name: 'price',
									type: 'int64',
								},
								{
									internalType: 'uint64',
									name: 'conf',
									type: 'uint64',
								},
								{
									internalType: 'int32',
									name: 'expo',
									type: 'int32',
								},
								{
									internalType: 'uint256',
									name: 'publishTime',
									type: 'uint256',
								},
							],
							internalType: 'struct PythStructs.Price',
							name: 'emaPrice',
							type: 'tuple',
						},
					],
					internalType: 'struct PythStructs.PriceFeed[]',
					name: 'priceFeeds',
					type: 'tuple[]',
				},
			],
			stateMutability: 'payable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes',
					name: 'encodedPayload',
					type: 'bytes',
				},
			],
			name: 'parseRequestGovernanceDataSourceTransferPayload',
			outputs: [
				{
					components: [
						{
							internalType: 'uint32',
							name: 'governanceDataSourceIndex',
							type: 'uint32',
						},
					],
					internalType: 'struct PythGovernanceInstructions.RequestGovernanceDataSourceTransferPayload',
					name: 'sgdsClaim',
					type: 'tuple',
				},
			],
			stateMutability: 'pure',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes',
					name: 'encodedPayload',
					type: 'bytes',
				},
			],
			name: 'parseSetDataSourcesPayload',
			outputs: [
				{
					components: [
						{
							components: [
								{
									internalType: 'uint16',
									name: 'chainId',
									type: 'uint16',
								},
								{
									internalType: 'bytes32',
									name: 'emitterAddress',
									type: 'bytes32',
								},
							],
							internalType: 'struct PythInternalStructs.DataSource[]',
							name: 'dataSources',
							type: 'tuple[]',
						},
					],
					internalType: 'struct PythGovernanceInstructions.SetDataSourcesPayload',
					name: 'sds',
					type: 'tuple',
				},
			],
			stateMutability: 'pure',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes',
					name: 'encodedPayload',
					type: 'bytes',
				},
			],
			name: 'parseSetFeePayload',
			outputs: [
				{
					components: [
						{
							internalType: 'uint256',
							name: 'newFee',
							type: 'uint256',
						},
					],
					internalType: 'struct PythGovernanceInstructions.SetFeePayload',
					name: 'sf',
					type: 'tuple',
				},
			],
			stateMutability: 'pure',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes',
					name: 'encodedPayload',
					type: 'bytes',
				},
			],
			name: 'parseSetValidPeriodPayload',
			outputs: [
				{
					components: [
						{
							internalType: 'uint256',
							name: 'newValidPeriod',
							type: 'uint256',
						},
					],
					internalType: 'struct PythGovernanceInstructions.SetValidPeriodPayload',
					name: 'svp',
					type: 'tuple',
				},
			],
			stateMutability: 'pure',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes',
					name: 'encodedPayload',
					type: 'bytes',
				},
			],
			name: 'parseSetWormholeAddressPayload',
			outputs: [
				{
					components: [
						{
							internalType: 'address',
							name: 'newWormholeAddress',
							type: 'address',
						},
					],
					internalType: 'struct PythGovernanceInstructions.SetWormholeAddressPayload',
					name: 'sw',
					type: 'tuple',
				},
			],
			stateMutability: 'pure',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes',
					name: 'encodedPayload',
					type: 'bytes',
				},
			],
			name: 'parseUpgradeContractPayload',
			outputs: [
				{
					components: [
						{
							internalType: 'address',
							name: 'newImplementation',
							type: 'address',
						},
					],
					internalType: 'struct PythGovernanceInstructions.UpgradeContractPayload',
					name: 'uc',
					type: 'tuple',
				},
			],
			stateMutability: 'pure',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'id',
					type: 'bytes32',
				},
			],
			name: 'priceFeedExists',
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
			name: 'proxiableUUID',
			outputs: [
				{
					internalType: 'bytes32',
					name: '',
					type: 'bytes32',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'pythUpgradableMagic',
			outputs: [
				{
					internalType: 'uint32',
					name: '',
					type: 'uint32',
				},
			],
			stateMutability: 'pure',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'id',
					type: 'bytes32',
				},
			],
			name: 'queryPriceFeed',
			outputs: [
				{
					components: [
						{
							internalType: 'bytes32',
							name: 'id',
							type: 'bytes32',
						},
						{
							components: [
								{
									internalType: 'int64',
									name: 'price',
									type: 'int64',
								},
								{
									internalType: 'uint64',
									name: 'conf',
									type: 'uint64',
								},
								{
									internalType: 'int32',
									name: 'expo',
									type: 'int32',
								},
								{
									internalType: 'uint256',
									name: 'publishTime',
									type: 'uint256',
								},
							],
							internalType: 'struct PythStructs.Price',
							name: 'price',
							type: 'tuple',
						},
						{
							components: [
								{
									internalType: 'int64',
									name: 'price',
									type: 'int64',
								},
								{
									internalType: 'uint64',
									name: 'conf',
									type: 'uint64',
								},
								{
									internalType: 'int32',
									name: 'expo',
									type: 'int32',
								},
								{
									internalType: 'uint256',
									name: 'publishTime',
									type: 'uint256',
								},
							],
							internalType: 'struct PythStructs.Price',
							name: 'emaPrice',
							type: 'tuple',
						},
					],
					internalType: 'struct PythStructs.PriceFeed',
					name: 'priceFeed',
					type: 'tuple',
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
			name: 'singleUpdateFeeInWei',
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
			inputs: [
				{
					internalType: 'bytes[]',
					name: 'updateData',
					type: 'bytes[]',
				},
			],
			name: 'updatePriceFeeds',
			outputs: [],
			stateMutability: 'payable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes[]',
					name: 'updateData',
					type: 'bytes[]',
				},
				{
					internalType: 'bytes32[]',
					name: 'priceIds',
					type: 'bytes32[]',
				},
				{
					internalType: 'uint64[]',
					name: 'publishTimes',
					type: 'uint64[]',
				},
			],
			name: 'updatePriceFeedsIfNecessary',
			outputs: [],
			stateMutability: 'payable',
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
			inputs: [],
			name: 'validDataSources',
			outputs: [
				{
					components: [
						{
							internalType: 'uint16',
							name: 'chainId',
							type: 'uint16',
						},
						{
							internalType: 'bytes32',
							name: 'emitterAddress',
							type: 'bytes32',
						},
					],
					internalType: 'struct PythInternalStructs.DataSource[]',
					name: '',
					type: 'tuple[]',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'validTimePeriodSeconds',
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
			name: 'version',
			outputs: [
				{
					internalType: 'string',
					name: '',
					type: 'string',
				},
			],
			stateMutability: 'pure',
			type: 'function',
		},
		{
			inputs: [],
			name: 'wormhole',
			outputs: [
				{
					internalType: 'contract IWormhole',
					name: '',
					type: 'address',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
	],
}
