crontab -l > ./cron.backup
cat ./cron.backup >> ./rig_alert.crontab
crontab < $HOME/rig-alert/rig_alert.crontab
