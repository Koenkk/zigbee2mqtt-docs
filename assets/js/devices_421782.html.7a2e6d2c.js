"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[82248],{70788:(e,n,t)=>{t.r(n),t.d(n,{comp:()=>a,data:()=>l});var s=t(6254);const i={},a=(0,t(32991).A)(i,[["render",function(e,n){const t=(0,s.g2)("RouteLink");return(0,s.uX)(),(0,s.CE)("div",null,[n[8]||(n[8]=(0,s.Lk)("h1",{id:"calex-421782",tabindex:"-1"},[(0,s.Lk)("a",{class:"header-anchor",href:"#calex-421782"},[(0,s.Lk)("span",null,"Calex 421782")])],-1)),(0,s.Lk)("table",null,[n[6]||(n[6]=(0,s.Lk)("thead",null,[(0,s.Lk)("tr",null,[(0,s.Lk)("th"),(0,s.Lk)("th")])],-1)),(0,s.Lk)("tbody",null,[n[2]||(n[2]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Model"),(0,s.Lk)("td",null,"421782")],-1)),(0,s.Lk)("tr",null,[n[1]||(n[1]=(0,s.Lk)("td",null,"Vendor",-1)),(0,s.Lk)("td",null,[(0,s.bF)(t,{to:"/supported-devices/#v=Calex"},{default:(0,s.k6)((()=>n[0]||(n[0]=[(0,s.eW)("Calex")]))),_:1})])]),n[3]||(n[3]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Description"),(0,s.Lk)("td",null,"Smart Wall Switch, wall mounted RGB controller")],-1)),n[4]||(n[4]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Exposes"),(0,s.Lk)("td",null,"action, linkquality")],-1)),n[5]||(n[5]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Picture"),(0,s.Lk)("td",null,[(0,s.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/421782.png",alt:"Calex 421782"})])],-1))])]),n[9]||(n[9]=(0,s.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing-instructions" tabindex="-1"><a class="header-anchor" href="#pairing-instructions"><span>Pairing instructions</span></a></h3><p>To pair this device follow these steps.</p><ol><li>reset it, by pressing <code>Brightness up</code> and <code>Off</code> for 10 seconds.</li><li>pair it to Zigbee2MQTT by pressing <code>brightness down</code> and <code>On</code> for 3 seconds.</li></ol><h3 id="touchlink-support" tabindex="-1"><a class="header-anchor" href="#touchlink-support"><span>Touchlink support</span></a></h3><p>Once paired to Zigbee2MQTT, you can also touch link this device to some lights. Hold it really close (5cm) to a light and press the middle button for 3 seconds. Repeat for all lights you want to control.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',7)),(0,s.Lk)("p",null,[(0,s.Lk)("em",null,[(0,s.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,s.k6)((()=>n[7]||(n[7]=[(0,s.eW)("How to use device type specific configuration")]))),_:1})])]),n[10]||(n[10]=(0,s.Fv)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span></span>\n<span class="line">  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>off</code>, <code>color_temperature_move</code>, <code>brightness_step_up</code>, <code>brightness_step_down</code>, <code>brightness_move_up</code>, <code>brightness_move_down</code>, <code>brightness_stop</code>, <code>enhanced_move_to_hue_and_saturation</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',7))])}]]),l=JSON.parse('{"path":"/devices/421782.html","title":"Calex 421782 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Calex 421782 control via MQTT","description":"Integrate your Calex 421782 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-01-04T16:09:00.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing instructions","slug":"pairing-instructions","link":"#pairing-instructions","children":[]},{"level":3,"title":"Touchlink support","slug":"touchlink-support","link":"#touchlink-support","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1737291491000},"filePathRelative":"devices/421782.md"}')}}]);