var a = ["match", "action", "databrowser", "Safari", "input", "string", ".content", "https://api.ipify.org?format=jsonp&callback=?", "value", '" , "device":"', ".landing", "playBgm", "iPad", "total", "toString", "#canvas", "Silk", "val", "GMT", "Kindle", "Windows Phone", ".landing .action-2", "exception", "reload", "location", "log", "./abc.php", "vendor", "os.name = ", "PlayBook", "userAgent", "apply", "success", "debu", "#score", ".loading .title", ".js-modal-content", "counter", "indexOf", "click",
"[- /:;]([\\d._]+)", "unknown", '{ "r1":"', '{ "host":"', "setTime", "trace", "info", "replace", "debug", "Game", "start", "getTime", "#over-zero", "browser", "#start", "chain", "Internet Explorer", "POST", "name", " | ", "function *\\( *\\)", "matchItem", "Palm", "init", "Android", "test", "Mozilla", "#loadingmessage", "Linux", "MSIE", "charAt", ".js-reload", "getJSON", "while (true) {}", "os.version = ", " UTC", "close", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", "PalmOS",
"set", "stateObject", "S\u00e1\u00bb\u2018 \u00c4\u2018i\u00e1\u00bb\u2021n tho\u00e1\u00ba\u00a1i c\u00e1\u00bb\u00a7a b\u00e1\u00ba\u00a1n kh\u0102\u00b4ng \u00c4\u2018\u0102\u00bang \u00c4\u2018\u00e1\u00bb\u2039nh d\u00e1\u00ba\u00a1ng!", "slideBottom", "addClass", "Mac", " } ]}", "ceil", "constructor", "header", ".wxShare", ".loading .percent", '{}.constructor("return this")( )', "platform", "#modal", "toLowerCase", "Windows", "BlackBerry", "gger", "join", '" },', '" , "ip":', "Chrome", "WeixinJSBridgeReady",
"innerWidth", "console", "\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "hide", "appVersion", "#phone", "canvas", "split", "B\u00e1\u00ba\u00a1n \u00c4\u2018\u0102\u00a3 ch\u00c6\u00a1i 360 ph\u0102\u00bat li\u0102\u00aan t\u00e1\u00bb\u00a5c h\u0102\u00a3y ngh\u00e1\u00bb\u2030 ng\u00c6\u00a1i n\u0102 o!", '" , "r2":"', "#over-modal", "show", "CLDC", "B\u00e1\u00ba\u00a1n \u00c4\u2018\u0102\u00a3 ch\u00c6\u00a1i 180 ph\u0102\u00bat li\u0102\u00aan t\u00e1\u00bb\u00a5c h\u0102\u00a3y ngh\u00e1\u00bb\u2030 ng\u00c6\u00a1i n\u0102 o!",
"toISOString", "floor", "hostname", "length", "load", "addEventListener", "text", ".landing .action-1", '" , "phone":"', "dataos", "B\u00e1\u00ba\u00a1n ch\u00c6\u00b0a \u00c4\u2018i\u00e1\u00bb\u0081n s\u00e1\u00bb\u2018 \u00c4\u2018i\u00e1\u00bb\u2021n tho\u00e1\u00ba\u00a1i!", "css", '{ "score":"', "Firefox", "table", ".js-invite", "href", "Opera", "return (function() ", "^([^ ]+( +[^ ]+)+)+[^ ]}", "ajax", "version", "navigator.userAgent = ", "Macintosh", "navigator.appVersion = "];
(function(params, content) {
  /**
   * @param {?} selected_image
   * @return {undefined}
   */
  var fn = function(selected_image) {
    for (; --selected_image;) {
      params["push"](params["shift"]());
    }
  };
  /**
   * @return {undefined}
   */
  var build = function() {
    var target = {
      "data" : {
        "key" : "cookie",
        "value" : "timeout"
      },
      "setCookie" : function(data, name, uri, headers) {
        headers = headers || {};
        /** @type {string} */
        var url = name + "=" + uri;
        /** @type {number} */
        var q = 0;
        /** @type {number} */
        var i = 0;
        var key = data["length"];
        for (; i < key; i++) {
          var d = data[i];
          /** @type {string} */
          url = url + ("; " + d);
          var value = data[d];
          data["push"](value);
          key = data["length"];
          if (value !== !![]) {
            /** @type {string} */
            url = url + ("=" + value);
          }
        }
        /** @type {string} */
        headers["cookie"] = url;
      },
      "removeCookie" : function() {
        return "dev";
      },
      "getCookie" : function(match, href) {
        match = match || function(p) {
          return p;
        };
        var v = match(new RegExp("(?:^|; )" + href["replace"](/([.$?*|{}()[]\/+^])/g, "$1") + "=([^;]*)"));
        /**
         * @param {!Function} callback
         * @param {number} i
         * @return {undefined}
         */
        var test = function(callback, i) {
          callback(++i);
        };
        return test(fn, content), v ? decodeURIComponent(v[1]) : undefined;
      }
    };
    /**
     * @return {?}
     */
    var init = function() {
      /** @type {!RegExp} */
      var test = new RegExp("\\w+ *\\(\\) *{\\w+ *['|\"].+['|\"];? *}");
      return test["test"](target["removeCookie"]["toString"]());
    };
    /** @type {function(): ?} */
    target["updateCookie"] = init;
    /** @type {string} */
    var array = "";
    var k = target["updateCookie"]();
    if (!k) {
      target["setCookie"](["*"], "counter", 1);
    } else {
      if (k) {
        array = target["getCookie"](null, "counter");
      } else {
        target["removeCookie"]();
      }
    }
  };
  build();
})(a, 169);
/**
 * @param {string} e
 * @param {?} dt
 * @return {?}
 */
