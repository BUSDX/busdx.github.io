module.exports = [
    { inputs: [], stateMutability: "nonpayable", type: "constructor" },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "_marketingBuy",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_devBuy",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_liquidityBuy",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_farmingBuy",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_marketingSell",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_devSell",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_liquiditySell",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_farmingSell",
                type: "uint256",
            },
        ],
        name: "Fees",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "spender", type: "address" },
        ],
        name: "allowance",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "approve",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{ internalType: "address", name: "account", type: "address" }],
        name: "balanceOf",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "decimals",
        outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "spender", type: "address" },
            {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256",
            },
        ],
        name: "decreaseAllowance",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "farmingAddress",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "feeExempt",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getFees",
        outputs: [
            { internalType: "uint256", name: "marketingBuy", type: "uint256" },
            { internalType: "uint256", name: "devBuy", type: "uint256" },
            { internalType: "uint256", name: "liquidityBuy", type: "uint256" },
            { internalType: "uint256", name: "farmingBuy", type: "uint256" },
            { internalType: "uint256", name: "marketingSell", type: "uint256" },
            { internalType: "uint256", name: "devSell", type: "uint256" },
            { internalType: "uint256", name: "liquiditySell", type: "uint256" },
            { internalType: "uint256", name: "farmingSell", type: "uint256" },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "_address", type: "address" },
        ],
        name: "getRecentTx",
        outputs: [
            { internalType: "uint256", name: "buys", type: "uint256" },
            { internalType: "uint256", name: "sells", type: "uint256" },
            { internalType: "uint256", name: "lastTx", type: "uint256" },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getTaxTiers",
        outputs: [
            { internalType: "uint256", name: "discount1", type: "uint256" },
            { internalType: "uint256", name: "amount1", type: "uint256" },
            { internalType: "uint256", name: "discount2", type: "uint256" },
            { internalType: "uint256", name: "amount2", type: "uint256" },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "_amount", type: "uint256" }],
        name: "getTokenPrice",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getTxLimits",
        outputs: [
            { internalType: "uint256", name: "buyLimit", type: "uint256" },
            { internalType: "uint256", name: "sellLimit", type: "uint256" },
            { internalType: "uint256", name: "cooldown", type: "uint256" },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "addedValue", type: "uint256" },
        ],
        name: "increaseAllowance",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "pair",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "router",
        outputs: [
            { internalType: "contract IDEXRouter", name: "", type: "address" },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "_address", type: "address" },
            { internalType: "bool", name: "_value", type: "bool" },
        ],
        name: "setFeeExempt",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "uint256", name: "_marketingBuy", type: "uint256" },
            { internalType: "uint256", name: "_devBuy", type: "uint256" },
            { internalType: "uint256", name: "_liquidityBuy", type: "uint256" },
            { internalType: "uint256", name: "_farmingBuy", type: "uint256" },
            {
                internalType: "uint256",
                name: "_marketingSell",
                type: "uint256",
            },
            { internalType: "uint256", name: "_devSell", type: "uint256" },
            {
                internalType: "uint256",
                name: "_liquiditySell",
                type: "uint256",
            },
            { internalType: "uint256", name: "_farmingSell", type: "uint256" },
        ],
        name: "setFees",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_farmingAddress",
                type: "address",
            },
            { internalType: "address", name: "_taxAddress", type: "address" },
        ],
        name: "setTaxAddress",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "uint256", name: "_discount1", type: "uint256" },
            { internalType: "uint256", name: "_amount1", type: "uint256" },
            { internalType: "uint256", name: "_discount2", type: "uint256" },
            { internalType: "uint256", name: "_amount2", type: "uint256" },
        ],
        name: "setTaxTiers",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "_address", type: "address" },
            { internalType: "bool", name: "_value", type: "bool" },
        ],
        name: "setTxLimitExempt",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "uint256", name: "_buyLimit", type: "uint256" },
            { internalType: "uint256", name: "_sellLimit", type: "uint256" },
            { internalType: "uint256", name: "_cooldown", type: "uint256" },
        ],
        name: "setTxLimits",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "symbol",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "taxAddress",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalSupply",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "transfer",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "transferFrom",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "newOwner", type: "address" },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "txLimitExempt",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function",
    },
];