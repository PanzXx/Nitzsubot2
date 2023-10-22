const axios = require('axios');

async function ffstalk(userId) {
  let data = {
    "voucherPricePoint.id": 20500,
    "voucherPricePoint.price": 1000.0,
    "voucherPricePoint.variablePrice": 0,
    "n": "12/10/2023-1840",
    "email": "panjipr1140v@gmail.com",
    "userVariablePrice": 0,
    "order.data.profile": "eyJuYW1lIjoiICIsImRhdGVvZmJpcnRoIjoiIiwiaWRfbm8iOiIifQ==",
    "user.userId": userId,
    "voucherTypeName": "FREEFIRE",
    "affiliateTrackingId": "",
    "impactClickId": "",
    "checkoutId": "093993e5-d46c-4857-9510-97178dbb0dc6",
    "shopLang": "id_ID",
  };
  let ff = await axios({
    "headers": {
      "Content-Type": "application/json; charset=utf-8"
    },
    "method": "POST",
    "url": "https://order.codashop.com/id/initPayment.action",
    "data": data
  });
  return {
    id: userId,
    nickname: ff.data["confirmationFields"]["roles"][0]["role"]
  };
}

module.exports.ffstalk = ffstalk