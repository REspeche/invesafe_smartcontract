var Vendor = artifacts.require("./Vendor.sol");
var InvesafeToken = artifacts.require("./InvesafeToken.sol");

module.exports = async function(deployer) {

  // Deploy InvesafeToken, then deploy Vendor, passing in InvesafeToken's newly deployed address
  deployer.deploy(InvesafeToken).then(function() {
    return deployer.deploy(Vendor, InvesafeToken.address);
  });

};
