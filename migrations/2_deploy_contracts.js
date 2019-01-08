const MyStringStore = artifacts.require("MyStringStore");

module.exports = deployer => {
  deployer.deploy(MyStringStore);
};
