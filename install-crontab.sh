crontab -l > cron.backup
cron.backup >> rig-alert.crontab
crontab < $HOME/rig-alert/rig-alert.crontab
