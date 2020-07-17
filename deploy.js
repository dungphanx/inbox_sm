const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
	'relax minimum slogan kick upset punch toward refuse judge barely panther salon',
	'https://rinkeby.infura.io/v3/bc2af721fa8246dabb72e56451a9d337',
);
const web3 = new Web3(provider);