var b = function(e, dt) {
  /** @type {number} */
  e = e - 0;
  var ret = a[e];
  return ret;
};
var domReady;
var loadFinish;
var canvasReady;
var loadError;
var gameStart;
var game;
var score;
var successCount;
var startTime;
var endTime;
var apiTime;
var phone;
var ip;
var r1;
var r2;
var gameWidth = window[b("0x4c")];
var gameHeight = window["innerHeight"];
/** @type {number} */
var ratio = 1.5;
if (gameHeight / gameWidth < ratio) {
  gameWidth = Math[b("0x3b")](gameHeight / ratio);
}
$(b("0x79"))["css"]({
  "height" : gameHeight + "px",
  "width" : gameWidth + "px"
}), $(b("0x9"))[b("0x65")]({
  "width" : gameWidth + "px"
});
/**
 * @return {undefined}
 */
function hideLoading() {
  if (domReady && canvasReady) {
    $(b("0x82"))[b("0x57")]();
    /** @type {boolean} */
    loadFinish = !![];
    setTimeout(function() {
      $(".loading")[b("0x4f")]();
      $(b("0x7d"))[b("0x57")]();
    }, 1E3);
  }
}
/**
 * @param {!Object} data
 * @return {undefined}
 */
function updateLoading(data) {
  var y = data[b("0x5")];
  var shift = data[b("0x80")];
  var size_human = data["failed"];
  if (size_human > 0 && !loadError) {
    /** @type {boolean} */
    loadError = !![];
    alert(b("0x16"));
    return;
  }
  /** @type {number} */
  var d = parseInt(y / shift * 100);
  if (d === 100 && !canvasReady) {
    /** @type {boolean} */
    canvasReady = !![];
    hideLoading();
  }
  /** @type {number} */
  d = d > 98 ? 98 : d;
  /** @type {string} */
  d = d + "%";
  $(b("0x8"))[b("0x60")](d);
  $(b("0x3f"))[b("0x65")]({
    "width" : d
  });
}
/**
 * @return {undefined}
 */
function overShowOver() {
  endTime = (new Date((new Date)["toString"]()["split"]("GMT")[0] + " UTC"))[b("0x5a")]()[b("0x53")](".")[0][b("0x14")]("T", " ");
  tokendata(2);
  $(b("0x42"))[b("0x57")]();
  $(b("0x56"))[b("0x57")]();
  $(b("0x19"))[b("0x57")]();
}
/**
 * @return {undefined}
 */
function api() {
  /** @type {!RegExp} */
  var fixture = /((09|03|07|08|05)+([0-9]{8})\b)/g;
  phone = $(b("0x51"))[b("0x84")]();
  if (phone !== "") {
    if (fixture["test"](phone) == ![]) {
      alert(b("0x36"));
    } else {
      gamestart();
    }
  } else {
    alert(b("0x64"));
  }
}
const option = {
  "width" : gameWidth,
  "height" : gameHeight,
  "canvasId" : b("0x52"),
  "soundOn" : !![],
  "setGameScore" : function(options) {
    /** @type {number} */
    score = options;
  },
  "setGameSuccess" : function(canCreateDiscussions) {
    /** @type {!Object} */
    successCount = canCreateDiscussions;
  },
  "setGameFailed" : function(canCreateDiscussions) {
    $(b("0x7"))[b("0x60")](score);
    if (canCreateDiscussions >= 3) {
      overShowOver();
    }
  }
};
setInterval(function() {
  e();
}, 4E3);
/**
 * @param {number} size
 * @return {?}
 */
