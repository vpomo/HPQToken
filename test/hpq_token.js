var HPQToken = artifacts.require("./HPQToken.sol");

contract('HPQToken', (accounts) => {
    var contract;
    //var owner = "0x63695A296005687E0bDfBFE4749B631849F9A338";
    var owner = accounts[0];
    var maxTotalSupply = 50 * 10**6 * 10**2;

    it('should deployed contract', async ()  => {
        assert.equal(undefined, contract);
        contract = await HPQToken.deployed();
        assert.notEqual(undefined, contract);
    });

    it('get address contract', async ()  => {
        assert.notEqual(undefined, contract.address);
    });

    it('verification balance contract', async ()  => {
        var totalSupplyTest = await contract.totalSupply.call();
        //console.log(JSON.stringify(totalSupplyTest));
        assert.equal(Number(totalSupplyTest), Number(maxTotalSupply));

        var balanceOwner = await contract.balanceOf(owner);
        assert.equal(Number(totalSupplyTest), balanceOwner);
    });

    it('verification of transfer Token', async ()  => {
        var balanceAccountTwoBefore = await contract.balanceOf(accounts[2]);
        var balanceAccountOwnerBefore = await contract.balanceOf(accounts[0]);

        await contract.transfer(accounts[2], 1*10**2, {from:accounts[0]});
        var balanceAccountTwoAfter = await contract.balanceOf(accounts[2]);
        var balanceAccountOwnerAfter = await contract.balanceOf(accounts[0]);

        //console.log("balanceAccountOwnerBefore = " + balanceAccountOwnerBefore);
        //console.log("balanceAccountOwnerAfter = " + balanceAccountOwnerAfter);
        assert.isTrue(balanceAccountTwoBefore < balanceAccountTwoAfter);
        assert.isTrue(Number(balanceAccountOwnerBefore) > Number(balanceAccountOwnerAfter));
        assert.equal(0, balanceAccountTwoBefore);
        assert.equal(1*10**2, balanceAccountTwoAfter);

    });

});



