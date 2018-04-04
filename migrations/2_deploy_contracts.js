const HPQToken = artifacts.require('./HPQToken.sol');

module.exports = (deployer) => {
    //http://www.onlineconversion.com/unix_time.htm
    var owner = "0x63695A296005687E0bDfBFE4749B631849F9A338";
    deployer.deploy(HPQToken, owner);
};
