"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[9364],{3905:function(e,o,t){t.d(o,{Zo:function(){return u},kt:function(){return m}});var n=t(7294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function l(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),d=function(e){var o=n.useContext(s),t=o;return e&&(t="function"==typeof e?e(o):i(i({},o),e)),t},u=function(e){var o=d(e.components);return n.createElement(s.Provider,{value:o},e.children)},c={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},p=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(t),m=r,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||a;return t?n.createElement(h,i(i({ref:o},u),{},{components:t})):n.createElement(h,i({ref:o},u))}));function m(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=p;var l={};for(var s in o)hasOwnProperty.call(o,s)&&(l[s]=o[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<a;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1646:function(e,o,t){t.r(o),t.d(o,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var n=t(7462),r=t(3366),a=(t(7294),t(3905)),i=["components"],l={title:"Overview",slug:"/community",tags:["Quality Assurance","Processes"]},s=void 0,d={unversionedId:"community/intro",id:"community/intro",title:"Overview",description:"A lot of people ask how the development of Moodle operates. This page should give you a working overview that should help in understanding a lot of other developer documentation.",source:"@site/general/community/intro.md",sourceDirName:"community",slug:"/community",permalink:"/dinodevdocs/general/community",editUrl:"https://github.com/andrewnicols/dinodevdocs/edit/main/general/community/intro.md",tags:[{label:"Quality Assurance",permalink:"/dinodevdocs/general/tags/quality-assurance"},{label:"Processes",permalink:"/dinodevdocs/general/tags/processes"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1649859357,formattedLastUpdatedAt:"13/04/2022",frontMatter:{title:"Overview",slug:"/community",tags:["Quality Assurance","Processes"]},sidebar:"community",next:{title:"Mission",permalink:"/dinodevdocs/general/community/mission"}},u={},c=[{value:"The key players",id:"the-key-players",level:2},{value:"How we develop the Roadmap",id:"how-we-develop-the-roadmap",level:2},{value:"Moodle versions",id:"moodle-versions",level:2},{value:"Support lifetime",id:"support-lifetime",level:2},{value:"Issue tracking",id:"issue-tracking",level:2},{value:"Processes",id:"processes",level:2},{value:"Coding Standards",id:"coding-standards",level:2},{value:"Plugins and APIs",id:"plugins-and-apis",level:2},{value:"See also",id:"see-also",level:2}],p={toc:c};function m(e){var o=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A lot of people ask how the development of Moodle operates. This page should give you a working overview that should help in understanding a lot of other developer documentation."),(0,a.kt)("h2",{id:"the-key-players"},"The key players"),(0,a.kt)("p",null,";Martin Dougiamas: Martin is the founder lead developer of Moodle. Generally he tries to facilitate democracy and meritocracy but occasionally has to make executive decisions on things."),(0,a.kt)("p",null,";",(0,a.kt)("a",{parentName:"p",href:"https://moodle.com/careers/"},"Moodle HQ"),": The team of more than 20 developers who are directly funded by the Moodle project to work full-time on core developments."),(0,a.kt)("p",null,";Moodle Partners: Over 50 companies around the world that provide Moodle services. These companies often have their own developers and may contribute to Moodle directly by working on core code or by creating plugins."),(0,a.kt)("p",null,";Component leads: A number of people around the world have volunteered to lead various components in Moodle. This involves maintaining existing code as well as listening to the community and improving that component with new features."),(0,a.kt)("p",null,"There are many other people contributing to Moodle in many ways. For a full list see the ",(0,a.kt)("a",{parentName:"p",href:"http://moodle.org/local/dev/"},"Moodle developers")," page on moodle.org."),(0,a.kt)("h2",{id:"how-we-develop-the-roadmap"},"How we develop the Roadmap"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/dinodevdocs/general/community/roadmap"},"Roadmap")," lists the new features being developed for the next major version. This list is derived mostly from the issues with large numbers of votes in the Moodle ",(0,a.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Tracker"},"Tracker"),", so please vote for what you want!  Other influences include general discussion, surveys and feature requests at Moodle Moots and in the Moodle forums."),(0,a.kt)("p",null,"Component leads decide on features in individual components so make your case to them!"),(0,a.kt)("h2",{id:"moodle-versions"},"Moodle versions"),(0,a.kt)("p",null,"Moodle major releases (with big new features) are on a regular 6 month cycle, in  May and November, since Moodle 2.6. Each major release increments the version number by 0.1 (eg 3.4 -> 3.5 -> 3.6)) and starts a new branch of minor releases."),(0,a.kt)("p",null,"Minor releases (with bug fixes only) are on a 2 month cycle, unless a security emergency occurs. They will increment the major release by 0.0.1 (eg 3.5 -> 3.5.1 -> 3.5.2)."),(0,a.kt)("p",null,"The full details of these can be seen in the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Releases"},"Releases"),"."),(0,a.kt)("h2",{id:"support-lifetime"},"Support lifetime"),(0,a.kt)("p",null,"Moodle HQ is committed to supporting major releases for 12 months of general fixes (usually 6 point releases) and 18 months (an additional 6 months) of security fixes."),(0,a.kt)("p",null,"That means we usually release minor versions for the last three major branches."),(0,a.kt)("p",null,"Some versions, every two years, are ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Long-term_support"},"long term supported (LTS)")," for a total of 36 months, with 18 additional months of security fixes compared to other versions."),(0,a.kt)("h2",{id:"issue-tracking"},"Issue tracking"),(0,a.kt)("p",null,"Issue tracking is an important part of a continuous quality control process. It involves reporting of problems (bugs), ideas for improvement and new features. Unlike most proprietary software programs, Moodle issue reporting and tracking information is open to everyone. Moodle's issue tracking system is called the ",(0,a.kt)("a",{parentName:"p",href:"http://tracker.moodle.org/"},"Tracker"),"."),(0,a.kt)("p",null,"All Moodle users are encouraged to be active participants when it comes to testing. Anyone with a Tracker user account can create, view, comment on, vote, and watch bugs."),(0,a.kt)("h2",{id:"processes"},"Processes"),(0,a.kt)("p",null,"As you might guess, a large software project like Moodle with hundreds of contributors and varied opinions can be difficult to manage."),(0,a.kt)("p",null,"Over time we have developed a number of well-defined processes for getting code in and out of Moodle and for governing everyone's workflow in a way that is fair and clear."),(0,a.kt)("p",null,"See our ",(0,a.kt)("a",{parentName:"p",href:"/dinodevdocs/general/development/process"},"Process")," document for full information on our development processes, including how you can contribute to the project."),(0,a.kt)("h2",{id:"coding-standards"},"Coding Standards"),(0,a.kt)("p",null,"Over time we have distilled our best practice in writing code down into our ",(0,a.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Coding"},"Coding Guide"),".  These rules cover the formatting and layout of all our code to make it consistent across the code base. If you plan to write Moodle code, you need to read it thoroughly."),(0,a.kt)("h2",{id:"plugins-and-apis"},"Plugins and APIs"),(0,a.kt)("p",null,'Although Moodle is open source and you can change anything you want, the best and most maintainable way to extend Moodle is to write a plugin (sometimes called a module). Plugins are a directory of code that can be simply "dropped" in into any Moodle installation and it will be detected, installed and automatically made available as a tool within the Moodle interface.'),(0,a.kt)("p",null,"See our ",(0,a.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Plugins"},"Plugin documentation")," for full details of the various types of plugin available."),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"",(0,a.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Finding_your_way_into_the_Moodle_code"},"Finding your way into the Moodle code"),""),(0,a.kt)("li",{parentName:"ul"},"",(0,a.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Working_with_the_Community"},"Working with the Community"),""),(0,a.kt)("li",{parentName:"ul"},"",(0,a.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Plugin_contribution"},"Plugin contribution"),""),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://www.slideshare.net/poltawski/how-to-guarantee-your-change-is-integrated-to-moodle-core"},"How to guarantee your change is integrated to Moodle core")," presentation by Dan Poltawski")))}m.isMDXComponent=!0}}]);