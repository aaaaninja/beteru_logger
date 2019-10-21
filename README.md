beteru_logger
================================================================================

installtion
----------------------------------------
### clone this repository && exec `yarn`
```sh
git clone https://github.com/aaaaninja/beteru_logger.git
cd beteru_logger && yarn # install puppeteer
```

how to use
----------------------------------------
### cli
```
node index.js
```

### cron
```
0,10,20,30,40,50 * * * * . $HOME/.bashrc && cd $beteru_path && echo $(node index.js) $(date -Iminutes) >> $HOME/beteru
```
