# rig-alert

```
git clone https://github.com/wattflare/rig-alert.git
cd rig-alert
npm install
node check_rig_status.js
```
### Install as crontab
Edit `rig-alert.sh` and `rig-alert.crontab` to change file path. By default cron runs every 15 minutes.
#### For easy installation run the following command
`chmod +x install-crontab.sh` Makes the script executable  
`./install-crontab.sh` Appends cronjob to existing crontab  
