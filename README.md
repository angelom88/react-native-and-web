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
