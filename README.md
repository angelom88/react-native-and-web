# install all dependencies:
* npm install
# start ios
* react-native run-ios 
![ios Demo](https://github.com/jacy/react-native-and-web/blob/master/doc/ios.png)
# reload ios
* In simulator, Press COMMAND + D -> Select 'Reload'
# start web
* npm run web_start
![web Demo](https://github.com/jacy/react-native-and-web/blob/master/doc/web.png)
# start android
* react-native run-android
![android Demo](https://github.com/jacy/react-native-and-web/blob/master/doc/android.png)
# reload android
* In simulator, Press COMMAND + M -> Select 'Reload'
---------------------------------------------
# package.json Create order:

# 1. install react native 
npm install -g react-native-cli

# 2. init native projects
react-native init ReactNativeWeb

# 3. install react-scripts for web
npm install react-scripts --save-dev

# 4. add web_xxx scripts to package.json
	  "web_start": "react-scripts start",
		"web_build": "react-scripts build",
		"web_test": "react-scripts test --env=jsdom",
		"web_eject": "react-scripts eject"
