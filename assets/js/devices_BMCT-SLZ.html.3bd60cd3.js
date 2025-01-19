"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[18584],{79694:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>a,data:()=>l});var i=o(6254);const n={},a=(0,o(32991).A)(n,[["render",function(e,t){const o=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[t[8]||(t[8]=(0,i.Lk)("h1",{id:"bosch-bmct-slz",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#bosch-bmct-slz"},[(0,i.Lk)("span",null,"Bosch BMCT-SLZ")])],-1)),(0,i.Lk)("table",null,[t[6]||(t[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[t[2]||(t[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"BMCT-SLZ")],-1)),(0,i.Lk)("tr",null,[t[1]||(t[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(o,{to:"/supported-devices/#v=Bosch"},{default:(0,i.k6)((()=>t[0]||(t[0]=[(0,i.eW)("Bosch")]))),_:1})])]),t[3]||(t[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Light/shutter control unit II")],-1)),t[4]||(t[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"device_mode, linkquality")],-1)),t[5]||(t[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/BMCT-SLZ.png",alt:"Bosch BMCT-SLZ"})])],-1))])]),t[9]||(t[9]=(0,i.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>To pair this device you have to install the device via its installation code. The installation code can be obtained by scanning the QR-code on the device with your smartphone. Then get the device into pairing mode. In zigbee2mqtt navigate to &quot;Settings&quot; --&gt; &quot;Tools&quot; and click on &quot;Add install code&quot;. Paste the code you got from the QR-code and confirm by clicking &quot;OK&quot; which will get zigbee2mqtt into pairing mode automatically. Wait for your device to be joined.</p><h3 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration"><span>Configuration</span></a></h3><p>The device can operate either as a two-channel light switch or as roller shutter/window blind. After pairing, the device mode is initially set to &#39;disabled&#39; and will not accept any switching or open/close commands. The device mode must be set to &#39;light&#39; or &#39;shutter&#39; via the frontend or by publishing <code>{&quot;device_mode&quot;: &quot;shutter&quot;}</code> or <code>{&quot;device_mode&quot;: &quot;light&quot;}</code> to <code>zigbee2mqtt/FRIENDLY_NAME/set</code>.</p><h3 id="factory-reset" tabindex="-1"><a class="header-anchor" href="#factory-reset"><span>Factory reset</span></a></h3><p>To reset the device to factory settings, press and hold the device&#39;s main button on the front until the device&#39;s LED starts flashing. Release the main button and press and hold it again until the device&#39;s LED is lighting up green. The device will then restart and look for a Zigbee network to join. In case something went wrong, the device&#39;s LED will flash red.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',8)),(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>t[7]||(t[7]=[(0,i.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,i.Fv)('<ul><li><p><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>cover_position_tilt_disable_report</code>: Do not publish set cover target position as a normal &#39;position&#39; value (default false). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="device-mode-enum" tabindex="-1"><a class="header-anchor" href="#device-mode-enum"><span>Device mode (enum)</span></a></h3><p>Device mode. Value can be found in the published state on the <code>device_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;device_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;device_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>light</code>, <code>shutter</code>, <code>disabled</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',6))])}]]),l=JSON.parse('{"path":"/devices/BMCT-SLZ.html","title":"Bosch BMCT-SLZ control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Bosch BMCT-SLZ control via MQTT","description":"Integrate your Bosch BMCT-SLZ via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-04-27T17:34:39.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Configuration","slug":"configuration","link":"#configuration","children":[]},{"level":3,"title":"Factory reset","slug":"factory-reset","link":"#factory-reset","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Device mode (enum)","slug":"device-mode-enum","link":"#device-mode-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1737291491000},"filePathRelative":"devices/BMCT-SLZ.md"}')}}]);