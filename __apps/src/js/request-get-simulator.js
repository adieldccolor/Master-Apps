(function(global){

    global.$_GET = [];
    global.Request = {QueryString: []};

    function prepareRequest(want){

        global.Request = {QueryString: []};

        var index, items, result, tmp, i, len;
        result = null;
        tmp = [];
        items = location.search.substr(1).split("&");
        for (i = 0, len = items.length; i < len; i++) {
            index = items[i];
            tmp = index.split("=");
            global.$_GET[tmp[0]] = decodeURIComponent(tmp[1]);
            global.Request.QueryString[tmp[0]] = decodeURIComponent(tmp[1]);

        }

        var getUriValue = function( a ) {
            var index, items, result, tmp, i, len;
            result = null;
            tmp = [];
            items = global.location.search.substr(1).split("&");
            for (i = 0, len = items.length; i < len; i++) {
                index = items[i];
                tmp = index.split("=");
                if (tmp[0] === a) {
                    result = decodeURIComponent(tmp[1]);
                }
            }
            return result;
        };

        if(typeof want != undefined && typeof want == "object" && want.QueryString){

            return getUriValue(want.QueryString);

        }


    }

    prepareRequest();

})(window);