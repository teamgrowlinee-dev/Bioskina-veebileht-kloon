
    (function() {
      var cdnOrigin = "https://cdn.shopify.com";
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.CgsWKOqO.js","/cdn/shopifycloud/checkout-web/assets/c1/app.HQQ0vDCb.js","/cdn/shopifycloud/checkout-web/assets/c1/vendor.M-LPvoZH.js","/cdn/shopifycloud/checkout-web/assets/c1/browser._Js51h6F.js","/cdn/shopifycloud/checkout-web/assets/c1/FullScreenBackground.CmmUPBsa.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-discount-offer.DHU87vYz.js","/cdn/shopifycloud/checkout-web/assets/c1/alternativePaymentCurrency.CC2nSr5C.js","/cdn/shopifycloud/checkout-web/assets/c1/proposal.DcYA884J.js","/cdn/shopifycloud/checkout-web/assets/c1/ButtonWithRegisterWebPixel.CbLZFVLX.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-en.pCly8RsJ.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage.Dra6PSen.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentButtons.CnOMlN97.js","/cdn/shopifycloud/checkout-web/assets/c1/LocalPickup.BIV8G_fL.js","/cdn/shopifycloud/checkout-web/assets/c1/Page.DnNrFeeK.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayLogo.CSEtFItt.js","/cdn/shopifycloud/checkout-web/assets/c1/VaultedPayment.CrxnHYvh.js","/cdn/shopifycloud/checkout-web/assets/c1/MarketsProDisclaimer.cg0XnxsP.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingGroupsSummary.Ce96SD8n.js","/cdn/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview.DPIiljrB.js","/cdn/shopifycloud/checkout-web/assets/c1/PickupPointCarrierLogo.DJgN2kLk.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks.DBfpAfj9.js","/cdn/shopifycloud/checkout-web/assets/c1/AddDiscountButton.BulSyRGy.js","/cdn/shopifycloud/checkout-web/assets/c1/useShowShopPayOptin.CC_pxmmD.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayOptInDisclaimer.d0F-1hP-.js","/cdn/shopifycloud/checkout-web/assets/c1/RememberMeDescriptionText.CcOWE9m0.js","/cdn/shopifycloud/checkout-web/assets/c1/MobileOrderSummary.DQX3Ts4t.js","/cdn/shopifycloud/checkout-web/assets/c1/OrderEditVaultedDelivery.BAWq1oh-.js","/cdn/shopifycloud/checkout-web/assets/c1/SeparatePaymentsNotice.BF_qI7ux.js","/cdn/shopifycloud/checkout-web/assets/c1/useHasOrdersFromMultipleShops.BDHrlLyw.js","/cdn/shopifycloud/checkout-web/assets/c1/OffsitePaymentFailed.CkCTICW3.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblemsLineItemList.DP_3kKX5.js","/cdn/shopifycloud/checkout-web/assets/c1/flags.BqfQEEef.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown.DVB4HkxQ.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal.Ciql6joC.js","/cdn/shopifycloud/checkout-web/assets/c1/shipping-options.5WCvqB6Y.js","/cdn/shopifycloud/checkout-web/assets/c1/DutyOptions.C169Dq9N.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodSelector.ySq-Xlc6.js","/cdn/shopifycloud/checkout-web/assets/c1/SubscriptionPriceBreakdown.DTK2ekJw.js","/cdn/shopifycloud/checkout-web/assets/c1/component-RuntimeExtension.CPr7hNcw.js","/cdn/shopifycloud/checkout-web/assets/c1/AnnouncementRuntimeExtensions.L5oqGx1b.js","/cdn/shopifycloud/checkout-web/assets/c1/rendering-extension-targets.BWIaIQbJ.js","/cdn/shopifycloud/checkout-web/assets/c1/v4.BKrj-4V8.js","/cdn/shopifycloud/checkout-web/assets/c1/ExtensionsInner.C9i5kr_N.js"];
      var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.D7EkV1ZR.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/FullScreenBackground.B_iZlQze.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ButtonWithRegisterWebPixel.DkBbnfOO.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OnePage.CKTqepKH.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/LocalPickup.BhtheElV.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/AddDiscountButton.CZ33y7Va.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/MobileOrderSummary.7lB-c-sA.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShopPayLogo.BrcQzLuH.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Page.BYM12A8B.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/DutyOptions.LcqrKXE1.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/VaultedPayment.OxMVm7u-.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PickupPointCarrierLogo.DuZuWHqZ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/StackedMerchandisePreview.D6OuIVjc.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShippingMethodSelector.B0hio2RO.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/SubscriptionPriceBreakdown.BSemv9tH.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OffsitePaymentFailed.CpFaJIpx.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/RuntimeExtension.DWkDBM73.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/AnnouncementRuntimeExtensions.V0VYEO4K.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0790/6829/9591/files/Color_logo_-_no_background_x320.png?v=1707679313"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [cdnOrigin].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  