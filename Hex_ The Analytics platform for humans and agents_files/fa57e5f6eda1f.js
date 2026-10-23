//15.270.0+fix-ed4a84aa-es2019 (fa57e5f6eda1f)
var CS_CONF={"collectionEnabled":true,"isLegacyHJ":false,"projectId":907728,"status":1,"hostnames":[""],"crossDomainTracking":0,"crossDomainSingleIframeTracking":0,"consentRequired":0,"allowSubdomains":1,"visitorCookieTimeout":34164000000,"sampleRate":100,"replayRecordingRate":100,"validationRate":10,"lastTrackingDraw":null,"trackerDomain":"c.ba.contentsquare.net","recordingDomain":"r.contentsquare.net","useMalkaPipeline":1,"malkaQuotaServiceDomain":"q.ba.contentsquare.net","malkaRecordingDomain":"k.ba.contentsquare.net","ed":"l.contentsquare.net/log/web","eMerchandisingEnabled":0,"mouseMoveHeatmapEnabled":1,"jsErrorsEnabled":1,"customErrorsEnabled":0,"jsCustomErrorsEnabled":0,"apiErrorsEnabled":0,"customHashIdEnabled":0,"recordingEncryptionEnabled":0,"recordingEncryptionPublicKey":null,"recordingEncryptionPublicKeyId":0,"secureCookiesEnabled":1,"triggerSessionReplayEnabled":0,"triggerSessionReplayRegex":null,"dynamicIdRegex":null,"whitelistedAttributes":null,"replayRecordingUnmaskedUrlRegex":null,"replayRecordingUnmaskedUrlRegexRules":[],"replayRecordingMaskedUrlRegexRules":[{"operator":"contain","value":".*","ignoreQueryParams":1,"ignoreURIFragments":1,"ignoreCaseSensitivity":1,"maskMedia":0}],"replayRecordingMaskedUrlRegex":null,"anonymisationMethod":"replayRecordingMaskedUrlRegexRules","anonymizeDigits":true,"maskMedia":false,"tagDeploymentMode":"CONTENTSQUARE","experimental":null,"iframesTracking":1,"textVisibilityEnabled":0,"cookielessTrackingEnabled":0,"malkaUrlEnabled":0,"malkaEtrEnabled":0,"pathComputationRules":{},"asyncSerializerEnabled":1,"pendingInactivityTimeout":5000,"accessibilityEnabled":1,"taskSchedulerOptions":{"enabled":1},"uxaDomain":"app.contentsquare.com","webviewsTrackingEnabled":0,"staticResourceManagerDomain":"srm.ba.contentsquare.net","useStaticResourceManager":1,"performanceTimingOptions":{"withResource":false,"withNavigation":false},"replayConsentRequiredForSession":0,"displayAdOptions":null,"implementations":[{"template":{"name":"ArtificialPageview","args":{}},"triggers":[{"name":"HistoryChange","args":{"listeners":"popstate, pushState, replaceState","useDebounce":"no","window":400}}]}],"eventsApiEnabled":0,"dynamicConfDomain":"t.contentsquare.net/settings","collectHierarchy":0,"collectSubmit":0,"collectTargetText":1,"tagVerificationDomain":"tcvsapi.contentsquare.com","tagVerificationEnabled":true,"startMode":1,"voc":{"siteId":null,"enabled":0},"quotas":[{"quotaType":"ANALYTICS","value":1},{"quotaType":"RECORDING","value":0.05}],"trackingCodeVerified":true,"urlBlacklist":null,"useBootstrapFile":true};
CS_CONF.tagHost=(function(s){var h=/^[a-z][a-z0-9+.-]*:\/\/([^\/?#:]+)/i.exec(s);h=h?h[1].toLowerCase():"";return /(^|\.)contentsquare\.net$/.test(h)?"contentsquare":/(^|\.)clicktale\.net$/.test(h)?"clicktale":"self"})((document.currentScript||{}).src||"");
function injectTag(stable, candidate, share) {
  if (typeof CS_CONF === "undefined") {
    return;
  }
  const d2 = document;
  const logUrl = `https://${CS_CONF.ed}`;
  const pid = CS_CONF.projectId;
  const w2 = window;
  const injectedPids = w2.CS_TAG_PIDS = w2.CS_TAG_PIDS || {};
  const injected = injectedPids[String(pid)];
  if (injected) {
    if (injected !== 1) CS_CONF.rollout = injected.rollout;
    return;
  }
  const n2 = navigator;
  const isBot = n2.webdriver === true || /bot[/;-]|\bbot\b|spider|crawl|slurp|headlesschrome|lighthouse|prerender|google-inspectiontool|facebookexternalhit|mediapartners/i.test(
    n2.userAgent || ""
  );
  const rollout = candidate && share && !isBot ? { arm: Math.random() < share ? "candidate" : "stable", share } : null;
  CS_CONF.rollout = rollout;
  injectedPids[String(pid)] = { rollout };
  function log2(message2, level = "critical") {
    const page = location.origin + location.pathname;
    const msg = `${logUrl}?a=uxa&l=${level}&m=${encodeURIComponent(message2)}&pid=${pid}&p=${encodeURIComponent(page)}`;
    fetch(msg, { mode: "cors", credentials: "omit", keepalive: true }).catch(
      () => {
        const image = new Image();
        image.crossOrigin = "anonymous";
        image.src = msg;
      }
    );
  }
  const currentScript = document.currentScript;
  const hjDomains = ["static-integration.hotjar.com", "static.hotjar.com"];
  const isHotjar = hjDomains.some((x2) => currentScript?.src.includes(x2));
  const origin = isHotjar ? new URL(currentScript.src).origin : "https://t.contentsquare.net";
  const path2 = rollout?.arm === "candidate" && candidate ? candidate : stable;
  const expectedSrc = new URL(`${origin}/${path2}`).href;
  const element = d2.createElement("script");
  let stopped = false;
  let errorTimer;
  const observer = new MutationObserver((records) => checkAttributes(records));
  function cleanup() {
    stopped = true;
    clearTimeout(errorTimer);
    observer.disconnect();
    d2.removeEventListener("securitypolicyviolation", onCsp);
    element.onload = null;
    element.onerror = null;
  }
  function report(cause) {
    log2(`Bootstrap error: ${cause}`);
  }
  function checkAttributes(records = observer.takeRecords()) {
    if (stopped) return true;
    for (const attribute of ["src", "type"]) {
      const expected = attribute === "src" ? expectedSrc : null;
      const observed = element.getAttribute(attribute);
      if (attribute === "src" && element.src !== expectedSrc || observed !== expected || records.some(
        (record) => record.attributeName === attribute && record.oldValue !== expected
      )) {
        cleanup();
        report(`${attribute} changed observed=${JSON.stringify(observed)}`);
        return true;
      }
    }
    return false;
  }
  function onCsp(event) {
    if (stopped || !event.isTrusted || event.disposition !== "enforce" || !["script-src", "script-src-elem"].includes(event.effectiveDirective) || event.blockedURI !== expectedSrc && !(event.target === element && event.blockedURI === origin)) {
      return;
    }
    if (checkAttributes()) return;
    cleanup();
    report(
      `csp blocked directive=${event.effectiveDirective} blockedURI=${event.blockedURI}`
    );
  }
  d2.addEventListener("securitypolicyviolation", onCsp);
  element.onload = () => {
    if (!checkAttributes()) cleanup();
  };
  element.onerror = () => {
    if (checkAttributes() || errorTimer !== void 0) return;
    errorTimer = setTimeout(() => {
      if (checkAttributes()) return;
      cleanup();
      report("others");
    }, 0);
  };
  try {
    element.src = expectedSrc;
    element.async = true;
    element.fetchPriority = "high";
    element.crossOrigin = "anonymous";
    if (!checkAttributes()) {
      observer.observe(element, {
        attributes: true,
        attributeFilter: ["src", "type"],
        attributeOldValue: true
      });
    }
    (d2.head || d2.documentElement).appendChild(element);
    checkAttributes();
  } catch (error2) {
    cleanup();
    throw error2;
  }
}
injectTag("releases/15.270.0%2Bfix-ed4a84aa/es2019/13c0104-0fc46f71.js");

// signature-61bbe031574351fca8333ad3de441b138d901a5655c1cfe48e600e8f8ecfd01d