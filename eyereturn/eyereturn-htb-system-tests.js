'use strict';

function getPartnerId() {
    return 'EyereturnHtb';
}

function getCallbackType() {
    return 'NONE';
}

function getArchitecture() {
    return 'MRA';
}

function getStatsId() {
    return 'EYE';
}

function getConfig() {
    // TODO: not sure about this
    var config = {
        // partner level parameter
        id: "FA2F43C00DD40E23",
        ua: "Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; rv:11.0) like Gecko", 
        ip: "199.166.10.82",
        xSlots: {
            1: {
                // slot level parameter
                w: 300,
                h: 250
            }
        }
    };

    return config;
}

function getBidRequestRegex() {
    return {
        method: 'POST',
        urlRegex: /.*bidder-dev.eyereturn.net\/bid_casale_openrtb.*/
    };
}

function validateBidRequest() {

}

function getValidResponse(request, creative) {
    var r = JSON.parse(request.body);
    var adm = creative || '<script type="text/javascript" src="http://p3.eyereturn.com/ed/3/?7249996&cid=314569&tid=7249996&oid=FA2F43C00DD40E23&vid=null&iid=cb70163c-49a6-11e9-a928-eff3f10311ad&p=${AUCTION_PRICE}&bd2=y3AWPUmmEempKO_z8QMRrYqqv8nzDtjsZmEOOw&rnd=-743082806484230412&ex=ChAKC251bV9kZXZpY2VzEgEx"></script>';
    var response = {
        id: r.id,
        ext: {
            ssl: 0
        },
        seatbid: [
            {
                bid: [
                    {
                        id: 'cb70163d-49a6-11e9-a928-eff3f10311ad',
                        impid: '0',
                        price: 200,
                        attr: [],
                        adomain: ['www.thechesterfieldshop.com'],
                        adm: adm
                    }
                ],
                seat: '3393'
            }
        ]
    };

    return JSON.stringify(response);
}

function validateTargeting(targetingMap) {

}

function getPassResponse(request) {
    // TODO: not sure about this, bidder-dev sends 204 no content on bid pass, how to represent that here?
    return null;
}

module.exports = {
    getPartnerId: getPartnerId,
    getCallbackType: getCallbackType,
    getArchitecture: getArchitecture,
    getStatsId: getStatsId,
    getConfig: getConfig,
    getBidRequestRegex: getBidRequestRegex,
    validateBidRequest: validateBidRequest,
    getValidResponse: getValidResponse,
    validateTargeting: validateTargeting,
    getPassResponse: getPassResponse
};
