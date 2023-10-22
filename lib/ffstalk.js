// file ffstalk.js di folder ./lib
const axios = require('axios');

async function ffstalk(userId) {
  try {
    const response = await axios.post("https://order-sg.codashop.com/initPayment.action", 
      "voucherPricePoint.id=20500" +
      "&voucherPricePoint.price=1000.0" +
      "&voucherPricePoint.variablePrice=0" +
      "&n=12%2F10%2F2023-1840" +
      "&email=panjipr1140v%40gmail.com" +
      "&userVariablePrice=0" +
      "&order.data.profile=eyJuYW1lIjoiICIsImRhdGVvZmJpcnRoIjoiIiwiaWRfbm8iOiIifQ%3D%3D" +
      "&user.userId=" + userId +
      "&user.zoneId=" +
      "&msisdn=" +
      "&voucherTypeName=FREEFIRE" +
      "&voucherTypeId=17" +
      "&gvtId=33" +
      "&lvtId=217" +
      "&pcId=240" +
      "&shopLang=id_ID" +
      "&checkoutId=093993e5-d46c-4857-9510-97178dbb0dc6" +
      "&affiliateTrackingId=" +
      "&impactClickId=" +
      "&anonymousId=bb37f0a4-4683-4a2d-b378-5818eb6eb0cb" +
      "&absoluteUrl=https%3A%2F%2Fwww.codashop.com%2Fid-id%2Ffree-fire" +
      "&utmParameters=" +
      "&userSessionId=cGFuamlwcjExNDB2QGdtYWlsLmNvbQ%3D%3D" +
      "&userEmailConsent=false" +
      "&userMobileConsent=false" +
      "&verifiedMsisdn=" +
      "&promoId=" +
      "&promoCode=" +
      "&clevertapId=0b31b0f0187d41dbaec9dca41e20d1c0" +
      "&promotionReferralCode=" +
      "&isReferredUser=false"
    );

    return {
      id: userId,
      nickname: response.data.confirmationFields.roles[0].role
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports.ffstalk = ffstalk;
