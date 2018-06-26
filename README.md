# rig-alert

```
git clone https://github.com/wattflare/rig-alert.git
cd rig-alert
npm install
node check_rig_status.js
```
### Install as crontab
Edit `rig-alert.sh` and `rig-alert.crontab` to change file path. By default cron runs every 5 minutes.
Run this to install cronjob
`crontab git push -u origin master`
