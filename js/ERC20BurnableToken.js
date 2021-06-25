var ERC20BurnableABI = [
	{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "spender",
				"type": "address"
			},
			{
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "sender",
				"type": "address"
			},
			{
				"name": "recipient",
				"type": "address"
			},
			{
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "spender",
				"type": "address"
			},
			{
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "burn",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "account",
				"type": "address"
			},
			{
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "burnFrom",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "spender",
				"type": "address"
			},
			{
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "recipient",
				"type": "address"
			},
			{
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "owner",
				"type": "address"
			},
			{
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "symbol",
				"type": "string"
			},
			{
				"name": "decimals",
				"type": "uint8"
			},
			{
				"name": "totalSupply",
				"type": "uint256"
			},
			{
				"name": "adminAddress",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	}
];

var ERC20BurnableBytecode ="60806040523480156200001157600080fd5b506040516200121138038062001211833981018060405260a08110156200003757600080fd5b8101908080516401000000008111156200005057600080fd5b820160208101848111156200006457600080fd5b81516401000000008111828201871017156200007f57600080fd5b505092919060200180516401000000008111156200009c57600080fd5b82016020810184811115620000b057600080fd5b8151640100000000811182820187101715620000cb57600080fd5b50506020808301516040840151606090940151875193965090945091869186918691620000fe91600391860190620002ec565b50815162000114906004906020850190620002ec565b506005805460ff191660ff9283161790556200014492508391508516600a0a84026401000000006200014f810204565b505050505062000391565b600160a060020a0382161515620001c757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b600254620001e4908264010000000062000b786200027082021704565b600255600160a060020a0382166000908152602081905260409020546200021a908264010000000062000b786200027082021704565b600160a060020a0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b600082820183811015620002e557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200032f57805160ff19168380011785556200035f565b828001600101855582156200035f579182015b828111156200035f57825182559160200191906001019062000342565b506200036d92915062000371565b5090565b6200038e91905b808211156200036d576000815560010162000378565b90565b610e7080620003a16000396000f3fe6080604052600436106100c45763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166306fdde0381146100c9578063095ea7b31461015357806318160ddd146101a057806323b872dd146101c7578063313ce5671461020a578063395093511461023557806342966c681461026e57806370a082311461029a57806379cc6790146102cd57806395d89b4114610306578063a457c2d71461031b578063a9059cbb14610354578063dd62ed3e1461038d575b600080fd5b3480156100d557600080fd5b506100de6103c8565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610118578181015183820152602001610100565b50505050905090810190601f1680156101455780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561015f57600080fd5b5061018c6004803603604081101561017657600080fd5b50600160a060020a03813516906020013561045e565b604080519115158252519081900360200190f35b3480156101ac57600080fd5b506101b561047b565b60408051918252519081900360200190f35b3480156101d357600080fd5b5061018c600480360360608110156101ea57600080fd5b50600160a060020a03813581169160208101359091169060400135610481565b34801561021657600080fd5b5061021f610560565b6040805160ff9092168252519081900360200190f35b34801561024157600080fd5b5061018c6004803603604081101561025857600080fd5b50600160a060020a038135169060200135610569565b34801561027a57600080fd5b506102986004803603602081101561029157600080fd5b50356105bd565b005b3480156102a657600080fd5b506101b5600480360360208110156102bd57600080fd5b5035600160a060020a03166105d1565b3480156102d957600080fd5b50610298600480360360408110156102f057600080fd5b50600160a060020a0381351690602001356105ec565b34801561031257600080fd5b506100de6105fa565b34801561032757600080fd5b5061018c6004803603604081101561033e57600080fd5b50600160a060020a03813516906020013561065b565b34801561036057600080fd5b5061018c6004803603604081101561037757600080fd5b50600160a060020a03813516906020013561070d565b34801561039957600080fd5b506101b5600480360360408110156103b057600080fd5b50600160a060020a0381358116916020013516610721565b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104545780601f1061042957610100808354040283529160200191610454565b820191906000526020600020905b81548152906001019060200180831161043757829003601f168201915b5050505050905090565b600061047261046b61074c565b8484610750565b50600192915050565b60025490565b600061048e8484846108bd565b6105568461049a61074c565b61055185606060405190810160405280602881526020017f45524332303a207472616e7366657220616d6f756e742065786365656473206181526020017f6c6c6f77616e6365000000000000000000000000000000000000000000000000815250600160008b600160a060020a0316600160a060020a03168152602001908152602001600020600061052a61074c565b600160a060020a03168152602081019190915260400160002054919063ffffffff610ade16565b610750565b5060019392505050565b60055460ff1690565b600061047261057661074c565b84610551856001600061058761074c565b600160a060020a03908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff610b7816565b6105ce6105c861074c565b82610bdc565b50565b600160a060020a031660009081526020819052604090205490565b6105f68282610d5c565b5050565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104545780601f1061042957610100808354040283529160200191610454565b600061047261066861074c565b8461055185606060405190810160405280602581526020017f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7781526020017f207a65726f000000000000000000000000000000000000000000000000000000815250600160006106d661074c565b600160a060020a03908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff610ade16565b600061047261071a61074c565b84846108bd565b600160a060020a03918216600090815260016020908152604080832093909416825291909152205490565b3390565b600160a060020a03831615156107d5576040805160e560020a62461bcd028152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f7265737300000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b600160a060020a038216151561085b576040805160e560020a62461bcd02815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f7373000000000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b600160a060020a03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b600160a060020a0383161515610943576040805160e560020a62461bcd02815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b600160a060020a03821615156109c9576040805160e560020a62461bcd02815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f6573730000000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b60408051606081018252602681527f45524332303a207472616e7366657220616d6f756e74206578636565647320626020808301919091527f616c616e6365000000000000000000000000000000000000000000000000000082840152600160a060020a0386166000908152908190529190912054610a4f91839063ffffffff610ade16565b600160a060020a038085166000908152602081905260408082209390935590841681522054610a84908263ffffffff610b7816565b600160a060020a038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008184841115610b705760405160e560020a62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610b35578181015183820152602001610b1d565b50505050905090810190601f168015610b625780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600082820183811015610bd5576040805160e560020a62461bcd02815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b600160a060020a0382161515610c62576040805160e560020a62461bcd02815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f7300000000000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b60408051606081018252602281527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e6020808301919091527f636500000000000000000000000000000000000000000000000000000000000082840152600160a060020a0385166000908152908190529190912054610ce891839063ffffffff610ade16565b600160a060020a038316600090815260208190526040902055600254610d14908263ffffffff610e0216565b600255604080518281529051600091600160a060020a038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b610d668282610bdc565b6105f682610d7261074c565b61055184606060405190810160405280602481526020017f45524332303a206275726e20616d6f756e74206578636565647320616c6c6f7781526020017f616e6365000000000000000000000000000000000000000000000000000000008152506001600089600160a060020a0316600160a060020a03168152602001908152602001600020600061052a61074c565b6000610bd583836040805190810160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610ade56fea165627a7a723058203f6f654011f046efc16a18ae324c9ef3336a1bfd255306cf04f0b0e0162d03980029";