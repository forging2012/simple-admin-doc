import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as s,c,a as e,b as a,d as n,e as t}from"./app-c0a808d6.js";const d={},l=e("h1",{id:"quick-start-with-docker-compose",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#quick-start-with-docker-compose","aria-hidden":"true"},"#"),a(" Quick start with docker-compose")],-1),h=e("code",null,"deploy/docker-compose/all_in_one",-1),p={href:"https://github.com/suyuan32/simple-admin-core/blob/master/deploy/docker-compose/all_in_one/docker-compose.yaml",target:"_blank",rel:"noopener noreferrer"},_=t(`<h2 id="_3-steps" tabindex="-1"><a class="header-anchor" href="#_3-steps" aria-hidden="true">#</a> 3 Steps</h2><h3 id="_1-run-docker-compose" tabindex="-1"><a class="header-anchor" href="#_1-run-docker-compose" aria-hidden="true">#</a> 1. Run docker-compose</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-initialize-database" tabindex="-1"><a class="header-anchor" href="#_2-initialize-database" aria-hidden="true">#</a> 2. Initialize database</h3>`,4),u={href:"http://localhost/init",target:"_blank",rel:"noopener noreferrer"},m=t('<h3 id="_3-restart-api-container" tabindex="-1"><a class="header-anchor" href="#_3-restart-api-container" aria-hidden="true">#</a> 3. Restart API container</h3><div class="hint-container warning"><p class="hint-container-title">Note</p><p>You should restart core-api container after initalization in order to refresh casbin cache. You do not need to restart service after v1.0.14.</p></div><div class="hint-container info"><p class="hint-container-title">Info</p><p>In <code>deploy/docker-compose/all_in_one</code> folder, you can check the api and rpc configuration</p></div><div class="hint-container warning"><p class="hint-container-title">Note</p><p>To deploy your own service to docker, you only need to modify it to your own image</p></div>',4);function f(k,b){const o=i("ExternalLinkIcon");return s(),c("div",null,[l,e("p",null,[a("In "),h,a(" directory, "),e("a",p,[a("Github"),n(o)])]),_,e("blockquote",null,[e("p",null,[e("a",u,[a("http://localhost/init"),n(o)])])]),m])}const x=r(d,[["render",f],["__file","all_in_one.html.vue"]]);export{x as default};
