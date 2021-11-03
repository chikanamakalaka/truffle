import assert from "assert";
import { describe, it } from "mocha";
import Config from "@truffle/config";
import { fetchAndCompile } from "../lib/index";
  describe("fetches contract on mainnet and checks for verification",  () => {
    const config = Config.default().merge({
        networks: {
          mainnet: {
<<<<<<< HEAD
            url: 'https://mainnet.infura.io/v3/8d23e7266ef248038e020ed5034a79c4',
=======
            url: 'https://mainnet.infura.io/v3/a6f6223b17034a66a6d9289a6e80d77c',
>>>>>>> parent of f6bad1ad0 (remove mainnet url from test)
            network_id: 1
          }
        }, ​
        network: "mainnet",   ​
        // etherscan: {
        //   apiKey: process.env.ETHERSCAN_KEY
        // }
      });
      it.only('resolves with verified contract', () => {
        return fetchAndCompile('0x6B3595068778DD592e39A122f4f5a5cF09C90fE2',config).then(result => {
          let contractName = result.sourceInfo.contractName
          console.log(result.sourceInfo.contractName)
          assert.notEqual(contractName, undefined)
        })
      })
    });
    describe("fetches contract on arbitrum and checks for verification",  () => {
      const config = Config.default().merge({
          networks: {
            arbitrum: {
              url: 'https://arbitrum-mainnet.infura.io/v3/9106cb4bf5d54d478e5585a2234e72b3',
              network_id: 42161
            }
          }, ​
          network: "arbitrum",   ​
          // etherscan: {
          //   apiKey: process.env.ETHERSCAN_KEY
          // }
        });
        it('resolves with verified contract', () => {
          return fetchAndCompile('0xBf00759D7E329d7A7fa1D4DCdC914C53d1d2db86',config).then(result => {
            let contractName = result.sourceInfo.contractName
            console.log(result)
            assert.notEqual(contractName, undefined)
          })
        })
      });
      describe("fetches contract on polygon and checks for verification",  () => {
        const config = Config.default().merge({
            networks: {
              polygon: {
                url: 'https://polygon-mainnet.infura.io/v3/500286b860dc494ab29a48e8314af908',
                network_id: 137
              }
            }, ​
            network: "polygon",   ​
            etherscan: {
              apiKey: ''
            }
          });
          it('resolves with verified contract', () => {
            return fetchAndCompile('0xDef1C0ded9bec7F1a1670819833240f027b25EfF',config).then(result => {
              let contractName = result.sourceInfo.contractName
              console.log(result.sourceInfo.contractName)
              assert.notEqual(contractName, undefined)
            })
          })
        });