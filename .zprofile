# Fig pre block. Keep at the top of this file.
[[ -f "$HOME/.fig/shell/zprofile.pre.zsh" ]] && builtin source "$HOME/.fig/shell/zprofile.pre.zsh"
alias w="cd ~/work/web"
alias p="cd ~/work/web/patients"
alias ss="w && yarn storybook:server"
alias r="git pull --rebase origin develop"
alias cz="code ~/.zprofile"
alias sz="source ~/.zprofile"
alias yp="p && yarn start:devft"
alias yb="yarn turbo:build:mock"
alias s3="node ~/work/web/tools/s3.js"
alias yjcw="yarn jest:coverage:watch"
alias gpf="git push --force"
alias amend="git add . && git commit --amend --no-edit"
alias clearcache='sudo killall -HUP mDNSResponder'
alias soft='git reset --soft HEAD~1' #be careful
alias mock='yarn turbo:build:mock && s3 -b'
alias terraform='~/terraform'
export TURBO_TOKEN="149291ee-31c0-45f9-9b4a-a93080c29deb"
export GITLAB_TOKEN="bM4EXacHTPJsL-CRJ3ok"
export JAVA_HOME="/Library/Java/JavaVirtualMachines/amazon-corretto-11.jdk/Contents/Home"




export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"


eval "$(/opt/homebrew/bin/brew shellenv)"
# Add Visual Studio Code (code)
export PATH="$PATH:/Applications/Visual Studio Code.app/Contents/Resources/app/bin"


# Fig post block. Keep at the bottom of this file.
[[ -f "$HOME/.fig/shell/zprofile.post.zsh" ]] && builtin source "$HOME/.fig/shell/zprofile.post.zsh"