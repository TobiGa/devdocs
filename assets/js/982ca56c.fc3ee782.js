"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[90427],{3020:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return n},metadata:function(){return p},toc:function(){return u}});var a=r(83117),o=r(80102),s=(r(67294),r(3905)),l=r(13904),i=["components"],n={title:"Moodle 2.8.6",tags:["Release notes","Moodle 2.8"],sidebar_position:6,moodleVersion:"2.8.6"},d=void 0,p={unversionedId:"releases/2.8/2.8.6",id:"releases/2.8/2.8.6",title:"Moodle 2.8.6",description:"Release date: Monday, 11th May 2015",source:"@site/general/releases/2.8/2.8.6.md",sourceDirName:"releases/2.8",slug:"/releases/2.8/2.8.6",permalink:"/devdocs/general/releases/2.8/2.8.6",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/2.8/2.8.6.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 2.8",permalink:"/devdocs/general/tags/moodle-2-8"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1654654119,formattedLastUpdatedAt:"08/06/2022",sidebarPosition:6,frontMatter:{title:"Moodle 2.8.6",tags:["Release notes","Moodle 2.8"],sidebar_position:6,moodleVersion:"2.8.6"},sidebar:"releaseNotes",previous:{title:"Moodle 2.8.5",permalink:"/devdocs/general/releases/2.8/2.8.5"},next:{title:"Moodle 2.8.7",permalink:"/devdocs/general/releases/2.8/2.8.7"}},m={},u=[{value:"Highlights",id:"highlights",level:2},{value:"Functional changes",id:"functional-changes",level:2},{value:"UI changes",id:"ui-changes",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Translations",id:"translations",level:2}],c={toc:u};function h(e){var t=e.components,r=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(l.Z,(0,a.Z)({frontMatter:n},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: Monday, 11th May 2015"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%222.8.6%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 2.8.6"),"."),(0,s.kt)("h2",{id:"highlights"},"Highlights"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49573"},"MDL-49573")," - Fixed bulk insert in SingleView report in Gradebook."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49575"},"MDL-49575"),' - When "unoverriding" a score in SingleView report, it now also clears the finalgrade field'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-48187"},"MDL-48187")," - Fixed problem with new items automatically marked as extra credit in SWM category in Gradebook"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-42449"},"MDL-42449")," - Grade category is preserved when duplicating a module"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-46746"},"MDL-46746"),", ",(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-47003"},"MDL-47003"),", ",(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-47002"},"MDL-47002")," - Atto editor HTML cleaning is less aggressive and more aware of special tags, especially noticeable when pasting text from Word"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-48002"},"MDL-48002"),' - Strip quoted text from "reply by email" forum posts')),(0,s.kt)("h2",{id:"functional-changes"},"Functional changes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-45619"},"MDL-45619")," - It is possible to uninstall repositories"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-37984"},"MDL-37984")," - Switch Google Docs portfolio plugin to use the new Google lib (API EOL)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-47337"},"MDL-47337")," - Fixed restore with Merge for courses in formats that have section options"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49114"},"MDL-49114")," - Added env check for slashargument support (as warning only for now)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49359"},"MDL-49359")," - Warn regarding MyISAM usage"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49256"},"MDL-49256")," - Atto can (again) be used outside of form - fixed regression introduced by draft autosaving")),(0,s.kt)("h2",{id:"ui-changes"},"UI changes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-43558"},"MDL-43558"),' - Removed empty "Edit" dropdown when "Activity Editing Menu" is set to OFF'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-39262"},"MDL-39262")," - Removed collapsed/expanded controls in Lesson module"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49296"},"MDL-49296")," - Added tooltips to lesson edit icons"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49977"},"MDL-49977")," - Added page title on assignment bulk setting pages"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49848"},"MDL-49848")," - Messaging page made responsive")),(0,s.kt)("h2",{id:"security-issues"},"Security issues"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=313681"},"MSA-15-0018")," Quiz manual-grading is an XSS risk, but does not declare that"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=313682"},"MSA-15-0019")," Possible phishing when redirecting to external site using referer header"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=313683"},"MSA-15-0020")," User fullname disclosure through account confirmation link"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=313684"},"MSA-15-0021")," Any authenticated user can subscribe to site-wide event monitor rules"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=313685"},"MSA-15-0022")," Potential XSS risk when returning text entered by student from Web Services"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=313686"},"MSA-15-0023")," Suspended user is able to login when confirming email"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=313687"},"MSA-15-0024")," User with suspended enrolment can see sections in the navigation tree"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=313688"},"MSA-15-0025")," Capability to manage own files is not respected in Web Services")),(0,s.kt)("h2",{id:"fixes-and-improvements"},"Fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-44548"},"MDL-44548"),", ",(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-47729"},"MDL-47729")," - SCORM modules added from file system repo are now properly updating when file/s replaced in repo."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-21201"},"MDL-21201")," - Feedback no longer shows Anonymous responses in Recent Activity Reports"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49281"},"MDL-49281")," - Fixed bug with gradebook calculations becoming uneditable after upgrade"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49227"},"MDL-49227")," - Make forum subscription combinations less confusing with different combinations (backport of ",(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-48221"},"MDL-48221"),")"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-48572"},"MDL-48572")," - Grade categories calculate correctly when suspended users are present"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-48419"},"MDL-48419")," - Scorm network check made less agressive"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-36506"},"MDL-36506")," - Book module no longer throws exceptions during upgrade if module is not found"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-34921"},"MDL-34921")," - With MyMoodle as default home, moving items on Site Home no longer redirects to MyMoodle page"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49281"},"MDL-49281")," - Gradebook calculations cannot be edited after upgrade"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-38210"},"MDL-38210")," - Fixed error when running participation report for Workshop activity"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49669"},"MDL-49669")," - Fixed error when connecting to external backpack (badges)."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-46805"},"MDL-46805")," - Scorm is able to use AICC even when usernames in Moodle contain charachters like @"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-48702"},"MDL-48702")," - Improve course log export resource consumption and reliability (backport of ",(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-34867"},"MDL-34867"),")"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49641"},"MDL-49641")," - Optimised syncing shortcuts to external files")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_2.8.6"},"Notes de mise \xe0 jour de Moodle 2.8.6")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_2.8.6"},"Notas de Moodle 2.8.6"))))}h.isMDXComponent=!0}}]);