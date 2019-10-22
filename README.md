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
0,10,20,30,40,50 * * * * . /home/aaaaninja/.bashrc && cd $beteru_path && echo -e "$(node index.js)\t$(date -Iminutes)" >> $HOME/beteru
```

#### output format
```
91.5 2019-10-21T23:00+09:00
91.5 2019-10-21T23:10+09:00
91.5 2019-10-21T23:20+09:00
91.5 2019-10-21T23:30+09:00
91.5 2019-10-21T23:40+09:00
91.5 2019-10-21T23:50+09:00
91 2019-10-22T00:00+09:00
91 2019-10-22T00:10+09:00
91 2019-10-22T00:20+09:00
91 2019-10-22T00:30+09:00
91 2019-10-22T00:40+09:00
91 2019-10-22T00:50+09:00
91 2019-10-22T01:00+09:00
```
