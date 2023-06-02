# WebRouter

Web Router

## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files using the command line](https://docs.gitlab.com/ee/gitlab-basics/add-file.html#add-a-file-using-the-command-line) or push an existing Git repository with the following command:

```
cd existing_repo
git remote add origin https://gitlab.com/l1654/rdb/webrouter.git
git branch -M main
git push -uf origin main
```

## Integrate with your tools

- [ ] [Set up project integrations](https://gitlab.com/l1654/rdb/webrouter/-/settings/integrations)

## Collaborate with your team

- [ ] [Invite team members and collaborators](https://docs.gitlab.com/ee/user/project/members/)
- [ ] [Create a new merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
- [ ] [Automatically close issues from merge requests](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically)
- [ ] [Enable merge request approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)
- [ ] [Automatically merge when pipeline succeeds](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html)

## Test and Deploy

Use the built-in continuous integration in GitLab.

- [ ] [Get started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/index.html)
- [ ] [Analyze your code for known vulnerabilities with Static Application Security Testing(SAST)](https://docs.gitlab.com/ee/user/application_security/sast/)
- [ ] [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://docs.gitlab.com/ee/topics/autodevops/requirements.html)
- [ ] [Use pull-based deployments for improved Kubernetes management](https://docs.gitlab.com/ee/user/clusters/agent/)
- [ ] [Set up protected environments](https://docs.gitlab.com/ee/ci/environments/protected_environments.html)

***

# Editing this README

When you're ready to make this README your own, just edit this file and use the handy template below (or feel free to structure it however you want - this is just a starting point!).  Thank you to [makeareadme.com](https://www.makeareadme.com/) for this template.

## Suggestions for a good README
Every project is different, so consider which of these sections apply to yours. The sections used in the template are suggestions for most open source projects. Also keep in mind that while a README can be too long and detailed, too long is better than too short. If you think your README is too long, consider utilizing another form of documentation rather than cutting out information.

## Name
Choose a self-explaining name for your project.

## Description
Let people know what your project can do specifically. Provide context and add a link to any reference visitors might be unfamiliar with. A list of Features or a Background subsection can also be added here. If there are alternatives to your project, this is a good place to list differentiating factors.

## Badges
On some READMEs, you may see small images that convey metadata, such as whether or not all the tests are passing for the project. You can use Shields to add some to your README. Many services also have instructions for adding a badge.

## Visuals
Depending on what you are making, it can be a good idea to include screenshots or even a video (you'll frequently see GIFs rather than actual videos). Tools like ttygif can help, but check out Asciinema for a more sophisticated method.

## Installation
Within a particular ecosystem, there may be a common way of installing things, such as using Yarn, NuGet, or Homebrew. However, consider the possibility that whoever is reading your README is a novice and would like more guidance. Listing specific steps helps remove ambiguity and gets people to using your project as quickly as possible. If it only runs in a specific context like a particular programming language version or operating system or has dependencies that have to be installed manually, also add a Requirements subsection.

## Usage
Use examples liberally, and show the expected output if you can. It's helpful to have inline the smallest example of usage that you can demonstrate, while providing links to more sophisticated examples if they are too long to reasonably include in the README.

## Support
Tell people where they can go to for help. It can be any combination of an issue tracker, a chat room, an email address, etc.

## Roadmap
If you have ideas for releases in the future, it is a good idea to list them in the README.

## Contributing
State if you are open to contributions and what your requirements are for accepting them.

For people who want to make changes to your project, it's helpful to have some documentation on how to get started. Perhaps there is a script that they should run or some environment variables that they need to set. Make these steps explicit. These instructions could also be useful to your future self.

You can also document commands to lint the code or run tests. These steps help to ensure high code quality and reduce the likelihood that the changes inadvertently break something. Having instructions for running tests is especially helpful if it requires external setup, such as starting a Selenium server for testing in a browser.

## Authors and acknowledgment
Show your appreciation to those who have contributed to the project.

## License
For open source projects, say how it is licensed.

## Project status
If you have run out of energy or time for your project, put a note at the top of the README saying that development has slowed down or stopped completely. Someone may choose to fork your project or volunteer to step in as a maintainer or owner, allowing your project to keep going. You can also make an explicit request for maintainers.

## [ BACKEND SET-UP ]( https://xgengroup.atlassian.net/wiki/spaces/XGEN/pages/5079041/Project+Set+up ) 
Backend is consists of a number of modules including Web router,  Auth, LOS service, Decision Engine, Workflow, Utility, etc. Each module has its own duty. And each module is kept in a separate repository.

So, In here the core and starter module will be the web router.  Therefore first we need to clone the web router.

once clones the web-router repository, switch to the required branch,

- [ ]   Go to the scripts folder and run the install.bat file to set up all other required modules.

- [ ]   When it is done, you can run the start.bat then the server will be started. (Note: modules will be cloned from GitLab the branch provided in the config/config.js file. if you want to clone a different branch, then you can edit it. (do not include any additional spaces)

- [ ]   Later, if you want to get a specific module change from git, just run that specific bat file, then the project environment will be updated with the new pull changes. ( e.g if you want to get auth module change where your teammate has committed,  you just need to run auth-module-install.bat file.

### Accessing Modules
- [ ]   First, get the utility module. This is the module that gives access to communicate with other modules

- [ ]   When the application is starting, all the modules will be registered inside the utility module shared store, so that every module can be accessed through the utility module.

- [ ]   There will be separate stores for each and every module which are not shared across the modules (E.g AuthStore, DecisionEngineStore, etc.)

- [ ]   In order to access the utility module from another module, that module should keep a reference to the utility module. This process will be done when the module initializes and keep the reference in its own store (E.g AuthStore, DecisionEngineStore, etc.). you just need to access it.

example:
Let's say that we want to call some method in los service from auth module

1). First, get the utility module

```
 const utilityModule = AuthStore.getModule(sharedModuleKey);
 // in here, ( sharedModuleKey = 'utility',  utility module is pointed to this key in AuthStore)
```

2). Then, the los service module

```
 const losModule = utilityModule.Modules.getModule(utilityModule.SharedConfigs.modules.los);
// in here, los module will get through utility module
// utilityModule.SharedConfigs.modules.los is equvalent to 'los' which is the key holding los service module)
```

3). Call for the required method

```
 const utilityModule = AuthStore.getModule(sharedModuleKey);
 // in here, ( sharedModuleKey = 'utility',  utility module is pointed to this key in AuthStore)
```
### Data Saving and Sharing
We initially request master data from each module. these master data will be shared across the module by saving them in a store in a utility module. ( since utility module is sharable across all modules)

Other data which are no need shared, will be kept in its own stores.

Note:  Master data requests are handled in each module inside special two functions which are preInitialize and postInitialize. These two methods will be called from the framework in each module when initializing the application. So if there are any tasks to do before the application starts this is the place to go.

#### Internal Store

```
get data : AuthStore.getData('obj2');
set data : AuthStore.setData('obj2', sampleData);
```
#### Shared Data
As you already know, shared data will be handled through a utility module.  with that, it is able to set and get shared data like MasterData, environment config, system config, etc.

```
const utilityModule = AuthStore.getModule(sharedModuleKey);

utilityModule.MasterData.setMasterData(moduleKeys.los, { data: "new master data for LOS" })
console.log(utilityModule.MasterData.getMasterData(moduleKeys.los))
// { data: "new master data for LOS" }
```

