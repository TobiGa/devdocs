"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[6870],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(a),h=i,u=c["".concat(l,".").concat(h)]||c[h]||m[h]||o;return a?n.createElement(u,r(r({ref:t},p),{},{components:a})):n.createElement(u,r({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},321:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return m}});var n=a(7462),i=a(3366),o=(a(7294),a(3905)),r=["components"],s={title:"QA testing",description:"All the information related to the Qualify Assurance tests during the Moodle development.",tags:["Processes","Core development","Testing","Quality assurance"]},l=void 0,d={unversionedId:"development/process/testing/qa",id:"development/process/testing/qa",title:"QA testing",description:"All the information related to the Qualify Assurance tests during the Moodle development.",source:"@site/general/development/process/testing/qa.md",sourceDirName:"development/process/testing",slug:"/development/process/testing/qa",permalink:"/dinodevdocs/general/development/process/testing/qa",editUrl:"https://github.com/andrewnicols/dinodevdocs/edit/main/general/development/process/testing/qa.md",tags:[{label:"Processes",permalink:"/dinodevdocs/general/tags/processes"},{label:"Core development",permalink:"/dinodevdocs/general/tags/core-development"},{label:"Testing",permalink:"/dinodevdocs/general/tags/testing"},{label:"Quality assurance",permalink:"/dinodevdocs/general/tags/quality-assurance"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1649859357,formattedLastUpdatedAt:"13/04/2022",frontMatter:{title:"QA testing",description:"All the information related to the Qualify Assurance tests during the Moodle development.",tags:["Processes","Core development","Testing","Quality assurance"]},sidebar:"development",previous:{title:"Testing of integrated issues",permalink:"/dinodevdocs/general/development/process/testing/integrated-issues"},next:{title:"Introduction",permalink:"/dinodevdocs/general/development/tracker"}},p={},m=[{value:"Getting involved",id:"getting-involved",level:2},{value:"Running tests",id:"running-tests",level:2},{value:"Any questions?",id:"any-questions",level:2},{value:"Moodle QA Testing Site",id:"moodle-qa-testing-site",level:2},{value:"Failed tests",id:"failed-tests",level:2},{value:"Resetting tests",id:"resetting-tests",level:2},{value:"Fixing existing bugs",id:"fixing-existing-bugs",level:2},{value:"Testing tips",id:"testing-tips",level:2},{value:"New QA tests required",id:"new-qa-tests-required",level:2},{value:"New features, and improvements",id:"new-features-and-improvements",level:3},{value:"Updating tests",id:"updating-tests",level:2},{value:"Writing new tests",id:"writing-new-tests",level:2},{value:"Feedback",id:"feedback",level:2},{value:"Previous QA cycles",id:"previous-qa-cycles",level:2},{value:"See also",id:"see-also",level:2}],c={toc:m};function h(e){var t=e.components,a=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Quality Assurance")," tests look at the functionality of Moodle from a user's point of view."),(0,o.kt)("p",null,"Real users systematically try each feature in Moodle and ensure that it works in the current version of the Moodle code. These tests are repeated in a series of cycles, around 4 - 6 weeks before each major release, once all major features have landed."),(0,o.kt)("h2",{id:"getting-involved"},"Getting involved"),(0,o.kt)("p",null,"Would you like to help with QA testing? If so, please make sure you have created an account in the ",(0,o.kt)("a",{parentName:"p",href:"/general/development/tracker"},"Moodle tracker")," and you're subscribed to the ",(0,o.kt)("a",{parentName:"p",href:"https://moodle.org/mod/forum/view.php?id=56"},"Testing and QA forum")," in order to receive QA testing news updates."),(0,o.kt)("h2",{id:"running-tests"},"Running tests"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to the ",(0,o.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/secure/Dashboard.jspa?selectPageId=11454"},"Moodle QA testing dashboard")," and choose a test from the list of current QA cycle open issues. When viewing a test, if you wish, you can click the 'Assign to me' link on the right, so that nobody else chooses the same test to run. (If you then find you are unable to run the test, you can click the Assign button and set the assignee as 'Unassigned'.) Please note:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Only assign an issue to yourself which no one else is testing (Assignee = Unassigned)."),(0,o.kt)("li",{parentName:"ul"},"Only assign one issue at a time unless you plan to test a number of related issues within the next 24 hours. In other words, don't assign several issues to yourself then do nothing for several days. ;-)"),(0,o.kt)("li",{parentName:"ul"},"The label ",(0,o.kt)("inlineCode",{parentName:"li"},"test_server_required")," indicates issues that can't be tested on the QA testing site. The label ",(0,o.kt)("inlineCode",{parentName:"li"},"credentials_required")," indicates that credentials such as an OAuth 2 service client ID and secret are required."))),(0,o.kt)("li",{parentName:"ol"},"Using either the ",(0,o.kt)("a",{parentName:"li",href:"https://qa.moodledemo.net/"},"Moodle QA Testing Site")," or your own test site running the latest Moodle 4.0dev (available from Git on the integration/master branch git://git.moodle.org/integration.git) with ",(0,o.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/debugging"},"debugging")," set to developer, perform each of the steps listed in the test."),(0,o.kt)("li",{parentName:"ol"},"Please ",(0,o.kt)("em",{parentName:"li"},"attach screenshots of the steps where you verify or check something"),"."),(0,o.kt)("li",{parentName:"ol"},"If it makes sense, please test using the currently supported themes, Boost and Classic."),(0,o.kt)("li",{parentName:"ol"},"Choose an appropriate workflow action:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Pass"),' - Test runs perfectly. Add comment such as feedback about a new feature, browsers used for testing (if applicable; example: "This test passes on Q&A site with Teacher role using Boost theme"), or simply "This test passes - yippee!"'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Fail")," - Something doesn't work, or you obtain debugging messages. Add comment describing the step that doesn't work. If in doubt whether to pass a test, give it a fail and add a comment describing your doubts."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Obsolete")," - Test is no longer relevant in the current Moodle version. Add comment explaining why.")))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Out of date tests")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you notice that the test description is out-of-date, add a comment mentioning that it needs updating. Alternatively, if you'd like to help with updating the test yourself, see below."))),(0,o.kt)("h2",{id:"any-questions"},"Any questions?"),(0,o.kt)("p",null,"If there is anything you are unsure of, such as whether to mark a test as failed, or you have any other questions, please ask in one of the following places:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://t.me/moodleqa"},"Moodle QA Telegram chat room")," - To join the room for the first time, please use the ",(0,o.kt)("a",{parentName:"li",href:"https://t.me/+cXneE_ZeZ_A4ODRk"},"Moodle QA Telegram invite link"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/view.php?id=56"},"Testing and QA forum"))),(0,o.kt)("h2",{id:"moodle-qa-testing-site"},"Moodle QA Testing Site"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://qa.moodledemo.net/"},"Moodle QA Testing Site")," is updated daily at around 13:00 UTC with the latest bug fixes to enable you to re-run QA tests."),(0,o.kt)("p",null,"Credentials for Teacher and student accounts are provided on the login page."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"E-mail on the QA site")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"No e-mail will be sent from the QA server. Tests involving e-mail ",(0,o.kt)("strong",{parentName:"p"},"cannot")," be performed on the Moodle QA Testing Site."),(0,o.kt)("p",{parentName:"div"},"If you perform any test which tries to send e-mail, a debugging message will be displayed."))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Admin access")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you require admin access to the Moodle QA Testing Site for running certain tests, please ask in the ",(0,o.kt)("a",{parentName:"p",href:"https://t.me/moodleqa"},"Moodle QA Telegram chat room")," or the ",(0,o.kt)("a",{parentName:"p",href:"https://moodle.org/mod/forum/view.php?id=56"},"Testing and QA forum")," for someone to send you the account credentials via private message."))),(0,o.kt)("h2",{id:"failed-tests"},"Failed tests"),(0,o.kt)("p",null,"So you ran a test and it failed? Congratulations on finding a bug! Please do the following."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("inlineCode",{parentName:"li"},"Fail")," button at the top of the page."),(0,o.kt)("li",{parentName:"ol"},"Add a comment to the QA test stating that there was a problem and that you will report it as a Moodle bug."),(0,o.kt)("li",{parentName:"ol"},"Note the MDLQA number; it will be something like ",(0,o.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDLQA-448"},"MDLQA-448"),"."),(0,o.kt)("li",{parentName:"ol"},"Try searching for whether the bug has been reported previously, and if not create a new issue for it (as described in ",(0,o.kt)("a",{parentName:"li",href:"/general/development/tracker"},"Tracker introduction"),")."),(0,o.kt)("li",{parentName:"ol"},"In the new Moodle (MDL) issue select 'Link' from the 'More actions' dropdown menu.\nLinking to the QA issue in the tracker"),(0,o.kt)("li",{parentName:"ol"},"Link to the QA test by selecting 'blocks' as the link type, entering the MDLQA number that you noted earlier, and optionally adding a comment.\nAdding details for a link to the QA issue"),(0,o.kt)("li",{parentName:"ol"},"Give the issue the label ",(0,o.kt)("inlineCode",{parentName:"li"},"mdlqa"),"."),(0,o.kt)("li",{parentName:"ol"},"(Optional) Add yourself as a watcher to the MDL issue so that you receive email notification when the issue is fixed."),(0,o.kt)("li",{parentName:"ol"},"When the MDL issue is fixed, hopefully within a day or two, the QA test can be reset and can then be run again.")),(0,o.kt)("h2",{id:"resetting-tests"},"Resetting tests"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note for integrators")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"After integrating a fix:"),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Reset")," the MDLQA test, adding a comment."),(0,o.kt)("li",{parentName:"ol"},"Remove the ",(0,o.kt)("inlineCode",{parentName:"li"},"mdlqa")," label from the MDL issue."),(0,o.kt)("li",{parentName:"ol"},'If the issue doesn\'t have testing instructions, pass it with message "Will be tested by MDLQA-XXXX".')))),(0,o.kt)("p",null,"The tester will then receive email notification that the bug is fixed and will hopefully decide to run the test again soon."),(0,o.kt)("h2",{id:"fixing-existing-bugs"},"Fixing existing bugs"),(0,o.kt)("p",null,"At the beginning of the QA cycle, all bugs identified (both new and existing) are investigated promptly and hopefully fixed."),(0,o.kt)("p",null,"When we are close to the scheduled release date (1-2 weeks prior), developers must focus on fixing new bugs (which affect the upcoming release version) only."),(0,o.kt)("p",null,"Thus, at this point in the QA cycle, any bugs which also affect existing versions of Moodle are labelled ",(0,o.kt)("inlineCode",{parentName:"p"},"qa_identified")," (and the label ",(0,o.kt)("inlineCode",{parentName:"p"},"mdlqa")," removed) for investigation after the release."),(0,o.kt)("h2",{id:"testing-tips"},"Testing tips"),(0,o.kt)("p",null,"When entering text into a form, try things like:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"&")," (ampersand), ",(0,o.kt)("inlineCode",{parentName:"li"},">")," (greater than) or ",(0,o.kt)("inlineCode",{parentName:"li"},"<")," (less than)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"0")," (the single digit 0)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"'")," (single quote)"),(0,o.kt)("li",{parentName:"ul"},"special characters"),(0,o.kt)("li",{parentName:"ul"},"very long strings"),(0,o.kt)("li",{parentName:"ul"},"different languages, such as a RTL language")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"For example:")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre"},"x < 1 && x > 0\n")),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre"},"Fergal.O'Brien@example.com\n")),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre"},"caf\xe9\n")),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre"},"\u56f2\u7881\n")))),(0,o.kt)("h2",{id:"new-qa-tests-required"},"New QA tests required"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note for developers")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If an issue fix cannot be covered by automated tests,"),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},"Add the label ",(0,o.kt)("inlineCode",{parentName:"li"},"qa_test_required")," to the issue."),(0,o.kt)("li",{parentName:"ol"},"Add a comment explaining why it can't be covered by automated tests and suggesting which steps of the testing instructions should be included in a QA test e.g. steps 6-10 or all steps.")))),(0,o.kt)("p",null,"QA tests will then be written and included in the next QA cycle. For issues with long testing instructions, several QA tests will be written to cover the issue. If appropriate, activities etc. will be set up on the ",(0,o.kt)("a",{parentName:"p",href:"https://qa.moodledemo.net/"},"Moodle QA Testing Site")," to enable the issue to be easily tested in future."),(0,o.kt)("h3",{id:"new-features-and-improvements"},"New features, and improvements"),(0,o.kt)("p",null,"Where a new features or improvements would benefit from exploratory testing, you should:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add the label ",(0,o.kt)("inlineCode",{parentName:"li"},"qa_test_required")," to the issue."),(0,o.kt)("li",{parentName:"ol"},"Add a comment mentioning that exploratory testing is required.")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"When the next QA cycle is prepared, any issue with the ",(0,o.kt)("inlineCode",{parentName:"p"},"qa_test_required")," label will be reviewed and appropriate ",(0,o.kt)("strong",{parentName:"p"},"exploratory QA tests")," written, before the label is then removed."))),(0,o.kt)("h2",{id:"updating-tests"},"Updating tests"),(0,o.kt)("p",null,"QA tests may become out-of-date due to User Interface changes, feature changes, and new features. If you would like to help with updating tests, you'll need to be a member of the test writers group in the Tracker. Please contact Helen about being added."),(0,o.kt)("p",null,"To update a QA test original:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Search for the test in ",(0,o.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDLQA-1"},"MDLQA-1"),"."),(0,o.kt)("li",{parentName:"ol"},"Edit the test description.")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If a test in the current QA cycle is marked as failed because it is out-of-date, the description should be updated (as well as the test original) before resetting the test. If the test in the current QA cycle is marked as passed, then only the test original needs to be updated."))),(0,o.kt)("h2",{id:"writing-new-tests"},"Writing new tests"),(0,o.kt)("p",null,"Would you like to help with writing new QA tests? To write new QA tests you will need to be a member of the test writers group in the Tracker. Please contact Helen about being added."),(0,o.kt)("p",null,"QA tests are needed for any features which can't be tested with automated testing, such as connecting to an external system, drag and drop functionality or a CLI script. Also if it requires a person to detect if something is 'correct' vs. present/absent on the page."),(0,o.kt)("p",null,"In addition, new features can benefit from exploratory testing by community volunteers."),(0,o.kt)("p",null,"To create a new QA test:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"If appropriate, do a quick search of ",(0,o.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDLQA-1"},"MDLQA-1")," to check if there is an existing test which can be updated."),(0,o.kt)("li",{parentName:"ol"},"If not, in ",(0,o.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDLQA-1"},"MDLQA-1")," from the More menu select 'Create sub-task'."),(0,o.kt)("li",{parentName:"ol"},"Enter a summary such as 'A teacher can ...'."),(0,o.kt)("li",{parentName:"ol"},"Select 'Original' as affected version and select appropriate components."),(0,o.kt)("li",{parentName:"ol"},"In the description field add the test steps (usually between 3 and 10), similar to the issue's ",(0,o.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Testing_instructions_guide"},"testing instructions"),", starting with 'Log in as a teacher...' or similar. It's a good idea to try doing the steps yourself as you write the test."),(0,o.kt)("li",{parentName:"ol"},"Start some steps with 'Verify that ...' or similar."),(0,o.kt)("li",{parentName:"ol"},"Click the Create button."),(0,o.kt)("li",{parentName:"ol"},"Go to the MDL issue and create a \u2018has a QA test\u2019 link to the new QA test, adding a comment \u201cThis feature is now covered by the QA test MDLQA....\u201d.")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"Add the label ",(0,o.kt)("inlineCode",{parentName:"li"},"new")),(0,o.kt)("li",{parentName:"ul"},"For tests which can\u2019t be run on the QA testing site, such as ones where you need to check an email, label ",(0,o.kt)("inlineCode",{parentName:"li"},"test_server_required"),"."),(0,o.kt)("li",{parentName:"ul"},"For OAuth 2 tests and any other tests which require a client ID or secret to be entered, label ",(0,o.kt)("inlineCode",{parentName:"li"},"credentials_required"),"."),(0,o.kt)("li",{parentName:"ul"},"For issues which specifically mention in the testing instructions to test in different browsers, use the phrase:")),(0,o.kt)("blockquote",{parentName:"div"},(0,o.kt)("p",{parentName:"blockquote"},"Test in as many browsers as possible and mention in a comment which ones you\u2019ve used.")),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"For an exploratory test, begin the test description with:")),(0,o.kt)("blockquote",{parentName:"div"},(0,o.kt)("p",{parentName:"blockquote"},"This is an exploratory test of a new feature or improvement, so please feel free to try anything you like and not just the test steps!")),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"For a test requiring admin access which can be run on the QA site, add:")),(0,o.kt)("blockquote",{parentName:"div"},(0,o.kt)("p",{parentName:"blockquote"},"This test requires admin access. If you would like to use the ","[QA testing site|https://qa.moodledemo.net/]"," for running it, please see the ","[QA testing guide|https://docs.moodle.org/dev/QA_testing]"," for details of how to request admin access. Begin just after the hourly reset to give yourself plenty of time to complete the test!")))),(0,o.kt)("h2",{id:"feedback"},"Feedback"),(0,o.kt)("p",null,"Feedback on all aspects of our QA testing process is welcome."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you have any questions or comments, please post in the ",(0,o.kt)("a",{parentName:"p",href:"https://moodle.org/mod/forum/view.php?id=56"},"Testing and QA forum"),"."))),(0,o.kt)("h2",{id:"previous-qa-cycles"},"Previous QA cycles"),(0,o.kt)("p",null,"Comments on tests from previous QA cycles:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDLQA-150"},"Moodle 2.0 QA Cycle 1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDLQA-328"},"Moodle 2.0 QA Cycle 2")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDLQA-540"},"Moodle 2.0.2 QA")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDLQA-944"},"Moodle 2.1 QA")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDLQA-1190"},"Moodle 2.2 QA")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDLQA-1814"},"Moodle 2.3 QA")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDLQA-4602"},"Moodle 2.4 QA")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDLQA-5267"},"Moodle 2.5 QA")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDLQA-5740"},"Moodle 2.6 QA")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDLQA-6693"},"Moodle 2.7 QA")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDLQA-7170"},"Moodle 2.8 QA")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDLQA-7660"},"Moodle 2.9 QA")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDLQA-8205"},"Moodle 3.0 QA")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDLQA-9267"},"Moodle 3.1 QA")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDLQA-9827"},"Moodle 3.2 QA")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDLQA-10403"},"Moodle 3.3 QA")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDLQA-10999"},"Moodle 3.4 QA")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDLQA-11698"},"Moodle 3.5 QA")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDLQA-12282"},"Moodle 3.6 QA")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDLQA-12911"},"Moodle 3.7 QA")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDLQA-13517"},"Moodle 3.8 QA")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDLQA-14131"},"Moodle 3.9 QA")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDLQA-14813"},"Moodle 3.10 QA")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDLQA-15457"},"Moodle 3.11 QA")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDLQA-16122"},"Moodle 4.0 QA"))),(0,o.kt)("h2",{id:"see-also"},"See also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/secure/Dashboard.jspa?selectPageId=11454"},"QA testing dashboard")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Testing_credits"},"Testing credits")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=351302"},"Useful tips for QA testing"))))}h.isMDXComponent=!0}}]);