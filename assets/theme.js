/*
 * @license
 * Broadcast Theme (c) Invisible Themes
 *
 * The contents of this file should not be modified.
 * add any minor changes to assets/custom.js
 *
 */
! function(t, e, i, s, r, o, n) {
	"use strict";

	function a(t) {
		t.querySelectorAll(".form-field").forEach(t => {
			let e = t.querySelector("label"),
				i = t.querySelector("input, textarea");
			e && i && (i.addEventListener("keyup", t => {
				"" !== t.target.value ? e.classList.add("label--float") : e.classList.remove("label--float")
			}), i.value && i.value.length && e.classList.add("label--float"))
		})
	}! function() {
		let t = {
			NODE_ENV: "production"
		};
		try {
			if (process) return process.env = Object.assign({}, process.env), void Object.assign(process.env, t)
		} catch (e) {}
		globalThis.process = {
			env: t
		}
	}(), window.theme = window.theme || {}, window.theme.sizes = {
		mobile: 480,
		small: 750,
		large: 990,
		widescreen: 1400
	}, window.theme.focusable = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
	let l = p();

	function h() {
		let t = {};
		return t.windowHeight = Math.min(window.screen.height, window.innerHeight), t.footerHeight = m('[data-section-type*="footer"]'), t.headerHeight = m("[data-header-height]"), t.stickyHeaderHeight = document.querySelector("[data-header-sticky]") ? t.headerHeight : 0, t.collectionNavHeight = m("[data-collection-nav]"), t.logoHeight = function() {
			let t = m("[data-footer-logo]");
			return t > 0 ? t + 20 : 0
		}(), t
	}

	function c() {
		document.addEventListener("theme:resize", u), d()
	}

	function d() {
		let {
			windowHeight: t,
			headerHeight: e,
			logoHeight: i,
			footerHeight: s,
			collectionNavHeight: r
		} = h();
		document.documentElement.style.setProperty("--full-height", `${t}px`), document.documentElement.style.setProperty("--three-quarters", t * (3 / 4) + "px"), document.documentElement.style.setProperty("--two-thirds", t * (2 / 3) + "px"), document.documentElement.style.setProperty("--one-half", t / 2 + "px"), document.documentElement.style.setProperty("--one-third", t / 3 + "px"), document.documentElement.style.setProperty("--collection-nav-height", `${r}px`), document.documentElement.style.setProperty("--header-height", `${e}px`), document.documentElement.style.setProperty("--footer-height", `${s}px`), document.documentElement.style.setProperty("--content-full", t - e - i / 2 + "px"), document.documentElement.style.setProperty("--content-min", t - e - s + "px"), document.querySelector("[data-tracking-consent].popup-cookies--bottom") && document.documentElement.style.setProperty("--cookie-bar-height", `${document.querySelector("[data-tracking-consent].popup-cookies--bottom").offsetHeight}px`)
	}

	function u() {
		let {
			windowHeight: t,
			headerHeight: e,
			logoHeight: i,
			footerHeight: s,
			collectionNavHeight: r
		} = h(), o = p();
		(o !== l || window.innerWidth > window.theme.sizes.mobile) && (document.documentElement.style.setProperty("--full-height", `${t}px`), document.documentElement.style.setProperty("--three-quarters", t * (3 / 4) + "px"), document.documentElement.style.setProperty("--two-thirds", t * (2 / 3) + "px"), document.documentElement.style.setProperty("--one-half", t / 2 + "px"), document.documentElement.style.setProperty("--one-third", t / 3 + "px"), l = o), document.documentElement.style.setProperty("--collection-nav-height", `${r}px`), document.documentElement.style.setProperty("--header-height", `${e}px`), document.documentElement.style.setProperty("--footer-height", `${s}px`), document.documentElement.style.setProperty("--content-full", t - e - i / 2 + "px"), document.documentElement.style.setProperty("--content-min", t - e - s + "px"), document.querySelector("[data-tracking-consent].popup-cookies--bottom") && document.documentElement.style.setProperty("--cookie-bar-height", `${document.querySelector("[data-tracking-consent].popup-cookies--bottom").offsetHeight}px`)
	}

	function p() {
		return window.matchMedia("(orientation: portrait)").matches ? "portrait" : window.matchMedia("(orientation: landscape)").matches ? "landscape" : void 0
	}

	function m(t) {
		let e = document.querySelector(t);
		return e ? e.offsetHeight : 0
	}
	window.initialWindowHeight = Math.min(window.screen.height, window.innerHeight);
	let g = !1,
		v = !1;

	function y() {
		setTimeout(() => {
			if (g) return;
			if (!v) return void y();
			let t = document.querySelectorAll('img[loading="lazy"]');
			t.length && t.forEach(t => {}), g = !0
		}, 3e3)
	}

	function f(t, e) {
		let i;
		return function() {
			if (t) {
				let s = () => t.apply(this, arguments);
				clearTimeout(i), i = setTimeout(s, e)
			}
		}
	}

	function b() {
		return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
	}

	function S() {
		return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
	}

	function E() {
		return b() >= window.theme.sizes.small
	}

	function L() {
		return b() < window.theme.sizes.small
	}
	let w = b(),
		k = S(),
		A = window.pageYOffset,
		$ = null,
		T = null,
		q = null,
		C = null,
		x = 0;

	function _() {
		t.clearQueueScrollLocks(), t.enablePageScroll(), document.documentElement.removeAttribute("data-scroll-locked")
	}
	let P = (t, e = "", i) => {
		let s = i || document.createElement("div");
		return s.classList.add(e), t.parentNode.insertBefore(s, t), s.appendChild(t)
	};

	function H(t) {
		t.querySelectorAll(".rte table").forEach(t => {
			P(t, "rte__table-wrapper")
		}), t.querySelectorAll('.rte iframe[src*="youtube.com/embed"], .rte iframe[src*="player.vimeo"], .rte iframe#admin_bar_iframe').forEach(t => {
			P(t, "rte__video-wrapper")
		})
	}

	function B(t) {
		let e = t.querySelectorAll("[data-aria-toggle]");
		e.length && e.forEach(t => {
			t.addEventListener("click", function(t) {
				t.preventDefault();
				let e = t.currentTarget;
				e.setAttribute("aria-expanded", "false" == e.getAttribute("aria-expanded") ? "true" : "false");
				let i = e.getAttribute("aria-controls"),
					s = document.querySelector(`#${i}`),
					r = () => {
						s.classList.remove("expanding"), s.removeEventListener("transitionend", r)
					},
					o = () => {
						s.classList.add("expanding"), s.removeEventListener("transitionstart", o)
					};
				s.addEventListener("transitionstart", o), s.addEventListener("transitionend", r), s.classList.toggle("expanded")
			})
		})
	}
	let D = "is-loading";

	function M(t, e) {
		e = e || {};
		var i = t.tabIndex;
		t.tabIndex = -1, t.dataset.tabIndex = i, t.focus(), void 0 !== e.className && t.classList.add(e.className), t.addEventListener("blur", function s(r) {
			r.target.removeEventListener(r.type, s), t.tabIndex = i, delete t.dataset.tabIndex, void 0 !== e.className && t.classList.remove(e.className)
		})
	}

	function I(t) {
		return Array.prototype.slice.call(t.querySelectorAll("[tabindex],[draggable],a[href],area,button:enabled,input:not([type=hidden]):enabled,object,select:enabled,textarea:enabled")).filter(function(t) {
			var e, i;
			return !(!(t.offsetWidth || t.offsetHeight || t.getClientRects().length) || (e = t, "none" === (i = window.getComputedStyle(e)).display || "hidden" === i.visibility))
		})
	}
	var F = {};

	function O() {
		document.removeEventListener("focusin", F.focusin), document.removeEventListener("focusout", F.focusout), document.removeEventListener("keydown", F.keydown)
	}
	var R = Object.freeze({
		__proto__: null,
		forceFocus: M,
		focusHash: function(t) {
			t = t || {};
			var e = window.location.hash,
				i = document.getElementById(e.slice(1));
			if (i && t.ignore && i.matches(t.ignore)) return !1;
			e && i && M(i, t)
		},
		bindInPageLinks: function(t) {
			return t = t || {}, Array.prototype.slice.call(document.querySelectorAll('a[href^="#"]')).filter(function(e) {
				if ("#" === e.hash || "" === e.hash || t.ignore && e.matches(t.ignore) || (i = e.hash.substr(1), null === document.getElementById(i))) return !1;
				var i, s = document.querySelector(e.hash);
				return !!s && (e.addEventListener("click", function() {
					M(s, t)
				}), !0)
			})
		},
		focusable: I,
		trapFocus: function(t, e) {
			e = e || {};
			var i = I(t),
				s = e.elementToFocus || t,
				r = i[0],
				o = i[i.length - 1];
			O(), F.focusin = function(e) {
				t !== e.target && !t.contains(e.target) && r && r === e.target && r.focus(), e.target !== t && e.target !== o && e.target !== r || document.addEventListener("keydown", F.keydown)
			}, F.focusout = function() {
				document.removeEventListener("keydown", F.keydown)
			}, F.keydown = function(e) {
				"Tab" !== e.code || (e.target !== o || e.shiftKey || (e.preventDefault(), r.focus()), (e.target === t || e.target === r) && e.shiftKey && (e.preventDefault(), o.focus()))
			}, document.addEventListener("focusout", F.focusout), document.addEventListener("focusin", F.focusin), M(s, e)
		},
		removeTrapFocus: O,
		accessibleLinks: function(t, e) {
			if ("string" != typeof t) throw TypeError(t + " is not a String.");
			if (0 !== (t = document.querySelectorAll(t)).length) {
				(e = e || {}).messages = e.messages || {};
				var i, s, r, o = {
						newWindow: e.messages.newWindow || "Opens in a new window.",
						external: e.messages.external || "Opens external website.",
						newWindowExternal: e.messages.newWindowExternal || "Opens external website in a new window."
					},
					n = e.prefix || "a11y",
					a = {
						newWindow: n + "-new-window-message",
						external: n + "-external-message",
						newWindowExternal: n + "-new-window-external-message"
					};
				t.forEach(function(t) {
					var e, i = t.getAttribute("target"),
						s = t.getAttribute("rel"),
						r = (e = t).hostname !== window.location.hostname,
						o = "_blank" === i,
						n = null === s || -1 === s.indexOf("noopener");
					o && n && t.setAttribute("rel", null === s ? "noopener" : s + " noopener"), r && o ? t.setAttribute("aria-describedby", a.newWindowExternal) : r ? t.setAttribute("aria-describedby", a.external) : o && t.setAttribute("aria-describedby", a.newWindow)
				}), i = o, s = document.createElement("ul"), r = Object.keys(i).reduce(function(t, e) {
					return t + "<li id=" + a[e] + ">" + i[e] + "</li>"
				}, ""), s.setAttribute("hidden", !0), s.innerHTML = r, document.body.appendChild(s)
			}
		}
	});
	let z = 'input[type="search"]',
		N = "hidden",
		W = class extends HTMLElement {
			toggleResetButton() {
				let t = this.resetButton.classList.contains(N);
				this.input.value.length > 0 && t ? this.resetButton.classList.remove(N) : 0 !== this.input.value.length || t || this.resetButton.classList.add(N)
			}
			onChange() {
				this.toggleResetButton()
			}
			shouldResetForm() {
				return !document.querySelector('[aria-selected="true"] a')
			}
			onFormReset(t) {
				t.preventDefault(), this.shouldResetForm() && (this.input.value = "", this.toggleResetButton(), t.target.querySelector(z).focus())
			}
			constructor() {
				super(), this.input = this.querySelector(z), this.resetButton = this.querySelector('button[type="reset"]'), this.input && (this.input.form.addEventListener("reset", this.onFormReset.bind(this)), this.input.addEventListener("input", f(t => {
					this.onChange(t)
				}, 300).bind(this)))
			}
		};
	customElements.define("header-search-form", W);
	let U = '[aria-selected="true"]',
		V = '[aria-selected="true"] a',
		j = class extends W {
			connectedCallback() {
				this.input.addEventListener("focus", this.onFocus.bind(this)), this.input.form.addEventListener("submit", this.onFormSubmit.bind(this)), this.addEventListener("focusout", this.onFocusOut.bind(this)), this.addEventListener("keyup", this.onKeyup.bind(this)), this.addEventListener("keydown", this.onKeydown.bind(this))
			}
			getQuery() {
				return this.input.value.trim()
			}
			onChange() {
				var t;
				super.onChange();
				let e = this.getQuery();
				this.searchTerm && e.startsWith(this.searchTerm) || null === (t = this.querySelector("[data-search-results-groups-wrapper]")) || void 0 === t || t.remove(), this.updateSearchForTerm(this.searchTerm, e), this.searchTerm = e, this.searchTerm.length ? this.getSearchResults(this.searchTerm) : this.reset()
			}
			onFormSubmit(t) {
				this.getQuery().length && !this.querySelector(V) || t.preventDefault()
			}
			onFormReset(t) {
				super.onFormReset(t), super.shouldResetForm() && (this.searchTerm = "", this.abortController.abort(), this.abortController = new AbortController, this.closeResults(!0))
			}
			shouldResetForm() {
				return !document.querySelector(V)
			}
			onFocus() {
				let t = this.getQuery();
				t.length && (this.searchTerm !== t ? this.onChange() : "true" === this.getAttribute("results") ? this.open() : this.getSearchResults(this.searchTerm))
			}
			onFocusOut() {
				setTimeout(() => {
					this.contains(document.activeElement) || this.close()
				})
			}
			onKeyup(t) {
				switch (this.getQuery().length || this.close(!0), t.preventDefault(), t.code) {
					case "ArrowUp":
						this.switchOption("up");
						break;
					case "ArrowDown":
						this.switchOption("down");
						break;
					case "Enter":
						this.selectOption()
				}
			}
			onKeydown(t) {
				"ArrowUp" !== t.code && "ArrowDown" !== t.code || t.preventDefault()
			}
			updateSearchForTerm(t, e) {
				let i = this.querySelector("[data-predictive-search-search-for-text]"),
					s = null == i ? void 0 : i.innerText;
				if (s) {
					var r;
					if ((null === (r = s.match(RegExp(t, "g"))) || void 0 === r ? void 0 : r.length) > 1) return;
					let o = s.replace(t, e);
					i.innerText = o
				}
			}
			switchOption(t) {
				if (!this.getAttribute("open")) return;
				let e = "up" === t,
					i = this.querySelector(U),
					s = Array.from(this.querySelectorAll('[role="option"]')).filter(t => null !== t.offsetParent),
					r = 0;
				if (e && !i) return;
				let o = -1,
					n = 0;
				for (; - 1 === o && n <= s.length;) s[n] === i && (o = n), n++;
				if (this.statusElement.textContent = "", !e && i ? r = o === s.length - 1 ? 0 : o + 1 : e && (r = 0 === o ? s.length - 1 : o - 1), r === o) return;
				let a = s[r];
				a.setAttribute("aria-selected", !0), i && i.setAttribute("aria-selected", !1), this.input.setAttribute("aria-activedescendant", a.id)
			}
			selectOption() {
				let t = this.querySelector('[aria-selected="true"] a, button[aria-selected="true"]');
				t && t.click()
			}
			getSearchResults(t) {
				let e = t.replace(" ", "-").toLowerCase();
				this.setLiveRegionLoadingState(), this.cachedResults[e] ? this.renderSearchResults(this.cachedResults[e]) : fetch(`${theme.routes.predictive_search_url}?q=${encodeURIComponent(t)}&section_id=predictive-search`, {
					signal: this.abortController.signal
				}).then(t => {
					if (!t.ok) {
						var e = Error(t.status);
						throw this.close(), e
					}
					return t.text()
				}).then(t => {
					let i = (new DOMParser).parseFromString(t, "text/html").querySelector("#shopify-section-predictive-search").innerHTML;
					this.allPredictiveSearchInstances.forEach(t => {
						t.cachedResults[e] = i
					}), this.renderSearchResults(i)
				}).catch(t => {
					if (20 !== (null == t ? void 0 : t.code)) throw this.close(), t
				})
			}
			setLiveRegionLoadingState() {
				this.statusElement = this.statusElement || this.querySelector("[data-predictive-search-status]"), this.loadingText = this.loadingText || this.getAttribute("data-loading-text"), this.setLiveRegionText(this.loadingText), this.setAttribute("loading", !0)
			}
			setLiveRegionText(t) {
				this.statusElement.setAttribute("aria-hidden", "false"), this.statusElement.textContent = t, setTimeout(() => {
					this.statusElement.setAttribute("aria-hidden", "true")
				}, 1e3)
			}
			renderSearchResults(t) {
				this.predictiveSearchResults.innerHTML = t, this.setAttribute("results", !0), this.setLiveRegionResults(), this.open()
			}
			setLiveRegionResults() {
				this.removeAttribute("loading"), this.setLiveRegionText(this.querySelector("[data-predictive-search-live-region-count-value]").textContent)
			}
			open() {
				this.setAttribute("open", !0), this.input.setAttribute("aria-expanded", !0), this.isOpen = !0
			}
			close(t = !1) {
				this.closeResults(t), this.isOpen = !1
			}
			closeResults(t = !1) {
				var e;
				t && (this.input.value = "", this.removeAttribute("results"));
				let i = this.querySelector(U);
				i && i.setAttribute("aria-selected", !1), this.input.setAttribute("aria-activedescendant", ""), this.removeAttribute("loading"), this.removeAttribute("open"), this.input.setAttribute("aria-expanded", !1), this.resultsMaxHeight = !1, null === (e = this.predictiveSearchResults) || void 0 === e || e.removeAttribute("style")
			}
			reset() {
				this.predictiveSearchResults.innerHTML = "", this.input.val = "", this.a11y.removeTrapFocus(), this.popularSearches && (this.input.dispatchEvent(new Event("blur", {
					bubbles: !1
				})), this.a11y.trapFocus(this.searchPopdown, {
					elementToFocus: this.input
				}))
			}
			constructor() {
				var t;
				super(), this.a11y = R, this.abortController = new AbortController, this.allPredictiveSearchInstances = document.querySelectorAll("predictive-search"), this.cachedResults = {}, this.input = this.querySelector('input[type="search"]'), this.isOpen = !1, this.predictiveSearchResults = this.querySelector("[data-predictive-search-results]"), this.searchPopdown = this.closest("[data-popdown]"), this.popularSearches = null === (t = this.searchPopdown) || void 0 === t ? void 0 : t.querySelector("[data-popular-searches]"), this.searchTerm = ""
			}
		},
		X = "[data-popout-toggle]",
		J = "[data-popout-option]",
		G = "popout-list--visible",
		Q = "is-active",
		Y = "select-popout--top",
		K = "aria-expanded",
		Z = "aria-current",
		tt = "data-value",
		te = "data-popout-toggle-text",
		ti = class extends HTMLElement {
			connectedCallback() {
				this.popoutList = this.querySelector("[data-popout-list]"), this.popoutToggle = this.querySelector(X), this.popoutToggleText = this.querySelector("[data-popout-toggle-text]"), this.popoutInput = this.querySelector("[data-popout-input]"), this.popoutOptions = this.querySelectorAll(J), this.productGrid = this.popoutList.closest("[data-product-grid-item]"), this.fireSubmitEvent = this.hasAttribute("submit"), this.popupToggleFocusoutEvent = t => this.onPopupToggleFocusout(t), this.popupListFocusoutEvent = t => this.onPopupListFocusout(t), this.popupToggleClickEvent = t => this.onPopupToggleClick(t), this.keyUpEvent = t => this.onKeyUp(t), this.bodyClickEvent = t => this.onBodyClick(t), this._connectOptions(), this._connectToggle(), this._onFocusOut(), this.popupListMaxWidth()
			}
			onPopupToggleClick(t) {
				let e = "true" === t.currentTarget.getAttribute(K);
				if (this.productGrid) {
					let i = this.productGrid.querySelector("[data-product-image]");
					i && i.classList.toggle("is-visible", !e), this.popoutList.style.maxHeight = `${Math.abs(this.popoutToggle.getBoundingClientRect().bottom-this.productGrid.getBoundingClientRect().bottom)}px`
				}
				t.currentTarget.setAttribute(K, !e), this.popoutList.classList.toggle(G), this.popupListMaxWidth(), this.toggleListPosition(), document.body.addEventListener("click", this.bodyClickEvent)
			}
			onPopupToggleFocusout(t) {
				this.contains(t.relatedTarget) || this._hideList()
			}
			onPopupListFocusout(t) {
				let e = t.currentTarget.contains(t.relatedTarget);
				this.popoutList.classList.contains(G) && !e && this._hideList()
			}
			toggleListPosition() {
				let t = "true" === this.querySelector(X).getAttribute(K),
					e = window.innerHeight,
					i = this.popoutList.getBoundingClientRect().bottom,
					s = () => {
						this.classList.remove(Y), this.popoutList.removeEventListener("transitionend", s)
					};
				t ? e < i && this.classList.add(Y) : this.popoutList.addEventListener("transitionend", s)
			}
			popupListMaxWidth() {
				this.popoutList.style.setProperty("--max-width", "100vw"), requestAnimationFrame(() => {
					this.popoutList.style.setProperty("--max-width", `${parseInt(document.body.clientWidth-this.popoutList.getBoundingClientRect().left)}px`)
				})
			}
			popupOptionsClick(t) {
				if ("#" === t.target.closest(J).attributes.href.value) {
					t.preventDefault();
					let e = "";
					if (t.currentTarget.getAttribute(tt) && (e = t.currentTarget.getAttribute(tt)), this.popoutInput.value = e, this.fireSubmitEvent) this._submitForm(e);
					else {
						let i = t.currentTarget.parentElement,
							s = this.popoutList.querySelector(`.${Q}`),
							r = this.popoutList.querySelector(`[${Z}]`);
						this.popoutInput.dispatchEvent(new Event("change")), s && (s.classList.remove(Q), i.classList.add(Q)), "quantity" != this.popoutInput.name || i.nextSibling || this.classList.add(Q), r && r.hasAttribute(`${Z}`) && (r.removeAttribute(`${Z}`), t.currentTarget.setAttribute(`${Z}`, "true")), "" !== e && (this.popoutToggleText.textContent = e, this.popoutToggleText.hasAttribute(te) && "" !== this.popoutToggleText.getAttribute(te) && this.popoutToggleText.setAttribute(te, e)), this.onPopupToggleFocusout(t), this.onPopupListFocusout(t)
					}
				}
			}
			onKeyUp(t) {
				"Escape" === t.code && (this._hideList(), this.popoutToggle.focus())
			}
			onBodyClick(t) {
				let e = this.contains(t.target);
				this.popoutList.classList.contains(G) && !e && this._hideList()
			}
			_connectToggle() {
				this.popoutToggle.addEventListener("click", this.popupToggleClickEvent)
			}
			_connectOptions() {
				this.popoutOptions.length && this.popoutOptions.forEach(t => {
					t.addEventListener("click", t => this.popupOptionsClick(t))
				})
			}
			_onFocusOut() {
				this.addEventListener("keyup", this.keyUpEvent), this.popoutToggle.addEventListener("focusout", this.popupToggleFocusoutEvent), this.popoutList.addEventListener("focusout", this.popupListFocusoutEvent)
			}
			_submitForm() {
				let t = this.closest("form");
				t && t.submit()
			}
			_hideList() {
				this.popoutList.classList.remove(G), this.popoutToggle.setAttribute(K, !1), this.toggleListPosition(), document.body.removeEventListener("click", this.bodyClickEvent)
			}
			constructor() {
				super()
			}
		},
		ts = class extends HTMLElement {
			connectedCallback() {
				this.input = this.querySelector("input"), this.changeEvent = new Event("change", {
					bubbles: !0
				}), this.buttonClickEvent = this.onButtonClick.bind(this), this.querySelectorAll("button").forEach(t => t.addEventListener("click", this.buttonClickEvent))
			}
			onButtonClick(t) {
				t.preventDefault();
				let e = this.input.value,
					i = "BUTTON" == t.target.nodeName ? t.target : t.target.closest("button");
				"increase" === i.name && this.input.stepUp(), "decrease" === i.name && this.input.stepDown(), e !== this.input.value && this.input.dispatchEvent(this.changeEvent), "updates[]" == this.input.name && this.updateCart()
			}
			updateCart() {
				"" !== this.quantityValue && this.dispatchEvent(new CustomEvent("theme:cart:update", {
					bubbles: !0,
					detail: {
						id: this.input.dataset.id,
						quantity: this.input.value
					}
				}))
			}
			constructor() {
				super()
			}
		},
		tr = "[data-aos]:not(.aos-animate)",
		to = "[data-aos-anchor]",
		tn = "aos-animate",
		ta = t => {
			for (let e of t)
				if ("childList" === e.type) {
					let i = e.target,
						s = i.querySelectorAll(tr),
						r = i.querySelectorAll(to);
					s.length && s.forEach(t => {
						tl.observe(t)
					}), r.length && tc(r)
				}
		},
		tl = new IntersectionObserver((t, e) => {
			t.forEach(t => {
				t.isIntersecting && (t.target.classList.add(tn), e.unobserve(t.target))
			})
		}, {
			root: null,
			rootMargin: "0px",
			threshold: [0, .1, .25, .5, .75, 1]
		}),
		th = new IntersectionObserver((t, e) => {
			t.forEach(t => {
				if (t.intersectionRatio > .1) {
					let i = t.target.querySelectorAll(tr);
					i.length && i.forEach(t => {
						t.classList.add(tn)
					}), e.unobserve(t.target)
				}
			})
		}, {
			root: null,
			rootMargin: "0px",
			threshold: [.1, .25, .5, .75, 1]
		});

	function tc(t) {
		let e = [];
		t.length && t.forEach(t => {
			let i = t.dataset.aosAnchor;
			if (i && -1 === e.indexOf(i)) {
				let s = document.querySelector(i);
				s && (th.observe(s), e.push(i))
			}
		})
	}
	let td = class extends HTMLElement {
			connectedCallback() {
				this.closest(".shopify-section").addEventListener("mouseover", () => {
					this.classList.remove("hidden")
				}, {
					once: !0
				})
			}
			constructor() {
				super()
			}
		},
		tu = '[data-host="youtube"]',
		tp = '[data-host="vimeo"]',
		tm = "video",
		tg = "loaded",
		tv = class extends HTMLElement {
			connectedCallback() {
				this.productGridItem && (this.section.addEventListener("mouseover", this.mouseOverEvent, {
					once: !0
				}), this.addEventListener("mouseenter", this.mouseEnterEvent), this.addEventListener("mouseleave", this.mouseLeaveEvent))
			}
			disconnectedCallback() {
				this.productGridItem && (this.section.removeEventListener("mouseover", this.mouseOverEvent, {
					once: !0
				}), this.removeEventListener("mouseenter", this.mouseEnterEvent), this.removeEventListener("mouseleave", this.mouseLeaveEvent))
			}
			mouseOverActions() {
				this.classList.remove("hidden")
			}
			mouseEnterActions() {
				this.hovered = !0, this.videoActions(), this.getAttribute(tg) || this.loadContent()
			}
			mouseLeaveActions() {
				this.hovered = !1, this.videoActions()
			}
			videoActions() {
				if (this.getAttribute(tg)) {
					let t = this.querySelector(tu),
						e = this.querySelector(tp),
						i = t || e,
						s = this.querySelector(tm);
					if (i) {
						let r = this.hovered ? "playVideo" : "pauseVideo",
							o = `{"event":"command","func":"${r}","args":""}`;
						e && (o = `{"method":"${r=this.hovered?"play":"pause"}"}`), i.contentWindow.postMessage(o, "*"), i.addEventListener("load", t => {
							this.videoActions()
						})
					} else s && (this.hovered ? s.play() : s.pause())
				}
			}
			loadContent(t = !0) {
				if (this.pauseAllMedia(), !this.getAttribute(tg)) {
					let e = document.createElement("div"),
						i = this.querySelector("template").content.firstElementChild.cloneNode(!0);
					e.appendChild(i), this.setAttribute(tg, !0);
					let s = this.appendChild(e.querySelector("video, model-viewer, iframe"));
					t && s.focus(), "VIDEO" == s.nodeName && s.getAttribute("autoplay") && s.play(), this.productGridItem && this.videoActions()
				}
			}
			pauseAllMedia() {
				document.querySelectorAll(tu).forEach(t => {
					t.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
				}), document.querySelectorAll(tp).forEach(t => {
					t.contentWindow.postMessage('{"method":"pause"}', "*")
				}), document.querySelectorAll(tm).forEach(t => t.pause()), document.querySelectorAll("product-model").forEach(t => {
					t.modelViewerUI && t.modelViewerUI.pause()
				})
			}
			constructor() {
				super();
				let t = this.querySelector("[data-deferred-media-button]");
				null == t || t.addEventListener("click", this.loadContent.bind(this)), this.section = this.closest(".shopify-section"), this.productGridItem = this.closest("[data-product-grid-item]"), this.hovered = !1, this.mouseOverEvent = () => this.mouseOverActions(), this.mouseEnterEvent = () => this.mouseEnterActions(), this.mouseLeaveEvent = () => this.mouseLeaveActions()
			}
		},
		ty;
	window.requestIdleCallback = window.requestIdleCallback || function(t) {
		var e = Date.now();
		return setTimeout(function() {
			t({
				didTimeout: !1,
				timeRemaining: function() {
					return Math.max(0, 50 - (Date.now() - e))
				}
			})
		}, 1)
	}, window.cancelIdleCallback = window.cancelIdleCallback || function(t) {
		clearTimeout(t)
	}, window.theme.settings.enableAnimations && (function() {
		let t = document.querySelectorAll(tr);
		t.length && t.forEach(t => {
			tl.observe(t)
		})
	}(), function() {
		let t = document.querySelectorAll(to);
		t.length && tc(t)
	}(), new MutationObserver(ta).observe(document.body, {
		attributes: !1,
		childList: !0,
		subtree: !0
	})), window.addEventListener("resize", f(function() {
		document.dispatchEvent(new CustomEvent("theme:resize", {
			bubbles: !0
		})), w !== b() && (document.dispatchEvent(new CustomEvent("theme:resize:width", {
			bubbles: !0
		})), w = b()), k !== S() && (document.dispatchEvent(new CustomEvent("theme:resize:height", {
			bubbles: !0
		})), k = S())
	}, 50)), window.addEventListener("scroll", function() {
		ty && window.cancelAnimationFrame(ty), ty = window.requestAnimationFrame(function() {
			! function() {
				let t = window.pageYOffset;
				t > A ? (T = !0, $ = !1) : t < A ? (T = !1, $ = !0) : ($ = null, T = null), A = t, document.dispatchEvent(new CustomEvent("theme:scroll", {
					detail: {
						up: $,
						down: T,
						position: t
					},
					bubbles: !1
				})), $ && !q && document.dispatchEvent(new CustomEvent("theme:scroll:up", {
					detail: {
						position: t
					},
					bubbles: !1
				})), T && !C && document.dispatchEvent(new CustomEvent("theme:scroll:down", {
					detail: {
						position: t
					},
					bubbles: !1
				})), C = T, q = $
			}()
		})
	}, {
		passive: !0
	}), window.addEventListener("theme:scroll:lock", function e(i) {
		setTimeout(() => {
			x && clearTimeout(x), t.disablePageScroll(i.detail, {
				allowTouchMove: t => "TEXTAREA" === t.tagName
			}), document.documentElement.setAttribute("data-scroll-locked", "")
		})
	}), window.addEventListener("theme:scroll:unlock", function t(e) {
		let i = e.detail;
		i ? x = setTimeout(_, i) : _()
	}), "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? (document.documentElement.className = document.documentElement.className.replace("no-touch", "supports-touch"), window.theme.touch = !0) : window.theme.touch = !1, d(), document.addEventListener("load", t => {
		"IMG" == t.target.tagName && t.target.classList.contains(D) && (t.target.classList.remove(D), t.target.parentNode.classList.remove(D))
	}, !0), window.addEventListener("DOMContentLoaded", () => {
		c(), B(document), a(document), H(document), document.querySelectorAll("img.is-loading").forEach(t => {
			t.complete && (t.classList.remove(D), t.parentNode.classList.remove(D))
		}), document.body.classList.add("is-loaded"), window.fastNetworkAndCPU && (document.onreadystatechange = () => {
			"complete" === document.readyState && (v = !0, y())
		}, requestIdleCallback(y)), requestIdleCallback(() => {
			Shopify.visualPreviewMode && document.documentElement.classList.add("preview-mode")
		})
	}), document.addEventListener("shopify:section:load", t => {
		let e = t.target;
		a(e), H(e), B(document), c()
	}), customElements.get("popout-select") || customElements.define("popout-select", ti), customElements.get("quantity-counter") || customElements.define("quantity-counter", ts), customElements.get("predictive-search") || customElements.define("predictive-search", j), customElements.get("deferred-image") || customElements.define("deferred-image", td), customElements.get("deferred-media") || customElements.define("deferred-media", tv);
	let tf = (t, e = !1, i = "block") => {
		t && (e ? t.style.removeProperty("display") : t.style.display = i)
	};
	Shopify.Products = function() {
		let t = {
				howManyToShow: 4,
				howManyToStoreInMemory: 10,
				wrapperId: "recently-viewed-products",
				section: null,
				onComplete: null
			},
			e = [],
			i = null,
			s = null,
			r = new Date,
			o = new Date;
		o.setTime(r.getTime() + 7776e6);
		let n = {
				configuration: {
					expires: o.toGMTString(),
					path: "/",
					domain: window.location.hostname,
					sameSite: "none",
					secure: !0
				},
				name: "shopify_recently_viewed",
				write: function(t) {
					let e = t.join(" ");
					document.cookie = `${this.name}=${e}; expires=${this.configuration.expires}; path=${this.configuration.path}; domain=${this.configuration.domain}; sameSite=${this.configuration.sameSite}; secure=${this.configuration.secure}`
				},
				read: function() {
					let t = [],
						e = null;
					return -1 !== document.cookie.indexOf("; ") && document.cookie.split("; ").find(t => t.startsWith(this.name)) && (e = document.cookie.split("; ").find(t => t.startsWith(this.name)).split("=")[1]), null !== e && (t = e.split(" ")), t
				},
				destroy: function() {
					document.cookie = `${this.name}=null; expires=${this.configuration.expires}; path=${this.configuration.path}; domain=${this.configuration.domain}`
				},
				remove: function(t) {
					let e = this.read(),
						i = e.indexOf(t); - 1 !== i && (e.splice(i, 1), this.write(e))
				}
			},
			a = (e, i, r, o) => {
				i.length && e < t.howManyToShow ? fetch(`${window.theme.routes.root}products/${i[0]}?section_id=api-product-grid-item`).then(t => t.text()).then(t => {
					let s = 150 * e,
						n = 100 * e + 800,
						l = 50 * e + 800,
						h = r.id ? `#${r.id}` : "",
						c = document.createElement("div"),
						d = t.includes("||itemIndex||") ? t.replaceAll("||itemIndex||", e) : t;
					d = (d = (d = (d = d.includes("||itemAosDelay||") ? d.replaceAll("||itemAosDelay||", s) : d).includes("||itemAosImageDuration||") ? d.replaceAll("||itemAosImageDuration||", n) : d).includes("||itemAosTextDuration||") ? d.replaceAll("||itemAosTextDuration||", l) : d).includes("||itemAnimationAnchor||") ? d.replaceAll("||itemAnimationAnchor||", h) : d, c.innerHTML = d, r.innerHTML += c.querySelector("[data-api-content]").innerHTML, i.shift(), a(++e, i, r, o)
				}).catch(() => {
					n.remove(i[0]), i.shift(), a(e, i, r, o)
				}) : ((e, i) => {
					tf(e, !0);
					let r = n.read().length;
					if (Shopify.recentlyViewed && s && r && r < s && e.children.length) {
						let o = [],
							a = [],
							l = 0;
						for (let h in Shopify.recentlyViewed) {
							l += 1;
							let c = Shopify.recentlyViewed[h].split(" "),
								d = parseInt(h.split("_")[1]);
							o = [...o, ...c], n.read().length !== d && (l !== Object.keys(Shopify.recentlyViewed).length || a.length) || (a = [...a, ...c])
						}
						for (let u = 0; u < e.children.length; u++) {
							let p = e.children[u];
							o.length && p.classList.remove(...o), a.length && p.classList.add(...a)
						}
					}
					if (t.onComplete) try {
						t.onComplete(e, i)
					} catch (m) {
						console.log(m)
					}
				})(r, o)
			};
		return {
			showRecentlyViewed: function(r) {
				Object.assign(t, r || {}), e = n.read(), i = document.querySelector(`#${t.wrapperId}`), s = t.howManyToShow, t.howManyToShow = Math.min(e.length, t.howManyToShow), t.howManyToShow && i && a(0, e, i, t.section)
			},
			getConfig: function() {
				return t
			},
			clearList: function() {
				n.destroy()
			},
			recordRecentlyViewed: function(e) {
				Object.assign(t, e || {});
				let i = n.read();
				if (-1 !== window.location.pathname.indexOf("/products/")) {
					let s = decodeURIComponent(window.location.pathname).match(/\/products\/([a-z0-9\-]|[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\uFF00-\uFFEF]|[\u4E00-\u9FAF]|[\u2605-\u2606]|[\u2190-\u2195]|[\u203B]|[\w\u0430-\u044f]|[\u0400-\u04FF]|[\u0900-\u097F]|[\u0590-\u05FF\u200f\u200e]|[\u0621-\u064A\u0660-\u0669 ])+/)[0].split("/products/")[1];
					t.handle && (s = t.handle);
					let r = i.indexOf(s); - 1 === r ? (i.unshift(s), i = i.splice(0, t.howManyToStoreInMemory)) : (i.splice(r, 1), i.unshift(s)), n.write(i)
				}
			},
			hasProducts: n.read().length > 0
		}
	}();
	let tb = (t, e = [], i = !1) => {
			let s = Object.keys(t).map(s => {
				let r = t[s];
				if ("[object Object]" === Object.prototype.toString.call(r) || Array.isArray(r)) return Array.isArray(t) ? e.push("") : e.push(s), tb(r, e, Array.isArray(r));
				{
					let o = s;
					return e.length > 0 && (o = (i ? e : [...e, s]).reduce((t, e) => "" === t ? e : `${t}[${e}]`, "")), i ? `${o}[]=${r}` : `${o}=${r}`
				}
			}).join("&");
			return e.pop(), s
		},
		tS = t => {
			t && (t.style.display = "none")
		},
		tE = (t, e, i = null) => {
			t.style.opacity = 0, t.style.display = e || "block";
			let s = !0;
			! function e() {
				let r = parseFloat(t.style.opacity);
				(r += .1) > 1 || (t.style.opacity = r, requestAnimationFrame(e)), 1 === parseInt(r) && s && "function" == typeof i && (s = !1, i())
			}()
		};

	function tL(t) {
		this.status = t.status || null, this.headers = t.headers || null, this.json = t.json || null, this.body = t.body || null
	}
	tL.prototype = Error.prototype;
	let tw = "#address_zip",
		tk = "data-default",
		tA = "center",
		t$ = "disabled",
		tT = class extends HTMLElement {
			connectedCallback() {
				let t = document.querySelector("html"),
					i = "en";
				if (t.hasAttribute("lang") && "" !== t.getAttribute("lang") && (i = t.getAttribute("lang")), this.fieldsContainer && e.AddressForm(this.fieldsContainer, i, {
						shippingCountriesOnly: !0
					}), this.selectCountry && this.selectCountry.hasAttribute(tk) && this.selectProvince && this.selectProvince.hasAttribute(tk) && this.selectCountry.addEventListener("change", this.onCountryChangeEvent), this.getRatesButton && (this.getRatesButton.addEventListener("click", this.onButtonClickEvent), theme.settings.customerLoggedIn && this.getRatesButton.classList.contains("get-rates--trigger"))) {
					let s = document.querySelector(tw);
					s && s.value && this.getRatesButton.dispatchEvent(new Event("click"))
				}
			}
			disconnectedCallback() {
				this.selectCountry && this.selectCountry.hasAttribute(tk) && this.selectProvince && this.selectProvince.hasAttribute(tk) && this.selectCountry.removeEventListener("change", this.onCountryChangeEvent), this.getRatesButton && this.getRatesButton.removeEventListener("click", this.onButtonClickEvent)
			}
			onCountryChange() {
				this.selectCountry.removeAttribute(tk), this.selectProvince.removeAttribute(tk)
			}
			onButtonClick() {
				for (this.disableButtons(); this.wrapper.firstChild;) this.wrapper.removeChild(this.wrapper.firstChild);
				tS(this.wrapper);
				let t = {},
					e = this.selectCountry.value,
					i = this.selectProvince.value,
					s = this.selectCountry.getAttribute(tk);
				"" === e && s && "" !== s && (e = s);
				let r = this.selectProvince.getAttribute(tk);
				"" === i && r && "" !== r && (i = r), t.zip = document.querySelector(tw).value || "", t.country = e || "", t.province = i || "", this.getCartShippingRatesForDestination(t)
			}
			formatRate(t) {
				return "0.00" === t ? window.theme.strings.free : i.formatMoney(t, theme.moneyFormat)
			}
			render(t) {
				if (this.template && this.wrapper) {
					this.wrapper.innerHTML = "";
					let e = "",
						i = "",
						s = `error ${tA}`,
						r = this.template.innerHTML,
						o = /[^[\]]+(?=])/g;
					if (t.rates && t.rates.length) {
						let n = o.exec(r)[0];
						t.rates.forEach(t => {
							let i = n;
							e += i = (i = i.replace(/\|\|rateName\|\|/, t.name)).replace(/\|\|ratePrice\|\|/, this.formatRate(t.price))
						})
					}
					if (t.success) {
						s = `success ${tA}`;
						let a = document.createElement("div");
						a.innerHTML = this.template.innerHTML;
						let l = a.querySelector("[data-template-no-shipping]");
						t.rates.length < 1 && l && (i = l.getAttribute("data-template-no-shipping"))
					} else i = t.errorFeedback;
					r = (r = (r = (r = r.replace(o, "").replace("[]", "")).replace(/\|\|ratesList\|\|/g, e)).replace(/\|\|successClass\|\|/g, s)).replace(/\|\|ratesText\|\|/g, i), this.wrapper.innerHTML += r, tE(this.wrapper)
				}
			}
			enableButtons() {
				this.getRatesButton.removeAttribute("disabled"), this.getRatesButton.classList.remove(t$), this.getRatesButton.textContent = theme.strings.shippingCalcSubmitButton
			}
			disableButtons() {
				this.getRatesButton.setAttribute("disabled", "disabled"), this.getRatesButton.classList.add(t$), this.getRatesButton.textContent = theme.strings.shippingCalcSubmitButtonDisabled
			}
			getCartShippingRatesForDestination(t) {
				let e = encodeURI(tb({
						shipping_address: t
					})),
					i = `${theme.routes.cart_url}/shipping_rates.json?${e}`;
				fetch(i).then(this.handleErrors).then(t => t.text()).then(e => {
					let i = JSON.parse(e).shipping_rates;
					this.onCartShippingRatesUpdate(i, t)
				}).catch(t => {
					this.onError(t.json)
				})
			}
			fullMessagesFromErrors(t) {
				let e = [];
				for (let i in t)
					for (let s of t[i]) e.push(s);
				return e
			}
			handleErrors(t) {
				return t.ok ? t : t.json().then(function(e) {
					throw new tL({
						status: t.statusText,
						headers: t.headers,
						json: e
					})
				})
			}
			onError(t) {
				this.enableButtons();
				let e = "";
				"Error : country is not supported." == (e = t.message ? t.message + "(" + t.status + "): " + t.description : "Error : " + this.fullMessagesFromErrors(t).join("; ")) && (e = "We do not ship to this destination."), this.render({
					rates: [],
					errorFeedback: e,
					success: !1
				})
			}
			onCartShippingRatesUpdate(t, e) {
				this.enableButtons();
				let i = "";
				e.zip && (i += e.zip + ", "), e.province && (i += e.province + ", "), i += e.country, this.render({
					rates: t,
					address: i,
					success: !0
				})
			}
			constructor() {
				super(), this.getRatesButton = this.querySelector(".get-rates"), this.fieldsContainer = this.querySelector("#address_container"), this.selectCountry = this.querySelector("#address_country"), this.selectProvince = this.querySelector("#address_province"), this.template = this.querySelector("#shipping-calculator-response-template"), this.wrapper = this.querySelector("#wrapper-response"), this.onCountryChangeEvent = () => this.onCountryChange(), this.onButtonClickEvent = () => this.onButtonClick()
			}
		},
		tq = (t, e) => {
			let i, s;
			return function r(...o) {
				let n = Date.now();
				s = clearTimeout(s), !i || n - i >= e ? (t.apply(null, o), i = n) : s = setTimeout(r.bind(null, ...o), e - (n - i))
			}
		},
		tC = "is-animated",
		tx = "is-added",
		t_ = "is-disabled",
		tP = "is-hidden",
		tH = "is-hiding",
		tB = "is-loading",
		tD = "is-open",
		tM = "is-visible",
		tI = "is-expanded",
		t9 = "is-updated",
		tF = "[data-animation]",
		t8 = "[data-cart-drawer-close]",
		tO = "[data-item-remove]",
		tR = "[data-cart-acceptance-checkbox]",
		tz = "[data-cart-total]",
		tN = "[data-cart-errors-container]",
		tW = "[data-form-wrapper]",
		tU = "[data-free-shipping]",
		t0 = "[data-item]",
		tV = "[data-quick-add-holder]",
		tj = 'input[name="updates[]"]',
		t3 = "[data-terms-error-message]",
		t1 = "data-cart-total",
		t2 = "disabled",
		tX = "data-free-shipping",
		tJ = "data-item-index",
		t4 = "data-item-title",
		tG = "data-quick-add-holder";
	window.cart = new class {
		init() {
			this.cartPage = document.querySelector("[data-cart-page]"), this.cartForm = document.querySelector("[data-cart-form]"), this.cartDrawer = document.querySelector("[data-cart-drawer]"), this.cartDrawerClose = document.querySelector(t8), this.cartEmpty = document.querySelector("[data-cart-empty]"), this.cartTermsCheckbox = document.querySelector(tR), this.cartCheckoutButtonWrapper = document.querySelector("[data-cart-checkout-buttons]"), this.cartCheckoutButton = document.querySelector("[data-cart-checkout-button]"), this.buttonHolder = document.querySelector("[data-foot-holder]"), this.itemsHolder = document.querySelector("[data-items-holder]"), this.priceHolder = document.querySelector("[data-cart-price-holder]"), this.items = document.querySelectorAll(t0), this.cartTotal = document.querySelector(tz), this.freeShipping = document.querySelectorAll(tU), this.cartErrorHolder = document.querySelector("[data-cart-errors]"), this.cartCloseErrorMessage = document.querySelector("[data-cart-error-close]"), this.headerWrapper = document.querySelector("[data-header-wrapper]"), this.accessibility = R, this.navDrawer = document.querySelector("[data-drawer]"), this.upsellProductsHolder = document.querySelector("[data-upsell-products]"), this.subtotal = window.theme.subtotal, this.cart = this.cartDrawer || this.cartPage, this.cartAddEvent = this.cartAddEvent.bind(this), this.addToCart = this.addToCart.bind(this), this.updateProgress = this.updateProgress.bind(this), document.addEventListener("theme:cart:add", this.cartAddEvent), document.addEventListener("theme:announcement:init", this.updateProgress), this.skipUpsellProductsArray = [], this.skipUpsellProductEvent(), this.checkSkippedUpsellProductsFromStorage(), this.toggleCartUpsellWidgetVisibility(), this.circumference = 28 * Math.PI, this.freeShippingLimit = this.freeShipping.length ? 100 * Number(this.freeShipping[0].getAttribute("data-free-shipping-limit")) * window.Shopify.currency.rate : 0, this.freeShippingMessageHandle(this.subtotal), this.updateProgress(), this.cart && (this.build = this.build.bind(this), this.updateCart = this.updateCart.bind(this), this.productAddCallback = this.productAddCallback.bind(this), this.openCartDrawer = this.openCartDrawer.bind(this), this.closeCartDrawer = this.closeCartDrawer.bind(this), this.toggleCartDrawer = this.toggleCartDrawer.bind(this), this.openCartDrawerOnProductAdded = this.openCartDrawerOnProductAdded.bind(this), this.animateItems = this.animateItems.bind(this), this.showAnimatedItems = this.showAnimatedItems.bind(this), this.formSubmitHandler = tq(this.formSubmitHandler.bind(this), 50), this.cartPage && this.showAnimatedItems(), this.hasItemsInCart = this.hasItemsInCart.bind(this), this.cartCount = this.getCartItemCount(), this.toggleClassesOnContainers = this.toggleClassesOnContainers.bind(this), this.totalItems = this.items.length, this.cartDrawerIsOpen = !1, this.cartDrawerEnabled = theme.settings.cartDrawerEnabled, this.cartUpdateFailed = !1, this.cartEvents(), this.cartToggleEvents(), this.cartRemoveEvents(), this.cartUpdateEvents(), document.addEventListener("theme:cart:toggle", this.toggleCartDrawer), document.addEventListener("theme:quick-add:open", this.closeCartDrawer), document.addEventListener("theme:product:add", this.productAddCallback), document.addEventListener("theme:product:add-error", this.productAddCallback), document.addEventListener("theme:product:added", this.openCartDrawerOnProductAdded))
		}
		cartUpdateEvents() {
          const cartItemsR = document.querySelectorAll(".drawer__items .cart__item");
        const discountTagDivR = document.querySelector(".cart_discount_tag_main");
        let hasTrueDiscountTagR = false;
    
        cartItemsR.forEach(item => {
            const discountTagR = item.getAttribute("data-discount-tag");
            if (discountTagR === "true") {
                hasTrueDiscountTagR = true;
            }
        });
        if (discountTagDivR) {
            if (hasTrueDiscountTagR) {          
                discountTagDivR.innerHTML = "4th of July. 20% OFF. Use code <b>FREEDOM</b>.";           
            } else {
                discountTagDivR.innerHTML = "4th of July. 20% OFF. Use code <b>FREEDOM</b>.";            
            }
        }
          
        //  const cartTotalElement = document.querySelector('.cart__total__price');
        //  const messageContainer = document.querySelector('.cart__message-container'); // Predefined container for the message
        
        // if (cartTotalElement && messageContainer) {
        //   const cartTotal = parseInt(cartTotalElement.getAttribute('data-cart-total'), 10);
        
        //   // Clear any existing content in the message container
        //   messageContainer.innerHTML = '';
        
        //   if (cartTotal >= 49000) {           
        //     messageContainer.innerHTML = "GET 20% OFF ORDERS ABOVE $490 USE CODE: <b>HYOU20</b>";
        //   } else {            
        //     const remainingAmount = ((49000 - cartTotal) / 100).toFixed(2);
        //     messageContainer.innerHTML = "GET 20% OFF ORDERS ABOVE $490 USE CODE: <b>HYOU20</b>";   
        //   }
        // } else {
        //   console.error('Cart total element or message container not found.');
        // }

 document.dispatchEvent(new Event('cart:updated'));
          
			this.items = document.querySelectorAll(t0), this.items.forEach(t => {
				t.addEventListener("theme:cart:update", e => {
					this.updateCart({
						id: e.detail.id,
						quantity: e.detail.quantity
					}, t);
                   document.dispatchEvent(new Event('cart:updated'));
				})
			})

           // ***********delivery date functionality*************

            let today = new Date();      
            let options = { month: 'long', day: '2-digit' };

            document.querySelectorAll('.cart-item-with-metafiled').forEach(function (item) {
                    let inventoryQuantity = parseInt(item.getAttribute('data-inventory'), 10);
                    let metafieldValue = item.getAttribute('data-metafields');
                try {
                    // let sanitizedMetafieldValue = metafieldValue.replace(/value":/g, '"value":');
                    let parsedMetafields = JSON.parse(metafieldValue);
                } catch (error) {
                    console.error('Error parsing metafield value:', error);
                    return;
                }
                
                // Initialize deliveryDate to current date
                let deliveryDate = new Date();  // Current date for deliveryDate
             
                // Helper function to skip weekends (Saturday and Sunday)
                function addBusinessDays(date, days) {
                    let count = 0;
                    while (count < days - 1) {
                        date.setDate(date.getDate() + 1);
                        // If it's Saturday (6) or Sunday (0), don't count it as a business day
                        if (date.getDay() !== 0 && date.getDay() !== 6) {
                            count++;
                        }
                    }
                    return date;
                };      
              
                 if (inventoryQuantity <= 0 && (!metafieldValue || metafieldValue.length === 2)) {
                        addBusinessDays(deliveryDate, 18);                  
                     let formattedDate = deliveryDate.toLocaleDateString('en-US', options);                  
                          // Display the delivery date on the page
                          let deliveryElement = item.querySelector('.delivery-date');
                          if (deliveryElement) {
                              deliveryElement.innerHTML = `<b>Delivery:</b> ${formattedDate}`;
                          }
                    } 
                 else if (inventoryQuantity > 0) {
                   //  addBusinessDays(deliveryDate, 3);
                   // let formattedDate = deliveryDate.toLocaleDateString('en-GB', options);                  
                   //        // Display the delivery date on the page
                   //        let deliveryElement = item.querySelector('.delivery-date');
                   //        if (deliveryElement) {
                   //            deliveryElement.innerHTML = `<b>Expected Delivery:</b> ${formattedDate}`;
                   //        }
                   let now = new Date(); // Get the current date and time
                    let deliveryDate = new Date(); // Initialize the delivery date
                    let currentHour = now.getHours(); // Get the current hour (0-23)                
                    // Check if the current time is before or after 4 PM
                    if (currentHour < 16) {
                        // Before 4 PM: Add 3 business days
                        addBusinessDays(deliveryDate, 3);                      
                    } else {
                        // After 4 PM: Add 4 business days
                        addBusinessDays(deliveryDate, 4);                       
                    }                
                    // Format the delivery date
                    let formattedDate = deliveryDate.toLocaleDateString('en-US', options);                
                    // Display the delivery date on the page
                    let deliveryElement = item.querySelector('.delivery-date');
                    if (deliveryElement) {
                        deliveryElement.innerHTML = `<b>Delivery:</b> ${formattedDate}`;
                    }
                  }
                else if(inventoryQuantity <= 0 && metafieldValue){
                  
                   try {                   
                      let metafieldQuantities = {
                          shipment_1: 0,
                          shipment_2: 0,
                          shipment_3: 0,
                          shipment_4: 0,
                          shipment_5: 0,
                      };


                      let metafieldValue = item.getAttribute('data-metafields');
                      let parsedMetafields = JSON.parse(metafieldValue);
                      console.log("metafieldValue",metafieldValue)
                      parsedMetafields.forEach((metafield, index) => {
                          let [quantity, date] = metafield.value.split('|');                      
                          let quantityKey = `quantity_${index + 1}`;
                          let metafieldKey = metafield.key;
                          let metafieldQuantity = parseInt(quantity, 10) || 0;                      
                          if (metafieldKey.startsWith('shipment_') && quantityKey === `quantity_${index + 1}`) {
                              metafieldQuantities[metafieldKey] = metafieldQuantity;
                          }                         
                      });
                      
                    
                      parsedMetafields.forEach((metafield, index) => {
                          let [quantity, date] = metafield.value.split('|');
                          let quantityKey = `quantity_${index + 1}`;
                          console.log(`Key: ${metafield.key} ${quantityKey}: ${quantity} Date: ${date}`);
                        
                          let metafieldKey = metafield.key;
                          let metafieldQuantityKey = quantityKey;
                          let metafieldQuantity = quantity;
                          let metafieldDate = date; 
                          let deliveryDate = new Date();                            

                          if (inventoryQuantity <= 0 && metafieldDate) {                         
                            
                            if (inventoryQuantity >= metafieldQuantities.shipment_1) {                             
                              if(metafieldKey === 'shipment_1'){                                         
                                let deliveryElement = item.querySelector('.delivery-date');
                                if (deliveryElement) {                                  
                                    let [day, month, year] = date.split('-'); // Assuming date is in DD-MM-YYYY format
                                    let parsedDate = new Date(`${year}-${month}-${day}`);                                    
                                    // Add 3 business days, considering the original date as day 1
                                    let updatedDate = addBusinessDays(parsedDate, 3);                                    
                                    // Format the updated date
                                    let formattedDate = updatedDate.toLocaleDateString('en-US', { month: 'long', day: '2-digit' });                                    
                                    // Display the updated delivery date
                                    deliveryElement.innerHTML = `<b>Delivery:</b> ${formattedDate}`;                                  
                                  if(today > parsedDate ){                                    
                                    let updatedsevenDate = addBusinessDays(today, 7);
                                    let formattedsevenDate = updatedsevenDate.toLocaleDateString('en-US', { month: 'long', day: '2-digit' });                                   
                                    deliveryElement.innerHTML = `<b>Delivery:</b> ${formattedsevenDate}`;
                                  }
                                }                                
                              }                
                           } else if (inventoryQuantity >= metafieldQuantities.shipment_1 + metafieldQuantities.shipment_2){
                             if(metafieldKey === 'shipment_2'){
                              let deliveryElement = item.querySelector('.delivery-date');
                              if (deliveryElement) {                                  
                                   let [day, month, year] = date.split('-'); // Assuming date is in DD-MM-YYYY format
                                    let parsedDate = new Date(`${year}-${month}-${day}`);                                    
                                    // Add 3 business days, considering the original date as day 1
                                    let updatedDate = addBusinessDays(parsedDate, 3);                                    
                                    // Format the updated date
                                    let formattedDate = updatedDate.toLocaleDateString('en-US', { month: 'long', day: '2-digit' });                                    
                                    // Display the updated delivery date
                                    deliveryElement.innerHTML = `<b>Delivery:</b> ${formattedDate}`;
                                    if(today > parsedDate ){                                    
                                        let updatedsevenDate = addBusinessDays(today, 7);
                                        let formattedsevenDate = updatedsevenDate.toLocaleDateString('en-US', { month: 'long', day: '2-digit' });                                   
                                        deliveryElement.innerHTML = `<b>Delivery:</b> ${formattedsevenDate}`;
                                      }
                              }
                             }
                           } else if (inventoryQuantity >= metafieldQuantities.shipment_1 + metafieldQuantities.shipment_2 + metafieldQuantities.shipment_3){
                             if(metafieldKey === 'shipment_3'){
                              let deliveryElement = item.querySelector('.delivery-date');
                              if (deliveryElement) {
                                   let [day, month, year] = date.split('-'); // Assuming date is in DD-MM-YYYY format
                                    let parsedDate = new Date(`${year}-${month}-${day}`);                                    
                                    // Add 3 business days, considering the original date as day 1
                                    let updatedDate = addBusinessDays(parsedDate, 3);                                    
                                    // Format the updated date
                                    let formattedDate = updatedDate.toLocaleDateString('en-US', { month: 'long', day: '2-digit' });                                    
                                    // Display the updated delivery date
                                    deliveryElement.innerHTML = `<b>Delivery:</b> ${formattedDate}`;
                                if(today > parsedDate){                                    
                                    let updatedsevenDate = addBusinessDays(today, 7);
                                    let formattedsevenDate = updatedsevenDate.toLocaleDateString('en-US', { month: 'long', day: '2-digit' });                                   
                                    deliveryElement.innerHTML = `<b>Delivery:</b> ${formattedsevenDate}`;
                                  }
                              }
                             }
                           } else if (inventoryQuantity >= metafieldQuantities.shipment_1 + metafieldQuantities.shipment_2 + metafieldQuantities.shipment_3 + metafieldQuantities.shipment_4){
                             if(metafieldKey === 'shipment_4'){
                              let deliveryElement = item.querySelector('.delivery-date');
                              if (deliveryElement) {
                                   let [day, month, year] = date.split('-'); // Assuming date is in DD-MM-YYYY format
                                    let parsedDate = new Date(`${year}-${month}-${day}`);                                    
                                    // Add 3 business days, considering the original date as day 1
                                    let updatedDate = addBusinessDays(parsedDate, 3);                                    
                                    // Format the updated date
                                    let formattedDate = updatedDate.toLocaleDateString('en-US', { month: 'long', day: '2-digit' });                                    
                                    // Display the updated delivery date
                                    deliveryElement.innerHTML = `<b>Delivery:</b> ${formattedDate}`;
                                if(today > parsedDate){                                    
                                    let updatedsevenDate = addBusinessDays(today, 7);
                                    let formattedsevenDate = updatedsevenDate.toLocaleDateString('en-US', { month: 'long', day: '2-digit' });                                   
                                    deliveryElement.innerHTML = `<b>Delivery:</b> ${formattedsevenDate}`;
                                  }
                              }
                             }
                           } else if (inventoryQuantity >= metafieldQuantities.shipment_1 + metafieldQuantities.shipment_2 + metafieldQuantities.shipment_3 + metafieldQuantities.shipment_4 + metafieldQuantities.shipment_5){
                             if(metafieldKey === 'shipment_5'){
                              let deliveryElement = item.querySelector('.delivery-date');
                              if (deliveryElement) {
                                   let [day, month, year] = date.split('-'); // Assuming date is in DD-MM-YYYY format
                                    let parsedDate = new Date(`${year}-${month}-${day}`);                                    
                                    // Add 3 business days, considering the original date as day 1
                                    let updatedDate = addBusinessDays(parsedDate, 3);                                    
                                    // Format the updated date
                                    let formattedDate = updatedDate.toLocaleDateString('en-US', { month: 'long', day: '2-digit' });                                    
                                    // Display the updated delivery date
                                    deliveryElement.innerHTML = `<b>Delivery:</b> ${formattedDate}`;
                                if(today > parsedDate ){                                    
                                    let updatedsevenDate = addBusinessDays(today, 7);
                                    let formattedsevenDate = updatedsevenDate.toLocaleDateString('en-US', { month: 'long', day: '2-digit' });                                   
                                    deliveryElement.innerHTML = `<b>Delivery:</b> ${formattedsevenDate}`;
                                  }
                              }
                             }
                           }                            
                            else if(inventoryQuantity < metafieldQuantity){
                            addBusinessDays(deliveryDate, 18);
                             let formattedDate = deliveryDate.toLocaleDateString('en-US', options);                  
                                  // Display the delivery date on the page
                                  let deliveryElement = item.querySelector('.delivery-date');
                                  if (deliveryElement) {
                                      deliveryElement.innerHTML = `<b>Delivery:</b> ${formattedDate}`;
                                  }
                            }
                          } 
                      });
                  } catch (error) {
                    console.error('Error processing metafields:', error);
                }                  
                }
            });
		}
		cartRemoveEvents() {
			document.querySelectorAll(tO).forEach(t => {
				let e = t.closest(t0);
				t.addEventListener("click", i => {
					i.preventDefault(), t.classList.contains(t_) || this.updateCart({
						id: t.dataset.id,
						quantity: 0
					}, e)
				})
			}), this.cartCloseErrorMessage && this.cartCloseErrorMessage.addEventListener("click", t => {
				t.preventDefault(), this.cartErrorHolder.classList.remove(tI)
			})
		}
		// cartAddEvent(t) {
		// 	let e = "",
		// 		i = t.detail.button;
		// 	if (i.hasAttribute("disabled")) return;
		// 	let s = i.closest("form");
		// 	s.checkValidity() ? (e = new FormData(s), null !== s && s.querySelector('[type="file"]') || (t.preventDefault(), this.addToCart(e, i))) : s.reportValidity()
		// }
      cartAddEvent(t) {   
    let e = "",
        i = t.detail.button;
    if (i.hasAttribute("disabled")) return;
    let s = i.closest("form");
    if (s.checkValidity()) {
        e = new FormData(s);
        const variantInput = s.querySelector('input[name="variant_id"]')?.value;       
        fetch('/cart.js')
            .then(response => response.json())
            .then(cart => {
                let cartItem = cart.items.find(item => item.variant_id == variantInput);                
                if (cartItem) {                    
                    fetch('/cart/change.js', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            id: cartItem.key, 
                            quantity: cartItem.quantity + 1 
                        })
                    })
                    .then(response => response.json())
                    .then(updatedCart => {
                        console.log('Cart updated:', updatedCart);                       
                      document.dispatchEvent(new Event('cart:updated'));                       
                      this.getCart(); 
                        this.openCartDrawer();
                    });
                } else {                   
                    if (!s.querySelector('[type="file"]')) {
                        t.preventDefault();
                        this.addToCart(e, i);
                    }
                }
            });
    } else {
        s.reportValidity();
    }   
        
}
		cartEvents() {
			this.cartTermsCheckbox && (this.cartTermsCheckbox.removeEventListener("change", this.formSubmitHandler), this.cartCheckoutButtonWrapper.removeEventListener("click", this.formSubmitHandler), this.cartForm.removeEventListener("submit", this.formSubmitHandler), this.cartTermsCheckbox.addEventListener("change", this.formSubmitHandler), this.cartCheckoutButtonWrapper.addEventListener("click", this.formSubmitHandler), this.cartForm.addEventListener("submit", this.formSubmitHandler))
		}
		formSubmitHandler() {
			let t = document.querySelector(tR).checked,
				e = document.querySelector(t3);
			if (t) e.classList.remove(tI), this.cartCheckoutButton.removeAttribute(t2);
			else {
				if (document.querySelector(t3).length > 0) return;
				e.innerText = theme.strings.cartAcceptanceError, this.cartCheckoutButton.setAttribute(t2, !0), e.classList.add(tI)
			}
		}
		formErrorsEvents(t) {
			let e = t.querySelector("[data-close-error]");
			null == e || e.addEventListener("click", e => {
				e.preventDefault(), t && t.classList.remove(tM)
			})
		}
		getCart() {
			fetch(theme.routes.cart_url + "?section_id=api-cart-items").then(this.cartErrorsHandler).then(t => t.text()).then(t => {
				let e = document.createElement("div");
				e.innerHTML = t;
				let i = e.querySelector("[data-api-content]");
				this.build(i)
			}).catch(t => console.log(t))
		}
		addToCart(t, e) {
                    
			this.cart && this.cart.classList.add(tB);
			let i = null == e ? void 0 : e.closest(tV);
			this.cartDrawerEnabled && (e && (e.classList.add(tB), e.disabled = !0), i && i.classList.add(tM)), fetch(theme.routes.cart_add_url, {
				method: "POST",
				headers: {
					"X-Requested-With": "XMLHttpRequest",
					Accept: "application/javascript"
				},
				body: t
			}).then(t => t.json()).then(t => {
				if (t.status) return this.addToCartError(t, e), void(e && (e.classList.remove(tB), e.disabled = !1));
				this.cartDrawerEnabled ? (e && (e.classList.remove(tB), e.classList.add(tx), e.dispatchEvent(new CustomEvent("theme:product:add", {
					detail: {
						response: t,
						button: e
					},
					bubbles: !0
				}))), this.getCart()) : window.location = theme.routes.cart_url
			}).catch(t => {
				this.addToCartError(t, e), this.enableCartButtons()
			})          
          
		}
		updateCart(t = {}, e = null) {
			this.cart.classList.add(tB);
			let i = t.quantity;
			null !== e && (i ? e.classList.add(tB) : e.classList.add("is-removed")), this.disableCartButtons();
			let s = this.cart.querySelector(`[data-item="${t.id}"]`) || e,
				r = (null == s ? void 0 : s.hasAttribute(tJ)) ? parseInt(s.getAttribute(tJ)) : 0,
				o = (null == s ? void 0 : s.hasAttribute(t4)) ? s.getAttribute(t4) : null;
			0 !== r && fetch(theme.routes.cart_change_url, {
				method: "post",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json"
				},
				body: JSON.stringify({
					line: r,
					quantity: i
				})
			}).then(t => t.text()).then(t => {
				if (JSON.parse(t).errors) return this.cartUpdateFailed = !0, this.updateErrorText(o), this.toggleErrorMessage(), this.resetLineItem(e), void this.enableCartButtons();
				this.getCart()
			}).catch(t => {
				console.log(t), this.enableCartButtons()
			})
		}
		resetLineItem(t) {
			let e = t.querySelector(tj),
				i = e.getAttribute("value");
			e.value = i, t.classList.remove(tB)
		}
		disableCartButtons() {
			let t = this.cart.querySelectorAll("input"),
				e = this.cart.querySelectorAll(`button, ${tO}`);
			t.length && t.forEach(t => {
				t.classList.add(t_), t.blur(), t.disabled = !0
			}), e.length && e.forEach(t => {
				t.setAttribute(t2, !0)
			})
		}
		enableCartButtons() {
			let t = this.cart.querySelectorAll("input"),
				e = this.cart.querySelectorAll(`button, ${tO}`);
			t.length && t.forEach(t => {
				t.classList.remove(t_), t.disabled = !1
			}), e.length && e.forEach(t => {
				t.removeAttribute(t2)
			}), this.cart.classList.remove(tB)
		}
		updateErrorText(t) {
			this.cartErrorHolder.querySelector("[data-error-message]").innerText = t
		}
		toggleErrorMessage() {
			this.cartErrorHolder && (this.cartErrorHolder.classList.toggle(tI, this.cartUpdateFailed), this.cartUpdateFailed = !1)
		}
		cartErrorsHandler(t) {
			return t.ok ? t : t.json().then(function(e) {
				throw new tL({
					status: t.statusText,
					headers: t.headers,
					json: e
				})
			})
		}
		addToCartError(t, e) {
			var i;
			if (this.cartDrawerEnabled && this.closeCartDrawer(), null !== e) {
				let s = e.closest("[data-section-id]") || e.closest(tV) || e.closest("[data-quick-add-modal]"),
					r = null == s ? void 0 : s.querySelector(tN),
					o = e.closest(tV);
				o && o.querySelector(tN) && (r = o.querySelector(tN)), r && (r.innerHTML = `<div class="errors">${t.message}: ${t.description}<button type="button" class="errors__close" data-close-error><svg aria-hidden="true" focusable="false" role="presentation" width="24px" height="24px" stroke-width="1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="icon icon-cancel"><path d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></div>`, r.classList.add(tM), this.formErrorsEvents(r)), e.dispatchEvent(new CustomEvent("theme:product:add-error", {
					detail: {
						response: t,
						button: e
					},
					bubbles: !0
				}))
			}
			let n = null == e ? void 0 : e.closest(tV);
			n && n.dispatchEvent(new CustomEvent("theme:cart:error", {
				bubbles: !0,
				detail: {
					message: t.message,
					description: t.description,
					holder: n
				}
			})), null === (i = this.cart) || void 0 === i || i.classList.remove(tB)
		}
		productAddCallback(t) {
			let e = [],
				i = null,
				s = "theme:product:add-error" == t.type,
				r = t.detail.button,
				o = document.querySelector("[data-add-to-cart-bar]");
			e.push(r), i = r.closest(tV), o && e.push(o), e.forEach(t => {
				t.classList.remove(tB), s || t.classList.add(tx)
			}), setTimeout(() => {
				e.forEach(t => {
					var e, i;
					t.classList.remove(tx), (null === (e = t.closest(tW)) || void 0 === e ? void 0 : e.classList.contains("variant--soldout")) || (null === (i = t.closest(tW)) || void 0 === i ? void 0 : i.classList.contains("variant--unavailable")) || (t.disabled = !1)
				}), null == i || i.classList.remove(tM)
			}, 1e3)
		}
		openCartDrawerOnProductAdded() {
			this.cartDrawerIsOpen ? this.showAnimatedItems() : this.openCartDrawer()
		}
		openCartDrawer() {
			this.cartDrawer && (this.cartDrawerIsOpen = !0, this.onBodyClickEvent = this.onBodyClickEvent || this.onBodyClick.bind(this), document.body.addEventListener("click", this.onBodyClickEvent), document.dispatchEvent(new CustomEvent("theme:cart:open", {
				bubbles: !0
			})), document.dispatchEvent(new CustomEvent("theme:scroll:lock", {
				bubbles: !0
			})), this.cartDrawer.classList.add(tD), this.observeAdditionalCheckoutButtons(), setTimeout(this.showAnimatedItems), this.accessibility.trapFocus(this.cartDrawer, {
				elementToFocus: this.cartDrawer.querySelector(t8)
			}))
		}
		closeCartDrawer() {
			this.cartDrawer && this.cartDrawer.classList.contains(tD) && (this.cartDrawerIsOpen = !1, document.dispatchEvent(new CustomEvent("theme:cart:close", {
				bubbles: !0
			})), this.resetAnimatedItems(), this.itemsHolder.classList.remove(t9), this.cartEmpty.classList.remove(t9), this.cartErrorHolder.classList.remove(tI), this.cartDrawer.querySelectorAll(tF).forEach(t => {
				let e = () => {
					t.classList.remove(tH), t.removeEventListener("animationend", e)
				};
				t.classList.add(tH), t.addEventListener("animationend", e)
			}), this.cartDrawer.classList.remove(tD), this.accessibility.removeTrapFocus(), document.body.removeEventListener("click", this.onBodyClickEvent), document.dispatchEvent(new CustomEvent("theme:scroll:unlock", {
				bubbles: !0
			})))
		}
		toggleCartDrawer() {
			this.cartDrawerIsOpen ? this.closeCartDrawer() : this.openCartDrawer()
		}
		cartToggleEvents() {
			this.cartDrawer && (this.cartDrawerClose.addEventListener("click", t => {
				t.preventDefault(), this.closeCartDrawer()
			}), this.cartDrawer.addEventListener("keyup", t => {
				"Escape" === t.code && this.closeCartDrawer()
			}))
		}
		onBodyClick(t) {
			t.target.hasAttribute("data-drawer-underlay") && this.closeCartDrawer()
		}
		toggleClassesOnContainers() {
			let t = this.hasItemsInCart();
			this.cartEmpty.classList.toggle(tP, t), this.buttonHolder.classList.toggle(tP, !t), this.itemsHolder.classList.toggle(tP, !t)
		}
		build(t) {
			let e = t.querySelector("[data-api-line-items]"),
				s = t.querySelector("[data-api-upsell-items]"),
				r = Boolean(null === e && null === s),
				o = t.querySelector("[data-api-cart-price]"),
				n = t.querySelector(tz);
			this.priceHolder && o && (this.priceHolder.innerHTML = o.innerHTML), r ? (this.itemsHolder.innerHTML = t, this.upsellProductsHolder.innerHTML = "") : (this.itemsHolder.innerHTML = e.innerHTML, this.upsellProductsHolder.innerHTML = s.innerHTML, this.skipUpsellProductEvent(), this.checkSkippedUpsellProductsFromStorage(), this.toggleCartUpsellWidgetVisibility()), this.newTotalItems = e && e.querySelectorAll(t0).length ? e.querySelectorAll(t0).length : 0, this.subtotal = n && n.hasAttribute(t1) ? parseInt(n.getAttribute(t1)) : 0, this.cartCount = this.getCartItemCount(), document.dispatchEvent(new CustomEvent("theme:cart:change", {
				bubbles: !0,
				detail: {
					cartCount: this.cartCount
				}
			})), this.cartTotal.innerHTML = 0 === this.subtotal ? window.theme.strings.free : i.formatMoney(this.subtotal, theme.moneyWithCurrencyFormat), this.cart.classList.remove(tB), this.totalItems !== this.newTotalItems && (this.totalItems = this.newTotalItems, this.toggleClassesOnContainers()), this.cartDrawerIsOpen && this.itemsHolder.classList.add(t9), this.hasItemsInCart() || this.cartEmpty.querySelectorAll(tF).forEach(t => {
				t.classList.remove(tC)
			}), this.freeShippingMessageHandle(this.subtotal), this.cartRemoveEvents(), this.cartUpdateEvents(), this.toggleErrorMessage(), this.enableCartButtons(), this.updateProgress(), document.dispatchEvent(new CustomEvent("theme:product:added", {
				bubbles: !0
			})), this.cartDrawer || this.showAnimatedItems()
		}
		getCartItemCount() {
			return Array.from(this.cart.querySelectorAll(tj)).reduce((t, e) => t + parseInt(e.value), 0)
		}
		hasItemsInCart() {
			return this.totalItems > 0
		}
		freeShippingMessageHandle(t) {
			this.freeShipping.length && this.freeShipping.forEach(e => {
				let i = e.hasAttribute(tX) && "true" === e.getAttribute(tX) && t >= 0;
				e.classList.toggle("is-success", i && t >= this.freeShippingLimit)
			})
		}
		updateProgress() {
			if (this.freeShipping = document.querySelectorAll(tU), !this.freeShipping.length) return;
			let t = isNaN(this.subtotal / this.freeShippingLimit) ? 100 : this.subtotal / this.freeShippingLimit,
				e = Math.min(100 * t, 100),
				s = this.circumference - e / 100 * this.circumference / 2,
				r = i.formatMoney(this.freeShippingLimit - this.subtotal, theme.moneyFormat);
			this.freeShipping.forEach(t => {
				let i = t.querySelector("[data-progress-bar]"),
					o = t.querySelector("[data-progress-graph]"),
					n = t.querySelector("[data-left-to-spend]");
				n && (n.innerHTML = r.replace(".00", "")), i && (i.value = e), o && o.style.setProperty("--stroke-dashoffset", `${s}`)
			})
		}
		skipUpsellProductEvent() {
			if (null === this.upsellProductsHolder) return;
			let t = this.upsellProductsHolder.querySelectorAll("[data-skip-upsell-product]");
			t.length && t.forEach(t => {
				t.addEventListener("click", e => {
					e.preventDefault();
					let i = t.closest(tV).getAttribute(tG);
					this.skipUpsellProductsArray.includes(i) || this.skipUpsellProductsArray.push(i), window.sessionStorage.setItem("skip_upsell_products", this.skipUpsellProductsArray), this.removeUpsellProduct(i), this.toggleCartUpsellWidgetVisibility()
				})
			})
		}
		checkSkippedUpsellProductsFromStorage() {
			let t = window.sessionStorage.getItem("skip_upsell_products");
			t && t.split(",").forEach(t => {
				this.skipUpsellProductsArray.includes(t) || this.skipUpsellProductsArray.push(t), this.removeUpsellProduct(t)
			})
		}
		removeUpsellProduct(t) {
			if (!this.upsellProductsHolder) return;
			let e = this.upsellProductsHolder.querySelector(`[${tG}="${t}"]`);
			e && e.parentNode.remove()
		}
		toggleCartUpsellWidgetVisibility() {
			if (!this.upsellProductsHolder) return;
			let t = this.upsellProductsHolder.querySelectorAll(tV),
				e = this.upsellProductsHolder.closest("[data-upsell-widget]");
			e && e.classList.toggle(tP, !t.length)
		}
		observeAdditionalCheckoutButtons() {
			let t = this.cartDrawer.querySelector(".additional-checkout-buttons");
			if (t) {
				let e = new MutationObserver(() => {
					this.accessibility.trapFocus(this.cartDrawer, {
						elementToFocus: this.cartDrawer.querySelector(t8)
					}), e.disconnect()
				});
				e.observe(t, {
					subtree: !0,
					childList: !0
				})
			}
		}
		resetAnimatedItems() {
			this.cart.querySelectorAll(tF).forEach(t => {
				t.classList.remove(tC), t.classList.remove(tH)
			})
		}
		showAnimatedItems() {
			requestAnimationFrame(this.animateItems)
		}
		animateItems() {
			this.cart.querySelectorAll(tF).forEach(t => {
				t.classList.add(tC)
			})
		}
		constructor() {
			window.location.pathname.endsWith("/password") || this.init()
		}
	}, customElements.get("shipping-calculator") || customElements.define("shipping-calculator", tT);
	let t6 = "is-focused";
	window.accessibility = new class {
		init() {
			this.a11y = R, this.html = document.documentElement, this.body = document.body, this.inPageLink = document.querySelector("[data-skip-content]"), this.linkesWithOnlyHash = document.querySelectorAll('a[href="#"]'), this.a11y.focusHash(), this.a11y.bindInPageLinks(), this.clickEvents(), this.focusEvents()
		}
		clickEvents() {
			this.inPageLink && this.inPageLink.addEventListener("click", t => {
				t.preventDefault()
			}), this.linkesWithOnlyHash && this.linkesWithOnlyHash.forEach(t => {
				t.addEventListener("click", t => {
					t.preventDefault()
				})
			})
		}
		focusEvents() {
			document.addEventListener("mousedown", () => {
				this.body.classList.remove(t6)
			}), document.addEventListener("keyup", t => {
				"Tab" === t.code && this.body.classList.add(t6)
			})
		}
		constructor() {
			this.init()
		}
	}, customElements.define("main-search", class extends W {
		setupEventListeners() {
			let t = [];
			this.allSearchInputs.forEach(e => t.push(e.form)), this.input.addEventListener("focus", this.onInputFocus.bind(this)), t.length < 2 || (t.forEach(t => t.addEventListener("reset", this.onFormReset.bind(this))), this.allSearchInputs.forEach(t => t.addEventListener("input", this.onInput.bind(this))))
		}
		onFormReset(t) {
			super.onFormReset(t), super.shouldResetForm() && this.keepInSync("", this.input)
		}
		onInput(t) {
			let e = t.target;
			this.keepInSync(e.value, e)
		}
		onInputFocus() {
			E() || this.scrollIntoView({
				behavior: "smooth"
			})
		}
		keepInSync(t, e) {
			this.allSearchInputs.forEach(i => {
				i !== e && (i.value = t)
			})
		}
		constructor() {
			super(), this.allSearchInputs = document.querySelectorAll('input[type="search"]'), this.setupEventListeners()
		}
	});
	let tQ = "details",
		t5 = class extends HTMLElement {
			connectedCallback() {
				this.popdownContainer.addEventListener("keyup", t => "ESCAPE" === t.code.toUpperCase() && this.close()), this.popdownClose.addEventListener("click", this.close.bind(this)), this.popdownToggle.addEventListener("click", this.onPopdownToggleClick.bind(this)), this.popdownToggle.setAttribute("role", "button"), this.popdown.addEventListener("transitionend", t => {
					"visibility" == t.propertyName && this.popdownContainer.hasAttribute("open") && "false" == this.popdownContainer.getAttribute("open") && this.popdownContainer.removeAttribute("open")
				})
			}
			onPopdownToggleClick(t) {
				t.preventDefault(), t.target.closest(tQ).hasAttribute("open") ? this.close() : this.open(t)
			}
			onBodyClick(t) {
				this.contains(t.target) && !t.target.hasAttribute("data-popdown-underlay") || this.close()
			}
			open(t) {
				this.onBodyClickEvent = this.onBodyClickEvent || this.onBodyClick.bind(this), t.target.closest(tQ).setAttribute("open", ""), document.body.addEventListener("click", this.onBodyClickEvent), document.dispatchEvent(new CustomEvent("theme:scroll:lock", {
					bubbles: !0
				})), requestAnimationFrame(() => {
					t.target.closest(tQ).setAttribute("open", "true"), this.a11y.trapFocus(this.popdown, {
						elementToFocus: this.popdown.querySelector('input:not([type="hidden"])')
					})
				})
			}
			close() {
				this.a11y.removeTrapFocus(), this.popdownContainer.setAttribute("open", "false"), document.body.removeEventListener("click", this.onBodyClickEvent), document.dispatchEvent(new CustomEvent("theme:scroll:unlock", {
					bubbles: !0
				}))
			}
			constructor() {
				super(), this.popdown = this.querySelector("[data-popdown]"), this.popdownContainer = this.querySelector(tQ), this.popdownToggle = this.querySelector("[data-popdown-toggle]"), this.popdownClose = this.querySelector("[data-popdown-close]"), this.a11y = R
			}
		};
	// customElements.define("header-search-popdown", t5);
	// let tY = "[data-collapsible]",
	// 	t7 = "[data-collapsible-trigger]",
	// 	tK = "[data-collapsible-body]",
	// 	tZ = "[data-collapsible-content]",
	// 	et = "open",
	// 	ee = class extends HTMLElement {
	// 		connectedCallback() {
	// 			this.collapsibles.forEach(t => {
	// 				let e = t.querySelector(t7),
	// 					i = t.querySelector(tK);
	// 				e.addEventListener("click", t => this.onCollapsibleClick(t)), i.addEventListener("transitionend", e => {
	// 					e.target === i && ("true" == t.getAttribute(et) && this.setBodyHeight(i, "auto"), "false" == t.getAttribute(et) && (t.removeAttribute(et), this.setBodyHeight(i, "")))
	// 				})
	// 			})
	// 		}
	// 		open(t) {
	// 			if ("true" == t.getAttribute("open")) return;
	// 			let e = t.querySelector(tK),
	// 				i = t.querySelector(tZ);
	// 			t.setAttribute("open", !0), this.setBodyHeight(e, i.offsetHeight)
	// 		}
	// 		close(t) {
	// 			if (!t.hasAttribute("open")) return;
	// 			let e = t.querySelector(tK),
	// 				i = t.querySelector(tZ);
	// 			this.setBodyHeight(e, i.offsetHeight), t.setAttribute("open", !1), requestAnimationFrame(() => {
	// 				requestAnimationFrame(() => {
	// 					this.setBodyHeight(e, 0)
	// 				})
	// 			})
	// 		}
	// 		setBodyHeight(t, e) {
	// 			t.style.height = "auto" !== e && "" !== e ? `${e}px` : e
	// 		}
	// 		onCollapsibleClick(t) {
	// 			t.preventDefault();
	// 			let e = (t.target.matches(t7) ? t.target : t.target.closest(t7)).closest(tY);
	// 			this.single && this.collapsibles.forEach(t => {
	// 				t.hasAttribute(et) && t != e && requestAnimationFrame(() => {
	// 					this.close(t)
	// 				})
	// 			}), e.hasAttribute(et) ? this.close(e) : this.open(e), e.dispatchEvent(new CustomEvent("theme:form:sticky", {
	// 				bubbles: !0,
	// 				detail: {
	// 					element: "accordion"
	// 				}
	// 			}))
	// 		}
	// 		constructor() {
	// 			super(), this.collapsibles = this.querySelectorAll(tY), this.single = this.hasAttribute("single")
	// 		}
	// 	};

   customElements.define("header-search-popdown", t5);
      let tY = "[data-collapsible]",
        t7 = "[data-collapsible-trigger]",
        tK = "[data-collapsible-body]",
        tZ = "[data-collapsible-content]",
        et = "open",
        ee = class extends HTMLElement {
          connectedCallback() {
            this.collapsibles.forEach(t => {
              let e = t.querySelector(t7),
                i = t.querySelector(tK);
              e.addEventListener("click", t => this.onCollapsibleClick(t)), i.addEventListener("transitionend", e => {
                                e.target === i && ("true" == t.getAttribute(et) && this.setBodyHeight(i, "auto"), "false" == t.getAttribute(et) && (t.removeAttribute(et), this.setBodyHeight(i, "")))
              })
            })
      //       if (this.collapsibles.length > 0) {
      //   this.open(this.collapsibles[0]); // Open the first accordion
      // }                                                                                                                                                                                               
          }
           
    
          // open(t) {
          //   let e = t.querySelector(tK),
          //     i = t.querySelector(tZ);
          //   t.setAttribute("open", true);
          //   this.setBodyHeight(e, i.offsetHeight);
          // }
          // close(t) {
          //   let e = t.querySelector(tK),
          //     i = t.querySelector(tZ);
          //   this.setBodyHeight(e, i.offsetHeight);
          //   t.setAttribute("open", false);
          //   requestAnimationFrame(() => {
          //     requestAnimationFrame(() => {
          //       this.setBodyHeight(e, 0);
          //     });
          //   });
          // }
//                  open(t) {          
//           let e = t.querySelector(tK),
//               i = t.querySelector(tZ);
        
//           t.setAttribute("open", true);
//          const filterGroupBody = t.querySelector('.filter-group__body');
//   if (filterGroupBody) {
//     filterGroupBody.classList.add('new_class');
//   }
//           // Temporarily unhide all hidden options to calculate full height
//           const hiddenItems = i.querySelectorAll('.hidden[data-link-hidden]');
//           hiddenItems.forEach(item => item.classList.remove('hidden'));
        
//           requestAnimationFrame(() => {
//             this.setBodyHeight(e, i.offsetHeight);
        
//             // Add hidden class back (after height is measured)
//             hiddenItems.forEach(item => item.classList.add('hidden'));
//           });
// }
                    open(t) {
  let e = t.querySelector(tK),
      i = t.querySelector(tZ);

  t.setAttribute("open", true);

  const filterGroupBody = t.querySelector('.filter-group__body');
  if (filterGroupBody) {
    filterGroupBody.classList.add('new_class');
  }

  // 👇 REMOVE "hidden" CLASS FROM ALL HIDDEN FILTER OPTIONS
  const hiddenItems = i.querySelectorAll('[data-link-hidden]');
  hiddenItems.forEach(item => {
    item.classList.remove('hidden');
  });

  // ✅ Set height after removing hidden class
  requestAnimationFrame(() => {
    this.setBodyHeight(e, i.offsetHeight);
  });
}
          close(t) {            
         
  const filterGroupBody = t.querySelector('.filter-group__body');
  if (filterGroupBody) {
    filterGroupBody.classList.remove('new_class');
  }
            let e = t.querySelector(tK),
              i = t.querySelector(tZ);
            this.setBodyHeight(e, i.offsetHeight);
            t.setAttribute("open", false);
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                this.setBodyHeight(e, 0);
              });
            });
          }
          setBodyHeight(t, e) {
            t.style.height = e !== "auto" && e !== "" ? `${e}px` : e;
          }
          onCollapsibleClick(t) {
            t.preventDefault();
            let e = (t.target.matches(t7) ? t.target : t.target.closest(t7)).closest(tY);
            e.hasAttribute(et) ? this.close(e) : this.open(e);
            e.dispatchEvent(new CustomEvent("theme:form:sticky", {
              bubbles: true,
              detail: {
                element: "accordion"
              }
            }));
          }
          constructor() {
            super();
            this.collapsibles = this.querySelectorAll(tY);
          }
        };

	customElements.get("collapsible-elements") || customElements.define("collapsible-elements", ee);
	let ei = "data-form-id",
		es = "hidden",
		er = document.querySelector(".template-addresses");
	er && new class {
		init() {
			if (this.addressNewForm) {
				let t = this.section,
					e = this.addressNewForm;
				this.customerAddresses();
				let i = t.querySelectorAll(".address-new-toggle");
				i.length && i.forEach(t => {
					t.addEventListener("click", function() {
						e.classList.toggle(es)
					})
				});
				let s = t.querySelectorAll(".address-edit-toggle");
				s.length && s.forEach(e => {
					e.addEventListener("click", function() {
						let e = this.getAttribute(ei);
						t.querySelector(`#EditAddress_${e}`).classList.toggle(es)
					})
				});
				let r = t.querySelectorAll(".address-delete");
				r.length && r.forEach(t => {
					t.addEventListener("click", function() {
						let t = this.getAttribute(ei),
							e = this.getAttribute("data-confirm-message");
						confirm(e) && Shopify.postLink(window.theme.routes.addresses_url + "/" + t, {
							parameters: {
								_method: "delete"
							}
						})
					})
				})
			}
		}
		customerAddresses() {
			Shopify.CountryProvinceSelector && new Shopify.CountryProvinceSelector("AddressCountryNew", "AddressProvinceNew", {
				hideElement: "AddressProvinceContainerNew"
			}), this.section.querySelectorAll(".address-country-option").forEach(t => {
				let e = t.getAttribute(ei),
					i = `AddressCountry_${e}`,
					s = `AddressProvince_${e}`,
					r = `AddressProvinceContainer_${e}`;
				new Shopify.CountryProvinceSelector(i, s, {
					hideElement: r
				})
			})
		}
		constructor(t) {
			this.section = t, this.addressNewForm = this.section.querySelector("#AddressNewForm"), this.init()
		}
	}(er);
	let eo = ".account-sidebar--mobile",
		en = document.querySelector(".customer-logged-in");
	en && new class {
		init() {
			this.section.querySelector(".account") && this.accountMobileSidebar()
		}
		accountMobileSidebar() {
			this.section.querySelector(eo) && this.section.querySelector(eo).addEventListener("click", function() {
				let t = this.nextElementSibling;
				t && "UL" === t.tagName && t.classList.toggle("visible")
			})
		}
		constructor(t) {
			this.section = t, this.init()
		}
	}(en);
	let ea = "#recover",
		el = "is-hidden",
		eh = document.querySelector("[data-account-form]");
	eh && new class {
		init() {
			window.location.hash == ea || this.recoverSuccess ? this.showRecoverPasswordForm() : this.hideRecoverPasswordForm(), this.showButton.addEventListener("click", (function(t) {
				t.preventDefault(), this.showRecoverPasswordForm()
			}).bind(this), !1), this.hideButton.addEventListener("click", (function(t) {
				t.preventDefault(), this.hideRecoverPasswordForm()
			}).bind(this), !1)
		}
		showRecoverPasswordForm() {
			return this.login.classList.add(el), this.recover.classList.remove(el), window.location.hash = ea, !1
		}
		hideRecoverPasswordForm() {
			return this.recover.classList.add(el), this.login.classList.remove(el), window.location.hash = "", !1
		}
		constructor(t) {
			this.form = t, this.showButton = t.querySelector("[data-show-reset]"), this.hideButton = t.querySelector("[data-hide-reset]"), this.recover = t.querySelector("[data-recover-password]"), this.recoverSuccess = t.querySelector("[data-recover-success]"), this.login = t.querySelector("[data-login-form]"), this.init()
		}
	}(eh), window.Shopify = window.Shopify || {}, window.Shopify.theme = window.Shopify.theme || {}, window.Shopify.theme.sections = window.Shopify.theme.sections || {}, window.Shopify.theme.sections.registered = window.Shopify.theme.sections.registered || {}, window.Shopify.theme.sections.instances = window.Shopify.theme.sections.instances || [];
	let ec = window.Shopify.theme.sections.registered,
		ed = window.Shopify.theme.sections.instances,
		eu = "data-section-id",
		ep = "data-section-type",
		em = class {
			callFunctions(t, e = null) {
				this.callStack[t].forEach(t => {
					let i = {
						id: this.id,
						type: this.type,
						container: this.container
					};
					e ? t.call(i, e) : t.call(i)
				})
			}
			onLoad() {
				this.callFunctions("onLoad")
			}
			onUnload() {
				this.callFunctions("onUnload")
			}
			onSelect(t) {
				this.callFunctions("onSelect", t)
			}
			onDeselect(t) {
				this.callFunctions("onDeselect", t)
			}
			onBlockSelect(t) {
				this.callFunctions("onBlockSelect", t)
			}
			onBlockDeselect(t) {
				this.callFunctions("onBlockDeselect", t)
			}
			onReorder(t) {
				this.callFunctions("onReorder", t)
			}
			constructor(t, e) {
				this.container = function(t) {
					if (!(t instanceof Element)) throw TypeError("Theme Sections: Attempted to load section. The section container provided is not a DOM element.");
					if (null === t.getAttribute(eu)) throw Error("Theme Sections: The section container provided does not have an id assigned to the " + eu + " attribute.");
					return t
				}(t), this.id = t.getAttribute(eu), this.type = e.type, this.callStack = e.getStack();
				try {
					this.onLoad()
				} catch (i) {
					console.warn(`Error in section: ${this.id}`), console.warn(this), console.warn(i)
				}
			}
		};

	function eg(t, e) {
		if ("string" != typeof t) throw TypeError("Theme Sections: The first argument for .register must be a string that specifies the type of the section being registered");
		if (void 0 !== ec[t]) throw Error('Theme Sections: A section of type "' + t + '" has already been registered. You cannot register the same section type twice');
		Array.isArray(e) || (e = [e]);
		let i = new class {
			getStack() {
				return this.callStack
			}
			constructor(t = null, e = []) {
				this.type = t, this.components = function(t) {
					if (void 0 !== t && "object" != typeof t || null === t) throw TypeError("Theme Sections: The components object provided is not a valid");
					return t
				}(e), this.callStack = {
					onLoad: [],
					onUnload: [],
					onSelect: [],
					onDeselect: [],
					onBlockSelect: [],
					onBlockDeselect: [],
					onReorder: []
				}, e.forEach(t => {
					for (let [e, i] of Object.entries(t)) {
						let s = this.callStack[e];
						Array.isArray(s) && "function" == typeof i ? s.push(i) : (console.warn(`Unregisted function: '${e}' in component: '${this.type}'`), console.warn(i))
					}
				})
			}
		}(t, e);
		return ec[t] = i, ec
	}

	function ev(t, e) {
		t = eb(t), void 0 === e && (e = document.querySelectorAll("[" + ep + "]")), e = eS(e), t.forEach(function(t) {
			let i = ec[t];
			void 0 !== i && (e = e.filter(function(e) {
				return !(ey(e).length > 0) && null !== e.getAttribute(ep) && (e.getAttribute(ep) !== t || (ed.push(new em(e, i)), !1))
			}))
		})
	}

	function ey(t) {
		var e = [];
		if (NodeList.prototype.isPrototypeOf(t) || Array.isArray(t)) var i = t[0];
		return t instanceof Element || i instanceof Element ? eS(t).forEach(function(t) {
			e = e.concat(ed.filter(function(e) {
				return e.container === t
			}))
		}) : ("string" == typeof t || "string" == typeof i) && eb(t).forEach(function(t) {
			e = e.concat(ed.filter(function(e) {
				return e.type === t
			}))
		}), e
	}

	function ef(t) {
		for (var e, i = 0; i < ed.length; i++)
			if (ed[i].id === t) {
				e = ed[i];
				break
			} return e
	}

	function eb(t) {
		return "*" === t ? t = Object.keys(ec) : "string" == typeof t ? t = [t] : t.constructor === em ? t = [t.prototype.type] : Array.isArray(t) && t[0].constructor === em && (t = t.map(function(t) {
			return t.type
		})), t = t.map(function(t) {
			return t.toLowerCase()
		})
	}

	function eS(t) {
		return NodeList.prototype.isPrototypeOf(t) && t.length > 0 ? t = Array.prototype.slice.call(t) : NodeList.prototype.isPrototypeOf(t) && 0 === t.length || null === t ? t = [] : !Array.isArray(t) && t instanceof Element && (t = [t]), t
	}
	window.Shopify.designMode && (document.addEventListener("shopify:section:load", function(t) {
		var e = t.detail.sectionId,
			i = t.target.querySelector("[" + eu + '="' + e + '"]');
		null !== i && ev(i.getAttribute(ep), i)
	}), document.addEventListener("shopify:section:reorder", function(t) {
		var e = t.detail.sectionId,
			i = t.target.querySelector("[" + eu + '="' + e + '"]');
		"object" == typeof ey(i)[0] && ey(i).forEach(function(t) {
			t.onReorder()
		})
	}), document.addEventListener("shopify:section:unload", function(t) {
		var e = t.detail.sectionId,
			i = t.target.querySelector("[" + eu + '="' + e + '"]');
		"object" == typeof ey(i)[0] && ey(i).forEach(function(t) {
			var e = ed.map(function(t) {
				return t.id
			}).indexOf(t.id);
			ed.splice(e, 1), t.onUnload()
		})
	}), document.addEventListener("shopify:section:select", function(t) {
		var e = ef(t.detail.sectionId);
		"object" == typeof e && e.onSelect(t)
	}), document.addEventListener("shopify:section:deselect", function(t) {
		var e = ef(t.detail.sectionId);
		"object" == typeof e && e.onDeselect(t)
	}), document.addEventListener("shopify:block:select", function(t) {
		var e = ef(t.detail.sectionId);
		"object" == typeof e && e.onBlockSelect(t)
	}), document.addEventListener("shopify:block:deselect", function(t) {
		var e = ef(t.detail.sectionId);
		"object" == typeof e && e.onBlockDeselect(t)
	}));
	let eE = "data-tooltip",
		eL = "data-tooltip-stop-mouseenter",
		ew = "is-visible",
		ek = "is-hiding",
		eA = {},
		e$ = class {
			init() {
				if (!document.querySelector(`.${this.class}`)) {
					let t = `<div class="${this.class}__arrow"></div><div class="${this.class}__inner"><div class="${this.class}__text"></div></div>`,
						e = document.createElement("div");
					e.className = this.class, e.innerHTML = t, document.body.appendChild(e)
				}
				this.tooltip.addEventListener("mouseenter", this.addPinMouseEvent), this.tooltip.addEventListener("mouseleave", this.removePinMouseEvent), this.tooltip.addEventListener("theme:tooltip:init", this.addPinEvent), document.addEventListener("theme:tooltip:close", this.removePinEvent)
			}
			addPin(t = !1) {
				let e = document.querySelector(`.${this.class}`);
				if (e && (t && !this.tooltip.hasAttribute(eL) || !t)) {
					let i = e.querySelector(`.${this.class}__arrow`),
						s = e.querySelector(`.${this.class}__inner`);
					e.querySelector(`.${this.class}__text`).textContent = this.label;
					let r = s.offsetWidth,
						o = this.tooltip.getBoundingClientRect(),
						n = o.top,
						a = o.width,
						l = n + o.height + window.scrollY,
						h = o.left - r / 2 + a / 2,
						c = h + r - b();
					c > 0 && (h -= c), h < 0 && (h = 0), i.style.left = `${o.left+a/2}px`, e.style.setProperty("--tooltip-top", `${l}px`), s.style.transform = `translateX(${h}px)`, e.classList.remove(ek), e.classList.add(ew), document.addEventListener("theme:scroll", this.removePinEvent)
				}
			}
			removePin(t, e = !1, i = !1) {
				let s = document.querySelector(`.${this.class}`),
					r = s.classList.contains(ew);
				s && (e && !this.tooltip.hasAttribute(eL) || !e) && (r && (i || t.detail.hideTransition) && (s.classList.add(ek), this.hideTransitionTimeout && clearTimeout(this.hideTransitionTimeout), this.hideTransitionTimeout = setTimeout(() => {
					s.classList.remove(ek)
				}, this.transitionSpeed)), s.classList.remove(ew), document.removeEventListener("theme:scroll", this.removePinEvent))
			}
			unload() {
				this.tooltip.removeEventListener("mouseenter", this.addPinMouseEvent), this.tooltip.removeEventListener("mouseleave", this.removePinMouseEvent), this.tooltip.removeEventListener("theme:tooltip:init", this.addPinEvent), document.removeEventListener("theme:tooltip:close", this.removePinEvent), document.removeEventListener("theme:scroll", this.removePinEvent)
			}
			constructor(t, e = {}) {
				this.tooltip = t, this.tooltip.hasAttribute(eE) && (this.label = this.tooltip.getAttribute(eE), this.class = e.class || "tooltip-default", this.transitionSpeed = e.transitionSpeed || 200, this.hideTransitionTimeout = 0, this.addPinEvent = () => this.addPin(), this.addPinMouseEvent = () => this.addPin(!0), this.removePinEvent = t => tq(this.removePin(t), 50), this.removePinMouseEvent = t => this.removePin(t, !0, !0), this.init())
			}
		},
		eT = {
			onLoad() {
				eA[this.id] = [], this.container.querySelectorAll(`[${eE}]`).forEach(t => {
					eA[this.id].push(new e$(t))
				})
			},
			onUnload: function() {
				eA[this.id].forEach(t => {
					"function" == typeof t.unload && t.unload()
				})
			}
		};
	var eq = {};
	let eC = {
		onLoad() {
			eq[this.id] = [], this.container.querySelectorAll("[data-parallax-wrapper]").forEach(t => {
				let e = t.querySelector("[data-parallax-img]");
				eq[this.id].push(new s(e, {
					center: !0,
					round: !0,
					frame: t
				}))
			}), window.addEventListener("load", () => {
				eq[this.id].forEach(t => {
					"function" == typeof t.refresh && t.refresh()
				})
			})
		},
		onUnload: function() {
			eq[this.id].forEach(t => {
				"function" == typeof t.destroy && t.destroy()
			})
		}
	};
	eg("article", [eT, eC]);
	let ex = "[data-slide]",
		e_ = "[data-slider]",
		eP = "[data-slider-thumb]",
		eH = {
			arrowPositionMiddle: "data-arrow-position-middle",
			equalizeHeight: "data-equalize-height",
			slideIndex: "data-slide-index",
			sliderOptions: "data-options",
			slideTextColor: "data-slide-text-color"
		},
		eB = "aos-animate",
		eD = "desktop",
		eM = "flickity-resize",
		eI = "flickity-resizing",
		e9 = "is-loading",
		eF = "is-selected",
		e8 = "mobile",
		eO = {},
		eR = class {
			init() {
				this.slideshow.classList.add(e9);
				let t = ex,
					e = E(),
					i = `${ex}:not(.${e8})`,
					s = `${ex}:not(.${eD})`;
				(this.slideshow.querySelectorAll(s).length || this.slideshow.querySelectorAll(i).length) && (t = e ? i : s), this.slideshow.querySelectorAll(t).length <= 1 && (this.slideshow.classList.add("single-slide"), this.slideshow.classList.remove(e9)), this.sliderOptions = {
					cellSelector: t,
					contain: !0,
					wrapAround: !0,
					adaptiveHeight: !0,
					...this.customOptions,
					on: {
						ready: () => {
							requestAnimationFrame(() => {
								this.slideshow.classList.add("is-initialized"), this.slideshow.classList.remove(e9), this.slideshow.parentNode.dispatchEvent(new CustomEvent("theme:slider:loaded", {
									bubbles: !0,
									detail: {
										slider: this
									}
								}))
							}), this.slideActions(), this.sliderOptions.prevNextButtons && this.positionArrows()
						},
						change: t => {
							let e = this.slideshowSlides[t];
							if (!e || this.sliderOptions.groupCells) return;
							let i = e.querySelectorAll("[data-aos]");
							i.length && i.forEach(t => {
								t.classList.remove(eB), requestAnimationFrame(() => {
									setTimeout(() => {
										t.classList.add(eB)
									}, 0)
								})
							})
						},
						resize: () => {
							this.sliderOptions.prevNextButtons && this.positionArrows()
						}
					}
				}, this.sliderOptions.fade && (this.flkty = new o(this.slideshow, this.sliderOptions)), this.sliderOptions.fade || (this.flkty = new r(this.slideshow, this.sliderOptions)), this.isHeightEqualized && this.equalizeHeight(), this.flkty.on("change", () => this.slideActions(!0)), this.sliderThumbs.length && this.sliderThumbs.forEach(t => {
					t.addEventListener("click", e => {
						e.preventDefault();
						let i = [...t.parentElement.children].indexOf(t);
						this.flkty.select(i)
					})
				}), this.flkty && this.flkty.isActive || this.slideshow.classList.remove(e9)
			}
			resetSlider() {
				this.slideshow && (this.flkty && this.flkty.isActive ? this.flkty.select(0, !1, !0) : this.slideshow.scrollTo({
					left: 0,
					behavior: "auto"
				}))
			}
			slideActions(t = !1) {
				let e = this.slideshow.querySelector(`.${eF}`),
					i = e.getAttribute(eH.slideTextColor),
					s = e.querySelector("a:not(.btn)"),
					r = this.slideshow.querySelectorAll(`${ex} a, ${ex} button`);
				if (document.body.classList.contains("is-focused") && s && this.sliderOptions.groupCells && t && s.focus(), r.length && r.forEach(t => {
						let e = t.closest(ex);
						if (e) {
							let i = e.classList.contains(eF) ? 0 : -1;
							t.setAttribute("tabindex", i)
						}
					}), "rgba(0,0,0,0)" !== i && "" !== i && this.slideshow.style.setProperty("--text", i), this.sliderThumbs.length && this.sliderThumbs.length === this.slideshowSlides.length && e.hasAttribute(eH.slideIndex)) {
					let o = parseInt(e.getAttribute(eH.slideIndex)),
						n = this.container.querySelector(`${eP}.${eF}`);
					n && n.classList.remove(eF), this.sliderThumbs[o].classList.add(eF)
				}
			}
			positionArrows() {
				if (this.slideshow.hasAttribute(eH.arrowPositionMiddle) && this.sliderOptions.prevNextButtons) {
					let t = this.slideshow.querySelector(".collection-item__image") || this.slideshow.querySelector(".product-item__image") || this.slideshow.querySelector("[data-column-image]");
					t && (this.slideshow.querySelector(".flickity-button.previous").style.top = t.clientHeight / 2 + "px", this.slideshow.querySelector(".flickity-button.next").style.top = t.clientHeight / 2 + "px")
				}
			}
			equalizeHeight() {
				r.prototype._createResizeClass = function() {
					requestAnimationFrame(() => {
						this.element.classList.add(eM)
					})
				}, this.flkty._createResizeClass();
				let t = r.prototype.resize;
				r.prototype.resize = function() {
					this.element.classList.remove(eM), this.element.classList.add(eI), t.call(this), requestAnimationFrame(() => {
						this.element.classList.remove(eI), this.element.classList.add(eM)
					})
				}
			}
			onUnload() {
				this.slideshow && this.flkty && (this.flkty.options.watchCSS = !1, this.flkty.destroy())
			}
			onBlockSelect(t) {
				if (!this.slideshow) return;
				let e = this.slideshow.querySelector(`[data-slide="${t.detail.blockId}"]`);
				if (!e) return;
				let i = parseInt(e.getAttribute(eH.slideIndex));
				this.multipleSlides && !this.slideshow.classList.contains("js-slider--initialized") && (i = 0), this.slideshow.classList.add(eF), this.flkty && this.slideshow.classList.contains("flickity-enabled") && (this.flkty.selectCell(i), this.flkty.stopPlayer())
			}
			onBlockDeselect() {
				this.slideshow && (this.slideshow.classList.remove(eF), this.flkty && this.sliderOptions.hasOwnProperty("autoPlay") && this.sliderOptions.autoPlay && this.flkty.playPlayer())
			}
			constructor(t, e = null) {
				this.container = t, this.slideshow = e || this.container.querySelector(e_), this.slideshow && (this.slideshowSlides = this.slideshow.querySelectorAll(ex), this.slideshowSlides.length <= 1 || (this.sliderThumbs = this.container.querySelectorAll(eP), this.multipleSlides = this.slideshow.hasAttribute(eH.slidesLargeDesktop), this.isHeightEqualized = "true" === this.slideshow.getAttribute(eH.equalizeHeight), this.slideshow.hasAttribute(eH.sliderOptions) && (this.customOptions = JSON.parse(decodeURIComponent(this.slideshow.getAttribute(eH.sliderOptions)))), this.flkty = null, this.init()))
			}
		},
		ez = {
			onLoad() {
				eO[this.id] = [], this.container.querySelectorAll(e_).forEach(t => {
					eO[this.id].push(new eR(this.container, t))
				})
			},
			onUnload() {
				eO[this.id].forEach(t => {
					"function" == typeof t.onUnload && t.onUnload()
				})
			},
			onBlockSelect(t) {
				eO[this.id].forEach(e => {
					"function" == typeof e.onBlockSelect && e.onBlockSelect(t)
				})
			},
			onBlockDeselect(t) {
				eO[this.id].forEach(e => {
					"function" == typeof e.onBlockDeselect && e.onBlockDeselect(t)
				})
			}
		};
	eg("blog-section", [ez]), eg("hero", eC), eg("double", ez);
	let eN = t => {
			let {
				stickyHeaderHeight: e
			} = h();
			window.scrollTo({
				top: t + window.scrollY - e,
				left: 0,
				behavior: "smooth"
			})
		},
		eW = class {
			write() {
				(-1 === document.cookie.indexOf("; ") || document.cookie.split("; ").find(t => t.startsWith(this.name))) && -1 !== document.cookie.indexOf("; ") || (document.cookie = `${this.name}=${this.value}; expires=${this.configuration.expires}; path=${this.configuration.path}; domain=${this.configuration.domain}; sameSite=${this.configuration.sameSite}; secure=${this.configuration.secure}`)
			}
			read() {
				return !!(-1 !== document.cookie.indexOf("; ") && document.cookie.split("; ").find(t => t.startsWith(this.name))) && document.cookie.split("; ").find(t => t.startsWith(this.name)).split("=")[1]
			}
			destroy() {
				document.cookie.split("; ").find(t => t.startsWith(this.name)) && (document.cookie = `${this.name}=null; expires=${this.configuration.expires}; path=${this.configuration.path}; domain=${this.configuration.domain}`)
			}
			constructor(t, e, i = 7) {
				let s = new Date,
					r = new Date;
				r.setTime(s.getTime() + 864e5 * i), this.configuration = {
					expires: r.toGMTString(),
					path: "/",
					domain: window.location.hostname,
					sameSite: "none",
					secure: !0
				}, this.name = t, this.value = e
			}
		},
		eU = "has-success",
		e0 = "has-error",
		eV = "hidden",
		ej = {},
		e3 = {
			onLoad() {
				ej[this.id] = [], this.container.querySelectorAll("[data-newsletter-form]").forEach(t => {
					ej[this.id].push(new class {
						init() {
							this.newsletter.addEventListener("submit", this.newsletterSubmit), this.showMessage()
						}
						newsletterSubmitEvent(t) {
							this.stopSubmit && (t.preventDefault(), t.stopImmediatePropagation(), this.removeStorage(), this.writeStorage(), this.stopSubmit = !1, this.newsletter.submit())
						}
						checkForChallengePage() {
							this.isChallengePage = "/challenge" === window.location.pathname
						}
						writeStorage() {
							void 0 !== this.sessionStorage && this.sessionStorage.setItem("newsletter_form_id", this.newsletter.id)
						}
						readStorage() {
							this.formID = this.sessionStorage.getItem("newsletter_form_id")
						}
						removeStorage() {
							this.sessionStorage.removeItem("newsletter_form_id")
						}
						showMessage() {
							if (this.readStorage(), this.newsletter.id === this.formID) {
								let t = document.getElementById(this.formID),
									e = t.parentElement.querySelector("[data-newsletter-heading]"),
									i = -1 !== window.location.search.indexOf("?customer_posted=true"),
									s = -1 !== window.location.search.indexOf("accepts_marketing");
								i ? (t.classList.remove(e0), t.classList.add(eU), e && (e.classList.add(eV), t.classList.remove(eV)), this.popup && this.cookie.write()) : s && (t.classList.remove(eU), t.classList.add(e0), e && (e.classList.add(eV), t.classList.remove(eV))), (i || s) && window.addEventListener("load", () => {
									this.scrollToForm(t)
								})
							}
						}
						scrollToForm(t) {
							let e = t.getBoundingClientRect();
							e.top >= 0 && e.left >= 0 && e.bottom <= S() && e.right <= b() || setTimeout(() => {
								eN(t.getBoundingClientRect().top)
							}, 500)
						}
						unload() {
							this.newsletter.removeEventListener("submit", this.newsletterSubmit)
						}
						constructor(t) {
							this.sessionStorage = window.sessionStorage, this.newsletter = t, this.popup = this.newsletter.closest("[data-newsletter]"), this.popup && (this.cookie = new eW(this.popup.getAttribute("data-cookie-name"), "user_has_closed", null)), this.stopSubmit = !0, this.isChallengePage = !1, this.formID = null, this.checkForChallengePage(), this.newsletterSubmit = t => this.newsletterSubmitEvent(t), this.isChallengePage || this.init()
						}
					}(t))
				})
			},
			onUnload() {
				ej[this.id].forEach(t => {
					"function" == typeof t.unload && t.unload()
				})
			}
		};
	eg("footer", [eC, e3]);
	let e1 = "[data-collection-sidebar]",
		e2 = "input",
		eX = "[data-field-price-min]",
		eJ = "[data-field-price-max]",
		e4 = "[data-se-min-value]",
		eG = "[data-se-max-value]",
		e6 = "data-se-min-value",
		eQ = "data-se-max-value",
		e5 = "data-se-min",
		eY = "data-se-max",
		e7 = "[data-products-grid]",
		eK = "[data-filter-update-url]",
		eZ = "data-active-filters-count",
		it = "data-sort-enabled",
		ie = "hidden",
		ii = "is-loading",
		is = class extends HTMLElement {
			connectedCallback() {
				this.form && (this.sidebar.addEventListener("input", this.updatePriceEvent), this.sidebar.addEventListener("theme:range:update", this.updateRangeEvent)), this.sidebar && this.sidebar.addEventListener("click", this.filterUpdateFromUrlEvent), this.productsContainer && this.productsContainer.addEventListener("click", this.filterUpdateFromUrlEvent), this.sort && this.container.addEventListener("theme:filter:sort-update", this.submitFormEvent), (this.sidebar || this.sort) && window.addEventListener("popstate", this.submitFormEvent), this.showMoreOptions.length && this.showMoreOptions.forEach(t => {
					t.addEventListener("click", this.showMoreEvent)
				})
			}
			showMore(t) {
				t.preventDefault(), t.target.parentElement.classList.add(ie), t.target.parentElement.previousElementSibling.querySelectorAll("[data-link-hidden]").forEach((t, e) => {
					t.classList.remove(ie);
					let i = t.querySelector(e2);
					0 === e && document.body.classList.contains("is-focused") && i && (this.collectionSidebarSlideOut || L() ? (this.accessibility.removeTrapFocus(), this.accessibility.trapFocus(this.sidebar, {
						elementToFocus: i
					})) : i.focus())
				})
			}
			updatePrice(t) {
				let e = t.type,
					i = t.target;
				if ((e === e2 || "select" === e || "label" === e || "textarea" === e) && this.form && "function" == typeof this.form.submit) {
					let s = this.form.querySelector(eX),
						r = this.form.querySelector(eJ);
					s && r && (i.hasAttribute("data-field-price-min") && !r.value ? r.value = r.placeholder : i.hasAttribute("data-field-price-max") && !s.value && (s.value = s.placeholder)), this.submitForm(t)
				}
			}
			filterUpdateFromUrl(t) {
				let e = t.target;
				if (e.matches(eK) || e.closest(eK) && e) {
					t.preventDefault();
					let i = e.matches(eK) ? e : e.closest(eK);
					this.submitForm(t, i.getAttribute("href"))
				}
			}
			submitForm(t, e = "") {
				this.sort = this.container.querySelector(`[${it}]`);
				let i = this.sort ? this.sort.getAttribute(it) : "";
				if (!t || t && "popstate" !== t.type) {
					if ("" === e) {
						let s = new window.URL(window.location.href).searchParams,
							r = Object.fromEntries(s),
							o = s.toString();
						if (o.includes("filter.") || o.includes("page="))
							for (let n in r)(n.includes("filter.") || "page" === n) && s.delete(n);
						if (this.form) {
							let a = new FormData(this.form),
								l = new URLSearchParams(a),
								h = this.form.querySelector(e4),
								c = this.form.querySelector(eG),
								d = h && h.hasAttribute(e5) ? h.getAttribute(e5) : "",
								u = c && c.hasAttribute(eY) ? c.getAttribute(eY) : "",
								p = 0;
							for (let [m, g] of l.entries()) m.includes("filter.") && g && (s.append(m, g), (g === d && "filter.v.price.gte" === m || g === u && "filter.v.price.lte" === m) && (p += 1));
							2 === p && (s.delete("filter.v.price.gte"), s.delete("filter.v.price.lte"))
						}
						if (i || t && t.detail && t.detail.href) {
							let v = i || t.detail.href;
							s.set("sort_by", v)
						}
						let y = s.toString(),
							f = y ? `?${y}` : location.pathname;
						window.history.pushState(null, "", f)
					} else window.history.pushState(null, "", e)
				} else this.sort && this.sort.dispatchEvent(new CustomEvent("theme:filter:sort", {
					bubbles: !1
				}));
				this.productsContainer && (this.productsContainer.classList.add(ii), fetch(`${window.location.pathname}${window.location.search}`).then(t => t.text()).then(t => {
					if (this.productsContainer.innerHTML = (new DOMParser).parseFromString(t, "text/html").querySelector(e7).innerHTML, this.sidebar) {
						this.sidebar.innerHTML = (new DOMParser).parseFromString(t, "text/html").querySelector(e1).innerHTML;
						let e = this.sidebar.querySelector(`[${eZ}]`),
							i = this.container.querySelectorAll("[data-active-filters]");
						if (e && i.length) {
							let s = parseInt(e.getAttribute(eZ));
							i.forEach(t => {
								t.textContent = s, t.classList.toggle(ie, s < 1)
							})
						}
						this.sidebar.dispatchEvent(new CustomEvent("theme:filter:update", {
							bubbles: !0
						}))
					}
					this.collectionNav && eN(this.productsContainer.getBoundingClientRect().top - this.collectionNav.offsetHeight), setTimeout(() => {
						this.productsContainer.classList.remove(ii)
					}, 500)
				}).catch(t => {
					console.log(t)
				}))
			}
			updateRange(t) {
				if (this.form && "function" == typeof this.form.submit) {
					let e = this.form.querySelector(e4),
						i = this.form.querySelector(eG),
						s = this.form.querySelector(eX),
						r = this.form.querySelector(eJ);
					if (e && i && s && r && e.hasAttribute(e6) && i.hasAttribute(eQ)) {
						let o = parseInt(s.placeholder),
							n = parseInt(r.placeholder),
							a = parseInt(e.getAttribute(e6)),
							l = parseInt(i.getAttribute(eQ));
						o === a && n === l || (s.value = a, r.value = l, this.submitForm(t))
					}
				}
			}
			disconnectedCallback() {
				this.form && (this.sidebar.removeEventListener("input", this.updatePriceEvent), this.sidebar.removeEventListener("theme:range:update", this.updateRangeEvent)), this.sidebar && this.sidebar.removeEventListener("click", this.filterUpdateFromUrlEvent), this.productsContainer && this.productsContainer.removeEventListener("click", this.filterUpdateFromUrlEvent), this.sort && this.container.removeEventListener("theme:filter:sort-update", this.submitFormEvent), (this.sidebar || this.sort) && window.removeEventListener("popstate", this.submitFormEvent), this.showMoreOptions.length && this.showMoreOptions.forEach(t => {
					t.removeEventListener("click", this.showMoreEvent)
				})
			}
			constructor() {
				super(), this.container = this.closest("[data-section-type]"), this.sidebar = this.container.querySelector(e1), this.collectionSidebarSlideOut = this.container.querySelector("[data-collection-sidebar-slide-out]"), this.sort = this.container.querySelector(`[${it}]`), this.productsContainer = this.container.querySelector(e7), this.collectionNav = this.container.querySelector("[data-collection-nav]"), this.form = this.querySelector("[data-collection-filters-form]"), this.showMoreOptions = this.querySelectorAll("[data-show-more]"), this.accessibility = R, this.filterUpdateFromUrlEvent = t => this.filterUpdateFromUrl(t), this.submitFormEvent = t => this.submitForm(t), this.updatePriceEvent = f(t => this.updatePrice(t), 500), this.updateRangeEvent = t => this.updateRange(t), this.showMoreEvent = t => this.showMore(t)
			}
		},
		ir = "data-se-min-value",
		io = "data-se-max-value",
		ia = "data-se-step",
		il = class extends HTMLElement {
			connectedCallback() {
				let t = this.min;
				this.hasAttribute(ir) && (t = parseFloat(this.getAttribute(ir)));
				let e = this.max;
				this.hasAttribute(io) && (e = parseFloat(this.getAttribute(io))), t < this.min && (t = this.min), e > this.max && (e = this.max), t > e && (t = e), this.getAttribute(ia) && (this.step = Math.abs(parseFloat(this.getAttribute(ia)))), this.reset(), this.maxX = this.offsetWidth - this.touchRight.offsetWidth, this.selectedTouch = null, this.initialValue = this.lineSpan.offsetWidth - this.normalizeFact, this.setMinValue(t), this.setMaxValue(e), this.touchLeft.addEventListener("mousedown", this.onStartEvent), this.touchRight.addEventListener("mousedown", this.onStartEvent), this.touchLeft.addEventListener("touchstart", this.onStartEvent, {
					passive: !0
				}), this.touchRight.addEventListener("touchstart", this.onStartEvent, {
					passive: !0
				}), this.classList.add("is-initialized")
			}
			reset() {
				this.touchLeft.style.left = "0px", this.touchRight.style.left = this.offsetWidth - this.touchLeft.offsetWidth + "px", this.lineSpan.style.marginLeft = "0px", this.lineSpan.style.width = this.offsetWidth - this.touchLeft.offsetWidth + "px", this.startX = 0, this.x = 0
			}
			setMinValue(t) {
				let e = (t - this.min) / (this.max - this.min);
				this.touchLeft.style.left = Math.ceil(e * (this.offsetWidth - (this.touchLeft.offsetWidth + this.normalizeFact))) + "px", this.lineSpan.style.marginLeft = this.touchLeft.offsetLeft + "px", this.lineSpan.style.width = this.touchRight.offsetLeft - this.touchLeft.offsetLeft + "px", this.setAttribute(ir, t)
			}
			setMaxValue(t) {
				let e = (t - this.min) / (this.max - this.min);
				this.touchRight.style.left = Math.ceil(e * (this.offsetWidth - (this.touchLeft.offsetWidth + this.normalizeFact)) + this.normalizeFact) + "px", this.lineSpan.style.marginLeft = this.touchLeft.offsetLeft + "px", this.lineSpan.style.width = this.touchRight.offsetLeft - this.touchLeft.offsetLeft + "px", this.setAttribute(io, t)
			}
			onStart(t) {
				let e = t;
				t.touches && (e = t.touches[0]), t.currentTarget === this.touchLeft ? this.x = this.touchLeft.offsetLeft : t.currentTarget === this.touchRight && (this.x = this.touchRight.offsetLeft), this.startX = e.pageX - this.x, this.selectedTouch = t.currentTarget, document.addEventListener("mousemove", this.onMoveEvent), document.addEventListener("mouseup", this.onStopEvent), document.addEventListener("touchmove", this.onMoveEvent, {
					passive: !0
				}), document.addEventListener("touchend", this.onStopEvent, {
					passive: !0
				})
			}
			onMove(t) {
				let e = t;
				t.touches && (e = t.touches[0]), this.x = e.pageX - this.startX, this.selectedTouch === this.touchLeft ? (this.x > this.touchRight.offsetLeft - this.selectedTouch.offsetWidth + 10 ? this.x = this.touchRight.offsetLeft - this.selectedTouch.offsetWidth + 10 : this.x < 0 && (this.x = 0), this.selectedTouch.style.left = this.x + "px") : this.selectedTouch === this.touchRight && (this.x < this.touchLeft.offsetLeft + this.touchLeft.offsetWidth - 10 ? this.x = this.touchLeft.offsetLeft + this.touchLeft.offsetWidth - 10 : this.x > this.maxX && (this.x = this.maxX), this.selectedTouch.style.left = this.x + "px"), this.lineSpan.style.marginLeft = this.touchLeft.offsetLeft + "px", this.lineSpan.style.width = this.touchRight.offsetLeft - this.touchLeft.offsetLeft + "px", this.calculateValue(), this.getAttribute("on-change") && Function("min, max", this.getAttribute("on-change"))(this.getAttribute(ir), this.getAttribute(io)), this.onChange(this.getAttribute(ir), this.getAttribute(io))
			}
			onStop() {
				document.removeEventListener("mousemove", this.onMoveEvent), document.removeEventListener("mouseup", this.onStopEvent), document.removeEventListener("touchmove", this.onMoveEvent), document.removeEventListener("touchend", this.onStopEvent), this.selectedTouch = null, this.calculateValue(), this.onChanged(this.getAttribute(ir), this.getAttribute(io))
			}
			onChange(t, e) {
				let i = this.closest("[data-range-holder]");
				if (i) {
					let s = i.querySelector("[data-field-price-min]"),
						r = i.querySelector("[data-field-price-max]");
					s && r && (s.value = t, r.value = e)
				}
			}
			onChanged(t, e) {
				this.hasAttribute("data-range-filter-update") && this.dispatchEvent(new CustomEvent("theme:range:update", {
					bubbles: !0
				}))
			}
			calculateValue() {
				let t = (this.lineSpan.offsetWidth - this.normalizeFact) / this.initialValue,
					e = this.lineSpan.offsetLeft / this.initialValue,
					i = e + t;
				if (e = e * (this.max - this.min) + this.min, i = i * (this.max - this.min) + this.min, 0 !== this.step) {
					let s = Math.floor(e / this.step);
					e = this.step * s, s = Math.floor(i / this.step), i = this.step * s
				}
				this.selectedTouch === this.touchLeft && this.setAttribute(ir, e), this.selectedTouch === this.touchRight && this.setAttribute(io, i)
			}
			onSidebarTransitionEnd(t) {
				t.target == this.sidebar && "min-width" == t.propertyName && (this.sidebar.removeEventListener("transitionend", this.sidebarTransitionEvent), this.connectedCallback())
			}
			disconnectedCallback() {
				this.sidebar.removeEventListener("transitionend", this.sidebarTransitionEvent), this.resizeEvent && document.removeEventListener("theme:resize:width", this.resizeEvent)
			}
			constructor() {
				super(), this.sidebar = this.closest("[data-collection-sidebar]"), this.sidebarTransitionEvent = t => this.onSidebarTransitionEnd(t), this.resizeEvent = () => {
					this.connectedCallback(), this.sidebar.addEventListener("transitionend", this.sidebarTransitionEvent)
				}, this.onMoveEvent = t => this.onMove(t), this.onStopEvent = t => this.onStop(t), this.onStartEvent = t => this.onStart(t), this.startX = 0, this.x = 0, this.touchLeft = this.querySelector("[data-range-left]"), this.touchRight = this.querySelector("[data-range-right]"), this.lineSpan = this.querySelector("[data-range-line]"), this.min = parseFloat(this.getAttribute("data-se-min")), this.max = parseFloat(this.getAttribute("data-se-max")), this.step = 0, this.normalizeFact = 26, document.addEventListener("theme:resize:width", this.resizeEvent)
			}
		},
		ih = "data-sort-enabled",
		ic = "data-value",
		id = "[data-collection-sidebar-slide-out]",
		iu = "[data-collection-sidebar-close]",
		ip = "drawer--animated",
		im = "expanded",
		ig = "is-active",
		iv = {};
	eg("collection", [ez, eC, {
		onLoad() {
			iv[this.id] = new class {
				init() {
					this.sort && this.initSort(), null !== this.groupTagsButton && (document.addEventListener("theme:resize:width", this.sidebarResizeEvent), this.groupTagsButton.addEventListener("click", this.groupTagsButtonClickEvent), this.collectionSidebar && setTimeout(() => {
						this.collectionSidebar.classList.remove("no-mobile-animation")
					}, 1e3), new MutationObserver(t => {
						for (let e of t) "attributes" === e.type && "true" == e.target.getAttribute("aria-expanded") && this.showSidebarCallback()
					}).observe(this.groupTagsButton, {
						attributes: !0,
						childList: !1,
						subtree: !1
					})), this.collectionSidebarCloseButtons.length && this.collectionSidebarCloseButtons.forEach(t => {
						t.addEventListener("click", this.collectionSidebarCloseEvent)
					}), this.container.addEventListener("keyup", (function(t) {
						"Escape" === t.code && this.hideSidebar()
					}).bind(this)), this.collectionSidebar && (this.collectionSidebar.addEventListener("transitionend", () => {
						this.collectionSidebar.classList.contains(im) || this.collectionSidebar.classList.remove(ip)
					}), this.toggleSidebarSlider(), this.collectionSidebar.addEventListener("theme:filter:update", () => {
						let t = this.container.querySelectorAll(iu);
						t.length && t.forEach(t => {
							t.addEventListener("click", this.collectionSidebarCloseEvent)
						})
					}))
				}
				sortActions(t, e = !0) {
					let i = t ? t.getAttribute(ic) : "";
					this.sort.setAttribute(ih, i);
					let s = this.sort.querySelector("[data-sort-button-text]"),
						r = this.sort.querySelector(`.${ig}`);
					if (s) {
						let o = t ? t.textContent.trim() : "";
						s.textContent = o
					}
					r && r.classList.remove(ig), this.sort.classList.toggle(ig, t), t && (t.parentElement.classList.add(ig), e && t.dispatchEvent(new CustomEvent("theme:filter:sort-update", {
						bubbles: !0,
						detail: {
							href: i
						}
					})))
				}
				onSortButtonClick(t) {
					t.preventDefault(), this.sortButton && this.sortButton.dispatchEvent(new Event("click")), this.sortActions(t.currentTarget)
				}
				onSortCheck(t) {
					let e = null;
					if (window.location.search.includes("sort_by")) {
						let i = new window.URL(window.location.href).searchParams;
						for (let [s, r] of i.entries()) {
							let o = this.sort.querySelector(`[${ic}="${r}"]`);
							if (s.includes("sort_by") && o) {
								e = o;
								break
							}
						}
					}
					this.sortActions(e, !1)
				}
				initSort() {
					this.sortLinks.forEach(t => {
						t.addEventListener("click", this.onSortButtonClickEvent)
					}), this.sort.addEventListener("theme:filter:sort", this.onSortCheckEvent), this.sortButton && this.sortButton.addEventListener("click", () => {
						let t = this.collectionSidebar.classList.contains(im);
						L() && t && this.hideSidebar()
					})
				}
				showSidebarCallback() {
					let t = this.container.querySelector(id),
						e = document.documentElement.hasAttribute("data-scroll-locked"),
						i = L();
					this.collectionSidebar.classList.add(ip), null === t && !i && e && (this.accessibility.removeTrapFocus(), document.dispatchEvent(new CustomEvent("theme:scroll:unlock", {
						bubbles: !0
					}))), (i || null !== t) && (t && this.accessibility.trapFocus(this.collectionSidebar, {
						elementToFocus: this.collectionSidebar.querySelector(iu)
					}), document.dispatchEvent(new CustomEvent("theme:scroll:lock", {
						bubbles: !0
					})))
				}
				hideSidebar() {
					let t = this.container.querySelector(id),
						e = document.documentElement.hasAttribute("data-scroll-locked");
					this.groupTagsButton.setAttribute("aria-expanded", "false"), this.collectionSidebar.classList.remove(im), t && this.accessibility.removeTrapFocus(), e && document.dispatchEvent(new CustomEvent("theme:scroll:unlock", {
						bubbles: !0
					}))
				}
				toggleSidebarSlider() {
					L() ? this.hideSidebar() : this.collectionSidebar.classList.contains(im) && this.showSidebarCallback()
				}
				collectionSidebarClose(t) {
					t.preventDefault(), this.hideSidebar(), document.body.classList.contains("is-focused") && this.groupTagsButton && this.groupTagsButton.focus()
				}
				groupTagsButtonClick() {
					document.documentElement.hasAttribute("data-scroll-locked") && document.dispatchEvent(new CustomEvent("theme:scroll:unlock", {
						bubbles: !0
					}))
				}
				onUnload() {
					null !== this.groupTagsButton && (document.removeEventListener("theme:resize:width", this.sidebarResizeEvent), this.groupTagsButton.removeEventListener("click", this.groupTagsButtonClickEvent)), this.collectionSidebarCloseButtons.length && this.collectionSidebarCloseButtons.forEach(t => {
						t.removeEventListener("click", this.collectionSidebarCloseEvent)
					}), this.sort && (this.sortLinks.forEach(t => {
						t.removeEventListener("click", this.onSortButtonClickEvent)
					}), this.sort.removeEventListener("theme:filter:sort", this.onSortCheckEvent))
				}
				constructor(t) {
					this.container = t.container, this.sort = this.container.querySelector(`[${ih}]`), this.sortButton = this.container.querySelector("[data-popout-toggle]"), this.sortLinks = this.container.querySelectorAll("[data-sort-link]"), this.collectionSidebar = this.container.querySelector("[data-collection-sidebar]"), this.collectionSidebarCloseButtons = this.container.querySelectorAll(iu), this.groupTagsButton = this.container.querySelector("[data-aria-toggle]"), this.collectionNav = this.container.querySelector("[data-collection-nav]"), this.accessibility = R, this.groupTagsButtonClickEvent = t => this.groupTagsButtonClick(t), this.collectionSidebarCloseEvent = t => this.collectionSidebarClose(t), this.onSortButtonClickEvent = t => this.onSortButtonClick(t), this.onSortCheckEvent = t => this.onSortCheck(t), this.sidebarResizeEvent = () => this.toggleSidebarSlider(), this.init()
				}
			}(this)
		},
		onUnload() {
			iv[this.id].onUnload()
		}
	}, eT]), customElements.get("collection-filters-form") || customElements.define("collection-filters-form", is), customElements.get("range-slider") || customElements.define("range-slider", il);
	let iy = "data-clone",
		ib = "speed",
		iS = "ticker--animated",
		iE = class extends HTMLElement {
			connectedCallback() {
				this.checkWidth(), this.addEventListener("theme:ticker:refresh", this.checkWidthEvent), document.addEventListener("theme:resize:width", this.checkWidthEvent)
			}
			disconnectedCallback() {
				document.removeEventListener("theme:resize:width", this.checkWidthEvent)
			}
			checkWidth() {
				let t = 2 * window.getComputedStyle(this).paddingLeft.replace("px", "");
				if (this.clientWidth - t < this.comparitor.clientWidth || this.autoplay) {
					if (this.text.classList.add(iS), 1 === this.scale.childElementCount) {
						if (this.clone = this.text.cloneNode(!0), this.clone.setAttribute(iy, ""), this.scale.appendChild(this.clone), this.autoplay)
							for (let e = 0; e < 10; e++) {
								let i = this.text.cloneNode(!0);
								i.setAttribute(iy, ""), this.scale.appendChild(i)
							}
						let s = (this.text.clientWidth / 100 * Number(this.speed)).toFixed(2);
						this.scale.style.setProperty("--animation-time", `${s}s`)
					}
				} else {
					this.text.classList.add(iS);
					let r = this.scale.querySelector(`[${iy}]`);
					r && this.scale.removeChild(r), this.text.classList.remove(iS)
				}
			}
			constructor() {
				super(), this.autoplay = this.hasAttribute("autoplay"), this.scale = this.querySelector("[data-ticker-scale]"), this.text = this.querySelector("[data-ticker-text]"), this.speed = this.hasAttribute(ib) ? this.getAttribute(ib) : 1.63, this.comparitor = this.text.cloneNode(!0), this.comparitor.classList.add("ticker__comparitor"), this.appendChild(this.comparitor), this.scale.classList.remove("ticker--unloaded"), this.checkWidthEvent = this.checkWidth.bind(this)
			}
		},
		iL = {
			slide: "[data-slide]",
			slider: "[data-slider]"
		},
		iw = "data-target-referrer",
		ik = class extends HTMLElement {
			connectedCallback() {
				this.removeAnnouncement(), this.slider && this.initSliders(), this.addEventListener("theme:block:select", t => {
					this.onBlockSelect(t)
				}), this.addEventListener("theme:block:deselect", t => {
					this.onBlockDeselect(t)
				}), document.dispatchEvent(new CustomEvent("theme:announcement:init", {
					bubbles: !0
				}))
			}
			removeAnnouncement() {
				for (let t = 0; t < this.slides.length; t++) {
					let e = this.slides[t];
					e.hasAttribute(iw) && (-1 !== this.locationPath.indexOf(e.getAttribute(iw)) || window.Shopify.designMode || e.parentNode.removeChild(e))
				}
			}
			initSliders() {
				this.initSlider(), document.addEventListener("theme:resize:width", this.initSliderEvent), this.addEventListener("theme:slider:loaded", () => {
					var t;
					null === (t = this.querySelectorAll(iL.tickerBar)) || void 0 === t || t.forEach(t => {
						t.dispatchEvent(new CustomEvent("theme:ticker:refresh"))
					})
				})
			}
			initSlider() {
				var t, e;
				let i = E(),
					s = !i;
				(i && this.enableSlider || s && !this.enableSlider) && (null === (t = this.slider.flkty) || void 0 === t || t.destroy(), i && this.enableSlider ? this.enableSlider = !1 : s && !this.enableSlider && (this.enableSlider = !0), this.slider = new eR(this, this.querySelector(iL.slider)), null === (e = this.slider.flkty) || void 0 === e || e.reposition())
			}
			onBlockSelect(t) {
				this.slider && this.slider.onBlockSelect(t)
			}
			onBlockDeselect(t) {
				this.slider ? this.slider.onBlockDeselect(t) : this.toggleTicker(t, !1)
			}
			disconnectedCallback() {
				document.removeEventListener("theme:resize:width", this.initSliderEvent), document.removeEventListener("theme:resize:width", this.tickerResizeEvent)
			}
			constructor() {
				super(), this.locationPath = location.href, this.slides = this.querySelectorAll(iL.slide), this.slider = this.querySelector(iL.slider), this.enableSlider = E(), this.initSliderEvent = t => this.initSlider(t)
			}
		};
	customElements.get("announcement-bar") || customElements.define("announcement-bar", ik), customElements.get("ticker-bar") || customElements.define("ticker-bar", iE);
	let iA = "[data-drawer]",
		i$ = "drawer--animated",
		iT = "is-open",
		iq = "is-focused",
		iC = {},
		ix = ".page-header",
		i_ = "js__header__stuck",
		iP = {},
		iH = "is-visible",
		iB = "meganav--visible",
		iD = "meganav--is-transitioning",
		iM = {},
		iI = {},
		i9 = "data-cart-count",
		iF = {
			slideruleOpen: "data-sliderule-open",
			slideruleClose: "data-sliderule-close",
			sliderulePane: "data-sliderule-pane",
			slideruleWrappper: "[data-sliderule]",
			drawerContent: "[data-drawer-content]",
			focusable: 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
			dataAnimates: "data-animates",
			children: ":scope > [data-animates],\n             :scope > * > [data-animates],\n             :scope > * > * >[data-animates],\n             :scope > * > .sliderule-grid  > *"
		},
		i8 = "is-visible",
		iO = "is-hiding",
		iR = "is-hidden",
		iz = "is-scrolling",
		iN = {},
		iW = "js__show__mobile",
		iU = {};
	eg("header", [{
		onLoad() {
			iU = new class {
				initTicker(t = !1) {
					this.tickerFrames.forEach(e => {
						new iE(e, t)
					}), this.tickerResizeEvent = t => this.onTickerResize(t), document.addEventListener("theme:resize:width", this.tickerResizeEvent)
				}
				listenWidth() {
					"ResizeObserver" in window ? (this.resizeObserver = new ResizeObserver(this.checkWidth), this.resizeObserver.observe(this.wrapper)) : document.addEventListener("theme:resize", this.checkWidth)
				}
				killDeadLinks() {
					this.deadLinks.forEach(t => {
						t.onclick = t => {
							t.preventDefault()
						}
					})
				}
				checkWidth() {
					document.body.clientWidth < this.minWidth ? this.wrapper.classList.add(iW) : this.wrapper.classList.remove(iW)
				}
				getMinWidth() {
					let t = this.wrapper.cloneNode(!0);
					t.classList.add("js__header__clone"), document.body.appendChild(t);
					let e = t.querySelectorAll("[data-takes-space-wrapper]"),
						i = 0,
						s = 0;
					return e.forEach(t => {
						var e, r;
						let o = t.querySelectorAll("[data-child-takes-space]"),
							n = 0,
							a, l;
						(n = 3 === o.length ? (a = [], (e = o).forEach(t => {
							t.firstElementChild && a.push(t.firstElementChild.clientWidth)
						}), a[0] > a[2] ? a[2] = a[0] : a[0] = a[2], a.reduce((t, e) => t + e)) : (l = 0, (r = o).forEach(t => {
							l += t.clientWidth
						}), l)) > i && (i = n, s = 20 * o.length)
					}), document.body.removeChild(t), i + s
				}
				cartToggleEvent() {
					let t = this.wrapper.querySelectorAll("[data-cart-toggle]");
					t.length && t.forEach(t => {
						t.addEventListener("click", t => {
							t.preventDefault(), document.dispatchEvent(new CustomEvent("theme:cart:toggle", {
								bubbles: !0
							}))
						})
					})
				}
				unload() {
					var t;
					"ResizeObserver" in window ? null === (t = this.resizeObserver) || void 0 === t || t.unobserve(this.wrapper) : document.removeEventListener("theme:resize", this.checkWidth)
				}
				constructor(t) {
					this.wrapper = t, this.style = this.wrapper.dataset.style, this.desktop = this.wrapper.querySelector("[data-header-desktop]"), this.deadLinks = document.querySelectorAll('.navlink[href="#"]'), this.resizeObserver = null, this.checkWidth = this.checkWidth.bind(this), this.killDeadLinks(), "drawer" !== this.style && this.desktop && (this.minWidth = this.getMinWidth(), this.listenWidth()), this.cartToggleEvent();
					let e = document.querySelector(".main-content > .shopify-section.section-overlay-header:first-of-type");
					document.body.classList.toggle("has-header-transparent", this.wrapper.hasAttribute("data-header-transparent")), document.body.classList.toggle("has-first-section-overlay-header", e)
				}
			}(this.container)
		},
		onUnload() {
			"function" == typeof iU.unload && iU.unload()
		}
	}, {
		onLoad() {
			iC[this.id] = [], this.container.querySelectorAll(iA).forEach(t => {
				iC[this.id].push(new class {
					connectToggle() {
						this.buttons.forEach(t => {
							t.addEventListener("click", () => {
								this.drawer.dispatchEvent(new CustomEvent("theme:drawer:toggle", {
									bubbles: !1
								}))
							})
						})
					}
					connectDrawer() {
						this.drawer.addEventListener("theme:drawer:toggle", () => {
							this.drawer.classList.contains(iT) ? this.drawer.dispatchEvent(new CustomEvent("theme:drawer:close", {
								bubbles: !0
							})) : this.drawer.dispatchEvent(new CustomEvent("theme:drawer:open", {
								bubbles: !0
							}))
						}), this.drawerInner && this.drawerInner.addEventListener("transitionend", t => {
							t.target == this.drawerInner && (this.drawer.classList.contains(iT) || (this.drawer.classList.remove(i$), document.dispatchEvent(new CustomEvent("theme:sliderule:close", {
								bubbles: !1
							}))))
						}), document.addEventListener("theme:cart:open", this.hideDrawer), document.addEventListener("theme:drawer:close", this.hideDrawer), document.addEventListener("theme:drawer:open", this.showDrawer)
					}
					watchFocus(t) {
						!this.wrapper.contains(t.target) && this.body.classList.contains(iq) && this.hideDrawer()
					}
					closers() {
						this.wrapper.addEventListener("keyup", (function(t) {
							"Escape" === t.code && (this.hideDrawer(), this.buttons[0].focus())
						}).bind(this)), this.underlay.addEventListener("click", () => {
							this.hideDrawer()
						})
					}
					showDrawer() {
						this.drawerInner && this.drawerInner.querySelector(this.btnSelector) && (this.accessibility.removeTrapFocus(), this.drawerInner.addEventListener("transitionend", t => {
							t.target == this.drawerInner && this.drawer.classList.contains(iT) && this.accessibility.trapFocus(this.drawerInner, {
								elementToFocus: this.drawerInner.querySelector(this.btnSelector)
							})
						})), this.buttons.forEach(t => {
							t.setAttribute("aria-expanded", !0)
						}), this.drawer.classList.add(iT), this.drawer.classList.add(i$), this.drawer.querySelector('button, [href], select, textarea, [tabindex]:not([tabindex="-1"])').focus(), document.addEventListener("focusin", this.initWatchFocus), document.dispatchEvent(new CustomEvent("theme:scroll:lock", {
							bubbles: !0
						}))
					}
					hideDrawer() {
						this.drawer.classList.contains(iT) && (this.accessibility.removeTrapFocus(), this.body.classList.contains(iq) && this.buttons.length && this.buttons[0].focus(), this.buttons.forEach(t => {
							t.setAttribute("aria-expanded", !1)
						}), this.drawer.classList.remove(iT), document.removeEventListener("focusin", this.initWatchFocus), document.dispatchEvent(new CustomEvent("theme:scroll:unlock", {
							bubbles: !0
						})))
					}
					onUnload() {
						document.removeEventListener("theme:cart:open", this.hideDrawer), document.removeEventListener("theme:drawer:close", this.hideDrawer), document.removeEventListener("theme:drawer:open", this.showDrawer)
					}
					constructor(t) {
						this.drawer = t, this.drawerWrapper = this.drawer.closest(iA), this.drawerInner = this.drawer.querySelector("[data-drawer-inner]"), this.underlay = this.drawer.querySelector("[data-drawer-underlay]"), this.wrapper = this.drawer.closest("[data-header-wrapper]"), this.key = this.drawer.dataset.drawer, this.btnSelector = `[data-drawer-toggle='${this.key}']`, this.buttons = document.querySelectorAll(this.btnSelector), this.staggers = this.drawer.querySelectorAll("[data-stagger-animation]"), this.body = document.querySelector("body"), this.accessibility = R, this.initWatchFocus = t => this.watchFocus(t), this.showDrawer = this.showDrawer.bind(this), this.hideDrawer = this.hideDrawer.bind(this), this.connectToggle(), this.connectDrawer(), this.closers()
					}
				}(t))
			})
		},
		onUnload() {
			iC[this.id].forEach(t => {
				"function" == typeof t.onUnload && t.onUnload()
			})
		}
	}, {
		onLoad() {
			iN[this.id] = [], this.container.querySelectorAll(iF.slideruleWrappper).forEach(t => {
				iN[this.id].push(new class {
					clickEvents() {
						this.trigger.addEventListener("click", () => {
							this.cachedButton = this.trigger, this.showSliderule()
						}), this.exit.forEach(t => {
							t.addEventListener("click", () => {
								this.hideSliderule()
							})
						})
					}
					keyboardEvents() {
						this.sliderule.addEventListener("keyup", t => {
							t.stopPropagation(), "Escape" === t.code && this.hideSliderule()
						})
					}
					trapFocusSliderule(t = !0) {
						let e = t ? this.sliderule.querySelector(this.exitSelector) : this.cachedButton;
						this.accessibility.removeTrapFocus(), e && this.drawerContent && this.accessibility.trapFocus(this.drawerContent, {
							elementToFocus: document.body.classList.contains("is-focused") ? e : null
						})
					}
					hideSliderule(t = !1) {
						let e = parseInt(this.pane.dataset.sliderulePane, 10) - 1;
						this.pane.setAttribute(iF.sliderulePane, e), this.pane.classList.add(iO), this.sliderule.classList.add(iO);
						let i = t ? `[${iF.dataAnimates}].${iR}` : `[${iF.dataAnimates}="${e}"]`,
							s = this.pane.querySelectorAll(i);
						s.length && s.forEach(t => {
							t.classList.remove(iR)
						});
						let r = t ? this.pane.querySelectorAll(`.${i8}, .${iO}`) : this.children;
						r.forEach((i, s) => {
							let o = r.length - 1 == s;
							i.classList.remove(i8), t && (i.classList.remove(iO), this.pane.classList.remove(iO));
							let n = () => {
								parseInt(this.pane.getAttribute(iF.sliderulePane)) === e && this.sliderule.classList.remove(i8), this.sliderule.classList.remove(iO), this.pane.classList.remove(iO), o && (this.accessibility.removeTrapFocus(), t || this.trapFocusSliderule(!1)), i.removeEventListener("animationend", n)
							};
							window.theme.settings.enableAnimations ? i.addEventListener("animationend", n) : n()
						})
					}
					showSliderule() {
						let t = null,
							e = this.sliderule.closest(`.${i8}`),
							i = this.pane;
						e && (i = e), i.scrollTo({
							top: 0,
							left: 0,
							behavior: "smooth"
						}), i.classList.add(iz);
						let s = () => {
							i.scrollTop <= 0 ? (i.classList.remove(iz), t && cancelAnimationFrame(t)) : t = requestAnimationFrame(s)
						};
						t = requestAnimationFrame(s), this.sliderule.classList.add(i8);
						let r = parseInt(this.pane.dataset.sliderulePane, 10);
						this.pane.setAttribute(iF.sliderulePane, r + 1);
						let o = this.pane.querySelectorAll(`[${iF.dataAnimates}="${r}"]`);
						o.length && o.forEach((t, e) => {
							let i = o.length - 1 == e;
							t.classList.add(iO);
							let s = () => {
								t.classList.remove(iO), parseInt(this.pane.getAttribute(iF.sliderulePane)) !== r && t.classList.add(iR), i && this.trapFocusSliderule(), t.removeEventListener("animationend", s)
							};
							window.theme.settings.enableAnimations ? t.addEventListener("animationend", s) : s()
						})
					}
					closeSliderule() {
						this.pane && this.pane.hasAttribute(iF.sliderulePane) && parseInt(this.pane.getAttribute(iF.sliderulePane)) > 0 && (this.hideSliderule(!0), parseInt(this.pane.getAttribute(iF.sliderulePane)) > 0 && this.pane.setAttribute(iF.sliderulePane, 0))
					}
					onUnload() {
						document.removeEventListener("theme:sliderule:close", this.closeSliderule)
					}
					constructor(t) {
						this.sliderule = t, this.key = this.sliderule.id;
						let e = `[${iF.slideruleOpen}='${this.key}']`;
						this.exitSelector = `[${iF.slideruleClose}='${this.key}']`, this.trigger = document.querySelector(e), this.exit = document.querySelectorAll(this.exitSelector), this.pane = document.querySelector(`[${iF.sliderulePane}]`), this.children = this.sliderule.querySelectorAll(iF.children), this.drawerContent = document.querySelector(iF.drawerContent), this.cachedButton = null, this.accessibility = R, this.trigger.setAttribute("aria-haspopup", !0), this.trigger.setAttribute("aria-expanded", !1), this.trigger.setAttribute("aria-controls", this.key), this.closeSliderule = this.closeSliderule.bind(this), this.clickEvents(), this.keyboardEvents(), document.addEventListener("theme:sliderule:close", this.closeSliderule)
					}
				}(t))
			})
		},
		onUnload() {
			iN[this.id].forEach(t => {
				"function" == typeof t.onUnload && t.onUnload()
			})
		}
	}, {
		onLoad() {
			iP = new class {
				listen() {
					document.addEventListener("theme:scroll", this.scrollEvent), document.addEventListener("shopify:section:load", this.updateHeaderOffset), document.addEventListener("shopify:section:unload", this.updateHeaderOffset)
				}
				onScroll(t) {
					t.detail.down ? !this.isStuck && t.detail.position > this.headerOffset && this.stickSimple() : t.detail.position <= this.headerOffset && this.unstickSimple()
				}
				updateHeaderOffset(t) {
					t.target.classList.contains("shopify-section-group-header-group") && setTimeout(() => {
						var t;
						this.headerOffset = null === (t = document.querySelector(ix)) || void 0 === t ? void 0 : t.offsetTop
					})
				}
				stickOnLoad() {
					window.scrollY > this.headerOffset && this.stickSimple()
				}
				stickSimple() {
					this.cls.add(i_), this.isStuck = !0
				}
				unstickSimple() {
					document.documentElement.hasAttribute("data-scroll-locked") || (this.cls.remove(i_), this.isStuck = !1)
				}
				unload() {
					document.removeEventListener("theme:scroll", this.scrollEvent), document.removeEventListener("shopify:section:load", this.updateHeaderOffset), document.removeEventListener("shopify:section:unload", this.updateHeaderOffset)
				}
				constructor(t) {
					var e;
					this.wrapper = t, this.sticks = this.wrapper.hasAttribute("data-header-sticky"), document.body.classList.toggle("has-header-sticky", this.sticks), this.sticks && (this.isStuck = !1, this.cls = this.wrapper.classList, this.headerOffset = null === (e = document.querySelector(ix)) || void 0 === e ? void 0 : e.offsetTop, this.updateHeaderOffset = this.updateHeaderOffset.bind(this), this.scrollEvent = t => this.onScroll(t), this.listen(), this.stickOnLoad())
				}
			}(this.container)
		},
		onUnload: function() {
			"function" == typeof iP.unload && iP.unload()
		}
	}, {
		onLoad() {
			iM[this.id] = [], (iI = this.container.querySelectorAll("[data-hover-disclosure]")).forEach(t => {
				iM[this.id].push(new class {
					onBlockSelect(t) {
						this.disclosure.contains(t.target) && this.showDisclosure(t)
					}
					onBlockDeselect(t) {
						this.disclosure.contains(t.target) && this.hideDisclosure()
					}
					showDisclosure(t) {
						t && t.type && "mouseenter" === t.type && this.wrapper.classList.add(iD), this.grandparent ? this.wrapper.classList.add(iB) : this.wrapper.classList.remove(iB), this.trigger.setAttribute("aria-expanded", !0), this.trigger.classList.add(iH), this.disclosure.classList.add(iH), this.transitionTimeout && clearTimeout(this.transitionTimeout), this.transitionTimeout = setTimeout(() => {
							this.wrapper.classList.remove(iD)
						}, 200)
					}
					hideDisclosure() {
						this.disclosure.classList.remove(iH), this.trigger.classList.remove(iH), this.trigger.setAttribute("aria-expanded", !1), this.wrapper.classList.remove(iB, iD)
					}
					staggerChildAnimations() {
						this.disclosure.querySelectorAll("[data-stagger]").forEach((t, e) => {
							t.style.transitionDelay = 50 * e + 10 + "ms"
						}), this.disclosure.querySelectorAll("[data-stagger-first]").forEach((t, e) => {
							let i = 100 * e;
							t.style.transitionDelay = `${i}ms`, t.parentElement.querySelectorAll("[data-stagger-second]").forEach((t, e) => {
								t.style.transitionDelay = `${i+20*(e+1)}ms`
							})
						})
					}
					handleTablets() {
						this.trigger.addEventListener("touchstart", (function(t) {
							this.disclosure.classList.contains(iH) || (t.preventDefault(), this.showDisclosure(t))
						}).bind(this), {
							passive: !0
						})
					}
					connectHoverToggle() {
						this.trigger.addEventListener("mouseenter", t => this.showDisclosure(t)), this.link.addEventListener("focus", t => this.showDisclosure(t)), this.trigger.addEventListener("mouseleave", () => this.hideDisclosure()), this.trigger.addEventListener("focusout", t => {
							this.trigger.contains(t.relatedTarget) || this.hideDisclosure()
						}), this.disclosure.addEventListener("keyup", t => {
							"Escape" === t.code && this.hideDisclosure()
						})
					}
					constructor(t) {
						this.disclosure = t, this.wrapper = t.closest("[data-header-wrapper]"), this.key = this.disclosure.id, this.trigger = document.querySelector(`[data-hover-disclosure-toggle='${this.key}']`), this.link = this.trigger.querySelector("[data-top-link]"), this.grandparent = this.trigger.classList.contains("grandparent"), this.transitionTimeout = 0, this.trigger.setAttribute("aria-haspopup", !0), this.trigger.setAttribute("aria-expanded", !1), this.trigger.setAttribute("aria-controls", this.key), this.connectHoverToggle(), this.handleTablets(), this.staggerChildAnimations()
					}
				}(t))
			})
		},
		onBlockSelect(t) {
			iM[this.id].forEach(e => {
				"function" == typeof e.onBlockSelect && e.onBlockSelect(t)
			})
		},
		onBlockDeselect(t) {
			iM[this.id].forEach(e => {
				"function" == typeof e.onBlockDeselect && e.onBlockDeselect(t)
			})
		}
	}, {
		onLoad() {
			new class {
				listen() {
					document.addEventListener("theme:cart:change", t => {
						this.cartCount = t.detail.cartCount, this.update()
					})
				}
				update() {
					null !== this.cartCount && this.counts.forEach(t => {
						t.setAttribute(i9, this.cartCount), t.innerHTML = this.cartCount < 10 ? `${this.cartCount}` : "9+"
					})
				}
				constructor(t) {
					this.section = t, this.counts = this.section.querySelectorAll(`[${i9}]`), this.cartCount = null, this.listen()
				}
			}(this.container)
		}
	}]), customElements.get("ticker-bar") || customElements.define("ticker-bar", iE);
	let i0 = {},
		iV = {
			onLoad() {
				i0[this.id] = new class {
					onBlockSelect(t) {
						let e = this.container.querySelector("[data-block-scroll]");
						if (e && !e.classList.contains("flickity-enabled")) {
							let i = t.srcElement;
							i && e.scrollTo({
								top: 0,
								left: i.offsetLeft,
								behavior: "smooth"
							})
						}
					}
					constructor(t) {
						this.container = t.container
					}
				}(this)
			},
			onBlockSelect(t) {
				i0[this.id].onBlockSelect(t)
			}
		},
		ij = "is-animating",
		i3 = "is-open",
		i1 = "data-slider-thumb",
		i2 = {};

	function iX() {
		this.entries = []
	}

	function iJ(t) {
		if ("object" != typeof t) throw TypeError(t + " is not an object.");
		if (0 === Object.keys(t).length && t.constructor === Object) throw Error(t + " is empty.")
	}
	eg("look", [{
		onLoad() {
			i2[this.id] = new class {
				init() {
					this.slider && this.slides.length && this.thumbs.length && (this.popupContainer.addEventListener("transitionend", t => {
						t.target == this.popupContainer && (this.popupContainer.classList.remove(ij), t.target.classList.contains(i3) ? this.popupOpenCallback() : this.popupCloseCallback())
					}), this.popupContainer.addEventListener("transitionstart", t => {
						t.target == this.popupContainer && this.popupContainer.classList.add(ij)
					}), this.popupClose.forEach(t => {
						t.addEventListener("click", () => {
							this.popupContainer.classList.remove(i3), this.scrollUnlock()
						})
					}), this.thumbs.forEach((t, e) => {
						t.addEventListener("click", i => {
							i.preventDefault();
							let s = t.hasAttribute(i1) && "" !== t.getAttribute(i1) ? parseInt(t.getAttribute(i1)) : e,
								r = this.slides[s];
							if (L()) {
								let o = parseInt(window.getComputedStyle(this.slider).paddingLeft),
									n = r.offsetLeft;
								this.slider.scrollTo({
									top: 0,
									left: n - o,
									behavior: "auto"
								}), this.scrollLock(), this.popupContainer.classList.add(ij, i3)
							} else {
								let {
									stickyHeaderHeight: a
								} = h(), l = r.getBoundingClientRect().top, c = r.offsetHeight / 2, d = window.innerHeight, u = this.container.querySelector("[data-slider-container]"), p = l + c - d / 2 + window.scrollY;
								if (u) {
									let m = u.getBoundingClientRect().top + window.scrollY,
										g = m + u.offsetHeight;
									p < m ? p = m - a : p + d > g && (p = g - d)
								}
								window.scrollTo({
									top: p,
									left: 0,
									behavior: "smooth"
								})
							}
						})
					}))
				}
				popupCloseByEvent() {
					this.popupContainer.classList.remove(i3)
				}
				popupOpenCallback() {
					document.addEventListener("theme:quick-add:open", this.popupCloseByEvent, {
						once: !0
					}), document.addEventListener("theme:product:added", this.popupCloseByEvent, {
						once: !0
					})
				}
				popupCloseCallback() {
					document.removeEventListener("theme:quick-add:open", this.popupCloseByEvent, {
						once: !0
					}), document.removeEventListener("theme:product:added", this.popupCloseByEvent, {
						once: !0
					})
				}
				scrollLock() {
					document.dispatchEvent(new CustomEvent("theme:scroll:lock", {
						bubbles: !0
					}))
				}
				scrollUnlock() {
					document.dispatchEvent(new CustomEvent("theme:scroll:unlock", {
						bubbles: !0
					}))
				}
				constructor(t) {
					this.container = t.container, this.slider = this.container.querySelector("[data-slider-mobile]"), this.slides = this.container.querySelectorAll("[data-slide]"), this.thumbs = this.container.querySelectorAll("[data-slider-thumb]"), this.popupContainer = this.container.querySelector("[data-popup-container]"), this.popupClose = this.container.querySelectorAll("[data-popup-close]"), this.popupCloseByEvent = this.popupCloseByEvent.bind(this), this.init()
				}
			}(this)
		}
	}, iV]), iX.prototype.add = function(t, e, i) {
		this.entries.push({
			element: t,
			event: e,
			fn: i
		}), t.addEventListener(e, i)
	}, iX.prototype.removeAll = function() {
		this.entries = this.entries.filter(function(t) {
			return t.element.removeEventListener(t.event, t.fn), !1
		})
	};
	var i4 = '[name="selling_plan"]';
	let iG = "data-scrollbar-slide-fullwidth",
		i6 = "is-hidden",
		iQ = class {
			init() {
				this.arrowNext && this.arrowPrev && (this.toggleNextArrow(), this.events())
			}
			resize() {
				document.addEventListener("theme:resize", () => {
					this.toggleNextArrow()
				})
			}
			events() {
				this.arrowNext.addEventListener("click", t => {
					t.preventDefault(), this.goToNext()
				}), this.arrowPrev.addEventListener("click", t => {
					t.preventDefault(), this.goToPrev()
				}), this.scrollbar.addEventListener("scroll", () => {
					this.togglePrevArrow(), this.toggleNextArrow()
				})
			}
			goToNext() {
				let t = (this.scrollbar.hasAttribute(iG) ? this.scrollbar.getBoundingClientRect().width : this.scrollbar.getBoundingClientRect().width / 2) + this.scrollbar.scrollLeft;
				this.move(t), this.arrowPrev.classList.remove(i6), this.toggleNextArrow()
			}
			goToPrev() {
				let t = this.scrollbar.hasAttribute(iG) ? this.scrollbar.getBoundingClientRect().width : this.scrollbar.getBoundingClientRect().width / 2,
					e = this.scrollbar.scrollLeft - t;
				this.move(e), this.arrowNext.classList.remove(i6), this.togglePrevArrow()
			}
			toggleNextArrow() {
				setTimeout(() => {
					this.arrowNext.classList.toggle(i6, Math.round(this.scrollbar.scrollLeft + this.scrollbar.getBoundingClientRect().width + 1) >= this.scrollbar.scrollWidth)
				}, 200)
			}
			togglePrevArrow() {
				setTimeout(() => {
					this.arrowPrev.classList.toggle(i6, this.scrollbar.scrollLeft <= 0)
				}, 200)
			}
			scrollToVisibleElement() {
				[].forEach.call(this.scrollbar.children, t => {
					t.addEventListener("click", e => {
						e.preventDefault(), this.move(t.offsetLeft - t.clientWidth)
					})
				})
			}
			move(t) {
				this.scrollbar.scrollTo({
					top: 0,
					left: t,
					behavior: "smooth"
				})
			}
			constructor(t) {
				this.scrollbar = t, this.arrowNext = this.scrollbar.parentNode.querySelector("[data-scrollbar-arrow-next]"), this.arrowPrev = this.scrollbar.parentNode.querySelector("[data-scrollbar-arrow-prev]"), this.scrollbar.hasAttribute("data-scrollbar") && (this.init(), this.resize()), this.scrollbar.hasAttribute("data-scrollbar-slider") && this.scrollToVisibleElement()
			}
		},
		i5 = "[data-swatch-button]",
		iY = "[data-swatch-link]",
		i7 = "is-visible",
		iK = "no-events",
		iZ = "data-swatch-count",
		st = "data-tooltip",
		se = "data-variant-title",
		si = class extends HTMLElement {
			connectedCallback() {
				this.hasAttribute(st) && new e$(this)
			}
			constructor() {
				super()
			}
		},
		ss = class extends HTMLElement {
			connectedCallback() {
				this.handle = this.getAttribute("data-swatch-handle"), this.productItem = this.closest("[data-product-grid-item]"), this.productInfo = this.closest("[data-product-information]"), this.productImage = this.productItem.querySelector("[data-product-image]"), this.template = document.querySelector("[data-swatch-template]").innerHTML;
				let t = this.getAttribute("data-swatch-label").trim().toLowerCase();
				(function(t) {
					let e = `${window.theme.routes.root}products/${t}.js`;
					return window.fetch(e).then(t => t.json()).catch(t => {
						console.error(t)
					})
				})(this.handle).then(e => {
					this.product = e, this.colorOption = e.options.find(function(e) {
						return e.name.toLowerCase() === t || null
					}), this.colorOption && (this.swatches = this.colorOption.values, this.init())
				})
			}
			init() {
				this.innerHTML = "", this.count = 0, this.swatches.forEach(t => {
					var e, i;
					let s = null,
						r = !1,
						o = "";
					for (let n of this.product.variants) {
						let a = n.options.includes(t);
						if (!s && a && (s = n), a && n.featured_media) {
							o = n.featured_media.preview_image.src, s = n;
							break
						}
					}
					for (let l of this.product.variants)
						if (l.options.includes(t) && l.available) {
							r = !0;
							break
						} if (s) {
						let h = document.createElement("div");
						h.innerHTML = this.template;
						let c = h.querySelector(i5),
							d = h.querySelector(iY),
							u = t.trim().toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-"),
							p = s.title.replaceAll('"', "'");
						c.style = `--animation-delay: ${100*this.count/1e3}s`, c.classList.add(`swatch-${u}`), c.dataset.tooltip = t, c.dataset.swatchVariant = s.id, c.dataset.swatchVariantName = p, c.dataset.swatchImage = o, c.dataset.variant = s.id, c.style.setProperty("--swatch", `var(--${u})`), d.href = (e = this.product.url, i = s.id, /variant=/.test(e) ? e.replace(/(variant=)[^&]+/, "$1" + i) : /\?/.test(e) ? e.concat("&variant=").concat(i) : e.concat("?variant=").concat(i)), d.innerText = t, d.dataset.swatch = t, d.disabled = !r, this.innerHTML += h.innerHTML, this.count++
					}
				}), this.swatchCount = this.productInfo.querySelector(`[${iZ}]`), this.swatchElements = this.querySelectorAll(iY), this.swatchForm = this.productInfo.querySelector("[data-grid-swatch-form]"), this.hideSwatchesTimer = 0, this.swatchCount.hasAttribute(iZ) && (this.swatchCount.innerText = `${this.count} ${this.count>1?theme.strings.otherColor:theme.strings.oneColor}`, this.swatchCount.addEventListener("mouseenter", () => {
					this.hideSwatchesTimer && clearTimeout(this.hideSwatchesTimer), this.productInfo.classList.add(iK), this.swatchForm.classList.add(i7)
				}), this.productInfo.addEventListener("mouseleave", () => {
					this.hideSwatchesTimer = setTimeout(() => {
						this.productInfo.classList.remove(iK), this.swatchForm.classList.remove(i7)
					}, 100)
				})), this.hasAttribute("data-scrollbar") && new iQ(this), this.showDeferredImage(), this.bindSwatchButtonEvents()
			}
			showDeferredImage() {
				let t = this.productItem.querySelectorAll(`[${se}]`);
				t.length && this.productItem.addEventListener("mouseenter", () => {
					t.forEach(t => {
						t.classList.remove("hidden")
					})
				}, {
					once: !0
				})
			}
			bindSwatchButtonEvents() {
				var t;
				null === (t = this.querySelectorAll(i5)) || void 0 === t || t.forEach(t => {
					t.addEventListener("mouseenter", this.showVariantImageEvent), t.hasAttribute(st) && new e$(t)
				}), this.productItem.addEventListener("mouseleave", this.productItemMouseLeaveEvent)
			}
			showVariantImage(t) {
				var e;
				let i = null === (e = t.target.getAttribute("data-swatch-variant-name")) || void 0 === e ? void 0 : e.replaceAll('"', "'"),
					s = this.productImage.querySelectorAll(`[${se}]`),
					r = this.productImage.querySelector(`[${se}="${i}"]`);
				null == s || s.forEach(t => {
					t.classList.remove(i7)
				}), null == r || r.classList.add(i7)
			}
			hideVariantImages() {
				var t;
				null === (t = this.productImage.querySelectorAll(`[${se}].${i7}`)) || void 0 === t || t.forEach(t => {
					t.classList.remove(i7)
				})
			}
			constructor() {
				super(), this.productItemMouseLeaveEvent = () => this.hideVariantImages(), this.showVariantImageEvent = t => this.showVariantImage(t)
			}
		},
		sr = {
			productCutline: "[data-product-cutline]",
			productLink: "[data-product-link]",
			productGridItem: "[data-product-grid-item]",
			productInfo: "[data-product-information]",
			productImage: "[data-product-image-default]",
			productImageSibling: "[data-product-image-sibling]",
			productPrice: "[data-product-price]",
			siblingsInnerHolder: "[data-sibling-inner]",
			siblingCount: "[data-sibling-count]",
			siblingFieldset: "[data-sibling-fieldset]",
			siblingLink: "[data-sibling-link]",
			tooltip: "[data-tooltip]"
		},
		so = "is-visible",
		sn = "is-fade",
		sa = "no-events",
		sl = "data-sibling-cutline",
		sh = "data-sibling-image",
		sc = "data-sibling-link",
		sd = "data-sibling-price",
		su = "data-product-link",
		sp = class extends HTMLElement {
			connectedCallback() {
				this.product = this.closest(sr.productGridItem), this.siblingScrollbar = this.querySelector(sr.siblingsInnerHolder), this.siblingCount = this.querySelector(sr.siblingCount), this.siblingFieldset = this.querySelector(sr.siblingFieldset), this.siblingLinks = this.querySelectorAll(sr.siblingLink), this.productInfo = this.closest(sr.productInfo), this.productLink = this.closest(sr.link), this.hideSwatchesTimer = 0, this.initScrollbar(), this.siblingCount && this.siblingFieldset && this.productInfo && (this.siblingCount.addEventListener("mouseenter", () => this.showSiblings()), this.productInfo.addEventListener("mouseleave", () => this.hideSiblings())), this.siblingLinks.length && new class {
					init() {
						this.cacheDefaultValues(), this.product.addEventListener("mouseleave", () => this.resetProductValues()), this.swatches.forEach(t => {
							t.addEventListener("mouseenter", t => this.showSibling(t))
						}), this.productLinks.length && this.swatches.forEach(t => {
							t.addEventListener("click", () => {
								this.productLinks[0].click()
							})
						})
					}
					cacheDefaultValues() {
						this.productLinkValue = this.productLinks[0].hasAttribute(su) ? this.productLinks[0].getAttribute(su) : "", this.productPriceValue = this.productPrice.innerHTML, this.productCutline && (this.productCutlineValue = this.productCutline.innerHTML)
					}
					resetProductValues() {
						this.product.classList.remove("is-active"), this.productLinkValue && this.productLinks.forEach(t => {
							t.href = this.productLinkValue
						}), this.productPrice && (this.productPrice.innerHTML = this.productPriceValue), this.productCutline && this.productCutline && (this.productCutline.innerHTML = this.productCutlineValue), this.hideSiblingImage()
					}
					showSibling(t) {
						let e = t.target,
							i = e.hasAttribute(sc) ? e.getAttribute(sc) : "",
							s = e.hasAttribute(sd) ? e.getAttribute(sd) : "",
							r = e.hasAttribute(sl) ? e.getAttribute(sl) : "",
							o = e.hasAttribute(sh) ? e.getAttribute(sh) : "";
						i && this.productLinks.forEach(t => {
							t.href = i
						}), s && (this.productPrice.innerHTML = s), this.productCutline.innerHTML = r || "", o && this.showSiblingImage(o)
					}
					showSiblingImage(t) {
						if (!this.productImageSibling) return;
						let e = window.devicePixelRatio || 1,
							i = this.productImage.offsetWidth * e,
							s = n.getSizedImageUrl(t, `${180*Math.ceil(i/180)}x`),
							r = this.productImageSibling.querySelector(`[src="${s}"]`),
							o = () => {
								this.productImageSibling.classList.add(so), this.productImageSibling.querySelector(`[src="${s}"]`).classList.add(sn)
							},
							a = () => {
								this.productImageSibling.querySelectorAll("img").forEach(t => {
									t.classList.remove(sn)
								}), requestAnimationFrame(o)
							};
						if (r) a();
						else {
							let l = document.createElement("img");
							l.src = s, this.productCutline && (l.alt = this.productCutline.innerText), l.addEventListener("load", () => {
								this.productImageSibling.append(l), a()
							})
						}
					}
					hideSiblingImage() {
						this.productImageSibling && (this.productImageSibling.classList.remove(so), this.productImageSibling.querySelectorAll("img").forEach(t => {
							t.classList.remove(sn)
						}))
					}
					constructor(t, e) {
						this.swatches = t, this.product = e, this.productLinks = this.product.querySelectorAll(sr.productLink), this.productCutline = this.product.querySelector(sr.productCutline), this.productPrice = this.product.querySelector(sr.productPrice), this.productImage = this.product.querySelector(sr.productImage), this.productImageSibling = this.product.querySelector(sr.productImageSibling), this.init()
					}
				}(this.siblingLinks, this.product), this.querySelectorAll(sr.tooltip).forEach(t => {
					new e$(t)
				})
			}
			showSiblings() {
				this.hideSwatchesTimer && clearTimeout(this.hideSwatchesTimer), this.productLink && this.productLink.classList.add(sa), this.siblingFieldset.classList.add(so)
			}
			hideSiblings() {
				this.hideSwatchesTimer = setTimeout(() => {
					this.productLink && this.productLink.classList.remove(sa), this.siblingFieldset.classList.remove(so)
				}, 100)
			}
			initScrollbar() {
				this.siblingScrollbar && new iQ(this.siblingScrollbar)
			}
			constructor() {
				super()
			}
		},
		sm = "data-tab",
		sg = "data-tab-index",
		sv = "[data-tab]",
		sy = ".tab-content",
		sf = "current",
		sb = "hidden",
		sS = "aos-animate",
		sE = "aos-no-transition",
		sL = {},
		sw = {
			onLoad() {
				sL[this.id] = [], this.container.querySelectorAll("[data-tabs-holder]").forEach(t => {
					sL[this.id].push(new class {
						init() {
							let t = this.container.querySelectorAll(sv);
							this.container.addEventListener("theme:tab:check", () => this.checkRecentTab()), this.container.addEventListener("theme:tab:hide", () => this.hideRelatedTab()), t.length && t.forEach(t => {
								let e = parseInt(t.getAttribute(sm)),
									i = this.container.querySelector(`${sy}-${e}`);
								t.addEventListener("click", () => {
									this.tabChange(t, i)
								}), t.addEventListener("keyup", e => {
									("Space" === e.code || "Enter" === e.code) && this.body.classList.contains("is-focused") && this.tabChange(t, i)
								})
							})
						}
						tabChange(t, e) {
							if (t.classList.contains(sf)) return;
							let i = this.container.querySelector(`${sv}.${sf}`),
								s = this.container.querySelector(`${sy}.${sf}`);
							null == i || i.classList.remove(sf), null == s || s.classList.remove(sf), t.classList.add(sf), e.classList.add(sf), t.classList.contains(sb) && e.classList.add(sb), this.accessibility.a11y.removeTrapFocus(), this.container.dispatchEvent(new CustomEvent("theme:tab:change", {
								bubbles: !0
							})), t.dispatchEvent(new CustomEvent("theme:form:sticky", {
								bubbles: !0,
								detail: {
									element: "tab"
								}
							})), this.animateItems(e)
						}
						animateItems(t, e = !0) {
							let i = t.querySelectorAll("[data-aos]");
							i.length && i.forEach(t => {
								t.classList.remove(sS), e && (t.classList.add(sE), requestAnimationFrame(() => {
									t.classList.remove(sE), t.classList.add(sS)
								}))
							})
						}
						initNativeScrollbar() {
							this.scrollbarHolder.length && this.scrollbarHolder.forEach(t => {
								new iQ(t)
							})
						}
						checkRecentTab() {
							let t = this.container.querySelector(".tab-link__recent");
							if (t) {
								t.classList.remove(sb);
								let e = parseInt(t.getAttribute(sm)),
									i = this.container.querySelector(`${sy}[${sg}="${e}"]`);
								i && (i.classList.remove(sb), this.animateItems(i, !1)), this.initNativeScrollbar()
							}
						}
						hideRelatedTab() {
							let t = this.container.querySelector("[data-related-section]");
							if (!t) return;
							let e = t.closest(`${sy}.${sf}`);
							if (!e) return;
							let i = parseInt(e.getAttribute(sg)),
								s = this.container.querySelectorAll(sv);
							if (s.length > i) {
								let r = s[i].nextSibling;
								r && (s[i].classList.add(sb), r.dispatchEvent(new Event("click")), this.initNativeScrollbar())
							}
						}
						onBlockSelect(t) {
							let e = this.container.querySelector(`.tab-link[data-block-id="${t.detail.blockId}"]`);
							e && (e.dispatchEvent(new Event("click")), e.parentNode.scrollTo({
								top: 0,
								left: e.offsetLeft - e.clientWidth,
								behavior: "smooth"
							}))
						}
						constructor(t) {
							this.container = t, this.body = document.querySelector("body"), this.accessibility = window.accessibility, this.container && (this.scrollbarHolder = this.container.querySelectorAll("[data-scrollbar]"), this.init(), this.initNativeScrollbar())
						}
					}(t))
				})
			},
			onBlockSelect(t) {
				sL[this.id].forEach(e => {
					"function" == typeof e.onBlockSelect && e.onBlockSelect(t)
				})
			}
		},
		sk = "data-media-id",
		sA = "data-thumb-index",
		s$ = ".is-active",
		sT = "data-type",
		sq = "is-active",
		sC = "is-dragging",
		sx = "is-selected",
		s_ = "media--hidden",
		sP = "aria-current",
		sH = "data-options",
		sB = {},
		sD = class {
			init() {
				this.slideshow && (this.tallLayout ? this.mobileSliderDisabled || (this.initSliderMobile(), document.addEventListener("theme:resize:width", this.initSliderMobileEvent)) : this.mobileSliderDisabled ? (this.initSliderDesktop(), document.addEventListener("theme:resize:width", this.initSliderDesktopEvent)) : this.createSlider())
			}
			initSliderMobile() {
				L() ? this.createSlider() : this.destroySlider()
			}
			initSliderDesktop() {
				L() ? this.destroySlider() : this.createSlider()
			}
			destroySlider() {
				this.slideshow.classList.contains("flickity-enabled") && this.flkty.destroy()
			}
			createSlider() {
				if (!this.slideshow || this.mobileSliderDisabled && L()) return;
				let t = {
						autoPlay: !1,
						pageDots: !1,
						wrapAround: !0,
						dragThreshold: 90,
						...this.customOptions
					},
					e = this,
					i = this.slideshow.querySelectorAll(`[${sT}]`)[0],
					s = {
						...t,
						on: {
							ready: function() {
								let t = this.element;
								t.addEventListener("keyup", e => {
									if ("Enter" === e.code) {
										let i = t.querySelector(`.${sx} [data-zoom-wrapper]`);
										i && (i.dispatchEvent(new Event("click", {
											bubbles: !1
										})), window.accessibility.lastElement = t)
									}
								}), requestAnimationFrame(() => {
									e.slideshow.classList.add("is-initialized")
								}), e.sliderThumbs(this), e.accessibilityActions(this)
							}
						}
					};
				if (this.flkty = new o(this.slideshow, s), this.flkty.resize(), i) {
					let r = i.getAttribute(sT);
					"model" !== r && "video" !== r && "external_video" !== r || (this.flkty.options.draggable = !1, this.flkty.updateDraggable())
				}
				this.flkty.on("change", function(t) {
					let i = t;
					if (e.thumbSlider) {
						let s = e.thumbSlider.querySelector(s$),
							r = e.thumbSlider.querySelector(`[data-thumb-item] [${sA}="${t}"]`);
						if (s) {
							let o = s.querySelector(`[${sA}]`);
							i = Array.from(s.parentElement.children).indexOf(s), s.classList.remove(sq), o && o.setAttribute(sP, !1)
						}
						r && (r.parentElement.classList.add(sq), r.setAttribute(sP, !0)), e.scrollToThumb()
					}
					let n = this.cells[i].element,
						a = this.selectedElement;
					n.dispatchEvent(new CustomEvent("theme:media:hidden")), a.classList.remove(s_)
				}), this.flkty.on("settle", function() {
					let t = this.selectedElement,
						i = Array.prototype.filter.call(t.parentNode.children, function(e) {
							return e !== t
						}),
						s = t.getAttribute(sT),
						r = document.body.classList.contains("is-focused");
					"model" === s || "video" === s || "external_video" === s ? (e.flkty.options.draggable = !1, e.flkty.updateDraggable()) : (e.flkty.options.draggable = !0, e.flkty.updateDraggable()), r && t.dispatchEvent(new Event("focus")), i.length && i.forEach(t => {
						t.classList.add(s_)
					}), t.dispatchEvent(new CustomEvent("theme:media:visible"));
					let o = t.querySelector("deferred-media");
					o && !0 !== o.getAttribute("loaded") && t.querySelector("[data-deferred-media-button]").dispatchEvent(new Event("click", {
						bubbles: !1
					})), e.accessibilityActions(this)
				}), this.flkty.on("dragStart", (t, e) => {
					t.target.classList.add(sC)
				}), this.flkty.on("dragEnd", (t, e) => {
					let i = this.flkty.element.querySelector(`.${sC}`);
					i && i.classList.remove(sC)
				})
			}
			accessibilityActions(t) {
				let e = t.slides;
				e.length && e.forEach(t => {
					let e = t.cells[0].element,
						i = e.querySelectorAll("model-viewer, video, iframe, button, [href], input, [tabindex]");
					e.classList.contains(sx) ? e.removeAttribute("tabindex") : e.setAttribute("tabindex", "-1"), i.length && i.forEach(t => {
						e.classList.contains(sx) ? t.removeAttribute("tabindex") : t.setAttribute("tabindex", "-1")
					})
				})
			}
			scrollToThumb() {
				let t = this.thumbSlider;
				if (t) {
					let e = t.querySelector(s$);
					if (!e) return;
					let i = t.scrollTop,
						s = t.scrollLeft,
						r = t.offsetWidth,
						o = t.offsetHeight,
						n = e.offsetTop,
						a = e.offsetLeft,
						l = e.offsetWidth,
						h = e.offsetHeight,
						c = i > n,
						d = s > a,
						u = a + l > s + r,
						p = L();
					if (n + h > i + o || c || u || d) {
						let m = n - o + h,
							g = a - r + l;
						c && (m = n), u && p && (g += parseInt(window.getComputedStyle(t).paddingRight)), d && (g = a, p && (g -= parseInt(window.getComputedStyle(t).paddingLeft))), t.scrollTo({
							top: m,
							left: g,
							behavior: "smooth"
						})
					}
				}
			}
			sliderThumbs(t) {
				this.thumbLinks.length && this.thumbLinks.forEach(e => {
					e.addEventListener("click", t => {
						t.preventDefault();
						let i = e.hasAttribute(sA) ? parseInt(e.getAttribute(sA)) : 0;
						this.flkty.select(i)
					}), e.addEventListener("keyup", i => {
						if ("Enter" === i.code) {
							let s = e.getAttribute(sk),
								r = t.element.querySelector(`[${sk}="${s}"]`).querySelectorAll('model-viewer, video, iframe, button, [href], input, [tabindex]:not([tabindex="-1"])')[0];
							r && (r.dispatchEvent(new Event("focus")), r.dispatchEvent(new Event("select")))
						}
					})
				})
			}
			onUnload() {
				this.tallLayout ? this.mobileSliderDisabled || document.removeEventListener("theme:resize:width", this.initSliderMobileEvent) : this.mobileSliderDisabled && document.removeEventListener("theme:resize:width", this.initSliderDesktopEvent)
			}
			constructor(t, e = null) {
				this.container = e || t.container, this.tallLayout = "true" === this.container.getAttribute("data-tall-layout"), this.slideshow = this.container.querySelector("[data-product-slideshow]"), this.thumbSlider = this.container.querySelector("[data-thumbs-slider]"), this.thumbLinks = this.container.querySelectorAll("[data-thumb-link]"), this.mobileSliderDisabled = "true" === this.container.getAttribute("data-slideshow-disabled-mobile"), this.initSliderMobileEvent = () => this.initSliderMobile(), this.initSliderDesktopEvent = () => this.initSliderDesktop(), this.slideshow && this.slideshow.hasAttribute(sH) && (this.customOptions = JSON.parse(decodeURIComponent(this.slideshow.getAttribute(sH)))), this.flkty = null, this.init()
			}
		},
		sM = {
			added: "is-added",
			animated: "is-animated",
			disabled: "is-disabled",
			error: "has-error",
			loading: "is-loading",
			open: "is-open",
			overlayText: "product-item--overlay-text",
			visible: "is-visible",
			siblingLinkCurrent: "sibling__link--current",
			focused: "is-focused"
		},
		sI = "[data-animation]",
		s9 = "[data-add-to-cart]",
		sF = "[data-quick-add-modal]",
		s8 = "closing",
		sO = "data-product-id",
		sR = class extends HTMLElement {
			connectedCallback() {
				this.modalButton && this.modalButton.addEventListener("click", this.modalButtonClickEvent), this.buttonATC && this.buttonATC.addEventListener("click", t => {
					t.preventDefault(), document.dispatchEvent(new CustomEvent("theme:cart:add", {
						detail: {
							button: this.buttonATC
						}
					}))
				}), this.quickAddHolder && (this.quickAddHolder.addEventListener("animationend", this.quickAddLoadingToggle), this.errorHandler())
			}
			modalButtonClickEvent(t) {
				t.preventDefault();
				let e = this.modalButton.hasAttribute("data-sibling-swapper"),
					i = this.modalButton.classList.contains(sM.siblingLinkCurrent);
				i || (this.modalButton.classList.add(sM.loading), this.modalButton.disabled = !0, e && !i && (this.currentModal = t.target.closest(sF), this.currentModal.classList.add(sM.loading)), this.renderModal())
			}
			modalCreate(t) {
				let e = document.querySelector(`${sF}[${sO}="${this.productId}"]`);
				if (e) this.modal = e, this.modalOpen();
				else {
					let i = this.quickAddHolder.querySelector("[data-quick-add-modal-template]");
					if (!i) return;
					let s = document.createElement("div");
					s.innerHTML = i.innerHTML, document.body.appendChild(s.querySelector(sF)), i.remove(), this.modal = document.querySelector(`${sF}[${sO}="${this.productId}"]`), this.modal.querySelector("[data-product-upsell-ajax]").innerHTML = (new DOMParser).parseFromString(t, "text/html").querySelector("[data-api-content]").innerHTML, this.modalCreatedCallback()
				}
			}
			modalOpen() {
				"function" == typeof this.modal.show && this.modal.show(), this.modal.setAttribute("open", !0), this.modal.removeAttribute("inert"), this.currentModal && this.currentModal.dispatchEvent(new CustomEvent("theme:modal:close", {
					bubbles: !1
				})), (this.modal.querySelector("[autofocus]") || this.modal.querySelector('button, [href], select, textarea, [tabindex]:not([tabindex="-1"])')).focus(), this.quickAddHolder.classList.add(sM.disabled), this.modalButton && (this.modalButton.classList.remove(sM.loading), this.modalButton.disabled = !1), requestAnimationFrame(() => {
					this.modal.querySelectorAll(sI).forEach(t => {
						t.classList.add(sM.animated)
					})
				}), document.dispatchEvent(new CustomEvent("theme:quick-add:open", {
					bubbles: !0
				})), document.dispatchEvent(new CustomEvent("theme:scroll:lock", {
					bubbles: !0
				})), document.addEventListener("theme:product:added", this.modalCloseOnProductAdded, {
					once: !0
				})
			}
			modalClose() {
				if (this.isAnimating) return;
				if (!this.modal.hasAttribute(s8)) return this.modal.setAttribute(s8, ""), void(this.isAnimating = !0);
				"function" == typeof this.modal.close ? this.modal.close() : this.modal.removeAttribute("open"), this.modal.removeAttribute(s8), this.modal.setAttribute("inert", ""), this.modal.classList.remove(sM.loading), this.modalButton && (this.modalButton.disabled = !1), this.quickAddHolder && this.quickAddHolder.classList.contains(sM.disabled) && this.quickAddHolder.classList.remove(sM.disabled), this.resetAnimatedItems();
				let t = this.cartDrawer && this.cartDrawer.classList.contains(sM.open),
					e = document.querySelector("dialog[open]");
				t || e || document.dispatchEvent(new CustomEvent("theme:scroll:unlock", {
					bubbles: !0
				})), document.removeEventListener("theme:product:added", this.modalCloseOnProductAdded)
			}
			modalEvents() {
				var t;
				null === (t = this.modal.querySelector("[data-quick-add-modal-close]")) || void 0 === t || t.addEventListener("click", t => {
					t.preventDefault(), this.modalClose()
				}), this.modal.addEventListener("click", t => {
					"DIALOG" === t.target.nodeName && "click" === t.type && this.modalClose()
				}), this.modal.addEventListener("keydown", t => {
					"Escape" == t.code && (t.preventDefault(), this.modalClose())
				}), this.modal.addEventListener("theme:modal:close", () => {
					this.modalClose()
				}), this.modal.addEventListener("animationend", t => {
					t.target === this.modal && (this.isAnimating = !1, this.modal.hasAttribute(s8) && (this.modalClose(), document.body.classList.contains(sM.focused) && this.buttonQuickAdd && (this.buttonQuickAdd.addEventListener("transitionend", () => {
						this.buttonQuickAdd.focus(), this.buttonQuickAdd.classList.remove(sM.visible)
					}, {
						once: !0
					}), this.buttonQuickAdd.classList.add(sM.visible))))
				})
			}
			modalCloseOnProductAdded() {
				this.resetQuickAddButtons(), this.modal && this.modal.hasAttribute("open") && this.modalClose()
			}
			quickAddLoadingToggle(t) {
				t.target == this.quickAddHolder && this.quickAddHolder.classList.remove(sM.disabled)
			}
			errorHandler() {
				this.quickAddHolder.addEventListener("theme:cart:error", t => {
					let e = t.detail.holder,
						i = e.closest("[data-product-grid-item]");
					if (!i) return;
					let s = e.querySelector("[data-message-error]"),
						r = i.classList.contains(sM.overlayText),
						o = i.querySelector("[data-product-information]"),
						n = e.querySelector(s9);
					n && (n.classList.remove(sM.added, sM.loading), e.classList.add(sM.error)), s && (s.innerText = t.detail.description), r && o.classList.add(sM.hidden), setTimeout(() => {
						this.resetQuickAddButtons(), r && o.classList.remove(sM.hidden)
					}, 3e3)
				})
			}
			resetQuickAddButtons() {
				this.quickAddHolder && this.quickAddHolder.classList.remove(sM.visible, sM.error), this.buttonQuickAdd && (this.buttonQuickAdd.classList.remove(sM.added), this.buttonQuickAdd.disabled = !1)
			}
			renderModal() {
				this.modal ? this.modalOpen() : window.fetch(`${window.theme.routes.root}products/${this.handle}?section_id=api-product-upsell`).then(this.upsellErrorsHandler).then(t => t.text()).then(t => {
					this.modalCreate(t)
				})
			}
			modalCreatedCallback() {
				this.modalEvents(), this.modalOpen(), new sD(null, this.modal), H(this.modal)
			}
			upsellErrorsHandler(t) {
				return t.ok ? t : t.json().then(function(e) {
					throw new tL({
						status: t.statusText,
						headers: t.headers,
						json: e
					})
				})
			}
			resetAnimatedItems() {
				var t;
				null === (t = this.modal) || void 0 === t || t.querySelectorAll(sI).forEach(t => {
					t.classList.remove(sM.animated)
				})
			}
			constructor() {
				var t;
				super(), this.container = this, this.quickAddHolder = this.container.querySelector("[data-quick-add-holder]"), this.quickAddHolder && (this.modal = null, this.currentModal = null, this.productId = this.quickAddHolder.getAttribute("data-quick-add-holder"), this.modalButton = this.quickAddHolder.querySelector("[data-quick-add-modal-handle]"), this.handle = null === (t = this.modalButton) || void 0 === t ? void 0 : t.getAttribute("data-quick-add-modal-handle"), this.cartDrawer = document.querySelector("[data-cart-drawer]"), this.buttonQuickAdd = this.quickAddHolder.querySelector("[data-quick-add-btn]"), this.buttonATC = this.quickAddHolder.querySelector(s9), this.button = this.modalButton || this.buttonATC, this.modalClose = this.modalClose.bind(this), this.modalCloseOnProductAdded = this.modalCloseOnProductAdded.bind(this), this.isAnimating = !1, this.modalButtonClickEvent = this.modalButtonClickEvent.bind(this), this.quickAddLoadingToggle = this.quickAddLoadingToggle.bind(this))
			}
		};
	eg("product-grid", [ez, sw]), customElements.get("quick-add-product") || customElements.define("quick-add-product", sR), customElements.get("radio-swatch") || customElements.define("radio-swatch", si), customElements.get("grid-swatch") || customElements.define("grid-swatch", ss), customElements.get("product-siblings") || customElements.define("product-siblings", sp);
	let sz = (t, e) => {
			let {
				el: i,
				elStyle: s,
				elHeight: r,
				rowsLimit: o,
				rowsWrapped: n,
				options: a
			} = t, l = t.buffer, h = l;
			if (n === o + 1) return {
				...t
			};
			let c = l,
				d = n,
				u = r;
			return i.innerHTML = h = l.length ? `${l}${a.delimiter}${e}${a.replaceStr}` : `${e}${a.replaceStr}`, parseFloat(s.height) > parseFloat(r) && (d++, u = s.height, d === o + 1) ? (i.innerHTML = h = "." === c[c.length - 1] && "..." === a.replaceStr ? `${c}..` : `${c}${a.replaceStr}`, {
				...t,
				elHeight: u,
				rowsWrapped: d
			}) : (i.innerHTML = h = c.length ? `${c}${a.delimiter}${e}` : `${e}`, {
				...t,
				buffer: h,
				elHeight: u,
				rowsWrapped: d
			})
		},
		sN = "complementary-products",
		sW = "data-url",
		sU = class extends HTMLElement {
			connectedCallback() {
				new IntersectionObserver(((t, e) => {
					t[0].isIntersecting && (e.unobserve(this), this.hasAttribute(sW) && "" !== this.getAttribute(sW) && fetch(this.getAttribute(sW)).then(t => t.text()).then(t => {
						let e = document.createElement("div");
						e.innerHTML = t;
						let i = e.querySelector(sN);
						i && i.innerHTML.trim().length && (this.innerHTML = i.innerHTML), e.querySelector(`${sN} quick-add-product`) && this.classList.add("is-loaded")
					}).catch(t => {
						console.error(t)
					}))
				}).bind(this), {
					rootMargin: "0px 0px 400px 0px"
				}).observe(this)
			}
			constructor() {
				super()
			}
		},
		s0 = class extends HTMLElement {
			connectedCallback() {
				this.fieldCheckbox && (this.fieldCheckbox.addEventListener("change", this.onChangeEvent), this.form && this.form.addEventListener("theme:product:add", () => {
					this.fieldCheckbox.checked = !1, this.fieldCheckbox.dispatchEvent(new Event("change"))
				}))
			}
			clearInputValues() {
				this.fields.length && this.fields.forEach(t => {
					t.value = ""
				})
			}
			onChange(t) {
				this.fieldEmail.required = Boolean(t.target.checked), t.target.checked || this.clearInputValues()
			}
			disconnectedCallback() {
				this.fieldCheckbox.removeEventListener("change", this.onChangeEvent)
			}
			constructor() {
				super(), this.fieldCheckbox = this.querySelector('input[type="checkbox"]'), this.fieldEmail = this.querySelector('input[type="email"]'), this.fields = this.querySelectorAll('input:not([type="checkbox"]):not([type="hidden"]), textarea'), this.form = this.closest("[data-form-wrapper]"), this.onChangeEvent = t => this.onChange(t)
			}
		},
		sV = "[data-form-wrapper]",
		sj = "is-sticky";
	window.theme.variables = {
		productPageSticky: !1
	};
	let s3 = {},
		s1 = "data-section-type",
		s2 = "is-visible",
		sX = class extends HTMLElement {
			init() {
				navigator.share ? this.shareButton.addEventListener("click", () => {
					navigator.share({
						url: this.urlToShare,
						title: document.title
					})
				}) : this.shareButton.addEventListener("click", this.copyToClipboard.bind(this))
			}
			updateShareLink() {
				"product" == this.container.getAttribute(s1) && this.container.addEventListener("theme:variant:change", t => {
					t.detail.variant && (this.urlToShare = `${this.urlToShare.split("?")[0]}?variant=${t.detail.variant.id}`)
				})
			}
			copyToClipboard() {
				navigator.clipboard.writeText(this.urlToShare).then(() => {
					this.shareMessage.classList.add(s2);
					let t = () => {
						this.shareMessage.classList.remove(s2), this.shareMessage.removeEventListener("animationend", t)
					};
					this.shareMessage.addEventListener("animationend", t)
				})
			}
			constructor() {
				super(), this.container = this.closest(`[${s1}]`), this.shareButton = this.querySelector("[data-share-button]"), this.shareMessage = this.querySelector("[data-share-message]"), this.urlToShare = this.shareButton.dataset.shareUrl ? this.shareButton.dataset.shareUrl : document.location.href, this.init(), this.updateShareLink()
			}
		},
		sJ = "data-option-position",
		s4 = "sold-out",
		sG = "unavailable",
		s6 = "sale",
		sQ = "[data-add-to-cart]",
		s5 = "[data-price-wrapper]",
		sY = "[data-product-unit]",
		s7 = "data-group-toggle",
		sK = 'input[name="id"]',
		sZ = "hidden",
		rt = "variant--soldout",
		re = "variant--unavailable",
		ri = "product__price--sale",
		rs = "count-is-low",
		rr = "count-is-in",
		ro = "count-is-out",
		rn = "count-is-unavailable",
		ra = class extends HTMLElement {
			connectedCallback() {
				if (this.cartAddEvents(), this.container = this.closest("[data-section-type]") || this.closest("[data-quick-add-modal]"), !this.container) return;
				if (this.sectionId = this.container.dataset.sectionId, this.tallLayout = "true" === this.container.getAttribute("data-tall-layout"), this.product = this.container.querySelector("[data-product]"), this.productForm = this.container.querySelector("[data-product-form]"), this.installmentForm = this.container.querySelector("[data-product-form-installment]"), this.sellout = null, this.priceOffWrap = this.container.querySelector("[data-price-off]"), this.priceOffAmount = this.container.querySelector("[data-price-off-amount]"), this.priceOffType = this.container.querySelector("[data-price-off-type]"), this.planDescription = this.container.querySelector("[data-plan-description]"), this.remainingWrapper = this.container.querySelector("[data-remaining-wrapper]"), this.remainingWrapper) {
					let t = this.container.querySelector("[data-remaining-max]");
					t && (this.remainingMaxInt = parseInt(t.getAttribute("data-remaining-max"), 10), this.remainingCount = this.container.querySelector("[data-remaining-count]"), this.remainingJSONWrapper = this.container.querySelector("[data-product-remaining-json]"), this.remainingJSON = null, this.remainingJSONWrapper && "" !== this.remainingJSONWrapper.innerHTML ? this.remainingJSON = JSON.parse(this.remainingJSONWrapper.innerHTML) : console.warn("Missing product quantity JSON"))
				}
				this.enableHistoryState = "true" === this.container.getAttribute("data-enable-history-state"), this.hasUnitPricing = this.container.querySelector(sY), this.subSelectors = this.container.querySelector("[data-subscription-selectors]"), this.subPrices = this.container.querySelector("[data-subscription-watch-price]"), this.isPreOrder = this.container.querySelector("[data-product-preorder]");
				let e = null,
					i = this.container.querySelector("[data-product-json]");
				i && (e = i.innerHTML), e ? (this.productJSON = JSON.parse(e), this.linkForm(), this.sellout = new class {
					init() {
						this.update()
					}
					update() {
						this.getCurrentState(), this.optionElements.forEach(t => {
							let e = t.closest(`[${sJ}]`);
							if (!e) return;
							let i = t.value || t.getAttribute("data-value"),
								s = e.getAttribute(sJ),
								r = parseInt(s, 10) - 1,
								o = t.closest("[data-popout]"),
								n = [...this.selections];
							n[r] = i;
							let a = this.productJSON.variants.find(t => {
								let e = !0;
								for (let i = 0; i < n.length; i++) t.options[i] !== n[i] && (e = !1);
								return e
							});
							t.classList.remove(s4, sG), t.parentNode.classList.remove(s6), o && o.classList.remove(s4, sG, s6), void 0 === a ? (t.classList.add(sG), o && o.classList.add(sG)) : a && !1 === a.available && (t.classList.add(s4), o && o.classList.add(s4)), a && a.compare_at_price > a.price && theme.settings.variantOnSale && t.parentNode.classList.add(s6)
						})
					}
					getCurrentState() {
						this.selections = [];
						let t = this.container.querySelectorAll('[name^="options"]:checked, [name^="options"][type="hidden"]');
						t.length && t.forEach(t => {
							let e = t.value;
							e && "" !== e && this.selections.push(e)
						})
					}
					constructor(t, e) {
						this.container = t, this.productJSON = e, this.optionElements = this.container.querySelectorAll('[name^="options"], [data-popout-option]'), this.productJSON && this.optionElements.length && this.init()
					}
				}(this.container, this.productJSON)) : console.error("Missing product JSON")
			}
			cartAddEvents() {
				this.buttonATC = this.querySelector(sQ), this.buttonATC && this.buttonATC.addEventListener("click", t => {
					t.preventDefault(), document.dispatchEvent(new CustomEvent("theme:cart:add", {
						detail: {
							button: this.buttonATC
						},
						bubbles: !1
					}))
				})
			}
			destroy() {
				this.productForm.destroy()
			}
			linkForm() {
				this.productForm = new class {
					destroy() {
						this._listeners.removeAll()
					}
					options() {
						return this._serializeInputValues(this.optionInputs, function(t) {
							return t.name = /(?:^(options\[))(.*?)(?:\])/.exec(t.name)[2], t
						})
					}
					variant() {
						var t, e, i, s, r, o, n, a;
						let l = this.options();
						return l.length ? (t = this.product, e = l, iJ(t), o = (i = t, s = e, iJ(i), function(t) {
							if (!Array.isArray(t)) throw TypeError(t + " is not an array.");
							if (0 === t.length) throw Error(t + " is empty.");
							if (!t[0].hasOwnProperty("name")) throw Error(t[0] + "does not contain name key.");
							if ("string" != typeof t[0].name) throw TypeError("Invalid value type passed for name of option " + t[0].name + ". Value should be string.")
						}(s), r = [], s.forEach(function(t) {
							for (var e = 0; e < i.options.length; e++)
								if ((i.options[e].name || i.options[e]).toLowerCase() === t.name.toLowerCase()) {
									r[e] = t.value;
									break
								}
						}), r), n = t, a = o, iJ(n), function(t) {
							if (Array.isArray(t) && "object" == typeof t[0]) throw Error(t + "is not a valid array of options.")
						}(a), n.variants.filter(function(t) {
							return a.every(function(e, i) {
								return t.options[i] === e
							})
						})[0] || null) : this.product.variants[0]
					}
					plan(t) {
						let e = {
								allocation: null,
								group: null,
								detail: null
							},
							i = this.element.querySelector(`${i4}:checked`);
						if (!i) return null;
						let s = i.value,
							r = s && "" !== s ? s : null;
						return r && t && (e.allocation = t.selling_plan_allocations.find(function(t) {
							return t.selling_plan_id.toString() === r.toString()
						})), e.allocation && (e.group = this.product.selling_plan_groups.find(function(t) {
							return t.id.toString() === e.allocation.selling_plan_group_id.toString()
						})), e.group && (e.detail = e.group.selling_plans.find(function(t) {
							return t.id.toString() === r.toString()
						})), e && e.allocation && e.detail && e.allocation ? e : null
					}
					properties() {
						return this._serializeInputValues(this.propertyInputs, function(t) {
							return t.name = /(?:^(properties\[))(.*?)(?:\])/.exec(t.name)[2], t
						})
					}
					quantity() {
						return this.quantityInputs[0] ? Number.parseInt(this.quantityInputs[0].value, 10) : 1
					}
					getFormState() {
						let t = this.variant();
						return {
							options: this.options(),
							variant: t,
							properties: this.properties(),
							quantity: this.quantity(),
							plan: this.plan(t)
						}
					}
					_setIdInputValue(t) {
						t && t.id ? this.variantElement.value = t.id.toString() : this.variantElement.value = "", this.variantElement.dispatchEvent(new Event("change"))
					}
					_onSubmit(t, e) {
						e.dataset = this.getFormState(), t.onFormSubmit && t.onFormSubmit(e)
					}
					_onOptionChange(t) {
						this._setIdInputValue(t.dataset.variant)
					}
					_onFormEvent(t) {
						return void 0 === t ? Function.prototype.bind() : (function(e) {
							e.dataset = this.getFormState(), this._setIdInputValue(e.dataset.variant), t(e)
						}).bind(this)
					}
					_initInputs(t, e) {
						return Array.prototype.slice.call(this.element.querySelectorAll(t)).map((function(t) {
							return this._listeners.add(t, "change", this._onFormEvent(e)), t
						}).bind(this))
					}
					_serializeInputValues(t, e) {
						return t.reduce(function(t, i) {
							return (i.checked || "radio" !== i.type && "checkbox" !== i.type) && t.push(e({
								name: i.name,
								value: i.value
							})), t
						}, [])
					}
					_validateProductObject(t) {
						if ("object" != typeof t) throw TypeError(t + " is not an object.");
						if (void 0 === t.variants[0].options) throw TypeError("Product object is invalid. Make sure you use the product object that is output from {{ product | json }} or from the http://[your-product-url].js route");
						return t
					}
					constructor(t, e, i) {
						this.element = t, this.product = this._validateProductObject(e), this.variantElement = this.element.querySelector('[name="id"]'), i = i || {}, this._listeners = new iX, this._listeners.add(this.element, "submit", this._onSubmit.bind(this, i)), this.optionInputs = this._initInputs('[name^="options"]', i.onOptionChange), this.planInputs = this._initInputs(i4, i.onPlanChange), this.quantityInputs = this._initInputs('[name="quantity"]', i.onQuantityChange), this.propertyInputs = this._initInputs('[name^="properties"]', i.onPropertyChange)
					}
				}(this.container, this.productJSON, {
					onOptionChange: this.onOptionChange.bind(this),
					onPlanChange: this.onPlanChange.bind(this)
				}), this.pushState(this.productForm.getFormState(), !0), this.subsToggleListeners()
			}
			onOptionChange(t) {
				this.pushState(t.dataset), this.updateProductImage(t)
			}
			onPlanChange(t) {
				this.subPrices && this.pushState(t.dataset)
			}


// 9-1-2023 letest code

//     updateExpectedDeliveryDate(t) {
//     const e = t.variant;
//     const deliveryDateElement = document.getElementById('fromDate');
//     const estShipInput = document.getElementById('est_ship');
//     const inventoryMessageElements = document.querySelectorAll('.inventoryMessage');
    
      
//     const variants_id = document.querySelectorAll('[data-variant-id]');
//     variants_id.forEach(function(variant) {
//         if (variant.dataset.variantId == e.id) {
//             if (e.available) {
//                 let deliveryTime = 3; // Default delivery time for available variant
//                 if (variant.dataset.variantInventoryPolicy === 'continue' && variant.dataset.variantInventoryQty < 1) {
//                     deliveryTime = 18; // Delivery time for continuing selling with no inventory
//                 }

//                 const currentDate = new Date();
//                 let remainingDays = deliveryTime;

//                 while (remainingDays > 0) {
//                     currentDate.setDate(currentDate.getDate() + 1);
//                     const dayOfWeek = currentDate.getDay();
//                     if (dayOfWeek !== 0 && dayOfWeek !== 6) {
//                         remainingDays--;
//                     }
//                 }

//                 const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//                 const months = [
//                     "Jan", "Feb", "Mar", "Apr", "May", "Jun",
//                     "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
//                 ];
//                 const formattedDeliveryDate = `${daysOfWeek[currentDate.getDay()]}, ${months[currentDate.getMonth()]} ${currentDate.getDate()}`;
                
//                 deliveryDateElement.innerHTML = `Delivered by: <span style="font-weight: bold;">${formattedDeliveryDate}</span>`;
                
//                 // Update the est_ship input value
//                 estShipInput.value = formattedDeliveryDate;
                 
//             } else {
//                 // Handle unavailable variant (similar logic as above)
//                 const deliveryTime = 18;
//                 const currentDate = new Date();
//                 let remainingDays = deliveryTime;

//                 while (remainingDays > 0) {
//                     currentDate.setDate(currentDate.getDate() + 1);
//                     const dayOfWeek = currentDate.getDay();
//                     if (dayOfWeek !== 0 && dayOfWeek !== 6) {
//                         remainingDays--;
//                     }
//                 }

//                 const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//                 const months = [
//                     "Jan", "Feb", "Mar", "Apr", "May", "Jun",
//                     "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
//                 ];
//                 const formattedDeliveryDate = `${daysOfWeek[currentDate.getDay()]}, ${months[currentDate.getMonth()]} ${currentDate.getDate()}`;
  
//                 deliveryDateElement.innerHTML = `Delivered by: <span style="font-weight: bold;">${formattedDeliveryDate}</span>`;
  
//                 // Update the est_ship input value
//                 estShipInput.value = formattedDeliveryDate;                 
//             }

          
          
//           inventoryMessageElements.forEach(function (inventoryMessageElement) {
//             const inventoryQty = parseInt(variant.dataset.variantInventoryQty);
//             let inventoryMessage = '';
        
//             if (inventoryQty > 2) {
//                 inventoryMessage = 'In Stock';
//             } else if (inventoryQty > 0 && inventoryQty < 3) {
//                 inventoryMessage = `Only ${inventoryQty} Left`;
//             } else if (inventoryQty <= 0) {
//                 inventoryMessage = 'Shipping Later';
//             }
        
//             if (inventoryMessage) {
//                 inventoryMessageElement.innerHTML = inventoryMessage;
//                 inventoryMessageElement.style.display = 'block';
//             } else {
//                 inventoryMessageElement.style.display = 'none';
//             }
//         });


// // inventoryMessageElements.forEach(function (inventoryMessageElement) {
// //     const inventoryQty = parseInt(variant.dataset.variantInventoryQty);
// //     let inventoryMessage = '';

// //     if (inventoryQty > 5) {
// //         inventoryMessage = 'In stock, Bestseller';
// //     } else if (inventoryQty > 3 && inventoryQty < 6) {
// //         inventoryMessage = 'In stock, Selling fast';
// //     } else if (inventoryQty > 0 && inventoryQty < 4) {
// //         inventoryMessage = `In stock, Last ${inventoryQty} pieces`;
// //     } else if (inventoryQty <= 0) {
// //         const deliveryTime = 18;
// //         const currentDate = new Date();
// //         let remainingDays = deliveryTime;

// //         while (remainingDays > 0) {
// //             currentDate.setDate(currentDate.getDate() + 1);
// //             const dayOfWeek = currentDate.getDay();
// //             if (dayOfWeek !== 0 && dayOfWeek !== 6) {
// //                 remainingDays--;
// //             }
// //         }

// //         const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// //         const months = [
// //             "Jan", "Feb", "Mar", "Apr", "May", "Jun",
// //             "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
// //         ];
// //         const formattedDeliveryDate = `${daysOfWeek[currentDate.getDay()]}, ${months[currentDate.getMonth()]} ${currentDate.getDate()}`;

// //         inventoryMessage = `Backfilling, ships fast ${formattedDeliveryDate}`;
// //     }

// //     if (inventoryMessage) {
// //         inventoryMessageElement.innerHTML = inventoryMessage;
// //         inventoryMessageElement.style.display = 'block';
// //     } else {
// //         inventoryMessageElement.style.display = 'none';
// //     }
// // });


//         }
//     });
// }

// Letest code 30-1-2024 variant change quntity change

updateExpectedDeliveryDate(t) {
    const e = t.variant;
   const variantIdInput = document.querySelector('input[name="variant_id"]');
    if (variantIdInput) {
        variantIdInput.value = e.id; // Variant ID ne dynamically set karvu
    }
    const metafieldContainer = document.getElementById('shipping-date'); 
    const estShipInput = document.querySelector('input[name="properties[Delivery]"]');
    const inventoryMessageElements = document.querySelectorAll('.inventoryMessage');
    const inventoryCountElement = document.querySelector('.inventoryCount');
    const prodeldate = document.querySelector('.pro-del-date');
 

    if (metafieldContainer) {
        const shipmentParagraphs = metafieldContainer.querySelectorAll('div');
        shipmentParagraphs.forEach(function(paragraph) {
            const paragraphId = paragraph.id;
            if (paragraphId == e.id) {               
                paragraph.style.display = 'block';           
                
                // Extract the delivery date text from the visible paragraph
                const deliveryDateElement = paragraph.querySelector('.pro-del-date');
                if (deliveryDateElement) {
                    // Extract the delivery date text
                    const deliveryDateText = deliveryDateElement.textContent || deliveryDateElement.innerText;

                    // Set the extracted delivery date in the input field
                    if (estShipInput) {
                        estShipInput.value = deliveryDateText;
                    }

                   //update delivery date and message
const currentYear = new Date().getFullYear();
                    const fullDeliveryDateText = `${deliveryDateText}, ${currentYear}`; // Append current year
                    const deliveryDate = new Date(Date.parse(fullDeliveryDateText));
                    // console.log('deliveryDate',deliveryDate);
                  
                    let inventoryMessage = '';  
                    // const inventoryDate = deliveryDateText;
                    const todayDate = new Date();
                    todayDate.setHours(0, 0, 0, 0);
                  
                    // console.log('todayDate',todayDate);
                  
                    const futureDate = new Date(todayDate);
                    futureDate.setDate(todayDate.getDate() + 7);
                  
                    // console.log('futureDate',futureDate);
                  
                    // function formatDateToMonthDay(date) {
                    //     const options = { month: 'long', day: 'numeric' };
                    //     return new Intl.DateTimeFormat('en-US', options).format(date);
                    // }
              
                    // const formattedTodayDate = formatDateToMonthDay(futureDate);
          
                    if (deliveryDate < futureDate) {
                       inventoryMessage = 'In Stock';          
                    } else {
                        inventoryMessage = 'Shipping Later';           
                    }
          
                      if (inventoryMessage) {
                        inventoryMessageElements.forEach(function (inventoryMessageElement) {
                            inventoryMessageElement.innerHTML = inventoryMessage;
                            inventoryMessageElement.style.display = 'block';
                        });
                      } else {
                          inventoryMessageElements.forEach(function (inventoryMessageElement) {
                              inventoryMessageElement.style.display = 'none';
                          });
                      }                
                }
            } else {
                paragraph.style.display = 'none';
            }
        });
    }

    const variants_id = document.querySelectorAll('[data-variant-id]');
    variants_id.forEach(function(variant) {
        if (variant.dataset.variantId == e.id) {        
            if (e.available) {
                // Handle available variant
            } else {  
                // Handle unavailable variant
            }

            // const inventoryQty = parseInt(variant.dataset.variantInventoryQty);
            // let inventoryMessage = '';

            // if (inventoryQty > 2) {
            //     inventoryMessage = 'In Stock';
            // } else if (inventoryQty > 0 && inventoryQty < 3) {
            //     inventoryMessage = `Only ${inventoryQty} Left`;
            // } else if (inventoryQty <= 0) {
            //     inventoryMessage = 'Shipping Later';
            // }  

            // if (inventoryMessage) {
            //     inventoryMessageElements.forEach(function (inventoryMessageElement) {
            //         inventoryMessageElement.innerHTML = inventoryMessage;
            //         inventoryMessageElement.style.display = 'block';
            //     });
            // } else {
            //     inventoryMessageElements.forEach(function (inventoryMessageElement) {
            //         inventoryMessageElement.style.display = 'none';
            //     });
            // }

            // Update the inventory count
            if (inventoryCountElement) {
                inventoryCountElement.textContent = `Inventory Count: ${inventoryQty}`;
            }
        }
    });
  // ========== Cart-bar Logic ==========
    const stickyCartBar = document.getElementById('cart-bar');  
function checkCartForVariant() {
    const variantIdInput = document.querySelector('input[name="variant_id"]');
    if (!variantIdInput) {
        console.error('❌ Variant ID input not found!');
        return;
    }

    const stickyCartBar = document.getElementById('cart-bar');
    if (!stickyCartBar) {
        console.error('❌ Cart-bar element not found!');
        return;
    }

    function updateCartBarVisibility() {
        const selectedVariantId = variantIdInput.value;
        const cartVariantIds = Array.from(document.querySelectorAll('.cart-variant-id'))
            .map(input => input.value);

        const scrollPercentage = (window.scrollY / document.body.scrollHeight) * 100;
        const isVariantInCart = cartVariantIds.includes(selectedVariantId);

        console.log('🟡 Selected Variant ID:', selectedVariantId);
        console.log('🟡 Cart Variant IDs:', cartVariantIds);

        if (scrollPercentage >= 15) {
            if (isVariantInCart) {
                stickyCartBar.classList.add('hidden');
                console.log('✅ Cart-bar hidden (product in cart)');
            } else {
                stickyCartBar.classList.remove('hidden');
                console.log('✅ Cart-bar visible (product not in cart)');
            }
        } else {
            stickyCartBar.classList.add('hidden');
        }
    }

    // Initial check on page load
    updateCartBarVisibility();

    // Scroll event listener
    window.addEventListener('scroll', updateCartBarVisibility);

    // Cart update event listener
    document.addEventListener('cart:updated', () => {
        console.log('🟢 Cart updated event fired!');
        updateCartBarVisibility();
    });
}

// Function call
checkCartForVariant();
}
          
			pushState(t, e = !1) {
				var i;
				this.productState = this.setProductState(t), this.updateExpectedDeliveryDate(t), this.updateAddToCartState(t), this.updateProductPrices(t), this.updateSaleText(t), this.updateSubscriptionText(t), this.updateRemaining(t), this.updateLegend(t), this.fireHookEvent(t), null === (i = this.sellout) || void 0 === i || i.update(t), this.enableHistoryState && !e && this.updateHistoryState(t)
			}
			updateAddToCartState(t) {
				let e = t.variant,
					i = theme.strings.addToCart,
					s = this.container.querySelectorAll(s5),
					r = this.container.querySelectorAll(sQ),
					o = this.container.querySelectorAll("[data-add-to-cart-text]"),
					n = this.container.querySelectorAll("[data-form-wrapper]");
				if (this.installmentForm && e) {
					let a = this.installmentForm.querySelector(sK);
					a.value = e.id, a.dispatchEvent(new Event("change", {
						bubbles: !0
					}))
				}
				this.isPreOrder && (i = theme.strings.preOrder), s.length && e && s.forEach(t => {
					t.classList.remove(sZ)
				}), r.length && r.forEach(t => {
					t.hasAttribute("data-quick-add-btn") || (e && e.available ? t.disabled = !1 : t.disabled = !0)
				}), o.length && o.forEach(t => {
					e ? e.available ? t.innerHTML = i : t.innerHTML = theme.strings.soldOut : t.innerHTML = theme.strings.unavailable
				}), n.length && n.forEach(t => {
					if (e) {
						e.available ? t.classList.remove(rt, re) : (t.classList.add(rt), t.classList.remove(re));
						let i = t.querySelector("[data-product-select]");
						i && (i.value = e.id);
						let s = t.querySelector(`${sK}[form]`);
						s && (s.value = e.id, s.dispatchEvent(new Event("change")))
					} else t.classList.add(re), t.classList.remove(rt)
				})
			}
			updateHistoryState(t) {
				let e = t.variant,
					i = t.plan,
					s = window.location.href;
				if (e && s.includes("/product")) {
					let r = new window.URL(s),
						o = r.searchParams;
					o.set("variant", e.id), i && i.detail && i.detail.id && this.productState.hasPlan ? o.set("selling_plan", i.detail.id) : o.delete("selling_plan"), r.search = o.toString();
					let n = r.toString();
					window.history.replaceState({
						path: n
					}, "", n)
				}
			}
			updateRemaining(t) {
				var e;
				let i = t.variant;
				if (null === (e = this.remainingWrapper) || void 0 === e || e.classList.remove(rr, ro, rn, rs), i && this.remainingWrapper && this.remainingJSON) {
					let s = this.remainingJSON[i.id];
					("out" === s || s < 1) && this.remainingWrapper.classList.add(ro), ("in" === s || s >= this.remainingMaxInt) && this.remainingWrapper.classList.add(rr), ("low" === s || s > 0 && s < this.remainingMaxInt) && (this.remainingWrapper.classList.add(rs), this.remainingCount && (this.remainingCount.innerHTML = s))
				} else !i && this.remainingWrapper && this.remainingWrapper.classList.add(rn)
			}
			getBaseUnit(t) {
				return 1 === t.unit_price_measurement.reference_value ? t.unit_price_measurement.reference_unit : t.unit_price_measurement.reference_value + t.unit_price_measurement.reference_unit
			}
			subsToggleListeners() {
				this.container.querySelectorAll("[data-toggles-group]").forEach(t => {
					t.addEventListener("change", (function(t) {
						let e = t.target.value.toString(),
							i = this.container.querySelector(`[${s7}="${e}"]`),
							s = this.container.querySelectorAll(`[${s7}]`);
						if (i) {
							i.classList.remove(sZ);
							let r = i.querySelector('[name="selling_plan"]');
							r.checked = !0, r.dispatchEvent(new Event("change"))
						}
						s.forEach(t => {
							t !== i && (t.classList.add(sZ), t.querySelectorAll('[name="selling_plan"]').forEach(t => {
								t.checked = !1, t.dispatchEvent(new Event("change"))
							}))
						})
					}).bind(this))
				})
			}
			updateSaleText(t) {
				this.productState.planSale ? this.updateSaleTextSubscription(t) : this.productState.onSale ? this.updateSaleTextStandard(t) : this.priceOffWrap && this.priceOffWrap.classList.add(sZ)
			}
			updateSaleTextStandard(t) {
				if (this.priceOffType && (this.priceOffType.innerHTML = window.theme.strings.sale || "sale"), this.priceOffAmount && this.priceOffWrap) {
					let e = t.variant,
						i = (e.compare_at_price - e.price) / e.compare_at_price;
					this.priceOffAmount.innerHTML = `${Math.floor(100*i)}%`, this.priceOffWrap.classList.remove(sZ)
				}
			}
			updateSubscriptionText(t) {
				t.plan && this.planDescription ? (this.planDescription.innerHTML = t.plan.detail.description, this.planDescription.classList.remove(sZ)) : this.planDescription && this.planDescription.classList.add(sZ)
			}
			updateSaleTextSubscription(t) {
				if (this.priceOffType && (this.priceOffType.innerHTML = window.theme.strings.subscription || "subscripton"), this.priceOffAmount && this.priceOffWrap) {
					let e = t.plan.detail.price_adjustments[0],
						s = e.value;
					e && "percentage" === e.value_type ? this.priceOffAmount.innerHTML = `${s}%` : this.priceOffAmount.innerHTML = i.formatMoney(s, theme.moneyFormat), this.priceOffWrap.classList.remove(sZ)
				}
			}
			updateProductPrices(t) {
				let e = t.variant,
					s = t.plan;
				this.container.querySelectorAll(s5).forEach(t => {
					let r = t.querySelector("[data-compare-price]"),
						o = t.querySelector("[data-product-price]"),
						n = t.querySelector("[data-compare-text]"),
						a = "",
						l = "";
					this.productState.available && (a = e.compare_at_price, l = e.price), this.productState.hasPlan && (l = s.allocation.price), this.productState.planSale && (a = s.allocation.compare_at_price, l = s.allocation.price), r && (this.productState.onSale || this.productState.planSale ? (r.classList.remove(sZ), n.classList.remove(sZ), o.classList.add(ri)) : (r.classList.add(sZ), n.classList.add(sZ), o.classList.remove(ri)), r.innerHTML = i.formatMoney(a, theme.moneyFormat)), o.innerHTML = 0 === l ? window.theme.strings.free : i.formatMoney(l, theme.moneyFormat)
				}), this.hasUnitPricing && this.updateProductUnits(t)
			}
			updateProductUnits(t) {
				let e = t.variant,
					s = t.plan,
					r = null;
				if (e && e.unit_price && (r = e.unit_price), s && s.allocation && s.allocation.unit_price && (r = s.allocation.unit_price), r) {
					let o = this.getBaseUnit(e),
						n = i.formatMoney(r, theme.moneyFormat);
					this.container.querySelector("[data-product-unit-price]").innerHTML = n, this.container.querySelector("[data-product-base]").innerHTML = o, tf(this.container.querySelector(sY))
				} else tS(this.container.querySelector(sY))
			}
			fireHookEvent(t) {
				let e = t.variant;
				this.container.dispatchEvent(new CustomEvent("theme:variant:change", {
					detail: {
						variant: e
					},
					bubbles: !0
				}))
			}
			setProductState(t) {
				let e = t.variant,
					i = t.plan,
					s = {
						available: !0,
						soldOut: !1,
						onSale: !1,
						showUnitPrice: !1,
						requiresPlan: !1,
						hasPlan: !1,
						planPerDelivery: !1,
						planSale: !1
					};
				return e && (!e.requires_selling_plan || i) ? (e.available || (s.soldOut = !0), e.compare_at_price > e.price && (s.onSale = !0), e.unit_price && (s.showUnitPrice = !0), this.product && this.product.requires_selling_plan && (s.requiresPlan = !0), i && this.subPrices && (s.hasPlan = !0, i.allocation.per_delivery_price !== i.allocation.price && (s.planPerDelivery = !0), e.price > i.allocation.price && (s.planSale = !0))) : s.available = !1, s
			}
			updateProductImage(t) {
				let e = t.dataset.variant;
				if (e && e.featured_media) {
					let i = this.container.querySelector(`[data-image-id="${e.featured_media.id}"]`),
						s = null == i ? void 0 : i.closest(".product__slide");
					if (s) {
						let r = Array.from(s.parentElement.children).indexOf(s),
							n = this.container.querySelector("[data-product-slideshow]"),
							a = E();
						if (n && n.classList.contains("flickity-enabled") ? o.data(n).select(r) : n && !a && n.scrollTo({
								top: 0,
								left: s.offsetLeft,
								behavior: "smooth"
							}), a && this.tallLayout) {
							let l = i.getBoundingClientRect().top;
							if (0 === r && l + window.scrollY > window.pageYOffset) return;
							document.dispatchEvent(new CustomEvent("theme:tooltip:close", {
								bubbles: !1,
								detail: {
									hideTransition: !1
								}
							})), eN(l)
						}
					}
				}
			}
			updateLegend(t) {
				let e = t.variant;
				if (e) {
					let i = this.container.querySelectorAll("[data-option-value]");
					i.length && i.forEach(t => {
						let i = t.closest("[data-option-position]");
						if (i) {
							let s = i.getAttribute("data-option-position"),
								r = parseInt(s, 10) - 1,
								o = e.options[r];
							t.innerHTML = o
						}
					})
				}
			}
			constructor() {
				super()
			}
		},
		rl = "closing",
		rh = class extends HTMLElement {
			connectedCallback() {
				this.modal = this.querySelector("dialog"), this.buttonModalOpen = this.querySelector("[data-modal-open]"), this.buttonModalClose = this.querySelector("[data-modal-close]"), this.focusTarget = this.modal.querySelector("[autofocus]") || this.modal.querySelector('button, [href], select, textarea, [tabindex]:not([tabindex="-1"])'), this.isAnimating = !1, this.modalEvents()
			}
			modalOpen() {
				var t;
				"function" == typeof this.modal.showModal && this.modal.showModal(), this.modal.setAttribute("open", !0), this.modal.removeAttribute("inert"), null === (t = this.focusTarget) || void 0 === t || t.focus(), document.dispatchEvent(new CustomEvent("theme:modal:open", {
					bubbles: !0
				}))
			}
			modalClose() {
				if (!this.isAnimating) {
					if (!this.modal.hasAttribute(rl)) return this.modal.setAttribute(rl, ""), void(this.isAnimating = !0);
					"function" == typeof this.modal.close ? this.modal.close() : this.modal.removeAttribute("open"), this.modal.removeAttribute(rl), this.modal.setAttribute("inert", "")
				}
			}
			modalEvents() {
				this.buttonModalOpen.addEventListener("click", t => {
					t.preventDefault(), this.modalOpen()
				}), this.buttonModalClose.addEventListener("click", t => {
					t.preventDefault(), this.modalClose()
				}), this.modal.addEventListener("click", t => {
					"DIALOG" === t.target.nodeName && "click" === t.type && this.modalClose()
				}), this.modal.addEventListener("keydown", t => {
					"Escape" == t.code && (t.preventDefault(), this.modalClose())
				}), this.modal.addEventListener("theme:modal:close", () => {
					this.modalClose()
				}), this.modal.addEventListener("animationend", t => {
					t.target === this.modal && (this.isAnimating = !1, this.modal.hasAttribute(rl) && this.modalClose())
				})
			}
			constructor() {
				super()
			}
		},
		rc = class extends tv {
			loadContent() {
				super.loadContent(), Shopify.loadFeatures([{
					name: "model-viewer-ui",
					version: "1.0",
					onLoad: this.setupModelViewerUI.bind(this)
				}])
			}
			setupModelViewerUI(t) {
				t || (this.modelViewerUI = new Shopify.ModelViewerUI(this.querySelector("model-viewer")))
			}
			constructor() {
				super()
			}
		};
	window.ProductModel = {
		loadShopifyXR() {
			Shopify.loadFeatures([{
				name: "shopify-xr",
				version: "1.0",
				onLoad: this.setupShopifyXR.bind(this)
			}])
		},
		setupShopifyXR(t) {
			t || (window.ShopifyXR ? (document.querySelectorAll('[id^="ModelJSON-"]').forEach(t => {
				window.ShopifyXR.addModels(JSON.parse(t.textContent)), t.remove()
			}), window.ShopifyXR.setupXRElements()) : document.addEventListener("shopify_xr_initialized", () => this.setupShopifyXR()))
		}
	}, window.addEventListener("DOMContentLoaded", () => {
		window.ProductModel && window.ProductModel.loadShopifyXR()
	});
	let rd = "hidden",
		ru = "closing",
		rp = class extends HTMLElement {
			connectedCallback() {
				this.container = this.closest("[data-section-type]"), this.drawer = null, this.buttonDrawerOpen = null, this.buttonDrawerClose = null, this.a11y = R, this.isAnimating = !1, this.container.addEventListener("theme:variant:change", t => this.fetchPickupAvailability(t)), this.fetchPickupAvailability()
			}
			fetchPickupAvailability(t) {
				if (t && !t.detail.variant || t && t.detail.variant && !t.detail.variant.available) return void this.classList.add(rd);
				let e = t && t.detail.variant ? t.detail.variant.id : this.getAttribute("data-store-availability-container");
				e && fetch(`${window.theme.routes.root}variants/${e}/?section_id=api-pickup-availability`).then(this.handleErrors).then(t => t.text()).then(t => {
					let e = (new DOMParser).parseFromString(t, "text/html").querySelector(".shopify-section").innerHTML;
					this.innerHTML = e, this.drawer = this.querySelector("[data-pickup-drawer]"), this.drawer ? (this.classList.remove(rd), this.drawerEvents()) : this.classList.add(rd)
				}).catch(t => {
					console.error(t)
				})
			}
			openDrawer() {
				this.drawer && ("function" == typeof this.drawer.showModal && this.drawer.showModal(), this.drawer.setAttribute("open", !0), this.drawer.removeAttribute("inert"), this.drawer.dispatchEvent(new CustomEvent("theme:scroll:lock", {
					bubbles: !0
				})), (this.drawer.querySelector("[autofocus]") || this.drawer.querySelector('button, [href], select, textarea, [tabindex]:not([tabindex="-1"])')).focus(), document.dispatchEvent(new CustomEvent("theme:scroll:lock", {
					bubbles: !0
				})))
			}
			closeDrawer() {
				if (!this.isAnimating) {
					if (!this.drawer.hasAttribute(ru)) return this.drawer.setAttribute(ru, ""), void(this.isAnimating = !0);
					"function" == typeof this.drawer.close ? this.drawer.close() : this.drawer.removeAttribute("open"), this.drawer.removeAttribute(ru), this.drawer.setAttribute("inert", ""), document.querySelector("dialog[open]") || document.dispatchEvent(new CustomEvent("theme:scroll:unlock", {
						bubbles: !0
					}))
				}
			}
			drawerEvents() {
				var t, e;
				null === (t = this.querySelector("[data-pickup-drawer-open]")) || void 0 === t || t.addEventListener("click", () => {
					this.openDrawer(), window.accessibility.lastElement = this.buttonDrawerOpen
				}), null === (e = this.drawer.querySelector("[data-pickup-drawer-close]")) || void 0 === e || e.addEventListener("click", t => {
					t.preventDefault(), this.closeDrawer()
				}), this.drawer.addEventListener("click", t => {
					"DIALOG" === t.target.nodeName && "click" === t.type && this.closeDrawer()
				}), this.drawer.addEventListener("keydown", t => {
					"Escape" === t.code && (t.preventDefault(), this.closeDrawer())
				}), this.drawer.addEventListener("animationend", t => {
					t.target === this.drawer && (this.isAnimating = !1, this.drawer.hasAttribute(ru) && this.closeDrawer())
				})
			}
			handleErrors(t) {
				return t.ok ? t : t.json().then(function(e) {
					throw new tL({
						status: t.statusText,
						headers: t.headers,
						json: e
					})
				})
			}
			constructor() {
				super()
			}
		},
		rm = {};

	function rg(t = {}) {
		if (t.type || (t.type = "json"), t.url) return rm[t.url] ? rm[t.url] : function(t, e) {
			let i = new Promise((i, s) => {
				var r, o, n;
				let a, l, h;
				"text" === e ? fetch(t).then(t => t.text()).then(t => {
					i(t)
				}).catch(t => {
					s(t)
				}) : (r = t, o = function() {
					i()
				}, n = function() {
					s()
				}, a = document.getElementsByTagName("head")[0], l = !1, (h = document.createElement("script")).src = r, h.onload = h.onreadystatechange = function() {
					l || this.readyState && "loaded" != this.readyState && "complete" != this.readyState ? n() : (l = !0, o())
				}, a.appendChild(h))
			});
			return rm[t] = i, i
		}(t.url, t.type);
		if (t.json) return rm[t.json] ? Promise.resolve(rm[t.json]) : window.fetch(t.json).then(t => t.json()).then(e => (rm[t.json] = e, e));
		if (t.name) {
			let e = "".concat(t.name, t.version);
			return rm[e] ? rm[e] : function(t) {
				let e = "".concat(t.name, t.version),
					i = new Promise((e, i) => {
						try {
							window.Shopify.loadFeatures([{
								name: t.name,
								version: t.version,
								onLoad(t) {
									var s, r, o;
									s = e, r = i, (o = t) ? r(o) : s()
								}
							}])
						} catch (s) {
							i(s)
						}
					});
				return rm[e] = i, i
			}(t)
		}
		return Promise.reject()
	}
	window.isYoutubeAPILoaded = !1, window.isVimeoAPILoaded = !1;
	let rv = ".pswp__thumbs",
		ry = "is-current",
		rf = "pswp--custom-loader",
		rb = "pswp--custom-opening",
		rS = "pswp__loader",
		rE = "is-focused",
		rL = "data-pswp-option-classes",
		rw = "aria-current",
		rk = `<div class="${rS}"><div class="loader pswp__loader-line"><div class="loader-indeterminate"></div></div></div>`,
		rA = class {
			init() {
				this.pswpElement.classList.add(rb), this.initLoader(), rg({
					url: window.theme.assets.photoswipe
				}).then(() => this.loadPopup()).catch(t => console.error(t))
			}
			initLoader() {
				if (this.pswpElement.classList.contains(rf) && "" !== this.options && this.options.mainClass) {
					this.pswpElement.setAttribute(rL, this.options.mainClass);
					let t = document.createElement("div");
					t.innerHTML = rk, t = t.firstChild, this.pswpElement.appendChild(t)
				} else this.pswpElement.setAttribute(rL, "")
			}
			loadPopup() {
				let t = window.themePhotoswipe.PhotoSwipe.default,
					e = window.themePhotoswipe.PhotoSwipeUI.default;
				this.pswpElement.classList.contains(rf) && this.pswpElement.classList.remove(rf), this.pswpElement.classList.remove(rb), this.popup = new t(this.pswpElement, e, this.items, this.options), this.popup.init(), this.thumbsActions(), document.body.classList.contains(rE) && setTimeout(() => {
					this.a11y.trapFocus(this.pswpElement, {
						elementToFocus: this.closeBtn
					})
				}, 200), this.popup.listen("close", () => this.onClose()), this.options && this.options.closeElClasses && this.options.closeElClasses.length && this.options.closeElClasses.forEach(t => {
					let e = this.pswpElement.querySelector(`.pswp__${t}`);
					e && e.addEventListener("keyup", this.keyupCloseEvent)
				})
			}
			thumbsActions() {
				this.popupThumbsContainer && this.popupThumbsContainer.children.length && (this.popupThumbsContainer.addEventListener("wheel", t => this.stopDisabledScroll(t)), this.popupThumbsContainer.addEventListener("mousewheel", t => this.stopDisabledScroll(t)), this.popupThumbsContainer.addEventListener("DOMMouseScroll", t => this.stopDisabledScroll(t)), this.popupThumbs = this.pswpElement.querySelectorAll(`${rv} > *`), this.popupThumbs.forEach((t, e) => {
					t.addEventListener("click", i => {
						i.preventDefault();
						let s = t.parentElement.querySelector(`.${ry}`);
						s.classList.remove(ry), s.setAttribute(rw, !1), t.classList.add(ry), t.setAttribute(rw, !0), this.popup.goTo(e)
					})
				}), this.popup.listen("imageLoadComplete", () => this.setCurrentThumb()), this.popup.listen("beforeChange", () => this.setCurrentThumb()))
			}
			stopDisabledScroll(t) {
				t.stopPropagation()
			}
			keyupClose(t) {
				"Enter" === t.code && this.popup.close()
			}
			onClose() {
				let t = this.pswpElement.querySelector("iframe, video");
				if (t && t.parentNode.removeChild(t), this.popupThumbsContainer && this.popupThumbsContainer.firstChild)
					for (; this.popupThumbsContainer.firstChild;) this.popupThumbsContainer.removeChild(this.popupThumbsContainer.firstChild);
				this.pswpElement.setAttribute(rL, "");
				let e = this.pswpElement.querySelector(`.${rS}`);
				e && this.pswpElement.removeChild(e), this.options && this.options.closeElClasses && this.options.closeElClasses.length && this.options.closeElClasses.forEach(t => {
					let e = this.pswpElement.querySelector(`.pswp__${t}`);
					e && e.removeEventListener("keyup", this.keyupCloseEvent)
				}), this.a11y.removeTrapFocus(), window.accessibility.lastElement && document.body.classList.contains(rE) && requestAnimationFrame(() => {
					window.accessibility.lastElement.focus()
				})
			}
			setCurrentThumb() {
				let t = this.pswpElement.querySelector(`${rv} > .${ry}`);
				if (t && (t.classList.remove(ry), t.setAttribute(rw, !1)), !this.popupThumbs) return;
				let e = this.popupThumbs[this.popup.getCurrentIndex()];
				e.classList.add(ry), e.setAttribute(rw, !0), this.scrollThumbs(e)
			}
			scrollThumbs(t) {
				let e = this.popupThumbsContainer.scrollLeft + this.popupThumbsContainer.offsetWidth,
					i = t.offsetLeft;
				if (e <= i + t.offsetWidth || e > i) {
					let s = parseInt(window.getComputedStyle(t).marginLeft);
					this.popupThumbsContainer.scrollTo({
						top: 0,
						left: i - s,
						behavior: "smooth"
					})
				}
			}
			constructor(t, e = "") {
				this.items = t, this.pswpElement = document.querySelectorAll(".pswp")[0], this.popup = null, this.popupThumbs = null, this.popupThumbsContainer = this.pswpElement.querySelector(rv), this.closeBtn = this.pswpElement.querySelector(".pswp__custom-close"), this.keyupCloseEvent = t => this.keyupClose(t), this.a11y = R, this.options = "" !== e ? e : {
					history: !1,
					focus: !1,
					mainClass: ""
				}, this.init()
			}
		},
		r$ = "variant--soldout",
		rT = "variant--unavailable",
		rq = "pswp-zoom-gallery",
		rC = "data-add-to-cart-bar",
		rx = "data-truncated-content",
		r_ = "[data-slider]",
		rP = "data-slider-index",
		rH = "is-expanded",
		rB = "is-visible",
		rD = {};
	eg("product", [{
		onLoad() {
			rD[this.id] = new class {
				scrollEvents(t) {
					this.cartBarExist && this.cartBarScroll()
				}
				resizeEvents(t) {
					this.truncateText()
				}
				truncateText() {
					if (this.truncateElementHolder.classList.contains(rB)) return;
					let t = this.truncateElement.querySelectorAll("style");
					t.length && t.forEach(t => {
						this.truncateElementHolder.prepend(t)
					});
					let e = this.truncateElement.cloneNode(!0),
						i = this.truncateElement.getAttribute(rx),
						s = this.truncateElement.nextElementSibling;
					s && s.remove(), this.truncateElement.parentElement.append(e);
					let r = this.truncateElement.nextElementSibling;
					r.classList.add(i), r.removeAttribute(rx), tf(r), ((t = "", e = 1, i = {}) => {
						let s = {
								replaceStr: "...",
								debounceDelay: 250,
								delimiter: " ",
								...i
							},
							r = t && (t instanceof NodeList ? t : 1 === t.nodeType ? [t] : document.querySelectorAll(t));
						for (let o = 0; o < r.length; o++) {
							let n = r[o],
								a = /<!--[\s\S]*?-->/g,
								l = n.innerHTML.replace(a, "").split(s.delimiter);
							n.innerHTML = "";
							let h = window.getComputedStyle(n);
							l.reduce(sz, {
								el: n,
								buffer: n.innerHTML,
								elStyle: h,
								elHeight: 0,
								rowsLimit: e,
								rowsWrapped: 0,
								options: s
							})
						}
					})(r, 5, {
						replaceStr: "",
						delimiter: " "
					}), tS(r), this.truncateElement.innerHTML !== r.innerHTML ? this.truncateElementHolder.classList.add(rH) : (r.remove(), this.truncateElementHolder.classList.remove(rH)), this.toggleTruncatedContent(this.truncateElementHolder)
				}
				toggleTruncatedContent(t) {
					let e = t.querySelector("[data-truncated-button]");
					e && e.addEventListener("click", e => {
						e.preventDefault(), t.classList.remove(rH), t.classList.add(rB)
					})
				}
				initCartBar() {
					this.cartBarBtn = this.cartBar.querySelector(".product__submit__add"), this.cartBarBtn && (this.cartBarBtn.addEventListener("click", t => {
						t.preventDefault(), t.currentTarget.hasAttribute(rC) ? (theme.settings.cartDrawerEnabled && (t.currentTarget.classList.add("is-loading"), t.currentTarget.setAttribute("disabled", "disabled")), this.form.querySelector("[data-add-to-cart]").dispatchEvent(new Event("click", {
							bubbles: !0
						}))) : t.currentTarget.hasAttribute("data-cart-bar-scroll") && this.scrollToTop()
					}), this.cartBarBtn.hasAttribute(rC) && document.addEventListener("theme:product:add-error", this.scrollToTop))
				}
				scrollToTop() {
					let t = this.container.querySelector("[data-product-variants]"),
						e = (E() ? this.container : t || this.form).getBoundingClientRect().top;
					eN(E() ? e : e - 10)
				}
				cartBarScroll() {
					let t = window.pageYOffset,
						e = theme.variables.productPageSticky && this.formWrapper ? this.formWrapper : this.form;
					if (e && this.cartBar) {
						let i = t > e.offsetTop + e.offsetHeight;
						this.cartBar.classList.toggle(rB, i)
					}
				}
				onUnload() {
					document.removeEventListener("theme:product:add-error", this.scrollToTop), this.truncateElementHolder && this.truncateElement && document.removeEventListener("theme:resize", this.resizeEvent), this.cartBarExist && document.removeEventListener("theme:scroll", this.scrollEvent)
				}
				onBlockSelect(t) {
					let e = t.srcElement.closest(r_);
					if (e && this.slider.length) {
						let i = e.hasAttribute(rP) ? e.getAttribute(rP) : 0;
						if (!this.slider[i]) return;
						this.slider[i].onBlockSelect(t)
					}
				}
				onBlockDeselect(t) {
					let e = t.srcElement.closest(r_);
					if (e && this.slider.length) {
						let i = e.hasAttribute(rP) ? e.getAttribute(rP) : 0;
						if (!this.slider[i]) return;
						this.slider[i].onBlockDeselect(t)
					}
				}
				constructor(t) {
					this.section = t, this.container = t.container, this.id = this.container.getAttribute("data-section-id"), this.sliders = this.container.querySelectorAll(r_), this.slider = [], this.truncateElementHolder = this.container.querySelector("[data-truncated-holder]"), this.truncateElement = this.container.querySelector("[data-truncated-content]"), this.formWrapper = this.container.querySelector("[data-form-wrapper]"), this.cartBarExist = "true" === this.container.getAttribute("data-cart-bar"), this.cartBar = this.container.querySelector("#cart-bar"), this.scrollToTop = this.scrollToTop.bind(this), this.scrollEvent = t => this.scrollEvents(t), this.resizeEvent = t => this.resizeEvents(t), this.unlockTimer = 0, this.accessibility = R, this.container.hasAttribute("data-image-zoom-enable") && new class {
						init() {
							this.zoomWrappers.length && this.zoomWrappers.forEach((t, e) => {
								t.addEventListener("click", i => {
									i.preventDefault(), this.createZoom(e), window.accessibility.lastElement = t
								}), t.addEventListener("keyup", i => {
									"Enter" === i.code && (i.preventDefault(), this.createZoom(e), window.accessibility.lastElement = t)
								})
							})
						}
						createZoom(t) {
							let e = this.container.querySelector("[data-pswp-thumbs-template]"),
								i = null == e ? void 0 : e.innerHTML,
								s = [],
								r = 0;
							this.zoomWrappers.forEach(e => {
								let o = e.getAttribute("data-image-src");
								r += 1, s.push({
									src: o,
									w: parseInt(e.getAttribute("data-image-width")),
									h: parseInt(e.getAttribute("data-image-height")),
									msrc: o
								}), this.zoomWrappers.length === r && (new rA(s, {
									history: !1,
									focus: !1,
									index: t,
									mainClass: 1 === r ? `${rq} pswp-zoom-gallery--single` : `${rq}`,
									showHideOpacity: !0,
									howAnimationDuration: 150,
									hideAnimationDuration: 250,
									closeOnScroll: !1,
									closeOnVerticalDrag: !1,
									captionEl: !0,
									closeEl: !0,
									closeElClasses: ["caption-close", "title"],
									tapToClose: !1,
									clickToCloseNonZoomable: !1,
									maxSpreadZoom: 2,
									loop: !0,
									spacing: 0,
									allowPanToNext: !0,
									pinchToClose: !1,
									addCaptionHTMLFn: (t, e, i) => {
										this.zoomCaption(t, e, i)
									},
									getThumbBoundsFn: () => {
										let e = this.zoomWrappers[t],
											i = window.pageYOffset || document.documentElement.scrollTop,
											s = e.getBoundingClientRect();
										return {
											x: s.left,
											y: s.top + i,
											w: s.width
										}
									}
								}), this.thumbsContainer && "" !== i && (this.thumbsContainer.innerHTML = i))
							})
						}
						zoomCaption(t, e) {
							let i = "",
								s = e.children[0];
							return this.zoomCaptionElem && (i = this.zoomCaptionElem.innerHTML, this.zoomCaptionElem.closest(`.${r$}`) ? s.classList.add(r$) : s.classList.remove(r$), this.zoomCaptionElem.closest(`.${rT}`) ? s.classList.add(rT) : s.classList.remove(rT)), i = i.replaceAll("product__title", "product__title pswp__title"), s.innerHTML = i, !1
						}
						constructor(t) {
							this.container = t.container, this.zoomWrappers = this.container.querySelectorAll("[data-zoom-wrapper]"), this.thumbsContainer = document.querySelector(".pswp__thumbs"), this.zoomCaptionElem = this.container.querySelector("[data-zoom-caption]"), this.init()
						}
					}(this.section), this.truncateElementHolder && this.truncateElement && (setTimeout(() => this.truncateText(), 50), document.addEventListener("theme:resize", this.resizeEvent));
					let e = this.container.querySelector("[data-product-json]");
					if (e && !e.innerHTML || !e) return;
					let i = JSON.parse(e.innerHTML).handle,
						s = {};
					i && (s = {
						handle: i
					}), Shopify.Products.recordRecentlyViewed(s), this.form = this.container.querySelector("[data-product-form]"), this.sliders.length && this.sliders.forEach((t, e) => {
						t.setAttribute(rP, e), this.slider.push(new eR(this.container, t))
					}), this.cartBarExist && (this.initCartBar(), document.addEventListener("theme:scroll", this.scrollEvent))
				}
			}(this)
		},
		onUnload(t) {
			rD[this.id].onUnload(t)
		},
		onBlockSelect(t) {
			rD[this.id].onBlockSelect(t)
		},
		onBlockDeselect(t) {
			rD[this.id].onBlockDeselect(t)
		}
	}, eT, sw, {
		onLoad() {
			s3[this.id] = new class {
				init() {
					this.stickyEnabled && (this.stickyScrollCheck(), document.addEventListener("theme:resize", this.resizeEvent)), this.initSticky()
				}
				initSticky() {
					theme.variables.productPageSticky && (this.requestAnimationSticky = requestAnimationFrame(() => this.calculateStickyPosition()), this.formWrapper.addEventListener("theme:form:sticky", t => {
						this.removeAnimationFrame(), this.requestAnimationSticky = requestAnimationFrame(() => this.calculateStickyPosition(t))
					}), document.addEventListener("theme:scroll", this.scrollEvent))
				}
				scrollEvents(t) {
					this.scrollTop = t.detail.position, this.scrollDirectionDown = t.detail.down, this.requestAnimationSticky || (this.requestAnimationSticky = requestAnimationFrame(() => this.calculateStickyPosition()))
				}
				resizeEvents(t) {
					this.stickyScrollCheck(), document.removeEventListener("theme:scroll", this.scrollEvent), this.initSticky()
				}
				stickyScrollCheck() {
					let t = this.container.querySelector(`.product__page ${sV}`);
					if (t) {
						if (E()) {
							let e = this.container.querySelector(sV),
								i = this.container.querySelector("[data-product-slideshow]");
							if (!e || !i) return;
							e.offsetHeight < i.offsetHeight ? (theme.variables.productPageSticky = !0, t.classList.add(sj)) : (theme.variables.productPageSticky = !1, t.classList.remove(sj))
						} else theme.variables.productPageSticky = !1, t.classList.remove(sj)
					}
				}
				calculateStickyPosition(t = null) {
					if (document.documentElement.hasAttribute("data-scroll-locked")) return void this.removeAnimationFrame();
					let e = Boolean(t && t.detail),
						i = Boolean(e && t.detail.element && "accordion" === t.detail.element),
						s = this.formWrapper.offsetHeight,
						r = window.innerHeight - s - this.defaultTopBottomSpacings,
						o = Math.abs(this.scrollTop - this.scrollLastPosition);
					if (this.scrollDirectionDown ? this.stickyScrollTop -= o : this.stickyScrollTop += o, this.stickyFormLoad) {
						if (document.querySelector("[data-header-sticky]")) {
							let {
								headerHeight: n
							} = h();
							this.stickyDefaultTop = n
						} else this.stickyDefaultTop = this.defaultTopBottomSpacings;
						this.stickyScrollTop = this.stickyDefaultTop
					}
					this.stickyScrollTop = Math.min(Math.max(this.stickyScrollTop, r), this.stickyDefaultTop);
					let a = this.stickyScrollTop - this.currentPoint;
					this.currentPoint = this.stickyFormLoad ? this.stickyScrollTop : this.currentPoint + .5 * a, this.formWrapper.style.setProperty("--sticky-top", `${this.currentPoint}px`), this.scrollLastPosition = this.scrollTop, this.stickyFormLoad = !1, i && this.onChangeCounter <= 10 || i && this.stickyFormLastHeight !== s || this.stickyScrollTop !== this.currentPoint && this.requestAnimationSticky ? (i && (this.onChangeCounter += 1), i && this.stickyFormLastHeight !== s && (this.onChangeCounter = 11), this.requestAnimationSticky = requestAnimationFrame(() => this.calculateStickyPosition(t))) : this.requestAnimationSticky && this.removeAnimationFrame(), this.stickyFormLastHeight = s
				}
				removeAnimationFrame() {
					this.requestAnimationSticky && (cancelAnimationFrame(this.requestAnimationSticky), this.requestAnimationSticky = null, this.onChangeCounter = 0)
				}
				onUnload() {
					this.stickyEnabled && document.removeEventListener("theme:resize", this.resizeEvent), theme.variables.productPageSticky && document.removeEventListener("theme:scroll", this.scrollEvent)
				}
				constructor(t) {
					this.section = t, this.container = t.container, this.stickyEnabled = "true" === this.container.getAttribute("data-sticky-enabled"), this.formWrapper = this.container.querySelector(sV), this.stickyScrollTop = 0, this.scrollLastPosition = 0, this.stickyDefaultTop = 0, this.currentPoint = 0, this.defaultTopBottomSpacings = 30, this.scrollTop = window.scrollY, this.scrollDirectionDown = !0, this.requestAnimationSticky = null, this.stickyFormLoad = !0, this.stickyFormLastHeight = null, this.onChangeCounter = 0, this.scrollEvent = t => this.scrollEvents(t), this.resizeEvent = t => this.resizeEvents(t), setTimeout(() => {
						this.init()
					}, 50)
				}
			}(this)
		},
		onUnload() {
			s3[this.id].onUnload()
		}
	}, {
		onLoad() {
			sB[this.id] = new sD(this)
		},
		onUnload(t) {
			sB[this.id].onUnload(t)
		}
	}]), customElements.get("complementary-products") || customElements.define("complementary-products", sU), customElements.get("pickup-availability") || customElements.define("pickup-availability", rp), customElements.get("product-form") || customElements.define("product-form", ra), customElements.get("product-modal") || customElements.define("product-modal", rh), customElements.get("product-model") || customElements.define("product-model", rc), customElements.get("product-siblings") || customElements.define("product-siblings", sp), customElements.get("radio-swatch") || customElements.define("radio-swatch", si), customElements.get("recipient-form") || customElements.define("recipient-form", s0), customElements.get("share-button") || customElements.define("share-button", sX);
	let rM = "[data-product-grid-item]",
		rI = "[data-recent-wrapper]",
		r9 = "[data-slider]",
		rF = "data-limit",
		r8 = "data-minimum",
		rO = {};
	eg("related", [{
		onLoad() {
			rO[this.id] = new class {
				related() {
					let t = this.container.querySelector("[data-related-section]");
					if (!t) return;
					let e = t.getAttribute("data-product-id"),
						i = t.getAttribute(rF),
						s = `${window.theme.routes.product_recommendations_url}?section_id=api-product-recommendation&limit=${i}&product_id=${e}&intent=related`;
					fetch(s).then(t => t.text()).then(e => {
						let i = document.createElement("div");
						i.innerHTML = (new DOMParser).parseFromString(e, "text/html").querySelector("[data-api-related-template]").innerHTML, i.querySelector(rM) ? (t.innerHTML = i.innerHTML, t.querySelectorAll(rM).length > 4 && t.querySelector(r9) && new eR(t)) : t.dispatchEvent(new CustomEvent("theme:tab:hide", {
							bubbles: !0
						}))
					}).catch(function() {
						t.dispatchEvent(new CustomEvent("theme:tab:hide", {
							bubbles: !0
						}))
					})
				}
				recent() {
					let t = this.container.querySelector(rI),
						e = t ? parseInt(t.getAttribute(rF)) : 4;
					Shopify.Products.showRecentlyViewed({
						howManyToShow: e,
						wrapperId: `recently-viewed-products-${this.sectionId}`,
						section: this.section,
						onComplete(t, e) {
							let i = e.container,
								s = i.querySelector(rI),
								r = i.querySelector("[data-recently-viewed-wrapper]"),
								o = t.querySelectorAll(".product-item"),
								n = s.hasAttribute(r8) ? parseInt(s.getAttribute(r8)) : 4,
								a = !r && o.length > 0,
								l = r && o.length >= n;
							(a || l) && (l && r.classList.remove("is-hidden"), tE(s), s.dispatchEvent(new CustomEvent("theme:tab:check", {
								bubbles: !0
							})), o.length > 4 && s.querySelector(r9) && new eR(s))
						}
					})
				}
				constructor(t) {
					this.section = t, this.sectionId = t.id, this.container = t.container, this.related(), this.recent()
				}
			}(this)
		}
	}, sw]), eg("reviews", [ez, iV]);
	let rR = {},
		rz = "[data-slide]",
		rN = "is-selected",
		rW = "flickity-enabled",
		rU = "data-slide-index";
	eg("logos", [{
		onLoad() {
			rR[this.id] = new class {
				initSlideshowText() {
					if (!this.slideshowText) return;
					this.flkty = new o(this.slideshowText, {
						fade: !0,
						autoPlay: !1,
						prevNextButtons: !1,
						cellAlign: "left",
						contain: !0,
						pageDots: !1,
						wrapAround: !1,
						selectedAttraction: .2,
						friction: .6,
						draggable: !1,
						accessibility: !1,
						on: {
							ready: () => this.sliderAccessibility(),
							change: () => this.sliderAccessibility()
						}
					});
					let t = this.slideshowText.querySelectorAll(rz);
					if (t.length) {
						let e = -1;
						t.forEach(t => {
							let i = parseFloat(getComputedStyle(t, null).height.replace("px", ""));
							i > e && (e = i)
						}), t.forEach(t => {
							let i = parseFloat(getComputedStyle(t, null).height.replace("px", ""));
							if (i < e) {
								let s = Math.ceil((e - i) / 2);
								t.style.margin = `${s}px 0`
							}
						})
					}
				}
				sliderAccessibility() {
					let t = this.slideshowText.querySelectorAll(`${rz} a, ${rz} button`);
					t.length && t.forEach(t => {
						let e = t.closest(rz);
						if (e) {
							let i = e.classList.contains(rN) ? 0 : -1;
							t.setAttribute("tabindex", i)
						}
					})
				}
				initSlideshowNav() {
					this.slideshowNav && (this.logoSlides = this.slideshowNav.querySelectorAll("[data-slide-index]"), this.logoSlides.length && this.logoSlides.forEach(t => {
						t.addEventListener("click", e => {
							e.preventDefault();
							let i = parseInt(t.getAttribute(rU)),
								s = this.slideshowNav.classList.contains(rW);
							if (this.flkty && this.flkty.select(i), s) this.flktyNav.select(i), this.slideshowNav.classList.contains(rN) || this.flktyNav.playPlayer();
							else {
								let r = this.slideshowNav.querySelector(`.${rN}`);
								r && r.classList.remove(rN), t.classList.add(rN)
							}
						})
					}), this.setSlideshowNavState(), document.addEventListener("theme:resize", this.setSlideshowNavStateOnResize))
				}
				setSlideshowNavState() {
					let t = this.slideshowNav.querySelectorAll(rz),
						e = 200 * t.length,
						i = this.slideshowNav.classList.contains(rW);
					if (e > b()) {
						if (!i) {
							let s = this.slideshowNav.querySelector(`.${rN}`);
							s && s.classList.remove(rN), t[0].classList.add(rN), this.flktyNav = new r(this.slideshowNav, {
								autoPlay: 4e3,
								prevNextButtons: !1,
								contain: !1,
								pageDots: !1,
								wrapAround: !0,
								watchCSS: !0,
								selectedAttraction: .05,
								friction: .8,
								initialIndex: 0
							}), this.flkty && (this.flkty.select(0), this.flktyNav.on("change", t => this.flkty.select(t)))
						}
					} else i && (this.flktyNav.destroy(), t[0].classList.add(rN), this.flkty && this.flkty.select(0))
				}
				onBlockSelect(t) {
					if (!this.slideshowNav) return;
					let e = this.slideshowNav.querySelector(`[data-slide="${t.detail.blockId}"]`),
						i = parseInt(e.getAttribute(rU));
					this.slideshowNav.classList.contains(rW) ? (this.flktyNav.select(i), this.flktyNav.stopPlayer(), this.slideshowNav.classList.add(rN)) : e.dispatchEvent(new Event("click"))
				}
				onBlockDeselect() {
					this.slideshowNav && this.slideshowNav.classList.contains(rW) && (this.flktyNav.playPlayer(), this.slideshowNav.classList.remove(rN))
				}
				onUnload() {
					this.slideshowNav && (this.slideshowNav.classList.contains(rW) && this.flktyNav.destroy(), this.flkty && this.flkty.destroy(), document.removeEventListener("theme:resize", this.setSlideshowNavStateOnResize))
				}
				constructor(t) {
					this.container = t.container, this.slideshowNav = this.container.querySelector("[data-slider-logos]"), this.slideshowText = this.container.querySelector("[data-slider-text]"), this.setSlideshowNavStateOnResize = () => this.setSlideshowNavState(), this.flkty = null, this.flktyNav = null, this.initSlideshowText(), this.initSlideshowNav()
				}
			}(this)
		},
		onUnload(t) {
			rR[this.id].onUnload(t)
		},
		onBlockSelect(t) {
			rR[this.id].onBlockSelect(t)
		},
		onBlockDeselect(t) {
			rR[this.id].onBlockDeselect(t)
		}
	}, iV]);
	let r0 = "data-video-play",
		rV = class extends HTMLElement {
			connectedCallback() {
				var t;
				this.videoPlay = this.querySelectorAll(`[${r0}]`), null === (t = this.videoPlay) || void 0 === t || t.forEach(t => {
					t.addEventListener("click", t => {
						let e = t.currentTarget;
						if ("" !== e.getAttribute(r0).trim()) {
							t.preventDefault();
							let i = [{
								html: e.getAttribute(r0)
							}];
							new rA(i), window.accessibility.lastElement = e
						}
					})
				})
			}
			constructor() {
				super()
			}
		},
		rj = class extends HTMLElement {
			connectedCallback() {
				this.videoId = this.getAttribute("data-video-id"), this.videoTemplate = this.querySelector("[data-video-template]"), this.video = null, this.videoId && (this.addEventListener("touchstart", () => {
					var t;
					null === (t = this.video) || void 0 === t || t.play()
				}, {
					passive: !0
				}), this.renderVideo())
			}
			renderVideo() {
				this.videoTemplateObserver = new IntersectionObserver((t, e) => {
					t.forEach(t => {
						if (t.isIntersecting) {
							let i = this.videoTemplate.innerHTML;
							this.innerHTML = i, this.classList.remove("is-loading"), this.video = this.querySelector("video"), this.observeVideoPlayToggle(), e.unobserve(t.target)
						}
					})
				}, {
					root: null,
					rootMargin: "300px",
					threshold: [0, .1, .25, .5, .75, 1]
				}), this.videoTemplateObserver.observe(this)
			}
			observeVideoPlayToggle() {
				this.video && (this.videoPlayObserver = new IntersectionObserver(t => {
					t.forEach(t => {
						let e = t.isIntersecting;
						e && "function" == typeof this.video.play && this.video.play(), e || "function" != typeof this.video.pause || this.video.pause()
					})
				}, {
					rootMargin: "0px",
					threshold: [0, 1]
				}), this.videoPlayObserver.observe(this.video))
			}
			disconnectedCallback() {
				this.videoTemplateObserver && this.videoTemplateObserver.disconnect(), this.videoPlayObserver && this.videoPlayObserver.disconnect()
			}
			constructor() {
				super()
			}
		};
	eg("featured-video", [eC]), customElements.get("video-background") || customElements.define("video-background", rj), customElements.get("video-popup") || customElements.define("video-popup", rV), eg("slideshow", [ez, eC]);
	let r3 = "data-start-position",
		r1 = {},
		r2 = {
			onLoad() {
				r1[this.id] = [], this.container.querySelectorAll("[data-images-holder]").forEach(t => {
					r1[this.id].push(new class {
						init() {
							this.changeValues(), this.imagesButton.addEventListener("mousedown", this.onStartEvent), this.imagesButton.addEventListener("touchstart", this.onStartEvent, {
								passive: !0
							})
						}
						changeValues(t) {
							let e = this.imagesHolder.offsetWidth,
								i = this.imagesButton.offsetWidth;
							if ((!t || t && "touchmove" !== t.type && "mousemove" !== t.type) && (this.imageElement.style.width = `${e}px`, this.imageHolder.style.width = 100 - parseInt(this.startPosition) + "%", 0 !== this.startPosition)) {
								let s = e * parseInt(this.startPosition) / 100;
								this.x = s - i / 2
							}
							this.x > e - i ? this.x = e - i : this.x < 0 && (this.x = 0), this.imagesButton.style.left = this.x / e * 100 + "%", this.imageHolder.style.width = 100 - (this.x + i / 2) / e * 100 + "%"
						}
						onStart(t) {
							t.preventDefault();
							let e = t;
							t.touches && (e = t.touches[0]), this.x = this.imagesButton.offsetLeft, this.startX = e.pageX - this.x, this.imagesHolder.addEventListener("mousemove", this.onMoveEvent), this.imagesHolder.addEventListener("mouseup", this.onStopEvent), this.imagesHolder.addEventListener("touchmove", this.onMoveEvent), this.imagesHolder.addEventListener("touchend", this.onStopEvent)
						}
						onMove(t) {
							let e = t;
							t.touches && (e = t.touches[0]), this.x = e.pageX - this.startX, this.changeValues(t)
						}
						onStop(t) {
							this.imagesHolder.removeEventListener("mousemove", this.onMoveEvent), this.imagesHolder.removeEventListener("mouseup", this.onStopEvent), this.imagesHolder.removeEventListener("touchmove", this.onMoveEvent), this.imagesHolder.removeEventListener("touchend", this.onStopEvent)
						}
						onUnload() {
							this.changeValuesEvent && document.removeEventListener("theme:resize", this.changeValuesEvent)
						}
						constructor(t) {
							this.imagesHolder = t, this.imagesHolder && (this.imageHolder = this.imagesHolder.querySelector("[data-image-holder]"), this.imageElement = this.imagesHolder.querySelector("[data-image-element]"), this.imagesButton = this.imagesHolder.querySelector("[data-images-button]"), this.startPosition = this.imagesHolder.hasAttribute(r3) ? this.imagesHolder.getAttribute(r3) : 0, this.startX = 0, this.x = 0, this.changeValuesEvent = t => this.changeValues(t), this.onMoveEvent = t => this.onMove(t), this.onStopEvent = t => this.onStop(t), this.onStartEvent = t => this.onStart(t), this.init(), document.addEventListener("theme:resize", this.changeValuesEvent))
						}
					}(t))
				})
			},
			onUnload() {
				r1[this.id].forEach(t => {
					"function" == typeof t.onUnload && t.onUnload()
				})
			}
		};
	eg("custom-content", [ez, eC, r2, e3]), customElements.get("video-background") || customElements.define("video-background", rj), customElements.get("video-popup") || customElements.define("video-popup", rV);
	var rX = {};

	function rJ(t) {
		return rX[t]
	}
	rX.basic = [], rX.light = [{
		featureType: "administrative",
		elementType: "labels",
		stylers: [{
			visibility: "simplified"
		}, {
			lightness: "64"
		}, {
			hue: "#ff0000"
		}]
	}, {
		featureType: "administrative",
		elementType: "labels.text.fill",
		stylers: [{
			color: "#bdbdbd"
		}]
	}, {
		featureType: "administrative",
		elementType: "labels.icon",
		stylers: [{
			visibility: "off"
		}]
	}, {
		featureType: "landscape",
		elementType: "all",
		stylers: [{
			color: "#f0f0f0"
		}, {
			visibility: "simplified"
		}]
	}, {
		featureType: "landscape.natural.landcover",
		elementType: "all",
		stylers: [{
			visibility: "off"
		}]
	}, {
		featureType: "landscape.natural.terrain",
		elementType: "all",
		stylers: [{
			visibility: "off"
		}]
	}, {
		featureType: "poi",
		elementType: "all",
		stylers: [{
			visibility: "off"
		}]
	}, {
		featureType: "poi",
		elementType: "geometry.fill",
		stylers: [{
			visibility: "off"
		}]
	}, {
		featureType: "poi",
		elementType: "labels",
		stylers: [{
			lightness: "100"
		}]
	}, {
		featureType: "poi.park",
		elementType: "all",
		stylers: [{
			visibility: "on"
		}]
	}, {
		featureType: "poi.park",
		elementType: "geometry",
		stylers: [{
			saturation: "-41"
		}, {
			color: "#e8ede7"
		}]
	}, {
		featureType: "poi.park",
		elementType: "labels",
		stylers: [{
			visibility: "off"
		}]
	}, {
		featureType: "road",
		elementType: "all",
		stylers: [{
			saturation: "-100"
		}]
	}, {
		featureType: "road",
		elementType: "labels",
		stylers: [{
			lightness: "25"
		}, {
			gamma: "1.06"
		}, {
			saturation: "-100"
		}]
	}, {
		featureType: "road.highway",
		elementType: "all",
		stylers: [{
			visibility: "simplified"
		}]
	}, {
		featureType: "road.highway",
		elementType: "geometry.fill",
		stylers: [{
			gamma: "10.00"
		}]
	}, {
		featureType: "road.highway",
		elementType: "geometry.stroke",
		stylers: [{
			weight: "0.01"
		}, {
			visibility: "simplified"
		}]
	}, {
		featureType: "road.highway",
		elementType: "labels",
		stylers: [{
			visibility: "off"
		}]
	}, {
		featureType: "road.highway",
		elementType: "labels.text.fill",
		stylers: [{
			weight: "0.01"
		}]
	}, {
		featureType: "road.highway",
		elementType: "labels.text.stroke",
		stylers: [{
			weight: "0.01"
		}]
	}, {
		featureType: "road.arterial",
		elementType: "geometry.fill",
		stylers: [{
			weight: "0.8"
		}]
	}, {
		featureType: "road.arterial",
		elementType: "geometry.stroke",
		stylers: [{
			weight: "0.01"
		}]
	}, {
		featureType: "road.arterial",
		elementType: "labels.icon",
		stylers: [{
			visibility: "off"
		}]
	}, {
		featureType: "road.local",
		elementType: "geometry.fill",
		stylers: [{
			weight: "0.01"
		}]
	}, {
		featureType: "road.local",
		elementType: "geometry.stroke",
		stylers: [{
			gamma: "10.00"
		}, {
			lightness: "100"
		}, {
			weight: "0.4"
		}]
	}, {
		featureType: "road.local",
		elementType: "labels",
		stylers: [{
			visibility: "simplified"
		}, {
			weight: "0.01"
		}, {
			lightness: "39"
		}]
	}, {
		featureType: "road.local",
		elementType: "labels.text.stroke",
		stylers: [{
			weight: "0.50"
		}, {
			gamma: "10.00"
		}, {
			lightness: "100"
		}]
	}, {
		featureType: "transit",
		elementType: "all",
		stylers: [{
			visibility: "off"
		}]
	}, {
		featureType: "water",
		elementType: "all",
		stylers: [{
			color: "#cfe5ee"
		}, {
			visibility: "on"
		}]
	}], rX.white_label = [{
		featureType: "all",
		elementType: "all",
		stylers: [{
			visibility: "simplified"
		}]
	}, {
		featureType: "all",
		elementType: "labels",
		stylers: [{
			visibility: "simplified"
		}]
	}, {
		featureType: "administrative",
		elementType: "labels",
		stylers: [{
			gamma: "3.86"
		}, {
			lightness: "100"
		}]
	}, {
		featureType: "administrative",
		elementType: "labels.text.fill",
		stylers: [{
			color: "#cccccc"
		}]
	}, {
		featureType: "landscape",
		elementType: "all",
		stylers: [{
			color: "#f2f2f2"
		}]
	}, {
		featureType: "poi",
		elementType: "all",
		stylers: [{
			visibility: "off"
		}]
	}, {
		featureType: "road",
		elementType: "all",
		stylers: [{
			saturation: -100
		}, {
			lightness: 45
		}]
	}, {
		featureType: "road.highway",
		elementType: "all",
		stylers: [{
			visibility: "simplified"
		}]
	}, {
		featureType: "road.highway",
		elementType: "geometry.fill",
		stylers: [{
			weight: "0.8"
		}]
	}, {
		featureType: "road.highway",
		elementType: "geometry.stroke",
		stylers: [{
			weight: "0.8"
		}]
	}, {
		featureType: "road.highway",
		elementType: "labels",
		stylers: [{
			visibility: "off"
		}]
	}, {
		featureType: "road.highway",
		elementType: "labels.text.fill",
		stylers: [{
			weight: "0.8"
		}]
	}, {
		featureType: "road.highway",
		elementType: "labels.text.stroke",
		stylers: [{
			weight: "0.01"
		}]
	}, {
		featureType: "road.arterial",
		elementType: "geometry.stroke",
		stylers: [{
			weight: "0"
		}]
	}, {
		featureType: "road.arterial",
		elementType: "labels.icon",
		stylers: [{
			visibility: "off"
		}]
	}, {
		featureType: "road.local",
		elementType: "geometry.stroke",
		stylers: [{
			weight: "0.01"
		}]
	}, {
		featureType: "road.local",
		elementType: "labels.text",
		stylers: [{
			visibility: "off"
		}]
	}, {
		featureType: "transit",
		elementType: "all",
		stylers: [{
			visibility: "off"
		}]
	}, {
		featureType: "water",
		elementType: "all",
		stylers: [{
			color: "#e4e4e4"
		}, {
			visibility: "on"
		}]
	}], rX.dark_label = [{
		featureType: "all",
		elementType: "labels",
		stylers: [{
			visibility: "off"
		}]
	}, {
		featureType: "all",
		elementType: "labels.text.fill",
		stylers: [{
			saturation: 36
		}, {
			color: "#000000"
		}, {
			lightness: 40
		}]
	}, {
		featureType: "all",
		elementType: "labels.text.stroke",
		stylers: [{
			visibility: "on"
		}, {
			color: "#000000"
		}, {
			lightness: 16
		}]
	}, {
		featureType: "all",
		elementType: "labels.icon",
		stylers: [{
			visibility: "off"
		}]
	}, {
		featureType: "administrative",
		elementType: "geometry.fill",
		stylers: [{
			color: "#000000"
		}, {
			lightness: 20
		}]
	}, {
		featureType: "administrative",
		elementType: "geometry.stroke",
		stylers: [{
			color: "#000000"
		}, {
			lightness: 17
		}, {
			weight: 1.2
		}]
	}, {
		featureType: "administrative",
		elementType: "labels",
		stylers: [{
			visibility: "simplified"
		}, {
			lightness: "-82"
		}]
	}, {
		featureType: "administrative",
		elementType: "labels.text.stroke",
		stylers: [{
			invert_lightness: !0
		}, {
			weight: "7.15"
		}]
	}, {
		featureType: "landscape",
		elementType: "geometry",
		stylers: [{
			color: "#000000"
		}, {
			lightness: 20
		}]
	}, {
		featureType: "landscape",
		elementType: "labels",
		stylers: [{
			visibility: "off"
		}]
	}, {
		featureType: "poi",
		elementType: "all",
		stylers: [{
			visibility: "off"
		}]
	}, {
		featureType: "poi",
		elementType: "geometry",
		stylers: [{
			color: "#000000"
		}, {
			lightness: 21
		}]
	}, {
		featureType: "road",
		elementType: "labels",
		stylers: [{
			visibility: "simplified"
		}]
	}, {
		featureType: "road.highway",
		elementType: "geometry.fill",
		stylers: [{
			color: "#000000"
		}, {
			lightness: 17
		}, {
			weight: "0.8"
		}]
	}, {
		featureType: "road.highway",
		elementType: "geometry.stroke",
		stylers: [{
			color: "#000000"
		}, {
			lightness: 29
		}, {
			weight: "0.01"
		}]
	}, {
		featureType: "road.highway",
		elementType: "labels",
		stylers: [{
			visibility: "off"
		}]
	}, {
		featureType: "road.arterial",
		elementType: "geometry",
		stylers: [{
			color: "#000000"
		}, {
			lightness: 18
		}]
	}, {
		featureType: "road.arterial",
		elementType: "geometry.stroke",
		stylers: [{
			weight: "0.01"
		}]
	}, {
		featureType: "road.local",
		elementType: "geometry",
		stylers: [{
			color: "#000000"
		}, {
			lightness: 16
		}]
	}, {
		featureType: "road.local",
		elementType: "geometry.stroke",
		stylers: [{
			weight: "0.01"
		}]
	}, {
		featureType: "road.local",
		elementType: "labels",
		stylers: [{
			visibility: "off"
		}]
	}, {
		featureType: "transit",
		elementType: "all",
		stylers: [{
			visibility: "off"
		}]
	}, {
		featureType: "transit",
		elementType: "geometry",
		stylers: [{
			color: "#000000"
		}, {
			lightness: 19
		}]
	}, {
		featureType: "water",
		elementType: "geometry",
		stylers: [{
			color: "#000000"
		}, {
			lightness: 17
		}]
	}], window.theme.allMaps = window.theme.allMaps || {};
	let r4 = window.theme.allMaps;
	window.theme.mapAPI = window.theme.mapAPI || null, eg("map", {
		onLoad() {
			r4[this.id] = new class {
				initMaps() {
					(function(t) {
						if (null === window.theme.mapAPI) {
							let e = `https://maps.googleapis.com/maps/api/js?key=${t}`;
							window.theme.mapAPI = rg({
								url: e
							})
						}
						return window.theme.mapAPI
					})(this.key).then(() => {
						var t;
						return "true" === this.enableCorrection && "" !== this.lat && "" !== this.long ? new google.maps.LatLng(this.lat, this.long) : (t = this.address, new Promise((e, i) => {
							(new google.maps.Geocoder).geocode({
								address: t
							}, function(t, s) {
								"OK" == s ? e({
									lat: t[0].geometry.location.lat(),
									lng: t[0].geometry.location.lng()
								}) : i(s)
							})
						}))
					}).then(t => {
						var e, i, s, r, o;
						let n = {
								zoom: parseInt(this.zoomString, 10),
								styles: rX[e = this.styleString],
								center: t,
								draggable: !0,
								clickableIcons: !1,
								scrollwheel: !1,
								zoomControl: !1,
								disableDefaultUI: !0
							},
							a = (i = this.mapContainer, s = n, o = (r = new google.maps.Map(i, s)).getCenter(), new google.maps.Marker({
								map: r,
								position: o
							}), google.maps.event.addDomListener(window, "resize", function() {
								google.maps.event.trigger(r, "resize"), r.setCenter(o)
							}), r);
						return a
					}).then(t => {
						this.map = t, r4[this.id] = t
					}).catch(t => {
						console.log("Failed to load Google Map"), console.log(t)
					})
				}
				unload() {
					void 0 !== window.google && google.maps.event.clearListeners(this.map, "resize")
				}
				constructor(t) {
					this.container = t.container, this.mapContainer = this.container.querySelector("[data-map-container]"), this.key = this.container.getAttribute("data-api-key"), this.styleString = this.container.getAttribute("data-style") || "", this.zoomString = this.container.getAttribute("data-zoom") || 14, this.address = this.container.getAttribute("data-address"), this.enableCorrection = this.container.getAttribute("data-latlong-correction"), this.lat = this.container.getAttribute("data-lat"), this.long = this.container.getAttribute("data-long"), this.key && this.initMaps()
				}
			}(this)
		},
		onUnload() {
			"function" == typeof r4[this.id].unload && r4[this.id].unload()
		}
	});
	let rG = (t, e = null) => {
			t.style.opacity = 1,
				function i() {
					(t.style.opacity -= .1) < 0 ? t.style.display = "none" : requestAnimationFrame(i), 0 === parseFloat(t.style.opacity) && "function" == typeof e && e()
				}()
		},
		r6 = "[data-tracking-consent]",
		rQ = "[data-close-modal]",
		r5 = "[data-newsletter-form]",
		rY = "data-cookie-name",
		r7 = "data-target-referrer",
		rK = "hidden",
		rZ = "has-value",
		ot = "cart-bar-visible",
		oe = "is-visible",
		oi = "has-success",
		os = "selected",
		or = "has-block-selected",
		oo = {},
		on = class {
			always() {
				tE(this.element, null, this.callback)
			}
			delayed(t = 10) {
				setTimeout(() => {
					tE(this.element, null, this.callback)
				}, 1e3 * t)
			}
			idle() {
				let t = 0,
					e = ["mousemove", "mousedown", "click", "touchmove", "touchstart", "touchend", "keydown", "keypress"],
					i = ["load", "resize", "scroll"],
					s = () => {
						t = setTimeout(() => {
							t = 0, tE(this.element, null, this.callback)
						}, 6e4), e.forEach(t => {
							document.addEventListener(t, r)
						}), i.forEach(t => {
							window.addEventListener(t, r)
						})
					},
					r = () => {
						t && clearTimeout(t), e.forEach(t => {
							document.removeEventListener(t, r)
						}), i.forEach(t => {
							window.removeEventListener(t, r)
						}), s()
					};
				s()
			}
			bottom() {
				document.addEventListener("theme:scroll", this.showPopupOnScrollEvent)
			}
			showPopupOnScroll() {
				window.scrollY + window.innerHeight >= document.body.clientHeight && (tE(this.element, null, this.callback), document.removeEventListener("theme:scroll", this.showPopupOnScrollEvent))
			}
			onUnload() {
				document.removeEventListener("theme:scroll", this.showPopupOnScrollEvent)
			}
			constructor(t, e, i = null) {
				if (this.element = e, this.delay = t.getAttribute("data-popup-delay"), this.isSubmitted = -1 !== window.location.href.indexOf("accepts_marketing") || -1 !== window.location.href.indexOf("customer_posted=true"), this.callback = i, this.showPopupOnScrollEvent = () => this.showPopupOnScroll(), ("always" === this.delay || this.isSubmitted) && this.always(), this.delay && this.delay.includes("delayed") && !this.isSubmitted) {
					let s = this.delay.includes("_") ? parseInt(this.delay.split("_")[1]) : 10;
					this.delayed(s)
				}
				"bottom" !== this.delay || this.isSubmitted || this.bottom(), "idle" !== this.delay || this.isSubmitted || this.idle()
			}
		},
		oa = class {
			init() {
				-1 !== this.locationPath.indexOf(this.el.getAttribute(r7)) || window.Shopify.designMode || this.el.parentNode.removeChild(this.el)
			}
			constructor(t) {
				if (this.el = t, this.locationPath = location.href, !this.el.hasAttribute(r7)) return !1;
				this.init()
			}
		};
	eg("popups", [{
		onLoad() {
			oo[this.id] = [], this.container.querySelectorAll("[data-large-promo]").forEach(t => {
				oo[this.id].push(new class {
					init() {
						let t = !1 !== this.cookie.read(),
							e = this.popup.classList.contains("mobile"),
							i = this.popup.classList.contains("desktop"),
							s = !E(),
							r = !0;
						(e && !s || i && s) && (r = !1), r ? t && !window.Shopify.designMode || (window.Shopify.designMode || new on(this.popup, this.modal, () => this.scrollLock()), this.form && this.form.classList.contains(oi) && this.checkForSuccess(), this.initClosers()) : this.scrollUnlock()
					}
					checkForSuccess() {
						tE(this.modal, null, () => this.scrollLock()), this.cookie.write()
					}
					initClosers() {
						this.close.addEventListener("click", this.closeModal.bind(this)), this.underlay.addEventListener("click", this.closeModal.bind(this))
					}
					closeModal(t) {
						t.preventDefault(), rG(this.modal), this.cookie.write(), this.scrollUnlock()
					}
					scrollLock() {
						"none" !== window.getComputedStyle(this.popup).display && (this.a11y.trapFocus(this.modal), document.dispatchEvent(new CustomEvent("theme:scroll:lock", {
							bubbles: !0
						})))
					}
					scrollUnlock() {
						this.a11y.removeTrapFocus(), document.dispatchEvent(new CustomEvent("theme:scroll:unlock", {
							bubbles: !0
						}))
					}
					onBlockSelect(t) {
						this.popup.contains(t.target) && (tE(this.modal, null, () => this.scrollLock()), this.popup.classList.add(os), this.popup.parentNode.classList.add(or))
					}
					onBlockDeselect(t) {
						this.popup.contains(t.target) && (rG(this.modal), this.scrollUnlock(), this.popup.classList.remove(os), this.popup.parentNode.classList.remove(or))
					}
					constructor(t) {
						this.popup = t, this.modal = this.popup.querySelector("[data-large-promo-inner]"), this.close = this.popup.querySelector(rQ), this.underlay = this.popup.querySelector("[data-modal-underlay]"), this.form = this.popup.querySelector(r5), this.cookie = new eW(this.popup.getAttribute(rY), "user_has_closed"), this.isTargeted = new oa(this.popup), this.a11y = R, this.init()
					}
				}(t))
			}), this.container.querySelectorAll(r6).forEach(t => {
				oo[this.id].push(new class {
					init() {
						this.showPopup && tE(this.modal), this.clickEvents()
					}
					clickEvents() {
						this.acceptButton.addEventListener("click", t => {
							t.preventDefault(), window.Shopify.customerPrivacy.setTrackingConsent(!0, () => rG(this.modal)), document.documentElement.style.setProperty("--cookie-bar-height", "0px")
						}), document.addEventListener("trackingConsentAccepted", () => {})
					}
					onBlockSelect(t) {
						this.popup.contains(t.target) && this.showPopup && (tE(this.modal), this.popup.classList.add(os), this.popup.parentNode.classList.add(or))
					}
					onBlockDeselect(t) {
						this.popup.contains(t.target) && (rG(this.modal), this.popup.classList.remove(os), this.popup.parentNode.classList.remove(or))
					}
					constructor(t) {
						this.popup = t, this.modal = document.querySelector(r6), this.acceptButton = this.modal.querySelector("[data-confirm-cookies]"), this.enable = "true" === this.modal.getAttribute("data-enable"), this.showPopup = !1, window.Shopify.loadFeatures([{
							name: "consent-tracking-api",
							version: "0.1"
						}], t => {
							if (t) throw t;
							let e = window.Shopify.customerPrivacy.userCanBeTracked(),
								i = window.Shopify.customerPrivacy.getTrackingConsent();
							this.showPopup = !e && "no_interaction" === i && this.enable, window.Shopify.designMode && (this.showPopup = !0), this.init()
						})
					}
				}(t))
			}), this.container.querySelectorAll("[data-newsletter]").forEach(t => {
				oo[this.id].push(new class {
					init() {
						let t = !1 !== this.cookie.read(),
							e = -1 !== window.location.search.indexOf("?customer_posted=true"),
							i = [...this.holder.classList].toString().includes("bottom");
						e && (this.delay = 0), t && !window.Shopify.designMode || (this.show(), this.form.classList.contains(oi) && this.checkForSuccess()), i && this.observeCartBar()
					}
					show() {
						window.Shopify.designMode ? tE(this.holder) : new on(this.popup, this.holder), this.showForm(), this.inputField(), this.closePopup()
					}
					checkForSuccess() {
						tE(this.holder), this.cookie.write()
					}
					observeCartBar() {                     
						if (this.cartBar = document.getElementById("cart-bar"), !this.cartBar) return;
						let t = this.cartBar.classList.contains(oe);
						document.body.classList.toggle(ot, t), this.observer = new MutationObserver(e => {
							for (let i of e) "attributes" === i.type && (t = i.target.classList.contains(oe), document.body.classList.toggle(ot, t))
						}), this.observer.observe(this.cartBar, {
							attributes: !0,
							childList: !1,
							subtree: !1
						})
					}
					showForm() {
						this.heading.addEventListener("click", t => {
							t.preventDefault(), this.heading.classList.add(rK), this.form.classList.remove(rK), this.newsletterField.focus()
						}), this.heading.addEventListener("keyup", t => {
							"Enter" === t.code && this.heading.dispatchEvent(new Event("click"))
						})
					}
					closePopup() {
						this.close.addEventListener("click", t => {
							t.preventDefault(), rG(this.holder), this.cookie.write()
						})
					}
					inputField() {
						let t = () => {
							this.resetClassTimer && clearTimeout(this.resetClassTimer), "" !== this.newsletterField.value && this.holder.classList.add(rZ)
						};
						this.newsletterField.addEventListener("input", t), this.newsletterField.addEventListener("focus", t), this.newsletterField.addEventListener("focusout", () => {
							this.resetClassTimer && clearTimeout(this.resetClassTimer), this.resetClassTimer = setTimeout(() => {
								this.holder.classList.remove(rZ)
							}, 2e3)
						})
					}
					onBlockSelect(t) {
						this.popup.contains(t.target) && (tE(this.holder), this.popup.classList.add(os), this.popup.parentNode.classList.add(or))
					}
					onBlockDeselect(t) {
						this.popup.contains(t.target) && (rG(this.holder), this.popup.classList.remove(os), this.popup.parentNode.classList.remove(or))
					}
					onUnload() {
						this.observer && this.observer.disconnect()
					}
					constructor(t) {
						this.popup = t, this.holder = this.popup.querySelector("[data-newsletter-holder]"), this.close = this.popup.querySelector("[data-newsletter-close]"), this.heading = this.popup.querySelector("[data-newsletter-heading]"), this.newsletterField = this.popup.querySelector("[data-newsletter-field]"), this.cookie = new eW(this.popup.getAttribute(rY), "newsletter_is_closed"), this.form = this.popup.querySelector(r5), this.isTargeted = new oa(this.popup), this.resetClassTimer = 0, this.init()
					}
				}(t))
			}), this.container.querySelectorAll("[data-promo-text]").forEach(t => {
				oo[this.id].push(new class {
					init() {
						(!1 === this.cookie.read() || window.Shopify.designMode) && (window.Shopify.designMode ? tE(this.popup) : new on(this.popup, this.popup), this.clickEvents())
					}
					clickEvents() {
						this.close.addEventListener("click", t => {
							t.preventDefault(), rG(this.popup), this.cookie.write()
						})
					}
					onBlockSelect(t) {
						this.popup.contains(t.target) && (tE(this.popup), this.popup.classList.add(os), this.popup.parentNode.classList.add(or))
					}
					onBlockDeselect(t) {
						this.popup.contains(t.target) && (rG(this.popup), this.popup.classList.remove(os), this.popup.parentNode.classList.remove(or))
					}
					constructor(t) {
						this.popup = t, this.close = this.popup.querySelector(rQ), this.cookie = new eW(this.popup.getAttribute(rY), "user_has_closed"), this.isTargeted = new oa(this.popup), this.init()
					}
				}(t))
			})
		},
		onBlockSelect(t) {
			oo[this.id].forEach(e => {
				"function" == typeof e.onBlockSelect && e.onBlockSelect(t)
			})
		},
		onBlockDeselect(t) {
			oo[this.id].forEach(e => {
				"function" == typeof e.onBlockDeselect && e.onBlockDeselect(t)
			})
		},
		onUnload() {
			oo[this.id].forEach(t => {
				"function" == typeof t.onUnload && t.onUnload()
			})
		}
	}, e3]);
	let ol = "is-open";
	eg("password-template", {
		onLoad() {
			new class {
				init() {
					this.passwordLogin.length && this.modal && this.modalBody && (this.passwordLogin.forEach(t => {
						t.addEventListener("click", t => {
							t.preventDefault(), this.openModal()
						})
					}), this.closeButtons.length && this.closeButtons.forEach(t => {
						t.addEventListener("click", t => {
							t.preventDefault(), this.closeModal()
						})
					}), this.loginErrors && this.openModal())
				}
				openModal() {
					tE(this.modal, "block", () => {
						this.modal.classList.add(ol)
					}), this.scrollLock()
				}
				closeModal() {
					rG(this.modal), this.modal.classList.remove(ol), this.scrollUnlock()
				}
				scrollLock() {
					"none" !== window.getComputedStyle(this.modal).display && (this.a11y.trapFocus(this.modal), document.dispatchEvent(new CustomEvent("theme:scroll:lock", {
						bubbles: !0
					})))
				}
				scrollUnlock() {
					this.a11y.removeTrapFocus(), document.dispatchEvent(new CustomEvent("theme:scroll:unlock", {
						bubbles: !0
					}))
				}
				constructor(t) {
					this.container = t.container, this.passwordLogin = this.container.querySelectorAll("[data-password-login]"), this.modal = this.container.querySelector("[data-password-modal]"), this.modalBody = this.container.querySelector("[data-modal-body]"), this.closeButtons = this.container.querySelectorAll("[data-modal-close]"), this.a11y = R, this.loginErrors = this.container.querySelector("#login_form .errors"), this.init()
				}
			}(this)
		}
	}), eg("list-collections", [ez, iV]), eg("columns", [iV, ez]), eg("newsletter", e3), eg("before-after", [r2]);
	let oh = "data-tooltip-stop-mouseenter",
		oc = {},
		od = "is-selected",
		ou = "data-scroll-spy",
		op = "data-scroll-spy-mobile",
		om = "data-scroll-spy-desktop",
		og = {},
		ov = {
			onLoad() {
				og[this.id] = new class {
					init() {
						this.loopAnchors(), document.addEventListener("theme:resize:width", this.loopAnchors)
					}
					loopAnchors() {
						this.scrollSpyAnchors.length && this.scrollSpyAnchors.forEach(t => {
							this.toggleObserver(t)
						})
					}
					toggleObserver(t) {
						let e = this.container.querySelector(t.getAttribute(ou));
						if (!e) return;
						this.observers[e.id] && this.observers[e.id].unobserve(e);
						let i = E();
						(!i && t.hasAttribute(op) || i && t.hasAttribute(om) || !t.hasAttribute(om) && !t.hasAttribute(op)) && this.runObserver(e)
					}
					runObserver(t) {
						let {
							stickyHeaderHeight: e
						} = h();
						this.observers[t.id] = new IntersectionObserver(t => {
							t.forEach(t => {
								let i = this.container.querySelector(`[${ou}].${od}`),
									s = this.container.querySelector(`[${ou}="#${t.target.id}"]`);
								t.intersectionRatio > .5 && t.boundingClientRect.top - e <= t.boundingClientRect.height && (null == i || i.classList.remove(od), null == s || s.classList.add(od))
							})
						}, {
							rootMargin: -1 * e + "px 0px 0px 0px",
							threshold: [.5, 1]
						}), this.observers[t.id].observe(t)
					}
					onUnload() {
						document.removeEventListener("theme:resize:width", this.loopAnchors), this.observers.length && this.observers.forEach(t => {
							t.disconnect()
						})
					}
					constructor(t) {
						this.section = t, this.container = t.container, this.scrollSpyAnchors = this.container.querySelectorAll("[data-scroll-spy]"), this.loopAnchors = this.loopAnchors.bind(this), this.observers = [], this.init()
					}
				}(this)
			},
			onUnload() {
				og[this.id].onUnload()
			}
		};
	eg("sidebar", [{
		onLoad() {
			oc[this.id] = new class {
				init() {
					this.scrollToButtons.forEach(t => {
						t.addEventListener("click", () => {
							let e = this.container.querySelector(t.getAttribute("data-scroll-to"));
							e && "A" !== t.tagName && this.scrollToElement(e)
						})
					})
				}
				scrollToElement(t) {
					eN(t.getBoundingClientRect().top + 1);
					let e = t.nextElementSibling.matches("details") ? t.nextElementSibling : null;
					if (e) {
						let i = null == e ? void 0 : e.querySelector("[data-collapsible-trigger]");
						e.hasAttribute("open") || null == i || i.dispatchEvent(new Event("click"))
					}
					let s = document.querySelectorAll(`[data-tooltip]:not([${oh}])`);
					s.length && s.forEach(t => {
						t.setAttribute(oh, ""), setTimeout(() => {
							t.removeAttribute(oh)
						}, 1e3)
					})
				}
				constructor(t) {
					this.section = t, this.container = t.container, this.scrollToButtons = this.container.querySelectorAll("[data-scroll-to]"), this.scrollToButtons.length && this.init()
				}
			}(this)
		}
	}, ov]);
	let oy = "[data-hover-target]",
		of = "data-hover-target",
		ob = "is-visible",
		oS = "is-selected",
		oE = {};
	eg("collections-hover", [{
		onLoad() {
			oE[this.id] = new class {
				init() {
					this.buttons.length && this.buttons.forEach(t => {
						t.addEventListener("mouseenter", t => {
							let e = t.currentTarget.getAttribute(of);
							this.updateState(e)
						})
					})
				}
				updateState(t) {
					let e = this.container.querySelector(`[${of}="${t}"]`),
						i = this.container.querySelector(`#${t}:not(.${ob})`),
						s = this.container.querySelector(`${oy}.${oS}`),
						r = this.container.querySelector(`[data-collection-image].${ob}`);
					i && E() && (null == r || r.classList.remove(ob), null == s || s.classList.remove(oS), i.classList.add(ob), e.classList.add(oS))
				}
				onBlockSelect(t) {
					this.updateState(t.target.id)
				}
				constructor(t) {
					this.container = t.container, this.buttons = this.container.querySelectorAll(oy), this.init()
				}
			}(this)
		},
		onBlockSelect(t) {
			oE[this.id].onBlockSelect(t)
		}
	}, ov]);
	let oL = {};
	eg("featured-product", [{
		onLoad() {
			oL[this.id] = new class {
				init() {
					this.horizontalScroll && this.imagesHolder && (this.requestAnimationSticky = requestAnimationFrame(this.calculateHorizontalPositionEvent), document.addEventListener("theme:scroll", this.scrollEvent)), this.wrapper && this.contentHolder && this.images.length && (this.calculateHeight(), document.addEventListener("theme:resize:width", this.calculateHeightEvent))
				}
				scrollEvents() {
					this.requestAnimationSticky || (this.requestAnimationSticky = requestAnimationFrame(this.calculateHorizontalPositionEvent))
				}
				removeAnimationFrame() {
					this.requestAnimationSticky && (cancelAnimationFrame(this.requestAnimationSticky), this.requestAnimationSticky = null)
				}
				calculateHorizontalPosition() {
					let t = window.pageYOffset + this.headerHeight,
						e = t + window.innerHeight,
						i = this.imagesHolder.offsetTop,
						s = this.imagesHolder.offsetHeight,
						r = i + s + this.headerHeight,
						o = s - (window.innerHeight - this.headerHeight),
						n = this.horizontalScrollReversed ? 1 : -1,
						a = 0;
					a = t >= i && e <= r ? (t - i) / o * 100 : t < i ? 0 : 100, a *= this.images.length - 1, this.container.style.setProperty("--translateX", a * n + "%"), this.lastPercent !== a ? this.requestAnimationSticky = requestAnimationFrame(this.calculateHorizontalPositionEvent) : this.requestAnimationSticky && this.removeAnimationFrame(), this.lastPercent = a
				}
				calculateHeight() {
					let {
						stickyHeaderHeight: t
					} = h();
					this.container.style.removeProperty("--min-height"), this.container.style.setProperty("--min-height", `${this.wrapper.offsetHeight+this.contentHolder.offsetHeight}px`), this.headerHeight = t
				}
				onUnload() {
					this.horizontalScroll && this.imagesHolder && document.removeEventListener("theme:scroll", this.calculateHorizontalPositionEvent), this.wrapper && this.contentHolder && this.images.length && document.removeEventListener("theme:resize:width", this.calculateHeightEvent)
				}
				constructor(t) {
					this.container = t.container, this.horizontalScroll = this.container.hasAttribute("data-horizontal-scroll"), this.horizontalScrollReversed = this.container.hasAttribute("data-horizontal-scroll-reversed"), this.images = this.container.querySelectorAll("[data-featured-image]"), this.imagesHolder = this.container.querySelector("[data-featured-aside]"), this.contentHolder = this.container.querySelector("[data-featured-content]"), this.wrapper = this.container.querySelector("[data-featured-wrapper]"), this.requestAnimationSticky = null, this.lastPercent = 0, this.scrollEvent = () => this.scrollEvents(), this.calculateHorizontalPositionEvent = () => this.calculateHorizontalPosition(), this.calculateHeightEvent = () => this.calculateHeight(), this.init()
				}
			}(this)
		},
		onUnload(t) {
			oL[this.id].onUnload(t)
		}
	}]), document.addEventListener("DOMContentLoaded", function() {
		ev("*");
		let t = document.querySelector("[data-scroll-top-button]");
		t && (t.addEventListener("click", () => {
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: "smooth"
			})
		}), document.addEventListener("theme:scroll", () => {
			t.classList.toggle("is-visible", window.pageYOffset > window.innerHeight)
		})), window.self !== window.top && document.querySelector("html").classList.add("iframe"), "scrollBehavior" in document.documentElement.style || rg({
			url: window.theme.assets.smoothscroll
		})
	}), window.navigator.cookieEnabled && (document.documentElement.className = document.documentElement.className.replace("supports-no-cookies", "supports-cookies"))
}(themeVendor.ScrollLock, themeVendor.themeAddresses, themeVendor.themeCurrency, themeVendor.Rellax, themeVendor.Flickity, themeVendor.FlickityFade, themeVendor.themeImages);