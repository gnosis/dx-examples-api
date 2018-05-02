const got = require('got');
const BASE_URL = 'https://dx-services.dev.gnosisdev.com/api/v1'

async function getInfoFromDx() {
  // Get all the token pairs (markets)
  const { body: markets } = await got(BASE_URL + '/markets', {
    json: true
  })
  
  // Print all the markets
  console.log(`Found ${markets.length} markets in Dutch X:`)
  markets.forEach((market, index) => {    
    console.log(`[${index + 1}] ${market.tokenA.symbol}-${market.tokenB.symbol}:`)
    printTokenInfo(market.tokenA)
    printTokenInfo(market.tokenB)
  })
  
  // For more operations go to the API docs: 
  //    https://dx-services.dev.gnosisdev.com/docs/api/
}

function printTokenInfo({ symbol, name, address, decimals }) {
  console.log(`  - Token ${symbol}:`)
  console.log('      Name: ' + name)
  console.log('      Address: ' + address)
  console.log('      Decimals: ' + decimals)
}

getInfoFromDx()
  .catch(console.error)