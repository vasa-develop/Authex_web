var Web3 = require('web3');


if (typeof web3 !== 'undefined') {
           var web3 = new Web3(web3.currentProvider);
        } else {
            // set the provider you want from Web3.providers
           var web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/MIY5d592BKY8caiAK2TJ"));
        }

          web3.eth.defaultAccount = web3.eth.accounts[0];
          var KYCContract = web3.eth.contract([
    {
        "constant": true,
        "inputs": [
            {
                "name": "userhash",
                "type": "address"
            }
        ],
        "name": "viewUserInfo",
        "outputs": [
            {
                "name": "fullname",
                "type": "string"
            },
            {
                "name": "emailid",
                "type": "string"
            },
            {
                "name": "mobileno",
                "type": "string"
            },
            {
                "name": "isKYCApproved",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "orghash",
                "type": "address"
            }
        ],
        "name": "viewPendingKYCRequests",
        "outputs": [
            {
                "name": "",
                "type": "address[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "orghash",
                "type": "address"
            },
            {
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "viewPendingKYCApprovalAddress",
        "outputs": [
            {
                "name": "pendingAddress",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "orghash",
                "type": "address"
            }
        ],
        "name": "viewOrgInfo",
        "outputs": [
            {
                "name": "orgname",
                "type": "string"
            },
            {
                "name": "isKYCApprover",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "userhash",
                "type": "address"
            }
        ],
        "name": "CheckKYCApprovalStatus",
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
                "name": "orgname",
                "type": "string"
            },
            {
                "name": "orghash",
                "type": "address"
            }
        ],
        "name": "AddOrgInfo",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "userhash",
                "type": "address"
            },
            {
                "name": "fullname",
                "type": "string"
            },
            {
                "name": "emailid",
                "type": "string"
            },
            {
                "name": "mobileno",
                "type": "string"
            }
        ],
        "name": "AddUserInfo",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "orghash",
                "type": "address"
            }
        ],
        "name": "ApproveOrgForKYC",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "userhash",
                "type": "address"
            },
            {
                "name": "orghash",
                "type": "address"
            },
            {
                "name": "isApproved",
                "type": "uint256"
            }
        ],
        "name": "ChangeKYCApprovalStatus",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "orghash",
                "type": "address"
            },
            {
                "name": "userhash",
                "type": "address"
            }
        ],
        "name": "RequestApproveKYC",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
]);

        /*var accounts = web3.eth.accounts;
        for (var i=0; i < accounts.length; i++){
            console.log(accounts[i]);
            console.log(web3.eth.getBalance(accounts[0]))
        }*/
        /*var bal =  web3.eth.getBalance(web3.eth.accounts[0]);
        console.log(bal);*/

        var KYC = KYCContract.at('0x6f49849cf417a8b9309436e3ac33361986488843');
        console.log(KYC);

        module.exports = KYC;

        //KYC.AddOrgInfo("vasainc","0x1158F15E74DCEc06AEAeEbA5b0EaA8461c73dB35");