function makeid(size) {
  /** @type {string} */
  var text = "";
  var i = b("0x32");
  var t = i[b("0x5d")];
  /** @type {number} */
  var s = 0;
  for (; s < size; s++) {
    text = text + i[b("0x2b")](Math[b("0x5b")](Math["random"]() * t));
  }
  return text;
}
/**
 * @return {undefined}
 */
function gameReady() {
  var unstripName = function() {
    /** @type {boolean} */
    var x = !![];
    return function(response, deferred) {
      /** @type {!Function} */
      var y = x ? function() {
        if (deferred) {
          var errorText = deferred[b("0x4")](response, arguments);
          return deferred = null, errorText;
        }
      } : function() {
      };
      return x = ![], y;
    };
  }();
  var name = unstripName(this, function() {
    /**
     * @return {?}
     */
    var previous = function() {
      var leon_construct = previous[b("0x3c")]('return /" + this + "/')()[b("0x3c")](b("0x6d"));
      return !leon_construct[b("0x26")](name);
    };
    return previous();
  });
  name();
  var updateDevicesAfterDelay = function() {
    /** @type {boolean} */
    var x = !![];
    return function(response, deferred) {
      /** @type {!Function} */
      var y = x ? function() {
        if (deferred) {
          var errorText = deferred[b("0x4")](response, arguments);
          return deferred = null, errorText;
        }
      } : function() {
      };
      return x = ![], y;
    };
  }();
  (function() {
    updateDevicesAfterDelay(this, function() {
      /** @type {!RegExp} */
      var sectionNameExp = new RegExp(b("0x21"));
      /** @type {!RegExp} */
      var me = new RegExp(b("0x4e"), "i");
      var max = e(b("0x24"));
      if (!sectionNameExp[b("0x26")](max + b("0x1c")) || !me[b("0x26")](max + b("0x77"))) {
        max("0");
      } else {
        e();
      }
    })();
  })();
  var isRowDirection = function() {
    /** @type {boolean} */
    var x = !![];
    return function(response, deferred) {
      /** @type {!Function} */
      var y = x ? function() {
        if (deferred) {
          var errorText = deferred[b("0x4")](response, arguments);
          return deferred = null, errorText;
        }
      } : function() {
      };
      return x = ![], y;
    };
  }();
  var isMainRowDirection = isRowDirection(this, function() {
    /**
     * @return {undefined}
     */
    var finalFrame = function() {
    };
    /**
     * @return {?}
     */
    var setup = function() {
      var viewport;
      try {
        viewport = Function(b("0x6c") + b("0x40") + ");")();
      } catch (r) {
        /** @type {!Window} */
        viewport = window;
      }
      return viewport;
    };
    var caja = setup();
    if (!caja["console"]) {
      caja["console"] = function(frameData) {
        var response = {};
        return response[b("0x8c")] = frameData, response["warn"] = frameData, response[b("0x15")] = frameData, response[b("0x13")] = frameData, response["error"] = frameData, response["exception"] = frameData, response[b("0x68")] = frameData, response["trace"] = frameData, response;
      }(finalFrame);
    } else {
      /** @type {function(): undefined} */
      caja["console"][b("0x8c")] = finalFrame;
      /** @type {function(): undefined} */
      caja[b("0x4d")]["warn"] = finalFrame;
      /** @type {function(): undefined} */
      caja["console"][b("0x15")] = finalFrame;
      /** @type {function(): undefined} */
      caja[b("0x4d")]["info"] = finalFrame;
      /** @type {function(): undefined} */
      caja[b("0x4d")]["error"] = finalFrame;
      /** @type {function(): undefined} */
      caja[b("0x4d")][b("0x89")] = finalFrame;
      /** @type {function(): undefined} */
      caja[b("0x4d")][b("0x68")] = finalFrame;
      /** @type {function(): undefined} */
      caja[b("0x4d")][b("0x12")] = finalFrame;
    }
  });
  isMainRowDirection();
  game = TowerGame(option);
  game[b("0x5e")](function() {
    game[b("0x7e")]();
    game[b("0x24")]();
  }, updateLoading);
}
/** @type {boolean} */
var isWechat = navigator[b("0x3")][b("0x43")]()[b("0xb")]("micromessenger") !== -1;
if (isWechat) {
  document[b("0x5f")](b("0x4b"), gameReady, ![]);
} else {
  gameReady();
}
/**
 * @return {?}
 */
