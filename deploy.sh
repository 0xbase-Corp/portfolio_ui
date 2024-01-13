#!/bin/bash
cd /home/ubuntu/portfolio_ui 
git pull origin main
npm install &&
npm run build &&
pm2 restart  
