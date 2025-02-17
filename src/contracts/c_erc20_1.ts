import { Contract } from '@/contract'
const abi = [
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'cashPrior',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'interestAccumulated',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'borrowIndex',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'totalBorrows',
				type: 'uint256',
			},
		],
		name: 'AccrueInterest',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'spender',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'Approval',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'borrower',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'borrowAmount',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'accountBorrows',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'totalBorrows',
				type: 'uint256',
			},
		],
		name: 'Borrow',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'error',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'info',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'detail',
				type: 'uint256',
			},
		],
		name: 'Failure',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'liquidator',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'borrower',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'repayAmount',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'cErc721TokenCollateral',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: 'tokenIds',
				type: 'uint256[]',
			},
		],
		name: 'LiquidateBorrow',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'liquidator',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'borrower',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'repayAmount',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'cErc20CollateralToken',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'seizeTokens',
				type: 'uint256',
			},
		],
		name: 'LiquidateBorrow',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'minter',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'mintAmount',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'mintTokens',
				type: 'uint256',
			},
		],
		name: 'Mint',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'oldAdmin',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'newAdmin',
				type: 'address',
			},
		],
		name: 'NewAdmin',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'contract ComptrollerInterface',
				name: 'oldComptroller',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'contract ComptrollerInterface',
				name: 'newComptroller',
				type: 'address',
			},
		],
		name: 'NewComptroller',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'contract InterestRateModel',
				name: 'oldInterestRateModel',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'contract InterestRateModel',
				name: 'newInterestRateModel',
				type: 'address',
			},
		],
		name: 'NewMarketInterestRateModel',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'oldPendingAdmin',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'newPendingAdmin',
				type: 'address',
			},
		],
		name: 'NewPendingAdmin',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'oldReserveFactorMantissa',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'newReserveFactorMantissa',
				type: 'uint256',
			},
		],
		name: 'NewReserveFactor',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'partnershipAdmin',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'claimedAmount',
				type: 'uint256',
			},
		],
		name: 'PartnershipReservesClaimed',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'redeemer',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'redeemAmount',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'redeemTokens',
				type: 'uint256',
			},
		],
		name: 'Redeem',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'payer',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'borrower',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'repayAmount',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'accountBorrows',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'totalBorrows',
				type: 'uint256',
			},
		],
		name: 'RepayBorrow',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'benefactor',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'addAmount',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'newTotalReserves',
				type: 'uint256',
			},
		],
		name: 'ReservesAdded',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'admin',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'reduceAmount',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'newTotalReserves',
				type: 'uint256',
			},
		],
		name: 'ReservesReduced',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'from',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'Transfer',
		type: 'event',
	},
	{
		constant: false,
		inputs: [],
		name: '_acceptAdmin',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'uint256',
				name: 'addAmount',
				type: 'uint256',
			},
		],
		name: '_addReserves',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [],
		name: '_claimPartnershipReserves',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'compLikeDelegatee',
				type: 'address',
			},
		],
		name: '_delegateCompLikeTo',
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
				name: 'reduceAmount',
				type: 'uint256',
			},
		],
		name: '_reduceReserves',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'contract ComptrollerInterface',
				name: 'newComptroller',
				type: 'address',
			},
		],
		name: '_setComptroller',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'contract InterestRateModel',
				name: 'newInterestRateModel',
				type: 'address',
			},
		],
		name: '_setInterestRateModel',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address payable',
				name: 'newAdmin',
				type: 'address',
			},
		],
		name: '_setPartnershipAdmin',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address payable',
				name: 'newPendingAdmin',
				type: 'address',
			},
		],
		name: '_setPendingAdmin',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'uint256',
				name: 'newReserveFactorMantissa',
				type: 'uint256',
			},
		],
		name: '_setReserveFactor',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'accrualBlockNumber',
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
		constant: false,
		inputs: [],
		name: 'accrueInterest',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'admin',
		outputs: [
			{
				internalType: 'address payable',
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
		inputs: [
			{
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'spender',
				type: 'address',
			},
		],
		name: 'allowance',
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
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'spender',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'approve',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
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
				name: 'owner',
				type: 'address',
			},
		],
		name: 'balanceOf',
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
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
		],
		name: 'balanceOfUnderlying',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'uint256',
				name: 'borrowAmount',
				type: 'uint256',
			},
			{
				components: [
					{
						internalType: 'address[]',
						name: 'appraisalTokens',
						type: 'address[]',
					},
					{
						internalType: 'uint256[]',
						name: 'appraisalLengths',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256[]',
						name: 'appraisalTokenIds',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256[]',
						name: 'appraisalValues',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256',
						name: 'appraisalGoodUntil',
						type: 'uint256',
					},
					{
						internalType: 'bytes',
						name: 'signature',
						type: 'bytes',
					},
				],
				internalType: 'struct AppraisalStruct.Wire',
				name: 'appraisal',
				type: 'tuple',
			},
		],
		name: 'borrow',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
		],
		name: 'borrowBalanceCurrent',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
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
				name: 'account',
				type: 'address',
			},
		],
		name: 'borrowBalanceStored',
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
		name: 'borrowIndex',
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
		name: 'borrowRatePerBlock',
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
		name: 'comptroller',
		outputs: [
			{
				internalType: 'contract ComptrollerInterface',
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
		name: 'decimals',
		outputs: [
			{
				internalType: 'uint8',
				name: '',
				type: 'uint8',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: false,
		inputs: [],
		name: 'exchangeRateCurrent',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'exchangeRateStored',
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
				name: 'account',
				type: 'address',
			},
		],
		name: 'getAccountSnapshot',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
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
		name: 'getCash',
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
		name: 'implementation',
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
				name: 'underlying_',
				type: 'address',
			},
			{
				internalType: 'contract ComptrollerInterface',
				name: 'comptroller_',
				type: 'address',
			},
			{
				internalType: 'contract InterestRateModel',
				name: 'interestRateModel_',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'initialExchangeRateMantissa_',
				type: 'uint256',
			},
			{
				internalType: 'string',
				name: 'name_',
				type: 'string',
			},
			{
				internalType: 'string',
				name: 'symbol_',
				type: 'string',
			},
			{
				internalType: 'uint8',
				name: 'decimals_',
				type: 'uint8',
			},
		],
		name: 'initialize',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'contract ComptrollerInterface',
				name: 'comptroller_',
				type: 'address',
			},
			{
				internalType: 'contract InterestRateModel',
				name: 'interestRateModel_',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'initialExchangeRateMantissa_',
				type: 'uint256',
			},
			{
				internalType: 'string',
				name: 'name_',
				type: 'string',
			},
			{
				internalType: 'string',
				name: 'symbol_',
				type: 'string',
			},
			{
				internalType: 'uint8',
				name: 'decimals_',
				type: 'uint8',
			},
		],
		name: 'initialize',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'interestRateModel',
		outputs: [
			{
				internalType: 'contract InterestRateModel',
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
				name: 'borrower',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'repayAmount',
				type: 'uint256',
			},
			{
				internalType: 'contract CErc20CollateralInterface',
				name: 'cErc20CollateralToken',
				type: 'address',
			},
			{
				components: [
					{
						internalType: 'address[]',
						name: 'appraisalTokens',
						type: 'address[]',
					},
					{
						internalType: 'uint256[]',
						name: 'appraisalLengths',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256[]',
						name: 'appraisalTokenIds',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256[]',
						name: 'appraisalValues',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256',
						name: 'appraisalGoodUntil',
						type: 'uint256',
					},
					{
						internalType: 'bytes',
						name: 'signature',
						type: 'bytes',
					},
				],
				internalType: 'struct AppraisalStruct.Wire',
				name: 'appraisal',
				type: 'tuple',
			},
		],
		name: 'liquidateBorrowAndRedeemErc20CollateralStaking',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'borrower',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'repayAmount',
				type: 'uint256',
			},
			{
				internalType: 'contract CErc721Interface',
				name: 'cErc721TokenCollateral',
				type: 'address',
			},
			{
				internalType: 'uint256[]',
				name: 'tokenIds',
				type: 'uint256[]',
			},
			{
				components: [
					{
						internalType: 'address[]',
						name: 'appraisalTokens',
						type: 'address[]',
					},
					{
						internalType: 'uint256[]',
						name: 'appraisalLengths',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256[]',
						name: 'appraisalTokenIds',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256[]',
						name: 'appraisalValues',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256',
						name: 'appraisalGoodUntil',
						type: 'uint256',
					},
					{
						internalType: 'bytes',
						name: 'signature',
						type: 'bytes',
					},
				],
				internalType: 'struct AppraisalStruct.Wire',
				name: 'appraisal',
				type: 'tuple',
			},
		],
		name: 'liquidateBorrowAndRedeemErc721Mainchain',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'borrower',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'repayAmount',
				type: 'uint256',
			},
			{
				internalType: 'contract CErc721Interface',
				name: 'cErc721TokenCollateral',
				type: 'address',
			},
			{
				internalType: 'uint256[]',
				name: 'tokenIds',
				type: 'uint256[]',
			},
			{
				components: [
					{
						internalType: 'address[]',
						name: 'appraisalTokens',
						type: 'address[]',
					},
					{
						internalType: 'uint256[]',
						name: 'appraisalLengths',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256[]',
						name: 'appraisalTokenIds',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256[]',
						name: 'appraisalValues',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256',
						name: 'appraisalGoodUntil',
						type: 'uint256',
					},
					{
						internalType: 'bytes',
						name: 'signature',
						type: 'bytes',
					},
				],
				internalType: 'struct AppraisalStruct.Wire',
				name: 'appraisal',
				type: 'tuple',
			},
		],
		name: 'liquidateBorrowAndRedeemErc721Staking',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'uint256',
				name: 'mintAmount',
				type: 'uint256',
			},
		],
		name: 'mint',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'name',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'partnershipAdmin',
		outputs: [
			{
				internalType: 'address payable',
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
		name: 'partnershipReserves',
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
		name: 'pendingAdmin',
		outputs: [
			{
				internalType: 'address payable',
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
		name: 'protocolSeizeShareMantissa',
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
		constant: false,
		inputs: [
			{
				internalType: 'uint256',
				name: 'redeemTokens',
				type: 'uint256',
			},
			{
				components: [
					{
						internalType: 'address[]',
						name: 'appraisalTokens',
						type: 'address[]',
					},
					{
						internalType: 'uint256[]',
						name: 'appraisalLengths',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256[]',
						name: 'appraisalTokenIds',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256[]',
						name: 'appraisalValues',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256',
						name: 'appraisalGoodUntil',
						type: 'uint256',
					},
					{
						internalType: 'bytes',
						name: 'signature',
						type: 'bytes',
					},
				],
				internalType: 'struct AppraisalStruct.Wire',
				name: 'appraisal',
				type: 'tuple',
			},
		],
		name: 'redeem',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'uint256',
				name: 'redeemAmount',
				type: 'uint256',
			},
			{
				components: [
					{
						internalType: 'address[]',
						name: 'appraisalTokens',
						type: 'address[]',
					},
					{
						internalType: 'uint256[]',
						name: 'appraisalLengths',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256[]',
						name: 'appraisalTokenIds',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256[]',
						name: 'appraisalValues',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256',
						name: 'appraisalGoodUntil',
						type: 'uint256',
					},
					{
						internalType: 'bytes',
						name: 'signature',
						type: 'bytes',
					},
				],
				internalType: 'struct AppraisalStruct.Wire',
				name: 'appraisal',
				type: 'tuple',
			},
		],
		name: 'redeemUnderlying',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'uint256',
				name: 'repayAmount',
				type: 'uint256',
			},
		],
		name: 'repayBorrow',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'borrower',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'repayAmount',
				type: 'uint256',
			},
		],
		name: 'repayBorrowBehalf',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'reserveFactorMantissa',
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
		name: 'supplyRatePerBlock',
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
		constant: false,
		inputs: [
			{
				internalType: 'contract EIP20NonStandardInterface',
				name: 'token',
				type: 'address',
			},
		],
		name: 'sweepToken',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'symbol',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'totalBorrows',
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
		constant: false,
		inputs: [],
		name: 'totalBorrowsCurrent',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'totalReserves',
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
		name: 'totalSupply',
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
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'dst',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
			{
				components: [
					{
						internalType: 'address[]',
						name: 'appraisalTokens',
						type: 'address[]',
					},
					{
						internalType: 'uint256[]',
						name: 'appraisalLengths',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256[]',
						name: 'appraisalTokenIds',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256[]',
						name: 'appraisalValues',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256',
						name: 'appraisalGoodUntil',
						type: 'uint256',
					},
					{
						internalType: 'bytes',
						name: 'signature',
						type: 'bytes',
					},
				],
				internalType: 'struct AppraisalStruct.Wire',
				name: 'appraisal',
				type: 'tuple',
			},
		],
		name: 'transfer',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'src',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'dst',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
			{
				components: [
					{
						internalType: 'address[]',
						name: 'appraisalTokens',
						type: 'address[]',
					},
					{
						internalType: 'uint256[]',
						name: 'appraisalLengths',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256[]',
						name: 'appraisalTokenIds',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256[]',
						name: 'appraisalValues',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256',
						name: 'appraisalGoodUntil',
						type: 'uint256',
					},
					{
						internalType: 'bytes',
						name: 'signature',
						type: 'bytes',
					},
				],
				internalType: 'struct AppraisalStruct.Wire',
				name: 'appraisal',
				type: 'tuple',
			},
		],
		name: 'transferFrom',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'underlying',
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
] as const
const C_ERC20_1: Contract<typeof abi> = {
	name: 'C Erc20',
	address: '0xff06a60e55af8fb26cf4e9677903a2426fa2ba35',
	is_deprecated: false,
	created_at: 1681170001,
	abi: abi,
}
export default C_ERC20_1