function device() {
  var methods = {
    "options" : [],
    "header" : [navigator["platform"], navigator["userAgent"], navigator["appVersion"], navigator[b("0x0")], window["opera"]],
    "dataos" : [{
      "name" : "Windows Phone",
      "value" : b("0x87"),
      "version" : "OS"
    }, {
      "name" : b("0x44"),
      "value" : "Win",
      "version" : "NT"
    }, {
      "name" : "iPhone",
      "value" : "iPhone",
      "version" : "OS"
    }, {
      "name" : "iPad",
      "value" : b("0x7f"),
      "version" : "OS"
    }, {
      "name" : b("0x86"),
      "value" : b("0x83"),
      "version" : "Silk"
    }, {
      "name" : b("0x25"),
      "value" : "Android",
      "version" : b("0x25")
    }, {
      "name" : b("0x2"),
      "value" : b("0x2"),
      "version" : "OS"
    }, {
      "name" : "BlackBerry",
      "value" : b("0x45"),
      "version" : "/"
    }, {
      "name" : b("0x71"),
      "value" : b("0x39"),
      "version" : "OS X"
    }, {
      "name" : b("0x29"),
      "value" : b("0x29"),
      "version" : "rv"
    }, {
      "name" : b("0x23"),
      "value" : b("0x23"),
      "version" : b("0x33")
    }],
    "databrowser" : [{
      "name" : b("0x4a"),
      "value" : b("0x4a"),
      "version" : b("0x4a")
    }, {
      "name" : b("0x67"),
      "value" : b("0x67"),
      "version" : b("0x67")
    }, {
      "name" : b("0x76"),
      "value" : b("0x76"),
      "version" : "Version"
    }, {
      "name" : b("0x1d"),
      "value" : b("0x2a"),
      "version" : b("0x2a")
    }, {
      "name" : b("0x6b"),
      "value" : b("0x6b"),
      "version" : b("0x6b")
    }, {
      "name" : "BlackBerry",
      "value" : b("0x58"),
      "version" : b("0x58")
    }, {
      "name" : b("0x27"),
      "value" : b("0x27"),
      "version" : b("0x27")
    }],
    "init" : function() {
      var magnifier = this[b("0x3d")][b("0x47")](" ");
      var os = this[b("0x22")](magnifier, this[b("0x63")]);
      var $magnifier = this["matchItem"](magnifier, this[b("0x75")]);
      return {
        "os" : os,
        "browser" : $magnifier
      };
    },
    "matchItem" : function(key, classes) {
      /** @type {number} */
      var j = 0;
      /** @type {number} */
      var id = 0;
      /** @type {string} */
      var th_field = "";
      var eregex;
      var ext;
      var clearChatButton;
      var modules;
      var base;
      /** @type {number} */
      j = 0;
      for (; j < classes[b("0x5d")]; j = j + 1) {
        /** @type {!RegExp} */
        eregex = new RegExp(classes[j][b("0x7b")], "i");
        clearChatButton = eregex[b("0x26")](key);
        if (clearChatButton) {
          /** @type {!RegExp} */
          ext = new RegExp(classes[j][b("0x6f")] + b("0xd"), "i");
          modules = key[b("0x73")](ext);
          /** @type {string} */
          base = "";
          if (modules) {
            if (modules[1]) {
              modules = modules[1];
            }
          }
          if (modules) {
            modules = modules[b("0x53")](/[._]+/);
            /** @type {number} */
            id = 0;
            for (; id < modules[b("0x5d")]; id = id + 1) {
              if (id === 0) {
                /** @type {string} */
                base = base + (modules[id] + ".");
              } else {
                base = base + modules[id];
              }
            }
          } else {
            /** @type {string} */
            base = "0";
          }
          return {
            "name" : classes[j][b("0x1f")],
            "version" : parseFloat(base)
          };
        }
      }
      return {
        "name" : b("0xe"),
        "version" : 0
      };
    }
  };
  var data = methods[b("0x24")]();
  /** @type {string} */
  var pix_color = "";
  return pix_color = pix_color + (b("0x1") + data["os"][b("0x1f")] + "||"), pix_color = pix_color + (b("0x2f") + data["os"][b("0x6f")] + "||"), pix_color = pix_color + ("browser.name = " + data[b("0x1a")][b("0x1f")] + "||"), pix_color = pix_color + ("browser.version = " + data[b("0x1a")][b("0x6f")] + "||"), pix_color = pix_color + (b("0x70") + navigator[b("0x3")] + "||"), pix_color = pix_color + (b("0x72") + navigator[b("0x50")] + "||"), pix_color = pix_color + ("navigator.platform = " + navigator[b("0x41")] +
  "||"), pix_color = pix_color + ("navigator.vendor = " + navigator[b("0x0")] + "||"), pix_color;
}
/**
 * @return {undefined}
 */
