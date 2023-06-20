# Summary
  

# Required softwere

---

* NodeJS 19.1.x
* npm 8.19.x
  
# Installation

---
```
npm install
```
# Zip file

```
zip -r deploy.zip ./
```

# upload to lambda

```
aws lambda update-function-code --function-name {{function_name}} --zip-file fileb://deploy.zip
```