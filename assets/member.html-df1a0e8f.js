import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as i,c as p,a as n,b as s,d as c,e as a}from"./app-dca4f23c.js";const o={},u=a(`<h2 id="会员服务-mms" tabindex="-1"><a class="header-anchor" href="#会员服务-mms" aria-hidden="true">#</a> 会员服务（MMS)</h2><h3 id="下载代码" tabindex="-1"><a class="header-anchor" href="#下载代码" aria-hidden="true">#</a> 下载代码</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 获取 api 代码</span>
<span class="token function">git</span> clone https://github.com/suyuan32/simple-admin-member-api.git

<span class="token comment"># 获取 rpc 代码</span>
<span class="token function">git</span> clone https://github.com/suyuan32/simple-admin-member-rpc.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改配置文件-etc-mms-yaml" tabindex="-1"><a class="header-anchor" href="#修改配置文件-etc-mms-yaml" aria-hidden="true">#</a> 修改配置文件 etc/mms.yaml</h3><div class="hint-container warning"><p class="hint-container-title">注意</p><p>注意配置时检查 member rpc 中的 CoreRpc 配置， member api 中的 MmsRpc 配置 <br><br> 确保 AccessSecret 和 simple-admin-core 的 api 配置文件内一致</p></div>`,5),r={class:"hint-container info"},d=n("p",{class:"hint-container-title"},"相关信息",-1),m=n("li",null,"配置方式参考 core",-1),k=n("li",null,"运行方式同理",-1),v={href:"http://localhost:3100/init",target:"_blank",rel:"noopener noreferrer"},b=n("li",null,"在角色页面添加 API 接口权限，然后重启 RPC 的 API",-1),h=a(`<h3 id="k8s-部署" tabindex="-1"><a class="header-anchor" href="#k8s-部署" aria-hidden="true">#</a> K8s 部署</h3><blockquote><p>和 core api 相似</p></blockquote><p>你应该做如下工作:</p><ul><li>通过 docker 部署服务</li><li>修改 simple-admin-backend-ui/deploy/default.conf ，解开 mms-api 注释</li><li>更新 ingress configmap</li><li>更新 ingress controller</li></ul><h3 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">Name</span><span class="token punctuation">:</span> mms.api
<span class="token key atrule">Host</span><span class="token punctuation">:</span> 0.0.0.0
<span class="token key atrule">Port</span><span class="token punctuation">:</span> <span class="token number">9104</span>
<span class="token key atrule">Timeout</span><span class="token punctuation">:</span> <span class="token number">30000</span>

<span class="token key atrule">Auth</span><span class="token punctuation">:</span>
  <span class="token key atrule">AccessSecret</span><span class="token punctuation">:</span> jS6VKDtsJf3z1n2VKDtsJf3z1n2 <span class="token comment"># the same as core</span>
  <span class="token key atrule">AccessExpire</span><span class="token punctuation">:</span> <span class="token number">259200</span>

<span class="token key atrule">CROSConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">Address</span><span class="token punctuation">:</span> <span class="token string">&quot;*&quot;</span>

<span class="token key atrule">Log</span><span class="token punctuation">:</span>
  <span class="token key atrule">ServiceName</span><span class="token punctuation">:</span> mmsApiLogger
  <span class="token key atrule">Mode</span><span class="token punctuation">:</span> file
  <span class="token key atrule">Path</span><span class="token punctuation">:</span> /home/data/logs/mms/api
  <span class="token key atrule">Level</span><span class="token punctuation">:</span> info
  <span class="token key atrule">Compress</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">KeepDays</span><span class="token punctuation">:</span> <span class="token number">7</span>
  <span class="token key atrule">StackCoolDownMillis</span><span class="token punctuation">:</span> <span class="token number">100</span>

<span class="token key atrule">Prometheus</span><span class="token punctuation">:</span>
  <span class="token key atrule">Host</span><span class="token punctuation">:</span> 0.0.0.0
  <span class="token key atrule">Port</span><span class="token punctuation">:</span> <span class="token number">4000</span>
  <span class="token key atrule">Path</span><span class="token punctuation">:</span> /metrics

<span class="token key atrule">DatabaseConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">Type</span><span class="token punctuation">:</span> postgres
  <span class="token key atrule">Host</span><span class="token punctuation">:</span> 10.5.0.2
  <span class="token key atrule">Port</span><span class="token punctuation">:</span> <span class="token number">5432</span>
  <span class="token key atrule">DBName</span><span class="token punctuation">:</span> simple_admin
  <span class="token key atrule">Username</span><span class="token punctuation">:</span> postgres <span class="token comment"># set your username</span>
  <span class="token key atrule">Password</span><span class="token punctuation">:</span> simple<span class="token punctuation">-</span>admin. <span class="token comment"># set your password</span>
  <span class="token key atrule">MaxOpenConn</span><span class="token punctuation">:</span> <span class="token number">100</span>
  <span class="token key atrule">SSLMode</span><span class="token punctuation">:</span> disable
  <span class="token key atrule">CacheTime</span><span class="token punctuation">:</span> <span class="token number">5</span>

<span class="token key atrule">CasbinConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">ModelText</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
    [request_definition]
    r = sub, obj, act
    [policy_definition]
    p = sub, obj, act
    [role_definition]
    g = _, _
    [policy_effect]
    e = some(where (p.eft == allow))
    [matchers]
    m = r.sub == p.sub &amp;&amp; keyMatch2(r.obj,p.obj) &amp;&amp; r.act == p.act</span>

<span class="token key atrule">ProjectConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">UseCaptcha</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment"># 是否启用验证码，若为false, 则登录请求不需要 captcha, captchaId</span>
  <span class="token key atrule">DefaultRankID</span><span class="token punctuation">:</span> <span class="token number">1</span> <span class="token comment"># 默认会员注册后的等级 ID</span>

<span class="token key atrule">MmsRpc</span><span class="token punctuation">:</span>
  <span class="token key atrule">Target</span><span class="token punctuation">:</span> 10.5.0.10<span class="token punctuation">:</span><span class="token number">9103</span>
  <span class="token key atrule">Enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token key atrule">CoreRpc</span><span class="token punctuation">:</span>
  <span class="token key atrule">Target</span><span class="token punctuation">:</span> 10.5.0.4<span class="token punctuation">:</span><span class="token number">9101</span>
  <span class="token key atrule">Enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function y(f,_){const e=l("ExternalLinkIcon");return i(),p("div",null,[u,n("div",r,[d,n("ul",null,[m,k,n("li",null,[s("初始化数据库 "),n("a",v,[s("http://localhost:3100/init"),c(e)])]),b])]),h])}const C=t(o,[["render",y],["__file","member.html.vue"]]);export{C as default};