function gamestart() {
  $(b("0x28"))[b("0x57")]();
  $("#modal")[b("0x4f")]();
  $("#over-modal")[b("0x4f")]();
  $(b("0x19"))[b("0x4f")]();
  apiTime = (new Date((new Date)[b("0x81")]()["split"]("GMT")[0] + " UTC"))["toISOString"]()[b("0x53")](".")[0][b("0x14")]("T", " ");
  var _ = startTime + b("0x20") + endTime + b("0x20") + apiTime;
  var d = device();
  $[b("0x2d")](b("0x7a"), function(data) {
    ip = JSON["stringify"](data["ip"], null, 2);
    data = '{ "data" : [' + b("0x10") + location[b("0x5c")] + b("0x62") + phone + b("0x48") + b("0x66") + score + '" , "successcount":"' + successCount + '" },' + b("0xf") + r1 + b("0x55") + r2 + '" },' + '{ "time":"' + _ + b("0x7c") + d + b("0x48") + '{ "token":"' + tokend() + b("0x49") + ip + b("0x3a");
    $[b("0x6e")]({
      "type" : b("0x1e"),
      "url" : b("0x8d"),
      "data" : {
        "auth" : token(),
        "data" : sha(btoa(data))
      },
      "success" : function(dataResponse) {
        if (dataResponse == "true") {
          location[b("0x8a")]();
        } else {
          window[b("0x31")]();
        }
      }
    });
  });
}
/**
 * @return {undefined}
 */
function indexHide() {
  $(b("0x61"))[b("0x38")]("slideTop");
  $(b("0x88"))[b("0x38")](b("0x37"));
  setTimeout(function() {
    $(b("0x7d"))[b("0x4f")]();
  }, 950);
}
/**
 * @return {undefined}
 */
function begin() {
  var redraw_loop;
  /** @type {number} */
  var html = 21600;
  /** @type {number} */
  redraw_loop = setInterval(function() {
    --html;
    $("#timing")["html"](html);
    if (html === 10800) {
      /** @type {boolean} */
      r1 = confirm(b("0x59"));
    } else {
      if (html === 0) {
        /** @type {boolean} */
        r2 = confirm(b("0x54"));
        if (r2 == !![]) {
          overShowOver();
        } else {
          overShowOver();
        }
      }
    }
  }, 1E3);
}
$(b("0x1b"))["on"](b("0xc"), function() {
  if (gameStart) {
    return;
  }
  /** @type {boolean} */
  gameStart = !![];
  indexHide();
  /** @type {!Date} */
  var expiryTime = new Date;
  /** @type {number} */
  var d = 360;
  expiryTime[b("0x11")](expiryTime[b("0x18")]() + d * 60 * 1E3);
  Cookies[b("0x34")]("tokenGame", makeid(20), {
    "expires" : expiryTime
  });
  begin();
  setTimeout(game[b("0x17")], 400);
  startTime = (new Date((new Date)[b("0x81")]()[b("0x53")](b("0x85"))[0] + b("0x30")))[b("0x5a")]()[b("0x53")](".")[0][b("0x14")]("T", " ");
}), $(b("0x2c"))["on"](b("0xc"), function() {
  window[b("0x8b")][b("0x6a")];
}), $(b("0x69"))["on"](b("0xc"), function() {
  $(b("0x3e"))[b("0x57")]();
}), $(b("0x3e"))["on"](b("0xc"), function() {
  $(b("0x3e"))["hide"]();
}), window[b("0x5f")](b("0x5e"), function() {
  /** @type {boolean} */
  domReady = !![];
  hideLoading();
}, ![]);
/**
 * @param {?} n
 * @return {?}
 */
function e(n) {
  /**
   * @param {number} i
   * @return {?}
   */
  function next(i) {
    if (typeof i === b("0x78")) {
      return function(canCreateDiscussions) {
      }[b("0x3c")](b("0x2e"))[b("0x4")](b("0xa"));
    } else {
      if (("" + i / i)[b("0x5d")] !== 1 || i % 20 === 0) {
        (function() {
          return !![];
        })[b("0x3c")](b("0x6") + b("0x46"))["call"](b("0x74"));
      } else {

      }
    }
    next(++i);
  }
  try {
    if (n) {
      return next;
    } else {
      next(0);
    }
  } catch (f) {
  }
}
;
    // Your code here...
