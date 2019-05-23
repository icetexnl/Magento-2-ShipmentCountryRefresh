# ShipmentCountryRefresh
Refresh Magento 2 shipping methods 

This module let's you refresh the shipping methods when the customer edits some fields during checkout.

Status module:
Currently working on Magento 2.2.5

**PLEASE NOTE:**<br />
Only tested on Magento 2.2.5

**COPYRIGHT:**
Licensed under CC-BY-SA

How to install:
Just download the files and add it to /app/code/. 
After that, insert some command lines:
1. bin/magento module:enable Icetex_ShipmentCountryRefresh
2. bin/magento setup:upgrade
3. Only if neccesary: bin/magento setup:di:compile
4. bin/magento setup:static-content:deploy
5. bin/magento indexer:reindex
6. bin/magento cache:clean
